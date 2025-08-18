import { f as createComponent, m as maybeRenderHead, r as renderTemplate, u as unescapeHTML, e as createAstro, l as renderScript, k as renderComponent } from '../chunks/astro/server_BtM94VyJ.mjs';
import { a as $$Layout, $ as $$Headers } from '../chunks/Headers_BaQEvW83.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" style="background-image: url(/images/2633.jpg);"> <div class="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div> </div> <!-- Content --> <div class="relative z-10 flex items-center justify-center h-full"> <div class="text-center text-white px-4 max-w-4xl mx-auto"> <h1 class="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
Discover the
<span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600">
Caribbean Paradise
</span> </h1> <p class="text-xl md:text-2xl mb-8 fade-in-up opacity-90">
Live unique experiences in the Dominican Republic with Manny Tours RD
</p> <!-- Styled Button with Caribbean Paradise colors --> <a href="https://wa.me/18093539262?text=Hello%2C%20I%20would%20like%20to%20get%20more%20information%20about%20tourism%20services%20in%20the%20Dominican%20Republic." target="_blank" rel="noopener noreferrer" class="inline-block transform cursor-pointer px-8 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-transform duration-300">
Book Your Adventure
</a> </div> </div> <!-- Floating Elements --> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"> <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center"> <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div> </div> </div> </section>`;
}, "C:/Users/elias/Dev/Turismo_Original/src/components/HeroSection.astro", void 0);

const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="About" class="px-10 py-10 bg-gradient-ocean-soft scroll-mt-20"> <div class="max-w-6xl mx-auto"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <!-- Text --> <div class="fade-in-up"> <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gradient">
About Us
</h2> <p class="text-lg mb-6 text-muted-foreground leading-relaxed">
With over 10 years of experience, Manny Tours RD is your perfect
          companion to explore the wonders of the Dominican Republic. We
          specialize in creating authentic experiences that connect our guests
          with the culture, nature, and traditions of the Dominican people.
</p> <p class="text-lg mb-8 text-muted-foreground leading-relaxed">
Our team of passionate local guides will take you to discover unique
          places, from the most beautiful beaches to the most fascinating
          historical corners of our beautiful island.
</p> <!-- Cards --> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"> <div class="card-ocean p-4 min-h-[100px] flex flex-col justify-center"> <div class="text-2xl md:text-3xl font-bold text-primary mb-1">
500+
</div> <div class="text-xs md:text-sm text-muted-foreground break-words">
Tours Completed
</div> </div> <div class="card-ocean p-4 min-h-[100px] flex flex-col justify-center"> <div class="text-2xl md:text-3xl font-bold text-accent mb-1">
98%
</div> <div class="text-xs md:text-sm text-muted-foreground break-words">
Satisfaction Rate
</div> </div> <div class="card-ocean p-4 min-h-[100px] flex flex-col justify-center"> <div class="text-2xl md:text-3xl font-bold text-primary mb-1">
10+
</div> <div class="text-xs md:text-sm text-muted-foreground break-words">
Years of Experience
</div> </div> </div> </div> <!-- Image --> <div class="fade-in-up float-animation"> <img src="/images/Manny_Tours_Team.jpg" alt="Manny Tours RD tour guide" class="rounded-2xl shadow-2xl w-full h-96 object-cover max-sm:h-56"> </div> </div> </div> </section>`;
}, "C:/Users/elias/Dev/Turismo_Original/src/components/AboutSection.astro", void 0);

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>`,
      title: "Excursions Across the Dominican Republic",
      description: "Discover the beauty and diversity of the Dominican Republic with our excursions to the country's most stunning destinations.",
      features: ["Paradise beaches", "Colonial cities", "Eco-adventures"]
    },
    {
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" /><path d="M16 5l1.5 7l4.5 0" /><path d="M2 10l15 0" /><path d="M7 5l0 5" /><path d="M12 5l0 5" /></svg>`,
      title: "Premium Transportation",
      description: "Travel comfortably and safely in our air-conditioned vehicles.",
      features: ["Modern Vehicles", "Professional Drivers", "24/7 Service"]
    },
    {
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-ripple"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" /><path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" /><path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" /></svg>`,
      title: "Vehicle Rentals",
      description: "Experience the thrill of the Caribbean with our premium vehicle rental services.",
      features: ["Jet Ski Rentals", "Four-Wheeler Rentals", "Boat Rentals"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="Services" class="px-10 py-10 bg-background scroll-mt-20"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16 fade-in-up"> <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gradient">
Our Services
</h2> <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
We offer a wide range of tourism services designed to make your visit an
        unforgettable experience
</p> </div> <div class="grid md:grid-cols-3 gap-8 mb-16"> ${services.map((service) => renderTemplate`<div class="card-ocean p-8 text-center fade-in-up"> <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full mb-6">${unescapeHTML(service.icon)}</div> <h3 class="text-2xl font-bold mb-4 text-foreground"> ${service.title} </h3> <p class="text-muted-foreground mb-6 leading-relaxed"> ${service.description} </p> <ul class="space-y-2"> ${service.features.map((feature) => renderTemplate`<li class="text-sm text-primary font-medium">✓ ${feature}</li>`)} </ul> </div>`)} </div> </div> </section>`;
}, "C:/Users/elias/Dev/Turismo_Original/src/components/ServicesSection.astro", void 0);

