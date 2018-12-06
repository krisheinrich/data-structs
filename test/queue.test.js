const assert = require('chai').assert;
const Queue = require('../lib/queue');

describe('queue', function () {
  it('should correctly enqueue and dequeue elements', function () {
    let items = [5, 2, 4, 1, 3], result = [];
    let q = Queue.createQueue();

    for (item of items) {
      q.enqueue(item);
    }
    assert.equal(q.length, 5);

    while (q.length > 0) {
      result.push(q.dequeue());
    }
    assert.deepEqual(result, [5, 2, 4, 1, 3]);
  });
});
