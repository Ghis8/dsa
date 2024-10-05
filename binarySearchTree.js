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

    // adelson velskii and landi tree
    insertAVLNode(node,element){
        if(node ==null){
            node=new Node(element)
        }else if (element < node.key){
            node.left=this.insertAVLNode(node.left,element)
            if(node.left !== null){

            }
        }else if (element > node.key){
            node.right =this.insertAVLNode(node.right,element)
            if (node.right !== null){

            }
        }
        return node
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
    remove(key){
        this.root=this.removeNode(this.root,key)
    }
    removeNode(node,key){
        if(node == null){
            return null
        }else if(key < node.key){
            node.left=this.removeNode(node.left,key)
            return node
        }else if(key > node.key){
            node.right=this.removeNode(node.right,key)
            return node
        }else{
            if(node.left == null && node.right ==null){
                node=null 
                return node
            }
            if(node.left == null){
                node=node.right 
                return node 
            }
            else if(node.right == null){
                node=node.left 
                return node
            }

            let aux=this.findMinNode(node.right)
            node.key=aux.key
            node.right=this.removeNode(node.right, aux.key)
            return node
        }
    }
    findMinNode(node){
        while(node && node.left !== null){
            node=node.left
        }
        return node
    }
    heightNode(node){
        if(node ===null){
            return -1
        }else{
            return Math.max(this.heightNode(node.left),this.heightNode(node.right))+1
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
// console.log(tree.heightNode(7))