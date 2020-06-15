<template>
  <footer class="container-fluid bg-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-white footer-title">
          <h5 class="mt-4">
            Develop by &nbsp;
            <small class="fas fa-heart"></small> with Tushar Kanjariya
          </h5>
        </div>
        <div class="col-md-6 text-white footer-social text-right">
          <ul class="list-inline mt-4">
            <li class="list-inline-item ml-2" v-for="(social,i) in socialMedia" :key="i">
              <a :href="social.link" class="text-white">
                <h5>
                  <i :class="social.icon"></i>
                </h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialMedia: [
        {
          title: "Dribbble",
          link: "https://dribbble.com/TusharKanjariya",
          icon: "fab fa-dribbble"
        },
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/tusharkanjariya/",
          icon: "fab fa-linkedin"
        },
        {
          title: "Medium Blog",
          link: "https://medium.com/@TusharKanjariya",
          icon: "fab fa-medium"
        },
        {
          title: "Behance",
          link: "https://www.behance.net/TusharKanjariya",
          icon: "fab fa-behance"
        },
        {
          title: "Instagram",
          link: "https://www.instagram.com/design_mart_/",
          icon: "fab fa-instagram"
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/tusharkanjariya.2019",
          icon: "fab fa-facebook-square"
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg-footer {
  background-color: #f34567;
}
@media screen and (max-width: 576px) {
  .footer-title,
  .footer-social {
    text-align: center !important;
    margin: 0 auto !important;
  }
}
</style>