/**
 * @fileoverview Use non-curly arrow function instead of a return
 * @author LeeAlephium
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Use non-curly arrow function instead of a return",
      category: "style",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      FunctionDeclaration(node) {
        const functionBlockBody = node.body.body;
        if (functionBlockBody[0].type === "ReturnStatement") {
          context.report({
            node,
            message:
              "Use () => <value> instead of a top-level return in a function.",
          });
        }
      },
    };
  },
};
