export default {
  props: ["note"],
  template: `
    <section class="note">
      <img :src="note.info.url" :alt="note.info.title"/>
      <i class="fas fa-image"></i>
    </section>
        `,
};
