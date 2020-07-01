import { all } from 'redux-saga/effects';
import { peopleSaga } from './people';

export function* rootSaga() {
    yield all([
        peopleSaga()
    ]);
}
