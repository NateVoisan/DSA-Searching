'use strict';

const Queue = require('./queue');

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    inset(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right - new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWtih(this.left);
            }
            else if (this.right) {
                this._replaceWtih(this.right);
            }
            else {
                this._replaceWtih(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWtih(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key - node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMmin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    bfs(values = []) {
        const queue = new Queue();
        queue.enqueue(this);
        while (queue.length) {
            const node = queue.dequeue();
            values.push(node.value);

            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
        }
        return values;
    }
}

function preOrder(bst) {
    console.log(bst.key);
    if (bst.left) {
        preOrder(bst.left);
    }
    if (bst.right) {
        preOrder(bst.right);
    }
}

function inOrder(bst) {
    console.log(bst.key);
    if (bst.left) {
        inOrder(bst.left);
    }
    if (bst.right) {
        inOrder(bst.right);
    }
}

function postOrder(bst) {
    console.log(bst.key);
    if (bst.left) {
        postOrder(bst.left);
    }
    if (bst.right) {
        postOrder(bst.right);
    }
}

function main() {
    const BST = new BinarySearchTree();
    BST.insert(25, 25);
    BST.insert(15, 15);
    BST.insert(50, 50);
    BST.insert(10, 10);
    BST.insert(24, 24);
    BST.insert(35, 35);
    BST.insert(70, 70);
    BST.insert(4, 4);
    BST.insert(12, 12);
    BST.insert(18, 18);
    BST.insert(31, 31);
    BST.insert(44, 44);
    BST.insert(66, 66);
    BST.insert(90, 90);
    BST.insert(22, 22);
}

module.exports = BinarySearchTree;

function CommandStructure() {
    const bst = new BinarySearchTree(5, 'Captain Picard');

    bst.insert(3, 'Commander Riker');
    bst.insert(6, 'Data');
    bst.insert(2, 'Worf');
    bst.insert(4, 'Laforge');
    bst.insert(1, 'security-officer');
    bst.insert(8, 'Crusher');
    bst.insert(7, 'Selar');
  
    return bst.bfs();
}

function maxProfit(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] - arr[i] > max) {
                max = arr[j] - arr[i];
            }
        }
    }
    return max;
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));