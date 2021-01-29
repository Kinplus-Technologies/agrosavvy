<template>
  <div class="grey darken-4 text-center white--text pa-3">
    <div class="py-2">
      <span>
        <h3 class="orange--text text--darken-4"><em>VALUES AND ASSURANCES<hr></em></h3>
      </span>
      <br>
      <h4 class="grey--text">What you stand to enjoy when you trade with us:</h4>
      <v-row justify="center">
        <v-col
          cols="12" sm="6" lg="2"
          v-for="(item, i) in items"
          :key="i"
        >
          <h1 class="mt-5 grey--text">{{ item.number }}</h1>
          <h4 class="text-uppercase mb-2 orange--text text--darken-4">{{ item.title }}</h4>
          <span class="grey--text">{{ item.details }}</span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QualityAssurance',

  data() {
    return {
      items: [
        {
          number: "1",
          title: "best quality",
          details: "Our services and products are offered with excellence as the driving force. We meet clients' specific product demands."
        },
        {
          number: "2",
          title: "work dynamics",
          details: "We endeavour to appreciate and consider the differentiating factors among our customers all over the world."
        },
        {
          number: "3",
          title: "affordability",
          details: "Our high quality services still go for very affordable prices."
        },
        {
          number: "4",
          title: "sustainability",
          details: "While guaranteeing high quality products to our clients, we pride ourselves in achieving this in a sustainable and environmentally friendly manner."
        },
        {
          number: "5",
          title: "values",
          details: "Excellent service delivery, performance, quality assurance, and honesty form our core and prized values."
        },
      ]
    }
  }
}
</script>
