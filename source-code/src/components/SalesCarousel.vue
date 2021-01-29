<template>
  <div>
    <v-container>
      <v-carousel
        cycle
        interval="4000"
        height="400"
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-card>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            :alt="item.alt"
          >
            <v-sheet color="grey-dark">
              <div class="text-center text-uppercase orange--text text--darken-1">
                <h2>{{ item.product }}</h2>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-card>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SalesCarousel",
  data() {
    return {
      items: [
        {
          src: "uploads/chc1.jpg",
          alt: "charcoal",
          product: "charcoal"
        },
        {
          src: "uploads/ssm2.jpg",
          alt: "sesame seeds",
          product: "sesame seeds"
        },
        {
          src: "uploads/shb2.jpg",
          alt: "shea butter",
          product: "shea butter"
        },
        {
          src: "uploads/csh2.jpg",
          alt: "dried cashew nuts",
          product: "dried cashew nuts"
        },
        {
          src: "uploads/pnt1.jpg",
          alt: "peanuts",
          product: "peanuts"
        }
      ]
    }
  }
}
</script>
