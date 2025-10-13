// src/pages/Contact.tsx
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BG_IMAGE = "/src/assets/photos/contact/FoContact.webp";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjkagayj";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phone, setPhone] = useState("");

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;

    const phoneNorm = normalizePhone(phone);

    // Validaciones nativas
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("idle");
      return;
    }

    // Validación simple de teléfono si lo llenaron

    // Tomamos los valores que nos interesan
    const formData = new FormData(form);

    // Si hay honeypot, abortar silenciosamente
    if ((formData.get("_gotcha") as string)?.trim().length) {
      setStatus("ok");
      form.reset();
      setPhone("");
      return;
    }

    // Normalizamos datos: limpiamos vacíos y preparamos name y phone
    const firstName = (formData.get("firstName") as string || "").trim();
    const lastName  = (formData.get("lastName") as string || "").trim();
    const email     = (formData.get("email") as string || "").trim();
    const message   = (formData.get("message") as string || "").trim();

    // Requeridos mínimos
    if (!firstName || !email || !message) {
      setStatus("idle");
      setErrorMsg("Please complete first name, email and message.");
      return;
    }

    // Construimos "name" para el correo
    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    // Limpiamos el FormData (eliminamos campos vacíos)
    for (const [key, value] of Array.from(formData.entries())) {
      if (typeof value === "string" && value.trim() === "") {
        formData.delete(key);
      }
    }

    // Forzamos phone y name “limpios”
    formData.set("phone", phone || "");


    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      // Formspree suele devolver JSON con { ok: true } en 200/201
      const payload = await res
        .json()
        .catch(() => ({} as any));

      if (res.ok && (payload?.ok ?? true)) {
        setStatus("ok");
        form.reset();
        setPhone("");
      } else {
        // Mostramos más detalle para depurar
        const firstErrorMsg = payload?.errors?.[0]?.message;
        setErrorMsg(
          firstErrorMsg
            ? `(${res.status}) ${payload?.type || "form-error"}: ${firstErrorMsg}`
            : `(${res.status}) We couldn’t submit the form. Please try again.`
        );
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="relative w-full min-h-[80vh]">
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt=""
          loading='eager'
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-2xl mx-4 md:mx-0 bg-[#F0EAE7]/95 backdrop-blur rounded-2xl md:rounded-3xl shadow-xl border border-black/5">
          <div className="px-6 md:px-10 py-7 md:py-9">
            <h1 className="text-2xl md:text-[28px] font-semibold text-center tracking-tight text-gray-900 font-montserrat">
              Event Quote Request
            </h1>

            {/* Importante: action/method como fallback */}
            <form
              className="mt-6 space-y-4"
              onSubmit={handleSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
              noValidate
            >
              {/* Honeypot oculto estándar */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              {/* First/Last */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="First name" required>
                  <input
                    className="tb-input"
                    name="firstName"
                    required
                    minLength={2}
                    onInvalid={(e) =>
                      (e.currentTarget as HTMLInputElement).setCustomValidity(
                        "Please enter your first name (minimum 2 characters)."
                      )
                    }
                    onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
                  />
                </Field>

                <Field label="Last name">
                  <input className="tb-input" name="lastName" />
                </Field>
              </div>

              {/* Email */}
              <Field label="Email" required>
                <input
                  className="tb-input email-input"
                  type="email"
                  name="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                  placeholder="name@event.com"
                  onInvalid={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("Please enter a valid email (e.g., name@domain.com).")}
                  onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone">
                <div className="w-full">
                  <PhoneInput
                    defaultCountry="gt"
                    value={phone}
                    onChange={setPhone}
                    className="tb-phone tb-input flex items-center gap-2"
                    inputClassName="!bg-transparent !border-0 !ring-0 !outline-none !shadow-none !p-0 flex-1"
                    placeholder="Ej. +502 5555 5555"
                  />
                  <input type="hidden" name="phone" value={normalizePhone(phone)} />

                </div>
              </Field>

              <Field label="Nationality">
                <input className="tb-input" name="nationality" />
              </Field>

              <Field label="Event type">
                <select className="tb-input" name="eventType" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Weddings</option>
                  <option>Weddings destination</option>
                  <option>Social events</option>
                  <option>Corporate events</option>
                  <option>Other</option>
                </select>
              </Field>

              <Field label="Approximate event date">
                <input className="tb-input" type="date" name="date" min={today} />
              </Field>

              <Field label="Message" required>
                <textarea
                  className="tb-input h-28 resize-none"
                  name="message"
                  required
                  minLength={10}
                  onInvalid={(e) =>
                    (e.currentTarget as HTMLTextAreaElement).setCustomValidity(
                      "Please tell us a bit about your event (minimum 10 characters)."
                    )
                  }
                  onInput={(e) => (e.currentTarget as HTMLTextAreaElement).setCustomValidity("")}
                />
              </Field>

              {/* Extras para el correo (opcionales, no deberían romper) */}
              <input type="hidden" name="_subject" value="Nueva solicitud de cotización" />
              <input type="hidden" name="_template" value="table" />

              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1f2e3a] text-white tracking-wide text-sm md:text-base shadow hover:opacity-95 disabled:opacity-60"
                >
                  {status === "sending" ? "SENDING…" : "SUBMIT"}
                </button>
              </div>

              {status === "ok" && <p className="text-green-700 text-sm text-center">Thank you! We received your request.</p>}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Sorry: Something went wrong. {errorMsg ? <><br/>{errorMsg}</> : "Please try again."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

  function normalizePhone(p: string) {
  const digits = p.replace(/\D/g, "");        // quita espacios, guiones, paréntesis
  if (!digits) return "";
  // Como defaultCountry="gt", si no trae “+”, asumimos +502
  return p.trim().startsWith("+") ? `+${digits}` : `+502${digits}`;
      }

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] text-gray-700">
        {label} {required && <span className="align-super text-[11px] text-gray-600 absolute mx-1">(required)</span>}
      </span>
      {children}
    </label>
  );



}
