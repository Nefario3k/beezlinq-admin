<template>
  <div>
    <client-only v-if="chartData" placeholder="Loading...">
      <LineChart
        chart-id="my-chart-id"
        :chart-options="chartOptions"
        :chartData="chartData"
        :styles="{}"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineChartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "John Doe",
            backgroundColor: "#ff0099",
            borderColor: "#ff0099",
            borderWidth: "0",
            borderJoinStyle: "round",
            data: [40, 39, 10, 40, 39, 80, 40, 30, 10, 20, 30, 40],
          },
          {
            label: "Jane Doe",
            backgroundColor: "#ff9900",
            borderColor: "#ff9900",
            borderWidth: "0",
            borderJoinStyle: "round",
            data: [20, 9, 80, 90, 29, 58, 80, 20, 30, 40, 55, 75],
          },
          {
            label: "Jack Doe",
            backgroundColor: "#999999",
            borderColor: "#999999",
            borderWidth: "0",
            borderJoinStyle: "round",
            data: [10, 24, 42, 50, 69, 10, 20, 70, 89, 45, 35, 42],
          },
        ],
      },
      chartData: {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [
          {
            data: [7, 3, 15, 9, 10, 3, 6],
            backgroundColor: "#0062FF",
            borderColor: "#0062FF",
            // borderDash: [5],
          },
          {
            data: [5, 8, 9, 12, 14, 5, 15],
            backgroundColor: "#FF993A",
            borderColor: "#FF993A",
          },
        ],
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
            },
          },
          yAxes: {
            position: "left",
            grid: {
              borderDash: [5],
              drawBorder: false,
              drawTicks: true,
              // tickBorderDash: [100],
              tickLength: 30,
              tickColor: "transparent",
              borderColor: ["rgba(229, 235, 244, 1)"],
              color: ["rgba(229, 235, 244, 1)"],
            },
            min: 0,
            max: 20,
          },
        },
      },
    };
  },
};
</script>