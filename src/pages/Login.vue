<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Giris Yap</h3>
      <input type="text" v-model="userData.username" placeholder="Kullanıcı Adı" class="input mb-3" />
      <input type="password" v-model="userData.password" placeholder="Şifre" class="input mb-3" />
      <button  class="default-button" @click="onSubmit">Giriş yap</button>
      <span class="text-center mt-3 text-sm">
        Üye değilim,
        <router-link :to="{name:'RegisterPage'}" class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
      </span>
    </div>
</template>

<script>
  import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username:null,
        password:null
      }
    }
  },
  methods: {
    onSubmit(){
      const cryptedPassword = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltkey).toString();
      console.log(`/users?username=${this.userData.username}&password=${cryptedPassword}`)
      this.$appAxios.get(`/users?username=${this.userData.username}&password=${cryptedPassword}`)
      .then(res=>{
        if(res?.data?.length>0){
          this.$store.commit("setUser",res?.data[0]);
          console.log("login res",res);
          this.$router.push({name:"HomePage"});
        }
        else{
          alert("Böyle bir kullanici bulunamadi");
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
}
</script>