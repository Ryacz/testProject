import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
const arr = [1,2,3,4,5,6,7,8,9]
  const fun = (arr:any) => {
    for (let index = 
    0; index < 
    arr.length; 
    index++) {
      const element 
      = arr[index]
      console.log(element)
    }
  }
  fun(arr)