const $$GallerySection = createComponent(($$result, $$props, $$slots) => {
  const galleryItems = [
    { title: "Punta Cana", description: "White sand beaches" },
    { title: "Saona Island", description: "Crystal-clear waters" },
    { title: "Whale Watching", description: "Humpback whales" },
    { title: "Adventure", description: "Zipline and ecotourism" },
    { title: "Culture", description: "Dance and traditions" },
    { title: "Gastronomy", description: "Authentic flavors" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="px-10 py-10 bg-gradient-ocean-light"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16 fade-in-up"> <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gradient">
Experience Gallery
</h2> <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
Discover the magical moments our guests have experienced exploring the
        Dominican Republic
</p> </div> <!-- Main Gallery Image --> <div class="fade-in-up mb-12"> <div class="relative rounded-2xl overflow-hidden shadow-2xl"> <!-- Option A (optimized) --> <img src="/images/240.jpg" alt="Experience gallery in the Dominican Republic" class="w-full h-96 md:h-[500px] object-cover" sizes="(max-width: 768px) 100vw, 1200px" loading="lazy"> <!-- Option B (simple): <img src={galleryCollage.src} alt="..." class="w-full h-96 md:h-[500px] object-cover" /> --> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> <div class="absolute bottom-8 left-8 text-white"> <h3 class="text-2xl md:text-3xl font-bold mb-2">
Unforgettable Experiences
</h3> <p class="text-lg opacity-90">Every tour is a new adventure</p> </div> </div> </div> <!-- Gallery Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${galleryItems.map((item, index) => renderTemplate`<div class="card-ocean p-6 text-center fade-in-up"> <div class="w-12 h-12 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center"> <span class="text-white font-bold text-lg">${index + 1}</span> </div> <h3 class="text-xl font-bold mb-2 text-foreground">${item.title}</h3> <p class="text-muted-foreground">${item.description}</p> </div>`)} </div> <!-- Call to Action --> <div class="text-center mt-16 fade-in-up"> <div class="card-ocean p-8 inline-block"> <h3 class="text-2xl font-bold mb-4 text-foreground">
Ready for your next adventure?
</h3> <p class="text-muted-foreground mb-6">
Contact us and let’s design your perfect experience together
</p> <a href="/gallery" class="px-8 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-transform duration-300 inline-block text-center" aria-label="View more photos in our gallery">
More Photos
</a> </div> </div> </div> </section>`;
}, "C:/Users/elias/Dev/Turismo_Original/src/components/GallerySection.astro", void 0);

const $$Astro = createAstro("https://mannytoursrd.com/");
const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  return renderTemplate`${maybeRenderHead()}<section id="Contact" class="px-10 py-10 bg-gradient-neutral scroll-mt-20"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16 fade-in-up"> <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gradient">
Contact Us
</h2> <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
We are here to make your dream trip a reality. Get in touch with us and
        let’s start planning your Caribbean adventure.
</p> </div> <div class="grid lg:grid-cols-2 gap-12 items-start"> <!-- Contact Form --> <div class="card-ocean p-8 fade-in-up h-fit rounded-2xl shadow"> <h3 class="text-2xl font-bold mb-6 text-foreground">
Send Us a Message
</h3> <form id="contact-form" class="space-y-6" method="POST" action="https://formspree.io/f/mvgqzqlq"> <div> <input name="name" placeholder="Your full name" class="h-12 w-full rounded-md border border-border bg-background px-4 outline-none focus:ring-2" required> </div> <div> <input name="email" type="email" placeholder="your@email.com" class="h-12 w-full rounded-md border border-border bg-background px-4 outline-none focus:ring-2" required> </div> <div> <input name="phone" type="tel" placeholder="Your phone number" class="h-12 w-full rounded-md border border-border bg-background px-4 outline-none focus:ring-2"> </div> <div> <textarea name="message" placeholder="Tell us about your ideal trip..." class="min-h-[120px] w-full rounded-md border border-border bg-background p-4 outline-none focus:ring-2" required></textarea> </div> <div id="toast" class="hidden"></div> <button class="cursor-pointer px-8 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-transform duration-300" type="submit">
Send Message
</button> </form> </div> <!-- Contact Info --> <div class="fade-in-up h-fit"> <div class="space-y-8"> <div class="card-ocean p-6 rounded-2xl shadow"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 flex-shrink-0 bg-gradient-ocean rounded-full flex items-center justify-center"> <!-- MapPin --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path> </svg> </div> <div> <h4 class="font-semibold text-foreground">Location</h4> <p class="text-muted-foreground">
Santo Domingo, Dominican Republic
</p> </div> </div> </div> <div class="card-ocean p-6 rounded-2xl shadow"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center"> <!-- Phone --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg> </div> <div> <h4 class="font-semibold text-foreground">Phone</h4> <p class="text-muted-foreground">+1 (809) 353-9262</p> </div> </div> </div> <div class="card-ocean p-6 rounded-2xl shadow"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center"> <!-- Mail --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg> </div> <div> <h4 class="font-semibold text-foreground">Email</h4> <a href="mailto:mannytoursrd@gmail.com" class="text-muted-foreground">mannytoursrd@gmail.com</a> </div> </div> </div> <!-- Social Media --> <div class="card-ocean p-6 rounded-2xl shadow"> <h4 class="font-semibold text-foreground mb-4">Social Media</h4> <div class="flex space-x-4"> <a href="https://web.facebook.com/mannytours" target="_blank" aria-label="Facebook" class="w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center hover:scale-110 transition-transform"> <!-- Facebook --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg> </a> <a href="https://www.instagram.com/mannytoursrd/" target="_blank" aria-label="Instagram" class="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"> <!-- Instagram --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg> </a> <a href="https://wa.me/18093539262?text=Hello%2C%20I%20would%20like%20to%20get%20more%20information%20about%20tourism%20services%20in%20the%20Dominican%20Republic." target="_blank" aria-label="WhatsApp" class="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"> <!-- Whatsapp --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg> </a> </div> </div> <div class="card-ocean p-6 rounded-2xl shadow"> <h4 class="font-semibold text-foreground mb-4">Visit Us</h4> <div class="relative w-full aspect-video rounded-xl border border-border overflow-hidden shadow-sm"> <iframe title="Manny Tours location on Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.297634238529!2d-69.8844376!3d18.470172700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89d57f67a6e9%3A0x484e6a631042a890!2sManny%20Tours!5e0!3m2!1ses!2sdo!4v1755027748588!5m2!1ses!2sdo" class="absolute inset-0 w-full h-full" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen>
              </iframe> </div> </div> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/elias/Dev/Turismo_Original/src/components/ContactSection.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "C:/Users/elias/Dev/Turismo_Original/src/components/ContactSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "min-h-screen" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headers", $$Headers, {})} ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "AboutSection", $$AboutSection, {})} ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} ${renderComponent($$result2, "GallerySection", $$GallerySection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/elias/Dev/Turismo_Original/src/pages/index.astro", void 0);

const $$file = "C:/Users/elias/Dev/Turismo_Original/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
