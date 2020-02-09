'use strict';

// set NODE_ENV=development
// node console/install

const Application = require('../Application');
const Console = require('evado/console/Console');
const instance = new Console({Application});

(async () => {
    try {
        await instance.execute(async () => {
            await instance.clearDatabase();
            await instance.deployAssets();
            await instance.createUsers();
            await instance.createSecurity();
            await instance.createTasks();
        });
    } catch (err) {
        console.error(err);
    }
    process.exit();
})();