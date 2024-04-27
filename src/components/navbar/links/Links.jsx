"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleGithubLogout } from "@/lib/action";
const Links =  ({session}) => {
	const [open, setOpen] = useState(false);

	const links = [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "About",
			path: "/about",
		},
		{
			title: "Contact",
			path: "/contact",
		},
		{
			title: "Blog",
			path: "/blog",
		},
	];

	const isAdmin = true;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink
						item={link}
						key={link.title}
					/>
				))}
				{session ? (
					<>
						{session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
						<form action={handleGithubLogout}>
							<button className={styles.logout}>Logout</button>
						</form>
					</>
				) : (
					<NavLink item={{ title: "Login", path: "/login" }} />
				)}
			</div>
			<Image
				src="/menu.png"
				alt="menu"
				width={30}
				height={30}
				className={styles.menuButton}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink
							item={link}
							key={link.title}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
