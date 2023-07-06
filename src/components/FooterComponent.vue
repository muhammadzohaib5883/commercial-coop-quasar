<template>
  <!-- footer section start -->
    <div class="bg-dark q-py-md">
      <div class="row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-my-xs text-center">
          <q-img class="q-mx-sm" width="100px" src="/icons/app.png" />
          <q-img class="q-mx-sm" width="100px" src="/icons/google-play.png" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-my-xs text-center">
          <q-icon name="mark_as_unread" class="bg_white text-red-1 q-pa-sm radius q-ml-sm" size="25px" />
          <q-icon name="notifications_off" class="bg_white text-red-1 q-pa-sm radius q-ml-sm" size="25px" />
          <q-icon name="cell_tower" class="bg_white text-red-1 q-pa-sm radius q-ml-sm" size="25px" />
          <q-icon name="phone_enabled" class="bg_white text-red-1 q-pa-sm radius q-ml-sm" size="25px" />
        </div>
      </div>
    </div>
    <div class="bg-black text-red-1 text-center q-py-lg q-px-sm">
      Copyright © 2023 all rights reserved by TheCommercialCoop.com
      <br />
      Powered By NodeSol Corp
    </div>
  <!-- footer section end -->
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
     
    }
  }
}
</script>

<style scoped>
.radius {
  border-radius: 25px;
}
.bg_white {
  background-color: rgba(221, 213, 213, 0.301);
}
</style>
