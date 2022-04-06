<template>
    <div>
        <ItemTable />
        <InventoryChart />
    </div>
</template>

<script>

import ItemTable from '../components/inventory/ItemTable.vue'
import InventoryChart from '../components/inventory/inventoryUtil/InventoryChart.vue'

export default ({
    name: 'InventoryView',
    components: {
        ItemTable,
        InventoryChart
    }
})
</script>

<style scoped>

</style>
