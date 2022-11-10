# Bookshop React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

:coffee: NPMJS <kbd>URL:</kbd>  <a href="https://www.npmjs.
com/package/eslint-config-slco" title="ESLint-config-slco" 
target="_blank">ESLint-config-slco</a>

<br />

## Feature 1 - Booklist

```
 As a user I want to see a list of of books 
 so that I can learn something new
```

Acceptance criteria:

```
 Given there are 10 books in the library
 When a user visits the homepage
 Then he/she would see 10 books on the page
 And each book should contain at least book 'name','author','price' and 'rating'
```

## Feature 2 - Book details

```
 As a user, I want to see the details of a book 
 so that I can  decide whether to read it or not
```

Acceptance criteria:

```
 User clicks an item in the booklist and is redirected to the details page
 The details page display the book name, author, price, description and any reviews
```

## Feature 3 - Searching

```
 As a user, I want to search for a book by its name 
 so that I can find quickly what I like
```

Acceptance criteria:

```
 The user types 'homer' as a search word
 Only books with 'homer' in their name are displayed in the book list
```

## Feature 4 - Reviews

```
 As a user, I want to be able to add a review to a book I have read previously
 so that people who have the same interests could decide whether to read the book or not
```

Acceptance criteria:

```
 A user can read reviews on the detail page
 A user can post a review to a particular book
 A user can edit the review he/she has posted
```

<br />

<hr />

<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

```
 npm start // react
 npm run stubServer // json-server
 npm test // jest
 npm run cypress:open  // cypress
 npm run cypress:run // cypress headless
 npm run lint // eslint-prettier
 npm run lint:fix //eslint-prettier (with eslint-config-slco)
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
