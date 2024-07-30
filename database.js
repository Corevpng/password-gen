const fs = require('fs');
const path = require('path');

class Database {
  constructor(filename) {
    this.filepath = path.join(__dirname, filename);
    this.data = {};
    this.load();
  }

  load() {
    if (fs.existsSync(this.filepath)) {
      const rawData = fs.readFileSync(this.filepath);
      this.data = JSON.parse(rawData);
    } else {
      this.data = {};
    }
  }

  save() {
    fs.writeFileSync(this.filepath, JSON.stringify(this.data, null, 2));
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    this.save();
  }
}

module.exports = Database;