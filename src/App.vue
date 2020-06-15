<template>
  <div id="id">
    <Navigation></Navigation>
    <div v-scroll-spy="{offset: 70}">
      <Banner></Banner>
      <MyWork></MyWork>
      <Services></Services>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/navigation";
import Banner from "./components/Banner";
import MyWork from "./components/MyWork";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Banner,
    MyWork,
    Services,
    About,
    Contact,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap");
* {
  --primary: #f9004d;
}

body {
  font-family: "Poppins", sans-serif;
}
.section-header {
  color: #f9004d;
}
.page-header hr {
  width: 15%;
  height: 2px;
  margin-top: 5px;
  background-color: #f9004d;
}
.btn {
  background-color: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.btn:hover,
.btn-focus {
  background-color: #ce0041 !important;
  border-color: #ce0041 !important;
  color: #fff;
}

.btn:active {
  background-color: #ce0041 !important;
  outline: none !important;
  border-color: #ce0041 !important;
  color: #fff;
}
</style>
