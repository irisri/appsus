export default {
  props: ["info"],
  template: `
    <section class="note">
      <img :src="info.url" :alt="info.title"/>
      <i class="fas fa-image"></i>
    </section>
        `,
};
