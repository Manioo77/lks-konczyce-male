import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import styles from 'styles/history.module.scss';
import { useMediaQuery } from 'react-responsive';

const containerElements = [
  {
    heading: 'Ponad 60 lat',
    paragraph:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia alias labore explicabo aliquam corporis. Quas explicabo amet, praesentium commodi minima dolorem provident molestiae voluptas aspernatur ad dolores ipsa eos. Nulla maxime quos modi omnis. Maiores distinctio placeat esse! In, facilis! Atque accusamus corporis placeat, dolorum eveniet iure sequi! Aspernatur neque perspiciatis accusantium deleniti, quasi facere. Debitis quas incidunt vel adipisci dicta eius iste at.',
  },
  {
    heading: 'Osiągnięcia',
    paragraph:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia dolor iste quos in facilis laboriosam animi repudiandae esse. Odit? Dinima dolorem provident molestiae voluptas aspernatur ad dolores',
    list: [
      '1 miejsce na śląsku w 2012r.',
      '3 miejsce w powiecie w 1999r.',
      '2 miejsce na śląsku w 1970r.',
      '3 miejsce na śląsku w 1965r.',
      '1 miejsce na śląsku w 1950r.',
    ],
  },
  {
    heading: 'Byli trenerze',
    paragraph:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia dolor iste quos in facilis laboriosam animi repudiandae esse. Odit? Debitis quas incidunt vel adipisci dicta eius iste at.',
    list: [
      'Jan Nowak 2014-2019',
      'Brayn Kozieł 2011-2014',
      'Stanisław Lola 1990-2011',
      'Marek Cezary 1970-1990',
      'Adam Pon 1947-1970',
    ],
  },
  {
    heading: 'Byli zawodnicy',
    paragraph:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia dolor iste quos in facilis laboriosam animi repudiandae esse. Odit?',
    list: [
      'Jan Nowak 2014-2019',
      'Brayn Kozieł 2011-2014',
      'Stanisław Lola 2003-2011',
      'Bronisław Gnat 2000-2003',
      'Maciej Wroński 1990-2000',
      'Marek Cezary 1970-1990',
      'Adam Pon 1947-1970',
    ],
  },
];

export default function History() {
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const handleNextPage = () => {
    if (currentPage < containerElements.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Layout pageTitle="Historia">
      <section className="mainPage">
        <div className={styles.wrapper}>
          {isMobile ? (
            <div className={styles.containerElement}>
              <h1 className={styles.heading}>
                {containerElements[currentPage].heading}
              </h1>
              <p className={styles.paragraph}>
                {containerElements[currentPage].paragraph}
              </p>
              {containerElements[currentPage].list && (
                <ul className={styles.trainersList}>
                  {containerElements[currentPage].list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            containerElements.map((element, index) => (
              <div key={index} className={styles.containerElement}>
                <h1 className={styles.heading}>{element.heading}</h1>
                <p className={styles.paragraph}>{element.paragraph}</p>
                {element.list && (
                  <ul className={styles.trainersList}>
                    {element.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </div>
        {isMobile && (
          <div className={styles.pagination}>
            <button
              className={styles.prevButton}
              disabled={currentPage === 0}
              onClick={handlePreviousPage}
            >
              Poprzednia
            </button>

            <button
              className={styles.nextButton}
              disabled={currentPage === containerElements.length - 1}
              onClick={handleNextPage}
            >
              Następna
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
}
