<template>
  <div id="app">
    <div class="map">
      <h4>Cornavirus Cases</h4>
    <MapChart
      :countryData="countryData"
      highColor="#ff0000"
      lowColor="#B8FCB4"
      countryStrokeColor="#B8FCB4"
      defaultCountryFillColor="#B8FCB4"
    />
    </div>
    <!-- https://github.com/maguayo/vue-map-chart/blob/master/src/App.vue -->
  </div>
</template>

<script>
import MapChart from "./components/Maps.vue";
import Api from "./api";

export default {
  name: 'App',
  components: {
    MapChart
  },
  data: () => ({
    loading: false,
    countryData: {}
  }),
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata(){
       let data = await Api.getData();
       this.filterData(data);
    },
    filterData(data) {
      // eslint-disable-next-line no-unused-vars
      let dataArr = data.map(obj => {
          let dat = { 
            "country": obj.countryInfo.iso2,
            "cases" : obj.cases,
            "deaths": obj.deaths,
            "recovered": obj.recovered,
            "critical": obj.critical
          };
          return dat;
      });

      let countryObj = dataArr.reduce((obj, item) => {
          obj[item.country] = item
          return obj
        }, {});

      this.countryData = countryObj;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.map {
  margin: auto;
  width: 70%;
}
</style>
