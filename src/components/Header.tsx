import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" aria-label="Budi home">
            <img
              src="/assets/budi-horizontal.png"
              alt="Budi logo"
              className="h-16 cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="#login"
              className="text-sm font-semibold text-[#AFBF41] hover:text-[#9DAD35] transition-colors"
            >
              Log In
            </a>
            <a
              href="#waitlist"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#AFBF41] rounded-full hover:bg-[#9DAD35] transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
