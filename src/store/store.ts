import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginActionType, LoginReducer} from '../reducers/LoginReducer';
import {registerActionType, RegisterReducer} from '../reducers/RegisterReducer';
import {fogotPassActionType, FogotPassReducer} from '../reducers/FogotPassReducer';
import {fogotPassCheckEmailActionType, FogotPassCheckEmailReducer} from '../reducers/FogotPassCheckEmailReducer';
import {createNewPassActionType, CreateNewPassReducer} from '../reducers/CreateNewPassReducer';
import {profileActionType, ProfileReducer} from '../reducers/ProfileReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    fogotPass: FogotPassReducer,
    fogotPassCheckEmail: FogotPassCheckEmailReducer,
    createNewPass: CreateNewPassReducer,
    profile: ProfileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>
export type AppActionType = registerActionType | profileActionType | loginActionType | fogotPassActionType
    | fogotPassCheckEmailActionType | createNewPassActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType>=useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()



//@ts-ignore
window.store = store