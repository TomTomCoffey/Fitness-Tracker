const data = require('../data/users.json')
// const { connect, ObjectId } = require('./mongo');

// const COLLECTION_NAME = 'users';

// async function collection() {
//     const db = await connect();
//     return db.collection(COLLECTION_NAME);
// }

// async function getAll() {
//     const col = await collection();
//     const items = await col.find().toArray();
//     return items;
// }


function getUsers() {
  return data.users;
}

function getUserbyId(id) {
    return data.users.find(user => user.id === id);
}

function addUser(user) {
    user.id = data.users.length + 1;
    data.users.push(user);
}

function updateUser(user) {
    const index = data.users.findIndex(p => p.id === user.id);
    data.users[index] = user;
}

function deleteUser(id) {
    const index = data.users.findIndex(p => p.id === id);
    data.users.splice(index, 1);
}

function searchUsers(searchTerm) {
    return data.users.filter(user => {
        return  user.name.toLowerCase().includes(searchTerm.toLowerCase())  ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())  ||
            user.password.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = {
    getUsers,
    getUserbyId,
    addUser,
    updateUser,
    deleteUser,
    searchUsers

};