<script setup lang="ts">
import DialogPanel from "@/DialogPanel.vue";
import PreviewPanel from "@/PreviewPanel.vue";

</script>

<template>
  <div class="main-grid h-100">
    <DialogPanel/>
    <PreviewPanel/>
  </div>
</template>

<style scoped>
.main-grid {
  display: grid;
  grid-template-columns: 1fr min-content;
}
</style>
