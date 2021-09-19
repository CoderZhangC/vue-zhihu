<template>
  <div>
    <column-list :list="columnList"></column-list>
  </div>
</template>

<script lang="ts">
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import { defineComponent } from "vue";

const columnList: ColumnProps[] = [
  {
    id: 1,
    title: "大决战之辽沈战役",
    description: "决定国家命运之三大战役-辽沈战役",
    avatar: "https://vscode.github.com/assets/img/github-vscode-icon.svg"
  },
  {
    id: 2,
    title: "大决战之平津战役",
    description: "决定国家命运之三大战役-平津战役",
    avatar: "https://vscode.github.com/assets/img/github-vscode-icon.svg"
  },
  {
    id: 3,
    title: "大决战之淮海战役",
    description: "决定国家命运之三大战役-淮海战役",
    avatar: "https://vscode.github.com/assets/img/github-vscode-icon.svg"
  },
  {
    id: 4,
    title: "大决战之渡江战役",
    description: "决定国家命运之最后战役-渡江战役"
  }
];
export default defineComponent({
  components: { ColumnList },
  setup() {
    return {
      columnList
    };
  }
});
</script>

<style scoped></style>
