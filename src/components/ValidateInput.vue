<template>
  <div class="mb-3">
    <input type="text" class="form-control"
    :value="inputRef.val"
    @input="updateValue"
    v-bind="$attrs"
    @blur="validateInput" :class="{'is-invalid': inputRef.error}">
    <div v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

interface RuleProp {
  type: 'required' | 'email'
  message: string
}

export type RuleSProp = RuleProp[]
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default defineComponent({
  props: {
    rules: Array as PropType<RuleSProp>,
    modelValue: String
  },
  // 禁止根组件继承父组件传递的attrs
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break;
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style scoped>

</style>
