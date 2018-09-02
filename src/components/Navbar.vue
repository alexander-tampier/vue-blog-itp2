<template lang="html">
<div class="navbar-fixed">
  <nav class="white">
    <div class="nav-wrapper">
      <div class="container">
        <router-link to="/">
          <span class="brand-logo my-style">
            {{title}}
         </span>
        </router-link>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Projektarbeit2',
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Prompt');
.my-style {
  color: #000;
  font-family: "Prompt";
  font-weight: 700;
  font-style: normal;
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-transform: uppercase;
}
</style>
