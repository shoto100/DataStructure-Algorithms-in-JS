
// ARRAY class - 03

// instantiation
// class Player {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
    
//     introduce() {
//         console.log(`Hi I am ${this.name}, I am a ${this.type}`);
//     }
// }

// class Wizard extends Player {
//     constructor(name, type) {
//         super(name, type);
//     }

//     play() {
//         console.log(`WEEEEE I am a ${this.type}`);
//     }
// }

// const Wizard1 = new Wizard('Shelly', 'Healer');
// const Wizard2 = new Wizard('Shawn', 'Dark Magic');


// ARRAY class - 05

// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = {}
//     }

//     get(index) {
//         return this.data[index];
//     }
//     push(item) {
//         this.data[this.length] = [item];
//         this.length++;
//         return this.length;
//     }
//     pop() {
//         const lastItem = this.data[this.length -1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastItem;
//     } 
//     delete(index) {
//         const item =this.data[index];
//         this.shiftItems(index);
//     }
//     shiftItems(index) {
//         for (let i = index; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         } 
//         delete this.data[this.length - 1];
//         this.length--;
//     }
// }

// const newArray = new MyArray();
// newArray.push('HI');
// newArray.push('You');
// newArray.push('!'); 
// newArray.delete(1);
// newArray.push('HI');
// newArray.push('HI');


// console.log(newArray);

// ARRAY class - 07

// function mergeSortedArray(a, b) {
//     return  (a.concat(b).sort());
// }
// console.log(mergeSortedArray([0, 3, 4, 3], [4, 6,3]));

// ARRAY class - 10

// function mergeSortedArray(array1, array2) {
//     const mergeArray = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];
//     let i = 1;
//     let j = 1;
    

//     if (array1.length === 0) {
//         return array2;
//     }
//     else if (array2 === 0) {
//         return array1;
//     }

//     while (array1 || array2) {
//         console.log(array1, array2)
//         if (!array2 || array1 < array2) {
//             newArray.push(array1)
//             array1 = a1[i];
//             i++;
//         }
//         else {
//             newArray.push(array2);
//             array2 = a2[j];
//             j++;
//         }
//     }

//     return mergeArray;
// }
// console.log(mergeSortedArray([4, 6, 8], [20, 60, 3]));

// Hash Tables Class - 06

// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length
//         }
//         return hash;
//     }

//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) {
//             this.data[address] = [];
//         }
//         this.data[address].push([key, value]);
//         return this.data
//     }
//     get(key) {
//         let address =this._hash(key);
//         const currrentBucket = this.data[address];
//         console.log(currrentBucket);
//         if (currrentBucket) {
//             for (let i = 0; i < currrentBucket.length; i++) {
//                 if (currrentBucket[i][0] === key) {
//                     return currrentBucket[i][1];
//                 }
//             }
//         }
//         return undefined;
//     }

//     key() {
//         const keysArray = [];
//         for (let  i = 0; i < this.data.length; i++) {
//             if (this.data[i]) {
//                 keysArray.push(this.data[i][0][0])
//             }
//         }
//         return keysArray;
//     }
// }

// const myHashTable = new HashTable(50);
// console.log(myHashTable._hash('grapes'));
// (myHashTable.set('grapes', 10000));
// (myHashTable.set('apples', 54));
// (myHashTable.set('orange', 2));
// console.log(myHashTable.key());
// console.log(myHashTable.get('apples'));
// myHashTable.get('grapes');


// Hash Tables Class - 09

// function firstRecurringCharacter(input) {
//     let map = {};
//     for (let i = 0; i < input.length; i++) {
//         if (map[input[i]]) {
//             return input[i];
//         }
//         else {
//             map[input[i]] = true;
//         }
//     }
//     return undefined;
// }

// console.log(firstRecurringCharacter([1,2,222, 1,3,4,5,2,4]));

// Link List Class - 06 & 07 & 08 & 10 & 11 & 12
// singly

