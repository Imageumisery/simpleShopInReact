import { createStore, combineReducers } from 'redux';
import { productsReducer } from './products.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    products: productsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>
