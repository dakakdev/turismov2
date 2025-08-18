import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../chunks/astro/server_BtM94VyJ.mjs';
import { $ as $$Headers, a as $$Layout } from '../chunks/Headers_BaQEvW83.mjs';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

const supabaseUrl = "https://sykehrnuvlfvaelarskn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5a2Vocm51dmxmdmFlbGFyc2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4NjMzMTksImV4cCI6MjA3MDQzOTMxOX0.MzHxdc9-N_g-zTqVDMe7-Wy1VsOyVpeGotH7BSloDfs";
const supabase = createClient(supabaseUrl, supabaseKey);

const $$Astro = createAstro("https://mannytoursrd.com/");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const PAGE_SIZE = 12;
  const pageParam = Number(Astro2.url.searchParams.get("page") ?? 1);
  const { data: files, error } = await supabase.storage.from("gallery").list("", {
    limit: 1e3,
    sortBy: { column: "created_at", order: "desc" }
  });
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp", "svg"];
  const videoExtensions = ["mp4", "webm", "mov", "avi", "mkv", "ogg"];
  const media = (files || []).filter((file) => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    return ext && (imageExtensions.includes(ext) || videoExtensions.includes(ext));
  }).map((file) => {
    const { data } = supabase.storage.from("gallery").getPublicUrl(file.name);
    const ext = file.name.split(".").pop()?.toLowerCase();
    const isVideo = ext && videoExtensions.includes(ext);
    return {
      id: file.name,
      src: data.publicUrl,
      title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
      description: `${isVideo ? "Video" : "Image"} uploaded on ${new Date(file.created_at).toLocaleDateString()}`,
      created_at: file.created_at,
      type: isVideo ? "video" : "image",
      extension: ext
    };
  });
  const total = media.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const from = (pageParam - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE;
  const paginatedMedia = media.slice(from, to);
  const hasNext = pageParam < totalPages;
  const hasPrev = pageParam > 1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headers", $$Headers, {})} ${maybeRenderHead()}<section class="section-padding bg-gradient-ocean-light min-h-screen"> <div class="max-w-6xl mx-auto px-4"> <div class="text-center mb-8 fade-in-up"> <h1 class="text-4xl md:text-5xl font-bold mb-3 text-gradient">
Gallery
</h1> <p class="text-lg text-muted-foreground">
Photos and videos from your Caribbean adventures in the Dominican
          Republic.
</p> </div> ${error && renderTemplate`<div class="card-ocean p-6 rounded-2xl mb-8"> <p class="text-red-600 font-semibold">Media could not be loaded.</p> <p class="text-sm opacity-80">Error: ${error.message}</p> </div>`} ${(!paginatedMedia || paginatedMedia.length === 0) && !error && renderTemplate`<div class="card-ocean p-8 rounded-2xl text-center"> <p class="text-lg">No media yet.</p> <p class="text-sm opacity-80 mt-1">
Upload images and videos to your 'gallery' storage bucket in
              Supabase.
</p> </div>`} ${paginatedMedia && paginatedMedia.length > 0 && renderTemplate`<div id="gallery-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10"> ${paginatedMedia.map((item, i) => renderTemplate`<div class="gallery-item group relative overflow-hidden rounded-xl sm:rounded-2xl shadow card-ocean cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 aspect-square"${addAttribute(i, "data-index")}${addAttribute(item.src, "data-src")}${addAttribute(item.title, "data-title")}${addAttribute(item.description, "data-description")}${addAttribute(item.type, "data-type")} tabindex="0" role="button"${addAttribute(`Open ${item.title}`, "aria-label")}> ${item.type === "video" ? renderTemplate`<div class="relative w-full h-full"> <video${addAttribute(item.src, "src")} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" muted preload="metadata"></video> <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"> <div class="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"> <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z"></path> </svg> </div> </div> </div>` : renderTemplate`<img${addAttribute(item.src, "src")}${addAttribute(item.title, "alt")} loading="lazy" decoding="async" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">`} <div class="absolute inset-x-0 bottom-0 p-2 sm:p-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white"> <div class="text-xs sm:text-sm font-semibold line-clamp-1 drop-shadow-sm"> ${item.type === "video" && renderTemplate`<span class="inline-block mr-1">🎥</span>`} ${item.title} </div> </div> </div>`)} </div>`} ${totalPages > 1 && renderTemplate`<div class="flex items-center justify-center gap-3 mb-16"> ${hasPrev ? renderTemplate`<a${addAttribute(`?${new URLSearchParams({ page: String(pageParam - 1) }).toString()}`, "href")} class="px-4 py-2 rounded-xl border bg-white/70 hover:bg-white transition">
Previous
</a>` : renderTemplate`<span class="px-4 py-2 rounded-xl border opacity-40 select-none">
Previous
</span>`} <span class="px-4 py-2 rounded-xl card-ocean"> ${pageParam} / ${totalPages} </span> ${hasNext ? renderTemplate`<a${addAttribute(`?${new URLSearchParams({ page: String(pageParam + 1) }).toString()}`, "href")} class="px-4 py-2 rounded-xl border bg-white/70 hover:bg-white transition">
Next
</a>` : renderTemplate`<span class="px-4 py-2 rounded-xl border opacity-40 select-none">
Next
</span>`} </div>`} </div> <!-- Modal Lightbox --> <div id="lightbox" class="fixed inset-0 z-[9999] bg-black/60 bg-opacity-80 hidden items-center justify-center p-2 sm:p-4"> <div class="relative w-full max-w-6xl max-h-[95vh] flex flex-col"> <!-- Header bar --> <div class="flex items-center justify-between mb-2 sm:mb-4 z-30"> <!-- Counter --> <div class="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/60 text-white rounded-full text-xs sm:text-sm font-medium"> <span id="counter">1 / 1</span> </div> <!-- Close button --> <button id="close-btn" class="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors text-xl sm:text-2xl" aria-label="Close"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg> </button> </div> <!-- Media container --> <div class="flex-1 flex items-center justify-center relative min-h-0"> <img id="lightbox-img" src="" alt="" class="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-2xl hidden"> <video id="lightbox-video" src="" class="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-2xl hidden" controls preload="metadata"></video> <!-- Navigation buttons --> <button id="prev-btn" class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg z-20 text-lg sm:text-xl" aria-label="Previous"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M5 12l4 4"></path><path d="M5 12l4 -4"></path></svg> </button> <button id="next-btn" class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg z-20 text-lg sm:text-xl" aria-label="Next"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg> </button> </div> <!-- Footer with title and description - HIDDEN --> <div class="mt-2 sm:mt-4 text-white z-30 hidden"> <h3 id="lightbox-title" class="text-base sm:text-xl font-bold mb-1 line-clamp-2"></h3> <p id="lightbox-desc" class="text-xs sm:text-sm opacity-90 line-clamp-2"></p> </div> </div> </div> </section>  ${renderScript($$result2, "C:/Users/elias/Dev/Turismo_Original/src/pages/gallery.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/elias/Dev/Turismo_Original/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/elias/Dev/Turismo_Original/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
