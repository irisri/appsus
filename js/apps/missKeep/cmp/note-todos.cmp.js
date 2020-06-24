export default {
  template: `
          <section class="note">
              <pre>{{info}}</pre>
              <!-- <label>
                  {{info.label}}
                  <select v-model="val" @change="reportVal">  
                      <option v-for="opt in info.opts">{{opt}}</option>
                  </select>
              </label>   -->
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
