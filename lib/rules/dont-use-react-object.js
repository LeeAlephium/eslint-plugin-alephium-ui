/**
 * @fileoverview Don't allow usage of React object to access methods or components
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
      description: "Don't allow usage of React object to access methods or components",
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

    const error = (node) => {
      context.report({
        node,
        message: "Don't use React object or type directly, instead import what's needed from the react package."
      });
    };

    const reportIfReactObjectfound = (node) => {
      if (
         node?.object?.name !== 'React'
      && node?.local?.name  !== 'React'
      && node?.left?.name   !== 'React'
      ) return;
      error(node);
    }

    return {
      JSXMemberExpression: reportIfReactObjectfound,
      ImportDefaultSpecifier: reportIfReactObjectfound,
      MemberExpression: reportIfReactObjectfound,
      TSQualifiedName: reportIfReactObjectfound
    };
  },
}
