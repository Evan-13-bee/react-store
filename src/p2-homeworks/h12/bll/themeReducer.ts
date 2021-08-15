const initState = {
    theme: ''
};
type ThemeActionType = {
    type: string
    color: string
}
export const themeReducer = (state = initState, action: ThemeActionType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            const newState = {...state, theme: action.color}
            return newState;
        }
        default: return state;
    }
};

export const changeThemeC = (color: string): ThemeActionType => {
    return {type: 'CHANGE_THEME', color}
}; // fix any