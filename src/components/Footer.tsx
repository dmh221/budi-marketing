export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Budi Character */}
        <div className="flex justify-center mb-16">
          <img
            src="/assets/logo_budi-lime_icon_transparent.svg"
            alt="Budi"
            className="w-64 h-auto"
          />
        </div>

        {/* Footer Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <nav className="flex items-center gap-6">
            <a
              href="mailto:hello@budi.app"
              className="text-secondary hover:text-black transition-colors uppercase tracking-wide"
            >
              EMAIL
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-black transition-colors uppercase tracking-wide"
            >
              LINKEDIN
            </a>
            <a
              href="#about"
              className="text-secondary hover:text-black transition-colors uppercase tracking-wide"
            >
              ABOUT
            </a>
          </nav>

          <div className="text-secondary">
            © {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
}
