'use strict';

function setCookie (key, data) {
  const outdata = key + '=' + data;
  document.cookie = outdata + ';samesite=strict';
}

function getCookie (key) {
  // ';'はクッキー文字列の区切り
  const strCookie = document.cookie + ';';
  // key の index番号を取得
  const keyIdx = strCookie.indexOf(key);
  if (keyIdx === -1) {
    return '';
  } else {
    // 'name=taro; なら、t の位置を取得
    const valIdx = keyIdx + key.length + 1;
    // valIdx の後の ';' の位置を取得
    const valEnd = strCookie.indexOf(';', valIdx);
    // valIdx から valEnd までがデータである
    const data = strCookie.substring(valIdx, valEnd);
    return data;
  }
}

// 修正時刻: Tue 2023/03/21 09:02:40
