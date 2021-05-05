<template>
  <div class="row py-3">
    <div class="col text-left">{{ product.title }}</div>
    <div class="col text-right">
      <button class="btn btn-primary btn-sm" @click="viewMore()">
        Details
      </button>
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
.row {
  border-bottom: 2px solid grey;
}
</style>