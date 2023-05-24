import React, { useContext, useState } from 'react';
import classes from "./InfoWrapper.module.scss";
import InfoFooter from './InfoFooter';
import InfoItem from './InfoItem';
import { EmployeesContext, EmployeesContextType } from '../../context/context';
import { CONSTS } from '../../consts/Consts';

const InfoWrapper = () => {
  const { employees, onInfoItemDelete, onOpenEditMode, onInfoItemEditConfirm } = useContext(EmployeesContext) as EmployeesContextType;
  const [isEditModeOpen, setIsEditModeOpen] = useState(false);

  const selectedEmployee = employees.find((curr) => curr.isSelected === true);

  return (
    <div className={classes.infoWrapper}>
      {selectedEmployee ?
        <>
          <InfoItem employee={selectedEmployee} isEditModeOpen={isEditModeOpen} onInfoItemEditConfirm={onInfoItemEditConfirm} setIsEditModeOpen={setIsEditModeOpen}/>
          <InfoFooter onInfoItemDelete={onInfoItemDelete} setIsEditModeOpen={setIsEditModeOpen} onOpenEditMode={onOpenEditMode} employee={selectedEmployee} />
        </>
        :
        <div className={classes.notSelectedText}>{CONSTS.HEADER}</div>
      }
    </div>
  )
}

export default InfoWrapper