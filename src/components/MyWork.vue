<template>
  <div class="container" id="Work" v-scroll-spy>
    <div class="row">
      <div class="col-md-12 mb-3 page-header">
        <h3 class="section-header text-center">
          My Latest Work
          <hr />
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-6 mb-4" v-for="shot in posts.slice(0, limit)" v-bind:key="shot.id">
        <a :href="shot.html_url" target="blank">
          <img :src="shot.images.one_x" :alt="shot.title" class="img-fluid" />
          <div class="overlay"></div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center mb-5">
        <button class="btn btn-primary btn-lg" @click="increaseLimit()" v-if="limit < 10">View More</button>
        <button class="btn btn-primary btn-lg" @click="decreaseLimit()" v-if="limit > 10">View Less</button>
      </div>
    </div>
  </div>
</template>
<script>
import Data from "@/assets/export.json";
export default {
  name: "My-work",
  data() {
    return {
      posts: [],
      limit: 9
    };
  },
  created() {
    this.AllShots();
  },
  methods: {
    AllShots(category = "All") {
      const { shots } = Data;
      if (category === "All") {
        this.posts = shots;
      } else {
        this.posts = shots;
      }
    },
    increaseLimit() {
      this.limit = this.posts.length;
    },
    decreaseLimit() {
      this.limit = 9;
    }
  }
};
</script>
<style scoped>
img {
  border-radius: 10px;
}
</style>