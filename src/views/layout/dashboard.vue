<template>
  <div>
    <v-chart :options="lineData"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineData: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>