# Korra

***The revolution of avatars***

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
