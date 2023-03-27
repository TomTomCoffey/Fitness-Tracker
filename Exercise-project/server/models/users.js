const data = require('../data/users.json');



function getUser(){
    return data.users;
}

function getUserById(id) {
    return data.users.find(users => users.id === id);
}


function addUser(users) {
    users.id = data.users.length + 1;
    data.users.push(users);
}


function updateUser(users) {
    const index = data.users.findIndex(s => s.id === users.id);
    data.userss[index] = users;
}


function deleteUser(id) {
    const index = data.users.findIndex(s => s.id === id);
    data.users.splice(index, 1);
}


function searchUser(searchTerm) {
    return data.users.filter(users => {
        return  users.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
            users.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
            users.brand.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = {
    getUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    searchUser
    
};