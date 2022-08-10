/**
 * @fileoverview Immediately export styled-component components
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
      description: "Immediately export styled-component components",
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
    //

    let identifierName = undefined;

    return {
      VariableDeclaration(node) {
        if (!identifierName) return;
        node.declarations.forEach((d) => {
          if (d.type !== "VariableDeclarator") return;
          if (d.id.name !== identifierName) return;
          if (d.init.type !== "TaggedTemplateExpression") return;
          if (d.init.tag.type === "CallExpression") {
            if (d.init.tag.callee.name !== "styled") return;
          } else if (d.init.tag.type === "MemberExpression") {
            if (d.init.tag.object.name !== "styled") return;
          }

          context.report({
            node,
            message:
              "Remove const/let/assignment and use export default instead.",
          });
        });
      },
      AssignmentExpression(node) {
        if (!identifierName) return;
        if (node.left.name !== identifierName) return;
        if (node.right.type !== "TaggedTemplateExpression") return;
        if (node.right.tag.type !== "CallExpression") return;
        if (node.right.tag.callee.name !== "styled") return;

        context.report({
          node,
          message:
            "Remove const/let/assignment and use export default instead.",
        });
      },
      Program(node) {
        const exportDefaultDecl = node.body.find(
          (n) => n.type === "ExportDefaultDeclaration"
        );
        identifierName = exportDefaultDecl?.declaration.name;
      },
    };
  },
};
