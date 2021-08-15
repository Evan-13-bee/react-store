import { type } from "os";

export type InitialStateType = {
    loading: boolean
}

type StoreActionsType = LoadingACType

const initState: InitialStateType = {
    loading: false
};

export const loadingReducer = (state = initState, action: StoreActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case "changeLoadStatus": {
            const newLoadStatus = state.loading ? false : true
            const newState = { ...state, loading: newLoadStatus }
            return newState;
        }
        default: return state;
    }
};
type LoadingACType = {
    type: string
}
export const loadingAC = (): LoadingACType => {return {type: 'changeLoadStatus'}}; // fix any