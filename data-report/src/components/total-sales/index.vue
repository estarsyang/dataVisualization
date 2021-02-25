<template>
  <div>
    <CommonCard title="累计销售额" value="￥32,776,624">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">2.14%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">￥ 300,120,830</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCardMixin from "@/mixins/common-card";
export default {
  name: "total-sales",
  mixins: [CommonCardMixin],
};
</script>

<style scoped lang="scss">
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    font-size: 12px;
    margin-top: 3px;
    color: #666;
    display: flex;
    align-content: center;
  }
}
</style>
