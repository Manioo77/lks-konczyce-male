import styles from './Footer.module.scss'
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
			<div className={styles.footerContainer}>
				<div className={styles.newsSection}>
					<p className={styles.textNews}>najnowsze aktualności</p>
					<div className={styles.containerNews}>
						<div data-aos='flip-down' className={styles.news}>
							<p className={styles.newsShadow}>Pierwszy artykuł</p>
							<img className={styles.newsImg} src='/images/newsNew.png' alt='first article' />
						</div>
						<div data-aos='flip-down' className={styles.news}>
							<p className={styles.newsShadow}>Drugi artykuł</p>
							<img className={styles.newsImg} src='/images/newsNew.png' alt='second article' />
						</div>
						<div data-aos='flip-down' className={styles.news}>
							<p className={styles.newsShadow}>Trzeci artykuł</p>
							<img className={styles.newsImg} src='/images/newsNew.png' alt='third article' />
						</div>
					</div>
				</div>
				<div className={styles.containerTableMatch}>
					<a
						href='https://regiowyniki.pl/wyniki/Pilka_Nozna/2023/2024/20231212/mecze/Slaskie/Klasa_A/Skoczow/'
						target='_blank'
						rel='noopener noreferrer'>
						<img className={styles.tableMatchImg} src='/images/matchTable.png' alt='tableMatch' />
					</a>
				</div>
				<div className={styles.sponsorContainer}>
					<a
						href='https://www.facebook.com/studentprojectofficial?locale=pl_PL'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							data-aos='flip-left'
							className={styles.sponsorImg}
							src='/images/sponsor.png'
							alt='student project sponsor'
						/>
					</a>
				</div>
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
			</div>
		</>
	)
}
