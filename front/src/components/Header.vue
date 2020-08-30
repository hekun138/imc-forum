<template>
  <div class="header">
    <div class="header-content">
      <div class="left">
        <h3 class="home">首页</h3>
        <p class="tag">标签</p>
        <p class="discover">发现</p>
        <p class="ask-question">求问之路</p>
      </div>
      <div class="right">
        <div class="search">
          <input type="text" class="search-input" />
        </div>
        <div class="user-oper">
          <button class="login" @click="linkToLogin()">登录</button>
          <button class="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    linkToLogin: function () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    background: #e44d3a;
    .header-content {
      display: flex;
      justify-content: space-around;
      width: 1170px;
      height: 55px;
      margin: 0 auto;
    }
  }
  .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: #fff;
    line-height: 55px;
    width: 60%;
    .home, .tag, .discover {
      width: 80px;
    }
    .home {
      font-size: 18px;
    }
    .ask-question {
      width: 100px;
      height: 38px;
      background: #fff;
      align-self: center;
      border-radius: 4px;
      color: #e44d3a;
      text-align: center;
      line-height:38px;
    }
  }

  .right {
    width:40%;
    display: flex;
    .search {
      width: 280px;
      align-self: center;
      .search-input {
        width: 100%;
        height: 38px;
        border-radius:4px;
        outline: none;
        border: 0;
        padding-left: 10px;
      }
    }
    .user-oper {
      margin-left: 20px;
      align-self: center;
    }
    .login, .register {
      width: 70px;
      height: 38px;
      border: 0;
      background: #e44d3a;
      border: 1px solid #fff;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }
    .login {
      margin-right: 10px;
    }
  }
</style>
