import React, { useContext } from 'react';
import classes from "./Employees.module.scss";
import { EmployeesContext, EmployeesContextType } from '../../context/context';
import EmployeeItem from './EmployeeItem';
import { CONSTS } from '../../consts/Consts';

const Employees = () => {
    const { employees, onEmployeeSelect } = useContext(EmployeesContext) as EmployeesContextType;

    return (
        <div className={classes.employeesContainer}>
            <header className={classes.employeesHeader}>{CONSTS.HEADER}</header>
            <ul className={classes.employeesList}>
                {employees.map((curr) => (
                    <EmployeeItem employee={curr} key={curr.id} onEmployeeSelect={onEmployeeSelect}/>
                ))}
            </ul>
        </div>
    )
}

export default Employees