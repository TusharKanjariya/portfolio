<template>
  <div class="container-fluid mt-5 mb-5" id="About" v-scroll-spy>
    <div class="container">
      <div class="row">
        <div class="col-md-12 page-header">
          <h3 class="section-header text-center">About Me</h3>
          <hr />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <img
            class="img-fluid"
            :src="`${publicPath}me.png`"
            alt="Tushar Kanjariya | Graphic Designer and Full-Stack Developer"
          />
        </div>
        <div class="col-md-6 desc">
          <p
            class="text-dark"
          >I am Tushar Kanjariya. I am working from past 4 years in the IT field.</p>
          <p
            class="text-dark"
          >Earlier I was worked as a Graphic designer and also creating kinds of stuff like visual design and UI/UX design.</p>
          <p
            class="text-dark"
          >After some time I was starting work in Front-end Developer and working with frameworks like Angular, Vue, React.</p>
          <p
            class="text-dark"
          >Currently i am working in Desktop Application Development, Web Development, UI/UX Designs.</p>
          <ul class="nav nav-pills nav-justified mt-4" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >Main Skills</a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >Experience</a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >Education</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div>
                <p>
                  <strong>Graphic Design and UI/UX</strong> - Design
                </p>
                <hr />
                <p>
                  <strong>Full Stack Web Development</strong> - Development
                </p>
                <hr />
                <p>
                  <strong>Backend Development</strong> - Development
                </p>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <p>
                <strong>Graphic Designer</strong> - Year 2015 - 2017
              </p>
              <p>At Redlio Designs</p>
              <hr />
              <p>
                <strong>Software Engineer</strong> - Year 2020 - Present
              </p>
              <p>At Simform Solutions Pvt. Ltd.</p>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <p>
                <strong>Diploma in Computer Engineering</strong> - Year 2014 - 2017
              </p>
              <p>At Goverment Polytechnic College, Jamnagar, Gujarat, India</p>
              <hr />
              <p>
                <strong>B.E. in Computer Engineering</strong> - Year 2017 - 2020
              </p>
              <p>At Goverment Engineering College, Rajkot, Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped>
.desc {
  font-size: 18px;
}
.desc p {
  margin: 8px 0;
}
.nav-pills {
  background-color: rgba(255, 26, 80, 0.03);
}
.nav-pills .nav-link {
  border-radius: 0px !important;
}
.nav-item a {
  color: var(--dark);
}
.nav-item a.active {
  color: #f9004d;
  border-bottom: 3px solid #f9004d !important;
  background-color: rgba(255, 26, 80, 0.03) !important;
}
</style>