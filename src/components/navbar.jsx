function Navbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-10 py-8 border-b border-white/10 backdrop-blur-xl">

      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">

        <span className="text-white">
          AI
        </span>

        <span className="text-blue-400">
          Engineering
        </span>

        <span className="text-gray-500">
          Pod
        </span>

      </div>

      {/* Navigation */}
      <div className="hidden md:flex gap-10 text-sm text-gray-400">

        <a
          href="#architecture"
          className="hover:text-white transition duration-300"
        >
          Architecture
        </a>

        <a
          href="#features"
          className="hover:text-white transition duration-300"
        >
          Features
        </a>

        <a
          href="#security"
          className="hover:text-white transition duration-300"
        >
          Security
        </a>

        <a
          href="#demo"
          className="hover:text-white transition duration-300"
        >
          Demo
        </a>

      </div>

      {/* Status Badge */}
      <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 text-sm">

        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

        Autonomous Runtime Active

      </div>

    </nav>
  );
}

export default Navbar;