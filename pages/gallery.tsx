import Layout from '@/components/Layout/Layout'
import PopupImg from '@/components/PopupImg/PopupImg'
import styles from 'styles/gallery.module.scss'
import { useState, useEffect } from 'react'

export default function Gallery() {
	const [shownPopup, setShownPopup] = useState(false)
	const [popupImg, setPopupImg] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(24)

	const images = Array.from({ length: 24 }, (_, i) => `images/gallery/${i + 1}.jpg`)
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentImages = images.slice(indexOfFirstItem, indexOfLastItem)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1867) {
				setItemsPerPage(24)
			} else if (window.innerWidth >= 1632) {
				setItemsPerPage(21)
			} else if (window.innerWidth >= 1400) {
				setItemsPerPage(18)
			} else if (window.innerWidth >= 1166) {
				setItemsPerPage(15)
			} else if (window.innerWidth >= 934) {
				setItemsPerPage(12)
			} else if (window.innerWidth >= 700) {
				setItemsPerPage(9)
			} else if (window.innerWidth >= 466) {
				setItemsPerPage(6)
			} else {
				setItemsPerPage(3)
			}
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	function handleTogglePopup(e: React.MouseEvent<HTMLImageElement>) {
		const target = e.target as HTMLImageElement
		if (target && target.src) {
			setShownPopup(true)
			setPopupImg(target.src)
		}
	}

	function handleClosePopup() {
		setShownPopup(false)
	}

	function paginate(pageNumber: number) {
		setCurrentPage(pageNumber)
	}

	return (
		<Layout pageTitle='Galeria'>
			<section className='mainPage'>
				<div className={styles.container}>
					<ul className={styles.gallery}>
						{currentImages.map((image, index) => (
							<li key={index} className={styles.thumbnail}>
								<img src={image} onClick={handleTogglePopup} alt='' />
							</li>
						))}
					</ul>
					<div className={styles.containerPages}>
						{Array.from({ length: Math.ceil(images.length / itemsPerPage) }, (_, i) => (
							<button className={styles.page} key={i} onClick={() => paginate(i + 1)}>
								{i + 1}
							</button>
						))}
					</div>
				</div>
				{shownPopup && <PopupImg handleClosePopup={handleClosePopup} popupImg={popupImg} />}
			</section>
		</Layout>
	)
}
