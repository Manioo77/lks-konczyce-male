import Layout from '@/components/Layout/Layout'
import styles from 'styles/mainPage.module.scss'
import LatestNews from '@/components/LatestNews/LatestNews'
import TableMatch from '@/components/TableMatch/TableMatch'
import { getAllNewsBasicData } from '@/lib/utils'
import Sponsors from '@/components/Sponsors/Sponsors'

export default function Home({ newsData }) {
	return (
		<Layout>
			<div className='mainPage'>
				<div data-aos='fade-right' className={styles.seasonContainer}>
					<p className={styles.season}>sezon 23/24</p>
				</div>
				<div data-aos='fade-right' className={styles.textContainer}>
					<p className={styles.text}>lks</p>
					<p className={styles.text}>kończyce małe</p>
				</div>
			</div>
			<LatestNews newsData={newsData} />
			<TableMatch />
		</Layout>
	)
}

export async function getStaticProps() {
	const newsData = getAllNewsBasicData()
	return {
		props: {
			newsData,
		},
	}
}
