<template>
  <div>
    <slot></slot>
    <v-row justify="center">
      <v-col
        cols="12" sm="6" md="2"
        v-for="product in products"
        :key="product.id"
      >
        <div
          class=" black py-2 card-hover"
        >
          <router-link :to="product.link">
            <v-img
              contain
              max-height="200"
              :title="product.title"
              :src="product.src"
              :alt="product.alt"
              class=" rounded-xl"
            ></v-img>
          </router-link>
          <div class="text-center my-2 orange--text text--darken-4">
            <b>{{ product.name }}</b>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Vue from "vue";
import { uuid } from '@/services'

export default {
  name: "ProductItems",
  data() {
    return {
      products: [
        {
          id: uuid(),
          src: "../uploads/chc4.jpg",
          alt: "Charcoal",
          name: "Charcoal",
          title: "Go to Charcoal page",
          link: "/agrosavvy/products/coal-products"
        },
        {
          id: uuid(),
          src: "../uploads/pnt2.jpg",
          alt: "Peanuts",
          name: "Peanuts",
          title: "Go to Peanuts page",
          link: "/agrosavvy/products/peanut-products"
        },
        {
          id: uuid(),
          src: "../uploads/csh1.jpg",
          alt: "Dried Cashew Nuts",
          name: "Dried Cashew Nuts",
          title: "Go to Cashew Nuts page",
          link: "/agrosavvy/products/cashew-products"
        },
        {
          id: uuid(),
          src: "../uploads/shb1.jpg",
          alt: "Shea Butter",
          name: "Shea Butter",
          title: "Go to Shea Butter page",
          link: "/agrosavvy/products/shea-butter-products"
        },
        {
          id: uuid(),
          src: "../uploads/ssm1.jpg",
          alt: "Sesame Seeds",
          name: "Sesame Seeds",
          title: "Go to Sesame Seeds page",
          link: "/agrosavvy/products/sesame-products"
        }
      ],
    }
  }
}
</script>

<style>
  .card-hover:hover {
    transform: scale(1.04);
  }
</style>