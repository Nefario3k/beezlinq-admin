<template>
  <canvas style="height: 100%" ref="barChart" id="myChart"></canvas>
</template>


<script>
export default {
  props: {
    chartData: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const url = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

    fetch(url)
      .then((result) => result.json())
      .then((datapoint) => {
        // countries
        const countries = ChartGeo.topojson.feature(
          datapoint,
          datapoint.objects.countries
        ).features;
        // labels
        const labels = countries.map((element) => {
          return element.properties.name;
        });
        // filter value
        var getValue = (val) => {
          var returnedVal = 0;
          this.chartData.forEach((element) => {
            if (element.title.toLowerCase() === val.toLowerCase()) {
              returnedVal = element.users;
            }
          });
          return returnedVal;
        };
        // datasets
        const data = countries.map((element) => ({
          feature: element,
          value: getValue(element.properties.name),
        }));
        // background
        const getBackground = (data) => {
          // let sum = data.reduce(function (accumulator, currentValue) {
          //   return accumulator + currentValue.value;
          // }, 0);

          var colors = data.map((element) => {
            return this.$getChartColor(element.value);
            // var percent = (element.value / sum) * 100;
            // if (element.value) {
            //   return `rgba(0, 49, 127, ${percent})`;
            // } else {
            //   return "rgba(236, 239, 255, 1)";
            // }
          });
          return colors;
        };

        // chart
        const ctx = this.$refs.barChart;
        new Chart(ctx, {
          type: "choropleth",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Countries",
                data: data,
                backgroundColor: getBackground(data),
                borderColor: "rgba(39, 59, 74, 0.5)",
              },
            ],
          },
          options: {
            ...this.$getChartOptions().basicVal,
            showOutline: false,
            showGraticule: false,
            legendSize: {
              w: 100,
              h: 2,
            },
            scales: {
              xy: {
                projection: "equalEarth",
                grid: {},
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: this.$getChartOptions().tooltip,
            },
          },
        });
      });
  },
};
</script>
