import React, { Children } from 'react'
import Button from '../../UI/Button/Button'
import styles from "./Topbar.module.scss";

const Topbar = ({title, Children, link}) => {
  return (
    <>
        <header className={styles.TopbarHeader}>
            <div className={styles.TopbarTitle}>{title}</div>
            <div>
                <div className={styles.TopbarLinkButton}>
                    
                    <Button
                    style={{backgroundColor: '#7C2C89', padding: '10px 32px'}}
                    >
                        {Children}
                    </Button>
                    <p style={{marginRight:'32px'}}>{link}</p>
                </div>
               
            </div>
        </header>
    </>
  )
}

export default Topbar