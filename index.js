const express = require("express");
const bodyParser = require("body-parser"); 
const logger = require("morgan");
const mySQL = require("mysql");

const app = express();

const port = 8000;
app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

const db = mySQL.createConnection({
    host:"localhost",
    user: "root",
    database: "slicingweb_api",
    password: "",
});
db.connect(err => {
    if (err) throw err;
    console.log("Database Connected");
})

// app.get('/1',(_, res)=>{
//     res.json({
//         msg: "Hello World!",
//     });
// });

const Router = express.Router();

// app.use(Router);
// Router.get("/2", (_, res) => {
//     res.json({
//         msg: "Hello",
//     });
// });
// Router.post("/", (req, res) => {
//     console.log(req.body);
//     res.json({
//         msg: "body sudah diterima",
//     })
// })

const queryPromise = () => {
    return new Promise((resolve, reject) => {
        const queryString =
            ""
        db.query(queryString,(err, data) => {
            if(!err){
                resolve(data);
            } else {
                reject(err);            }
        });
    });
};
Router.get ('/products', (_, res) => {
    queryPromise().then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});