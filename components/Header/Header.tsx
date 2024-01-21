import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/components/Header/Header.module.scss'
import logo from '@/public/icons/logoLks.svg'
import facebook from '@/public/icons/facebook.svg'

export default function Header() {
	const [scrollPage, setScrollPage] = useState(false)
	const [mobileMenu, setMobileMenu] = useState(false)
	const router = useRouter()

	const handleScroll = () => {
		const scrollPosition = window.scrollY
		setScrollPage(scrollPosition > 0)
	}

	const handleChangeIcon = () => {
		setMobileMenu(prevState => !prevState)
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
				<div>
					<Image src={logo} className={scrollPage ? styles.logoScroll : styles.logo} alt='logo' />
				</div>
				<button onClick={handleChangeIcon} className={styles.burgerBtn}>
					<div className={styles.burgerBtnBox}>
						<div className={styles.burgerBtnBars}></div>
					</div>
				</button>
				<nav className={styles.navDesktop}>
					<ul className={styles.navDesktopItems}>
						<li className={styles.navDesktopItem}>
							<Link href='/' className={router.pathname == '/' ? styles.activeDesktopLink : ''}>
								strona główna
							</Link>
						</li>
						<li className={styles.navDesktopItem}>
							<Link href='/news' className={router.pathname == '/news' ? styles.activeDesktopLink : ''}>
								aktualności
							</Link>
						</li>
						<li className={styles.navDesktopItem}>
							<Link href='/gallery' className={router.pathname == '/gallery' ? styles.activeDesktopLink : ''}>
								galeria
							</Link>
						</li>
						<li className={styles.navDesktopItem}>
							<Link href='/history' className={router.pathname == '/history' ? styles.activeDesktopLink : ''}>
								historia
							</Link>
						</li>
						<li className={styles.navDesktopFacebook}>
							<a href='https://www.facebook.com/lkskonczycemale?locale=pl_PL' target='_blank' rel='noopener noreferrer'>
								<Image src={facebook} className={styles.iconFacebookDesktop} alt='facebook' />
							</a>
						</li>
					</ul>
				</nav>
				<nav className={`${styles.navMobile} ${mobileMenu ? styles.navMobileShown : ''}`}>
					<ul className={styles.navMobileItems}>
						<li className={styles.navMobileItem}>
							<Link href='/' className={router.pathname == '/' ? styles.activeMobileLink : ''}>
								strona główna
							</Link>
						</li>
						<li className={styles.navMobileItem}>
							<Link href='/news' className={router.pathname == '/news' ? styles.activeMobileLink : ''}>
								aktualności
							</Link>
						</li>
						<li className={styles.navMobileItem}>
							<Link href='/gallery' className={router.pathname == '/gallery' ? styles.activeMobileLink : ''}>
								galeria
							</Link>
						</li>
						<li className={styles.navMobileItem}>
							<Link href='/history' className={router.pathname == '/history' ? styles.activeMobileLink : ''}>
								historia
							</Link>
						</li>
						<li className={styles.navMobileFacebook}>
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
