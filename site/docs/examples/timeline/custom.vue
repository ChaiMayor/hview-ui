<template>
  <h-timeline>
    <h-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp">
      {{ activity.content }}
    </h-timeline-item>
  </h-timeline>
</template>

<script lang="ts" setup>
const activities = [
  {
    content: "Custom icon",
    timestamp: "2023-01-01 13:14",
    size: "large",
    type: "primary",
    icon: "success",
  },
  {
    content: "Custom color",
    timestamp: "2023-01-01 13:14",
    color: "#0bbd87",
  },
  {
    content: "Custom size",
    timestamp: "2023-01-02 13:14",
    size: "large",
  },
  {
    content: "Custom hollow",
    timestamp: "2023-01-03 13:14",
    type: "primary",
    hollow: true,
  },
  {
    content: "Default node",
    timestamp: "2023-01-04 13:14",
  },
];
</script>
