import { all } from 'redux-saga/effects';
import { todoSaga } from './todoListSaga';

export default function* rootSaga() {
    yield all([
        todoSaga(),
    ])
}
