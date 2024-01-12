import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css'

export default function Header() {
  const pathname = usePathname()

  function changeRoute(path: string) {
    window.location.href = `${window.location.origin}/${path}`;
  }

  return (
    <div className='header-wrapper'>
      <Link
        href="/"
        className={`header-link ${pathname === '/' ? 'header-link-active' : ''}`}>
        NextLink to Home
      </Link>
      <Link
        href="/dashboard"
        className={`header-link ${pathname === '/dashboard' ? 'header-link-active' : ''}`}>
        NextLink to Dashboard
      </Link>
      <button className='header-button' type="button" onClick={() => changeRoute('/')}>
        Load Home
      </button>
      <button className='header-button' type="button" onClick={() => changeRoute('/')}>
        Load Dashboard
      </button>
    </div>
  )
}
