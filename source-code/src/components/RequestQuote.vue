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

        <v-form v-if="showForm">
          <v-row>
            <v-col class=" text-h6" cols="12" sm="6">
              <v-text-field
                :color="themeColor"
                label="Subject"
                v-model="form.subject"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Your Name *"
                v-model="form.name"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Company Name *"
                v-model="form.companyName"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Product Requested"
                v-model="form.productRequested"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Shipping Destination *"
                v-model="form.destination"
                required
              ></v-text-field>
            </v-col>

          <v-col>
            <div class=" text-h6">
              <v-text-field
                :color="themeColor"
                label="Your Location"
                v-model="form.location"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Your Email *"
                v-model="form.email"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Phone Number"
                v-model="form.phoneno"
                required
              ></v-text-field>
              <v-text-field
                :color="themeColor"
                label="Quantity (Metric Tons)"
                v-model="form.quantity"
                required
              ></v-text-field>
            </div>
          <div class=" ma-0">
            <span class="text--secondary">Sale Term *</span>
        <v-row class="ma-0">
        <v-checkbox class=" mt-0 mr-1"
          label="FOB"
          value="FOB"
          v-model="form.saleTerm"
          dense
          :color="themeColor"
          hide-details
        ></v-checkbox>
        <v-checkbox class=" ma-0 mr-1"
          dense
          label="CIF"
          value="CIF"
          v-model="form.saleTerm"
          :color="themeColor"
          hide-details
        ></v-checkbox>
        <v-checkbox class=" ma-0"
          dense
          label="CNF"
          value="CNF"
          v-model="form.saleTerm"
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
            v-model="form.message"
            :color="themeColor"
            rows="3"
            auto-grow
            outlined>
          </v-textarea>
          <div class="d-flex flex-row">            
            <v-btn :to="{name: 'home'}" color="error">Cancel</v-btn>
                <v-spacer></v-spacer>
            <v-btn @click="submit" :disabled="loading" :loading="loading" :color="themeColor">Send</v-btn>
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
    <v-snackbar :timeout="5000" v-model="snackbar" top :color="snackType">
      {{ snackMessage }}
    </v-snackbar>
  </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue'
import SocialSite from './SocialSite.vue'
import { apiClient } from "@/services"

export default {
  name: "RequestQuote",

  components: {
    ContactDetails,
    SocialSite,
  },

  data() {
    return {
      themeColor: "#f57c00",
      form: {saleTerm: []},
      showForm: true,
      loading: false,
      snackbar: false,
      snackMessage: '',
      snackType: '',
    }
  },

  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xs
    }
  },

  methods: {
    setAlert(message, type){
      this.snackbar = true;
      this.snackMessage = message;
      this.snackType = type;
    },
    submit(){
      this.loading = true;      
      this.form.saleTerm = this.form.saleTerm.join(', ') 
      // console.log(this.form)
      apiClient
        .post('/quote.php', this.form)
        .then(res => {
          console.log(res.data)
          if (res.data.ok) {
            this.showForm = false;
            this.setAlert('Thank you. We will get back to you. You will be redirected soon.','success')
            setTimeout(()=> this.$router.push('/'), 5000)
          } else {
            this.loading = false;
            this.setAlert(res.data, 'error')
          }
        })
        .catch(err => {
          this.loading = false;
          this.setAlert(err.message, 'error')
        });
    }
  }
}
</script>
