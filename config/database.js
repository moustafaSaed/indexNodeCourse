const mongoose = require('mongoose')


const dbConnection = () => {

    mongoose.connect(process.env.DB_URI)
        .then((conn) => {
            console.log(`connected success : ${conn.connection.host}`)
        })
        .catch((err) => {
            console.log(`Database Error : ${err}`);
            process.exit(1)
        })

}

module.exports = dbConnection;