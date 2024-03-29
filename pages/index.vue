<script setup lang="ts">
const { signOut } = useAuth();
</script>

<template>
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
  </div>
</template>
