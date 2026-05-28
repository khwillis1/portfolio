export default function Footer() {
  return (
    <footer className="border-t border-[#1d1a30] py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[#475569] text-sm">
          <span className="text-[#a78bfa]">kw</span>
          <span className="text-[#f472b6]">_</span>
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </p>
        <p className="font-mono text-xs text-[#2d3f55]">
          built with Next.js + Tailwind · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
