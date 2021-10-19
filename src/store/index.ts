import { createStore } from 'vuex'

async function myPoster(body:Object, route:string) {
  const response = await fetch(process.env.VUE_APP_API_URL + route, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body),
  });

  const data = await response.json()
  return(data)
}

export default createStore({
  state: {
    token:"",
    dark:false
  },
  mutations: {
    changeToken(state, token:string) : void {
      state.token = token
      console.log(state.token)
    }
  },
  actions: {
    async login(context, data:{login:string, password:string}):Promise<Object> {
      const myUser:any = await myPoster(data, "/user/login")
      if (myUser.success == true) {
        context.commit("changeToken", myUser.data.token)
        console.log(myUser)
      }
      return(myUser)
    },
    async loginToken(context,token:string):Promise<Object> {
      const myUser:any = await myPoster({token:token}, "/user/loginToken")
      if (myUser.success == true) {
        context.commit("changeToken", myUser.data.token)
        console.log(myUser)
      }
      return(myUser)
    },
    async register(context, data:{login:string, password:string,email:string,pseudo:string}):Promise<any> {
      const myUser:any = await myPoster(data, "/user/register")
      return(myUser)
    },
    async createTeam(context, name:string):Promise<any> {
      const myTeam:any = await myPoster({name:name, token:context.state.token}, "/team/newTeam")
      return(myTeam);
    } 
  },
  modules: {
  }
})
