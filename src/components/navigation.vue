<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-custom fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Tushar Kanjariya</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" v-scroll-spy-active v-scroll-spy-link>
          <li :class="{'active': isActive}">
            <a class="nav-link" href="#Home">Home</a>
          </li>
          <li :class="{'active': isActive}">
            <a class="nav-link" href="#Work">My Work</a>
          </li>
          <li :class="{'active': isActive}">
            <a class="nav-link" href="#Skills">Skills</a>
          </li>
          <li :class="{'active': isActive}">
            <a class="nav-link" href="#About">About</a>
          </li>
          <li :class="{'active': isActive}">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      isActive: false
    };
  }
};
</script>
<style scoped>
.bg-custom {
  background-color: #f8f9fc !important;
  border-bottom: 1px solid #e9e9e9;
}
.navbar-brand {
  color: var(--primary);
  font-weight: 600;
}
.navbar-light .navbar-nav .nav-link {
  color: #000;
}
.navbar-nav .active > .nav-link {
  color: var(--primary);
}
</style>