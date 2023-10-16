import React from 'react'
import styles from "./Sidebar.module.scss";
import { SidebarData } from './SidebarData';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const SideBar = () => {
  return (
    <>
       <div className={styles.sidebarContainer}>
       <header className={styles.sidebarHeader}>NWAH</header>
        <ul className={styles.sidebarList}>
          {
            SidebarData.map((SidebarItem, Key) => {
              return(
                <>
                  <li 
                    key={Key}
                    className={styles.sidebarItem}
                    id={window.location.pathname === SidebarItem.link ? styles.active : "" }
                    onClick={()=>{window.location.pathname = SidebarItem.link}}
                    >
                    <div>{SidebarItem.icon}</div>
                    <div>{SidebarItem.title}</div>
                  </li>
                 
                </>
              )
            })
          }
        </ul>
        <footer className={styles.sidebarFooter}>
          <div className={styles.sidebarFooterLogout}>
            <LogoutIcon/>
            <p>Log Out</p>
          </div>
          <div  className={styles.sidebarFooterUserSec}>
            <AccountCircleOutlinedIcon/>
            <div>
              <p>Julliet Johnson</p>
              {/* <p style={{fontSize:'12px', fontStyle: 'normal', fontWeight:'400'}}>Small Description text</p> */}
            </div>
          </div>
        </footer>
        {/* <header className={styles.sidebarHeader}>NWAH</header>
        <ul className={styles.sidebarItemContainer}>
          <li><span>O</span>Calendar</li>
          <li><span>O</span>Bookings</li>
          <li><span>O</span>Client</li>
          <li><span>O</span>Services</li>
          <li><span>O</span>Profile</li>
        </ul> */}

    </div>
    </>
  )
}

export default SideBar