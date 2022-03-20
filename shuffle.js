// ES6 modules are [actually strict by
// default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Strict_mode_for_modules)
// Therefore, you can in fact comment this out or remove it. 'use strict';

export function shuffle(array) {
  let m = array.length;

  // While there remain elements to shuffle...
  while (m) {
    // Pick a remaining element...
    const i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    const t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
