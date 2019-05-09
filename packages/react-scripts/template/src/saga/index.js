import { all  } from 'redux-saga/effects';
import {addTodoSaga, reduceTodoSaga} from './todoListSaga';

export default function* rootSaga() {
    yield all([
        addTodoSaga(),
        reduceTodoSaga()
    ])
}
