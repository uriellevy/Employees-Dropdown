import React, { useContext } from 'react';
import classes from "./Employees.module.scss";
import { EmployeesContext, EmployeesContextType } from '../../context/context';
import EmployeeItem from './EmployeeItem';

const Employees = () => {
    const { employees } = useContext(EmployeesContext) as EmployeesContextType;

    return (
        <div className={classes.employeesContainer}>
            <header className={classes.employeesHeader}>Employees</header>
            <ul className={classes.employeesList}>
                {employees.map((curr,idx) => (
                    <EmployeeItem employee={curr} key={curr.id}/>
                ))}
            </ul>
        </div>
    )
}

export default Employees