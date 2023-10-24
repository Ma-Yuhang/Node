const path = require('path');
const fs = require('fs/promises');

class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  static async getFile(filename) {
    const stat = await fs.stat(filename);
    const name = path.basename(filename);
    const ext = path.extname(filename);
    const isFile = stat.isFile();
    const size = stat.size;
    const createTime = new Date(stat.birthtime);
    const updateTime = new Date(stat.mtime);
    return new File(filename, name, ext, isFile, size, createTime, updateTime);
  }

  async getContent(isBuffer = false) {
    // 是文件就读取文件内容
    if (this.isFile) {
      if (isBuffer) {
        return await fs.readFile(this.filename);
      } else {
        return await fs.readFile(this.filename, 'utf-8');
      }
    }
    // 不是文件就返回null
    return null;
  }
  async getChildren() {
    // 如果是文件则返回空数组
    if(this.isFile) {
      return []
    }
    let children = await fs.readdir(this.filename)
    children = children.map(name => {
      const res = path.resolve(__dirname, name)
      return File.getFile(res)
    })
    return Promise.all(children)
  }
}

async function readDir(dirname) {
  const dir = await File.getFile(dirname)
  return await dir.getChildren()
}

  /*
    {
      name: "index.js",
      ext: "js", // 如果是文件夹是空字符串
      isFile: "true",
      size: "9" // 字节 如果是文件夹是0,
      createTime: "2023-04-24T06:22:47.807Z",
      updateTime: "2023-04-24T06:22:47.807Z",
      getChildren: fn // 返回一个数组 若是文件则返回空数组
    }
  */
async function test() {
  const dirname = path.resolve(__dirname)
  const res = await readDir(dirname)
  console.log(res);
}
test()
