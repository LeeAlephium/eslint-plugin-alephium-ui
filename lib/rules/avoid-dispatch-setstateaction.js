/**
 * @fileoverview Use a function type signature instead of Dispatch<SetState<T>>
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
      description: "Use a function type signature instead of Dispatch<SetState<T>>",
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
        message: "Use `(a: T) => void` instead of `Dispatch<SetStateAction<T>>`"
      });
    };

    const handleNode = (node) => {
      if (node?.typeName?.name !== 'Dispatch') return;
      const setStateActionNode = node?.typeParameters?.params
        .find(p => p.typeName?.name === 'SetStateAction');
      if (setStateActionNode === undefined) return;
      error(node);
    }

    return {
      TSTypeReference: handleNode
    };
  },
}
