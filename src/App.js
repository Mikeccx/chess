import logo from './logo.svg';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
// import { Hello } from './component/hello';
// import { Game } from './component/board'
// import { State } from './component/setState'
import './mock/data'
import 'antd/dist/antd.css'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Game/>
      <State/> */}
    </div>
    </Provider>
  );
}

export default App;
