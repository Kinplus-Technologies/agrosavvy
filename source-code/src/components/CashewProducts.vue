<template>
  <div>
    <div class="container black mt-7">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card dark class="pa-3">
            <v-img
              contain
              max-height="20rem"
              src="/uploads/csh3.jpg"
            ></v-img>
            <h3 class="text-center orange--text text--darken-4 mt-2">Cashew Nuts</h3>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="card-hover pa-2 mr-2">
            <h2 class="orange--text text--darken-4">Cashew Nuts</h2>
            <h2 class="orange--text text--darken-4">Description:</h2>
            <span>Cashew Nuts types or cashew Kernels varieties are graded into white/scorched wholes, pieces, splits, butts, etc. depending on the shape, size & color of the kernel.</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CashewProducts",
}
</script>
