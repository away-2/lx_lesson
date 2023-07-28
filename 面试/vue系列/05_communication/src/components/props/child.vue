<template>
    <div>
        <h2>{{ val }}</h2>
    </div>
</template>

<script setup>
defineProps({
    val: {
        type: String,
        required: true,
    }
})
</script>

<style lang="css" scoped></style>