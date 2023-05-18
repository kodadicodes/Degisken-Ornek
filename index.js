// Öncelikle geçerli yılı alıyoruz. Bunun için JavaScript'in Date fonksiyonunu kullanıyoruz.
let currentYear = new Date().getFullYear();

// Sonra Mert Demir'in yaşını hesaplıyoruz. Mert Demir 2001 doğumlu olduğu için geçerli yıldan 2001'i çıkararak yaşını buluyoruz.
let mertAge = currentYear - 2001;
// Eylül Demir'in yaşını da aynı şekilde hesaplıyoruz. Eylül Demir 2002 doğumlu olduğu için geçerli yıldan 2002'yi çıkararak yaşını buluyoruz.
let eylulAge = currentYear - 2002;

// Mert Demir'in yaşını yazdırıyoruz. Bunun için console.log fonksiyonunu kullanıyoruz.
console.log("Mert Demir " + mertAge + " yaşındadır"); // Mert Demir 22 yaşındadır
// Eylül Demir'in yaşını da aynı şekilde yazdırıyoruz.
console.log("Eylül Demir " + eylulAge + " yaşındadır"); // Eylül Demir 21 yaşındadır

// Mert Demir'in ortalama notunu hesaplıyoruz. Mert Demir'in aldığı notlar 100, 90 ve 10. Bu notların toplamını alıp, not sayısına bölerek ortalamasını buluyoruz.
let mertAverage = (100 + 90 + 10) / 3;
// Eylül Demir'in ortalama notunu da aynı şekilde hesaplıyoruz. Eylül Demir'in aldığı notlar 60, 30 ve 50.
let eylulAverage = (60 + 30 + 50) / 3;

// Mert Demir'in ortalama notunu yazdırıyoruz. parseInt fonksiyonunu kullanarak ondalık kısmını atıyoruz.
console.log("Mert Demir'in not Ortalaması: " + parseInt(mertAverage)); // Mert Demir'in not Ortalaması: 66
// Eylül Demir'in ortalama notunu da aynı şekilde yazdırıyoruz.
console.log("Eylül Demir'in not Ortalaması: " + parseInt(eylulAverage)); // Eylül Demir'in not Ortalaması: 46

// Geçme notunu 50 olarak ayarlıyoruz.
let passingGrade = 50;

// Mert Demir'in sınıfı geçip geçmediğini kontrol edip sonucu yazdırıyoruz. Eğer Mert Demir'in ortalaması geçme notundan büyükse sınıfı geçmiş olur.
console.log("Mert Demir'in sınıfı geçme durumu: " + (mertAverage > passingGrade)); // Mert Demir'in sınıfı geçme durumu: true
// Eylül Demir'in sınıfı geçip geçmediğini de aynı şekilde kontrol edip sonucu yazdırıyoruz.
console.log("Eylül Demir'in sınıfı geçme durumu: " + (eylulAverage > passingGrade)); // Eylül Demir'in sınıfı geçme durumu: false




