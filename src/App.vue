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
import { computed, defineComponent, reactive, ref } from "vue";
// import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader from "./components/GlobalHeader.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "vuex";
import { GlobalDataProps } from "./model/type";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader
  },
  setup() {
    const onSubmit = (result: string) => {
      console.log("接受结果", result);
    };
    const store = useStore<GlobalDataProps>();
    // const currentUser = reactive(store.state.user);
    const currentUser = computed(() => store.state.user);
    return {
      user: currentUser,
      onSubmit
    };
  }
});
</script>

<style></style>
