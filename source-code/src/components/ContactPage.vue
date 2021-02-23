<template>
  <div>
    <v-row class="mx-auto" title="Best Charcoal, Sesame Seeds, Shea Butter, Dried Cashew Nuts, Peanuts, contact agrosavvy">
      <v-col cols="12" sm="6"   order="3" order-sm="1">
        <div class="contact">
          <h2>
            Contact Us:
          </h2>
          <br>
          <contact-details></contact-details>
          <social-site></social-site>
        </div>
      </v-col>
        
      <v-col cols="12" sm="6" order="2">
        <v-card elevation="6">
          <v-container>
            <v-form v-if="showForm">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                title="Agrosavvy need your name"
                :color="themeColor"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Your E-mail"
                title="Agrosavvy need your email"
                :color="themeColor"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.phoneno"
                label="Your Phone Number"
                title="Agrosavvy need your phone number"
                :color="themeColor"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.subject"
                label="Subject"
                title="Agrosavvy need to know the subject of your message "
                :color="themeColor"
                required
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                rows="3"
                auto-grow
                :color="themeColor"
                label="Message"
                title="Agrosavvy need your message to serve you better"
                required
              ></v-textarea>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn :to="{name: 'home'}" color="error">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="submit" :disabled="loading" :loading="loading" dark>Submit</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
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
  name: "ContactPage",
  components: {
                ContactDetails,
                SocialSite,
              },

  data: () => ({
    themeColor: "#f57c00",
    form: {},
      showForm: true,
      loading: false,
      snackbar: false,
      snackMessage: '',
      snackType: '',
  }),
  methods: {
    setAlert(message, type){
      this.snackbar = true;
      this.snackMessage = message;
      this.snackType = type;
    },
    submit(){
      this.loading = true;
      // console.log(this.form)
      apiClient
        .post('/contact.php', this.form)
        .then(res => {
          // console.log(res.data)
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

<style>
  .contact {
    border: 3px solid#f57c00;
    border-radius: 35px;
    margin: 25px;
    padding: 10px;
    text-align: center;
  }
</style>