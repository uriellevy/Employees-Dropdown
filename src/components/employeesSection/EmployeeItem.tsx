import React, { useContext, useState } from 'react';
import classes from "./EmployeeItem.module.scss";
import { Employee } from '../../interfaces/interfaces';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { EmployeesContext, EmployeesContextType } from '../../context/context';


interface EmployeeItemProps {
  employee: Employee
  onEmployeeSelect: (id: number) => void
}

const EmployeeItem = ({ employee, onEmployeeSelect }: EmployeeItemProps) => {
  const { employees } = useContext(EmployeesContext) as EmployeesContextType;
  const { profile_pic, first_name, last_name, email } = employee;
  const [isArrowOpen, setIsArrowOpen] = useState(false);
  const subEmployees = employees.filter((item) => item.manager_id === employee.id);
  const isManager = subEmployees.length !== 0;
  const arrowIconClassName = `${classes.arrowRightIcon} ${isArrowOpen ? classes.ArrowDown : ""}`;

  const expandHandler = () => {
    if (subEmployees.length !== 0) {
      setIsArrowOpen(prev => !prev)
    }
  }

  const selectItemHandler = (id: number) => {
    onEmployeeSelect(id)
  }

  return (
    <div className={classes.employeeItemWrapper}>
      <div className={classes.mainItem} onClick={() => selectItemHandler(employee.id)}>
        {isManager ? <MdKeyboardArrowRight className={arrowIconClassName} onClick={expandHandler} /> : <BsDot className={classes.dotIcon} />}
        <img className={classes.employeeImage} src={profile_pic} />
        <div className={classes.textDiv}>
          <div className={classes.fullName}>{`${first_name} ${last_name}`}</div>
          <div className={classes.email}>{email}</div>
        </div>
      </div>
      {isArrowOpen &&
        <>
          {subEmployees.map((curr) => (
            <EmployeeItem employee={curr} key={curr.id} onEmployeeSelect={onEmployeeSelect} />
          ))}
        </>}

    </div>
  )
}

export default EmployeeItem