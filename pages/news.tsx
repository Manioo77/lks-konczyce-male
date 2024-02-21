import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { getAllNewsBasicData } from '@/lib/utils';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from 'styles/news.module.scss';
import { useEffect, useState } from 'react';
type NewsData = { date: string; id: string; title: string; imageUrl: string };
type NewsProps = { newsData: NewsData[] };

export default function News({ newsData }: NewsProps) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const newsDataWithDates = newsData.map((newData) => ({
    ...newData,
    dateObject: new Date(newData.date),
  }));

  const sortedNewDatas = newsDataWithDates.sort(
    (a: any, b: any) => b.dateObject - a.dateObject
  );

  useEffect(() => {
    const handleResize = () => {
      let newSlidesToShow = 3;
      let newSlidesToScroll = 3;

      if (window.innerWidth < 960) {
        newSlidesToShow = 2;
        newSlidesToScroll = 2;
      }

      if (window.innerWidth < 600) {
        newSlidesToShow = 1;
        newSlidesToScroll = 1;
      }

      setSlidesToShow(newSlidesToShow);
      carouselSettings.slidesToScroll = newSlidesToScroll;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
