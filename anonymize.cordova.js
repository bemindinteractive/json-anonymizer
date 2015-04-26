/**
 * Anonymizes the provided cordova's addressbook JSON string
 * @param  {string} jStr - Source JSON string
 * @return {string}        Anonymized JSON string
 * @author Lorenzo De Santis <lorenzo@bemind.me>
 */
var anonymizeCordova = function(jStr) {

    //properties and stringified boolean values
    var keywords = [
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

    return anonymize(jStr, keywords);
};
