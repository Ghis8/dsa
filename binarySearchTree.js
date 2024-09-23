class Node{
    constructor(key){
        this.key=key
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(key){
        let newNode=new Node(key)
        if(this.root == null){  
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node, newNode){
        // only insert the lower key on the left side and the higher on the right side of the tree
        if(newNode.key < node.key){
            if(node.left == null){
                node.left=newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root,callback)
    }
    inOrderTraverseNode(node,callback){
        if(node !== null){
            this.inOrderTraverseNode(node.left,callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right,callback)
        }
    }
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root,callback)
    }
    preOrderTraverseNode(node,callback){
        if(node !== null){
            callback(node.key)
            this.preOrderTraverseNode(node.left,callback)
            this.preOrderTraverseNode(node.right,callback)
        }
    }
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root,callback)
    }
    postOrderTraverseNode(node,callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left,callback)
            this.postOrderTraverseNode(node.right,callback)
            callback(node.key)
        }
    }
    findMin(){
        return this.minNode(this.root)
    }
    minNode(node){
        if(node){
            while(node && node.left !== null){
                node=node.left
            }
            return node.key
        }
        return null
    }
    findMax(){
        return this.maxNode(this.root)
    }
    maxNode(node){
        if(node){
            while(node && node.right !== null){
                node=node.right
            }
            return node.key
        }else{
            return null
        }
    }
    search(key){
        return this.searchNode(this.root,key)
    }
    searchNode(node,key){
        if(node ===null){
            return false
        }
        if(key < node.key){
            return this.searchNode(node.left,key)
        }else if(key > node.key){
            return this.searchNode(node.right, key)
        }else{
            return true
        }
    }

    printNode(value){
        console.log(value)
    }
}

let tree=new BinarySearchTree()

tree.insert(11)
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6) 

// tree.postOrderTraverse(tree.printNode)
// console.log(tree.findMax())
console.log(tree.search(4))