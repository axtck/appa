# Korra

***The revolution of avatars***

___

## Installation

Check the [registry](https://www.npmjs.com/package/korra)

```bash
npm install korra # using npm
# or
yarn add korra # using yarn
```

___

## Idea

A package that generates a unique avatar image based on parameters extracted from a users username.

### Parameters

Example parameters:
* length
* letters
* numbers
* other characters
* uppercase letters
* lowercase letters
* vowels
* consonants
* first character

These will be used to calculate a visual representation.

### Visual representation

Ideas
* SVG

### SVG

***Scalable Vector Graphics***

From [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG)

Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics.

As such, it's a text-based, open Web standard for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards.

SVG drawings and images are created using a wide array of elements which are dedicated to the construction, drawing, and layout of vector images and diagrams (see [element reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)).

Good reads about SVG
* [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG)
* [SVG meta (Medium)](https://medium.com/@peternowell/stuff-at-the-top-of-an-svg-f3ad198eb54e)

___

## Development

Patch a new version

```
npm version patch
```

Publish new version

```
npm publish
```

## Important setup details 

### tsconfig.json
* Add `"declaration": true` (tsc will export type definitions)

### package.json
* Add `"files": ["dist/**/*"]` (or wherever your compiled code is) to include files for package
* Add **prepare**, **prepublishOnly**, **preversion**, **version** and **postversion** scripts for automated versioning
* Add personal info
