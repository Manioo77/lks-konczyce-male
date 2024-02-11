import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function History() {
	return (
		<Layout pageTitle='Historia'>
			<section className='mainPage'>
				<div>
					<h1>Historia</h1>
					<Link href='/'>go home</Link>
				</div>
			</section>
		</Layout>
	)
}
