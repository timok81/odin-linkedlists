class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  size = 0;
  head = null;
  tail = null;

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let searchIndex = 0;
    let current = this.head;

    while (current) {
      if (index === searchIndex) {
        return current;
      }
      current = current.nextNode;
      searchIndex++;
    }
  }

  pop() {
    let secondToLastNode;

    if (this.size >= 3) {
      secondToLastNode = this.at(this.size - 2);
      secondToLastNode.nextNode = null;
      this.tail = secondToLastNode;
    } else if (this.size === 2) {
      secondToLastNode = this.head;
      secondToLastNode.nextNode = null;
      this.tail = secondToLastNode;
    } else {
      console.log("Last node deleted");
      this.head.nextNode = null;
      this.head = null;
      this.tail = null;
    }
    this.size--;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let searchIndex = 0;

    while (current) {
      if (current.value === value) {
        return searchIndex;
      }
      searchIndex++;
      current = current.nextNode;
    }
    return null;
  }

  insertAt(value, index) {
    if (index >= this.size) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      const oldNode = this.at(index);
      this.at(index - 1).nextNode = newNode;
      newNode.nextNode = oldNode;
      this.size++;
    }
  }

  removeAt(index) {
    if (index === this.size-1) {
        this.pop();
    }
    else if (index > 0 && index < this.size-1) {
      this.at(index - 1).nextNode = this.at(index + 1);
      
      if (this.at(index.nextNode) != null) {
        this.at(index).nextNode = null;
      }
      
    } else if (index === 0) {
      const oldHead = this.head;
      this.head = this.at(1);
      oldHead.nextNode = null;
    }
    else {
        console.log("List doesn't contain specified index")
        return;
    }
    this.size--;
  }

  toString() {
    if (this.size > 0) {
      let current = this.head;
      let output = "";

      while (current) {
        let name = current.value;
        if (current != this.tail) output += `( ${name} ) -> `;
        else output += `( ${name} )`;
        current = current.nextNode;
      }
      console.log(output);
    } else {
      console.log("List is empty");
    }
  }
}

const list = new LinkedList();

list.append("Apple");
list.append("Orange");
list.append("Peach");
console.log(list.toString());

export { LinkedList }