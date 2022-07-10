# eslint-plugin-alephium-ui

Adhere code to Alephium UI coding style

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-alephium-ui`:

```sh
npm install eslint-plugin-alephium-ui --save-dev
```

## Usage

Add `alephium-ui` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "alephium-ui"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "alephium-ui/rule-name": 2
    }
}
```

## Supported Rules

* styles-after-export
* dont-use-react-object
* avoid-dispatch-setstateaction


