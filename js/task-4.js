const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 

  const formData = {};
  const elements = loginForm.elements;

 
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type === 'text' || element.type === 'email' || element.type === 'password') {
      const value = element.value.trim(); 
      if (!value) {
        alert('All form fields must be filled in');
        return;
      }
      formData[element.name] = value;
    }
  }


  console.log(formData);
  loginForm.reset();
});

/*
Görev 4

Giriş formunu yöneten bir script yazın.



<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>



form.login-form formunun gönderilmesi submit olayıyla gerçekleşmelidir.
Form gönderilirken sayfa yeniden yüklenmemelidir.
Gönderim sırasında formda doldurulmamış alanlar varsa, 'All form fields must be filled in' uyarısını içeren bir alert ile çıkış uyarı oluşturun yapın. Inputlara required niteliği eklemeyin, doğrulama JS aracılığıyla yapılmalıdır.
Kullanıcı tüm alanları doldurur ve formu gönderirse, alan değerlerini iki özellikli bir nesneye toplayın; anahtar alan adları olmalı ve değerler, bu alan adlarının karşılık gelen değerleri, kenarlardaki boşluklardan temizlenmelidir. Form öğelerine erişmek için elements özelliğini kullanın.
Form gönderildiğinde, girilen verilerle bir nesne konsola yazdırılmalı ve reset metodu ile form alanlarının değerleri temizlenmelidir.


Mentorun dikkat edeceği noktalar:

submit eventi dinlenir
Form gönderilirken sayfa yeniden yüklenmez
Gönderim sırasında formda doldurulmamış alanlar varsa, bir alert görüntülenir
Gönderim sırasında, alan adları - değerler çiftine sahip bir nesne oluşturulur, anahtarlar alan adları, değerler ise bu alan adlarının karşılık gelen değerleridir ve kenarlardaki boşluklardan temizlenir
Gönderimden sonra form elemanları temizlenir
*/