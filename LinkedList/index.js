class LinkedList {
  append(value) {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = { value, next: null };
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  remove(value) {
    if (!this.head) return;

    // remove from head
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode && curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = curNode;
    }
  }

  find(value) {
    const elements = this.print();
    return elements.find(
      (element) => element.value.toLowerCase() === value.toLowerCase()
    );
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value, next: existingNode.next };
      existingNode.next = newNode;
      if (existingNode === this.tail) {
        this.tail = newNode;
      }
    }
  }

  insertBefore(value, beforeValue) {
    if (!this.head) return;

    if (this.head.value === beforeValue) {
      return this.prepend(value);
    }

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === beforeValue) {
        const newNode = { value, next: curNode.next };
        curNode.next = newNode;
        return;
      }
      curNode = curNode.next;
    }
  }

  insertAtTail(value) {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  print() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
      }
