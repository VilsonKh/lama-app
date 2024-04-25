import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1>Creative Thoughts Agency.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat perspiciatis facere voluptas sed ab ipsa tenetur
					voluptatibus iusto. Assumenda dolores perspiciatis non, accusantium vero aliquam ipsam voluptatem qui incidunt!
				</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill className={styles.brandImg}/>
        </div>
			</div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.heroImg}/>
      </div>
		</div>
	);
}
