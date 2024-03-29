<template>
  <div class="DefaultLayout flex h-screen w-screen flex-col px-2">
    <NavBar />
    <div class="mx-auto w-full max-w-xl">
      <slot />
    </div>
  </div>
</template>
