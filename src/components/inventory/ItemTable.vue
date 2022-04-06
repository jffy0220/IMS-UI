<template>
    <div class="mb-3 card">
        <div class="border-bottm border-200 card-header">
            <div class="align-items-end g-2 row">
                <div class="col">
                    <div class="d-flex">
                        <h5 class="mb-0" id="searchableTable">Inventory</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div role="tabpanel" id="vue-tabpane-preview" aria-labelledby="vue-tabpane-preview" class="fade tab-pane active show">
                    <div>
                        <div class="flex-end-center mb-3 row">
                            <div class="col-lg-4 col-sm-6 col-auto">
                                <div class="position-relative input-group">
                                    <input placeholder="Search..." type="search" id="search" class="shadow-none form-control form-control-sm" value>
                                    <!-- This is where the hourglass would go -->
                                </div>
                            </div>
                        </div>
                        <div data-simplebar="init">
                            <table class="table table-hover">
                                <thead>
                                    <!-- Example data for now, will update later -->
                                    <tr>
                                        <td>Item Name</td>
                                        <td>On Hand</td>
                                        <td>Available</td>
                                        <td>On Order</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A-12-HP-C-230B</td>
                                        <td>230</td>
                                        <td>200</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>DIY-12-HP-WMAH-230B</td>
                                        <td>500</td>
                                        <td>400</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center fs--1">
                                    <p class="mb-0">
                                        <span class="d-none d-sm-inline-block me-2">1 to 5 of 15</span>
                                    </p>
                                    <p class="mb-0 mx-2">Rows per page:</p>
                                    <select class="w-auto form-select form-select-sm">
                                        <option value="5" selected>5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                    </select>
                                </div>
                                <div class="d-flex">
                                    <button type="button" class="disabled btn btn-light btn-sm">Previous</button>
                                    <button type="button" class="px-4 ms-2 btn btn-primary btn-sm">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    name: 'Item',
    components: {
    },
    data () {
        return {
            
        }
    }
})
</script>

<style scoped>

</style>
