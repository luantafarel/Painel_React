const mongoose = require('mongoose')
const collection = 'painew'
const connection = {
  mongoAtlas: 'mongodb+srv://admin:admin@cluster0-e7yyt.mongodb.net/painew',
  mongoLocal: `mongodb://localhost:27017/${collection}`
}
exports.connect = function() {
  return new Promise((resolve,reject) => {
    mongoose
      .connect(connection.mongoLocal,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 1000
      })
      .then(function() {
        console.log('MongoDB connected!')
        resolve()
      })
      .catch(function(error) {
        console.log(error)
        reject(error)
      })
  })
}