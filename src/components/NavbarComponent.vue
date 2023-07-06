<template>
  <!-- navbar section start -->
  <div class="text-center">
    <q-img :class="$q.screen.lt.md ? 'float-left' : ''" style="width:40px" class="q-mb-xs" src="/icons/logo.webp" />
    <span :class="$q.screen.lt.md ? 'float-left' : ''" class="text-h6 text-red-1"> THE COMMERCIAL CO-OP</span>
    <q-btn :class="$q.screen.lt.md ? 'float-right' : 'hidden'" flat dense round icon="menu" aria-label="Menu"
      @click="toggleLeftDrawer" class="text-red-1" />
  </div>
  <q-drawer v-if="$q.screen.lt.md" style="background-color: #1d1d1d; color:white;" v-model="leftDrawerOpen" bordered
    side="right" show-if-above>
    <q-list>
      <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link"
        class="text-center text-subtitle1 q-py-md" style="border-top: 1px solid #0000001f;" />
    </q-list>
  </q-drawer>
  <q-tabs :class="$q.screen.lt.md ? 'hidden' : ''" v-model="tab" no-caps class="text-orange q-px-;g">
    <q-route-tab to="/" label="HOME" />
    <q-route-tab to="/search-for-sale" name="alarms" label="SEARCH FOR SALE" />
    <q-route-tab to="/search-for-lease" name="movies_1" label="SEARCH FOR LEASE" />
    <q-route-tab to="/search-for-comps" name="movies_2" label="SEARCH FOR COMPS" />
    <q-route-tab to="/message-board" name="movies_3" label="MASSAGE BOARD" />
    <q-route-tab to="/content-us" name="movies_4" label="CONTACT US" />
    <q-route-tab to="/about-us" name="movies_5" label="ABOUT US" />
    <q-route-tab to="/sign-in" name="movies_6" label="SIGN-IN" />
    <q-btn label="JOIN THE BETE BROKER GROUP" class="bg-red-10 text-red-1" />
  </q-tabs>
  <!-- navbar section end -->
</template>

<script>
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'HOME',
    link: '/'
  },
  {
    title: 'SEACRCH FOR SALE',
    link: '/search-for-sale',
  },
  {
    title: 'SEACRCH FOR SALE',
    link: '/search-for-lease'
  },
  {
    title: 'SEACRCH FOR COMPS',
    link: '/search-for-comps'
  },
  {
    title: 'MESSAGE BOARD',
    link: '/message-board'
  },
  {
    title: 'CONTENT US',
    link: '/content-us'
  },
  {
    title: 'ABOUT US',
    link: '/about-us'
  },
  {
    title: 'LOGIN',
    link: '/sign-in'
  }
]
export default {
  name: 'NavbarComponent',

  setup() {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      model: ref(null),
      slide: ref(1)
    }
  },
  components: {
    EssentialLink
  }
}
</script>

<style scoped>

</style>
