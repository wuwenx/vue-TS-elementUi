<template>
  <div class="home">
    <HelloWorld msg="添加信息"/>
    <FromSelect></FromSelect>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import FromSelect from '@/components/FromSelect.vue';

@Component({
  components: {
    HelloWorld,
    FromSelect,
  },
})
export default class Home extends Vue {}
</script>
