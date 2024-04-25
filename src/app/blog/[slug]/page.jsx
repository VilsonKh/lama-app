import Image from "next/image";
import styles from "./singlePost.module.css";

const BlogSinglePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="/working.jpg"
					alt="working"
					fill
					className={styles.img}
				/>
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Title</h1>
				<div className={styles.detail}>
					<Image
						className={styles.avatar}
						src="/working.jpg"
						alt="avatar"
						fill
					/>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Author</span>
						<span className={styles.detailValue}>Terry Jefferson</span>
					</div>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						<span className={styles.detailValue}>01.01.2024</span>
					</div>
				</div>
				<div className={styles.content}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam excepturi esse hic iure non rem, cupiditate quod, neque
					dolorem laborum, vero voluptas eius doloremque enim ullam quibusdam reprehenderit quasi.
				</div>
			</div>
		</div>
	);
};

export default BlogSinglePage;
