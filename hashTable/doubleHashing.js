class HashTable {
    constructor(size) {
      this.table = new Array(size);
    }
  
    _hash1(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    _hash2(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return (hash % (this.table.length - 1)) + 1;
    }
  
    set(key, value) {
      let index = this._hash1(key);
      let stepSize = this._hash2(key);
      while (this.table[index]) {
        index = (index + stepSize) % this.table.length;
      }
      this.table[index] = [key, value];
    }
  
    get(key) {
      let index = this._hash1(key);
      let stepSize = this._hash2(key);
      while (this.table[index]) {
        if (this.table[index][0] === key) {
          return this.table[index][1];
        }
        index = (index + stepSize) % this.table.length;
      }
      return undefined;
    }
  }
  