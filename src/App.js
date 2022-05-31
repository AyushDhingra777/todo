import logo from './logo.svg';
import './App.css';
import TodoTasks from './Components/TodoTasks';
import NetworkRequest from './Components/NetworkReq';

import GetData from './Components/GetData';

function App() {
  return (
    <div className="App">
      <TodoTasks />
      {/* <NetworkRequest /> */}
      {/* <GetData /> */}
    </div>
  );
}

export default App;
