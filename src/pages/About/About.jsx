import { Link } from 'react-router-dom';
import styles from './About.module.css';
import AboutImg from '../../assets/AboutImg.png';

function About() {
  return (
      <div className={styles.aboutContainer}>
        <span className={styles.imgContainer}>
          <img src={AboutImg} alt="Van Img" />
        </span>
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
        <section className={styles.aboutText}>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </section>

        <section className={styles.aboutsection}>
            <h3>Your destination is waiting. Your van is Ready</h3>
            <Link className={styles.AboutButton} to="vans">Explore our vans</Link>
        </section>
      </div>
  )
}

export default About; 