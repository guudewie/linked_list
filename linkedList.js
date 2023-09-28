
const LinkedList = () => {

    let list = { head: null};

    const append = (value) => {

        if (list.head === null) {
            list.head = { value : value, next : null}
            return
        }

        let currentNode = list.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }
        currentNode.next = { value : value, next : null}
    }
 
    const prepend = (value) => {

        if (list.head === null) list.head = { value : value, next : null}
        else list.head = { value : value, next : list.head}
    }

    const size = () => {

        if (list.head === null) return 0

        let currentNode = list.head;
        let counter = 1; // initialize counter to one to account for first node

        while (currentNode.next !== null) {
            currentNode = currentNode.next
            counter++
        }
        return counter
    }

    const head = () => {
        return list.head.value
    }

    const tail = () => {
        let currentNode = list.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }
        
        return currentNode.value
    }

    const at = (index) => {
        
        let currentNode = list.head;
        let currentIndex = 1;

        while (currentIndex !== index) {
            if (currentNode.next == null) throw new Error("Index too big")
            currentNode = currentNode.next;
            currentIndex++
        }

        return currentNode.value
    }

    const pop = () => {
        let currentNode = list.head;

        // set condition to set.set to stop one element before the last one
        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }
        
        currentNode.next = null;
    }

    const contains = (item) => {
        let currentNode = list.head;

        while (currentNode !== null) {

            if (currentNode.value == item) return true
            currentNode = currentNode.next
        }
        
        return false
    }

    const find = (item) => {
        let currentNode = list.head;
        let index = 0; // first item in list has index 0

        while (currentNode !== null) {

            if (currentNode.value == item) return index
            currentNode = currentNode.next
            index++
        }
        
        return null
    }

    const toString = () => {
        let currentNode = list.head;
        let listString = "";

        while (currentNode !== null) {
            listString += `( ${currentNode.value} ) --> `
            currentNode = currentNode.next
        }

        listString += "null"

        return listString
    }



    return {
        list,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString
    }
}

const firstList = LinkedList();

firstList.append(10);
firstList.append(20);
firstList.append(30);
firstList.prepend(300);

console.log(JSON.stringify(firstList.list))
console.log(firstList.toString())






const Node = (value = null, nextNode = null) => {

    const getValue = () => value;
    const setValue = (newValue) => value = newValue;

    const getNextNode = () => nextNode;
    const setNextNode = (newNextNode) => nextNode = newNextNode;

    return {
        getValue,
        setValue,
        getNextNode,
        setNextNode
    }
}