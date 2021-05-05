<template>
  <div class="card-container">
    <div class="card">
      <h5 class="card-title">{{ product.title }}</h5>
      <button class="btn btn-primary" @click="viewMore()">View Details</button>
    </div>
  </div>
</template>

<script>
import ProductMixin from "../productmixin";

export default {
  mixins: [ProductMixin],
};
</script>

<style scoped>
.card-container {
  padding: 16px;
  display: inline-flex;
  width: 33%;
}
.card {
  width: 100%;
}
</style>