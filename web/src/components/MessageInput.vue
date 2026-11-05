<script setup lang="ts">

import Message from "@/message.ts";
import {ref, useTemplateRef} from "vue";

const textarea = useTemplateRef('textarea');

function updateTextAreaSize(): void {
  if (textarea.value) {
    textarea.value.style.height = 'auto';
    textarea.value.style.height = (textarea.value.scrollHeight + 3) + 'px';
  }
}

defineEmits<{ sent: [Message] }>();
</script>

<template>
  <div class="message-input d-grid gap-3 p-4 border border-secondary border-1 rounded-9 bg-1 shadow-current shadow-sm">
    <input type="file" class="d-none">
    <textarea class="form-control" style="resize: none; max-height: 20vh" placeholder="Написать ассистенту..."
              @input="updateTextAreaSize" ref="textarea"></textarea>
    <div class="">
      <button type="button" class="btn btn-solid btn-xs theme-primary ratio-1x1 mb-3"
              @click="() => {if (textarea) {$emit('sent', new Message(true, textarea.value)); textarea.value = ''; updateTextAreaSize()}}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send"
             viewBox="0 0 16 16">
          <path
              d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
        </svg>
      </button>
      <button type="button" class="btn btn-outline btn-xs theme-primary ratio-1x1">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip"
             viewBox="0 0 16 16">
          <path
              d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.message-input {
  width: 40vw;
  grid-template-columns: 1fr min-content;
}
</style>