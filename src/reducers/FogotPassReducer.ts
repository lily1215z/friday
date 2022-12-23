import {Dispatch} from 'redux';
import axios from 'axios';
import {authAPI} from '../api/api';

const TEST = 'TEST';

const initialState = {}

export const FogotPassReducer = (state: any = initialState, action: fogotPassActionType): any => {
    switch (action.type) {
        case TEST:
            return state;

        default:
            return state
    }
}
//action creator
export const testAC = () => {
    return {type: TEST} as const
}

//thunk
export const testTC = (): any => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.test()
        if (res.data) {
            dispatch(testAC())
        } else {
            console.log(res.data, dispatch)  //here general function
        }
    } catch(e) {
        if (axios.isAxiosError(e)) {
            console.log(e, dispatch)  //here general function
        }
    }
}

//type
export type fogotPassActionType = ReturnType<typeof testAC>