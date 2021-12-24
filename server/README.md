# Server

This node project is a webserver for the KnownShysters front-end Angular application. It is written in Typescript and uses express as its middleware.

## Installation

Use the Node Package Manager to install the necessary dependencies.

```bash
npm i
```

## Development Usage

During development you may need to use the local exectubles (stored in node_modules). The convienant way to do this is using [npx](https://www.npmjs.com/package/npx) which is installed with Node.
```
// Running the server in development
npx ts-node server.ts
// Running the server, with live-reload
npx ts-node-dev server.ts
```

## Deployment

Transpile the code to javascript.
```
npx tsc
```
This should output a 'server.js' file which can then be ran with node.
```
node server.js
```
**TODO:** If we wish to publish this to npm or generally make it easier to deploy on a different environment we could setup `npm pack` to do so. Then anyone with Node could download the package and run `npm i --production`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

NO TESTS. *Simply don't add bugs.*

## License
[MIT](https://choosealicense.com/licenses/mit/)