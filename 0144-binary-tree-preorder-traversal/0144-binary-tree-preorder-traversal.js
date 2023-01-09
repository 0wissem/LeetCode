/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(root==null)return []
    const levels=[root]
    let res=[]

    while (levels.length){
        const current = levels.shift()
        if(current.val!=null) res.push(current.val)
        if(current.right!=null){
            levels.unshift(current.right)
        }
        if(current.left!=null) {
            levels.unshift(current.left)
           
        }
    }
   
    return res
};