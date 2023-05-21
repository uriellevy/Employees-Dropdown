import React from 'react';
import classes from "./InfoFooter.module.scss";
import {MdKeyboardArrowRight, MdKeyboardArrowDown, MdOutlineCancel} from "react-icons/md";
import {GiConfirmed} from "react-icons/gi";
import {GrCircleInformation} from "react-icons/gr";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBin6Line} from "react-icons/ri";
const InfoFooter = () => {
  return (
    <div className={classes.infoFooterWrapper}>
        <RiDeleteBin6Line className={classes.footerDelete}/>
        <FiEdit className={classes.footerEdit}/>
    </div>
  )
}

export default InfoFooter