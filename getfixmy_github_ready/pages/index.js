export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-6 shadow flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="GetFixMy Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">GetFixMy</h1>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#hotels" className="hover:underline">For Hotels</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="px-8 py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Global Artisans, Local Fixes</h2>
        <p className="max-w-2xl mx-auto text-lg">
          GetFixMy connects world-class resorts and hotels with verified local craftsmen
          for fast, personal, and high-quality repairs – all through a simple voice-driven experience.
        </p>
      </section>

      <section id="hotels" className="px-8 py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Tailored for Hotels & Resorts</h3>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          No apps. No forms. Just call or speak to our AI Concierge and we’ll handle the rest.
          You get seamless service and local professionals within hours.
        </p>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside space-y-2">
          <li>24/7 Voice Concierge</li>
          <li>Vetted Technicians & Artisans</li>
          <li>Custom Contracts for Luxury Properties</li>
          <li>Multilingual & Regionally Aware Support</li>
        </ul>
      </section>

      <section id="contact" className="px-8 py-20 bg-gray-100 text-center">
        <h4 className="text-2xl font-bold mb-4">Get in Touch</h4>
        <p className="mb-6 text-lg">Let’s build the future of service together. Contact us to become a GetFixMy partner.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Hotel / Resort Name" className="w-full p-3 border border-gray-300 rounded-xl" />
          <input type="email" placeholder="Email address" className="w-full p-3 border border-gray-300 rounded-xl" />
          <textarea placeholder="Your message" className="w-full p-3 border border-gray-300 rounded-xl" rows={4} />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">Submit</button>
        </form>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GetFixMy. All rights reserved.
      </footer>
    </main>
  );
}
