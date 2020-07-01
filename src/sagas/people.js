import { put, call, takeLatest } from 'redux-saga/effects';
import { callAPI, formatErrorResponse } from '../utils';

function* fetchPeople() {
  try {
    let response = yield call(callAPI, 'people');
    yield put({ type: 'FETCH_PEOPLE_SUCCESS', payload: response.data });
  } catch (error) {
    let payload = formatErrorResponse(error);
    yield put({ type: 'FETCH_PEOPLE_ERROR', payload });
  }
}

export function* peopleSaga() {
  yield takeLatest('FETCH_PEOPLE', fetchPeople)
}
