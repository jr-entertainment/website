<template>
  <v-footer :app="!isMobile" class="bg-background footer ma-0 pa-0">
    <v-container fluid>
      <v-divider v-if="!isMobile"/>
      <v-row class="align-center justify-center">
        <v-col cols="12" sm="6" class="text-center text-md-left text-accent">
          <div class="text-body-2">
            &copy; {{ (new Date()).getFullYear() }} Jack Rise Entertainment. All Rights Reserved.
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-md-right">
          <div class="text-body-2">
            <v-btn
              icon
              color="accent"
              variant="plain"
              flat
              class="mx-1"
              href="https://www.facebook.com/jre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="plain"
              color="accent"
              flat
              class="mx-1"
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



</style>