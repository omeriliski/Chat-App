<template>
    <div>
        <app-header/>
        <div>
            <div 
                v-for="message in messageList"
                :key="message"
                class="alert message" 
                :class="message.user.color"
                :style="message.user.id==this._getCurrentUser.id ? 'margin-left:auto' : 'margin-right:auto' "
                role="alert"
                >
                <span 
                    class="username">{{message.user.username}}:
                </span>
                {{message.text}} 
            </div>
        </div>
        <div class="input-message-container fixed-bottom">
            <input class="input-message" type="text" @keydown.enter="SEND_MESSAGE">
        </div>
    </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            messageList:[],
        }
    },
    components:{
        appHeader
    },
    mounted() {
        this.$socket.on("MESSAGE",this.GET_MESSAGE);
        this.$appAxios.get(`/messages`)
            .then(res=>{
                console.log("messages",res.data);
                this.messageList=res.data;
            })
    },
    methods: {
        // WELCOME_MESSAGE(data){
        //     console.log(data);
        // },
        GET_MESSAGE(msj){
            this.messageList.push(msj);
            console.log(this.messageList);
        },
        SEND_MESSAGE(e){
            let messageData={
                "text":e.target.value,
                "user":this._getCurrentUser
            }
            this.$socket.emit("MESSAGE", messageData);
            this.$appAxios.post("/messages",messageData)
                .then(res=>{
                    console.log(res.data);
                })
            e.target.value="";
        }
    },
    computed:{
        ...mapGetters(["_getCurrentUser"])
    }
}
</script>

<style>
    .input-message-container{
        text-align: center;
    }
    .input-message{
        background-color: lightblue;
        width: 98%;
        padding: 10px;
        margin: 10px 0px;
        border-radius: 10px;
    }
    .message{
        width: 400px;
        word-wrap: break-word;
    }
    .username{
        font-size: 12px;
    }
</style>