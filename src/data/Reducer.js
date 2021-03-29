import initial from './Initial';

const newPlayer = (state, {data}) => {
    return {
        ...state,
        players: [...state.players, data]
    }
}

// Durstenfeld Array Shuffle
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffleArray =  (state) => {
    return{
        ...state,
        players: shuffle(state.players)
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADDPLAYER": return newPlayer(state, action);
        case "SHUFFLE": return shuffleArray(state, action);
        default: return initial;
    }
}

export default reducer;