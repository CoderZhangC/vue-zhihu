<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">知乎专栏</a>
    <ul v-if="!user.isLogin"></ul>
    <ul v-else>
      <li></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: string;
}

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
