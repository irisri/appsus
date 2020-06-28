// import {eventBus} from '../services/event-bus.service.js'

export default {
  template: `
<section class="home-page">
<div class="about-section">

  <h2 style="text-align:center">Our Apps</h2>
  <div class="row">

    <router-link to="/book/">
      <div class="column">
        <div class="card">
          <img src="/appsus/img/pexels-photo-3747505.jpeg" alt="Jane" style="width:37%">
          <div class="container">
            <h2>MISS BOOK</h2>
            <p class="title">Books Onlain</p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/email/">
      <div class="column">
        <div class="card">
          <img src="/appsus/img/pexels-photo-2764666.jpeg" alt="Mike" style="width:37%">
          <div class="container">
            <h2>MISTER EMAIL</h2>
            <p class="title">Creat Your Email Acount</p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/keep/">
      <div class="column">
        <div class="card">
          <img src="/appsus/img/pexels-photo-1629212.jpeg" alt="John" style="width:100%">
          <div class="container">
            <h2>MISS KEEP</h2>
            <p class="title">Make Some Notes</p>
          </div>
        </div>
      </div>
    </router-link>

  </div>
</div>
</section>    
    
    `,
};
