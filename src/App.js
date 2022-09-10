import './App.css';
import IndexPage from './pages';
import {Route,Routes,Router,BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store.js';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/users" element={<IndexPage/>}></Route>
            </Routes>
          </Provider>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
