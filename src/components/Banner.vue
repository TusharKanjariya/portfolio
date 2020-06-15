<template v-scroll-spy>
  <div class="jumbotron" id="Home">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-12 order-md-1 justify-content-center align-self-center">
          <p class="lead text-muted">Welcome to my World</p>
          <h1>Hii, I am Tushar Kanjariya</h1>
          <h1>
            I am
            <div class="slidingVertical">
              <span>Graphic Designer</span>
              <span>Web Developer</span>
            </div>
          </h1>
        </div>
        <div class="col-md-6 order-1 mb-5 order-md-12">
          <img :src="`${publicPath}header.svg`" alt="Tushar Kanjariya" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>
<style scoped>
.jumbotron {
  font-weight: bolder;
  background-color: #f8f9fc;
  min-height: 500px;
}
/*Vertical Sliding*/
.slidingVertical {
  display: inline;
  text-indent: 10px;
}
.slidingVertical span {
  animation: topToBottom 12.5s linear infinite 0s;
  -ms-animation: topToBottom 12.5s linear infinite 0s;
  -webkit-animation: topToBottom 12.5s linear infinite 0s;
  color: #f9004d;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}
.slidingVertical span:nth-child(2) {
  animation-delay: 2.5s;
  -ms-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
}

@keyframes topToBottom {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -moz-transform: translateY(-50px);
    transform: translateY(-50px);
  }
  10% {
    opacity: 1;
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }
  30% {
    opacity: 0;
    -moz-transform: translateY(50px);
    transform: translateY(50px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 576px) {
  h1 {
    font-size: 25px;
  }
}
</style>
