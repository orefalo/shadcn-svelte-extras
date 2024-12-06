import type { Writable } from 'svelte/store';
import Code from './code.svelte';
import { shiki } from './shiki';
import { type BundledLanguage, type HighlighterGeneric, type BundledTheme } from 'shiki';

export type HighlighterStore = Writable<
	HighlighterGeneric<BundledLanguage, BundledTheme> | undefined
>;

export { Code, shiki };