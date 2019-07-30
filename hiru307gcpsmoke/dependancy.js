let faker = require('faker');
let moment = require('moment');

exports.handler = function (request, response) {

    response.send({ "message": faker.internet.userName()+ moment().format("MMMM Do YYYY") });
}