/* eslint-disable quotes */
<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mb-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">@2020知乎专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidateForm from "./components/ValidateForm.vue";

const user: UserProps = {
  isLogin: true,
  name: "张三"
};

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader
  },
  setup() {
    const emailRef = ref("zhang@135.com");
    const onSubmit = (result: string) => {
      console.log("接受结果", result);
    };
    return {
      user,
      onSubmit
    };
  }
});
</script>

<style></style>
