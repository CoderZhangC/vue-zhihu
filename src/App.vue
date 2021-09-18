/* eslint-disable quotes */
<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue"
import "bootstrap/dist/css/bootstrap.min.css";

const testData: ColumnProps[] = [
  {
    id: 1,
    avatar:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    title: "文章标题1",
    description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章1"
  },
  {
    id: 2,
    avatar:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    title: "文章标题2",
    description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章2"
  },
  {
    id: 1,
    avatar:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    title: "文章标题1",
    description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章1"
  },
  {
    id: 2,
    title: "文章标题2",
    description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章2"
  }
];
const user: UserProps = {
  isLogin: true,
  name: "张三"
}
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      user
    };
  }
});
</script>

<style></style>
