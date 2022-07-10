/**
 * @fileoverview Make sure styled components come after export default
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
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Make sure styled components come after export default",
      category: "style",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const extendedStyled = [];

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ExportDefaultDeclaration(node) {
        if (extendedStyled.length === 0) return;

        context.report({
          node,
          message: 'Extended styled component found before export default'
        });
      },
      VariableDeclaration(node) {
        const _node = node
          .declarations
          .find(n => n.type === 'VariableDeclarator')
          .init;

        if (_node?.tag?.type !== 'CallExpression') return;
        if (_node.tag.callee.name !== 'styled') return;
        extendedStyled.push(_node);
      }
    };
  },
};
