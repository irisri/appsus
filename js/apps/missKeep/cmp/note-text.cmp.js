export default {
  props: ["info"],
  template: `
    <section class="note">
      <p>{{info.txt}}</p>
                <!-- <label>
                    {{info.label}}
                    <select v-model="val" @change="reportVal">  
                        <option v-for="opt in info.opts">{{opt}}</option>
                    </select>
                </label>   -->
      <i class="fas fa-font"></i>
    </section>
            `,
  data() {
    return {};
  },
  methods: {
    // reportVal() {
    //     this.$emit('setVal', this.val)
    // }
  },
  created() {
    console.log('h', this.info);
    
  }
};
