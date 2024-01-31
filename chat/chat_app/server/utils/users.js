
let users = [];

// function to add a new user to the user array
userJoin = (id, username, room) => {
    const user = { id, username, room };

    
    const check = checkUser(users, user);

    
    if (check) {
        users.push(user);
        return user;
    }

    
    return false;
}

// function to check if a user already exists in the users array
checkUser = (users, user) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user.username && users[i].room === user.room) {
            return false
        }
    }
    return true
}

// function to get the user object based on the user ID
getCurrentUser = (id) => {
    return users.find(user => user.id === id);
}

// function to remove a user from the users array based on the user ID
userLeave = (id) => {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        
        return users.splice(index, 1)[0];
    }
}


getRoomUsers = (room) => {
    return users.filter(user => user.room === room);
}

// export the functions to be used in other files
module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}
