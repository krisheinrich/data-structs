/* Queue
 *
 * Description: A set of elements accessible in FIFO ordering.
 *
 * Interface:
 *    enqueue(elem) - add an element to the queue
 *    dequeue() - remove and return the first element in the queue
 *    peek() - get the first element in the queue
 *    length - the number of elements currently in the queue
 *    isEmpty() - returns true if queue is empty, else false
 */

function createQueue() {
 const queue = [];
 return {
   enqueue: Array.prototype.push.bind(queue),
   dequeue: Array.prototype.shift.bind(queue),
   peek: () => queue[0],
   get length() {
     return queue.length;
   },
   isEmpty: () => queue.length === 0
 };
}

module.exports = { createQueue };
