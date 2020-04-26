
function snakeCaseToTitleCase(snakeCaseString) {
  if (!snakeCaseString) {
    return '';
  }

  const stringParts = snakeCaseString.split('_');
  for (let i = 0; i < stringParts.length; i++) {
    const word = stringParts[i];
    stringParts[i] = word.charAt(0).toUpperCase() + word.substr(1, word.length);
  }

  return stringParts.join(' ');
}

function DisplayItem(name, displayName) {
  this.name = name;
  this.displayName = displayName ? displayName : snakeCaseToTitleCase(name);
}

export default DisplayItem;





