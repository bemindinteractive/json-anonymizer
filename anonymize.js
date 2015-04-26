/**
 * Anonymizes the provided JSON string keeping the given exceptions
 * @param  {string} jStr - Source JSON string
 * @return {string}        Anonymized JSON string
 * @author Lorenzo De Santis <lorenzo@bemind.me>
 */
var anonymize = function(jStr, keywords) {
    var res = jStr;

    keywords = keywords || [];

    //pure values
    var natives = [
        "true",
        "false",
        "null",
        "undefined",
        "NaN"
    ];

    //properties and stringified boolean values
    for (var i = keywords.length - 1; i >= 0; i--) {
        res = res.replace(new RegExp('\"' + keywords[i] + '\"', 'g'), '"§' + i + '§"');
    }

    //pure nullable and boolean values
    for (var j = natives.length - 1; j >= 0; j--) {
        res = res.replace(new RegExp('\:' + natives[j], 'g'), '"§' + (j + keywords.length) + '§"');
    }

    //alphabetic values
    res = res.replace(/([a-zA-Z])/g, "X");

    //revert nullable and boolean values
    for (j = natives.length - 1; j >= 0; j--) {
        res = res.replace(new RegExp('\"§' + (j + keywords.length) + '§\"', 'g'), ':' + natives[j]);
    }

    //revert properties and stringified boolean values
    for (i = keywords.length - 1; i >= 0; i--) {
        res = res.replace(new RegExp('\"§' + i + '§\"', 'g'), '"' + keywords[i] + '"');
    }

    //numeric values
    res = res.replace(/([\d])/g, "1");

    return res;
};
