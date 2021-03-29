export const addPlayer = (data) => {
    return {
        type: "ADDPLAYER",
        data: data
    }
}

export const prepareTournament = (data) => {
    return {
        type: "STARTTOURNAMENT",
        data: data,
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}

