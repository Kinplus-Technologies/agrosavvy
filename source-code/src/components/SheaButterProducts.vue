<template>
  <div>
    <div class="container black mt-7">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card dark class="pa-3">
            <v-img
              contain
              max-height="20rem"
              src="/uploads/shb3.jpg"
            ></v-img>
            <h3 class="text-center orange--text text--darken-4 mt-2">Shea Butter</h3>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="card-hover pa-2 mr-2">
            <h2 class="orange--text text--darken-4">Shea Butter</h2>
            <h2 class="orange--text text--darken-4">Description:</h2>
            <span>
              Shea Butter is either <b>Yellow(Unrefined)</b> or <b>White(Refined)</b>. The Yellow Shea is raw and has a potent odor with lots of impurities. It is processed using the traditional handcrafted method.
            </span>
            <br>
            <span>The White Shea is filtered, with impurities removed; this makes it odorless and colorless.</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SheaButterProducts",
}
</script>
