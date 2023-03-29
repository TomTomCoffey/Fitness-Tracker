const data = require('../data/cardio.json');

function getCardio(){
    return data.cardio;
}

function getCardiobyName(cardio) {
    return data.cardio.find(cardio => cardio.cardio === cardio);
}

function addCardio(cardio) {
    cardio.id = data.cardio.length + 1;
    data.cardio.push(cardio);
}

function updateCardio(cardio) {
    const index = data.cardio.findIndex(s => s.id === cardio.id);
    data.cardio[index] = cardio;
}

function deleteCardio(cardio) {
    const index = data.cardio.findIndex(s => s.cardio === cardio);
    data.cardio.splice(index, 1);
}

function searchCardio(searchTerm) {
    return data.cardio.filter(cardio => {
        return  cardio.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
            cardio.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
            cardio.brand.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = {
    getCardio,
    getCardiobyName,
    addCardio,
    updateCardio,
    deleteCardio,
    searchCardio
}
