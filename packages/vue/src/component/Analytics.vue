<script lang="ts" setup>
import { onMounted } from "vue";
import { useAnalytics } from "../composable/useAnalytics";
import type { AnalyticsProps } from "@withbeacon/core";
export interface Props {
    props: AnalyticsProps | any;
}
const props = defineProps<Props>();
onMounted(() => {
    useAnalytics(props.props);
});
</script>

<template>
</template>
