declare global {
	interface Window {
		webkit?: {
			messageHandlers: {
				ScanCode?: {
					postMessage: (message: string) => void;
				};
				GetAppleHealthStatus?: {
					postMessage: (message: unknown) => void;
				};
			};
		};
	}
}

export {};

declare module '@careevolution/mydatahelps-ui' {
	export const Layout: any;
	export const Card: any;
	export const LoadingIndicator: any;
	export const TextBlock: any;
	export const Label: any;
	export const Button: any;
	const _default: any;
	export default _default;
}
