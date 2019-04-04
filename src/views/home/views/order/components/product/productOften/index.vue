<template>
  <div class="product-often">
    <div v-for="(item1) of list" :key="item1.id" class="fl item">
      <h1>{{item1.classify}}</h1>
      <ul>
        <ProductItem v-for="item2 of item1.productList" :productInfo="item2" :key="item2.id"></ProductItem>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import ProductItem from "./components/productItem";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    ...Vuex.mapMutations(["orderAdd"]),
    add(item) {
      this.orderAdd(item);
    }
  },
  components: {
    ProductItem
  },
  created() {
    this.$axios.get("http://localhost/ordersys/getinfo.php").then(responseData => {
      console.log(responseData);
      this.list = responseData.data.list;
      console.log(this.list);
    });
  }
};
</script>
<style lang='scss' scoped>
.product-often {
  .item {
    text-align: center;
    width: 229px;
  }
}
</style>

