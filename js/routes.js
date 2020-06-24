import homePage from "./home-page.cmp.js";
import bookApp from "./apps/missBook/pages/book-app.cmp.js";
import bookDetails from "./apps/missBook/pages/book-details.cmp.js";
import bookFind from "./apps/missBook/pages/find-book.cmp.js";
import emailApp from './apps/misterEmail/pages/email-app.cmp.js';
import keepApp from "./apps/missKeep/pagese/keep-app.cmp.js";

const myRoutes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/keep/",
    component: keepApp,
  },
  {
    path: "/book/",
    component: bookApp,
  },
  {
    path: "/book/:bookId",
    component: bookDetails,
  },
  {
    path: "/findBook/",
    component: bookFind,
  },
  {
    path: '/email/',
    component: emailApp,
  }
  
];

export const myRouter = new VueRouter({ routes: myRoutes });