// class LinkList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value: value,
//             next: null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = {
//             value: value,
//             next: null  
//         };
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }
//     printList() {
//         const array = [];
//         let currrentNode = this.head;
//         while (currrentNode !== null) {
//             array.push(currrentNode.value);
//             currrentNode = currrentNode.next;
//         }
//         return array;
//     }
//     insert(index, value) {
//         if ( index >= this.length) {
//             return this.append(value);
//         }
//         const newNode = {
//             value: value,
//             next: null  
//         };
//         const leader = this.traverseToIndex(index - 1);
//         const holdingPointer = leader.next;
//         leader.next = newNode;
//         newNode.next = holdingPointer;
//         this.length++;
//         return this.printList();
//     }
//     traverseToIndex(index) {
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter !== index) {
//             currentNode = currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }
//     remove(index) {
//         const leader = this.traverseToIndex(index - 1);
//         const unwantedNode = leader.next;
//         leader.next = unwantedNode.next;
//         this.length--;
//         return this.printList();
//     }
// }

// const myLinkList = new LinkList(10);
// myLinkList.append(5);
// myLinkList.append(16);
// myLinkList.prepend(1);
// myLinkList.insert(2, 99);
// myLinkList.insert(3, 123);
// myLinkList.remove(1);
// console.log(myLinkList.printList());
// console.log(myLinkList);


//Doubly

// class DoublyLinkList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null 
//         };
//         newNode.prev = this.tail;
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null
//         };
//         newNode.next = this.head;
//         this.head.prev = newNode;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }
//     printList() {
//         const array = [];
//         let currrentNode = this.head;
//         while (currrentNode !== null) {
//             array.push(currrentNode.value);
//             currrentNode = currrentNode.next;
//         }
//         return array;
//     }
//     insert(index, value) {
//         if ( index >= this.length) {
//             return this.append(value);
//         }
//         const newNode = {
//             value: value,
//             next: null,
//             prev: null  
//         };
//         const leader = this.traverseToIndex(index - 1);
//         const follower = leader.next;
//         leader.next = newNode;
//         newNode.next = follower;
//         newNode.prev = leader;
//         follower.prev = newNode;
//         this.length++;
//         return this.printList();
//     }
//     traverseToIndex(index) {
//         let counter = 0;
//         let currentNode = this.head;
//         while (counter !== index) {
//             currentNode = currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }
//     remove(index) {
//         const leader = this.traverseToIndex(index - 1);
//         const unwantedNode = leader.next;
//         leader.next = unwantedNode.next;
//         this.length--;
//         return this.printList();
//     }
// 
// }

// const myLinkList = new DoublyLinkList(10);
// myLinkList.append(5);
// myLinkList.append(16);
// myLinkList.prepend(1);
// myLinkList.insert(1, 99);
// myLinkList.insert(3, 123);
// myLinkList.remove(1);
// myLinkList.remove(1);

// console.log(myLinkList.printList());
// console.log(myLinkList);


// STACKS & QUEUES

// Stacks solutions with Link Lists 

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }
//     peek() {
//         return this.top;
//     }
//     push(value) {
//         const newNode = new Node(value);
//         if ( this.length === 0 ) {
//             this.top = newNode;
//             this.bottom = newNode;
//         }
//         else {
//             const holdingPointer = this.top;
//             this.top = newNode;
//             this.top.next = holdingPointer;
//         }
//         this.length++;
//         return this;
//     }
//     printList() {
//         const array = [];
//         let currrentNode = this.top;
//         while (currrentNode !== null) {
//             array.push(currrentNode.value);
//             currrentNode = currrentNode.next;
//         }
//         return array;
//     }
// }

// const myStack = new Stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// console.log(myStack);

// Stacks solutions with Arrays

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.array = [];
//     }
//     peek() {
//         return this.array[this.array.length - 1];
//     }
//     push(value) {
//         this.array.push(value);
//         return this;
//     }
//     pop() {
//         this.array.pop();
//         return this;
//     }
// }

// const myStack = new Stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// myStack.pop();
// myStack.pop();
// console.log(myStack);

// Queues solutions with LinkLists

// class Node {
    //     constructor(value){
        //         this.value = value;
        //         this.next = null;
        //     }
        // }

        // class Queue {
            //     constructor() {
                //         this.first = null;
                //         this.last = null;
                //         this.length = 0;
                //     }
                //     peek() {
                    //         return this.first;
                    //     }
                    //     enqueue(value) {
                        //         const newNode = new Node(value);
                        //         if (this.length === 0 ) {
                            //             this.first = newNode;
                            //             this.last = newNode;
                            //         }
                            //         else {
                                //             this.last.next = newNode;
                                //             this.last = newNode;
                                //         }
                                //         this.length++;
                                //         return this;
