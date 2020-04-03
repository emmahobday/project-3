//environment variables used and shared throughout the app 

const secret = 'This is our top secret restaurant app'
const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/database-name'

module.exports = {
  secret
}
