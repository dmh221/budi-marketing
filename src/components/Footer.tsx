import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/70 backdrop-blur-xl border-t border-gray-200/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/privacy" className="text-secondary hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="text-secondary hover:text-black transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <nav className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:support@hellobudi.app"
                className="text-secondary hover:text-black transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.instagram.com/hellobudi.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-black transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>

          {/* Logo */}
          <div className="flex justify-start md:justify-end">
            <img
              src="/assets/logo_budi-lime_icon_transparent.svg"
              alt="Budi"
              className="h-40"
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
