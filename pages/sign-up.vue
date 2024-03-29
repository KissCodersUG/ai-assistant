<script lang="ts" setup>
const email = ref("");
const password = ref("");
const errorMessage = ref("");

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

const handleSubmit = async () => {
  // Implement the sign up logic
};
</script>

<template>
  <div class="SignUpPage flex justify-center">
    <div class="flex flex-col items-center">
      <div
        class="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800"
      >
        <form
          class="space-y-6"
          action="POST"
          @submit.prevent="handleSubmit"
        >
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Get started with your account
          </h5>
          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Your password</label
            >
            <input
              id="password"
              v-model="password"
              type="password"
              name="password"
              placeholder="••••••••"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Get Started!
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?
            <NuxtLink
              to="/login"
              class="text-indigo-700 hover:underline dark:text-indigo-500"
              >Sign in</NuxtLink
            >
          </div>
        </form>
      </div>
      <div
        v-if="errorMessage"
        class="my-4 flex w-full items-center rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <svg
          class="me-3 inline size-4 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium"
            >Invalid username and password. Try 'test@hotmail.de' with
            'test'.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
