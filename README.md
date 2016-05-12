# json-anonymizer

Parses a JSON Object or string keeping it properties, trsnsforming all the values digits into "1", and the values letters into "X", keeping spaces, escape characters,special characters, nullable and boolean values.

## Motivation

Born to anonymize and store sensible third party data for debugging purpose, eg. Cordova addressbook data.

## How it works

Reference `anonymize.js` in your html page or node.js script and call the `anonymizeJSON` function.

## Examples

Source JSON string:

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

## Contributors

- [whirmill][2]

## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see [http://www.gnu.org/licenses/][1].

[1]: http://www.gnu.org/licenses/
[2]: https://github.com/whirmill
