<template>
  <div>Test WS</div>
</template>
<script setup lang="ts">
let ws: WebSocket | null = null;
const message = ref<string>('');
const messages = useState<{ id: number; user: string; message: string; created_at: string }[]>(
  () => []
);
const log = (user: string, ...args: string[]) => {
  console.log('[ws]', user, ...args);
  messages.value.push({
    id: 0,
    message: args.join(' '),
    user: user,
    created_at: new Date().toLocaleString(),
  });
  scroll();
};
const connect = async () => {
  const isSecure = location.protocol === 'https:';
  const url = (isSecure ? 'wss://' : 'ws://') + location.host + '/api/chat';
  console.log('🚀 ~ url:', url);
  if (ws) {
    log('ws', 'Closing previous connection before reconnecting...');
    ws.close();
    clear();
  }

  log('ws', 'Connecting to', url, '...');
  try {
    ws = new WebSocket(url);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
  console.log('🚀 ~ ws:', ws);

  ws.addEventListener('message', (event) => {
    console.log('🚀 ~ ws.addEventListener ~ event:', event);
    const { user = 'system', message = '' } = event.data.startsWith('{')
      ? JSON.parse(event.data)
      : { message: event.data };
    log(user, typeof message === 'string' ? message : JSON.stringify(message));
  });

  await new Promise((resolve) => ws!.addEventListener('open', resolve));
  log('ws', 'Connected!');
};

const clear = () => {
  messages.value.splice(0, messages.value.length);
  log('system', 'previous messages cleared');
};

const scroll = () => {
  nextTick(() => {
    console.log('scrooling');
    window.scrollTo(0, document.body.scrollHeight + 100);
  });
};

const send = () => {
  console.log('sending message...');
  if (message.value) {
    ws!.send(message.value);
  }
  message.value = '';
};

onMounted(async () => {
  connect();
  scroll();
});
</script>
