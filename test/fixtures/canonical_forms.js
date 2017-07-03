'use strict';

/*
  Contains map of type names to their canonical forms. Types taken from
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
  SimpleUnion: {
    additionalProperties: true,
    type: 'union',
    anyOf: [
      {
        properties: {
          a: {
            type: 'string',
            required: true
          },
          b: {
            type: 'number',
            required: true
          }
        },
        additionalProperties: true,
        type: 'object'
      },
      {
        properties: {
          a: {
            type: 'string',
            required: true
          },
          b: {
            type: 'string',
            required: true
          }
        },
        additionalProperties: true,
        type: 'object'
      }
    ]
  },
  WithInheritance: null,
  InlinedDeclaration: {
    additionalProperties: true,
    type: 'object',
    properties: {
      stringProperty: {
        type: 'string',
        required: true
      },
      numberProperty: {
        type: 'number',
        required: true
      }
    }
  },
  ValidConstraintsInheritance: null
}
