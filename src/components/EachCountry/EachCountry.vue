<template>
  <div id="countryList">
    <v-card
      class="countryWrapp"
      v-for="country in countryList"
      :key="country.country"
      hover
      max-width="500px"
    >
      <v-img
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        :src="country.countryInfo.flag"
        max-height="300px"
        heigth="100%"
      >
        <v-card-title>{{ country.country }}</v-card-title>
      </v-img>
      <v-card-text><span>Cases: </span>{{ country.cases }}</v-card-text>
      <v-card-text
        ><span>Today cases: </span>{{ country.todayCases }}</v-card-text
      >
      <v-card-text><span>Deaths: </span>{{ country.deaths }}</v-card-text>
      <v-card-text
        ><span>Today deaths: </span>{{ country.todayDeaths }}</v-card-text
      >
      <v-card-text><span>Recovered: </span>{{ country.recovered }}</v-card-text>
      <v-card-text
        ><span>Deaths per one million: </span
        >{{ country.deathsPerOneMillion }}</v-card-text
      >
    </v-card>
  </div>
</template>

<script>
import EachCountryModel from './EachCountry';
export default {
  name: 'EachCountry',

  data() {
    return {
      countryList: [],
    };
  },

  mounted() {
    this.getInitialData();
  },

  methods: EachCountryModel,
};
</script>

<style lang="scss" scoped>
#countryList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.countryWrapp {
  margin: 10px;
  width: 250px;

  @media (max-width: 450px) {
    width: 100%;
  }
}
</style>
