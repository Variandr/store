import {applyMiddleware, combineReducers, createStore} from "redux"
import TechReducer from "./techReducer"
import thunkMiddleware from "redux-thunk"
import ClothesReducer from "./clothesReducer"
import AllCategoriesReducer from "./allCategoriesReducer"
import BagReducer from "./bagReducer"
import ProductReducer from "./productReducer"

let reducers = combineReducers({
    techPage: TechReducer,
    clothesPage: ClothesReducer,
    allCategoriesPage: AllCategoriesReducer,
    bagPage: BagReducer,
    productPage: ProductReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store