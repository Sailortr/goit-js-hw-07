const categoriesList = document.getElementById('categories');

const categories = categoriesList.querySelectorAll('li.item');
const categoryCount = categories.length;
console.log('Number of categories:', categoryCount);

categories.forEach(category => {

  const categoryTitle = category.querySelector('h2').textContent;

  const categoryItems = category.querySelectorAll('li');
  const itemCount = categoryItems.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemCount}`);
});

/*
Görev 1:

HTML, kategorilerin listesini ul#categories içermektedir.



<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>



DOM özelliklerini ve yöntemlerini kullanarak, aşağıdaki işlevleri gerçekleştiren bir script yazın:

ul#categories içindeki kategorilerin sayısını ve yani li.item öğelerinin sayısını hesaplar ve konsola yazdırır.
ul#categories listesindeki her li.item öğesi için, öğenin başlığının metnini ( <h2> etiketi) ve kategorideki öğe sayısını (içinde bulunan tüm <li> öğeleri) bulur ve konsola yazdırır.


Mentorun dikkat edeceği noktalar:

Kategorilerin sayısı, adları ve içindekilerin sayısı DOM öğelerinin özellikleri ve yöntemleri kullanılarak alınmıştır.
Her kategoriye ilişkin veriler, döngü içinde veya forEach() yöntemi kullanılarak alınmış ve konsola yazdırılmıştır.
Konsol ekranında şu içerik gözlemlenmelidir:
*/