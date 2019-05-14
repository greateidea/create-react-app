import { put, takeEvery, call } from 'redux-saga/effects';
import { getList } from '../service/api';

function* addTodo(action) {
    console.log('add todoList by saga, action: ', action);
    yield put({type: "ADD_TODO", id: action.id, text: action.text});
}

function* reduceTodo(action) {
    console.log('reduce todoList by saga, action: ', action);
    yield put({type: "REDUCE_TODO", id: action.id, text: action.text});
}

function* getListByApi() {
    console.log('get list by saga, action: ');
    const result = yield call(getList);
    console.log('result', result);
    yield put({type: 'GET_LIST_FROM_API', records: result.records});
}

export function* todoSaga() {
    yield takeEvery("GET_LIST_SAGA", getListByApi);
    yield takeEvery("ADD_TODO_SAGA", addTodo);
    yield takeEvery("REDUCE_TODO_SAGA", reduceTodo);
}
