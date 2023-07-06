<template>
    <div class="bg-black text-red-1 q-py-md text-h6 text-center">
      THE COMMERCIAL CO-OP PACKAGES:
    </div>
    <!-- three cards section start -->
    <div class="cards_image q-pt-xl">
      <div class="text-h4 q-px-lg text-red-1">
        THROUGHOUT THE COLORADO LAUNCH, ENJOY THE FULL SITE FOR FREE! STARTING Q3 2022, KEEP AN EYE OUT FOR SPECIAL
        RATES FOR EARLY SUBSCRIBERS WITH EXTENDED TRIAL PERIODS LEADING TO OUR 2023 PRICING SCHEDULE:
      </div>
      <div class="row q-mt-lg q-col-gutter-md q-pa-xl">
        <div class="col-lg-4 col-xs-12 col-sm-12 col-md-4" v-for="(card,index) in cards">
          <div class="cards_color rounded-borders q-pa-lg">
            <div class="text-h5 text-weight-bold text-red-10">
              {{ card.heading_card }}
            </div>
            <p class="text-weight-bold text-subtitle1">
              {{ card.month }}
            </p>
            <p class="text-weight-bold text-subtitle1">
              {{ card.platform_month }}
            </p>
            <p :class="index == 2 ? 'mb' : ''" class="text-weight-bold text-subtitle1">
              {{ card.full_platform }}
            </p>
            <p :class="index == 2 ? 'mb' : ''" class="text-h5 text-red-10 text-weight-bold">
              {{ card.include }}
            </p>
            <ul class="text-subtitle1 text-weight-bold">
              <li>{{ card.li_1 }}</li>
              <li>{{ card.li_2 }}</li>
              <li>{{ card.li_3 }}</li>
              <li>{{ card.li_4 }}</li>
              <li  :class="index == 0 ? 'q-pb-xl': index == 1 ? 'q-pb-md' : ''">{{ card.li_5 }}</li>
              <li v-if="card.li_6">{{ card.li_6 }}</li>
              flex flex-center     </ul>
            <div class="text-center button_margin">
              <q-btn :class="index == 3 ? 'q-mt' : '' " class="bg-red-10 text-red-1 full-width" label="JOIN THE BETA BROKER GROUP" />
            </div>
          </div>
        </div>
      </div>
      <!-- three cards section end -->
      <div class="bg-black text-red-1 q-py-md q-mt-xl text-h6 text-center">
        THE COMMERCIAL CO-OP PACKAGES:
      </div>
    </div>
</template>

<script>
export default {
  name: 'ThreeCardsComponent',
  data() {
    return {
      cards: [
        {
          heading_card: "ALWAYS FREE",
          li_1: "Broker Property Listing Input Unlimited and Always Free",
          li_2: "Free Searching for Commercial Properties",
          li_3: "Free View of Public Co-Opportunity Board Posts of Broker Needs and Announcements.",
          li_4: "Create Detailed Profile for Interactive Dashboard",
          li_5: "Share Listings with one click to Clients and Social Media Platforms",
          // li_1: 'q-pt-lg',
        },
        {
          heading_card: "CO-OPPORTUNITY MESSAGE BOARD:",
          month: "$19.95/MONTH",
          li_1: "Unlimited Posting and Direct Messaging",
          li_2: "Unlimited Property Listing Input and all features from Free Service.s",
          li_3: "Unlimited Posting of Haves, Wants, Needs and Announcements, Off Market Opportunities, Job Openings and other Real Estate News!",
          li_4: "Direct Messaging on Current and Past Posts",
          li_5: "Easily link Listings to Posts for Public View"
        },
        {
          heading_card: "FULL PLATFORM:",
          platform_month: "$199/MONTH",
          include: "INCLUDES:",
          full_platform: "All inclusive experience that will free Brokers from multiple subscriptions on day one.",
          li_1: "Branded Brochure Generator",
          li_2: "CMA Platform with Comps Searching",
          li_3: "IDX Broker Website Interface",
          li_4: "Co-Opportunity Message Board",
          li_5: "Coming Soon: Private Lease Comp Option!",
          li_6: ".... and so much more!"
        },
      ]
    }
  }
}
</script>

<style scoped>
.cards_image {
  background-image: url('/icons/cards-image.webp');
}
.cards_color {
  background: #ffffffb8;
}
.button_margin {
  margin-top: 100px;
  /* margin-bottom: 0px; */
}
.mb {
  margin-top: -17px;
}
</style>
