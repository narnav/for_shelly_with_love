import React from 'react';
import './App.css';
import Login from './app/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './app/loginSlice'
import Note from './Note';

function App() {
    const userName = useSelector(selectUserName);
    return (
        <div className="App">
            <header className="App-header">

                {userName && <div>Hello {userName}</div>}
                <Login></Login>
                <Note></Note>
            </header>
        </div>
    );
}

export default App;
