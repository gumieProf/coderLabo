const cli = require("cac")();
const fs = require("fs");
var rand1, rand2, _length;

function checkFile(filePath) {
    let isExist = false;
    try {
        fs.statSync(filePath);
        isExist = true;
    } catch (err) {
        isExist = false;
    }
    return isExist;
}

cli
    .command('start', 'seed値を生成')
    .option('--length <name>', '出力する文字列')
    .action((options) => {
        if (options.length) {
            length = Number(options.length);
        }
        let signs = ["", "-"];
        rand1 = Math.floor(Math.random() * (1 + 1)); //マイナスかそれ以外かを決める乱数(0 OR 1)
        let sign = signs[rand1]; //変数signに結果を割り当てる
        if (!_length === null) {
            rand2 = _length - 1;
        } else {
            rand2 = Math.floor(Math.random() * (17 + 1 - 7)) + 7; //文字数を決める乱数
        }

        var seed = new String; //文字列として変数を定義する

        for (var i = rand2 - 1; i >= 0; i--) { //変数rand2の回数だけ実行
            let rand3 = Math.floor(Math.random() * (9 + 1)); //１から９までの数字をランダムで出力
            seed = seed + rand3; //変数seedにランダム変数を割り当てる
        }
        var _date = new Date();
        var result = {
            data: new String(sign + seed)
        };
        console.log('生成されたseed値 => ' + result.data); //変数signとseedを組み合わせて出力する
        if (checkFile("./seeds.json")) {
            var loadedOBJ = JSON.parse(fs.readFileSync('./seeds.json', 'utf8'));
            console.log(JSON.stringify(loadedOBJ));
            loadedOBJ.seeds[loadedOBJ.seeds.length] = result
            try {
                fs.writeFileSync("./seeds.json", JSON.stringify(loadedOBJ))
            } catch (err) {
                console.error(err)
            }
        }

    })


cli
    .command('log', 'これまで生成されたseed値を確認')
    .option('--max <name>', '表示するseed値の最大数')
    .action((options) => {

        if (checkFile("./seeds.json")) {
            var loadedOBJ = JSON.parse(fs.readFileSync('./seeds.json', 'utf8'));
            if (options.length) {
                for (var i = options.length - 1; i >= 0; i--) {
                    console.log("seed" + i + ":" + loadedOBJ.seeds[i].data);
                }
            } else {
                for (var i = loadedOBJ.seeds.length - 1; i >= 0; i--) {
                    console.log("seed" + i + ":" + loadedOBJ.seeds[i].data);
                }
            }
        }
    });
cli.help()

cli.parse()