"use client";

import React from "react";
import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";
const AdminPostForm = ({userId}) => {
	const [state, formAction] = useFormState(addPost, undefined);

	return (
		<form
			action={formAction}
			className={styles.container}
		>
			<h1>Add New Post</h1>

			<input
				type="text"
				placeholder="title"
				name="title"
			/>
			<input
				type="text"
				placeholder="desc"
				name="desc"
			/>
			<input
				type="text"
				placeholder="slug"
				name="slug"
			/>
			<input
				type="hidden"
				placeholder="userId"
				name="userId"
        value={userId}
			/>
			<button>Submit</button>
			{state && state.error}
		</form>
	);
};

export default AdminPostForm;
