<template>
  <q-page>
    <SearchBarComponent />
    <SliderComponent />
    <ThreeCardsComponent />
    <CardsComponent :cards="cards" @search="getSearchData"/>
    <FooterComponent />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SearchBarComponent from 'src/components/SearchBarComponent.vue';
import SliderComponent from 'src/components/SliderComponent.vue';
import CardsComponent from 'src/components/CardsComponent.vue';
import FooterComponent from 'src/components/FooterComponent.vue';
import ThreeCardsComponent from 'src/components/ThreeCardsComponent.vue';

export default defineComponent({
  name: 'MainLayout',
  // name: 'SearchBarComponent',
  // name: 'SliderComponent',
  components: {
    SearchBarComponent,
    SliderComponent,
    CardsComponent,
    FooterComponent,
    ThreeCardsComponent,
  },
  data() {
    return {
      cards: [
        {
          image: "/icons/card-image-1.jpg",
          monthly_price: "$20.00 /Monthly",
          map_url: "",
          card_text: "360 W Park Drive, Grand Junction, CO 81505",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
        {
          image: "/icons/card-image-2.png",
          monthly_price: "$1,000,000.00",
          map_url: "",
          card_text: "433 South Ave., Grand Junction, CO 81501",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
        {
          image: "/icons/card-image-3.jpg",
          monthly_price: "$1,000,000.00",
          map_url: "",
          card_text: "433 South Ave., Grand Junction, CO 81501",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
        {
          image: "/icons/card-image-4.jpeg",
          monthly_price: "$1,000,000.00",
          map_url: "",
          card_text: "433 South Ave., Grand Junction, CO 81501",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
        {
          image: "/icons/card-image-5.jpg",
          monthly_price: "$1,000,000.00",
          map_url: "",
          card_text: "433 South Ave., Grand Junction, CO 81501",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
        {
          image: "/icons/card-image-6.jpg",
          monthly_price: "$1,000,000.00",
          map_url: "",
          card_text: "433 South Ave., Grand Junction, CO 81501",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
        {
          image: "/icons/card-image-7.jpg",
          monthly_price: "$1,000,000.00",
          map_url: "",
          card_text: "433 South Ave., Grand Junction, CO 81501",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
        {
          image: "/icons/card-image-8.jpg",
          monthly_price: "$1,000,000.00",
          map_url: "",
          card_text: "433 South Ave., Grand Junction, CO 81501",
          brochure_btn_url: "",
          card_icon: "/icons/c-1.png"
        },
      ]
    }
  },
  methods: {
    getSearchData(props) {
      alert(props);
    }
  }
})
</script>


