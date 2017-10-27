import createStore from 'redux-zero'
import {SUSHI} from './data'

const initialState = {
    food: SUSHI,
    foodUser: [],
    selectedItem : -1,
}

const store = createStore(initialState)
export default store