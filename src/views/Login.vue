<template>
  <div>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">电子邮箱</label>
        <validate-input :rules="emailRules" v-model="emailRef"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">登陆密码</label>
        <validate-input
          type="password"
          :rules="pwdRules"
          v-model="pwdRef"
        ></validate-input>
      </div>
    </validate-form>
  </div>
</template>

<script lang="ts">
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const emailRules: RulesProp = [
  {
    type: "required",
    message: "电子邮箱不能为空!"
  },
  {
    type: "email",
    message: "电子邮箱格式不正确！"
  }
];

const pwdRules: RulesProp = [
  {
    type: "required",
    message: "密码不能为空!"
  }
];
export default defineComponent({
  components: { ValidateForm, ValidateInput },
  setup() {
    const router = useRouter();
    const store = useStore();
    const onFormSubmit = () => {
      router.push("/");
      store.commit({
        type: "login",
        name: emailRef.value
      });
    };
    const emailRef = ref<string>();
    const pwdRef = ref<string>();
    return {
      emailRules,
      emailRef,
      pwdRules,
      pwdRef,
      onFormSubmit
    };
  }
});
</script>

<style scoped></style>
