import styles from '@/components/Sponsors/Sponsors.module.scss';
import Image from 'next/image';
import studentProject from '@/public/images/studentProject.png';
import gDesigns from '@/public/images/gdesigns.png';
import mateo from '@/public/images/mateo.png';
import mitula from '@/public/images/mitula.png';
import wylegarnia from '@/public/images/wylegarnia.png';

export default function Sponsors() {
  return (
    <div className={styles.sponsorContainer}>
      <div data-aos="flip-down">
        <a
          href="https://www.facebook.com/studentprojectofficial?locale=pl_PL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.sponsorImg}
            src={studentProject}
            alt="student project sponsor"
          />
        </a>
      </div>
      <div data-aos="flip-down">
        <a
          href="https://gdesigns.pl/?fbclid=IwAR09mcbz_YldVcdoyQRLlem3BsK9x7nUlIHhbHJ45ljRmUqevAw9tp5YowQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.sponsorImg}
            src={gDesigns}
            alt="gDesigns sponsor"
          />
        </a>
      </div>
      <div data-aos="flip-down">
        <a
          href="https://restauracja-mateo.eatbu.com/?lang=pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.sponsorImg}
            src={mateo}
            alt="mateo sponsor"
          />
        </a>
      </div>
      <div data-aos="flip-down">
        <a
          href="http://mitula.pl/#/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.sponsorImg}
            src={mitula}
            alt="mitula sponsor"
          />
        </a>
      </div>
      <div data-aos="flip-down">
        <a
          href="https://www.facebook.com/DomPrzyjecStaraWylegarnia/?locale=pl_PL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.sponsorImg}
            src={wylegarnia}
            alt="wylegarnia sponsor"
          />
        </a>
      </div>
    </div>
  );
}
