import React from 'react'
import Topbar from '../../components/Compound/Topbar/Topbar'
import styles from "./Bookings.module.scss";
import Button from '../../components/UI/Button/Button';


const Bookings = () => {
  return (
    <>
        <Topbar
        title="Bookings"
        link="Share link"
        Children="Create booking"
        />
        <div className={styles.BookingsDate}>January 23rd 2023</div>
        <table className={styles.BookingsTable}>
            <tr >
                <th>Name</th>
                <th>Service</th>
                <th>Time</th>
                <th>Phone No</th>
                <th>Status</th>
                <th></th>
            </tr>
            <tr className={styles.tableDataContainer}>
                <td>John Doe</td>
                <td>Hair cut</td>
                <td>5-6pm</td>
                <td>0831348839</td>
                <td>accepted</td>
                <td>
                    <Button
                    children="Cancel"
                    style={{
                        background:"none", 
                        color:"black", 
                        border:"1px solid #212121", 
                        padding: "10px 32px",
                        margin:"0px"
                    }}
                    
                    />
                </td>
            </tr>
        </table>

    </>
  )
}

export default Bookings