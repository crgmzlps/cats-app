import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Cat, getCats } from '../../app/api';
import { getCatsFetch, getCatsSuccess } from './catSlice';

function* workGetCatsFetch() {
  const cats: Cat[] = yield call(() => getCats());
  yield put(getCatsSuccess(cats));
  // yield put(push('/about'));
}

function* catSaga() {
  yield takeEvery(getCatsFetch.type, workGetCatsFetch);
}

export default catSaga;
