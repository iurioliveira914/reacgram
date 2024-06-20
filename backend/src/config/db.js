require("dotenv").config()

const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

async function conn() {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.w00p5kw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

        console.log("Banco conectado com sucesso")

        return dbConn

    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn
