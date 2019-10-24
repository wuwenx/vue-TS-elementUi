declare module '*.vue' {

  // 为VUE挂载属性
  
  interface ComponentOptions<v extends Vue>{
    myOption?:string
  }
  import Vue from 'vue';
  export default Vue;
}
