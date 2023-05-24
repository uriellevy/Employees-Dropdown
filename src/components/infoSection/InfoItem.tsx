import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import classes from "./InfoItem.module.scss";
import { Employee } from '../../interfaces/interfaces';
import { CONSTS } from '../../consts/Consts';

interface InfoItemProps {
    employee: Employee
    isEditModeOpen: boolean
    onInfoItemEditConfirm: any
    setIsEditModeOpen: any
}

const InfoItem = ({ employee, isEditModeOpen, onInfoItemEditConfirm, setIsEditModeOpen }: InfoItemProps) => {
    const { first_name, last_name, profile_pic, username, street_address, city, bio, id, isEditMode, isSelected, email, manager_id } = employee;
    const { USER_NAME, LAST_NAME, FIRST_NAME, BIO, ADRESS, STREET, CITY } = CONSTS;
 
    const [person, setPerson] = useState<Employee>({
        first_name,
        last_name,
        username,
        street_address,
        city,
        bio,
        id,
        isEditMode,
        isSelected,
        email,
        profile_pic,
        manager_id,
    })

    useEffect(() => {
        setPerson({
            first_name,
            last_name,
            username,
            street_address,
            city,
            bio,
            id,
            isEditMode,
        })
    }, [employee])

    const onEditSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInfoItemEditConfirm(person)
        setIsEditModeOpen(false)
    }


    return (
        <div className={classes.infoItemWrapper}>
            {isEditModeOpen ?
                <form className={classes.editWrapper} onSubmit={onEditSubmitHandler}>
                    <div className={classes.editInput}>
                        <label>{FIRST_NAME}</label>
                        <input className={classes.firstName} name='first_name' type="text" value={person.first_name} onChange={(e: ChangeEvent<HTMLInputElement>) => setPerson({ ...person, [e.target.name]: e.target.value })} />
                    </div>
                    <div className={classes.editInput}>
                        <label>{LAST_NAME}</label>
                        <input className={classes.lastName} name='last_name' type="text" value={person.last_name} onChange={(e: ChangeEvent<HTMLInputElement>) => setPerson({ ...person, [e.target.name]: e.target.value })} />
                    </div>
                    <div className={classes.editInput}>
                        <label>{USER_NAME}</label>
                        <input className={classes.userName} name='username' type="text" value={person.username} onChange={(e: ChangeEvent<HTMLInputElement>) => setPerson({ ...person, [e.target.name]: e.target.value })} />
                    </div>
                    <div className={classes.editInput}>
                        <label>{STREET}</label>
                        <input className={classes.userName} name='street_address' type="text" value={person.street_address} onChange={(e: ChangeEvent<HTMLInputElement>) => setPerson({ ...person, [e.target.name]: e.target.value })} />
                    </div>
                    <div className={classes.editInput}>
                        <label>{CITY}</label>
                        <input className={classes.userName} name='city' type="text" value={person.city} onChange={(e: ChangeEvent<HTMLInputElement>) => setPerson({ ...person, [e.target.name]: e.target.value })} />
                    </div>
                    <div className={`${classes.editInput} ${classes.text}`}>
                        <label>{BIO}</label>
                        <textarea className={classes.textArea} name="bio" id="" cols={30} rows={7} value={person.bio} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPerson({ ...person, [e.target.name]: e.target.value })}></textarea>
                    </div>
                    <input className={classes.editConfirm} type="submit" value={"Confirm"} />
                </form>
                :
                <>
                    <div className={classes.infoTopRow}>
                        <img className={classes.infoAvatar} src={profile_pic} alt={first_name} />
                        <div className={classes.topRowTextDiv}>
                            <div className={classes.text}>{`${first_name} ${last_name}`}</div>
                            <div className={classes.text}>{`${USER_NAME} ${username}`}</div>
                            <div className={classes.text}>{`${ADRESS} ${street_address}, ${city}`}</div>
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