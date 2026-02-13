
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/project" | "/project/[projectId]" | "/[skillId]";
		RouteParams(): {
			"/project/[projectId]": { projectId: string };
			"/[skillId]": { skillId: string }
		};
		LayoutParams(): {
			"/": { projectId?: string; skillId?: string };
			"/project": { projectId?: string };
			"/project/[projectId]": { projectId: string };
			"/[skillId]": { skillId: string }
		};
		Pathname(): "/" | "/project" | "/project/" | `/project/${string}` & {} | `/project/${string}/` & {} | `/${string}` & {} | `/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/CV_ELANKEETHAN_Kirushikesan_BUT1.pdf" | "/favicon.png" | string & {};
	}
}