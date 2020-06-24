import { myRouter } from "./routes.js";

new Vue({
  el: "#App",
  router: myRouter,
  template: `
    <div class="text-center screen"  @click="closeMenu">
      <div class="main-nav flex space-between align-center" :class="classObject">
        <div class="logo">Apsus</div>
        <button class="btn-menu" @click.stop="toggleMenu()">☰</button>
           <nav>
               <router-link class="nav-link" to="/">Home</router-link>
               <router-link class="nav-link" to="/book/">Miss book</router-link>
               <router-link class="nav-link" to="/email/">Mister email</router-link>
               <router-link class="nav-link" to="/keep/">Miss keep</router-link>
           </nav>
      </div>
        <main>
            <router-view />
        </main>

        <footer>
                coffeerights 2020
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
