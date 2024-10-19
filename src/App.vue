<template>
  <v-app>
    <div
      class="background-image"
      :style="`background-image: url(${currentBackground}); min-height: ${contentHeight};`"
    >
      <AppBar ref="appBar" />

      <v-main>
        <v-container fluid class="pa-0">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </v-container>
      </v-main>

      <AppFooter ref="appFooter" />
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      contentHeight: '0px',
      isMobile: false,
    };
  },
  computed: {
    currentBackground() {
      return this.isMobile 
        ? 'assets/cover-without-text.png'
        : 'assets/cover-with-text.png'
    },
  },
  mounted() {
    this.calculateHeight();
    this.checkIfMobile();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    calculateHeight() {
      const appBarHeight = this.$refs.appBar.$el.offsetHeight;
      const appFooterHeight = this.$refs.appFooter.$el.offsetHeight;
      const viewportHeight = window.innerHeight;

      this.contentHeight = `calc(${viewportHeight}px - ${appBarHeight + appFooterHeight}px)`;
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth < 1110; // Switch at 1110px
    },
    handleResize() {
      this.calculateHeight();
      this.checkIfMobile(); // Update mobile state on resize
    },
  },
};
</script>

<style>
.background-image {
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out; /* Smooth transition */
  min-height: 100vh; /* Ensures the div takes up full height */
}

/* Fade transition for other components */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
