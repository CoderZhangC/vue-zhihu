/* eslint-disable quotes */
<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <validate-form @form-submit="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <template #submit>
        <button class="btn-danger">提交从</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue"
import ValidateInput, { RuleSProp } from "./components/ValidateInput.vue"
import "bootstrap/dist/css/bootstrap.min.css";
import ValidateForm from "./components/ValidateForm.vue";

// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     avatar:
//       "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
//     title: "文章标题1",
//     description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章1"
//   },
//   {
//     id: 2,
//     avatar:
//       "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
//     title: "文章标题2",
//     description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章2"
//   },
//   {
//     id: 1,
//     avatar:
//       "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
//     title: "文章标题1",
//     description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章1"
//   },
//   {
//     id: 2,
//     title: "文章标题2",
//     description: "文章内容文章内容文章文章内容文章内容文章文章内容文章内容文章2"
//   }
// ];
const user: UserProps = {
  isLogin: true,
  name: "张三"
}

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    ValidateForm
  },
  setup() {
    const emailRef = ref("zhang@135.com")
    const emailRules: RuleSProp = [
      {
        type: 'required',
        message: '电子邮箱不能为空!'
      },
      {
        type: 'email',
        message: '电子邮箱格式不正确！'
      }
    ]
    const onSubmit = (result: string) => {
      console.log('接受结果', result)
    }
    return {
      user,
      emailRules,
      emailRef,
      onSubmit
    };
  }
});
</script>

<style></style>
