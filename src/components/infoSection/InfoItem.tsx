import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import classes from "./InfoItem.module.scss";
import { Employee } from '../../interfaces/interfaces';

interface InfoItemProps {
    employee: Employee
    isEditModeOpen: boolean
    onInfoItemEditConfirm: any
    setIsEditModeOpen: any
}

const InfoItem = ({ employee, isEditModeOpen, onInfoItemEditConfirm, setIsEditModeOpen }: InfoItemProps) => {
    const { first_name, last_name, profile_pic, username, street_address, city, bio } = employee;
    const [firstName, setFirstName] = useState(first_name);
    const [lastName, setLastName] = useState(last_name);
    const [userName, setUserName] = useState(username);
    const [bioContent, setBioContent] = useState(employee.bio);

    useEffect(() => {
        setFirstName(first_name)
        setLastName(last_name)
        setUserName(username)
        setBioContent(bio)
    }, [employee])

    const onEditSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInfoItemEditConfirm(firstName, lastName, userName, bioContent, employee.id)
        setIsEditModeOpen(false)
    }


    return (
        <div className={classes.infoItemWrapper}>
            {isEditModeOpen ?
                <form className={classes.editWrapper} onSubmit={onEditSubmitHandler}>
                    <div className={classes.editInput}>
                        <label>First Name:</label>
                        <input className={classes.firstName} type="text" value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                    </div>
                    <div className={classes.editInput}>
                        <label>Last Name:</label>
                        <input className={classes.lastName} type="text" value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}/>
                    </div>
                    <div className={classes.editInput}>
                        <label>User Name:</label>
                        <input className={classes.userName} type="text" value={userName} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>
                    </div>
                    <div className={`${classes.editInput} ${classes.text}`}>
                        <label>Bio Content:</label>
                        <textarea className={classes.textArea} name="" id="" cols={30} rows={10} value={bioContent} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBioContent(e.target.value)}></textarea>
                    </div>
                    <input className={classes.editConfirm} type="submit" value={"Confirm"} />
                </form>
                :
                <>
                    <div className={classes.infoTopRow}>
                        <img className={classes.infoAvatar} src={profile_pic} alt={first_name} />
                        <div className={classes.topRowTextDiv}>
                            <div className={classes.text}>{`${first_name} ${last_name}`}</div>
                            <div className={classes.text}>{`User Name: ${username}`}</div>
                            <div className={classes.text}>{`Adress: ${street_address}, ${city}`}</div>
                        </div>
                    </div>
                    <div className={classes.infoBottomRow}>
                        {employee.bio}
                    </div>
                </>
            }
        </div>
    )
}

export default InfoItem