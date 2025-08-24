export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-4xl font-extrabold text-white drop-shadow-sm">
            📥 Downvelope
          </h1>
          <p className="mt-2 text-sm text-white/90">
            by <span className="font-semibold">Zeeshan</span>
          </p>
        </div>

        {/* Funny tagline */}
        <blockquote className="italic text-white/95 text-base leading-relaxed">
          “Bhai, hume video download kr k do!” 😄
        </blockquote>
        <p className="text-xs text-white/80">
          — for my friends who ask me <span className="font-semibold">daily</span>
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <a
            href="https://fdown.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 rounded-2xl bg-blue-600/90 text-white font-medium hover:bg-blue-700 transition"
          >
            Facebook Downloader
          </a>

          <a
            href="https://snapinsta.to/en"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 rounded-2xl bg-pink-600/90 text-white font-medium hover:bg-pink-700 transition"
          >
            Instagram Downloader
          </a>

          <a
            href="https://yt1s.ltd/en/youtube-to-mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 rounded-2xl bg-red-600/90 text-white font-medium hover:bg-red-700 transition"
          >
            YouTube Downloader
          </a>
        </div>

        {/* Footer */}
        <footer className="text-xs text-white/70 mt-6">
          Made with ❤️ by Zeeshan
        </footer>
      </div>
    </main>
  );
}
