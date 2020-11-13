const fs = require('fs');
const path = require('path');

const walkThroughDir = (srcDir = __dirname, ignoreList = []) => {
    let fileList = []

    if (fs.existsSync(srcDir)) {
        const filePaths = fs.readdirSync(srcDir)
        filePaths.forEach(function (filePath) {
            const _src = path.join(srcDir, filePath)
            if(ignoreList.some(ignoreItem=>_src.startsWith(ignoreItem))){
                return;
            }
            const stat = fs.statSync(_src)
            if (stat.isFile()) {
                fileList.push(_src)
            } else {
                const subFileList = walkThroughDir(_src, ignoreList)
                fileList = fileList.concat(subFileList)
            }
        })
    }

    return fileList
}

const getFileName = (filePath)=>{
    const spliterIndex = filePath.lastIndexOf('/');
    const dotIndex = filePath.lastIndexOf('.');
    return filePath.slice(spliterIndex+1, dotIndex);
}

let fileList = walkThroughDir(path.join(__dirname, 'docs'), [
    path.join(__dirname, 'docs/.vuepress'),
    path.join(__dirname, 'docs/README.md'),
]);

const baseDir = path.join(__dirname, 'docs');
fileList = fileList.map(item=>item.replace(baseDir, ''));

const baseStr = `---
home: true
---

- [旧笔记](https://github.com/Thyiad/learn)
`
fileList = fileList.map(item=>`- [${getFileName(item)}](${item.replace('.md', '.html').replace(/ /g, "%20")})`);
const targetContent = baseStr+fileList.join('\n');

const readmeFilePath = path.join(__dirname, 'docs/README.md');
fs.writeFileSync(readmeFilePath, targetContent)

console.log(`生成索引完毕，共${fileList.length}个文件`);