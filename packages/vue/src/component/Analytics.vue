<script lang="ts" setup>
import type { AnalyticsProps } from "@withbeacon/core";
import { onMounted } from "vue";
import { useAnalytics } from "../composable/useAnalytics";
const props = defineProps<AnalyticsProps>()
onMounted(() => {
    useAnalytics(props)
})
</script>

<template>
    
</template>
