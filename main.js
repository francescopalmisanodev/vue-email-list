const app = new Vue({
    el:"#root",
    data: {
        emails: [],
    },
    methods: {
        genEmails(){
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(el=>{
                this.emails.push(el.data.response);
            });  
            }      
        }
    }
})