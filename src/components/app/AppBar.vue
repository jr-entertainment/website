<template>
  <v-app-bar elevation="0" color="transparent" class="pa-12" density="prominent">
    <!-- Desktop menu -->
    <template v-if="$vuetify.display.mdAndUp" #append>
      <div style="overflow: visible; padding: 50px;">
        <v-btn
          v-for="item in menu"
          :key="item"
          @click="scrollToSection(item.toUpperCase())"
          variant="outlined"
          width="200px"
          class="glow-button "
        >
          {{ item }}
        </v-btn>
      </div>
    </template>

    <!-- Mobile menu button -->
    <template v-else #append>
      <v-btn
        icon
        @click="drawer = !drawer"
        class="text-body-1 blue-grey-darken-4"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <v-divider v-if="!$vuetify.display.mdAndUp"/>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    right
  >
    <v-list>
      <v-list-item
        v-for="item in menu"
        :key="item"
        @click="scrollToSection(item.toLowerCase())"
        @click.native="drawer = false"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useGoTo } from 'vuetify'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const menu = [
  'CONTACT US'
]

const router = useRouter()
const goTo = useGoTo()

function scrollToSection(section) {
  const element = document.getElementById(section);
  if (element) {
    goTo(element, { offset: -64 }); // Adjust offset if needed
  }
}

function goHome () {
  router.push('/')
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}

/* Glow effect for buttons */
.glow-button {
  color: white; /* Change to your desired text color */
  text-shadow: 
    0 0 10px rgba(255, 105, 180, 0.7),  /* Hot pink glow */
    0 0 20px rgba(255, 105, 180, 0.7),
    0 0 30px rgba(255, 105, 180, 0.7),
    0 0 40px rgba(255, 105, 180, 0.7),
    0 0 50px rgba(255, 105, 180, 0.7); /* Text glow effect */
  box-shadow: 
    0 0 10px rgba(255, 105, 180, 0.6),   /* Inner glow */
    0 0 20px rgba(255, 105, 180, 0.5),   /* Middle glow */
    0 0 30px rgba(255, 105, 180, 0.4),
    0 0 40px rgba(255, 105, 180, 0.3),
    0 0 50px rgba(255, 105, 180, 0.2); 
}

</style>
