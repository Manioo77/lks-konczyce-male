import Head from 'next/head'
import styles from './Layout.module.scss'
import Header from '../Header/Header'

export default function Layout({ children, pageTitle = 'LKS Kończyce Małe' }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/icons/favicon.ico' />
				<title>{pageTitle}</title>
				<meta
					name='description'
					content='Strona klubowa zespołu LKS Kończyce Małe dla piłkarzy i kibiców. Aktualności, ostatnie mecze, tabela i statystyki. '
				/>
			</Head>
			<Header />
			<main className={styles.footballPitch}>
				<div className={styles.text}>{children}</div>
				<div className={styles.shadowBox}></div>
			</main>
			{/* <Footer/> */}
		</>
	)
}
