autoComplete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let list = [];
    this.collectWord(node, word, list);
    return list;
  }

  collectWord(node, word, list) {
    if (node.isEndOfWord) {
      list.push(word);
    }

    for (let char in node.children) {
      this.collectWord(node.children[char], word + char, list);
    }
  }