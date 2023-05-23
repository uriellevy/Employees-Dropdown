import classes from "./InfoFooter.module.scss";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Employee } from '../../interfaces/interfaces';

interface InfoFooterProps {
  onInfoItemDelete: (id: number) => void
  setIsEditModeOpen: any
  employee: Employee
  onOpenEditMode: (id: number) => void
}

const InfoFooter = ({ onInfoItemDelete, setIsEditModeOpen, onOpenEditMode, employee }: InfoFooterProps) => {

  const openEditModeHandler = (id: number) => {
    setIsEditModeOpen(true);
    onOpenEditMode(id)
  };



  return (
    <div className={classes.infoFooterWrapper}>
      <RiDeleteBin6Line className={classes.footerDelete} onClick={() => onInfoItemDelete(employee.id)} />
      <FiEdit className={classes.footerEdit} onClick={() => openEditModeHandler(employee.id)} />
    </div>
  )
}

export default InfoFooter