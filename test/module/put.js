var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://jsonplaceholder.typicode.com/posts");
var Set = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
}

// UNIT test begin

describe("SAMPLE unit test",function(){
  it("should put a jason",function(done){

    //calling ADD api
    server
    .put('/1')
    .send(Set)
    .expect("Content-type",/json/)
    .expect(200, {
      "id": 1,
      'title': 'foo',
      'body': 'bar',
      'userId': 1
    },done);
  });
});
