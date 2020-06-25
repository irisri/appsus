export default {
  template: `
    <section class="note">
      <video :src="info.url" controls></video>
    </section>
            `,
  props: ["info"],
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
