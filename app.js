Vue.createApp({ 
data(){
    return {
        number: 1,
    };
},
methods: {
    minus(n){
        n = parseInt(n);
        if(isNaN(n)){
            result = this.number--;
            return result;
        }else{
            result = this.number - n;
            return result;
        }
    },
    add(n){
        n = parseInt(n);
        if(isNaN(n)){
            result = this.number++;
            return result;
        }else{
            result = this.number + n;
            return result;
        }
    }
} 
}).mount('#monApp');