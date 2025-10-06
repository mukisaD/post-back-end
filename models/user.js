const mongooes = requires("mongooes")

const userschema = mongooes.schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password:{ type: String, required: true }



});

module.exports = mongoose.model('user', userschema)

