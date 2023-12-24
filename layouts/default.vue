<template>
  <div class="container">
    <GlobalHeader />
    <slot />
    <GlobalFooter />
  </div>
</template>

<style lang="scss">
$component: "container";

.#{$component} {
}
</style>
