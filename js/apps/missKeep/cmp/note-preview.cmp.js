export default {
  props: ["note"],
  template: `
        <pre>{{note}}</pre>
    `,
  create() {
    console.log("note prev");
  },
};
