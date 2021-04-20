const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path")
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV === "production"){
    app.use(express.static.apply(path.join(__dirname, "../build")));
};

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

