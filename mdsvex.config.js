import readingTime from 'remark-reading-time';
import slugPlugin from 'rehype-slug';

export const mdsvexConfig = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [readingTime()],
	rehypePlugins: [slugPlugin],
	layout: {
		blog: './src/lib/BlogLayout.svelte',
		tools: './src/lib/Tool.svelte'
	}
};
