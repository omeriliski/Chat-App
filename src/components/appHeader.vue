<template>
  <!-- ! HEADER -->
  <div class="header-container d-flex justify-content-end">
    <!-- <nav class="flex w-full px-2">
      <div v-if="_isAuthenticated" class="ml-auto flex items-center">
        <div class="relative group">
          <button
            class="
              w-8
              h-8
              flex
              items-center
              justify-center
              rounded-md
              transition-colors
              duration-500
              hover:bg-gray-200
              group-focus-within:bg-gray-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </button>
          <nav
            class="
              bg-white
              !z-10
              rounded-md
              shadow-md
              p-2
              w-56
              flex flex-col
              absolute
              group-focus-within:visible
              top-full
              right-0
              invisible
            "
          >
            <a @click="onLogout" href="#" class="menu-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                class="fill-current mr-1"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
                <g>
                  <path
                    d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"
                  />
                </g>
              </svg>
              Logout</a
            >
          </nav>
        </div>
      </div>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div v-if="_isAuthenticated" class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" @click="onLogout" aria-current="page" href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- ! HEADER -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
  methods: {
    onLogout() {
      this.$store.commit("logoutUser");
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>
