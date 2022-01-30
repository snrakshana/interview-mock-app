# interview-mock-app

### Assumptions

<ol type="1">
<li>User will receive a alter when credentials are wrong</li>
 <li>When auth token is expired , it will redirect to login page</li>
<li>dashboard page will load with the 1st staff's log history</li>
<li>All the user's id are same in "api/users" endpoint , so I added unique key value for each object in store </li>
<li>Alert or Notification design will be visible on message button click (Icon for notification is not provided in asset)</li>
<li>Map will expand only if down arrow is clicked and shrink when up arrow is clicked.By default map will be shrinked</li>
<li>I Assumped time is in 24hrs format</li>
<li>I tried to match the font family with the Given Design (font is not provided) </li>
</ol>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

