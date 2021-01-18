<template>
  <div class="d-block">
    <v-list>
      <v-list-item title="AgroSavvy, best charcoal in nigeria"><v-btn @click="hideDrawer" :to="{name: 'home'}" text><v-icon>mdi-home</v-icon> Home</v-btn></v-list-item>
      <v-list-item title="AgroSavvy, best charcoal in nigeria, request quotation"><v-btn @click="hideDrawer" :to="{name: 'about'}" text><v-icon>mdi-clipboard-text</v-icon> About</v-btn></v-list-item>
      <v-list-item title="AgroSavvy, best charcoal in nigeria, best of charcoal products in nigeria"><v-btn @click="hideDrawer" :to="{name: 'products'}" text><v-icon>mdi-view-list</v-icon> Products</v-btn></v-list-item>
      <v-list-item title="AgroSavvy, best charcoal in nigeria, contact us "><v-btn @click="hideDrawer" :to="{name: 'contact'}" text><v-icon>mdi-map-marker-radius</v-icon> Contact</v-btn></v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'NavDrawer',
  
  data: () => ({
  }),
  props: {
    hideDrawer: Function,
  }
}
</script>
