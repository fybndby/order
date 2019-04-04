
<template>
  <div class="slideBar">
    <ul>
      <li>
        <router-link to="/home" exact>点菜</router-link>
      </li>
      <li>
        <router-link :to="{name:'orderManage'}">订单管理</router-link>
      </li>
      <li>
        <router-link :to="{name:'staffManage'}">人员管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.slideBar {
  height: 100%;
  background-color: #f56c6c;

  li {
    border-bottom: 1px solid #fff;

    a {
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 20px;
      padding: 20px 0;
      text-align: center;
    }
    .router-link-active {
      color: #000;
      background-color: #ddd;
    }
  }
}
</style>
