<template>
  <div>
    <div class="row">
      <div class="col">
        <H3>Lista oggetti</H3>
      </div>
      <div class="col text-right">
        <button class="btn btn-success" @click="gridView = !gridView">
          Switch View
        </button>
      </div>
    </div>

    <div class="item-container" v-for="p in products" :key="p.id">
      <list-item v-if="!gridView" :product="p"></list-item>
      <grid-item v-if="gridView" :product="p"></grid-item>
    </div>
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
import GridItem from "../components/GridItem";
import DataService from "../dataservice";

export default {
  components: {
    ListItem,
    GridItem,
  },
  data: function () {
    return {
      gridView: false,
      products: DataService.getProducts(),
    };
  },
};
</script>

<style scoped>
.item-container {
  display: inline;
}
</style>