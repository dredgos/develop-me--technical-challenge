export const addPlayer = (data) => {
    return {
        type: "ADDPLAYER",
        data: data
    }
}

export const shufflePlayers = (data) => {
    return {
        type: "SHUFFLE",
        data: data,
    }
}