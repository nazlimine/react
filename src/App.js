import './App.css';
import IndexPage from './pages';
import {Route,Routes,Router,BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import Store  from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Provider store={Store.store}>
          <PersistGate loading={null} persistor={Store.persistor}>
              <Routes>
                  <Route path="/users" element={<IndexPage/>}></Route>
              </Routes>
            </PersistGate>
          </Provider>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
