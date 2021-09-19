<template>
  <div class="container">
    <article v-for="post in list" :key="post.id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row align-items-center mb-3">
          <div class="col-4" v-if="post.image">
            <img
              :src="post.image"
              :alt="post.title"
              class="rounded-lg mx-auto"
            />
          </div>
          <p :class="{ 'col-8': post.image }" class="text-muted">
            {{ post.content }}
          </p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { PostProps } from "@/model/type";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<PostProps[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
