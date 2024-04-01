<script setup lang="ts">
const { signOut } = useAuth();

type message = {
  id: string;
  message: string;
};

const messages = ref<message[]>([]);
const sseUrl = "/api/sse";
onMounted(() => {
  const eventSource = new EventSource(sseUrl);

  eventSource.onmessage = function (event) {
    // Parse the incoming message and add it to the messages array
    const message = JSON.parse(event.data) as message;
    messages.value.push(message);
  };

  eventSource.onerror = function (error) {
    console.error("EventSource failed:", error);
    eventSource.close();
  };

  onUnmounted(() => {
    console.log("closing event source");
    eventSource.close();
  });
});
</script>

<template>
  <Head><Title>Home</Title></Head>
  <div class="HomePage">
    Index Page
    <div>
      <button
        type="button"
        @click="signOut({ callbackUrl: '/login' })"
      >
        Sign Out
      </button>
    </div>
    <div
      v-for="msg in messages"
      :key="msg.id"
    >
      {{ msg }}
    </div>
  </div>
</template>
