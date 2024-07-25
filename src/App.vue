<script setup>
import Headers from './components/Header.vue'

</script>
<template>
  <div>
    <Headers />
    <div class="w-[360px] mx-auto p-3 ">
      <router-view></router-view>
    </div>
  </div>
</template>