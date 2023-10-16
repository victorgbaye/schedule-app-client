import React from 'react'
import styles from "./Client.module.scss";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Topbar from '../../components/Compound/Topbar/Topbar';
const Client = () => {
  return (
   <>
   <Topbar
   title="Clients"
   Children="Add client"
   />
   
    <table className={styles.tableContainer}>
        <thead className={styles.tableHead}>
            <tr className={styles.tablerow}>
                <td>Name & Email</td>
                <td>Phone No</td>
                <td><p></p></td>
            </tr>
        </thead>
        <tbody className={styles.tableBody}>
            <tr className={styles.tablerow}>
                <td className={styles.ClientNameEmail}>
                    <p style={{fontWeight: 600}}>John Doe</p>
                    <p>John.joe@gmail.com</p>
                </td>
                <td>0831348839</td>
                <td>
                    <MoreHorizIcon/>
                </td>
            </tr>
        </tbody>
        
    </table>
   </>
  )
}

export default Client