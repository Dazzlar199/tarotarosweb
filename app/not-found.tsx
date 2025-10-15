import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black mb-6 neon-green tracking-tighter">404</h1>
        <h2 className="text-4xl font-black text-white mb-4 tracking-tight">NOT FOUND</h2>
        <p className="text-gray-600 mb-12 text-sm tracking-wider">
          존재하지 않는 페이지입니다
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-5 bg-black border-2 border-green-500 text-green-400 font-black text-sm tracking-widest hover:bg-green-500 hover:text-black transition-all"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
