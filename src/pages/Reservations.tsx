// src/pages/Contact.tsx
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BG_IMAGE = "/src/assets/photos/contact/FoContact.webp";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjkagayj";  // <-- REEMPLAZA por tu endpoint

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phone, setPhone] = useState(""); // E.164 (+502...)

  const today = new Date().toISOString().split("T")[0]; // fecha mínima (opcional)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;

    // 1) Validaciones nativas: required, type="email", minLength, min...
    if (!form.checkValidity()) {
      form.reportValidity(); // muestra mensajes del navegador
      setStatus("idle");
      return;
    }

    // 2) Validación simple de teléfono si el usuario lo llenó (opcional)
    if (phone && !/^\+[1-9]\d{7,14}$/.test(phone)) {
      setStatus("error");
      setErrorMsg("Invalid phone number. Use +country code and number (e.g., +502 5555 5555).");
      return;
    }

    const data = new FormData(form);
    data.set("phone", phone); // mandamos el teléfono en E.164 a Formspree

    // Honeypot anti-spam
    if ((data.get("company") as string)?.length) {
      setStatus("ok");
      form.reset();
      setPhone("");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
        setPhone("");
      } else {
        const j = await res.json().catch(() => ({}));
        setErrorMsg(j?.errors?.[0]?.message || "We couldn’t submit the form. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="relative w-full min-h-[80vh]">
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <LazyLoadImage
          src={BG_IMAGE}
          alt=""
          effect="blur"
          className="w-full h-full object-cover"
          wrapperClassName="w-full h-full"
        />
        {/* capa sutil para legibilidad si la foto es muy clara */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-2xl mx-4 md:mx-0 bg-[#F0EAE7]/95 backdrop-blur rounded-2xl md:rounded-3xl shadow-xl border border-black/5">
          <div className="px-6 md:px-10 py-7 md:py-9">
            <h1 className="text-2xl md:text-[28px] font-semibold text-center tracking-tight text-gray-900 font-montserrat">
              Event Quote Request
            </h1>

            {/* Formulario */}
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Honeypot oculto */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

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
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                  title="Please enter a valid email (e.g., name@domain.com)."
                  onInvalid={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("Please enter a valid email (e.g., name@domain.com).")}
                  onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
                  autoComplete="email"
                  placeholder="name@domain.com"
                />
              </Field>

              {/* Phone con selector de país (mismo look que tb-input) */}
              <Field label="Phone">
                <div className="w-full">
                  <PhoneInput
                    defaultCountry="gt"
                    value={phone}
                    onChange={setPhone}
                    className="tb-phone tb-input flex items-center gap-2"
                    inputClassName="!bg-transparent !border-0 !ring-0 !outline-none !shadow-none !p-0 flex-1"
                    placeholder="Ej. +502 5555 5555"
                    // preferredCountries={['gt','mx','us','sv','hn','cr']} // opcional
                  />
                  {/* También lo enviamos como campo hidden para Formspree */}
                  <input type="hidden" name="phone" value={phone} />
                </div>
              </Field>

              {/* Nationality */}
              <Field label="Nationality">
                <input className="tb-input" name="nationality" />
              </Field>

              {/* Event type */}
              <Field label="Event type">
                <select className="tb-input" name="eventType" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Wedding</option>
                  <option>Engagement / Proposal</option>
                  <option>Brunch / Private event</option>
                  <option>Baby Shower</option>
                  <option>Other</option>
                </select>
              </Field>

              {/* Fecha (mínimo hoy, opcional) */}
              <Field label="Approximate Event Date">
                <input className="tb-input" type="date" name="date" min={today} />
              </Field>

              {/* Message */}
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

              {/* Extras para el correo */}
              <input type="hidden" name="_subject" value="Nueva solicitud de cotización" />
              <input type="hidden" name="_template" value="table" />

              {/* Botón */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1f2e3a] text-white tracking-wide text-sm md:text-base shadow hover:opacity-95 disabled:opacity-60"
                >
                  {status === "sending" ? "SENDING…" : "SUBMIT"}
                </button>
              </div>

              {/* Mensajes */}
              {status === "ok" && <p className="text-green-700 text-sm text-center">Thank you! We received your request.</p>}
              {status === "error" && <p className="text-red-600 text-sm text-center">Oops: Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sub-componente para etiqueta + control */
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
