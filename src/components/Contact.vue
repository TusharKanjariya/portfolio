<template v-scroll-spy>
  <div class="container-fluid bg" id="Contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-3 mt-4 page-header">
          <h3 class="section-header text-center">Contact Me</h3>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <h5>Send your Interesting idea:</h5>
          <div class="form-group">
            <label for="Email">Email</label>
            <input type="email" id="Email" class="form-control" placeholder="john@example.com" />
          </div>
          <div class="form-group">
            <label for="Name">Name</label>
            <input type="text" id="Name" class="form-control" placeholder="John Doe" />
          </div>
          <div class="form-group">
            <label for="Msg">Message</label>
            <textarea id="Msg" class="form-control" placeholder="Type Your Interesting Idea" />
          </div>
          <div class="form-group">
            <input type="submit" value="Send Message" class="btn" />
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <h5>Stay Connected with Me</h5>
          <div class="row mt-4">
            <div
              class="col-6 col-md-4 social text-center mb-4 rounded-lg"
              v-for="(social,i) in socialMedia"
              :key="i"
            >
              <div class="bg-social p-3">
                <h2>
                  <a :href="social.link" class="stretched-link" target="blank">
                    <i :class="social.icon"></i>
                  </a>
                </h2>
                {{social.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
.bg {
  background-color: #f8f9fc;
}
.bg-social:hover,
.bg-social:hover a {
  background-color: var(--primary);
  color: #fff;
  transition: 0.2s linear all;
  border-radius: 10px;
}
.form-control:focus {
  color: #495057;
  border-color: var(--primary);
  outline: 0;
  box-shadow: none;
}
.bg-social,
.bg-social a {
  background-color: #ffffff;
  color: #495057;
  border-radius: 10px;
}
</style>