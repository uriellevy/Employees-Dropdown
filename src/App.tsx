import './App.css';
import HomeView from './components/HomeView';
import { EmployeesContextProvider } from './context/context';

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
