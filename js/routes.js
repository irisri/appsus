import homePage from "./home-page.cmp.js";
import bookApp from "./apps/missBook/pages/book-app.cmp.js";
import bookDetails from "./apps/missBook/pages/book-details.cmp.js";
import bookFind from "./apps/missBook/pages/find-book.cmp.js";
import emailApp from './apps/misterEmail/pages/email-app.cmp.js';

const myRoutes = [
  {
    path: "/",
    component: homePage,
  },
  // {
  //   path: "/keep/",
  //   component: homePage,
  // },
  {
    path: "/book/",
    component: bookApp,
    children: [
      {
        path: "find",
        component: bookFind,
      },
      {
        path: ":bookId",
        component: bookDetails,
      },
    ],
  },
  {
    path: '/email/',
    component: emailApp,
  }
  
];

export const myRouter = new VueRouter({ routes: myRoutes });
