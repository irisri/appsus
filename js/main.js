import { myRouter } from "./routes.js";

new Vue({
  el: "#App",
  router: myRouter,
  template: `
    <div class="text-center">
    <h1>Apsus</h1>
       <nav>
           <router-link to="/">Home</router-link>
           <router-link to="/book">Miss book</router-link>
           <router-link to="/email">Miss email</router-link>
           <router-link to="/keep">Miss keep</router-link>
       </nav>
        <main>
            <router-view />
        </main>

        <footer>
                coffeerights 2020
        </footer>
    </div>
    `,
});
