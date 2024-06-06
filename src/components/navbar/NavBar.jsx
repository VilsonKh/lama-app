import Link from "next/link";
import Links from "./links/Links";

import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";

const NavBar = async () => {
	const session = await auth();

	return (
		<div className={styles.container}>
			<Link
				href="/"
				className={styles.logo}
			>
				<Image
					src="/logo.svg"
					alt=""
					width={50}
					height={50}
				/>
			</Link>
			<div>
				<Links session={session} />
			</div>
		</div>
	);
};

export default NavBar;
