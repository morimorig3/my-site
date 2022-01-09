import Link from 'next/link';
export const Footer = () => (
  <footer className="text-gray-400 text-xs">
    <div className="flex justify-center py-2 gap-x-4">
      <Link href="/privacy">プライバシーポリシー</Link>
      <a
        href="https://forms.gle/zh6isNmxAAEhM2iR6"
        target="_blank"
        rel="noopener noreferrer"
      >
        お問い合わせ
      </a>
    </div>
    <div className="grid place-items-center py-2 bg-slate-800">
      ©{new Date().getFullYear()} morimorig3
    </div>
  </footer>
);
