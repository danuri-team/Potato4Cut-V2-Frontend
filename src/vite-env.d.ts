/// <reference types="vite/client" />

declare module '~icons/*' {
  import { SvelteComponent } from 'svelte';
  export default class extends SvelteComponent<any> {}
}
