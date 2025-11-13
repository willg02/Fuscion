import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/programs', label: 'Programs' },
    { href: '/framework', label: 'The Framework' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/start', label: 'Start' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo & Tagline */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">
            FUSCION<span className="text-xs align-super">™</span>
          </h3>
          <p className="text-sm text-gray-600">
            Better health decisions. Better alignment. Better life.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FUSCION. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
