
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


    return {
        list,
        append,
        prepend
    }
}

const firstList = LinkedList();
firstList.append(10);
firstList.append(20);
firstList.prepend(30);
firstList.append(40);



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