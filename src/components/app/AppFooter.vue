<template>
  <v-footer :app="!isMobile" class="bg-transparent footer ma-0 pa-0">
    <v-container fluid>
      <v-divider v-if="!isMobile" />
      <v-row class="align-center justify-center">
        <v-col cols="12" sm="6" class="text-center text-md-left text-accent">
          <div class="text-body-2 glow-text">
            &copy; {{ (new Date()).getFullYear() }} Jack Rise Entertainment. All Rights Reserved.
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-md-right">
          <div class="text-body-2 ">
            <v-btn
              icon
              color="white"
              variant="plain"
              class="mx-1 glow-text"
              href="https://www.facebook.com/jre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="plain"
              color="white"
              flat
              class="mx-1 glow-text"
              href="mailto:admin@jre.co.nz"
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  computed: {
    isMobile () {
      return this.$vuetify.display.smAndDown
    }
  }
}
</script>

<style scoped>
.footer {
  /* background: linear-gradient(to top right, #732c4e), #131430; */
  min-height: 40px; /* Adjust to your preferred height */
  padding: 10px 0; /* Reduce padding to make it more compact */
}

.glow-text {
  color: white; /* Change to your desired text color */
  text-shadow: 
    0 0 10px rgba(255, 105, 180, 0.7),  /* Hot pink glow */
    0 0 20px rgba(255, 105, 180, 0.7),
    0 0 30px rgba(255, 105, 180, 0.7),
    0 0 40px rgba(255, 105, 180, 0.7),
    0 0 50px rgba(255, 105, 180, 0.7); /* 0 0 [blur]px rgba(...)  */
}

</style>
