<template>
  <div>
    <div class="container black mt-7">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card dark class="pa-3">
            <v-img src="/uploads/ssm3.jpg"></v-img>
            <h3 class="text-center orange--text text--darken-4 mt-2">Sesame Seeds</h3>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="card-hover pa-2 mr-2">
            <h2 class="orange--text text--darken-4">Sesame Seeds</h2>
            <h2 class="orange--text text--darken-4">Description:</h2>
            <span>
              Sesame seeds are tiny, oil-rich seeds that grow in pods on the Sesamum indicum plant. Unhulled seeds have the outer, edible husk intact, while hulled seeds come without the husk. Sesame seeds come in varieties:
            </span>
            <ul>
              <li><b>Golden or Brown</b> Sesame seeds are the most common.</li>
              <li><b>White</b> Sesame seeds are typically more expensive and more readily available in Europe and the Americas.</li>
              <li><b>Black</b> Sesame seeds are common Asian countries.</li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SesameProducts",
}
</script>
