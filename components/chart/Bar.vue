<template>
  <div>
    <client-only v-if="barChartData" placeholder="Loading...">
      <BarChart
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
    barChartData: {
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
        barThickness: 20,
        borderRadius: 4,
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
              display: false,
              padding: 0,
              font: {
                weight: "600",
                size: 14,
              },
            },
            // rtl: true,
            position: "bottom",
            align: "start",
            display: this.legend,
            labels: {
              pointStyle: "circle",
              usePointStyle: true,
              textAlign: "start",
              padding: 24,
              color: "#00317F",
              boxWidth: 8,
              boxHeight: 8,
              font: {
                size: 10,
                weight: "400",
              },
            },
          },
          title: {
            align: "start",
          },
          tooltip: this.$getChartOptions().tooltip,
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
      backgroundColors: ["#0062FF", "#FFB46F", "#00317F", "#ECF3FF"],
    };
  },

  mounted() {
    // get labels
    this.chartData.labels = this.barChartData[
      Object.keys(this.barChartData)[0]
    ].map((item) => {
      return item.label;
    });
    var maxVal = [];
    Object.entries(this.barChartData).forEach(([key, value], id) => {
      // get %data
      let percentData = value.map((item) => {
        return item.value;
      });
      // set data set
      this.chartData.datasets.push({
        data: percentData,
        label: key,
        backgroundColor: this.backgroundColors[id],
        borderColor: this.backgroundColors[id],
        // borderDash: [5],
      });
      // calc max val
      maxVal.push(Math.max(...percentData));
    });
    // get max yAxes
    this.chartOptions.scales.yAxes.max = Math.max(...maxVal) + 30;
    if (this.type === "payment") {
      this.chartOptions.scales.yAxes.max = Math.max(...maxVal) + 1000;
      // set yAxis
      Object.assign(this.chartOptions.scales.yAxes.ticks, {
        callback: function (value, index, ticks) {
          if (!value) return value;
          let samp = value.toString();
          if (value > 999 && value < 999999) {
            return samp.slice(0, samp.length - 3) + "K";
          } else if (value > 999999 && value < 999999999) {
            return samp.slice(0, samp.length - 6) + "M";
          } else {
            return samp.slice(0, samp.length - 9) + "B";
          }
        },
      });
      // set tooltip
      Object.assign(this.chartOptions.plugins.tooltip, {
        callbacks: {
          label: (tooltipItem) => {
            return this.$formatNairaCurrency(Number(tooltipItem.parsed.y));
          },
        },
      });
    }
  },
};
</script>