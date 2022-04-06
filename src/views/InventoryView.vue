<template>
    <div class="itemList">
        <Item />
    </div>
</template>

<script>

import Item from '../components/inventory/Item.vue'

export default ({
    name: 'InventoryView',
    components: {
        Item
    }
})
</script>

<style scoped>

</style>
