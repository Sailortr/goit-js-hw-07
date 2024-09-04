const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const enteredName = nameInput.value.trim(); 
    nameOutput.textContent = enteredName || 'Anonymous';
});

/*
Görev 3

input#name-input girişinde metin yazılırken (input olayı), şu anki değeri span#name-output içine karşılamak için bir script yazın ve hoşgeldin adı olarak kullanın. Girişin etrafındaki boşlukları kesinlikle temizleyin. Eğer giriş boşsa veya yalnızca boşluklar içeriyorsa, span'e "Anonymous" dizesi yerine ad olarak yerleştirilmelidir.



<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>



Mentorun dikkat edeceği noktalar:

input#name-input öğesinde input olayı dinlenir
Input'ta metin yazarken, mevcut değer span#name-output içine bir selamlama adı olarak yerleştirilir
Input içindeki değer, kenarlardaki boşluklardan temizlenmiştir
Input boşsa veya yalnızca boşluklar içeriyorsa, span içinde ad yerine "Anonymous" metni yerleştirilmelidir
*/