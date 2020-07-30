const express = require("express");

const app = express();

const port = 8000;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
// app.get('/',(_, res)=>{
//     res.json({
//         msg: "Hello World!",
//     });
// });

const Router = express.Router();

app.use(Router);
Router.get("/", (_, res) => {
    res.json({
        msg: "Hello",
    });
});