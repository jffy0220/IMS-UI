<template>
    <div class="prettyList align-items-center d-inline-flex">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'PrettyList',
    components: {},
    props: {
        text: {
            type: Number
        }
    }
}
</script>

<style scoped>
    .prettyList {
        padding-left: 1rem;
        padding-right: 1rem;
        border-bottom: #000 solid 1px;
        min-width: 12rem;
    }
</style>