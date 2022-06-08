let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.name);
console.log(data.main.temp_max);
console.log(data.main.temp_min);


//let n = document.querySelector('span#data2');
//n.textContent = data.main.temp_max;
//let m = document.querySelector('span#data3');
//m.textContent = data.main.temp_min;



let b = document.querySelector('button#kensaku');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
  let i = document.querySelector('#tenki[name="tenki"]');
  let v = i.value;
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+v+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);
    let color = 'rgba(85, 168, 206, 0.768)';
    let div = document.querySelector('div.box');
    div.style.backgroundColor = color;

    let name;
    if(data.name==="State of Rio de Janeiro"){
      name="リオデジャネイロ";
  }else if(data.name==="Paris"){
      name="パリ";
  }else{
      name=data.name;
  }
    
    let s = document.querySelector('span#data1');
    s.textContent = "＜"+name+"の天気＞";
    let a = document.querySelector('span#weather');
    a.textContent = data.weather[0].description;
    let c = document.querySelector('span#temp');
    c.textContent = "気温"+data.main.temp+"℃";
    let d = document.querySelector('span#max');
    d.textContent = data.main.temp_max+"℃";
    let e = document.querySelector('span#min');
    e.textContent = data.main.temp_min+"℃";
    let f = document.querySelector('span#humidity');
    f.textContent = "湿度"+data.main.humidity+"%";
    let A = document.querySelector('span#dataA');
    A.textContent = "気圧"+data.main.pressure+"hPa";
    let B = document.querySelector('span#dataB');
    B.textContent = "体感温度"+data.main.feels_like+"℃";
    let C = document.querySelector('span#dataC');
    C.textContent = "風速"+data.wind.speed+"m/s";
    let D = document.querySelector('span#dataD');
    D.textContent = "視認性"+data.visibility+"m";
/*
    let png;
    if(data.weather[0].description==="曇りがち"){
      png = "kumorigati.png";
    }else if(data.weather[0].description==="小雨"){
      png = "ame.png";
    }else if(data.weather[0].description==="霧"){
      png = "kiri.png";
    }else if(data.weather[0].description==="厚い雲"){
      png = "atuikumo.png";
    }else if(data.weather[0].description==="晴天"){
      png = "hare.png";
    }else{
      png = "kumo.png";
    }
*/

    /*
    let img = document.createElement('img');
    img.setAttribute('src', png);
    img.setAttribute('alt', '顔写真');
    img.setAttribute('width', '100');


    let u = document.querySelector('div#jpeg');
    u.insertAdjacentElement('beforeend', img);
*/
let img = document.querySelector("img#image_place");

let png;
if(data.weather[0].description==="曇りがち"){
  png = "kumo.png";
}else if(data.weather[0].description==="小雨"){
  png = "ame.png";
}else if(data.weather[0].description==="霧"){
  png = "kiri.png";
}else if(data.weather[0].description==="厚い雲"){
  png = "atuikumo.png";
}else if(data.weather[0].description==="晴天"){
  png = "hare.png";
}else{
  png = "kumo.png";
}

img.src = png;
    

    

    // data.x を出力
    console.log(data.x);
}
// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);

}

// 通信の最後にいつも実行する処理- 
function finish() {
    console.log('Ajax 通信が終わりました');
}
  