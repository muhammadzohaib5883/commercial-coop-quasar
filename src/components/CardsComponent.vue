<template>
  <!-- cards section start -->
    <div class="row justify-center q-pa-xl q-col-gutter-xl">
      <div class="col-lg-3 col-xs-12 col-sm-12 col-md-6" v-for="card in cards">
        <div class="shadow-5 q-pa-sm">
          <div>
            <q-img height="200px" width="100%" :src="card.image" />
          </div>
          <div class="row q-py-sm">
            <div class="col-7 text-h6">{{ card.monthly_price }}</div>
            <div class="col-5 text-right">
              <q-btn :to="card.map_url" flat icon="map" label="MAP" />
            </div>
            <div class="text-subtitle1 q-pt-sm text-weight-bold text-red-10">
              {{ card.card_text }}
            </div>
            <div class="col-8 q-mt-sm text-h6">
              <q-btn :to="card.brochure_btn_url" flat icon="map" label="VIEW BROCHURE" />
            </div>
            <div class="col-4 text-right">
              <q-img width="100%" :src="card.card_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center q-my-md">
      <q-btn
        icon="search"
        @click="$emit('search', someData)"
        rounded
        class="bg-red-10 text-red-1 text-h6 button q-px-xl q-py-sm"
        label="SEARCH LISTING"
      />
    </div>
  <!-- cards section end -->
</template>

<script>
export default {
  name: 'CardsComponent',
  props: {
    cards: Array
  },
  data () {
    return {
      someData: 'new data from child component',
    }
  }
}
</script>

<style scoped>
</style>
