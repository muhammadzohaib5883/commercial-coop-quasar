<template>
  <!-- header section start -->
    <div class="bg_img q-pt-lg">
      <NavbarComponent />
      <div class="text-h4 q-pt-xl q-px-lg text-red-1 tex-weight-bold text-center">
        THE ONLY COMMERCIAL REAL
        <br />
        ESTATE TOOL YOU'LL EVER NEED...
      </div>
      <div class="row justify-center q-mt-xl">
        <div class="col-lg-8 col-xs-11">
          <div class="text-h6 text-red-1">
            Start Searching Denver and Mesa County Now!
          </div>
          <div class="row btn-center">
            <div class="white-bg">
              <q-btn-group class="">
                <q-btn class="text-h6 fs" color="red-10" glossy label="Search for Sale" />
                <q-btn class="text-h6 fs" glossy label="Search for Sale" />
                <q-btn class="text-h6 fs" glossy label="Search for Sale" />
              </q-btn-group>
            </div>
          </div>
          <div class="white-bg q-py-md q-px-md">
            <div class="row q-col-gutter-md">
              <div class="col-lg-3 col-xs-12">
                <q-select filled v-model="model" class="bg-white" :options="options" label="Select Property Type" />
              </div>
              <div class="col-lg-7 col-xs-12">
                <q-input filled v-model="text" class="bg-white" label="Location" >
                <template v-slot:label>
                  <div>
                    <q-icon
                      size="20px"
                      class="q-mb-sm"
                      name="home"
                    />
                    home page label
                  </div>
                </template>
                </q-input>
              </div>
              <div class="col-lg-2 col-xs-12 q-pt-md">
                <q-btn color="red-10" class="text-h6 q-px-lg full-width" label="Search" />
              </div>
            </div>
          </div>
          <div class="text-h6 text-red-1 text-right q-pt-md">
            <a href="" class="text-red-1 text-doc">Advance Search ></a>
          </div>
        </div>
      </div>
      <div class="text-center">
        <q-img style="width:80px;" src="icons/logo.webp" />
        <div class="text-h5 text-red-1 q-pt-sm">
          THE COMMERCIAL CO-OP
        </div>
      </div>
      <div class="bg-black text-red-1 q-py-md text-h6 text-center q-mt-lg">
        THE ONLY ALL IN ONE PLATFORM THAT CUTS BROKER TECH COSTS BY UP TO 70%
      </div>
      <!-- section section -->
      <div class="white-bg-2">
        <div class="q-px-xl text-red-10 text-weight-bold q-pt-xl" style="font-size: 28px">
          FINALLY, AN ALL IN ONE PLATFORM FOR COMMERCIAL SEARCHING, MARKETING AND COMMUNICATING FOR A FRACTION OF THE
          PRICE BROKERS PAY FOR <br /> MULTIPLE SUBSCRIPTIONS.
        </div>
        <div class="q-py-md q-px-lg">
          <ul class="text-h6">
            <li>Always FREE For Brokers To Upload Unlimited Listings To The Public Site</li>
            <li>Branded Brochure Generator With Imbedded Financial Calculator</li>
            <li>CMA Generator And Comps Platform</li>
            <li>Social Media Inspired Message Board To Post Clients Needs And Announcements</li>
            <li>Dynamic Dashboard With Live Search Updates</li>
            <li>Coming Soon - Industry Vendor Platform And Private Comp Organizer</li>
          </ul>
        </div>
      </div>
    </div>
  <!-- header section end -->
</template>

<script>
import NavbarComponent from './NavbarComponent.vue';
export default {
  name: "SearchBarComponent",
  data() {
    return {
      options: [
        "Google",
        "Facebook",
        "Twitter",
        "Apple",
        "Ora~assets/cle"
      ],
      // slide: ref(1)
    };
  },
  components: {
    NavbarComponent
  }
}
</script>

<style scoped>
.bg_img {
  background: linear-gradient(0deg, #000000a6, #000000a6),
    url('/icons/coop-background-img.webp');
  width: 100%;
  background-size: cover;
}
.white-bg {
  background: #fffefe78 !important;
  /*background: #fffefe78!important;*/
}
.white-bg-2 {
  background: #fffcfc85 !important;
}
@media screen and (max-width: 599px) {
  .fs {
    font-size: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .btn-center {
    justify-content: center;
    text-align: center;
  }
}
.text-doc {
  text-decoration: none;
}
</style>
