import {createRouter, createWebHashHistory} from "vue-router";
import store from "../store"
const routes=[
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/pages/Home")
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/pages/Login")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:()=>import("@/pages/Register")
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})
router.beforeEach((to,from,next)=>{
    const authRequiredRoutes=["HomePage"];
    const authNotRequiredRoutes=["LoginPage", "RegisterPage"];
    const _isAuthenticated=store.getters._isAuthenticated;
    console.log(to,from,_isAuthenticated,authRequiredRoutes.indexOf(to.name1)>-1);

    //login'e dogrudan gitme
    if(authNotRequiredRoutes.indexOf(to.name)>-1 && _isAuthenticated) next(false);

    if(authRequiredRoutes.indexOf(to.name)>-1){
        if( _isAuthenticated) next();
        else next({name:"LoginPage"});
    }
    else { next();}
});

export default router;
