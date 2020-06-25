export default {
    props: ["todo", "todoId"],
    template: `
        <div class="todo">
            <input type="checkbox" :id="todo.id" @click="toggleChecked" :checked="this.todo.doneAt">
            <input @blur="saveChangedTodo" v-model="txt" :class="{'line-through': todo.doneAt}"/>
            <span @click="removeOneTodo()">x</span>
        </div>
    `,
    data() {
        return {
            txt: this.todo.txt,
            date: null,
        }
    },
    methods: {
        saveChangedTodo() {
            const todoObj = {
                id: this.todoId,
                txt: this.txt,
                doneAt: this.date
            }
            this.$emit("saveingTodoChange", todoObj);
        },
        removeOneTodo() {
            this.$emit("removingOneTodo", this.todo.id);
        },
        toggleChecked() {
            this.todo.doneAt = !this.todo.doneAt;
            if (this.todo.doneAt) this.date = Date.now(); 
            else this.date = null
            this.saveChangedTodo()
            console.log(this.todo.doneAt);
        },
    },
}