import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav
      style={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        background: darkMode ? '#333' : '#eee',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <div>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </div>
      <button onClick={toggleTheme} style={{ padding: '5px 10px' }}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
