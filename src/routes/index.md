<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const res = await fetch(`/posts.json`);
		const posts = await res.json();

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Seo from '$lib/Seo.svelte';
	import BlogSummary from '$lib/BlogSummary.svelte';
	import { variables } from '$lib/variables';
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('$lib/obfuscate-email.js');
	});
	export let posts;

	const postsToShow = 3;
	$: blogPosts = posts.slice(0, postsToShow);
</script>

<!-- TODO UPDATE THE SEO INFO -->
<Seo title="Henk Verlinde" description={variables.siteDescription} path="/" openGraphImage="OGExample.png"/>

# Henk Verlinde

<p class=emph>
Simple and easy to use tools for making your digital business great.
</p>

## Tools

Check out [Hyas](/tools/hyas), a Hugo starter helping you build modern websites, [Doks](/tools/doks), a modern documentation theme for Hugo, and [SRI Generator](/tools/sri-generator/), a Subresource Integrity (SRI) Generator.

## Say hi

If you have any questions, feel free to contact me at <a class="eml-protected" href="/">85ede0e9e9eac5ede0ebeef3e0f7e9ecebe1e0abe6eae8</a>. Follow me on [Twitter](https://twitter.com/henkverlinde), [LinkedIn](https://www.linkedin.com/in/henkverlinde/), and [GitHub](https://github.com/h-enk).

<!--
<a class=emph href="/blog/initial-setup">
Get started!
</a>
-->

## [Recent blog posts](/blog)

{#each blogPosts as blogPost}
<BlogSummary {blogPost} />
{/each}
