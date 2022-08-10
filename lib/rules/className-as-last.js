/**
 * @fileoverview If className is present in an interface be sure it's in the last position
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
      description:
        "If className is present in a component interface be sure it's in the last position",
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
      TSInterfaceDeclaration(node) {
        if (node.id.name.indexOf("Props") < 0) return;
        node.body.body.forEach((p, index) => {
          if (p.key.name !== "className") return;
          if (index === node.body.body.length - 1) return;

          context.report({
            node,
            message:
              "className must be the last property of a component interface.",
          });
        });
      },
    };
  },
};
