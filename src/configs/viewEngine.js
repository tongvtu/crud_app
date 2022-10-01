import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))

    app.set("view engine", "ejs");
    app.set("views", "./src/views")
    console.log('thanh cong ket noi database')
}

export default configViewEngine;
