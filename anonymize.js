/**
 * Anonymizes the provided JSON string keeping the given exceptions
 * @param  {string} jStr - Source JSON string
 * @return {string}        Anonymized JSON string
 * @author Lorenzo De Santis <lorenzo@bemind.me>
 */
var anonymize = function(jStr) {
    var res = jStr;

    //properties and stringified boolean values
    var strings = [
        "photos",
        "id",
        "phoneNumbers",
        "value",
        "type",
        "emails",
        "displayName",
        "name",
        "givenName",
        "formatted",
        "middleName",
        "familyName",
        "honorificPrefix",
        "honorificSuffix",
        "nickname",
        "pref",
        "rawId",
        "addresses",
        "ims",
        "organizations",
        "title",
        "department",
        "birthday",
        "note",
        "categories",
        "urls",
        "true",
        "false"
    ];

	//pure values
    var natives = [
        "true",
        "false",
        "null"
    ];

    //properties and stringified boolean values
    for (var i = strings.length - 1; i >= 0; i--) {
        res = res.replace(new RegExp('\"' + strings[i] + '\"', 'g'), '"§' + i + '§"');
    }

    //pure nullable and boolean values
    for (var j = natives.length - 1; j >= 0; j--) {
        res = res.replace(new RegExp('\:' + natives[j], 'g'), '"§' + (j + strings.length) + '§"');
    }

    //alphabetic values
    res = res.replace(/([a-zA-Z])/g, "X");

    //revert nullable and boolean values
    for (j = natives.length - 1; j >= 0; j--) {
        res = res.replace(new RegExp('\"§' + (j + strings.length) + '§\"', 'g'), ':' + natives[j]);
    }

    //revert properties and stringified boolean values
    for (i = strings.length - 1; i >= 0; i--) {
        res = res.replace(new RegExp('\"§' + i + '§\"', 'g'), '"' + strings[i] + '"');
    }

    //numeric values
    res = res.replace(/([\d])/g, "1");

    return res;
};
