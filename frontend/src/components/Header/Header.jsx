import styles from './Header.module.css';
import photo from "../../assets/photo.jpg";

function Header({ scrollToPosts }) {
  return (
    <div className={styles.header}>
      <img src={photo} alt="author" className={styles.headerImg} />
      <h1 className={styles.headerTitle}>Вітаю у своєму новоствореному блозі на Django!</h1>
      <p className={styles.welcomeMessage}>Тут ви знайдете мої думки, історії та ідеї.</p>
      <button onClick={scrollToPosts} className={styles.scrollButton}>
        Переглянути пости
      </button>
    </div>
  );
}

export default Header;
