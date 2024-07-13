const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: 'config.env' });

const dbConnection = require('./config/database');
const categoryRoute = require('./routes/category');

// DB CONNECTION - i was move it to config/database.js file
dbConnection();


// Express App 
const app = express();




// Middlewares
app.use(express.json());

if (process.env.MODE_ENV == 'development') {
    app.use(morgan('dev'));
    console.log(`MODE : ${process.env.MODE_ENV}`);
}


// Mount Routes
app.use("/api/v1/categories", categoryRoute);

// app.get('/', (req, res) => {
//     res.send('Mous : out api V2')
// }
// )

const PORT = process.env.PORT || 8000
app.listen(PORT, (params) => {
    console.log(`Mous : app running successfully at : http://localhost:${PORT}/`);
}
)