## An example of how to use eva icons in React.js is given
[Eva Icons](https://github.com/akveo/eva-icons) is a pack of more than 480 beautifully crafted Open Source icons for common actions and items.
Download our set on the desktop to use them in your digital products for Web, iOS and Android.
Compatible with Eva Design System.

### NPM

- Install the package:
```
npm i eva-icons
``` 

- Include it to your page:
```js
import * as eva from 'eva-icons';
```

## How to use

### React.js

- Add the `data-eva` attribute with the icon name to an element:

```js
import React, { useEffect } from "react";
import "./App.css";

import * as eva from "eva-icons";

function App() {
  useEffect(() => {
    // add this line
    eva.replace();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
       // add your icon
        <i
          data-eva="search"
          data-eva-animation="pulse"
          data-eva-hover="false"
          data-eva-infinite="true"
        />
      </header>
    </div>
  );
}

export default App;
```
- Call ```eva.replace();``` to replace all elements with the data-eva data attribute with SVG elements. You can also pass some additional parameters to the replace method to modify the replace function behavior.




## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# react-with-eva-icons
An example of how to use eva icons in React.js is given
>>>>>>> d5e10d11bd026028c3c08cad8d4377f82dd92a65
