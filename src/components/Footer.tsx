// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#e9ddd8]">
      <div className="py-10">
        <div className="flex items-center justify-center gap-5">
          <span className="uppercase tracking-[0.2em] text-lg md:text-xl font-semibold text-black">
            The Brunch Club
          </span>

          <div className="flex items-center gap-3">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@brunchclub_gt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex w-8 h-8 items-center justify-center rounded-full text-black hover:bg-black hover:text-white transition-colors"
              title="@brunchclub_gt"
            >
              <i className="fab fa-tiktok text-base"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/brunchclub_gt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex w-8 h-8 items-center justify-center rounded-md text-black hover:bg-black hover:text-white transition-colors"
              title="@brunchclub_gt"
            >
              <i className="fab fa-instagram text-base"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} The Brunch Club
      </div>
    </footer>
  );
}


