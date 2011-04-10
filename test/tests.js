test("Word Deciphering", function () {
    equals('lovely', ada.transformWord('ruBkrE', true),
        'ruBkrE deciphers to lovely');
});

test("Word Enciphering", function () {
    equals('ruBkrE', ada.transformWord('lovely'),
        'lovely enciphers to ruBkrE');
});

test("String Deciphering", function () {
    equals('his way through the brush and crossing a brook to reach',
	   ada.decipher('klv zdB AoyvBno wkh gwzxm dqg kzwAAqvo a gwttp vq wjfhm'),
	   'multiword string deciphers correctly');
});

test("String Enciphering", function () {
    equals('klv zdB AoyvBno wkh gwzxm dqg kzwAAqvo a gwttp vq wjfhm',
	   ada.encipher('his way through the brush and crossing a brook to reach'),
	   'multiword string enciphers correctly');
});
