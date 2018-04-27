var _string = "Hey Dhaval! How are you? Lets meet again.";
function reverseTheString(_str){
  let final = [], string, notation, result = '';
  for(let i of _str){
    if(i == '!'){
      string = _str.slice(0, _str.indexOf('!')).split(' ').reverse().join(' ');
      string = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
      string = (string[string.length - 1] == ' ') ? string.slice(0, string.length - 1) : string;
      final.push([string, '!']); 
    } else if(i == '?'){
      string = _str.slice(_str.indexOf('!') + 1, _str.indexOf('?')).split(' ').reverse().join(' ');
      string = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
      string = (string[string.length - 1] == ' ') ? string.slice(0, string.length - 1) : string;
      final.push([string, '?']);
    } else if(i == '.'){
      string = _str.slice(_str.indexOf('?') + 1, _str.indexOf('.')).split(' ').reverse().join(' ');
      string = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
      string = (string[string.length - 1] == ' ') ? string.slice(0, string.length - 1) : string;
      final.push([string, '.']);
    }
  }
  final = final.reverse();
  for(let i of final){
    result += i.join('') + ' ';
  }
  console.log(result);
  return result;
}
reverseTheString(_string); // "Again meet lets. You are how? Dhaval Hey!"