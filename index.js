const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function callback(accumulator, el){
        return el += accumulator 
    };


const totalBatteries = batteryBatches.reduce(callback,0)

