'use strict'

/*
  Contains map of type names to their expanded forms. Types taken from
  "./types.js"

  Forms were produced by the original Clojure lib (raml-parser-toolbelt)
  node example as of commit eaf25cccd7991fe8d6f700aa615bdfbe91a6ced2
*/

module.exports = {
  Song: {
    properties: {
      title: {
        type: 'string',
        example: 'Great',
        required: true
      },
      length: {
        type: 'string',
        required: true
      }
    },
    additionalProperties: true,
    type: 'object'
  },
  Album: {
    properties: {
      title: {
        type: 'string',
        required: true
      },
      songs: {
        description: 'A list of songs inside an album.',
        type: 'array',
        items: {
          properties: {
            title: {
              type: 'string',
              example: 'Great',
              required: true
            },
            length: {
              type: 'string',
              required: true
            }
          },
          additionalProperties: true,
          type: 'object'
        },
        required: true
      }
    },
    additionalProperties: true,
    type: 'object',
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
    properties: {
      manufacturer: {
        type: 'string',
        required: true
      },
      numberOfSIMCards: {
        type: 'number',
        required: true
      },
      kind: {
        type: 'string',
        required: true
      }
    },
    additionalProperties: true,
    type: 'object'
  },
  Notebook: {
    properties: {
      manufacturer: {
        type: 'string',
        required: true
      },
      numberOfUSBPorts: {
        type: 'number',
        required: true
      },
      kind: {
        type: 'string',
        required: true
      }
    },
    additionalProperties: true,
    type: 'object'
  },
  Device: {
    anyOf: [
      {
        properties: {
          manufacturer: {
            type: 'string',
            required: true
          },
          numberOfSIMCards: {
            type: 'number',
            required: true
          },
          kind: {
            type: 'string',
            required: true
          }
        },
        additionalProperties: true,
        type: 'object'
      },
      {
        properties: {
          manufacturer: {
            type: 'string',
            required: true
          },
          numberOfUSBPorts: {
            type: 'number',
            required: true
          },
          kind: {
            type: 'string',
            required: true
          }
        },
        additionalProperties: true,
        type: 'object'
      }
    ],
    type: 'union'
  },
  Deprecation: {
    anyOf: [
      {
        type: 'nil'
      },
      {
        type: 'string'
      }
    ],
    type: 'union'
  },
  ObjectInTypeArray: {
    type: [{ type: 'object' }]
  },
  ArrayInTypeArray: {
    type: [{ type: 'array' }]
  },
  UnionInTypeArray: {
    type: [{
      anyOf: [
        {
          type: 'number'
        },
        {
          type: 'string'
        }
      ],
      type: 'union'
    }]
  },
  SimpleUnion: {
    properties: {
      a: {
        type: 'string',
        required: true
      },
      b: {
        anyOf: [
          {
            type: 'number'
          },
          {
            type: 'string'
          }
        ],
        type: 'union',
        required: true
      }
    },
    additionalProperties: true,
    type: 'object'
  },
  WithInheritance: {
    properties: {
      phone: {
        properties: {
          manufacturer: {
            type: 'string',
            required: true
          },
          numberOfSIMCards: {
            type: 'number',
            required: true
          },
          kind: {
            type: 'string',
            required: true
          }
        },
        additionalProperties: true,
        type: 'object',
        required: true
      },
      device: {
        anyOf: [
          {
            properties: {
              manufacturer: {
                type: 'string',
                required: true
              },
              numberOfSIMCards: {
                type: 'number',
                required: true
              },
              kind: {
                type: 'string',
                required: true
              }
            },
            additionalProperties: true,
            type: 'object'
          },
          {
            properties: {
              manufacturer: {
                type: 'string',
                required: true
              },
              numberOfUSBPorts: {
                type: 'number',
                required: true
              },
              kind: {
                type: 'string',
                required: true
              }
            },
            additionalProperties: true,
            type: 'object'
          }
        ],
        type: 'union',
        required: true
      }
    },
    additionalProperties: true,
    type: {
      anyOf: [
        {
          properties: {
            manufacturer: {
              type: 'string',
              required: true
            },
            numberOfSIMCards: {
              type: 'number',
              required: true
            },
            kind: {
              type: 'string',
              required: true
            }
          },
          additionalProperties: true,
          type: 'object'
        },
        {
          properties: {
            manufacturer: {
              type: 'string',
              required: true
            },
            numberOfUSBPorts: {
              type: 'number',
              required: true
            },
            kind: {
              type: 'string',
              required: true
            }
          },
          additionalProperties: true,
          type: 'object'
        }
      ],
      type: 'union'
    },
    example: '{\n  "manufacturer": "John",\n  "numberOfSIMCards": 1234,\n  "kind": "Stamp Collecting",\n  "phone": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  },\n  "device": {\n    "manufacturer": "John",\n    "numberOfSIMCards": 1234,\n    "kind": "Stamp Collecting"\n  }\n}\n'
  },
  InlinedDeclaration: {
    type: {
      properties: {
        stringProperty: {
          type: 'string',
          required: true
        },
        numberProperty: {
          type: 'number',
          required: true
        }
      },
      additionalProperties: true,
      type: 'object'
    }
  },
  ValidConstraintsInheritance: {
    properties: {
      name: {
        enum: [
          'Jane',
          'John'
        ],
        type: 'string',
        minLength: 4,
        maxLength: 9,
        required: true
      },
      age: {
        maximum: 98,
        type: 'integer',
        minimum: 19,
        required: true
      },
      cats: {
        type: 'array',
        minItems: 2,
        items: {
          type: 'string'
        },
        required: true,
        maxItems: 4
      },
      bio: {
        additionalProperties: true,
        maxProperties: 9,
        type: 'object',
        minProperties: 2,
        required: true
      }
    },
    additionalProperties: true,
    maxProperties: 9,
    type: {
      discriminatorValue: 'John',
      properties: {
        name: {
          enum: [
            'Jane',
            'John',
            'Markus'
          ],
          type: 'string',
          minLength: 3,
          maxLength: 10,
          required: false,
          pattern: 'foobar'
        },
        age: {
          maximum: 99,
          type: 'integer',
          minimum: 18,
          required: true
        },
        dob: {
          format: 'rfc2616',
          type: 'datetime',
          required: true
        },
        cats: {
          uniqueItems: true,
          type: 'array',
          minItems: 1,
          items: {
            type: 'string'
          },
          maxItems: 5,
          required: true
        },
        bio: {
          additionalProperties: true,
          maxProperties: 10,
          type: 'object',
          minProperties: 1,
          required: true
        }
      },
      additionalProperties: false,
      maxProperties: 10,
      type: 'object',
      minProperties: 1,
      discriminator: 'name'
    },
    minProperties: 2
  },
  DataEntry: {
    description: 'A single data entry(row) with any number of field-name, field-value pairs',
    type: 'object',
    properties: {
      '//': {
        type: 'union',
        anyOf: [
          {
            description: '8-byte signed integer',
            type: 'integer',
            format: 'int64'
          },
          {
            description: '8-byte double precision floating-point',
            type: 'number',
            format: 'double'
          },
          {
            description: 'Signed degrees format Signed degrees format (DDD.dddd)\nA latitude or longitude with 8 decimal places pinpoints a location to within 1 millimeter,( 1/16 inch).\nPrecede South latitudes and West longitudes with a minus sign. Latitudes range from -90 to 90. Longitudes range from -180 to 180.\n41.25,-120.9762 -31.96,115.84 90,0 (North Pole)',
            type: 'string',
            pattern: '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$'
          },
          {
            description: 'UNIX timestamp in milliseconds since 1970. (8 bytes)',
            type: 'integer',
            format: 'int64'
          },
          {
            description: 'At least one and up to 160 characters',
            type: 'string',
            minLength: 1,
            maxLength: 160
          }
        ],
        required: true
      }
    },
    example: '{\n "temp": 20.5,\n "time": 12565\n}\n',
    additionalProperties: true
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
        example: 'doggie',
        required: true
      },
      photoUrls: {
        type: 'array',
        items: {
          type: 'string'
        },
        required: true
      },
      tags: {
        type: 'array',
        items: {
          type: {
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
            },
            type: 'object',
            additionalProperties: true
          }
        },
        required: false
      },
      status: {
        type: 'string',
        description: 'pet status in the store',
        required: false
      }
    },
    type: 'object',
    additionalProperties: true
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
    },
    type: 'object',
    additionalProperties: true
  },
  Org: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        required: true
      },
      address: {
        type: 'string',
        required: false
      },
      value: {
        type: 'string',
        required: false
      }
    },
    additionalProperties: true
  },
  'Songs.Song': {
    properties: {
      title: {
        type: 'string',
        required: true
      },
      length: {
        type: 'number',
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  'Songs.Album': {
    properties: {
      title: {
        type: 'string',
        required: true
      },
      songs: {
        type: 'array',
        items: {
          properties: {
            title: {
              type: 'string',
              required: true
            },
            length: {
              type: 'number',
              required: true
            }
          },
          type: 'object',
          additionalProperties: true
        },
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  'Songs.LP': {
    type: {
      properties: {
        title: {
          type: 'string',
          required: true
        },
        length: {
          type: 'number',
          required: true
        }
      },
      type: 'object',
      additionalProperties: true
    },
    properties: {
      duration: {
        type: 'string',
        required: true
      }
    },
    additionalProperties: true
  },
  'Songs.Publication': {
    type: [
      {
        properties: {
          title: {
            type: 'string',
            required: true
          },
          songs: {
            type: 'array',
            items: {
              properties: {
                title: {
                  type: 'string',
                  required: true
                },
                length: {
                  type: 'number',
                  required: true
                }
              },
              type: 'object',
              additionalProperties: true
            },
            required: true
          }
        },
        type: 'object',
        additionalProperties: true
      },
      {
        type: {
          properties: {
            title: {
              type: 'string',
              required: true
            },
            length: {
              type: 'number',
              required: true
            }
          },
          type: 'object',
          additionalProperties: true
        },
        properties: {
          duration: {
            type: 'string',
            required: true
          }
        },
        additionalProperties: true
      },
      {
        type: 'object',
        properties: {
          other: {
            type: 'integer',
            required: true
          }
        },
        additionalProperties: true
      }
    ],
    properties: {
      date: {
        type: 'string',
        required: true
      }
    },
    additionalProperties: true
  },
  'Songs.Musician': {
    properties: {
      name: {
        type: 'string',
        required: true
      },
      discography: {
        type: 'array',
        items: {
          anyOf: [
            {
              properties: {
                title: {
                  type: 'string',
                  required: true
                },
                length: {
                  type: 'number',
                  required: true
                }
              },
              type: 'object',
              additionalProperties: true
            },
            {
              properties: {
                title: {
                  type: 'string',
                  required: true
                },
                songs: {
                  type: 'array',
                  items: {
                    properties: {
                      title: {
                        type: 'string',
                        required: true
                      },
                      length: {
                        type: 'number',
                        required: true
                      }
                    },
                    type: 'object',
                    additionalProperties: true
                  },
                  required: true
                }
              },
              type: 'object',
              additionalProperties: true
            }
          ],
          type: 'union'
        },
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  'Songs.C': {
    type: 'object',
    properties: {
      other: {
        type: 'integer',
        required: true
      }
    },
    additionalProperties: true
  },
  'Songs.Constrained': {
    type: 'array',
    items: {
      type: 'string'
    },
    minItems: 10
  },
  'Songs.ExemplarSong': {
    properties: {
      title: {
        type: 'string',
        example: 'Great',
        required: true
      },
      length: {
        type: 'string',
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  'Songs.ExemplarAlbum': {
    properties: {
      title: {
        type: 'string',
        required: true
      },
      songs: {
        type: 'array',
        items: {
          properties: {
            title: {
              type: 'string',
              example: 'Great',
              required: true
            },
            length: {
              type: 'string',
              required: true
            }
          },
          type: 'object',
          additionalProperties: true
        },
        required: true
      }
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
    },
    type: 'object',
    additionalProperties: true
  },
  'Songs.Cell': {
    properties: {
      car: {
        type: 'any',
        required: true
      },
      cdr: {
        anyOf: [
          {
            properties: {
              cell: {
                type: '$recur',
                required: true
              }
            },
            type: 'object',
            additionalProperties: true
          },
          {
            type: 'nil'
          }
        ],
        type: 'union',
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  'Songs.List': {
    properties: {
      cell: {
        properties: {
          car: {
            type: 'any',
            required: true
          },
          cdr: {
            anyOf: [
              {
                type: '$recur'
              },
              {
                type: 'nil'
              }
            ],
            type: 'union',
            required: true
          }
        },
        type: 'object',
        additionalProperties: true,
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  missingFacets: {
    type: 'object',
    additionalProperties: true,
    properties: {
      name: {
        description: 'Cat name',
        displayName: 'name',
        type: 'string',
        facets: {
          amazing: {
            type: 'boolean'
          }
        },
        required: true,
        amazing: true
      }
    }
  },
  defaultPropertyType: {
    properties: {
      city: {
        type: 'any',
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  atomic: {
    type: 'string'
  },
  constraints: {
    type: {
      type: 'array',
      minItems: 10,
      items: {
        type: 'string'
      }
    },
    minItems: 15,
    maxItems: 20
  },
  Cat: {
    type: {
      properties: {
        address: {
          type: 'string',
          required: true
        }
      },
      type: 'object',
      additionalProperties: true
    },
    properties: {
      age: {
        type: 'union',
        anyOf: [
          {
            type: 'integer'
          },
          {
            type: 'number'
          }
        ],
        required: true
      }
    },
    additionalProperties: true
  },
  AnimalWithAddress: {
    properties: {
      address: {
        type: 'string',
        required: true
      }
    },
    type: 'object',
    additionalProperties: true
  },
  Entry: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          required: true
        },
        artist: {
          type: 'string',
          required: true
        }
      },
      additionalProperties: true
    }
  },
  AnotherEntry: {
    type: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            required: true
          },
          artist: {
            type: 'string',
            required: true
          }
        },
        additionalProperties: true
      }
    },
    description: 'This is just another entry to simulate that you can add facets also on JSON schema defined types. Although you can only add documentation-based facets.'
  },
  Optional: {
    anyOf: [
            { type: 'string' },
            { type: 'nil' }
    ],
    type: 'union'
  },
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
          enumValues: [
            'test',
            'test1'
          ],
          required: true
        },
        f: {
          type: 'number',
          minimum: 1,
          maximum: 4,
          format: 'int64',
          required: true
        },
        k: {
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'number'
          },
          required: true
        }
      },
      additionalProperties: true
    },
    properties: {
      a: {
        type: 'string',
        pattern: '^test1*$',
        enumValues: [
          'test1'
        ],
        required: true
      },
      f: {
        type: 'integer',
        minimum: 2,
        maximum: 3,
        format: 'int64',
        required: true
      },
      k: {
        type: 'array',
        items: {
          type: 'number'
        },
        required: true,
        uniqueItems: true
      }
    },
    minProperties: 2,
    maxProperties: 3,
    minLength: 2,
    maxLength: 3,
    minItems: 2,
    maxItems: 3,
    additionalProperties: true
  },
  Named: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        required: true
      }
    },
    additionalProperties: true
  },
  InheritNamedWithNameAttribute: {
    name: 'InheritNamedWithNameAttribute',
    type: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          required: true
        }
      },
      additionalProperties: true
    },
    properties: {
      other: {
        type: 'string',
        required: true
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsWithTypeArray: {
    type: 'object',
    properties: {
      name: {
        type: [{
          type: 'string'
        }],
        required: true,
        displayName: 'name'
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsInTypeArray: {
    type: 'object',
    properties: {
      name: {
        type: [{
          type: 'string',
          displayName: 'name'
        }],
        required: true
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsAnyOther: {
    type: 'object',
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
        }],
        required: true
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsNumberInteger: {
    type: 'object',
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
        }],
        required: true
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsArrays: {
    type: 'object',
    properties: {
      prop: {
        type: [{
          type: 'array',
          items: {
            type: 'any'
          },
          extra1: 'a',
          common: 'c'
        }, {
          type: 'array',
          items: {
            type: 'any'
          },
          extra2: 'b',
          common: 'd'
        }],
        required: true
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsObjects: {
    type: 'object',
    properties: {
      prop: {
        type: [{
          type: 'object',
          additionalProperties: true,
          extra1: 'a',
          common: 'c'
        }, {
          type: 'object',
          additionalProperties: true,
          extra2: 'b',
          common: 'd'
        }],
        required: true
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsUnions: {
    type: 'object',
    properties: {
      prop: {
        type: [{
          type: 'union',
          anyOf: [{ type: 'any' }, { type: 'integer' }],
          extra1: 'a',
          common: 'c'
        }, {
          type: 'union',
          anyOf: [{ type: 'any' }, { type: 'number' }],
          extra2: 'b',
          common: 'd'
        }],
        required: true
      }
    },
    additionalProperties: true
  },
  ExtraPropAttrsSuperUnion: {
    type: 'object',
    properties: {
      prop: {
        type: [{
          type: 'integer',
          extra1: 'a',
          common: 'c'
        }, {
          type: 'union',
          anyOf: [{ type: 'any' }, { type: 'number' }],
          extra2: 'b',
          common: 'd'
        }],
        required: true
      }
    },
    additionalProperties: true
  },
  ParserNested: {
    type: {
      type: [
        {
          type: 'object'
        }
      ],
      properties: {
        name: {
          type: [
            {
              type: 'string'
            }
          ],
          required: true
        }
      },
      additionalProperties: true
    },
    properties: {
      arr: {
        type: [
          {
            type: 'array'
          }
        ],
        items: {
          type: 'string'
        },
        required: true
      }
    },
    additionalProperties: true
  },
  CanonicalItemsTypeArray: {
    type: [{
      type: 'object'
    }],
    properties: {
      prop: {
        type: 'array',
        items: {
          type: [{
            type: 'string'
          }]
        },
        required: true
      }
    },
    additionalProperties: true
  },
  UnionArray: {
    type: 'array',
    items: {
      type: 'union',
      anyOf: [{ type: 'string' }, { type: 'number' }]
    }
  },
  UnionInheritance: {
    'type': {
      'type': 'object',
      'properties': {
        'a': {
          'type': 'union',
          'anyOf': [
            {
              'type': 'string',
              'minLength': 2
            },
            {
              'type': 'string',
              'minLength': 3
            }
          ],
          'required': true
        }
      },
      'additionalProperties': true
    },
    'properties': {
      'a': {
        'type': 'string',
        'minLength': 4,
        'required': true
      }
    },
    'additionalProperties': true
  },
  UnionInheritance2: {
    'type': {
      'type': 'object',
      'properties': {
        'a': {
          'type': 'union',
          'anyOf': [
            {
              'type': 'string',
              'minLength': 2,
              'maxLength': 10
            },
            {
              'type': 'string',
              'minLength': 3
            }
          ],
          'required': true
        }
      },
      'additionalProperties': true
    },
    'properties': {
      'a': {
        'type': 'union',
        'anyOf': [
          {
            'type': 'string',
            'minLength': 5
          },
          {
            'type': 'string',
            'minLength': 6
          }
        ],
        'required': true
      }
    },
    'additionalProperties': true
  },
  Payment: {
    type: 'object',
    properties: {
      amount: {
        type: 'union',
        anyOf: [{ type: 'number' }, { type: 'string' }],
        required: true
      }
    },
    additionalProperties: true
  },
  Payments: {
    type: 'array',
    items: {
      type: {
        type: 'object',
        properties: {
          amount: {
            type: 'union',
            anyOf: [{ type: 'number' }, { type: 'string' }],
            required: true
          }
        },
        additionalProperties: true
      }
    }
  },
  PaymentsPage: {
    type: 'object',
    properties: {
      count: {
        type: 'integer',
        required: true
      },
      results: {
        type: {
          type: 'array',
          items: {
            type: {
              type: 'object',
              properties: {
                amount: {
                  type: 'union',
                  anyOf: [{ type: 'number' }, { type: 'string' }],
                  required: true
                }
              },
              additionalProperties: true
            }
          }
        },
        required: true
      }
    },
    additionalProperties: true
  },
  Invoice: {
    type: 'object',
    properties: {
      subtotal: {
        type: 'union',
        anyOf: [{ type: 'number' }, { type: 'string' }],
        required: true
      },
      tax: {
        type: 'union',
        anyOf: [{ type: 'number' }, { type: 'string' }],
        required: true
      },
      total: {
        type: 'union',
        anyOf: [{ type: 'number' }, { type: 'string' }],
        required: true
      }
    },
    additionalProperties: true
  },
  DiscountedInvoice: {
    type: {
      type: 'object',
      properties: {
        subtotal: {
          type: 'union',
          anyOf: [{ type: 'number' }, { type: 'string' }],
          required: true
        },
        tax: {
          type: 'union',
          anyOf: [{ type: 'number' }, { type: 'string' }],
          required: true
        },
        total: {
          type: 'union',
          anyOf: [{ type: 'number' }, { type: 'string' }],
          required: true
        }
      },
      additionalProperties: true
    },
    properties: {
      discount: {
        type: 'union',
        anyOf: [{ type: 'number' }, { type: 'string' }],
        required: true
      }
    },
    additionalProperties: true
  }
}
