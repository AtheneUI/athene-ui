const os = require('os');
const log = require('./log.script');
const { exec, } = require('child_process');

const platforms = ["darwin", "linux", "win32"];
const buildDirs = ["dist", "lib", "es"];

const remove = (cmd, dir) => {
    exec(cmd, (error) => {
        error ? log.failed(error): log.success(`successful: build clean "${ dir }" successful!`);
    });
};

const buildClean = () => {
    const platform = os.platform();
    if(platforms.includes(platform)) {
        if(platform !== "win32") { // 执行类 unix 系统的删除命令
            const unixFormat = buildDirs.map(item => `./${item}`).join(' ');
            const cmd2Unix = `rm -rf ${ unixFormat }`;
            remove(cmd2Unix, buildDirs.join('、'));
        }else {
            buildDirs.forEach(item => {
                const cmd2win = `rmdir -r -force ./${ item }`;
                remove(cmd2win, item);
            })
        }
    }
};

buildClean();
