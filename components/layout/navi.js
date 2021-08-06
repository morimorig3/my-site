import Link from 'next/link';

const Navi = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Indexページ</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>Aboutページ</a>
      </Link>
    </li>
    <li>
      <Link href="/develop">
        <a>Developページ</a>
      </Link>
    </li>
  </ul>
);

export default Navi;
