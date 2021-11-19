import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state:{
        user:null,
        saltkey:"booklike123!456?"
    },
    mutations:{
        setUser(state, user){
            state.user=user;
        },
        logoutUser(state){
            state.user=null;
        }
    },
    getters:{
        _isAuthenticated:state =>state.user!=null,
        _currentUserId:state=>state?.user?.id,
        _getCurrentUser:(state)=>{
            const user=state.user;
            delete user?.password;
            return user;
        },
        _saltkey:state=>state.saltkey
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: (key) => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: (key) => ls.remove(key),
            },
        })]
})