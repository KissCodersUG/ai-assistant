<script setup lang="ts">
const { signOut } = useAuth();
</script>

<template>
  <div>Index Page</div>
  <div>
    <button
      type="button"
      @click="signOut({ callbackUrl: '/login' })"
    >
      Sign Out
    </button>
  </div>
</template>
