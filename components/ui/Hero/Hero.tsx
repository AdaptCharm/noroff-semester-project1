import { FC } from 'react'
import Link from 'next/link'
import h from './Hero.module.css'

const Hero: FC = () => {
  return (
    <section className={h.hero}>
      <div className={h.inner}>
        <h1 className={h.title}>
          Think Different, Think Organic
        </h1>
        <Link href="/">
          <a className={h.link} aria-label="Our locations">
            Our Locations
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Hero