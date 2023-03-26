const data = require('../data/session.json');



function getSession(){
    return data.sessions;
}

function getSessionById(id) {
    return data.sessions.find(session => session.id === id);
}


function addSession(session) {
    session.id = data.sessions.length + 1;
    data.sessions.push(session);
}


function updateSession(session) {
    const index = data.sessions.findIndex(s => s.id === session.id);
    data.sessions[index] = session;
}


function deleteSession(id) {
    const index = data.sessions.findIndex(s => s.id === id);
    data.sessions.splice(index, 1);
}


function searchSessions(searchTerm) {
    return data.sessions.filter(session => {
        return  session.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
            session.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
            session.brand.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = {
    getSession,
    getSessionById,
    addSession,
    updateSession,
    deleteSession,
    searchSessions
    
};