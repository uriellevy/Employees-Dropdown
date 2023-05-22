import React, {useContext} from 'react';
import classes from "./InfoWrapper.module.scss";
import InfoFooter from './InfoFooter';
import InfoItem from './InfoItem';
import { EmployeesContext, EmployeesContextType } from '../../context/context';

const InfoWrapper = () => {
    const {employees, onInfoItemDelete} = useContext(EmployeesContext) as EmployeesContextType;
    const dummyUser = employees[0];
    const selectedEmployee = employees.find((employee) => employee.isEditMode);

  return (
    <div className={classes.infoWrapper}>
        {selectedEmployee ?
        <InfoItem employee={dummyUser}/>
        :
            <div className={classes.notSelectedText}>Select Employee</div>
        }
        <InfoFooter onInfoItemDelete={onInfoItemDelete} employee={dummyUser}/>
    </div>
  )
}

export default InfoWrapper