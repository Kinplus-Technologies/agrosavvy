<template>
  <div class="pa-7">
    <v-row>
      <v-col cols="12" sm="9" md="8">
        <div>
          <h3>
          Request <span class=" orange--text darken-1">Quote</span>
          </h3>
          <br>
          <p>
            Product price is usually based on payment term, packaging, quantity and specification.
          </p>
        </div>

        <v-form>
          <v-row>
            <v-col class=" text-h6" cols="12" sm="6">
              <v-text-field
                :color="themeColor"
                label="Subject"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Your Name *"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Company Name *"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Product Requested"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Shipping Destination *"
                required
              ></v-text-field>
            </v-col>

          <v-col>
            <div class=" text-h6">
              <v-text-field
                :color="themeColor"
                label="Your Location"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Your Email *"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Phone Number"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Quantity (Metric Tons)"
                required
              ></v-text-field>
            </div>
          <div class=" ma-0">
            <span class="text--secondary">Sale Term *</span>
        <v-row class="ma-0">
        <v-checkbox class=" mt-0 mr-1"
          label="FOB"
          value="FOB"
          dense
          :color="themeColor"
          hide-details
        ></v-checkbox>
        <v-checkbox class=" ma-0 mr-1"
          dense
          label="CIF"
          value="CIF"
          :color="themeColor"
          hide-details
        ></v-checkbox>
        <v-checkbox class=" ma-0"
          dense
          label="CNF"
          value="CNF"
          :color="themeColor"
          hide-details
        ></v-checkbox>
        </v-row>
          </div>
          </v-col>
        </v-row>
        <v-row>
        <v-col>
          <label for="message">Message</label>
          <v-textarea
            id="message"
            :color="themeColor"
            rows="3"
            auto-grow
            outlined>
          </v-textarea>
          <div class="d-flex flex-row">            
            <v-btn :to="{name: 'home'}" color="error">Cancel</v-btn>
                <v-spacer></v-spacer>
            <v-btn :color="themeColor">Send</v-btn>
          </div>
        </v-col>
        </v-row>
        </v-form>
      </v-col>

      <v-col cols="12" sm="3" md="4">
            <div v-show="!mobile">
              <v-btn dark>get quote</v-btn>
        <br>
        <br>
        <p></p>
            </div>
        <v-card dark elevation="5">
          <div class="pa-2">
          <h4>
            Head Office
          </h4>
          <p></p>
          <contact-details></contact-details>
          <social-site></social-site>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue'
import SocialSite from './SocialSite.vue'

export default {
  name: "RequestQuote",

  components: {
    ContactDetails,
    SocialSite,
  },

  data() {
    return {
      themeColor: "#f57c00",
    }
  },

  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xs
    }
  }
}
</script>
