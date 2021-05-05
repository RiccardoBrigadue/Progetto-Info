<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <button class="btn btn-primary" @click="goBack()">Back</button>
  </div>
</template>

<script>
import DataService from "../dataservice";
export default {
  data: function () {
    return {
      product: DataService.getProduct(this.$route.params.id),
    };
  },
  methods: {
    goBack: function () {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
</style>