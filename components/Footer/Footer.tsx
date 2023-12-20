import styles from '@/components/Footer/Footer.module.scss'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

import article from '@/public/images/newsNew.png'
import matchTable from '@/public/images/matchTable.png'
import sponsorImg from '@/public/images/sponsor.png'

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
							<Image className={styles.newsImg} src={article} alt='first article' />
						</div>
						<div data-aos='flip-down' className={styles.news}>
							<p className={styles.newsShadow}>Drugi artykuł</p>
							<Image className={styles.newsImg} src={article} alt='second article' />
						</div>
						<div data-aos='flip-down' className={styles.news}>
							<p className={styles.newsShadow}>Trzeci artykuł</p>
							<Image className={styles.newsImg} src={article} alt='third article' />
						</div>
					</div>
				</div>
				<div className={styles.containerTableMatch}>
					<a
						href='https://regiowyniki.pl/wyniki/Pilka_Nozna/2023/2024/20231212/mecze/Slaskie/Klasa_A/Skoczow/'
						target='_blank'
						rel='noopener noreferrer'>
						<div data-aos='fade-right'>
							<Image className={styles.tableMatchImg} src={matchTable} alt='tableMatch' />
						</div>
					</a>
				</div>
				<div className={styles.sponsorContainer}>
					<a
						href='https://www.facebook.com/studentprojectofficial?locale=pl_PL'
						target='_blank'
						rel='noopener noreferrer'>
						<div data-aos='flip-down'>
							<Image className={styles.sponsorImg} src={sponsorImg} alt='student project sponsor' />
						</div>
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
