<template>
  <Row type="flex" justify="center" align="middle" class="code-row-bg">
    <Row type="flex" justify="center" align="middle" class="login-box">
      <Form :model="formItem" :rules="ruleInline" class="login-form">
        <FormItem prop="userName">
          <Input v-model="formItem.username" prefix="ios-person-outline" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formItem.password" prefix="ios-lock-outline" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long  @click="handleSubmit()">登陆</Button>
        </FormItem>
      </Form>
    </Row>
  </Row>
</template>

<script>
import api from '../share/api/api';
export default {
  data() {
    return {
      formItem: {
        username: "",
        password: ""
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    /* eslint-disable */
    handleSubmit() {
      api.login(this.formItem).then(res => {
        if(res.data) {
          localStorage.setItem('token',res.data.token);
          this.$router.push('/');
        }
      })
    }
  }
};
</script>

<style scoped>
.code-row-bg {
  background: rgba(0, 153, 229, 0.9);
  height: 100%;
}
.login-box {
  width: 400px;
  height: 300px;
  background: rgb(81, 90, 110);
  padding: 0 60px;
}
.login-form {
  width: 100%;
}
</style>