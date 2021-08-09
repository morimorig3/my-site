import { useState, useEffect, useRef, useCallback } from 'react';
import Navi from './Navi';
import Link from 'next/link';

const fontRighteous = {
  fontFamily: "'Righteous', cursive",
};

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto h-screen px-4">
      <div>
        <Link href="/">
          <a
            style={fontRighteous}
            className="block text-center text-xl leading-none font-bold py-8 text-gray-100"
          >
            morimorig3.com
          </a>
        </Link>
        {children}
      </div>
      <Navi />
    </div>
  );
};

export default Layout;
