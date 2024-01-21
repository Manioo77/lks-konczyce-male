import Head from 'next/head'
import styles from '@/components/Layout/Layout.module.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Sponsors from '../Sponsors/Sponsors'

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
			<main className={styles.main}>
				<div className={styles.footballPitch}>
					<div className={styles.shadow} />
				</div>
				<div>{children}</div>
			</main>
			<Sponsors />
			<Footer />
		</>
	)
}
