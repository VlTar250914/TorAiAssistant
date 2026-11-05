<script setup lang="ts">

import DialogMessage from "@/components/DialogMessage.vue";
import {ref} from "vue";
import MessageInput from "@/components/MessageInput.vue";
import Message from "@/message.ts";

const messages = ref<Message[]>([]);
</script>

<template>
  <div class="dialog-panel overflow-scroll overflow-x-hidden">
    <div class="d-flex flex-column align-items-center h-100">
      <div class="dialog-listing mt-8 vstack gap-6 w-100">
        <DialogMessage v-for="message in messages" :message>
          <div v-if="!message.isClient && message.text.length === 0" class="spinner-border p-3 m-1" role="status"/>
        </DialogMessage>
      </div>
      <div class="sticky-bottom p-4">
        <MessageInput
            @sent="message => {messages.push(message); messages.push(new Message(false, 'Здесь должно быть сообщение ассистента.'))}"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-panel {
  padding: 0 15%;
}
.dialog-listing {
  margin-bottom: 20vh;
}
</style>