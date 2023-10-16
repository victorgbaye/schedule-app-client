import React from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.LoginContainer}>
    <section>
      <header className={styles.LoginHeaderWrapper}>
        <span className={styles.LoginLogo}>O</span>
        <span className={styles.LoginHeaderText}>Welcome back!</span>
      </header>
      <div className={styles.LoginInputWrapper}>
        <Input
        type="email"
        label="Email"
        placeholder="Type email here"
        />
        <Input
        type="password"
        label="Password"
        placeholder="Type password here"
        />
      </div>
      <div className={styles.LoginButtonWrapper}>
      <Button
      type="button"
  
      >
        Continue
        </Button>
      </div>
    </section>
    <section>

    </section>

    </div>
  )
}

export default Login