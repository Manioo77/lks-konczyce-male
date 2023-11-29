import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

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
					<img src='/icons/logoLks.svg' alt='logo' className={scrollPage ? styles.logoScroll : styles.logo} />
				</Link>
				<nav>
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
								<img className={styles.iconFacebook} src='/icons/facebook.svg' alt='facebook' />
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
