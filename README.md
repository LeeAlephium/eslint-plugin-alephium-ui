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

(2 means "error". You can also write `"error"`.)

## Supported Rules

### styles-after-export

Not ok:

```js
  const Component = () => <div>Hi</div>;
  
  const ThingStyled = styled.div`
    color: red;
  `;

  export default Component;
```

Ok:

```js
  const Component = () => <div>Hi</div>;
  
  export default Component;
  
  const ThingStyled = styled.div`
    color: red;
  `;
```

### avoid-dispatch-setstateaction

Not ok:

```ts
interface A {
  callback: Dispatch<SetStateAction<string>>;
}
```

Ok:

```ts
interface A {
  callback: (string) => void;
}
```

Note these are not equivalent. The full type of `Dispatch<SetStateAction<T>>` is:

```ts
(action: T | ((prevState: T) => T)) => void;
```

### no-top-return

Not ok:

```js
function a() { return 3; }
```

Ok:

```js
const a = () => 3;
```

### immediately-export-styled

Not ok:

```js

// (or let A = ... or A = ...)
const A = styled.div`
  color: red;
`;

export default A;
```

Ok:

```js
export default styled.div`
  color: red;
`;
```

### className-as-last

Not ok:

```ts
interface A {
  thing: string;
  className?: string;
  hello: string;
}
```

Ok:

```ts
interface A {
  thing: string;
  hello: string;
  className?: string;
}
```

