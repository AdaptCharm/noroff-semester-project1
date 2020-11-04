import { FC } from 'react'
import { Logo, Link } from '@components/ui'
import n from './Navbar.module.css'
interface Props {
  className?: string
}

const Navbar: FC<Props> = ({ className }) => {
  const rootClassName = className

  return (
    <div className={rootClassName}>
      <div>
        <Link href="/">
          <a className={n.logo} aria-label="Logo">
            <Logo />
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a className={n.link}>Home</a>
          </Link>
          <Link href="/about-us">
            <a className={n.link}>About us</a>
          </Link>
          <Link href="/locations">
            <a className={n.link}>Our Locations</a>
          </Link>
          <Link href="/contact">
            <a className={n.link}>Contact</a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar