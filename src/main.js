import { createApp } from 'vue'
import App from './App.vue';
import router from "./router";
import store from './store';
import "@/assets/style.css";
import {appAxios} from './utils/appAxios';
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const socket=io("https://chat-app-server01.herokuapp.com/");
const app=createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$socket=socket;
app.mount('#app');
