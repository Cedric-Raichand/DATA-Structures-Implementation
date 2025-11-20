const castStringToInt = (string, tableSize) => {
  let hashkey = 20;
  for (let i = 0; i < string.length; i++) {
    hashkey = (hashkey * 31 + string.charCodeAt(i)) % tableSize;
  }
  return hashkey;
};

class HashTable {
  table = new Array(50);

  setItem = (key, val) => {
    const idx = castStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      this.table[idx] = [[key, val]];
    } else {
      // update key if exists
      for (let i = 0; i < this.table[idx].length; i++) {
        if (this.table[idx][i][0] === key) {
          this.table[idx][i][1] = val;
          return;
        }
      }
      this.table[idx].push([key, val]);
    }
  };

  getItem = (key) => {
    const idx = castStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;

    const found = this.table[idx].find((x) => x[0] === key);
    return found ? found[1] : null;
  };

  removeItem = (key) => {
    const idx = castStringToInt(key, this.table.length);
    if (!this.table[idx]) return;

    this.table[idx] = this.table[idx].filter((item) => item[0] !== key);

    // if bucket becomes empty, set it to null
    if (this.table[idx].length === 0) {
      this.table[idx] = undefined;
    }
  };

  keys = () => {
    const keys = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let [key] of bucket) {
          keys.push(key);
        }
      }
    }
    return keys;
  };

  values = () => {
    const values = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let [, value] of bucket) {
          values.push(value);
        }
      }
    }
    return values;
  };

  print = () => {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  };
}
