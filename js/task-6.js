const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');



// 6. görevde ödevde  verilen Math function başlangıç 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// 6. görev verilen Math function bitiş

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxes.innerHTML = '';
  boxes.appendChild(fragment);
}


function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Lütfen 1 ile 100 arasında bir değer girin.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

/*
Görev 6

Aşağıdaki işlevselliğe sahip bir element koleksiyonu oluşturma ve temizleme scripti yaz.

Kullanıcının istediği öğe sayısını girdiği bir input var. Create düğmesine tıkladıktan sonra, doğru sayıda öğeye sahip bir koleksiyon (DOM'a eklenen) gerçekleştirilmeli ve input içindeki değer temizlenmelidir. Create düğmesine tekrar tıklanırsa, mevcut koleksiyonun üzerine yeni bir koleksiyonun getirilmesi gerekmektedir. Destroy düğmesine tıkladıktan sonra, öğe koleksiyonu temizlenmelidir.



<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>




Kullanıcı Create düğmesine bastıktan sonra, input içindeki değerlerin 1 ila 100 arasında olması gerektiğini doğrulamak gerekir. Yalnızca bu şartı sağlıyorsa, DOM'a yeni <div> öğeleri eklenmelidir.



Sayfadaki öğeleri oluşturmak için, createBoxes(amount) adında bir fonksiyon oluşturun. Bu fonksiyon, oluşturulacak öğe sayısını içeren bir parametre almalıdır. Fonksiyon, amount parametresinde belirtilen kadar <div> öğesi oluşturmalı ve bunları div#boxes için DOM'un alt öğeleri olarak eklemelidir.

İlk <div> öğesinin boyutu 30px x 30px olmalıdır.
Her sonraki öğe, öncekinden 10px daha geniş ve yüksek olmalıdır.
Tüm öğelerin rastgele bir arka plan rengine sahip olması gerekir. Rastgele bir renk elde etmek için hazır olan getRandomHexColor() fonksiyonunu kullanın.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




Koleksiyonu temizlemek için Destroy düğmesine basıldıktan sonra, destroyBoxes() fonksiyonunu oluşturun. Bu fonksiyon , oluşturulan tüm öğeleri kaldırarak div#boxes içeriğini temizler.



Mentorun dikkat edeceği noktalar:

Create düğmesine tıklandıktan sonra, input içindeki değer 1-100 aralığının dışında ise hiçbir şey olmaz
Create düğmesine tıklandıktan sonra, div#boxes içine inputte belirtilen sayıda farklı renkte kareler eklenir. input değeri temizlenir
Tekrar Create düğmesine tıklandığında önceki kareler tamamen kaldırılır ve yerine, inputte belirtilen sayıda yeni kare eklenir. input değeri temizlenir
div#boxes içindeki tüm kareler farklı renklidir ve rastgele bir arka plan rengine sahiptir
div#boxes içindeki ilk kare 30px x 30px boyutundadır ve her bir sonraki kare öncekinden 10px daha yüksek ve geniştir
Destroy düğmesine basıldıktan sonra, tüm kareler div#boxes içinden kaldırılmalıdır
*/