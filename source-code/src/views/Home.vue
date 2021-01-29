<template>
  <div>
    <v-row class=" mt-6">
      <v-col cols="12" sm="6" md="8">
        <sales-carousel></sales-carousel>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <div class="container">
          <div class="black">
            <h1 class="orange--text text--darken-3 text-center">
              About Us
            </h1>
          </div>
          <div class="subtitle-1 pa-2">
            <about-details-a></about-details-a>
            <b v-if="!expand" class="orange--text read-more" @click="expand = !expand">READ MORE</b>
            <b v-if="expand" class="orange--text read-more" @click="expand = !expand">CLOSE</b>
          </div>
          <v-expand-transition>
            <v-card
              v-show="expand"
              class="px-2 pt-1"
            >
              <about-details-b></about-details-b>
            </v-card>
          </v-expand-transition>
        </div>
      </v-col>
    </v-row>

    <div class="grey lighten-1 pt-2 mt-6 pb-7">
      <product-items><div class="black"><h1 class="pt-3 text-center text-uppercase orange--text text--darken-4">products</h1></div></product-items>
    </div>
    
    <quality-assurance class="pt-7 pb-12"></quality-assurance>
  </div>
</template>

<script>
import SalesCarousel from '../components/SalesCarousel.vue'
import ProductItems from '../components/ProductItems.vue'
import QualityAssurance from '../components/QualityAssurance.vue'
import AboutDetailsA from '../components/AboutDetailsA.vue'
import AboutDetailsB from '../components/AboutDetailsB.vue'

export default {
  name: "Home",

  data: () => ({
    expand: false,
  }),

  components: {
    SalesCarousel,
    ProductItems,
    QualityAssurance,
    AboutDetailsA,
    AboutDetailsB,
  },

}
</script>

<style>
  .read-more {
  cursor: pointer;
}
</style>