import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/components/Header/Header.module.scss'

import logo from '@/public/icons/logoLks.svg'
import facebook from '@/public/icons/facebook.svg'

export default function Header() {
	const [scrollPage, setScrollPage] = useState(false)
	const router = useRouter()

	const handleScroll = () => {
		const scrollPosition = window.scrollY
		setScrollPage(scrollPosition > 0)
	}

	useEffect(() => {
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<header className={scrollPage ? styles.blur : styles.header}>
				<Link href='/'>
					<div data-aos='fade-down'>
						<Image src={logo} className={scrollPage ? styles.logoScroll : styles.logo} alt='logo' />
					</div>
				</Link>
				<nav data-aos='fade-down'>
					<ul className={styles.ul}>
						<li className={styles.li}>
							<Link href='/news' className={router.pathname == '/news' ? styles.active : ''}>
								aktualności
							</Link>
						</li>
						<li className={styles.li}>
							<Link href='/team' className={router.pathname == '/team' ? styles.active : ''}>
								drużyna
							</Link>
						</li>
						<li className={styles.li}>
							<Link href='/gallery' className={router.pathname == '/gallery' ? styles.active : ''}>
								galeria
							</Link>
						</li>
						<li className={styles.li}>
							<Link href='/history' className={router.pathname == '/history' ? styles.active : ''}>
								historia
							</Link>
						</li>
						<li className={styles.iconFacebookContainer}>
							<a href='https://www.facebook.com/lkskonczycemale?locale=pl_PL' target='_blank' rel='noopener noreferrer'>
								<Image src={facebook} className={styles.iconFacebook} alt='facebook' />
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
