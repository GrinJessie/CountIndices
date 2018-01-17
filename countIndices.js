//input string: str
//modify: lowercase
//creat array by split(): strs
//creat obj: letters
//loop: char in strs
//creat keys
//not existing: key = strs[i], value = [i]
//existing: push
//value.push(i);

const countIndices = function countUniqCharIndices(str){
  const strs = str.toLowerCase().split('');
  const letters = {};
  for (let i = 0; i < strs.length; i++) {
    if (!letters[strs[i]]){
      letters[strs[i]] = [i];
    } else {
      letters[strs[i]].push(i);
    }
  }
  return letters;
}

console.log(countIndices('lighthouse in the house'));