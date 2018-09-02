<template>
<div class="my-container">
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.my-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}

.my-container::after {
  content: "";
  position: absolute;
  background-color: #FF7600;
  padding-bottom: 141.42136%;
  width: 100%;
  bottom: 0;
  left: 0;
  -webkit-transform: rotate(65.5deg);
  transform: rotate(65.5deg);
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
</style>
