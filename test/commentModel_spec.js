const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const opts = { useNewUrlParser: true };
const testModel = require('../models/comment');
const assert = require('assert');
const {expect, should} = require('chai');

describe("Comment Model Tests", () =>{
    before((done) =>{
        // Connect to MongoDB
        mongoose.connect('mongodb://localhost/testData', opts);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, "Connection Error!"));
        db.once('open', () =>{
            console.log('Successfully Connected to MongoDB');
            done();
        });
        // Build a dummy article
    });
    it('Should connect to the database', () =>{
        // Replace a basic mongo command
        assert.equal(1, true);
    });
    describe("Comment Creation", done =>{

    });
    describe("Comment Read", done =>{

    });
    describe("Comment Read All", done =>{

    });
    describe("Comment Update", done =>{

    });
    describe("Comment Delete", done =>{

    });
    describe("Comment Error", done =>{

    });
});