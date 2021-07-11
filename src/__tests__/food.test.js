('use strict');
const supertest = require('supertest');
const {server} = require('../server');
//Accessing app to have the ability to send requests
const request = supertest(server);

describe('API Server', () => {

  let testId=0
  let data={}


  it('add food', async () => {

     data={
        "name": "Bahavfvssa",
        "price":3040
    }
    const result = await  request.post('/food').send(data);

console.log(testId)

    //Supertest savind data in body object
    expect(result.status).toEqual(201);

  });


  it('get food by id', async () => {
    const result = await request.get(`/food/${testId}`);

    expect(result.status).toEqual(200);
  });


  it('get all food', async () => {


    const result = await request.get(`/food/${testId}`);
    expect(result.status).toEqual(200);

  });

  it('update food', async () => {

    const NewUpdatedData={
        "name": "Bahavfvssa",
        "price":3040
    }
    const result = await request.put(`/food/${testId}`).send(NewUpdatedData);
    expect(result.status).toEqual(200);
  });

  it('delete food by id', async () => {
    const result = await request.delete(`/food/${testId}`);
    expect(result.status).toEqual(200);
  });

  
 

});