//     }
//     dequeue() {
    //         if (!this.first) {
//             return null;
//         }
//         else if (this.first === this.last) {
    //             this.last = null;
    //         }
    //         else this.first = this.first.next;
    //         this.length--;
    //         return this;
    //     }
    // }
    
    // const myQueue = new Queue();
    // myQueue.enqueue('Joy');
    // myQueue.enqueue('Matt');
    // myQueue.enqueue('Pavel');
    // myQueue.enqueue('Samir');
    // myQueue.dequeue();
    // console.log(myQueue);
    
    
    // Queues Using Stacks
    
//     class CrazyQueue {
//     constructor() {
//         this.first = [];
//         this.last = [];
//     }

//     enqueue(value) {
//         const length = this.first.length;
//         for (let i = 0; i < length; i++) {
//             this.last.push(this.first.pop());
//         }
//         this.last.push(value);
//         return this;
//     }

//     dequeue() {
//         const length = this.last.length;
//         for (let i = 0; i < length; i++) {
//             this.first.push(this.last.pop());
//         }
//         this.first.pop();
//         return this;
//     }
//     peek() {
//         if (this.last.length > 0) {
//             return this.last[0];
//         }
//         return this.first[this.first.length - 1];
//     }
// }

// const myQueue = new CrazyQueue();
// myQueue.peek();
// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.peek();
// myQueue.dequeue();
// console.log(myQueue);

// Data Stuctures Trees

// Solutions Inserts

// class Node {
//     constructor(value){
//         this.left = null;
//         this.right = null;
//         this.value = value;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root =null;        
//     }
//     insert(value) {
//         const newNode = new Node(value);
//         if (this.root === null) {
//             this.root = newNode;
//         }
//         else {
//             let currentNode = this.root;
//             while(true) {
//                 if (value < currentNode.value) {
//                     // Left
//                     if (!currentNode.left) {
//                         currentNode.left = newNode;
//                         return this;
//                     }
//                     else currentNode = currentNode.left;
//                 }
//                 else {
//                     // Right
//                     if (!currentNode.right) {
//                         currentNode.right = newNode;
//                         return this;
//                     }
//                     else currentNode = currentNode.right; 
//                 }
//             }
//         } 
//     }
//     lookup(value) {
//         if (!this.root) {
//             return false;
//         }
//         let currentNode =this.root;
//         while (currentNode) {
//             if (value < currentNode.value) {
//                 currentNode = currentNode.left;
//             }
//             else if (value > currentNode.value) {
//                 currentNode = currentNode.right;
//             }
//             else if (currentNode.value === value) {
//                 return currentNode;
//             }
//         }
//         return false; 
//     }
// }

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.lookup(20);
// console.log(tree.lookup(20));

// Data Structure Graph 

// class Graph {
    //     constructor() {
        //         this.numberOfNodes = 0;
        //         this.adjacentList = {            
            //         };
            //     }
            //     addVertex(node) {
                //         this.adjacentList[node] =[];
                //         this.numberOfNodes++;
                //     }
                
                //     addEdge(node1, node2) {
//         // Undirecte4d Graph
//         this.adjacentList[node1].push(node2);
//         this.adjacentList[node2].push(node1);
//     }
// }


// const myGraph = new Graph();
// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1');
// myGraph.addEdge('3', '4');
// myGraph.addEdge('4', '2');
// myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '2');
// myGraph.addEdge('1', '0');
// myGraph.addEdge('0', '2');
// myGraph.addEdge('6', '5');
// console.log(myGraph);


// Algorithms Sections

// Recursion

// class 05 Excercise Factorial

// function findFactorialRecursive(number) {
//     if (number === 2) {
//         return 2;
//     }
//     return number * findFactorialRecursive(number - 1);
// }

// console.log(findFactorialRecursive(5));

// function findFactorialIterrative(number) {
//     let answer = 1;
//     if (number === 2) {
//         return 2;
//     }
//     for (let i = 1; i <= number; i++) {
//         answer *= i;
//     }
//     return answer;
// }

// console.log(findFactorialIterrative(5));

// class 07 Excercise Fibonacci

