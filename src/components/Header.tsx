export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center h-16">
          <img
            src="/assets/budi-horizontal.png"
            alt="Budi"
            className="h-10"
          />
        </div>
      </div>
    </header>
  );
}
