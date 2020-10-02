# Sarang N

[srng.dev](https://srng.dev)

[![Netlify Status](https://api.netlify.com/api/v1/badges/767c7439-4293-4cc6-9da2-efca1be8fb64/deploy-status)](https://app.netlify.com/sites/sarangnx/deploys)

This is my personal portfolio made with [vue.js](https://vuejs.org/).  
It is hosted in netlify instead of github pages, since github pages does not support Single Page Applications.

That's because vue.js [history mode](https://router.vuejs.org/guide/essentials/history-mode.html) requires all urls to redirect to `index.html`. This redirection is not configurable in github pages.  
But there is a workaround explained [here](https://github.com/rafgraph/spa-github-pages), which uses a custom `404.html` that does all the redirections.

Instead [Netlify](https://www.netlify.com/) requires just a file `_redirects` with a single line:

```
/*    /index.html   200
```

## Project setup

```bash
#install dependencies
yarn install

# Compiles and hot-reloads for development
yarn serve

# Compiles and minifies for production
yarn build

# Lints and fixes files
yarn lint
```

# Contact Form

A GCP Function is used to submit contact form to
my email through AWS SES.  
Source Code available [here](https://github.com/sarangnx/submitform).

> https://github.com/sarangnx/submitform
