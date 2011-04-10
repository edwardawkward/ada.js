/* ada.js

Encipher and decipher text with the algorithm used in correspondence
between Van and Ada Veen in Part One of Vladimir Nabokov's Ada.

cipher = ada.encipher(plain);
plain = ada.decipher(cipher);

Copyright 2011 Edward Awkward. All rights reserved.
Under the terms of your favourite BSD licences, which see.

*/

var ada = {
    transformWord: function (word, decipher) {

        var len = word.length;

        // Single character words are not modified.
        if (len === 1)
            return word;

        var delta;

        if (decipher)
            delta = -len;
        else // encipher
            delta = len;

        // Translation table.
        var x = 'abcdefghijklmnopqrstuvwxyz'.split('');

        var transformed = [];

        // Transform word.
	word = word.toLowerCase();
        for (var i = 0; i < len; i++) {

            var inc, outc;

	    var base = 'a'.charCodeAt(0);

            // We only translate alphabetic characters,
            // and preserve anything else intact.
            if (word.charAt(i).match(/[^a-zA-Z]/)) {
                outc = word.charAt(i);
            } else {
                // Convert to code and transpose.
                inc = word.charCodeAt(i) - base + delta;

                // Constrain.
                if (inc >= 0)
                    if (inc < x.length)
                        // No drama.
                        outc = x[inc];
                    else
                        // Wrap around.
                        outc = x[inc - x.length].toUpperCase();
                else
                    outc = x[x.length + inc];
            }

            transformed.push(outc);
        }

        // Reassemble.
        transformed = transformed.join('');
        return transformed;
    },

    // Helpers.
    decipher: function (str) {
        return str.replace(/[a-zA-Z']+/g, function (word) {
            return ada.transformWord(word, true);
        });
    },

    encipher: function (str) {
        return str.replace(/[a-zA-Z']+/g, function (word) {
            return ada.transformWord(word, false);
        });
    }
};
