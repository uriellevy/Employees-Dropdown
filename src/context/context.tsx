import { useState, createContext } from "react";
import { Employee } from "../interfaces/interfaces";
import { data } from "../consts/Consts";

export interface EmployeesContextType {
    employees: Employee[]
    onInfoItemDelete: (id: number) => void
    onEmployeeSelect: (id: number) => void
    onOpenEditMode: (id: number) => void
    onInfoItemEditConfirm: (currEmployee: Employee) => void
};


export const EmployeesContext = createContext<EmployeesContextType | null | undefined>(null);

export const EmployeesContextProvider = (props: any) => {
    const [employees, setEmployees] = useState(data.map((curr) => ({ ...curr, isSelected: false, isEditMode: false })));


    const onEmployeeSelect = (id: number) => {
        const updatedList = employees.map((curr) => {
            return curr.id === id ? { ...curr, isSelected: true } : { ...curr, isSelected: false };
        });
        setEmployees(updatedList);
    }

    const onInfoItemDelete = (id: number) => {
        setEmployees((prevList) => {
            const updatedList = prevList.filter((curr) => curr.id !== id);
            return updatedList;
        });
    };

    const onOpenEditMode = (id: number) => {
        const updatedList = employees.map((curr) => {
            return curr.id === id ? { ...curr, isEditMode: true } : { ...curr, isEditMode: false };
        });
        setEmployees(updatedList);
    }

    const onInfoItemEditConfirm = (currEmployee: Employee) => {
        const {first_name, last_name, username, bio, street_address, city} = currEmployee;
        const updatedList = employees.map((curr) => {
            return curr.id === currEmployee.id ? { ...curr, first_name, last_name, username, bio, isEditMode: false, street_address, city } : { ...curr, isEditMode: false };
        })
        setEmployees(updatedList)
    }

    const value = {
        employees,
        onInfoItemDelete,
        onEmployeeSelect,
        onOpenEditMode,
        onInfoItemEditConfirm,
    };

    return (
        <EmployeesContext.Provider value={value}>
            {props.children}
        </EmployeesContext.Provider>
    );
}