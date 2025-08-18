const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

function showToast(type, title, description) {
  if (!toast) return;

  // Reset classes
  toast.className = "";
  toast.classList.add("mb-4", "rounded-md", "p-3", "text-sm", "w-full");

  // Mensaje
  toast.textContent = description ? `${title} — ${description}` : title;

  // Estilos según tipo
  if (type === "error") {
    toast.classList.add(
      "bg-red-500/10",
      "text-red-600",
      "border",
      "border-red-200"
    );
  } else {
    toast.classList.add(
      "bg-emerald-500/10",
      "text-emerald-700",
      "border",
      "border-emerald-200"
    );
  }

  // Mostrar
  toast.classList.remove("hidden");
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!form) return;
  const fd = new FormData(form);

  // Validaciones mínimas
  const name = fd.get("name")?.toString().trim();
  const email = fd.get("email")?.toString().trim();
  const message = fd.get("message")?.toString().trim();
  const phone = fd.get("phone")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    showToast("error", "Error", "Please fill out all required fields");
    return;
  }

  try {
    const res = await fetch("https://formspree.io/f/mvgqzqlq", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: fd,
    });

    if (!res.ok) {
      let detail = "";
      try {
        const data = await res.json();
        detail = data?.errors?.[0]?.message ?? "";
      } catch {}
      throw new Error(detail || "Message could not be sent");
    }

    form.reset();
    showToast(
      "ok",
      "Message sent!",
      "We’ll contact you soon to plan your adventure"
    );
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : "Please try again in a few minutes";
    showToast("error", "Sending error", msg);
  }
});
