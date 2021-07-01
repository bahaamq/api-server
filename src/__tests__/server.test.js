('use strict');
const supergoose = require('@code-fellows/supergoose');
const {server} = require('../server');
//Accessing app to have the ability to send mockRequests
const mockRequest = supergoose(server);
describe('API Server', () => {

  let testId=0
  let data={}


  it('add food', async () => {

     data={
        "name": "Bahavfvssa",
        "price":3040
    }
    const result = await mockRequest.post('/food').send(data);
testId=result.body._id
console.log(testId)

    //Supertest savind data in body object
    expect(result.status).toEqual(201);

  });


  it('get food by id', async () => {
    const result = await mockRequest.get(`/food/${testId}`);

    console.log(result.body.length)
expect(result.body.length).toBeGreaterThan(0)

    expect(result.status).toEqual(200);
  });


  it('get all food', async () => {
    const result = await mockRequest.get(`/food/${testId}`);
    expect(result.status).toEqual(200);
    expect(result.body.length).toBeGreaterThan(0)

  });

  it('update food', async () => {

    const NewUpdatedData={
        "name": "Bahavfvssa",
        "price":3040
    }
    const result = await mockRequest.put(`/food/${testId}`).send(NewUpdatedData);
    expect(result.status).toEqual(200);
  });

  it('delete food by id', async () => {
    const result = await mockRequest.delete(`/food/${testId}`);
    expect(result.status).toEqual(200);
  });

  
 

});