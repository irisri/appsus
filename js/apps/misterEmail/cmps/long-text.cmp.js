

export default {
    props: ['txt'],
    template: `
        <div class="long-text">
            <pre>{{textValue}}</pre>
            <button v-if="shouldShowBtn" @click="toggleLong">{{btnText}}</button>
        </div>
    `,
    data() {
        return {
            textValue: '',
            isLong: true,
            shouldShowBtn: false,
            btnText: ''
        }
    },
    methods: {
        toggleLong() {
            this.isLong = !this.isLong;
            if (this.isLong) {
                this.textValue = this.txt;
                this.btnText = 'Click here to Read less...';
            } else {
                let trimTxt = this.txt.length > 100 ? this.txt.substring(0, 100) + "..." : this.txt
                this.textValue = trimTxt;
                this.btnText = 'Click here to Read more...';
            }
        }
    },
    computed: {

    },
    created() {
        if (this.txt.length > 100) {
            this.shouldShowBtn = true;
        }
        this.toggleLong();
    },

}