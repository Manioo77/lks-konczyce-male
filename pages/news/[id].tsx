import Layout from '@/components/Layout/Layout'
import { getSingleNewsData, getAllNewsBasicData } from '@/lib/utils'
import Image from 'next/image'
import styles from 'styles/news.module.scss'
import Link from 'next/link'

export default function News({
	newsData: {
		id,
		imageUrl,
		data: { content, date, title },
	},
}) {
	return (
		<Layout pageTitle={id}>
			<section className='mainPage'>
				<div className={styles.wrapper}>
					<div className={styles.containerMainSection}>
						<div className={styles.currentNewsContainerImg}>
							<Image className={styles.currentNewsImg} src={imageUrl} alt='first article' width={400} height={400} />
						</div>
						<div className={styles.containerDescribe}>
							<h1 className={styles.containerDescribe__h1}>{title}</h1>
							<p className={styles.containerDescribe__content}>{content}</p>
							<p className={styles.containerDescribe__date}>{date}</p>
							<Link href='/news' className={styles.btnBack}>
								Wróć do aktualności
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticPaths() {
	const newsData = getAllNewsBasicData()
	const paths = newsData.map(news => ({ params: { id: news.id } }))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const newsData = getSingleNewsData(params.id)
	return {
		props: {
			newsData,
		},
	}
}
