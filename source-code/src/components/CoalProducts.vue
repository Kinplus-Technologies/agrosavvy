<template>
  <div class="pa-3">
    <div>
      <h1 class="text-center orange--text text--darken-2">CHARCOAL PRODUCTS</h1>
      <br>
      <v-row class="black white--text">
        <v-col cols="12" sm="7" class="text-center">
          <h3 class="orange--text text--darken-3">GENERAL DESCRIPTION:</h3>
          <span>
            We sell international grade hardwood charcoal that meets the specifications and packaging requirements of our clients. We pride ourselves in our excellent customer service delivery, the quality of our products and the speed of execution of our clients’ order. With us, you will never have to worry about the hassles and complexities involved in sourcing for high quality and competitively priced charcoal from Africa.
          </span>
        </v-col>
        <v-col cols="12" sm="5" class="pa-9">
          <h3 class="orange--text text--darken-3">Delivery Terms:</h3>
          <span>*****</span>
          <h3 class="orange--text text--darken-3">Packaging Terms:</h3>
          <span>*****</span>
        </v-col>
      </v-row>
    </div>
    <br id="description">
    <br>
    <div class="container black my-7" >
      <v-row>
        <v-col cols="12" sm="6">
          <v-card dark class="pa-3">
            <video v-if="curCharcoal.ayin" controls style="max-height: 50vh; width: 100%" title="Ayin Charcoal Hardwood, Best of Nigeria Charcoal">
              <source :src="charcoals[0].vid" type="">
              </video>
            <video v-show="!curCharcoal.ayin" controls style="max-height: 50vh; width: 100%" title="Ayin Charcoal Hardwood, Best of Nigeria Charcoal">
              <source  :src="charcoals[1].vid" type="">
            </video>
            <h3 class="text-center orange--text text--darken-4 mt-2">{{ curCharcoal.type }} Charcoal</h3>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="card-hover pa-2 mr-2">
            <h2 class="orange--text text--darken-4">{{ curCharcoal.type }} Charcoal</h2>
            <h2 class="orange--text text--darken-4">Specifications:</h2>
            <span class="d-block">{{ curCharcoal.specA }}</span>
            <span class="d-block">{{ curCharcoal.specB }}</span>
            <span class="d-block">{{ curCharcoal.specC }}</span>
            <span class="d-block">{{ curCharcoal.specD }}</span>
            <span class="d-block">{{ curCharcoal.specE }}</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
    
    <div class="container text-center my-3 black">
      <v-row justify="center">
        <v-col
          cols="12" sm="6"
          v-for="(charcoal, index) in charcoals"
          :key="charcoal.charcoalId"
          class="image-transform"
          @click="updateCharcoal(index)"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 19 : 1"
              :class="{ 'on-hover' : hover }"
              class="cd-hover image-transform"
              @click="scrollToDescription"
            >
              <v-img
                contain
                max-height="250"
                :src="charcoal.src"
                :alt="charcoal.alt"
              >
                <v-card-title>
                  <v-row justify="center" class="white--text flex-column">
                    <p>
                      <b>{{ charcoal.type }} Charcoal</b>
                    </p>
                    <span v-show="hover" class="caption font-weight-bold font-italic">
                      <h3>Click to see details</h3>
                    </span>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoalProducts",

  data() {
    return {
      selectedCharcoal: 0,

      charcoals: [
        {
          charcoalId: 1,
          src: "/uploads/chc2.jpg",
          type: "Ayin",
          alt: "Ayin Charcoal",
          specA: "Hardwood type ~ Birch",
          specB: "Moisture level ~ 3% - 4%",
          specC: "Burns ~ 2hrs - 3hrs",
          specD: "Resturant size ~ 50mm to 150mm",
          specE: "Shisha grade ~ 20mm to 70mm",
          vid: "/uploads/ayin.mp4",
          ayin: true,
        },
        {
          charcoalId: 2,
          src: "/uploads/chc3.jpg",
          type: "Non Sparking",
          alt: "Non Sparking Charcoal",
          specA: "Hardwood ~ Rose, Ahara, Mahogany, etc.",
          specB: "Moisture level ~ 3% - 4%",
          specC: "Burns ~ maximum 2hrs",
          specD: "Resturant size ~ 50mm to 150mm",
          specE: "Bbq ~ 20mm to 70mm",
          vid: "/uploads/nospark.mp4"
        },
      ]
    }
  },

   computed: {
    curCharcoal() {
      return this.charcoals[this.selectedCharcoal]
    },
  },
  methods: {
    updateCharcoal(index) {
      this.selectedCharcoal = index
    },
    scrollToDescription() {
      const element = document.getElementById('description');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.cd-hover:not(.on-hover) {
    opacity: 0.3;
  }

.image-transform:hover {
    transform: scale(1.01);
  }
</style>
