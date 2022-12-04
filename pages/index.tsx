import styles from "../styles/Home.module.scss";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <article className={styles.quote}>
                    <p className={styles.quoteBody}>
                        Two things are infinite: the universe and human stupidity; and I&apos;m not
                        sure about the universe.
                    </p>
                    <p className={styles.quoteAuthor}>Albert Einstein</p>
                </article>
            </div>
        </main>
    );
}
