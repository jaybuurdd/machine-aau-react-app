const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers
const champRouter = require('./routes/championships')
app.use("/championships", champRouter);
const AlumRouter = require('./routes/alumnae')
app.use("/alumnae", AlumRouter);



/* const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ARBwboa18!',
    database: 'crud_db',
});


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'dumb ass movie')" 
    db.query(sqlInsert, (err, result)=>{
        res.send("hello trent");
    });

}); */
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("running on port 3001");
    });
});
