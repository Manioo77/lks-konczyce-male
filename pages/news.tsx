import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import { getAllNewsBasicData } from '@/lib/utils'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from 'styles/news.module.scss'
import { useEffect, useState } from 'react'

export default function News({ newsData, urls }) {
	console.log(newsData)
	const [slidesToShow, setSlidesToShow] = useState(3)

	const newsDataWithDates = newsData.map(newData => ({
		...newData,
		dateObject: new Date(newData.date),
	}))

	const sortedNewDatas = newsDataWithDates.sort((a, b) => a.dateObject - b.dateObject).reverse()

	useEffect(() => {
		const handleResize = () => {
			let newSlidesToShow = 3

			if (window.innerWidth < 960) {
				newSlidesToShow = 2
			}

			if (window.innerWidth < 600) {
				newSlidesToShow = 1
			}

			setSlidesToShow(newSlidesToShow)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const carouselSettings = {
		dots: true,
		infinite: true,
		speed: 100,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
	}

	return (
		<Layout pageTitle='Aktualności'>
			<section className='mainPage'>
				<div className={styles.containerMain}>
					<div className={styles.containerNews}>
						<Slider {...carouselSettings}>
							{sortedNewDatas.map(sortedNewData => {
								return (
									<div key={sortedNewData.key} data-aos='flip-down' className={styles.news}>
										<p className={styles.newsShadow}>{sortedNewData.title}</p>
										<p className={styles.newsShadow}>{sortedNewData.date}</p>
										<Link href={`/news/${sortedNewData.id}`}>
											<Image
												className={styles.newsImg}
												src={sortedNewData.imageUrl}
												alt='first article'
												width={400}
												height={400}
											/>
										</Link>
									</div>
								)
							})}
						</Slider>
					</div>
				</div>
			</section>
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
