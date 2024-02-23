import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { getAllNewsBasicData } from '@/lib/utils';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from 'styles/news.module.scss';
type NewsData = { date: string; id: string; title: string; imageUrl: string };
type NewsProps = { newsData: NewsData[] };

export default function News({ newsData }: NewsProps) {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const slidesToShow = isMobile ? 1 : 3;

  const newsDataWithDates = newsData.map((newData) => ({
    ...newData,
    dateObject: new Date(newData.date),
  }));

  const sortedNewDatas = newsDataWithDates.sort(
    (a: any, b: any) => b.dateObject - a.dateObject
  );

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: false,
  };

  return (
    <Layout pageTitle="Aktualności">
      <section className="mainPage">
        <div className={styles.wrapper}>
          <div className={styles.containerMain}>
            <Slider {...carouselSettings}>
              {sortedNewDatas.map((sortedNewData) => (
                <div
                  key={sortedNewData.id}
                  data-aos="flip-down"
                  className={styles.containerNews}
                >
                  <div className={styles.news}>
                    <Link href={`/news/${sortedNewData.id}`}>
                      <Image
                        className={styles.newsImg}
                        src={sortedNewData.imageUrl}
                        alt="article"
                        width={400}
                        height={400}
                      />
                      <div className={styles.newsShadow}></div>
                      <div className={styles.newsText}>
                        <p className={styles.newsHeading}>
                          {sortedNewData.title}
                        </p>
                        <p className={styles.newsDate}>{sortedNewData.date}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const newsData = getAllNewsBasicData();
  return {
    props: {
      newsData,
    },
  };
}
