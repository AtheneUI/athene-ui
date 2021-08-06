const fs = require('fs');
const path = require('path');
const log = require('./log.script');

const outputComponentsLess2lib = (basePath, targetPath, searchPath) => {
    // 将目标路径解析成数组
    const targetDirs = targetPath.match(/\w+/g);
    // 拼接真实的目标目录路径
    const targetCompletePath = path.resolve(basePath, targetPath);
    // 拼接 components.less 文件真实路径
    const componentsLessPath = path.resolve(targetCompletePath, 'components.less');
    // 定义聚合 less 方法
    const polymerizeLess = () => {
        try {
            fs.statSync(componentsLessPath);
            // 预删除指定目录下的 components.less
            fs.unlinkSync(componentsLessPath);
        }catch(error) {}
        // 聚合方法
        const run = (_path) => {
            // 逐层拼接真实路径
            const realPath = path.resolve(__dirname, _path);
            // 读取目录
            fs.readdir(realPath, (error, files) => {
                if(!error) {
                    // 迭代文件
                    files.forEach(file => {
                        // 逐层拼接文件路径
                        const tempPath = realPath + '/' + file;
                        // 获取指定路径的元素的状态
                        fs.stat(tempPath, (error, stats) => {
                            if(!error) {
                                // 如果是目录则执行递归操作
                                if (stats.isDirectory()) {
                                    run(tempPath);
                                } else {
                                    // 如果是目标目录的各个组件中的 style 目录下的 less 则执行聚合操作
                                    if (tempPath.includes(".less") && !tempPath.includes('_style')) {
                                        // 逐层聚合
                                        fs.appendFileSync(componentsLessPath, `@import "../${tempPath.split('components/')[1]}";\n`);
                                    }
                                }
                            }
                        });
                    });
                }
            });
        }
        run(searchPath);
    };
    try {
        // 检测目标目录是否存在
        fs.statSync(targetCompletePath);
        // 目录存在执行聚合方法
        polymerizeLess();
    } catch (e) {
        // 目标目录不存在则递归创建目录
        let count = 0;
        const mkdir = (basePath, uri) => {
            // 逐层拼接待创建目录的路径
            const realPath = path.resolve(basePath, uri);
            try {
                try {
                    // 检测待创建目录是否已经存在
                    fs.statSync(realPath);
                } catch (e) {
                    // 不存在则创建该目录
                    fs.mkdirSync(realPath);
                }
                // 移动游标
                ++count;
                if (count < targetDirs.length) { // 是否需要深层次递归创建子目录
                    // 递归创建子目录
                    mkdir(realPath, targetDirs[count]);
                } else { // 全部创建完毕则执行聚合 less 方法
                    polymerizeLess();
                }
            } catch (err) {
                console.log(err);
            }
        };
        mkdir(basePath, targetDirs[0]);
    }
};

outputComponentsLess2lib(path.resolve(__dirname, '../'), 'lib/_style', '../components');

const outputLess2dist = () => {
    // 拼接目标文件路径
    const targetDirPath = path.resolve(__dirname, '../', 'dist');
    const targetFilePath = path.resolve(targetDirPath, 'athene.less');
    // 判断 dist 目录中是否存在目标文件
    try {
        fs.statSync(targetDirPath);
    }catch(error) {
        fs.mkdirSync(targetDirPath);
    }
    try {
        fs.statSync(targetFilePath)
    }catch(error) {
        // 创建文件，并写入内容
        const basePath = '../lib/_style';
        const content = `@import "${ basePath }/index.less";\n@import "${ basePath }/components.less";\n`;
        fs.writeFile(targetFilePath, content, (err) => {
            if(!err) { log.success(`successful: athene.less 生成成功并输出到 ${ targetFilePath } 目录`) }
        });
    }

};
outputLess2dist();