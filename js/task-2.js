const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const gallery = document.querySelector('.gallery');
const items = images.map(image => {
  return `<li class='gallery-item'><img src='${image.url}' alt='${image.alt}'></li>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', items);


/*

Görev 2:

Veri dizisine dayalı resim galerisi oluşturmak için bir script yazın. HTML, ul.gallery listesini içerir.



<ul class="gallery"></ul>



images dizisi kullanılarak <li> içine gömülü <img> öğeleri oluşturmak için kullan.

document.createElement() ve elem.append() veya template strings ve elem.insertAdjacentHTML() kullanarak HTML öğeleri oluşturup ekleyebilirsin.

Galeri öğeleri bir ekleme işlemi ile DOM'a eklenmelidir.
CSS sınıfları aracılığıyla galeri için minimum düzenlemeyi esnek kutular kullanarak ekle.


const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];



Mentorun dikkat edeceği noktalar:

DOM'a üç resim içeren bir galeri oluşturulmuş ve eklenmiştir
Galeri, ul.gallery listesine eklenmiştir ve 3 adet <li> elemanından oluşmaktadır, içinde ise <img> elemanları bulunmaktadır
<img> elemanlarını oluşturmak için images adlı nesne dizisinden veriler kullanılmıştır
Galeri elemanları tek bir ekleme işlemiyle DOM'a eklenmiştir
Galeriye CSS sınıfları aracılığıyla flexbox ile minimum düzenleme yapılmıştır
*/