import styles from '@/components/Sponsors/Sponsors.module.scss'
import Image from 'next/image'
import sponsorImg from '@/public/images/sponsor.png'

export default function Sponsors() {
	return (
		<div className={styles.sponsorContainer}>
			<a href='https://www.facebook.com/studentprojectofficial?locale=pl_PL' target='_blank' rel='noopener noreferrer'>
				<div data-aos='flip-down'>
					<Image className={styles.sponsorImg} src={sponsorImg} alt='student project sponsor' />
				</div>
			</a>
		</div>
	)
}
