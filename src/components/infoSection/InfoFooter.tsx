import React from 'react';
import classes from "./InfoFooter.module.scss";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBin6Line} from "react-icons/ri";
import { Employee } from '../../interfaces/interfaces';

interface InfoFooterProps {
    onInfoItemDelete: (id:number) => void
    employee: Employee
}

const InfoFooter = ({onInfoItemDelete, employee}: InfoFooterProps) => {

  return (
    <div className={classes.infoFooterWrapper}>
        <RiDeleteBin6Line className={classes.footerDelete} onClick={() => onInfoItemDelete(employee.id)}/>
        <FiEdit className={classes.footerEdit}/>
    </div>
  )
}

export default InfoFooter