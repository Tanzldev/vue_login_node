<template>
  <div>
    <button @click="get()">获取user表信息</button>
  </div>
</template>


<script>
import axios from "axios"
export default{
  data(){
    return{

    };
  },
  methods:{
    get(){
      axios.get('http://127.0.0.1/user')
      .then(res=>{
        console.log(res.data);
      })
      .catch(err=>{
        console.log("获取失败"+err)
      })
    }
  }
}
</script>


