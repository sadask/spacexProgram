

## Run on your local

### `git clone https://github.com/sadask/spacexProgram.git`

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Code Description in Brief

1. Created app using 'Create React App package"
2. Created all the components required from this app and placed on src/components dir.
3. Used ReactDOM’s hydrate method instead of render method to indicate to the DOM renderer that we’re rehydrating the app after a server-side render.
4. Created an Express Server and Rendering the App Component.
5. Written server code under server/index.js
6. In server/index.js, tell Express to serve contents from the build directory as static files.
7. Used a method from ReactDOMServer, renderToString, to render our app to a static HTML string.
8. Read the static index.html file from the build folder, inject our app’s static content in the <div> with an id of "root", and send that as the response to the request.
9. Our server code to work, will need to bundle and transpile it, using webpack and Babel (webpack.server.js,.babelrc.json)
10. Addded dev:build-server, dev:start, and dev scripts to the package.json file to build and serve our SSR application easily.
11.  Used nodemon to restart the server when we make changes to it. 
12. used npm-run-all to run multiple commands in parallel.
