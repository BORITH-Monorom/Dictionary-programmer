

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ae2aed2a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.14d3feb7.js"];
export const stylesheets = ["_app/immutable/assets/2.10f20880.css"];
export const fonts = [];
