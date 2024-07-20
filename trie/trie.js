class TrieNode {
    constructor(){
        this.obj = {};
        this.isEnd = false;
    }
}
class Trie {
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for(let c of word){
            if(!node.obj[c]){
                node.obj[c] = new TrieNode();
            }
            node = node.obj[c];
        }
        node.isEnd = true;
    }
    search(word){
        let node = this.root;
        for(let c of word){
            if(!node.obj[c]){
                return false;
            }
            node = node.obj[c];
        }
        return node.isEnd;
    }
    print(node = this.root,str = '',arr = []){
        if(node.isEnd){
            arr.push(str);
        }
        for(let c in node.obj){
            this.print(node.obj[c],str+c,arr);
        }
        return arr;
    }
}
let trie = new Trie();
trie.insert('cat');
trie.insert('cattle')
console.log(trie.search('cat'))
console.log(trie.print())