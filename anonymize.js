/**
 * Anonymizes the provided JSON Object or JSON string keeping the given exceptions
 * @param  {*}             src                    JSON Array|Object|string to anonymize
 * @param  {Object}        options                Anonymization options
 * @param  {Array<string>} options.exclusions     Values to keep as they are by the given keys
 * @param  {boolean}       options.keepStringBits If enabled keeps the stringified boolean values
 * @return {*}                                    Anonymized JSON Array|Object|string
 */
var anonymizeJSON = function(src, options) {

    var dest = typeof src === 'object' ? JSON.parse(JSON.stringify(src)) : JSON.parse(src);

    options = !!options ? options : {};
    options.exclusions = !!options.exclusions ? options.exclusions : [];
    options.keepStringBits = !!options.keepStringBits ? options.keepStringBits : false;

    var anonymizeWorker = function(obj, options) {
        for (var prop in obj) {
            if (typeof obj[prop] === 'object') {
                anonymizeWorker(obj[prop], options); // <- recursive call
            } else {
                if (options.exclusions.indexOf(prop) === -1) {
                    if (typeof obj[prop] === 'number') {
                        obj[prop] = Number(obj[prop].toString().replace(/([\d])/g, '1'));
                    } else if (typeof obj[prop] === 'string') {

                        var canModify = true;

                        if (options.keepStringBits) {
                            canModify = obj[prop] !== 'true' && obj[prop] !== 'false';
                        }

                        if (canModify) {
                            obj[prop] = obj[prop].replace(/([a-zA-Z])/g, 'X');
                            obj[prop] = obj[prop].replace(/([\d])/g, '1');
                        }

                    }
                }
            }
        }
    };

    anonymizeWorker(dest, options);

    return dest;
};

var anonymizeContacts = function(src) {
    return anonymizeJSON(src, {
        keepStringBits: true,
        exclusions: ['id']
    });
};
