import React, {useContext} from 'react';
import classes from "./InfoWrapper.module.scss";
import InfoFooter from './InfoFooter';
import InfoItem from './InfoItem';
import { EmployeesContext, EmployeesContextType } from '../../context/context';

const InfoWrapper = () => {
    const {employees} = useContext(EmployeesContext) as EmployeesContextType;
    const dummyUser = employees[0];

  return (
    <div className={classes.infoWrapper}>
        <InfoItem employee={dummyUser}/>
        <InfoFooter/>
    </div>
  )
}

export default InfoWrapper