<template>
  <q-page>
    <div class="bg_img q-py-lg">
      <NavbarComponent />
      <div class="text-h3 text-center q-pt-xl">
        <div class="text-red-1">CONTACT</div>
        <div class="text-yellow">
          THE COMMERCIAL CO-OP.TM
        </div>
      </div>
    </div>
    <div class="q-pt-xl text-h3 text-weight-bold q-pl-xl">
      DON'T BE SHY, <span class="text-red-10">SAY HI</span>
    </div>
    <div class="q-ml-xl q-mt-md" style="border: 2px solid orange; width:45%;"></div>
    <div class="q-pt-xl q-mx-xl text-h6">
      Get fast & extensive assistance from our expert support engineers. Ask a question on our form, and we will get back
      to you, ASAP. Our Management Team also sees these comments, so no matter your topic, this is the spot to reach out
      to us and we will make sure you get a helpful and prompt response.
    </div>
      <div class="row q-pa-xl q-my-lg q-col-gutter-lg">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-mt-xl">
        <q-input class="" label="Your Name" filled />
        <q-input class="q-mt-lg" label="Your Phone Number" filled />
        <q-input class="q-mt-lg" label="Your Email ID" filled />
        <q-input class="q-mt-lg" label="Subject:" filled />
        <q-input class="q-mt-lg" placeholder="Your Comments" v-model="text" filled type="textarea"/>
        <div class="text-center q-mt-lg">
          <q-btn label="LEAVE A COMMENT" class="bg-red-10 text-red-1" rounded />
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-mb-xl">
        <q-img width="100%" src="/icons/contact-support.jpg" />
      </div>
    </div>
    <div class="bg_color q-py-xl">
      <div class="rotate q-py-xl q-pa-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="bg-white q-pa-xl text-center rounded-borders">
              <q-icon size="50px" name="mail" />
              <div class="text-h5 text-weight-bold">
                CALL US
              </div>
              <div class="q-pt-lg text-h6">
                +1 303-586-5707
              </div>
              <div class="text-h6">
                +1 303-586-5707
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="bg-white q-pa-xl text-center rounded-borders">
              <q-icon size="50px" name="mail" />
              <div class="text-h5 text-weight-bold">
                CALL US
              </div>
              <div class="q-pt-lg text-h6">
                +1 303-586-5707
              </div>
              <div class="text-h6">
                +1 303-586-5707
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="bg-white q-pa-xl text-center rounded-borders">
              <q-icon size="50px" name="mail" />
              <div class="text-h5 text-weight-bold">
                CALL US
              </div>
              <div class="q-pt-lg text-h6">
                +1 303-586-5707
              </div>
              <div class="text-h6">
                +1 303-586-5707
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt q-pb-xl q-mx-lg">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
        <div class="text-h3 text-weight-bold">NUMBERS SPEAK <span class="text-red-10">VOLUMES</span></div>
        <div class="text-h3">We're a Startup... Stay Tuned!</div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="row justify-center">
          <div class="text-center">
            <q-icon size="100px" name="mail" />
            <div class="text-h5 text-red-10 text-weight-bold">
              25,685
            </div>
            <div class="text-h5">
              SALE
            </div>
          </div>
          <div class="text-center">
            <q-icon size="100px" name="mail" />
            <div class="text-h5 text-red-10 text-weight-bold">
              25,685
            </div>
            <div class="text-h5">
              SALE
            </div>
          </div>
          <div class="text-center">
            <q-icon size="100px" name="mail" />
            <div class="text-h5 text-red-10 text-weight-bold">
              25,685
            </div>
            <div class="text-h5">
              SALE
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-teal-1">
      <div class="q-pa-xl">
        <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
    <FooterComponent/>
  </q-page>
</template>

<script>
import NavbarComponent from 'src/components/NavbarComponent.vue';
import FooterComponent from 'src/components/FooterComponent.vue';
export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.bg_img {
  background: linear-gradient(0deg, #000000a6, #000000a6),
    url('/icons/coop-background-img.webp');
  width: 100%;
  background-size: cover;
  background-position: 50%;
}
.bg_color {
  background-image: linear-gradient(to bottom right, #360e42, #9c1637);
  transform: skew(0deg, -5deg);
}
.rotate {
  transform: skew(0deg, 5deg);
}
.pt {
  padding-top: 150px;
}
</style>
