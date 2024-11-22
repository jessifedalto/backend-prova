import express from "express";
import person from "../routes/person.js"

export default function(app)
{
    app
        .use(express.json())
        .use('/api/person', person)
};