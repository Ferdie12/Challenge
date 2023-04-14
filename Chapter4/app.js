const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(router);

app.use((req,res,next) => {
    try {
        return res.status(404).json({
            message: "salah link cuy"
        })
    } catch (err) {
        next(err)
    }
})

app.use((err,req,res,next) => {
    return res.status(500).json({
        message: err.message
    })
})

app.listen(port, () => {
    console.log('server is running');
})
