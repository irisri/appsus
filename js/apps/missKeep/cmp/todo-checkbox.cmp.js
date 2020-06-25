export default {
    props: ["todo"],
    template: `
        <div>
            <input type="checkbox" :id="todo.id" @click="toggleChecked()" :checked="this.todo.doneAt">
            <label :for="todo.id" :class="{'line-through': todo.doneAt}" >{{todo.txt}}</label>
        </div>
    `,
    data() {
        return {
        }
    },
    methods: {
        toggleChecked() {
            this.todo.doneAt = !this.todo.doneAt;
            // add function for update to pass the time or null
        }
    }
}