import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import {addAction, reduceAction, addActionForSaga, reduceActionForSaga, getListForSaga} from './actions';
import './App.css';

let id = 0;

function App({todoList, add, reduce, addBySaga, reduceBySaga, getListBySaga }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>
                    Redux Example:
                    <div>{todoList.map(({id, text}) => <p key={id}>{id}, {text}</p>)}</div>
                </div>
                <button onClick={add}>AddTodo</button>
                <button onClick={reduce}>ReduceTodo</button>
                <button onClick={addBySaga}>AddBySaga</button>
                <button onClick={reduceBySaga}>reduceBySaga</button>
                <button onClick={getListBySaga}>getListBySaga</button>
            </header>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    add: () => dispatch(addAction(++id, `text: ${id}`)),
    reduce: () => dispatch(reduceAction()),
    addBySaga: () => dispatch(addActionForSaga(++id, `text: ${id}`)),
    reduceBySaga: () => dispatch(reduceActionForSaga()),
    getListBySaga: () => dispatch(getListForSaga())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
