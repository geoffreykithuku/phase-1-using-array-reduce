const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Sum of all the assembled batteries
let totalBatteries = batteryBatches.reduce( (batteryAmount, assembledBatteries) => { return batteryAmount + assembledBatteries })