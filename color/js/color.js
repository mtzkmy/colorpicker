
// // カラーコードを表示するように値を取得
// document.querySelector('#colorText').textContent = `カラーコード:${document.querySelector('#ColorPicker').value}`;

// でも長すぎるので定数宣言
const text = document.querySelector('#colorText');

const picker = document.querySelector('#ColorPicker');

text.textContent = `カラーコード: ${picker.value}` ;

// 色が選択されたらカラーコードを表示する
picker.addEventListener('input', colorBg);
