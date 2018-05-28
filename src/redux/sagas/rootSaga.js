import { all, fork } from 'redux-saga/effects';
import watcherSaga from './sagas';

export default function* rootSaga() {
	yield all([fork(watcherSaga)]);
}
