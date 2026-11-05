<script setup lang="ts">
import {onMounted, ref} from "vue";
import { VuePDF, usePDF } from '@tato30/vue-pdf';

const supportedExtensions = ["pdf", "doc", "docx"];
const opened = ref(false);
const current_page = ref(1);
const pdf_url = ref<string>("example.pdf");

const { pdf, pages } = usePDF(pdf_url);

</script>

<template>
  <div class="preview-panel bg-1">
    <div class="handle-panel bg-2 p-3 border-secondary border-x border-1">
      <button type="button" class="btn btn-outline theme-secondary align-middle ratio-1x1" @click="opened = !opened">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
             class="bi" viewBox="0 0 16 16">
          <slot v-if="opened">
            <path fill-rule="evenodd"
                  d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd"
                  d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
          </slot>
          <slot v-else>
            <path fill-rule="evenodd"
                  d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            <path fill-rule="evenodd"
                  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </slot>
        </svg>
      </button>
    </div>
    <div style="width:35vw" class="view_panel text-center gap-5 py-5" v-if="opened">
      <h2>Предпросмотр документа</h2>
      <div class="d-flex justify-content-center align-items-center">
        <VuePDF :pdf :page="current_page" :scale=0.75 class="w-min"></VuePDF>
      </div>
      <div class="w-100">
        <div v-if="pdf_url" class="btn-group w-min">
          <button v-for="index in pages" class="btn btn-outline theme-secondary"
                  :class="{'active': index == current_page}" @click="current_page = index">{{ index }}
          </button>
        </div>
      </div>
      <div class="w-100">
        <div v-if="pdf_url" class="btn-group btn-group-divider my-8">
          <div class="btn btn-outline theme-success fs-lg px-5 pe-none">Скачать:</div>
          <button v-for="extension in supportedExtensions" type="button" class="btn btn-solid theme-success fs-lg">
            .{{ extension }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview-panel {
  display: grid;
  grid-template-columns: min-content 1fr;
}

.handle-panel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.view_panel {
  display: grid;
  grid-template-rows: min-content 1fr min-content min-content;
}

</style>