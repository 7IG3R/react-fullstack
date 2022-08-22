import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { configureStore } from './redux/configureStore';

//Initializing Redux Store : It just take reducer and inital state and return redux store
const store = configureStore();
class App extends Component{
    render(){
      return(
        <Provider store = {store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
        </Provider>
      )
    };

}
export default App;
