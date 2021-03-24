<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <TotalSales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <TotalOrders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <TodayUsers />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <TotalUsers />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalOrders from "./total-orders";
import TotalSales from "./total-sales";
import TotalUsers from "./total-users";
import TodayUsers from "./today-users";
export default {
  name: "topView",
  components: {
    TotalOrders,
    TotalSales,
    TotalUsers,
    TodayUsers,
  },
};
</script>

<style scoped lang="scss">
</style>
