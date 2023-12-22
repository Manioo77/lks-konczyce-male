import styles from '@/components/Footer/Footer.module.scss'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-quad',
			duration: 1000,
		})
	}, [])

	return (
		<>
			<section className={styles.footerContainer}>
				<div className={styles.burgundLineContainer}>
					<div className={styles.burgundLine}></div>
				</div>
				<div className={styles.informations}>
					<div className={styles.textContainer}>
						<p className={styles.text}>
							<span className={styles.boldText}>LKS Kończyce Małe </span> <br />
							Jagiellońska 33 <br />
							43-410 Kończyce Małe
						</p>
					</div>
					<div className={styles.textContainer}>
						<p className={styles.copyright}>Copyright ©</p>
					</div>
					<div className={styles.textContainer}>
						<p className={styles.text}>Polityka prywatności</p>
					</div>
				</div>
			</section>
		</>
	)
}
