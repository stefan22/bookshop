## Bookshop _React_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

:coffee: NPMJS <kbd>URL:</kbd>  <a href="https://www.npmjs.
com/package/eslint-config-slco" title="ESLint-config-slco"
target="_blank">ESLint-config-slco</a>

<br />

##### Feature <kbd>1</kbd> - Booklist

```
 As a user I want to see a list of of books 
 so that I can learn something new
```

Acceptance criteria:

```
 Given there are 3 books in the library
 When a user visits the homepage
 Then he/she would see 3 books on the page
 And each book should contain at least book 'name' and 'id'
```

##### Feature <kbd>2</kbd> - Book details

```
 As a user, I want to see the details of a book 
 so that I can  decide whether to read it or not
```

Acceptance criteria:

```
 User clicks an item in the booklist and is redirected to the details page
 The details page display the book name, and id
```

##### Feature <kbd>3</kbd> - Searching

```
 As a user, I want to search for a book by its name 
 so that I can find quickly what I like
```

Acceptance criteria:

```
 The user types 'homer' as a search word
 Only books with 'homer' in their name are displayed in the book list
```

##### Feature <kbd>4</kbd> - Reviews

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


## _About project_

<br />

##### Running _app_

```test
  npm start  //react
 ```


##### Running _json-server_
 
CD to stubServer and type

 ```text
 npm install
 node server.js
```

##### _Jest & Cypress_

```text
 npm test // jest
 npm run cypress:open  //cypress
 npm run cypress:run   //cypress headless
 ```

##### ESlint and _Prettier_

Loads `eslint-config-slco` npm package from registry. See repository link above
for how-to-install.

```text
 npm run lint        //eslint-prettier
 npm run lint:fix    //eslint-prettier (with eslint-config-slco)
```

##### Jest/Cypress config files

Add Cypress/Jest config. 
- Cypress bookshop.spec.cy.js [ok]
- Jest Booklist.test.js [ok]


<br />

<hr />
:100:
