# json-anonymizer

This project was born by the need to anonymize and store sensible third party data for debugging purpose.

Eg. Cordova addressbook data.

# How it works

Parses a JSON Object or string keeping it properties, trsnsforming all the values digits into "1", and the values letters into "X", keeping spaces, escape characters,special characters, nullable and boolean values.

Eg. Source JSON string:

```json
[{
    "photos": "[]",
    "id": "5651",
    "phoneNumbers": [{
        "value": "329*******",
        "type": "Mobile",
        "pref": false
    }, {
        "value": "+39393*******",
        "type": "Mobile",
        "pref": true
    }],
    "emails": [],
    "displayName": "Donald Duck"
}, {
    "photos": "[]",
    "id": "1101",
    "phoneNumbers": [{
        "value": "347*******",
        "type": "Mobile",
        "pref": null
    }],
    "emails": [{
        "value": "mickey.mouse@disney.com",
        "type": "Mobile"
    }],
    "displayName": "Mickey Mouse"
}]
```

Dest. JSON string:

```json
[{
    "photos": "[]",
    "id": "1111",
    "phoneNumbers": [{
        "value": "111*******",
        "type": "XXXXXX",
        "pref": false
    }, {
        "value": "+11111*******",
        "type": "XXXXXX",
        "pref": true
    }],
    "emails": [],
    "displayName": "XXXXXX XXXX"
}, {
    "photos": "[]",
    "id": "1111",
    "phoneNumbers": [{
        "value": "111*******",
        "type": "XXXXXX",
        "pref": null
    }],
    "emails": [{
        "value": "XXXXXX.XXXXX@XXXXXX.XXX",
        "type": "XXXXXX"
    }],
    "displayName": "XXXXXX XXXXX"
}]
```
