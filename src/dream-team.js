module.exports = function createDreamTeam(members) {
    let secretName = [];
    if (!Array.isArray(members)) return false;
    members.forEach(newEl => {
        if (typeof newEl == 'string'){
            secretName.push(newEl.trim()[0].toUpperCase());
        }
    });
    return secretName.sort().join('');
};