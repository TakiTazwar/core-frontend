import LogoWhite from "./Logo/logoWhite"
import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700 border-opacity-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <LogoWhite />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Services</Link>
          <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
