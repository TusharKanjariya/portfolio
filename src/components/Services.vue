<template>
  <div class="container-fluid bg" id="Skills" v-scroll-spy>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-3 page-header">
          <h3 class="section-header text-center mt-5">My Awesome Skills</h3>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="p-4 bg-service">
            <div class="icons">
              <img :src="`${publicPath}design.svg`" alt="Graphic Design" class="img-fluid" />
            </div>
            <h4 class="service-title mt-3">Graphics Design and UI/UX</h4>
            <p
              class="text-muted mt-3"
            >Working with Graphic Design stuffs and also creating beautiful UI design for your websites and Mobile applications.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="p-4 bg-service">
            <div class="icons">
              <img
                :src="`${publicPath}web.svg`"
                alt="Web and Application Development"
                class="img-fluid"
              />
            </div>
            <h4 class="service-title mt-3">Web and App Development</h4>
            <p
              class="text-muted mt-3"
            >Working with Full-stack Web Development process and also creating a Desktop application for your Products.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="p-4 bg-service">
            <div class="icons">
              <img :src="`${publicPath}marketing.svg`" alt="Marketing Services" class="img-fluid" />
            </div>
            <h4 class="service-title mt-3">Marketing Services</h4>
            <p
              class="text-muted mt-3"
            >Provide the best marketing services like creating Project banners and brochures for your products and also share in social media plateforms.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped>
.bg {
  background-color: #f8f9fc;
}
.bg-service {
  background-color: #ffffff;
  border-radius: 10px;
}

.icons {
  width: 20%;
  height: auto;
}

.service-title {
  font-size: 19px;
  font-weight: 600;
  color: #272727;
}
</style>