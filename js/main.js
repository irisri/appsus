import { myRouter } from "./routes.js";

new Vue({
  el: "#App",
  router: myRouter,
  template: `
    <div :class="classObject">
      <div class="toggle-menu-screen" @click="closeMenu" :class="classObject"></div>
      <header class="flex space-between align-center">
        <h1 class="logo">Apsus</h1>
        <div class="main-nav">
          <nav>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/book/">Miss book</router-link>
            <router-link class="nav-link" to="/email/">Mister email</router-link>
            <router-link class="nav-link" to="/keep/">Miss keep</router-link>
          </nav>
          <i class="fas fa-bars btn-menu" @click.stop="toggleMenu()"></i>
        </div>
      </header>
        <main>
            <router-view />
        </main>

        <footer>
                <p>coffeerights 2020</p>
        </footer>
    </div>
    `,
    data:{
    isOpenMenu: false,
      
    },
     methods: {
      toggleMenu() {
        this.isOpenMenu = !this.isOpenMenu;
      },
      closeMenu() {
        this.isOpenMenu = false;
      }
     },

     computed: {
      classObject() {
        return {
          'menu-open': this.isOpenMenu
        }
      }
     }

});
