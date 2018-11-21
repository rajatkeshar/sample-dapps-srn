'use strict';

var constants = require('../utils/constants.js');

module.exports = {
  getBalance: {
    type: 'object',
    properties: {
      dappId: {
        type: "string",
        format: "publicKey"
      },
      address: {
        type: 'string',
        minLength: 1
      }
    },
    required: ['dappId', 'address']
  },
  open: {
    type: 'object',
      properties: {
        dappId: {
          type: "string",
          format: "publicKey"
        },
        secret: {
          type: "string",
          minLength: 1,
          maxLength: 100
        }
      },
      required: ['dappId', 'secret']
  }
};
