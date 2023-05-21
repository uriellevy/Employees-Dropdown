import React from 'react';
import './App.css';
import HomeView from './components/HomeView';
import { EmployeesContextProvider } from './context/context';
import {MdKeyboardArrowRight, MdKeyboardArrowDown, MdOutlineCancel} from "react-icons/md";
import {GiConfirmed} from "react-icons/gi";
import {GrCircleInformation} from "react-icons/gr";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBin6Line} from "react-icons/ri";

function App() {
  return (
    <div className="app">
      <EmployeesContextProvider>
        <HomeView />
      </EmployeesContextProvider>
    </div>
  );
}

export default App;
