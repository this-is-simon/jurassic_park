const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park1 = new Park("Simonidus Park", 12.50, [])
  })

  it('should have a name', function () {
    assert.strictEqual('Simonidus Park', park1.name);

  });

  it('should have a ticket price', function () {
    assert.strictEqual(12.50, park1.ticketPrice);
  });

  // xit('should have a collection of dinosaurs', function () {
  //
  // });
  //
  // xit('should be able to add a dinosaur to its collection', function () {
  //
  // });
  //
  // xit('should be able to remove a dinosaur from its collection', function () {
  //
  // });
  //
  // xit('should be able to find all dinosaurs of a particular species', function () {
  //
  // });
  //
  // xit('should be able to remove all dinosaurs of a particular species', function () {
  //
  // });
  //
  // xit('should be able to find the dinosaur that attracts the most visitors', function () {
  //
  // });

});
