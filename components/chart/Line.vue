<template>
  <div>
    <client-only
      v-if="Object.keys(lineChartData).length"
      placeholder="Loading..."
    >
      <LineChart
        chart-id="my-chart-id"
        :chart-options="chartOptions"
        :chartData="chartData"
        :styles="{
          height: maxHeight + 'px',
        }"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    lineChartData: {
      type: Object,
      required: true,
      default: {},
    },
    maxHeight: {
      type: Number,
      default: 200,
    },
    type: {
      type: String,
      default: "",
    },
    legend: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        pointStyle: "rectRounded",
        hoverBackgroundColor: "#3FBF62",
        hoverBorderColor: "#3FBF62",
        barThickness: 3,
        hoverOffset: 4,
        elements: {
          point: {
            radius: 6,
            pointStyle: "circle",
            hoverRadius: 12,
          },
          line: {
            tension: 0.1,
            borderWidth: 1,
            fill: {
              target: "origin",
              above: "rgb(255, 0, 0)",
              below: "rgb(0, 0, 255)",
            },
          },
        },
        plugins: {
          legend: {
            title: {
              display: true,
              padding: 0,
              font: {
                weight: "600",
                size: 14,
              },
            },
            // rtl: true,
            position: "bottom",
            align: "start",
            display: false,
            labels: {
              pointStyle: "line",
              usePointStyle: true,
              textAlign: "start",
              padding: 14,
              color: "#00000099",
              boxWidth: 90,
              boxHeight: 9,
              font: {
                size: 12,
              },
            },
          },
          title: {
            align: "start",
          },
          tooltip: {
            backgroundColor: "#00317F",
            titleColor: "#fff",
            // bodyColor: "#eb3d34",
            bodyFont: {
              weight: "bold",
              size: 12,
            },
            padding: 5,
            displayColors: false,
          },
        },
        scales: {
          xAxes: {
            grid: {
              display: false,
              borderColor: ["rgba(229, 235, 244, 1)"],
            },
            ticks: {
              color: "#97A4C0",
              font: {
                size: 10,
                weight: "bold",
              },
            },
          },
          yAxes: {
            position: "left",
            grid: {
              borderDash: [5],
              drawBorder: false,
              drawTicks: true,
              // tickBorderDash: [100],
              tickLength: 15,
              tickColor: "transparent",
              borderColor: ["rgba(229, 235, 244, 1)"],
              color: ["rgba(229, 235, 244, 1)"],
            },
            ticks: {
              color: "#97A4C0",
              font: {
                size: 12,
                weight: "normal",
              },
            },
            min: 0,
            max: 0,
          },
        },
      },
    };
  },
  mounted() {
    // get labels
    this.chartData.labels = this.lineChartData[
      Object.keys(this.lineChartData)[0]
    ].map((item) => {
      return item.label;
    });
    var maxVal = [];
    Object.entries(this.lineChartData).forEach(([key, value], id) => {
      // get %data
      let percentData = value.map((item) => {
        return item.value;
      });
      // set data set
      this.chartData.datasets.push({
        data: percentData,
        backgroundColor: this.$getChartBg()[id],
        borderColor: this.$getChartBg()[id],
        // borderDash: [5],
      });
      // calc max val
      maxVal.push(Math.max(...percentData));
    });
    // get max yAxes
    this.chartOptions.scales.yAxes.max = Math.max(...maxVal) + 10;
  },
};
</script>