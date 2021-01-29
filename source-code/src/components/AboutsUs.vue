<template>
  <div class="grey lighten-1 pa-8">
    <v-row justify="center">
      <h2 class="text-center orange--text text--darken-3 text-uppercase">About AgroSavvy</h2>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-img
          contain
          max-height="400"
          src="/uploads/logo2.jpg"
          class="rounded-l-pill"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="8">
        <span class="subtitle-1">
          <about-details-a></about-details-a>
          <about-details-b></about-details-b>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AboutDetailsA from './AboutDetailsA.vue'
import AboutDetailsB from './AboutDetailsB.vue'

export default {
  name: "AboutUs",
  
  components: {
    AboutDetailsA,
    AboutDetailsB,
  },
}
</script>
