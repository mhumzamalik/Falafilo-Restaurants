import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-950/80 backdrop-blur-md border-t border-neutral-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-neutral-400">
        <div>
          <h3 className="text-white font-semibold mb-2">Falafilo</h3>
          <p>Premium dining experience with modern elegance.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/menu" className="hover:text-amber-400">Menu</Link></li>
            <li><Link href="/drinks" className="hover:text-amber-400">Drinks</Link></li>
            <li><Link href="/cocktails" className="hover:text-amber-400">Cocktails</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p>Email: 46humza@gmail.com</p>
          <p>Phone: +92 303 9494797</p>
        </div>
      </div>
      <div className="text-center text-neutral-500 text-xs py-4 border-t border-neutral-800">
        © {new Date().getFullYear()} Falafilo. All rights reserved.
      </div>
    </footer>
  );
}
