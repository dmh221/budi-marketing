import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <footer className="bg-white/70 backdrop-blur-xl border-t border-gray-200/50 py-12 relative h-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Footer Content */}
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-8 sm:gap-0">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              {/* Company */}
              <div>
                <nav className="flex flex-col gap-3 text-sm">
                  <Link to="/privacy" onClick={handleLinkClick} className="text-secondary hover:text-black transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" onClick={handleLinkClick} className="text-secondary hover:text-black transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/accessibility" onClick={handleLinkClick} className="text-secondary hover:text-black transition-colors">
                    Accessibility
                  </Link>
                  <Link to="/about" onClick={handleLinkClick} className="text-secondary hover:text-black transition-colors">
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
            </div>

            {/* Logo */}
            <div>
              <img
                src="/assets/logo_budi-lime_icon_transparent.svg"
                alt="Budi logo"
                className="h-24 sm:h-32 md:h-40"
              />
            </div>
          </div>
        </div>
        {/* Sticky Copyright Bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-8">
          <div className="py-4 text-center text-secondary text-sm">
            © {currentYear} Budi. All rights reserved.
          </div>
        </div>
      </footer>
</>
  );
}
