<template lang="html">
<div class="navbar-fixed">
  <nav class="white">
    <div class="nav-wrapper">

        <router-link :to="{ name: 'BlogDashBoard' }">
              <span class="brand-logo"
              id="logo"
              :data-line="title">{{title}}</span>
        </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Sass</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
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
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300);
@import url(https://fonts.googleapis.com/css?family=Squada+One);

ul > li > a {
  font-family: 'Open Sans', sans-serif;
  color: #555;
}

#logo {
  font-family: 'Open Sans', sans-serif;
  color: #555;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 37.5px;
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 1;
  text-shadow: #EDEDED 3px 2px 0;
  position: relative;
}
#logo[data-line]:after {
  content:attr(data-line);;
  position: absolute;
  left: 6px;
  top: 4.5px;
}
#logo:after {
  background-image: -webkit-linear-gradient(left top, transparent 0%, transparent 25%, #555 25%, #555 50%, transparent 50%, transparent 75%, #555 75%);
  background-size: 4px 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: -5;
  display: block;
  text-shadow: none;
}
</style>
