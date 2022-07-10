//How to define the data property of the vue application instance
const bulb = {
    data(){
        return{
            status: ''
        }
    },

    methods: {
        light: function(){
            this.status='ON'
        },

         unlight: function(){
            this.status='OFF'
        }
    }
}
// How to create the aplicstion instance
const app = Vue.createApp(bulb);
//How do we connect the applicattion ainstance to the views (HTML)
app.mount('#app');