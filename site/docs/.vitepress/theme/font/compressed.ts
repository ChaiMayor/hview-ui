const fs = require("fs");
const path = require("path");
const Fontmin = require("fontmin"); // 需要借助 fontmin 插件
let set = new Set();

const exclude = ["cache", "config", "dist", "theme"]; // 排除搜索文件夹中的内容
const scanFolderDir = path.resolve(__dirname, "../../../../docs"); // 搜索文件夹
const fontFolderDir = path.resolve(__dirname, "../fonts/PingFangSC.ttf"); // 字体源文件位置
const buildFolderDir = path.resolve(__dirname, "./"); // 字体输出文件位置

// refer: https://juejin.cn/post/7123041200449257480#heading-6
//get all possible characters
const scanFolder = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) {
      return done(err);
    }
    let i = 0;
    (function iter() {
      // 这里的立即函数触发了闭包，使results的值一直保存
      let file = list[i++];

      if (!file) {
        // iterator遍历，file不存在即为执行完成状态
        return done(null, results);
      }
      file = dir + "/" + file;
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          scanFolder(file, (err, res) => {
            // 排除掉不想引入的文件
            if (new RegExp(exclude.join("|")).test(file)) {
              // 重新调用方法，获取子目录下的目录结构
              results = results.concat([]);
            } else {
              results = results.concat(res);
            }
            iter();
          });
        } else {
          // @ts-ignore
          results.push(file);
          iter(); // 执行下一步
        }
      });
    })();
  });
};

//get all possible characters
const generateFinalHTML = (finalString) => {
  const fontmin = new Fontmin()
    .src(fontFolderDir)
    .dest(buildFolderDir)
    .use(
      Fontmin.glyph({
        text: finalString,
        hinting: false,
      }),
    );

  fontmin.run((err) => {
    if (err) {
      throw err;
    }
  });
};

//get all possible characters
// 指定扫描路径，注意路径不同，会导致最终扫描到的字符数不同
scanFolder(scanFolderDir, (n, results) => {
  results.forEach((file) => {
    const result = fs.readFileSync(file, "utf8");
    const currentSet = new Set(result);
    // 获取到每个文件中的字符，并存储到set集中
    set = new Set([...set, ...currentSet]);
  });
  generateFinalHTML(Array.from(set).join(""));
  console.log("共生成：" + Array.from(set).length + "个字符");
});
