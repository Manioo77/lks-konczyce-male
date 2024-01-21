import styles from '@/components/LatestNews/LatestNews.module.scss'
import 'aos/dist/aos.css'
import Image from 'next/image'
import article from '@/public/images/newsNew.png'
import Link from 'next/link'

export default function LatestNews({ newsData }) {
	const newsDataWithDates = newsData.map(data => ({
		...data,
		dateObject: new Date(data.date),
	}))

	const sortedNewDatas = newsDataWithDates.sort((a, b) => b.dateObject - a.dateObject)

	const latestNews = sortedNewDatas.slice(0, 3)
	console.log(latestNews)

	return (
		<section className={styles.newsSection}>
			<p className={styles.textNews}>najnowsze aktualności</p>
			<div className={styles.containerNews}>
				{latestNews.map(news => (
					<div key={news.id} data-aos='flip-down' className={styles.news}>
						<Link href={`/news/${news.id}`}>
							<Image className={styles.newsImg} src={news.imageUrl} width={400} height={400} alt='first article' />
							<div className={styles.newsShadow}></div>
							<div className={styles.newsText}>
								<p className={styles.newsHeading}>{news.title}</p>
								<p className={styles.newsDate}>{news.date}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}
