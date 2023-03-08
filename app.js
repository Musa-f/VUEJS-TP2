Vue.createApp({ 
data(){
    return {
        number: 1,
    };
},
methods: {
    minus(){
        return this.number = this.number - 1;
    },
    add(){
        return this.number = this.number + 1;
    }
} 
}).mount('#monApp');