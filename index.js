const getName = (node) => {
    return node.name
}

const headNode = (firstKey, linkedList) => {
    return linkedList[firstKey]
}

const next = (node, linkedList) => {
    return linkedList[node.next]
}

const nodeAt = (index, firstKey, linkedList) => {
    let node = headNode(firstKey, linkedList)
    for (let i = 0; i < index; i++) {
        node = next(node, linkedList)
    }
    return node
}

const addressAt = (index, firstKey, linkedList) => {
    let address = firstKey
    for (let i = 0; i < index; i++) {
        address = linkedList[address].next
    }
    return address
}

const indexAt = (node, linkedList, firstKey) => {
    let current = headNode(firstKey, linkedList)
    let i = 0
    while (node.name !== current.name) {
        current = next(current, linkedList)
        i++
    }
    return i
}

const insertNodeAt = (index, newNodeKey, firstKey, linkedList) => {
    let address = addressAt(index-1, firstKey, linkedList)
    let temp = linkedList[address].next
    linkedList[address].next = newNodeKey
    linkedList[newNodeKey].next = temp
}

const deleteNodeAt = (index, firstKey, linkedList) => {
    let previous = addressAt(index-1, firstKey, linkedList)
    let next = addressAt(index+1, firstKey, linkedList)
    linkedList[previous].next = next
}