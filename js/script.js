const { createApp } = Vue;

createApp({
    data() {
        return {
            emailArray : []
        };
    },
    methods: {
        mailGenerator(){
            if (this.emailArray.length < 10){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                this.emailArray.push(response.data.response)
                });
            };
        },
    },
    mounted() {
        this.mailGenerator()
    }
}).mount('#app');