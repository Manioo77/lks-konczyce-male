import styles from '@/components/LatestNews/LatestNews.module.scss'
import 'aos/dist/aos.css'
import Image from 'next/image'

import article from '@/public/images/newsNew.png'

export default function LatestNews() {
	return (
		<section className={styles.newsSection}>
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
		</section>
	)
}
