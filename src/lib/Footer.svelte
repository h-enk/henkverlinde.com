<script>
	import { variables } from '$lib/variables';
</script>

<footer>
	<p>
		<a href="https://twitter.com/{variables.twitter}" target="_blank" rel="noopener"
			>🐤 Twitter</a
		>
		<a href={variables.github} target="_blank" rel="noopener">😺 GitHub</a>
		<!-- <a href="/rss.xml" rel="external">📰 RSS</a> -->
		<a href={variables.linkedin} target="_blank" rel="noopener">🏢 LinkedIn</a>
	</p>
	<p>
		Built with <a
			href="https://github.com/codexfelis/paws-template"
			target="blank"
			rel="noopener">🐾</a
		>
		by
		<a href="https://codexfelis.dev" target="_blank" rel="noopener">Codex Felis</a>.
		<a sveltekit:reload href="/privacy">This website does not use cookies 🍪</a>
	</p>
</footer>

<style>
	footer {
		width: 100%;
		margin-top: auto;
		margin-bottom: var(--space-narrow);

		text-align: center;
	}
	p,
	a {
		font-size: 90%;
		text-decoration: none;
		margin-bottom: 0;
	}

	a:hover,
	a:focus {
		text-decoration: underline;
	}
</style>
