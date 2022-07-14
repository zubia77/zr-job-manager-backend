import bcrypt from 'bcrypt';

const password ='abc123'

// const salt = await bcrypt.genSalt();
// console.log(salt);
// const hash = await bcrypt.hash(password, salt);
// console.log(hash);

const databaseHash = '$2b$10$QcvBuhjwnjXdnO3Ll2NjP.F1PspQuHZjRs0ozK4PI.dAqUCatLpG6'
console.log(await bcrypt.compare(password, databaseHash));