<template>
  <div
    :style="`width: 100%; flex: auto; height: 200px; max-width: ${maxWidth}%`"
  >
    <client-only v-if="pieChartData.length" placeholder="Loading...">
      <PieChart
        chart-id="my-chart-id"
        :chart-options="chartOptions"
        :chartData="chartData"
        :styles="{
          height: '100%',
        }"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    pieChartData: {
      type: Array,
      required: true,
      default: [],
    },
    cutout: {
      type: Number || String,
      default: 0,
    },
    maxWidth: {
      type: Number || String,
      default: 70,
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
        hoverBackgroundColor: "#3FBF62",
        hoverBorderColor: "#3FBF62",
        // circumference: 360,
        rotation: 240,
        cutout: this.cutout,
        spacing: 0,
        offset: 0,
        hoverOffset: 2,
        weight: 50,
        animation: {
          animateScale: true,
        },
        radius: "95%",
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
            position: "right",
            align: "center",
            display: false,
            labels: {
              pointStyle: "circle",
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
      },
    };
  },
  mounted() {
    // get labels
    this.chartData.labels = this.pieChartData.map((item) => {
      return item.label;
    });
    // get %data
    let percentData = this.pieChartData.map((item) => {
      return item.value;
    });
    // get colors
    let colors = this.pieChartData.map((item) => {
      return item.color;
    });
    this.chartData.datasets.push({
      data: percentData,
      backgroundColor: colors,
    });
  },
};
</script>