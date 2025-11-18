function Node(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;

    let curr;
    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index; i++) curr = curr.next;
    } else {
        curr = this.tail;
        for (let i = this.size - 1; i > index; i--) curr = curr.prev;
    }
    return curr.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);

    const newNode = new Node(val);

    let curr;
    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index; i++) curr = curr.next;
    } else {
        curr = this.tail;
        for (let i = this.size - 1; i > index; i--) curr = curr.prev;
    }

    newNode.prev = curr.prev;
    newNode.next = curr;
    curr.prev.next = newNode;
    curr.prev = newNode;

    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;

    if (this.size === 1) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        return;
    }

    if (index === 0) {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return;
    }

    if (index === this.size - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return;
    }

    let curr;
    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index; i++) curr = curr.next;
    } else {
        curr = this.tail;
        for (let i = this.size - 1; i > index; i--) curr = curr.prev;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    this.size--;
};
