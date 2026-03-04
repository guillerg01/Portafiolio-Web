import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[rgb(14,14,16)] text-white">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-gray-400">Page not found</p>
      <Link
        href="/"
        className="rounded-full border border-[#F7AB0A]/60 px-4 py-2 text-sm text-[#F7AB0A] transition hover:bg-[#F7AB0A]/10"
      >
        Back to home
      </Link>
    </div>
  );
}
