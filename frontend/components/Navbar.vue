<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji">
        <img
          src="~/assets/strapi.png"
          class="logo"
          alt="strapi-logo"
          height="150"
          width="150"
        />
      </span>
    </nuxt-link>

    <button class="snipcart-checkout flex items-center">
      <IconsCart />
      <span
        class="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"
      ></span>
    </button>
  </div>
</template>

<style>
.emoji {
  font-size: 30px;
}
</style>
