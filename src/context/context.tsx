import { useState, createContext, useCallback, useEffect } from "react";
import { Employee } from "../interfaces/interfaces";
import { data } from "../consts/Consts";

export interface EmployeesContextType {
    employees: Employee[]
};


export const EmployeesContext = createContext<EmployeesContextType | null>(null);

export const EmployeesContextProvider = (props: any) => {
    const [employees, setEmployees] = useState(data);

    const value = {
        employees,
    };

    return (
        <EmployeesContext.Provider value={value}>
            {props.children}
        </EmployeesContext.Provider>
    );
}