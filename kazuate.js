// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let a = document.querySelector('#print');
a.addEventListener('click', greeting);

function greeting() {
    let i = document.querySelector('input[name = "seisu"]');
    let seisu = i.value;
let yoso = seisu;
// ボタンを押した後の処理をする関数 hantei() の定義
    function hantei() {
        let result;
        // 第5回課題:テキストボックスの数値をここに代入
        // 課題3-1：ここの判定処理を作成する．
        //        ページに表示する方法はまだ習っていないので
        //        判定結果はコンソールに出力すること
        kaisu=kaisu+1;
        let answer = kaisu + "回目の予想: "+ yoso;
        if (kaisu>3){
            result = ('答えは'+kotae+'でした。すでにゲームはおわっています')
        }
        else if (kaisu>2){
            if(kotae%yoso!==0){
                result = ('正解です。答えは'+kotae+'です。')
            }
        }   
        else if (kotae%yoso===0){
            result = ("正解です。おめでとう！");
        }else if (kotae%yoso!==0 && kotae>yoso){
            result = ("まちがい。答えはもっと大きいですよ")
        }else if (kotae%yoso!==0 && kotae<yoso){
            result = ("まちがい。答えはもっと小さいですよ")
        }

        let s = document.querySelector('span#result');
        s.textContent = result;
        let k = document.querySelector('span#answer');
        k.textContent = answer;

    }   
}