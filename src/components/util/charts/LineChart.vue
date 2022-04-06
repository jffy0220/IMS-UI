<template>
    <Line :chart-data="chartData" />
</template>



<script>

import { Line } from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

export default {
    name: 'LineChart',
    components: { Line },
    data () {
        return {
            chardData: {
                type: "Line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "october", "November", "December"],
                    datsets: [
                        {
                            label: "A-12-HP-C-230B",
                            data: [0, 500, 750, 1000, 800, 600, 300, 150, 500, 450, 300, 150],
                            backgroundColor: "rgba(54, 73, 93, .5)",
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    response: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginatZero: true,
                                    padding: 25
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
}
</script>