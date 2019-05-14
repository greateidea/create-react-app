const MockData = require('./mock');
const mockResponse = require('./utils/mockResponse');

module.exports = function(app) {
    mockResponse(app, MockData);
};
