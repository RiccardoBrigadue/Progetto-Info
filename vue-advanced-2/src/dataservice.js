var products = [
  { id: "1", title: "Titolo 1", description: "Descrizione 1", tag: "p1" },
  { id: "2", title: "Titolo 2", description: "Descrizione 2", tag: "p1" },
  { id: "3", title: "Titolo 3", description: "Descrizione altra", tag: "p2" },
  {
    id: "4",
    title: "Titolo 4",
    description: "Descrizione altra ancora",
    tag: "p3"
  }
];

export default {
  getProducts: function () {
    return products;
  },
  getProduct: function (id) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id === id) return products[i];
    }
    return null;
  },
  getProductsByTag: function (tag) {
    var result = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].tag === tag) result.push(products[i]);
    }
    return result;
  }
};
