import { useState, createContext, useEffect } from "react";
import { Employee } from "../interfaces/interfaces";
import { data } from "../consts/Consts";

export interface EmployeesContextType {
    employees: Employee[]
    onInfoItemDelete: (id:number) => void
};


export const EmployeesContext = createContext<EmployeesContextType | null>(null);

export const EmployeesContextProvider = (props: any) => {
    const [employees, setEmployees] = useState(data.map((curr) => ({...curr, isSelected: false, isEditMode: false})));

    const onInfoItemDelete = (id:number) => {
        setEmployees((prevList) => {
          const updatedList =  prevList.filter((curr) => curr.id !== id);
          return updatedList;
        });
    };

    const value = {
        employees,
        onInfoItemDelete,
    };

    return (
        <EmployeesContext.Provider value={value}>
            {props.children}
        </EmployeesContext.Provider>
    );
}