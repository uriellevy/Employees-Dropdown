import { useState, createContext } from "react";
import { Employee } from "../interfaces/interfaces";
import { data } from "../consts/Consts";

export interface EmployeesContextType {
    employees: Employee[]
    onInfoItemDelete: (id:number) => void
    onEmployeeSelect: (id: number) => void
    onOpenEditMode: (id: number) => void
    onInfoItemEditConfirm: (firstName: string, lastName: string, userName: string, bio: string, id: number) => void
};


export const EmployeesContext = createContext<EmployeesContextType | null | undefined>(null);

export const EmployeesContextProvider = (props: any) => {
    const [employees, setEmployees] = useState(data.map((curr) => ({...curr, isSelected: false, isEditMode: false})));

    
    const onEmployeeSelect = (id: number) => {
        const updatedList = employees.map((curr) => {
            if(curr.id === id) {
                return {...curr, isSelected: true};
            }else return {...curr, isSelected: false}
        });
        setEmployees(updatedList);
    }
    
    const onInfoItemDelete = (id:number) => {
        setEmployees((prevList) => {
          const updatedList =  prevList.filter((curr) => curr.id !== id);
          return updatedList;
        });
    };

    const onOpenEditMode = (id: number) => {
        const updatedList = employees.map((curr) => {
            if(curr.id === id) {
                return {...curr, isEditMode: true};
            }else return {...curr, isEditMode: false};
        });
        setEmployees(updatedList);
    }

    const onInfoItemEditConfirm = (firstName: string, lastName: string, userName: string, bio: string, id: number) => {
        const updatedList = employees.map((curr) => {
            if(curr.id === id) {
                return {...curr, first_name: firstName, last_name: lastName, username: userName, bio: bio, isEditMode:false}
            }else return {...curr, isEditMode: false};
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