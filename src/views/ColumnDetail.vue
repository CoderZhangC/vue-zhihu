<template>
  <div class="conatiner">
    <div class="list-inline">
      <img
        src="../assets/logo.png"
        alt=""
        class="list-inline-item rounded-circle"
      />
      <div class="list-inline-item">
        <h4>test1的专栏</h4>
        <p>
          这是test1的专栏，里面介绍了如何制作全世界最牛逼的料理，大家快来看看吧。。。。。
        </p>
      </div>
    </div>
    <post-list :list="testPosts"></post-list>
  </div>
</template>

<script lang="ts">
import PostList from "@/components/PostList.vue";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { testPosts } from "../testData";

export default defineComponent({
  components: { PostList },
  setup() {
    const route = useRoute();
    return {
      route,
      testPosts
    };
  }
});
</script>

<style scoped></style>
