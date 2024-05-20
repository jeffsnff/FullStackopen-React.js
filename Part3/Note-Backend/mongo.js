const mongoose = require('mongoose');

if(process.argv.length < 3){
  console.log('Give Password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack-notes:${password}@notes-database.julpkqu.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const Note = mongoose.model('Note', noteSchema)
const User = mongoose.model('User', userSchema)

const note = new Note({
  content: "This is a false note",
  important: false,
})

const user = new User({
  username: 'Professor Chaos',
  password: 'password',
})

// note.save().then(result => {
//   console.log("Note Saved!")
//   mongoose.connection.close()
// })

Note.find({important: false}).then( result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})