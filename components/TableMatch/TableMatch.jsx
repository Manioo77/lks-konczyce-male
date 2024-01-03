import styles from '@/components/TableMatch/TableMatch.module.scss'
import 'aos/dist/aos.css'
import Image from 'next/image'

import matchTable from '@/public/images/matchTable.png'

export default function TableMatch() {
	return (
		<section className={styles.containerTableMatch}>
			<a
				href='https://regiowyniki.pl/wyniki/Pilka_Nozna/2023/2024/20231212/mecze/Slaskie/Klasa_A/Skoczow/'
				target='_blank'
				rel='noopener noreferrer'>
				<div data-aos='fade-right'>
					<Image className={styles.tableMatchImg} src={matchTable} alt='tableMatch' />
				</div>
			</a>
		</section>
	)
}
