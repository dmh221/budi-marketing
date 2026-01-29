export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="text-sm text-secondary hover:text-black transition-colors uppercase tracking-wide"
            >
              HOME
            </a>
            <a
              href="#blog"
              className="text-sm text-secondary hover:text-black transition-colors uppercase tracking-wide"
            >
              BLOG
            </a>
            <a
              href="#photography"
              className="text-sm text-secondary hover:text-black transition-colors uppercase tracking-wide"
            >
              PHOTOGRAPHY
            </a>
            <a
              href="#about"
              className="text-sm text-secondary hover:text-black transition-colors uppercase tracking-wide"
            >
              ABOUT
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
