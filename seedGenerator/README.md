<!--
	MIT License

Copyright (c) 2022 gumieProf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-->

# Seed generator
## このプログラムを作るきっかけ
このプログラムを作るきっかけは、マインクラフトで遊ぶときに思いつきました。<br>
マインクラフトのワールドにはseed値というワールドを生成するときに使う数値があります。<br>
その値から面白いワールドに行けることもあります。<br>
それを見つけるためにランダムでseed値になるような数字を出力するプログラムです
## 使い方
1. シェル上でこのディレクトリに移動してください。
2. `node index.js (コマンド)` という感じで入力してください。
## コマンドのオプション
- `start` seed値を出力します。
	- `--length (数字)`seed値(マイナスを除く)の文字数を決めることができます。
- `log` seed値の履歴をを出力します。
	- `--max (数字)` これまで出力したseed値の最大表示数を決めれます。
- `clear` seed値の履歴を削除します。
