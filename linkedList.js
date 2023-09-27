
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

    return {
        list,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop
    }
}

const firstList = LinkedList();

firstList.append(10);
firstList.append(20);
firstList.append(30);
firstList.prepend(300);

console.log(JSON.stringify(firstList.list))
firstList.pop()
console.log(JSON.stringify(firstList.list))





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