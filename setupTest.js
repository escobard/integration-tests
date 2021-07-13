const supertest = require('supertest');

const { endpoint } = require("./constants")

global.request = supertest(endpoint);

afterEach(() => {
    jest.clearAllMocks()
})