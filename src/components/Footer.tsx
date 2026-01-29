export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-black mb-4">Company</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="/privacy" className="text-secondary hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-secondary hover:text-black transition-colors">
                Terms of Service
              </a>
              <a href="/about" className="text-secondary hover:text-black transition-colors">
                About
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-medium text-black mb-4">Connect</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@budi.app"
                className="text-secondary hover:text-black transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </nav>
          </div>

          {/* Logo */}
          <div className="flex justify-start md:justify-end">
            <img
              src="/assets/logo_budi-lime_icon_transparent.svg"
              alt="Budi"
              className="h-16"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-secondary text-sm">
          © {currentYear} Budi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
