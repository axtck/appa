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
* svg
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
