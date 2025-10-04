import { useEffect, useRef, useState } from "react";

type Props = {
  /** Miniatura optimizada (thumb) para el grid */
  thumbSrc: string;
  /** Imagen grande (opcional). Si no se pasa, usa la miniatura */
  fullSrc?: string;
  /** Alternativos opcionales */
  alt?: string;
  caption?: string;

  /** Clases para la miniatura (contenedor img) */
  className?: string;

  /** Responsive (thumb) */
  thumbSrcSet?: string;
  thumbSizes?: string; // ej: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"

  /** Responsive (full) */
  fullSrcSet?: string;
  fullSizes?: string;

  /** Prefetch al pasar el mouse (default: true) */
  preloadOnHover?: boolean;
};

export default function ImageModal({
  thumbSrc,
  fullSrc,
  alt,
  caption,
  className,
  thumbSrcSet,
  thumbSizes = "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
  fullSrcSet,
  fullSizes,
  preloadOnHover = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const [fullReady, setFullReady] = useState(false);
  const [loadingFull, setLoadingFull] = useState(false);
  const preloadedRef = useRef(false);

  const big = fullSrc || thumbSrc; // fallback si no pasas fullSrc

  // Pre-carga del full al hover o al abrir
  const preloadFull = () => {
    if (preloadedRef.current || loadingFull || fullReady) return;
    setLoadingFull(true);
    const img = new Image();
    if (fullSrcSet) img.srcset = fullSrcSet;
    if (fullSizes) img.sizes = fullSizes!;
    img.onload = () => {
      preloadedRef.current = true;
      setFullReady(true);
      setLoadingFull(false);
    };
    img.onerror = () => setLoadingFull(false);
    img.src = big;
  };

  // Cerrar con ESC + bloquear scroll cuando está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Miniatura (thumb) */}
      <img
            src={thumbSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            sizes={thumbSizes}
            srcSet={thumbSrcSet}
            className={`cursor-zoom-in rounded-md shadow-sm hover:opacity-90 transition ${className ?? ""}`}
            onClick={() => { if (!preloadedRef.current) preloadFull(); setOpen(true); }}
            onMouseEnter={() => { if (preloadOnHover) preloadFull(); }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = fullSrc || thumbSrc; }} 
        />


      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-[92vw] max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mientras carga la full, mostramos la thumb escalada (blur) */}
            {!fullReady && (
              <img
                src={thumbSrc}
                alt={alt}
                className="max-w-full max-h-[85vh] rounded-lg opacity-90 blur-[1px]"
                decoding="async"
                fetchPriority="auto"
              />
            )}

            {/* Imagen Full (se monta cuando está lista para evitar parpadeo) */}
            {fullReady && (
              <img
                src={big}
                alt={alt}
                sizes={fullSizes}
                srcSet={fullSrcSet}
                className="max-w-full max-h-[85vh] rounded-lg shadow-lg"
                decoding="async"
                fetchPriority="high"
              />
            )}

            {/* Loader discreto */}
            {loadingFull && !fullReady && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
              </div>
            )}

            {caption && (
              <div className="mt-3 text-center text-sm text-white/90">{caption}</div>
            )}

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white text-xl leading-none"
              aria-label="Close"
              title="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
