import initial from './Initial';

const newPlayer = (state, {data}) => {
    return {
        ...state,
        players: [...state.players, data]
    }
}


const reducer = (state, action) => {
    switch(action.type) {
        case "ADDPLAYER": return newPlayer(state, action)
        default: return initial;
    }
}

export default reducer;