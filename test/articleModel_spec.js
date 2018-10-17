const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const opts = { useNewUrlParser: true };
const testModel = require('../models/article');
const assert = require('assert');
const {expect, should} = require('chai');

describe("Article Model Tests", () =>{
    before((done) =>{
        // Connect to MongoDB
        mongoose.connect('mongodb://localhost/testData', opts);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, "Connection Error!"));
        db.once('open', () =>{
            console.log('Successfully Connected to MongoDB');
            done();
        });
    });
    it('Should connect to the database', () =>{
        // Replace a basic mongo command
        assert.equal(1, true);
    });
    describe("Article Creation", done =>{

    });
    describe("Article Read", done =>{

    });
    describe("Article Read All", done =>{

    });
    describe("Article Update", done =>{

    });
    describe("Article Delete", done =>{

    });
    describe("Article Error", done =>{

    });
});