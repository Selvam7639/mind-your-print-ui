import "./App.css";
import Settings from "./component/settings/Settings";
import Sidebar from './component/sideBar/sideBar';

function App() {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <Sidebar/>
      <Settings />
    </div>
    
  );
}

export default App;
