const app = Vue.createApp({
    data(){
        return {
            curseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal')