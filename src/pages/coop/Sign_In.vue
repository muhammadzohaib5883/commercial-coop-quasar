<template>
  <q-page class="flex flex-center">
    <div class="bg_img">
      <div class="q-pa-sm">
        <div style="background-color: white; width: 400px">
          <div class="q-pa-xl">
            <div class="text-center">
              <q-img style="width: 50px" class="q-mb-xs" src="/icons/logo.webp" />
              <span class="text-h6"> THE COMMERCIAL CO-OP</span>
            </div>
            <div class="q-pt-lg">
              <q-input color="" v-model="text" label="Email">
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </div>
            <div class="q-pt-lg">
              <q-input color="" v-model="text" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </div>
            <div class="q-pt-lg">
              <q-btn label="Login" class="bg-red-10 text-red-1 text-h6 full-width" icon="lock" />
            </div>
            <div class="q-pt-lg">
              <q-btn label="Join The Beta Broker Group" class="bg-black text-red-1 full-width" />
            </div>
            <div class="row q-pt-lg">
              <div class="col-6">Forget Password</div>
              <a href="/" class="col-6 text-right">Go To Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

</script>

<style scoped>
.bg_img {
  background: url('/icons/coop-background-img.webp');
  width: 100%;
  background-size: cover;
  background-position: 50%;
  height: 100vh;
  /* display: flex; */
}
</style>
