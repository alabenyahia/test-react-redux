import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store";
import Posts from "./components/Posts";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Posts/>
            </div>
        </Provider>
    );
}

export default App;
