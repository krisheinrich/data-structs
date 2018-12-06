/* Linked List
 *
 * Description: A traversable list of nodes where each node holds a value and
 * reference to the next node in the sequence.
 *
 *  Interface:
 *    -Node:
 *      value - the node's value
 *      next - a reference to the next node in the linked list, or null if node is the tail
 *    -Linked List:
 *      head - gets the first value in the list
 *      tail - gets the last value in the list
 *      length - the number of elements in the list
 *      push(val) - adds a node to the end of the list with the given value and returns the node
 *      pop() - returns the last node in the list
 *      get(index) - returns the i-th element in the list (0-based)
 *      delete() - removes and returns the i-th element in the list
 *      isEmpty() - returns true if queue is empty, else false
 */

function createNode(value) {
  return {
    value,
    next: null
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      let node = createNode(value);
      if (this.head == null) {
        this.head = node;
      } else {
        this.tail.next = node;
      }
      this.tail = node;
      this.length++;
      return node;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      let node = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let penultimate = head;
        while (penultimate.next !== this.tail) {
          penultimate = penultimate.next;
        }
        penultimate.next = null;
        this.tail = penultimate;
      }
      this.length--;
      return node;
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }
      let node = this.head;
      while (index > 0) {
        node = node.next;
        index--;
      }
      return node;
    },
    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }
      let node = this.head;
      if (index === 0) {
        this.head = this.head.next;
        if (this.length === 1) {
          this.tail = null;
        }
        this.length--;
        return node;
      }

      let curr = this.head;
      let prev;
      let i = 0;
      while (i < index) {
        i++
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
      if (prev.next === null) {
        this.tail = prev;
      }
      this.length--;
      return curr;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      let values = [];
      let curr = this.head;
      while (curr) {
        values.push(curr.value);
        curr = curr.next;
      }
      return values.join(' -> ');
    }
  };
}

module.exports = { createLinkedList };
