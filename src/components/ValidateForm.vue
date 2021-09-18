<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click="onSubmit">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    const onSubmit = () => {
      context.emit('form-submit', 'sjsjsjjs')
    }
    return {
      onSubmit
    }
  }
})
</script>

<style scoped>

</style>
