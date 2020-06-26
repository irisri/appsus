export default {
  props: ["note"],
  template: `
    <section class="note">
      <video :src="note.info.url" controls></video>
    </section>
            `,
  data() {
    return {}
    // return {
    //     val: '',
    // }
  },
  methods: {
    // reportVal() {
    //     this.$emit('setVal', this.val)
    // }
  },
};
