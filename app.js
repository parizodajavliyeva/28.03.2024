//1-topshiriq

// function ortachaTopadigan(son1, son2, son3){
//     if (son1 < son2 < son3 ){
//         return son2
//     }
//         else if (son2 < son1 < son3 ){
//         return son1
//     }else return son3

// }

// alert(ortachaTopadigan(10, 15, 40))





//2-topshiriq bajarilmadi
// function manfiyMusbatSoni(array) {
//     let manfiy_sonlar = 0;
//     let musbat_sonlar = 0;
  
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < 0) {
//         manfiy_sonlar++;
//       } else if (array[i] > 0) {
//         musbat_sonlar++;
//       }
//     }
  
//     return [manfiy_sonlar, musbat_sonlar];
//   }
  
//   let a = [7, -8, 9, -9, 0, 0, 0];
//   let sonlar = manfiyMusbatSoni(a);
//   console.log("Manfiy sonlar:", sonlar[0]);
//   console.log("Musbat sonlar:", sonlar[1]);










//3-topshiriq



// function manfiyYigindisi(array) {
//     let manfiy = 0;
  
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < 0) {
//         manfiy += array[i];
//       }
//     }
  
//     return manfiy;
//   }
  
  
//   let hisoblasharray = [7, -8, 9, -9];
//   console.log("Manfiy yig'indisi:", manfiyYigindisi(hisoblasharray));










//4-topshiriq


// let hisoblash = [11, -8, 9, -9];

// function engKattaElement(array) {
//     let engKatta = array[0];
  
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] > engKatta) {
//         engKatta = array[i];
//       }
//     }
  
//     return engKatta;
//   }
  
  
//   console.log("Eng katta element:", engKattaElement(hisoblash));
