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

function DisplayItem(name, displayName, selected, color, price) {
  this.name = name;
  this.displayName = displayName ? displayName : snakeCaseToTitleCase(name);
  this.isSelected = selected || false;
  this.color = color || 'transparent';
  this.price = price || 0;
}

export default DisplayItem;