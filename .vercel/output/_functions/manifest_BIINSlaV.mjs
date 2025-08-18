import { p as decodeKey } from './chunks/astro/server_BtM94VyJ.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_hwPgSaZh.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/elias/Dev/Turismo_Original/","cacheDir":"file:///C:/Users/elias/Dev/Turismo_Original/node_modules/.astro/","outDir":"file:///C:/Users/elias/Dev/Turismo_Original/dist/","srcDir":"file:///C:/Users/elias/Dev/Turismo_Original/src/","publicDir":"file:///C:/Users/elias/Dev/Turismo_Original/public/","buildClientDir":"file:///C:/Users/elias/Dev/Turismo_Original/dist/client/","buildServerDir":"file:///C:/Users/elias/Dev/Turismo_Original/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.12.9_@types+node@24_57dedc3838ed2877a0f6376b8e069a13/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.BR6uqGi6.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/gallery.BR6uqGi6.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://mannytoursrd.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/elias/Dev/Turismo_Original/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["C:/Users/elias/Dev/Turismo_Original/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.12.9_@types+node@24_57dedc3838ed2877a0f6376b8e069a13/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BIINSlaV.mjs","C:/Users/elias/Dev/Turismo_Original/node_modules/.pnpm/astro@5.12.9_@types+node@24_57dedc3838ed2877a0f6376b8e069a13/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ttjsa5ya.mjs","C:/Users/elias/Dev/Turismo_Original/src/pages/gallery.astro?astro&type=script&index=0&lang.ts":"_astro/gallery.astro_astro_type_script_index_0_lang.DMFQ4jiE.js","C:/Users/elias/Dev/Turismo_Original/src/components/ContactSection.astro?astro&type=script&index=0&lang.ts":"_astro/ContactSection.astro_astro_type_script_index_0_lang.DCVaoYHZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/elias/Dev/Turismo_Original/src/pages/gallery.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){console.log(\"Gallery script loaded\"),document.getElementById(\"gallery-grid\");const i=document.getElementById(\"lightbox\"),s=document.getElementById(\"lightbox-img\"),e=document.getElementById(\"lightbox-video\"),h=document.getElementById(\"lightbox-title\"),b=document.getElementById(\"lightbox-desc\"),x=document.getElementById(\"counter\"),r=document.getElementById(\"close-btn\"),g=document.getElementById(\"prev-btn\"),u=document.getElementById(\"next-btn\"),c=document.querySelectorAll(\".gallery-item\");let l=0;console.log(\"Found gallery items:\",c.length);function d(t){console.log(\"Opening lightbox for index:\",t),l=t;const n=c[l];if(!n)return;const o=n.getAttribute(\"data-src\"),y=n.getAttribute(\"data-title\"),v=n.getAttribute(\"data-description\"),L=n.getAttribute(\"data-type\");h.textContent=y||\"Untitled\",b.textContent=v||\"\",x.textContent=`${l+1} / ${c.length}`,L===\"video\"?(s.classList.add(\"hidden\"),e.classList.remove(\"hidden\"),e.src=o,e.load()):(e.classList.add(\"hidden\"),s.classList.remove(\"hidden\"),s.src=o,s.alt=y||\"Image\"),i.classList.remove(\"hidden\"),i.classList.add(\"flex\"),document.body.style.overflow=\"hidden\"}function a(){console.log(\"Closing lightbox\"),i.classList.add(\"hidden\"),i.classList.remove(\"flex\"),document.body.style.overflow=\"\",e.paused||e.pause()}function m(){e.pause(),e.currentTime=0;const t=l===0?c.length-1:l-1;d(t)}function f(){e.pause(),e.currentTime=0;const t=l===c.length-1?0:l+1;d(t)}c.forEach((t,n)=>{t.addEventListener(\"click\",function(o){o.preventDefault(),console.log(\"Gallery item clicked:\",n),d(n)}),t.addEventListener(\"keydown\",function(o){(o.key===\"Enter\"||o.key===\" \")&&(o.preventDefault(),d(n))})}),r&&r.addEventListener(\"click\",a),g&&g.addEventListener(\"click\",m),u&&u.addEventListener(\"click\",f),document.addEventListener(\"keydown\",function(t){if(!i.classList.contains(\"hidden\"))switch(t.key){case\"Escape\":a();break;case\"ArrowLeft\":m();break;case\"ArrowRight\":f();break;case\" \":e.classList.contains(\"hidden\")||(t.preventDefault(),e.paused?e.play():e.pause());break}}),i.addEventListener(\"click\",function(t){t.target===i&&a()}),console.log(\"Gallery initialized successfully\")});"],["C:/Users/elias/Dev/Turismo_Original/src/components/ContactSection.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"contact-form\"),t=document.getElementById(\"toast\");function d(n,e,s){t&&(t.className=\"\",t.classList.add(\"mb-4\",\"rounded-md\",\"p-3\",\"text-sm\",\"w-full\"),t.textContent=s?`${e} — ${s}`:e,n===\"error\"?t.classList.add(\"bg-red-500/10\",\"text-red-600\",\"border\",\"border-red-200\"):t.classList.add(\"bg-emerald-500/10\",\"text-emerald-700\",\"border\",\"border-emerald-200\"),t.classList.remove(\"hidden\"))}a?.addEventListener(\"submit\",async n=>{if(n.preventDefault(),!a)return;const e=new FormData(a),s=e.get(\"name\")?.toString().trim(),i=e.get(\"email\")?.toString().trim(),m=e.get(\"message\")?.toString().trim();if(e.get(\"phone\")?.toString().trim(),!s||!i||!m){d(\"error\",\"Error\",\"Please fill out all required fields\");return}try{const r=await fetch(\"https://formspree.io/f/mvgqzqlq\",{method:\"POST\",headers:{Accept:\"application/json\"},body:e});if(!r.ok){let o=\"\";try{o=(await r.json())?.errors?.[0]?.message??\"\"}catch{}throw new Error(o||\"Message could not be sent\")}a.reset(),d(\"ok\",\"Message sent!\",\"We’ll contact you soon to plan your adventure\")}catch(r){const o=r instanceof Error?r.message:\"Please try again in a few minutes\";d(\"error\",\"Sending error\",o)}});"]],"assets":["/_astro/gallery.BR6uqGi6.css","/icons/apple-touch-icon.png","/icons/favicon-96x96.png","/icons/favicon.ico","/icons/favicon.svg","/icons/site.webmanifest","/icons/web-app-manifest-192x192.png","/icons/web-app-manifest-512x512.png","/images/240.jpg","/images/2633.jpg","/images/Logo_Manny_Tours.webp","/images/Manny_Tours_Team.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"X1Wx957h2HRr5TKXxCpPqzpgT1XS6CJcKxph0CRbM+w="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
