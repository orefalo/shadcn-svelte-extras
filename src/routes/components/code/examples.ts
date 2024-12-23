import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import NoLineNumbers from './no-line-numbers.svelte';
import noLineNumbersRaw from './no-line-numbers.svelte?raw';
import Variants from './variants.svelte';
import variantsRaw from './variants.svelte?raw';
import HighlightLines from './highlight-lines.svelte';
import highlightLinesRaw from './highlight-lines.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	noLineNumbers: {
		code: noLineNumbersRaw,
		Component: NoLineNumbers
	},
	variants: {
		code: variantsRaw,
		Component: Variants
	},
	highlightLines: {
		code: highlightLinesRaw,
		Component: HighlightLines
	},
	providerCode: `\<script lang="ts"\>
	import { ShikiProvider } from '$lib/components/ui/code';
	// ...
\</script\>

\<ShikiProvider\>
		{@render children()}
\</ShikiProvider\>`,
	cssCode: `@layer utilities {
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	
	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
}`
};

export { examples };
