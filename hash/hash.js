module.exports = class HashTable {
  constructor(tableRow) {
    this.table = new Array(tableRow); 
  }

  put(data) {
    const pos = getHash(data);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.getHash(key)];
  }

  getHash(str) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += H * total + str.charCodeAt(i);
    }
    total = total % this.table.length;

    return total < 0 ? parseInt(total + this.table.length - 1) : parseInt(total);
  }

  showDistro() {
    this.table.forEach((val, i) => {
      if (this.table[i] !== undefined) console.log(`${i} : ${this.table[i}`);
    });
  }
}
