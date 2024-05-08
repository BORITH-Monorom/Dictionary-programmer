export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1x/decorative-hero-section.png","banner-01.jpg","decorative-hero-section-01.png","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/site.webmanifest","sitemap.xml","styles/reset.css","styles/style.css","SVG/decorative-hero-section.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json",".xml":"application/xml",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.d884b698.js","app":"_app/immutable/entry/app.d6c3b430.js","imports":["_app/immutable/entry/start.d884b698.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.2d3114fd.js","_app/immutable/entry/app.d6c3b430.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.14d3feb7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
