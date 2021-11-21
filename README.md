# happyhour-test

Simple test React app

## Focus points

To deliver this small app, I focused on performacnes and code quality, over appearance.
It means, you might not see fancy stylesheets, logos, animations and so on, but enough structural points to evaluate my skills.

Follows a list of biggest challenges I faced:

### No Create React App

Even if I'm a fan of CRA and CRAco, I decided to show you how I'd setup a project from scratch, using Webpack + Typescript + React + Redux/Saga.

### Redux Saga

I know, API involved are not many but I always like to provide a good separation of concerns in my projects. I think a state manager like Redux is a good way to achieve this result. In particular, I preferred Sagas over Thunk due to the compact and readable code, easier to test and, actually, I love that project and I follow their GitHub Repo from the beginning.

### Typescript

Here also, I'm totally ok working with ES, but Typescript gives us a huge help at compile time and sometimes it might be considered a good way to reduce the amount of unit tests to write, since many of them might be related to type checking.

### SCSS

I wish I had more time to structure styles better, using mixings and better responsive logic.
About CSS, I just made it work and provide a very very basic responsive layout, based on just 3 breakpoints. My intention was just to show you that I'm aware of them.

### Performances

Since we have many slides to render, I used Swiper library and set the Virtual mode to "on".
It assures that only a limited number of slides are actually rendered in the DOM.
If I had time to take care of images, I'd also manage lazy loading of them.
To force re-render of the slideshow according to the window size, I created a React Hook whose logic is based on Javascript media queries. For performance reasons, I wrapped the event listenr in a debounce and tried to limit re-rendering as more I could and quicker as possible.

# How to build and run

```
git clone https://github.com/mean2me/happyhour-test.git

cd happyhour-test

npm i

mkdir env

touch env/.env

# edit .env file as follows:
ENDPOINT_URL=https://service.casinofriday.com
LANG=en

npm run build

npx serve dist
```
