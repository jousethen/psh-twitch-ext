import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/live_config.html">
          <a className="navbar-brand">Player Set History</a>
        </Link>
      </div>
    </nav>
  )
}

export default Header