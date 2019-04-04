<template>
  <div class="tabCon">
    <div class="tabHeader">
      <ul>
        <li
          @click="changeTab(index)"
          v-for="(item,index) of tabBtns"
          class="fl"
          :key="index"
          :class="{'tab-li-color':index===switchIndex}"
        >{{item}}</li>
      </ul>
    </div>
    <div class="tabContent">
      <div v-for="(item,index) of tabBtns" :key="index">
        <slot v-if="index===switchIndex" :name="'tabItem'+index" class="height-100"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabBtns: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      switchIndex: 0
    };
  },
  created() {
    if (this.currentIndex) {
      this.switchIndex = this.currentIndex;
    }
  },
  computed: {
    activedCom() {
      return this.tabComs[this.switchIndex];
    }
  },
  methods: {
    changeTab(index) {
      this.switchIndex = index;
    }
  }
};
</script>
<style lang='scss' scoped>
.tabCon {
  .tabHeader {
    margin-bottom: 10px;
    ul {
      overflow: hidden;
      li {
        padding: 0 10px;
        line-height: 40px;
        cursor: pointer;
      }
      .tab-li-color {
        color: #409eff;
        border-bottom: 2px solid #409eff;
      }
    }
  }
  .tabContent{
    overflow: auto;
  }
}
</style>

