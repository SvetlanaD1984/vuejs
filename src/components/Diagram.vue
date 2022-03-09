<template>
  <div>diagram Costs by categories</div>
</template>

<script>
import DoughnutChart from "vue-doughnut-chart";

export default {
  name: "Diagram",
  components: {
    DoughnutChart,
  },
};

const config = {
  type: "doughnut",
  data: data,
};

const data = {
  labels: ["Sport", "Education", "Internet", "Food", "Transport"],
  datasets: [
    {
      label: "Costs by categories",
      data: [300, 50, 100, 200, 450],
      backgroundColor: ["#FF6384", "#63FF84", "#84FF63", "#8463FF", "#6384FF"],
      hoverOffset: 4,
    },
  ],
};
</script>

<style></style>
