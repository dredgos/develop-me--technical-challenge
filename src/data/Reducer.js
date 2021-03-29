import initial from './Initial';

const newPlayer = (state, {data}) => {
    return {
        ...state,
        players: [...state.players, data]
    }
}

// Logic for starting the tournament

// Durstenfeld Array Shuffle
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const startTournament = (state) => {
    return {
        ...state,
        players: shuffle(state.players),
        tournamentStarted: true,
    }
}

// Creating all the matches

const createAllMatches = (state) => {
    let generatedMatches = [];
    let totalmatches = state.players.length / 2;
    let allocated = 0;
    
    for (let i = 1; i <= totalmatches; i += 1) {
        generatedMatches.push ({
            matchID: i,
            player1: state.players[allocated],
            player2: state.players[allocated + 1], 
        })
        allocated = allocated += 2;
    }
    
    return {
        ...state,
        matches: generatedMatches
    }
}

// Populating all the matches

const reducer = (state, action) => {
    switch(action.type) {
        case "ADDPLAYER": return newPlayer(state, action);
        case "STARTTOURNAMENT": return createAllMatches(startTournament(state, action));
        case "RESET": return initial;
        default: return initial;
    }
}

export default reducer;