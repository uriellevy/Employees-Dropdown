import React from 'react';
import classes from "./InfoItem.module.scss";
import { Employee } from '../../interfaces/interfaces';

interface InfoItemProps {
    employee: Employee
}

const InfoItem = ({ employee }: InfoItemProps) => {
    const { first_name, last_name, profile_pic, username, email, street_address, city, bio } = employee;
    
    return (
        <div className={classes.infoItemWrapper}>
            <div className={classes.infoTopRow}>
                <img className={classes.infoAvatar} src={profile_pic} alt={first_name} />
                <div className={classes.topRowTextDiv}>
                    <div className={classes.text}>{`${first_name} ${last_name}`}</div>
                    <div className={classes.text}>{`User Name: ${username}`}</div>
                    <div className={classes.text}>{`E-mail: ${email}`}</div>
                    <div className={classes.text}>{`Adress: ${street_address}, ${city}`}</div>
                </div>
            </div>
            <div className={classes.infoBottomRow}>
                {bio}
            </div>
        </div>
    )
}

export default InfoItem