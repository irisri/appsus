import todoCheckbox from "./todo-checkbox.cmp.js";

export default {
  props: ["info"],
  template: `
    <section class="note">
      <h4>{{info.label}}</h4>
      <todo-checkbox v-for="todo in info.todos" :todo="todo" :key="todo.id"/>
    </section>
          `,
  data() {
    return {
      todos: this.info.todos
    }
  },
  components: {
    todoCheckbox,
  }
  
};
