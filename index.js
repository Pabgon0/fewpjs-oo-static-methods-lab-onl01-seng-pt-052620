class Formatter {
  static capitalize(string) {
    return string.toUpperCase()
  }
  
  static sanitize(string) {
    return string.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
  }
  
  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = string.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n === 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}