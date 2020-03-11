module.exports = function calculateHanoi(diskNumber,turnsSpeed){
    let turns  = Math.pow(2, diskNumber)-1;
    let seconds = (Math.pow(2, diskNumber)-1)/(turnsSpeed/3600);
    return {turns,seconds};
}