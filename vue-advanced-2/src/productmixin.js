export default {
  props: ["product"],
  methods: {
    viewMore: function () {
      this.$router.push("/product/" + this.product.id);
    }
  }
};
