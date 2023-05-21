import React from 'react';
import classes from "./Employee.module.scss";
import { Employee } from '../../interfaces/interfaces';

interface EmployeeItemProps {
  employee: Employee
}

const EmployeeItem = ({employee}:EmployeeItemProps) => {
  return (
    <div>{employee.first_name}</div>
  )
}

export default EmployeeItem