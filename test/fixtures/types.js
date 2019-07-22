'use strict'

/*
  Contains map of type names to type JSON.

  Types data taken from raml-parser-toolbelt/tools/datatype-expansion/examples/nodejs/ramls/type_collections.raml
  as of commit eaf25cccd7991fe8d6f700aa615bdfbe91a6ced2
*/

module.exports = {
  Song: {
    properties: {
      title: {
        type: 'string',
        example: 'Great'
      },
      length: 'string'
    }
  },
  Album: {
    properties: {
      title: 'string',
      songs: {
        description: 'A list of songs inside an album.',
        type: 'Song[]'
      }
    },
    examples: {
      Album1: {
        title: 'Test 1',
        songs: [
          {
            title: 'Great',
            length: '2'
          },
          {
            title: 'Awesome',
            length: '3'
          }
        ]
      },
      Album2: {
        title: 'Test 2',
        songs: [
          {
            title: 'Great',
            length: '2'
          },
          {
            title: 'Awesome',
            length: '3'
          }
        ]
      }
    }
  },
  Phone: {
    type: 'object',
    properties: {
      manufacturer: {
        type: 'string'
      },
      numberOfSIMCards: {
        type: 'number'
      },
      kind: 'string'
    }
  },
  Notebook: {
    type: 'object',
    properties: {
      manufacturer: {
        type: 'string'
      },
      numberOfUSBPorts: {
        type: 'number'
      },
      kind: 'string'
    }
  },
  Device: {
    type: 'Phone | Notebook'
  },
  Deprecation: {
    type: 'nil | string'
  },
  ObjectInTypeArray: {
    type: ['object']
  },
  ArrayInTypeArray: {
    type: ['array']
  },
  UnionInTypeArray: {
    type: ['number | string']
  },
  SimpleUnion: {
    properties: {
      a: 'string',
      b: 'number | string'
    }
  },
  WithInheritance: {
    type: 'Device',
    properties: {
      phone: 'Phone',
      device: 'Device'
    },
    example: '{\n  "manufacturer": "John",\n  "numberOfSIMCards": 1234,\n  "kind": "Stamp Collecting",\n  "phone": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  },\n  "device": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  }\n}\n'
  },
  InlinedDeclaration: {
    type: {
      type: 'object',
      properties: {
        stringProperty: {
          type: 'string'
        },
        numberProperty: {
          type: 'number'
        }
      }
    }
  },
  ValidConstraintsInheritance: {
    minProperties: 2,
    maxProperties: 9,
    properties: {
      name: {
        type: 'string',
        required: true,
        minLength: 4,
        maxLength: 9,
        enum: [
          'Jane',
          'John'
        ]
      },
      age: {
        type: 'integer',
        minimum: 19,
        maximum: 98
      },
      cats: {
        type: 'array',
        items: 'string',
        minItems: 2,
        maxItems: 4
      },
      bio: {
        type: 'object',
        minProperties: 2,
        maxProperties: 9
      }
    },
    type: {
      type: 'object',
      discriminator: 'name',
      discriminatorValue: 'John',
      additionalProperties: false,
      minProperties: 1,
      maxProperties: 10,
      properties: {
        name: {
          type: 'string',
          required: false,
          minLength: 3,
          maxLength: 10,
          pattern: 'foobar',
          enum: [
            'Jane',
            'John',
            'Markus'
          ]
        },
        age: {
          type: 'integer',
          minimum: 18,
          maximum: 99
        },
        dob: {
          type: 'datetime',
          format: 'rfc2616'
        },
        cats: {
          type: 'array',
          items: 'string',
          uniqueItems: true,
          minItems: 1,
          maxItems: 5
        },
        bio: {
          type: 'object',
          minProperties: 1,
          maxProperties: 10
        }
      }
    }
  },
  DataEntry: {
    description: 'A single data entry(row) with any number of field-name, field-value pairs',
    type: 'object',
    properties: {
      '//': {
        type: 'Integer | Float | Location | Timestamp | String'
      }
    },
    example: '{\n "temp": 20.5,\n "time": 12565\n}\n'
  },
  Integer: {
    description: '8-byte signed integer',
    type: 'integer',
    format: 'int64'
  },
  Float: {
    description: '8-byte double precision floating-point',
    type: 'number',
    format: 'double'
  },
  Location: {
    description: 'Signed degrees format Signed degrees format (DDD.dddd)\nA latitude or longitude with 8 decimal places pinpoints a location to within 1 millimeter,( 1/16 inch).\nPrecede South latitudes and West longitudes with a minus sign. Latitudes range from -90 to 90. Longitudes range from -180 to 180.\n41.25,-120.9762 -31.96,115.84 90,0 (North Pole)',
    type: 'string',
    pattern: '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$'
  },
  Timestamp: {
    description: 'UNIX timestamp in milliseconds since 1970. (8 bytes)',
    type: 'integer',
    format: 'int64'
  },
  String: {
    description: 'At least one and up to 160 characters',
    type: 'string',
    minLength: 1,
    maxLength: 160
  },
  Pet: {
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        required: false
      },
      name: {
        type: 'string',
        example: 'doggie'
      },
      photoUrls: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      tags: {
        type: 'array',
        items: {
          type: 'Tag'
        },
        required: false
      },
      status: {
        type: 'string',
        description: 'pet status in the store',
        required: false
      }
    }
  },
  Tag: {
    properties: {
      id: {
        type: 'integer',
        format: 'int64',
        required: false
      },
      name: {
        type: 'string',
        required: false
      }
    }
  },
  Org: {
    type: 'object',
    properties: {
      name: 'string',
      'address?': 'string',
      'value?': 'string'
    }
  },
  'Songs.Song': {
    properties: {
      title: 'string',
      length: 'number'
    }
  },
  'Songs.Album': {
    properties: {
      title: 'string',
      songs: 'Songs.Song[]'
    }
  },
  'Songs.LP': {
    type: 'Songs.Song',
    properties: { duration: 'string' }
  },
  'Songs.Publication': {
    type: ['Songs.Album', 'Songs.LP', 'Songs.C'],
    properties: { date: 'string' }
  },
  'Songs.Musician': {
    properties: {
      name: 'string',
      discography: '(Songs.Song | Songs.Album)[]'
    }
  },
  'Songs.C': { type: 'object', properties: { other: 'integer' } },
  'Songs.Constrained': { type: 'array', items: 'string', minItems: 10 },
  'Songs.ExemplarSong': {
    properties: {
      title: {
        type: 'string',
        example: 'Great'
      },
      length: 'string'
    }
  },
  'Songs.ExemplarAlbum': {
    properties: {
      title: 'string',
      songs: 'Songs.ExemplarSong[]'
    },
    examples: {
      Album1: {
        title: 'Test 1',
        songs: [
          {
            title: 'Great',
            length: '2'
          }
        ]
      }
    }
  },
  'Songs.Cell': { properties: { car: 'any', cdr: 'Songs.List | nil' } },
  'Songs.List': { properties: { cell: 'Songs.Cell' } },
  missingFacets: {
    type: 'object',
    properties: {
      name: {
        description: 'Cat name',
        displayName: 'name',
        type: 'string',
        facets: { amazing: 'boolean' },
        amazing: true
      }
    }
  },
  defaultPropertyType: {
    properties: {
      city: null
    }
  },
  atomic: {
    type: 'string'
  },
  constraints: {
    type: {
      type: 'array',
      items: 'string',
      minItems: 10
    },
    minItems: 15,
    maxItems: 20
  },
  Cat: {
    type: 'AnimalWithAddress',
    properties: {
      age: {
        type: 'integer | number'
      }
    }
  },
  AnimalWithAddress: {
    properties: {
      address: 'string'
    }
  },
  Entry: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        artist: { type: 'string' }
      }
    }
  },
  AnotherEntry: {
    type: 'Entry',
    description: 'This is just another entry to simulate that you can add facets also on JSON schema defined types. Although you can only add documentation-based facets.'
  },
  Optional: 'string?',
  MinTypeTest: {
    type: {
      type: 'object',
      minProperties: 1,
      maxProperties: 4,
      minLength: 1,
      maxLength: 4,
      minItems: 1,
      maxItems: 4,
      properties: {
        a: {
          type: 'string',
          pattern: '^test1*$',
          enumValues: ['test', 'test1']
        },
        f: {
          type: 'number',
          minimum: 1,
          maximum: 4,
          format: 'int64'
        },
        k: {
          type: 'array',
          items: 'number',
          uniqueItems: true
        }
      }
    },
    properties: {
      a: {
        type: 'string',
        pattern: '^test1*$',
        enumValues: ['test1']
      },
      f: {
        type: 'integer',
        minimum: 2,
        maximum: 3,
        format: 'int64'
      },
      k: {
        type: 'array',
        items: 'number',
        uniqueItems: true
      }
    },
    minProperties: 2,
    maxProperties: 3,
    minLength: 2,
    maxLength: 3,
    minItems: 2,
    maxItems: 3
  },
  Named: {
    properties: {
      name: 'string'
    }
  },
  InheritNamedWithNameAttribute: {
    name: 'InheritNamedWithNameAttribute',
    type: 'Named',
    properties: {
      other: 'string'
    }
  },
  ExtraPropAttrsWithTypeArray: {
    properties: {
      name: {
        type: ['string'],
        displayName: 'name'
      }
    }
  },
  ExtraPropAttrsInTypeArray: {
    properties: {
      name: {
        type: [{
          type: 'string',
          displayName: 'name'
        }]
      }
    }
  },
  ExtraPropAttrsAnyOther: {
    properties: {
      prop: {
        type: [{
          type: 'any',
          extra1: 'a',
          common: 'c'
        }, {
          type: 'number',
          extra2: 'b',
          common: 'd'
        }]
      }
    }
  },
  ExtraPropAttrsNumberInteger: {
    properties: {
      prop: {
        type: [{
          type: 'integer',
          extra1: 'a',
          common: 'c'
        }, {
          type: 'number',
          extra2: 'b',
          common: 'd'
        }]
      }
    }
  },
  ExtraPropAttrsArrays: {
    properties: {
      prop: {
        type: [{
          type: 'array',
          extra1: 'a',
          common: 'c'
        }, {
          type: 'array',
          extra2: 'b',
          common: 'd'
        }]
      }
    }
  },
  ExtraPropAttrsObjects: {
    properties: {
      prop: {
        type: [{
          type: 'object',
          extra1: 'a',
          common: 'c'
        }, {
          type: 'object',
          extra2: 'b',
          common: 'd'
        }]
      }
    }
  },
  ExtraPropAttrsUnions: {
    properties: {
      prop: {
        type: [{
          type: 'any | integer',
          extra1: 'a',
          common: 'c'
        }, {
          type: 'any | number',
          extra2: 'b',
          common: 'd'
        }]
      }
    }
  },
  ExtraPropAttrsSuperUnion: {
    properties: {
      prop: {
        type: [{
          type: 'integer',
          extra1: 'a',
          common: 'c'
        }, {
          type: 'any | number',
          extra2: 'b',
          common: 'd'
        }]
      }
    }
  },
  ParserNested: {
    type: {
      type: ['object'],
      properties: {
        name: {
          type: ['string']
        }
      }
    },
    properties: {
      arr: {
        type: ['array'],
        items: 'string'
      }
    }
  },
  CanonicalItemsTypeArray: {
    type: ['object'],
    properties: {
      prop: {
        items: {
          type: ['string']
        }
      }
    }
  },
  UnionArray: {
    type: 'array',
    items: {
      type: 'union',
      anyOf: ['string', 'number']
    }
  },
  UnionInheritance: {
    type: {
      type: 'object',
      properties: {
        a: {
          type: 'union',
          anyOf: [
            {
              type: 'string',
              minLength: 2
            },
            {
              type: 'string',
              minLength: 3
            }
          ]
        }
      }
    },
    properties: {
      a: {
        type: 'string',
        minLength: 4
      }
    }
  },
  UnionInheritance2: {
    type: {
      type: 'object',
      properties: {
        a: {
          type: 'union',
          anyOf: [
            {
              type: 'string',
              minLength: 2,
              maxLength: 10
            },
            {
              type: 'string',
              minLength: 3
            }
          ]
        }
      }
    },
    properties: {
      a: {
        type: 'union',
        anyOf: [
          {
            type: 'string',
            minLength: 5
          },
          {
            type: 'string',
            minLength: 6
          }
        ]
      }
    }
  },
  Payment: {
    properties: {
      amount: 'number | string'
    }
  },
  Payments: {
    type: 'array',
    items: {
      type: 'Payment'
    }
  },
  PaymentsPage: {
    properties: {
      count: 'integer',
      results: {
        type: 'Payments'
      }
    }
  },
  BigNumber: 'number | string',
  Invoice: {
    properties: {
      subtotal: 'BigNumber',
      tax: 'BigNumber',
      total: 'BigNumber'
    }
  },
  DiscountedInvoice: {
    type: 'Invoice',
    properties: {
      discount: 'BigNumber'
    }
  },
  ComplexTracked: {
    properties: {
      amounts: 'BigNumber | (BigNumber[])'
    }
  },
  T1: {
    displayName: 'T1',
    type: 'object'
  },
  T2: {
    displayName: 'T2',
    type: 'T1'
  },
  T3: {
    displayName: 'T3',
    type: 'union',
    anyOf: ['T2']
  },
  T4: {
    displayName: 'T4',
    type: 'T3',
    anyOf: ['T1']
  },
  T5: {
    displayName: 'T5',
    type: ['T1|T2'],
    properties: {
      kind: 'string'
    }
  },
  HasHomeMI: {
    type: 'object',
    properties: {
      homeAddress: 'string'
    }
  },
  CatMI: {
    type: 'object',
    properties: {
      name: 'string',
      color: 'string'
    }
  },
  DogMI: {
    type: 'object',
    properties: {
      name: 'string',
      fangs: 'string'
    }
  },
  HomeAnimalMI: ['HasHomeMI', 'DogMI | CatMI']
}
