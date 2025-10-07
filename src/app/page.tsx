import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Header / Logo */}
      <header className="pt-10 flex flex-col items-center gap-4">
        
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          SofZone
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center gap-6 px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold animate-pulse">
          🚧 Website Under Construction 🚧
        </h2>
        <p className="text-gray-300 max-w-xl">
          We’re working hard to bring you something amazing. Stay tuned for updates!
        </p>

        {/* Call to Action */}
        <div className="flex gap-4 flex-wrap justify-center mt-4">
          <a
            href="mailto:contact@sofzone.com"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition"
          >
            Contact Us
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-full transition"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-gray-700 flex justify-center gap-6 text-sm text-gray-400">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          Twitter
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          Facebook
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
