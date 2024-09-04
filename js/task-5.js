function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

/*Görev 5

button.change-color elemanına tıklanarak <body> öğesinin arka plan rengini değiştiren ve bu rengi span.color için metin olarak ata bir script yazın.



<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>




Rastgele bir renk oluşturmak için getRandomHexColor() fonksiyonunu kullanın.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



Dikkat et, getRandomHexColor() fonksiyonunn hex formatında bir renk döndürdüğünü, ancak <body> üzerindeki arka plan renginin rgb formatında olacağını unutma. Bu normaldir ve herhangi bir değişiklik gerektirmez.



Mentorun dikkat edeceği noktalar:

Arka plan <body>i sadece button.change-colora tıkladıktan sonra belirlenecektir.
button.change-color öğesine her tıklamada <body> arka planı yeni rastgele bir renge boyanacaktır.
<body> ve span.color üzerinde aynı renk değerleri olacaktır.
*/