// function fibonacciItertive(number) {
//     let arr = [0, 1];
//     for (let i = 2; i <= number; i++) {
//         arr.push(arr[i - 2] + arr[i - 1]);
//     }
//     return arr[number]
// }

// console.log(fibonacciItertive(50));

// function fibonacciRecursion(number) {
//     // simple way
//     // too slow ==> O(2^n)
//     if (number < 2) {
//         return number;
//     }
//     return fibonacciRecursion(number - 1) + fibonacciRecursion(number  - 2);
// }

// console.log(fibonacciRecursion(50));


// Sorting 

// Class 06 Bubble Sort 

// const numbers =  [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
    //     const length = array.length;
    //     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length; j++) {
    //             if(array[j] > array [j + 1]) {
        //                 let temp = array[j];
        //                 array[j] = array[j + 1];
        //                 array[j + 1] = temp;
        //             }
        //         }
        //     }
// }



// bubbleSort(numbers);
// console.log(numbers);


// Class 08 Selection Sort 

// const numbers =  [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


// function selectionSort(array) {
//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//         // set current index as minimum
//         let min = i;
//         let temp = array[i];
//         for (let j = i + 1; j < length; j++) {
//             if(array[j] < array [min]) {
//                 // update minimum if current is lower that what we had previously
//                 min = j;
//             }
//         }
//         array[i] = array[min];
//         array[min] = temp;
//     }
// }

// selectionSort(numbers);
// console.log(numbers);

// class 11 Insertion Sort

// const numbers =  [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


// function insertionSort(array) {
//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//         if (array[i] < array[0]) {
//             array.unshift(array.splice(i, 1)[0]);
//         }
//         else {
//             // find where number should spot
//             for (let j = 1; j < i; j++) {
//                 if (array[i] > array [j - 1] && array[i] < array [j]) {
//                     // move number to the right spot
//                     array.splice(j, 0, array.splice(i, 1)[0]);
//                 }
//             }
//         }
//     }
// }

// insertionSort(numbers);
// console.log(numbers);

// class 16 MergeSort

// const numbers =  [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


// function mergeSort(array) {
//     if (array.length === 1) {
//         return array;
//     }
//     // split array in into right and left
//     const length = array.length;
//     const middle = Math.floor(length / 2);
//     const left = array.slice(0, middle);
//     const right = array.slice(middle);
//     // console.log('left:', left);
//     // console.log('right:', right);

//     return merge(
//         mergeSort(left),
//         mergeSort(right)
//     );
// }

// function merge(left, right) {
//     const result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while(leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         }
//         else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     // console.log(left, right);
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }



// const answer = mergeSort(numbers);
// console.log(answer);

// BreadthFirstSearch()

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
            if(value < currentNode.value){
              //Left
            if(!currentNode.left){
                currentNode.left = newNode;
                return this;
            }
            currentNode = currentNode.left;
            } else {
              //Right
            if(!currentNode.right){
                currentNode.right = newNode;
                return this;
            } 
            currentNode = currentNode.right;
            }
        }
        }
    }
    lookup(value){
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
        if(value < currentNode.value){
            currentNode = currentNode.left;
        } else if(value > currentNode.value){
            currentNode = currentNode.right;
        } else if (currentNode.value === value) {
            return currentNode;
        }
        }
        return null
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;    
    }
    breadthFirstSearchR(queue, list) {
        if (queue.length === 0) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }
    DFSInorder() {
        return traverseInorder(this.root, [])
    }
    DFSPostorder() {
        return traversePostorder(this.root, [])
    }
    DFSPreorder() {
        return traversePreorder(this.root, [])
    }
}

function traverseInorder(node, list) {
    if (node.left) {
        traverseInorder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInorder(node.right, list);
    }
    return list;
}

function traversePreorder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreorder(node.left, list);
    }
    if (node.right) {
        traversePreorder(node.right, list);
    }
    return list;
}

function traversePostorder(node, list) {
    if (node.left) {
        traversePostorder(node.left, list);
    }
    if (node.right) {
        traversePostorder(node.right, list);
    }
    list.push(node.value);
    return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.breadthFirstSearch();
// console.log('BFS', tree.breadthFirstSearch());
// console.log('BFS', tree.breadthFirstSearchR([tree.root], []));
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());

