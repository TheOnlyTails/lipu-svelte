/// <reference types="unplugin-icons/types/svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			closest?: string[];
		}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
