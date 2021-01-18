<template>
  <div class="bg-grey pa-3">
    <div>
      <h1 class="text-center">CHARCOAL PRODUCTS</h1>
      <br>
      <v-row>
        <v-col cols="12" sm="7" class="text-center">
          <h3>GENERAL DESCRIPTION:</h3>
          <span>
            We sell international grade hardwood charcoal that meets the specifications and packaging requirements of our clients. We pride ourselves in our excellent customer service delivery, the quality of our products and the speed of execution of our clients’ order. With us, you will never have to worry about the hassles and complexities involved in sourcing for high quality and competitively priced charcoal from Africa.
          </span>
        </v-col>
        <v-col cols="12" sm="5">
          <h3>Delivery Terms:</h3>
          <span>*****</span>
          <h3>Packaging Terms:</h3>
          <span>*****</span>
        </v-col>
      </v-row>
    </div>
    <div class="container my-5">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card elevation="3" class="pt-3">
            <v-img            
              contain
              max-height="350"
              src="uploads/chc3.jpg"
            ></v-img>
            <h3 class="text-center mt-2">***** Charcoal</h3>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="card-hover pa-2 mr-2">
            <h2>Specifications:</h2>
            <span>*****</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
    
    <div>
      <v-row class="text-center my-3">
        <v-col
          cols="12" sm="4"
          v-for="charcoal in charcoals"
          :key="charcoal.id"
        >
          <v-img
            contain
            max-height="250"
            :src="charcoal.src"
            :alt="charcoal.alt"
          ></v-img>
          <h3 class="mt-2">{{ charcoal.name }}</h3>
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
      charcoals: [
        {
          src: "uploads/chc3.jpg",
          name: "***** Charcoal",
          alt: "***** Charcoal"
        },
        {
          src: "uploads/chc2.jpg",
          name: "***** Charcoal",
          alt: "***** Charcoal"
        },
        {
          src: "uploads/chc3.jpg",
          name: "***** Charcoal",
          alt: "***** Charcoal"
        }
      ]
    }
  }
}
</script>

<style>
  .border {
    border: 3px solid #ffb222;
  }
</style>