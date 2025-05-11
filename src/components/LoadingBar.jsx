import { useEffect } from 'react';

export default function LoadingBar({ isActive }) {
  useEffect(() => {
    if (!isActive) return;
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[10000] backdrop-blur-xl flex flex-col items-center justify-center h-screen bg-[linear-gradient(90deg,#00c4cc,#7d2ae8)]">
      <h1 className="text-5xl font-bold mb-4 tracking-widest uppercase">
        Canva
      </h1>

      <div className="size-8 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
    </div>
  );
}
