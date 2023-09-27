
const LinkedList = () => {

    const list = { head: null}

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

    return {
        list,
        append,
        prepend,
        size
    }
}






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