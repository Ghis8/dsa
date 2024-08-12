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
            this.insertNode(root,newNode)
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
}