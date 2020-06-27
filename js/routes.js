import homePage from "./apps/cmp/home-page.cmp.js";
import bookApp from "./apps/missBook/pages/book-app.cmp.js";
import bookDetails from "./apps/missBook/pages/book-details.cmp.js";
import bookFind from "./apps/missBook/pages/find-book.cmp.js";
import emailDetails from './apps/misterEmail/pages/email-details.cmp.js';
import keepApp from "./apps/missKeep/pagese/keep-app.cmp.js";
import eamilApp from "./apps/misterEmail/pages/email-app.cmp.js";

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
    path: "/email/",
    component: eamilApp,
  },
  {
    path: "/email/:emailId",
    component: emailDetails,
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
  
];

export const myRouter = new VueRouter({ routes: myRoutes });
