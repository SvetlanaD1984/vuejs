<script>
//import Chart from 'chart.js'
import { Doughnut } from 'vue-chartjs'

export default {
  name: "Diagram",
  extends:  Doughnut,
  data: () => ({
    chartdata: {
      labels: ['Sport', 'Education', 'Internet', 'Food', 'Transport'],
      datasets: [
        {
          label: 'Данные',
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(0, 206, 209)',
            'rgb(25, 25, 112)',
          ],
          data: [300, 50, 100, 450, 50]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
