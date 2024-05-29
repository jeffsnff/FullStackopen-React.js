const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')


app.listen(config.PORT);
console.log(`Sever is running on PORT : ${config.PORT}`);