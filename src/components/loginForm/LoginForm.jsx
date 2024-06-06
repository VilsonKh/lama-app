"use client";

import { login } from "@/lib/action";
import styles from "./LoginForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
const LoginForm = () => {
	const [state, formAction] = useFormState(login, undefined);

	const router = useRouter();


	// useEffect(() => {
	// 	state?.success && router.push("/login");
	// }, [state?.success, router]);

	return (
		<form
			action={formAction}
			className={styles.form}
		>
			<input
				type="text"
				placeholder="username"
				name="username"
			/>

			<input
				type="password"
				placeholder="password"
				name="password"
			/>

			<button>Login</button>
			{state?.error}
      <Link href="/register">{"Don't have an account?"} <b>Register</b></Link>
		</form>
	);
};

export default LoginForm;
