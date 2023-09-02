
const app = Vue.createApp({
        data() {
            return{
            title:'This information will be displayed',
            Details:'This retains info about title',
            Years: 10
            }
        },
        methods:{
            changeTitle(){
              this.title = 'Information is changed'
            }
        },
        /*methods:{
            toggleShowDetails(){
                this.showDetails = !this.showDetails
            }
        }*/
    })
app.mount('#app')