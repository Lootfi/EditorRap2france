<template>
  <vs-chip class="ag-grid-cell-chip" :color="chipColor(params.value)">
    <span>{{ params.value }}</span>
  </vs-chip>
</template>

<script>
export default {
  name: "CellRendererStatus",
  computed: {
    chipColor() {
      return (value) => {
        if (value === "Activé") return "success";
        else if (value === "Suspendu") return "danger";
        else return "primary";
      };
    },
  },
};
</script>

