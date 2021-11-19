<template>
    <div>
        <app-header/>
        <div class="socket">
            <input class="input-message" type="text" @keydown.enter="SEND_MESSAGE">
        </div>
        <h6>{{messageText}}</h6>
    </div>
</template>

<script>
import appHeader from '@/components/appHeader'
export default {
    data() {
        return {
            messageText:""
        }
    },
    components:{
        appHeader
    },
    mounted() {
        this.$socket.on("MESSAGE",this.GET_MESSAGE);
    },
    methods: {
        // WELCOME_MESSAGE(data){
        //     console.log(data);
        // },
        GET_MESSAGE(msj){
            this.messageText=msj;
        },
        SEND_MESSAGE(e){
            this.$socket.emit("MESSAGE", e.target.value);
            e.target.value="";
        }
    },
}
</script>

<style>
    .input-message{
        background-color: lightblue;
    }
</style>