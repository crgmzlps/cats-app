import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import catSaga from '../feature/cats/catSaga';
import catReducer from '../feature/cats/catSlice';

const saga = createSagaMiddleware();
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  cats: catReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga, routerMiddleware(history)],
});

saga.run(catSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
