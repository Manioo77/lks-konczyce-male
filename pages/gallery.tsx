import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function Gallery() {
	return (
		<Layout pageTitle='Galeria'>
			<section className='mainPage'>
				<div>
					<h1>Galeria</h1>
					<Link href='/'>go home</Link>
				</div>
			</section>
		</Layout>
	)
}
