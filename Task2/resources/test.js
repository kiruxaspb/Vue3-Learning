// поиск спец символов + пропускаем пробелы
function isValid(username) {
  return /^[a-zA-Z\s]+$/.test(username)
}

function split(username, sep) {
  return (username.split(sep));
}

function split2(username, sep) {
  return (username.split(' ', 2));
}

function normSpaces(str) {
  let newstr = str.trim(); // обрезаем пробелы вначале и в конце
  // newstr.split(' '); // разделяем слова
  return (newstr.replace(/^ +| +$|( ) +/g,"$1"));
}

function test() {
  // let rand_str = "how much is the fish"
  // rand_str = rand_str.replace(/\s/g, '');
  // console.log(rand_str.length)
  let str = "посчитать     количество слов в строке";
  let matches = str.match(/\S+/g) || []; // Если нет совпадений, то присвоить пустой массив
  if (matches.length > 2) {
    console.log('> 2 words')
  } else {
    console.log(matches.length);
  }
}


 
console.log(isValid('Adam dsada      a'));
console.log(isValid('Adam$%%@#@D)*FU(Q'));

console.log(split('test test', ' '));

console.log(split2('test test test'));



console.log(normSpaces('     test       test   '));

test();

