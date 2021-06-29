const request = require('supertest');

global.request = request;

afterEach(() => {
    jest.clearAllMocks()
})