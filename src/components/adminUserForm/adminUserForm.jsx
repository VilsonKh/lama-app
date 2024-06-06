"use client"

import React from 'react'
import styles from './adminUserForm.module.css';
import { addUser } from '@/lib/action';
import { useFormState } from "react-dom";
const AdminUserForm = () => {

  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <div className={styles.container}>
      <h1>User Form</h1>
      <form action={formAction}>
        <input
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
        />
        <input
          type="text"
          placeholder="img"
          name="img"
        />
        <select name="isAdmin" id="">
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>

        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AdminUserForm