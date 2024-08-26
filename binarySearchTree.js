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
            if(node.right ===null){
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
    printNode(value){
        console.log(value)
    }
}

let tree=new BinarySearchTree()

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

tree.printNode(6)