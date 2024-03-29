<template>
  <nav class="border-gray-200 bg-white dark:bg-gray-900">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
    >
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        LOGO
      </NuxtLink>
      <div
        id="navbar-default"
        class="hidden w-full md:block md:w-auto"
      >
        <ul
          class="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
        >
          <li>
            <NuxtLink
              to="/"
              href="#"
              class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-indigo-500"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/chat"
              href="#"
              class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-indigo-500"
            >
              Chats
            </NuxtLink>
          </li>
          <li>
            <button
              type="button"
              class="rounded-lg bg-indigo-700 px-3 py-2 text-center text-xs font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              @click="signOut({ callbackUrl: '/login' })"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
const { signOut } = useAuth();
</script>
<style scoped>
.router-link-active {
  @apply text-indigo-700;
}
</style>
