/* Priority Queue
 *
 * Description: A set of elements accessible in FIFO ordering assigned either
 * a high or low priority. High priority items are accessed first, even if a
 * low priority item was enqueued first.
 *
 * Interface:
 *    enqueue(elem, isHighPriority) - add an element to the queue; optionally assign a priority (default is low)
 *    dequeue() - remove and return the highest-priority element in the priority queue
 *    peek() - get the highest-priority element in the priority queue
 *    length - the number of elements currently in the priority queue
 *    isEmpty() - returns true if priority queue is empty, else false
 */

function createPriorityQueue() {
  const lowPriorityQueue = [];
  const highPriorityQueue = [];
  return {
    enqueue(item, isHighPriority = false) {
      Array.prototype.push.call(isHighPriority ? highPriorityQueue : lowPriorityQueue, item);
    },
    dequeue() {
      return Array.prototype.shift.call(highPriorityQueue.length ? highPriorityQueue : lowPriorityQueue);
    },
    peek() {
      return (highPriorityQueue.length ? highPriorityQueue : lowPriorityQueue)[0];
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.length + lowPriorityQueue.length === 0;
    }
  };
}

module.exports = { createPriorityQueue };
