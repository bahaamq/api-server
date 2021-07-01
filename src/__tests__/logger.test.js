('use strict');
// const supertest = require('supertest');
const {server} = require('../server');
//Accessing app to have the ability to send mockRequests
const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(server);

describe('API Server', () => {

  let testId=0
  it('404 on bad route and method', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('handles errors', async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('handles correct routes', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toEqual(200);
  
  });

  
  it('add clothes', async () => {

    const data={
        "name": "jeabnnds",
        "price":3040
    }
    const result = await mockRequest.post('/clothes').send(data);
    testId=result.body._id

    //Supertest savind data in body object
    expect(result.status).toEqual(201);

  });
  it('get clothes by id', async () => {
    const result = await mockRequest.get('/clothes/'+testId);
    expect(result.status).toEqual(200);
  });


  it('get all clothes', async () => {
    const result = await mockRequest.get('/clothes/');
    expect(result.status).toEqual(200);
  });

  it('update clothes', async () => {

    const NewUpdatedData={
        "name": "Bahavfvssa",
        "price":3040
    }
    const result = await mockRequest.put('/clothes/'+testId).send(NewUpdatedData);
    expect(result.status).toEqual(200);
  });

  it('delete clothes by id', async () => {
    const result = await mockRequest.delete('/clothes/'+testId);
    expect(result.status).toEqual(200);
  });



});