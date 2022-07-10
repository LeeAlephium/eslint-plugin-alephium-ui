/**
 * @fileoverview asotuouh
 * @author LeeAlephium
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/alephium-ui"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("alephium-ui", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "saotenhusoatehu",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
