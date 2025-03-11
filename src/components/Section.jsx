import styles from './Section.module.css';

export default function Section({ title, text, image, reverse }) {
    return (
        <div className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.imageBorder}>
                    <img src={image} alt={title} className={styles.image} />
                </div>
            </div>
        </div>
    );
}
