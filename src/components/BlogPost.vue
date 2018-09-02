<template lang="html">
  <div class="blog-post">
    <div class="row">
        <div class="col s12">
          <div class="card-panel myCard">
            <div class="thumbnail"><img class="left" :src="cardSrc"/></div>
            <div class="my-right">
                <h1 class="pageTitle">{{title}}</h1>
                <h2 class="pageSubTitle">by Alexander Tampier</h2>
                <div class="divider"></div>
                <p>{{cardContent}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      title: 'Card Title',
      cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat tortor a turpis mattis, in blandit orci venenatis. Quisque justo lacus, rutrum mattis tortor et, aliquam auctor risus. Mauris quis elit turpis. Morbi non nisl nunc. Duis elit quam, lobortis eget pretium sed, eleifend eu dui. Sed molestie ornare suscipit. Phasellus facilisis at quam sed tincidunt. Phasellus eget odio laoreet, dictum augue ac, dictum lorem. Nulla facilisi. Phasellus elit augue, cursus eu ante nec, vestibulum adipiscing mi. Nunc adipiscing nibh risus, sed auctor sapien sodales in. Morbi in purus diam. In id consequat velit, eget sodales enim. Nam a massa sed orci blandit interdum eget et ligula. Pellentesque laoreet semper vulputate.',
      cardSrc: 'https://via.placeholder.com/640x426',
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700,300,200);

.myCard{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.6em;
  font-weight: 300;
  margin-top: 5rem;
  color: #555;
  background-color: #FFF;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
}

.pageTitle,
.pageSubTitle {
  margin-top: 0 !important;
  font-family: 'Titillium', sans-serif;
  text-transform: uppercase;
  color: #333;
}

.pageTitle {
  margin-bottom: 0 !important;
  padding-top: 15px;
  color: #FF7600;
}

.pageTitle {
  font-size: 2em;
  font-weight: 700;
  line-height: 2em;
}

.pageSubTitle {
  margin-bottom: 1rem;
  font-size: 1.4em;
  font-weight: 300;
}

.my-separator {
  margin-top: 10px;
  border: 1px solid #C3C3C3;
}

p {
  padding-top: 10px;
  margin-bottom: 2em;
  text-align: justify;
  padding-top: 10px;
  font-size: 0.95rem;
  line-height: 150%;
  color: #4B4B4B;
}

/* Right side of the card */
.my-right {
  margin-left: 390px;
  margin-right: 20px;
}

/* Image on the left side */
.thumbnail {
  float: left;
  position: relative;
  left: 30px;
  top: -60px;
  height: 220px;
  width: 330px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
}

img.left {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>
