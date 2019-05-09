import { put, takeEvery } from 'redux-saga/effects';

function* addTodo(action) {
    console.log('add todoList by saga, action: ', action);
    yield put({type: "ADD_TODO", id: action.id, text: action.text});
}

function* reduceTodo(action) {
    console.log('reduce todoList by saga, action: ', action);
    yield put({type: "REDUCE_TODO", id: action.id, text: action.text});
}

export function* addTodoSaga() {
    yield takeEvery("ADD_TODO_SAGA", addTodo);
}

export function* reduceTodoSaga() {
    yield takeEvery("REDUCE_TODO_SAGA", reduceTodo);
}
