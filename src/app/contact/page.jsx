import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="/contact.png"
					alt="contact"
					fill
					className={styles.img}
				/>
			</div>
			<div className={styles.formContainer}>
				<form className={styles.form}>
					<input
						type="text"
						placeholder="Name and Surname"
						className={styles.input}
					/>
					<input
						type="text"
						placeholder="Email Address"
						className={styles.input}
					/>
					<input
						type="text"
						placeholder="Phone Number (Optional)"
						className={styles.input}
					/>
					<textarea
						cols="30"
						rows="10"
						placeholder="Message"
						className={styles.textArea}
					/>
					<button className={styles.button}>Send</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
