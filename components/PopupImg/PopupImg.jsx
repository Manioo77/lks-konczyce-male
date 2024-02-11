import styles from '@/components/PopupImg/PopupImg.module.scss'

export default function PopupImg({ handleClosePopup, popupImg }) {
	return (
		<>
			<div className={styles.popup} onClick={handleClosePopup}>
				<div className={styles.containerPopup} onClick={e => e.stopPropagation()}>
					<button onClick={handleClosePopup} className={styles.popup__close}>
						X
					</button>
					<img src={popupImg} alt='' className={styles.popup__img} />
				</div>
			</div>
		</>
	)
}
