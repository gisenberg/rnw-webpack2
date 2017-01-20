react-native-web + webpack@2.2.0
====
This repository exists to demonstrate a difference in module resolution behavior between `webpack@1.x.x` and `webpack@2.x.x`. The current guidance from react-native-web] is [this](https://github.com/necolas/react-native-web/blob/master/docs/guides/react-native.md):

> More substantial Web-specific implementation code should be written in files with the extension .web.js, which webpack will automatically resolve.

It looks like this behavior has changed in `webpack@2.x.x`. The intent here is to understand whether or not this is now a documentation bug in `react-native-web` or if this is a regression in `webpack`.

To reproduce, follow these steps:
1. git clone https://github.com/gisenberg/rnw-webpack2.git
2. cd rnw-webpack2, `yarn` or `npm install`
3. `yarn start` or `npm start`
4. Navigate to http://localhost:8080/

The code for the page imports `./dependency`, which resolves to `dependency.web.js` in `webpack@1` but `dependency.js` in `webpack@2`. In webpack 2, the page emits 'Hello from dependency.js' but should be emitting 'Hello from dependency.web.js' instead.
