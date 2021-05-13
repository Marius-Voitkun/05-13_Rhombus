drawRhombus(21);

function drawRhombus(height) {
  let array = [];
  let html = '';
  
  for (let i = 1; i <= height / 2 + 1; i++) {
    array = [];
    
    for (let j = 1; j <= i; j++) {
      array.push(`<span style="color: rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}">*</span>`);
    }
    html += `<p>${array.join('')}</p>`;
  }

  for (let i = array.length; i < height; i++) {
    array = [];
    
    for (let j = 1; j <= height + 1 - i; j++) {
      array.push(`<span style="color: rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}">*</span>`);
    }
    html += `<p>${array.join('')}</p>`;
  }

  document.getElementById('container').innerHTML = html;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




// function drawRhombus(height) {
//   let array = [];
//   let html = '';

//   for (let i = 1; i <= height / 2 + 1; i++) {
//     rgbIndex1 = getRandomInteger(0, 255);
//     rgbIndex2 = getRandomInteger(0, 255);
//     rgbIndex3 = getRandomInteger(0, 255);
    
//     array.push(`<span style="color: rgb(${rgbIndex1}, ${rgbIndex2}, ${rgbIndex3}">*</span>`);
    
//     html += `<p>${array.join('')}</p>`;
//   }

//   for (let i = array.length; i < height; i++) {
//     array.pop();
//     html += `<p>${array.join('')}</p>`;
//   }

//   document.getElementById('container').innerHTML = html;
// }

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }