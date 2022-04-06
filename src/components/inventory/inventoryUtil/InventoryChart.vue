<template>
    <div>
        <div class="mb-3 overflow-hidden card">
            <div class="p-0 bg-light card-header">
                <div class="nav-tabs border-0 flex-nowrap chart-tab nav card-header-undefined" role="tablist">
                    <!-- Available, On Hand, On Order, On Purchase -->
                    <div class="nav-item">
                        <a role="tab" data-rr-ui-event-key="users" id="audience-tab-tab-users" aria-controls="audience-tab-tabpane-users" class="mb-0 nav-link active" aria-selected="true">
                            <div class="p-2 pe-4 text-start cursor-pointer">
                                <h6 class="text-800 fs--2 text-nowrap">Available</h6>
                                <h5 class="text-800">300</h5>
                                <div class="d-flex align-items-center"> <!-- Don't know if this is even needed -->
                                    <span class="fa-caret fa-w-10 text-success"></span>
                                    <h6 class="fs--2 mb-0 ms-2 text-success">30.3%</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a role="tab" data-rr-ui-event-key="users" id="audience-tab-tab-users" aria-controls="audience-tab-tabpane-users" class="mb-0 nav-link" aria-selected="false">
                            <div class="p-2 pe-4 text-start cursor-pointer">
                                <h6 class="text-800 fs--2 text-nowrap">On Hand</h6>
                                <h5 class="text-800">450</h5>
                                <div class="d-flex align-items-center"> <!-- Don't know if this is even needed -->
                                    <span class="fa-caret fa-w-10 text-success"></span>
                                    <h6 class="fs--2 mb-0 ms-2 text-success">1.3%</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a role="tab" data-rr-ui-event-key="users" id="audience-tab-tab-users" aria-controls="audience-tab-tabpane-users" class="mb-0 nav-link" aria-selected="false">
                            <div class="p-2 pe-4 text-start cursor-pointer">
                                <h6 class="text-800 fs--2 text-nowrap">On Order</h6>
                                <h5 class="text-800">150</h5>
                                <div class="d-flex align-items-center"> <!-- Don't know if this is even needed -->
                                    <span class="fa-caret fa-w-10 text-success"></span>
                                    <h6 class="fs--2 mb-0 ms-2 text-success">5.3%</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a role="tab" data-rr-ui-event-key="users" id="audience-tab-tab-users" aria-controls="audience-tab-tabpane-users" class="mb-0 nav-link" aria-selected="false">
                            <div class="p-2 pe-4 text-start cursor-pointer">
                                <h6 class="text-800 fs--2 text-nowrap">On Purchase</h6>
                                <h5 class="text-800">1500</h5>
                                <div class="d-flex align-items-center"> <!-- Don't know if this is even needed -->
                                    <span class="fa-caret fa-w-10 text-success"></span>
                                    <h6 class="fs--2 mb-0 ms-2 text-success">0%</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="tab-content">
                    <!-- We probably need multiple tabs that can be switched based on -->
                    <div role="tabpanel" id="audience-tab-tabpane-users" aria-labelledby="audience-tab-tab-users" class="fade tab-pane active show">
                        <Line :chartId="chardId" :chartData="chartData" />
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <!-- This card will be for inventory alerts, etc. -->
        </div>
    </div>
</template>

<script>

import Line from '../../util/charts/LineChart.vue'

export default ({
    name: 'InventoryChart',
    components: {
        Line
    }, 
    data () {
        return {
            chartId: "inventory-line-chart",
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
})
</script>

<style scoped>

</style>