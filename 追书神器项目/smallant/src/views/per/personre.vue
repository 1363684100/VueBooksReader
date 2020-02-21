<template>
  <div class="accountpage-all">
    <div class="top-bk" @click="returnbakck()">
      <div><img src="@/assets/images/Greate-l2.png" class="top-bkimg" /></div>
      <div>返回</div>
    </div>
    <div class="passwordBox">
      <div class="account">
        <div>
          <img src="@/assets/images/account.png" />
        </div>
        <div>
          <input
            type="text"
            value="手机/邮箱/个性账号"
            id="account-regist"
            onfocus="if(value=='手机/邮箱/个性账号')value=''"
            onblur="if(!value)value='手机/邮箱/个性账号'"
          />
        </div>
      </div>
      <div class="link"></div>
      <div class="account">
        <div>
          <img src="@/assets/images/passwordpd.png" />
        </div>
        <div>
          <input
            type="text"
            value="请输入您的密码"
            id="password-regist"
            onfocus="if(value=='请输入您的密码')value='',this.type='password'"
            onblur="if(!value)value='请输入您的密码'"
          />
        </div>
      </div>

      <div class="link"></div>
      <!-- <router-link to='../personal' > -->
      <button @click="btnRegist()">登录/注册</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>
<style lang="less">
.accountpage-all {
  width: 100%;
  .top-bk {
    height: 30px;
    margin-top: 12px;
    width: 100%;
    display: flex;
    font-size: 16px;
    color: #8a8a8a;
    .top-bkimg {
      margin-left: 14px;
      width: 16px;
      height: 16px;
      margin-top: 2px;
    }
  }
  .passwordBox {
    width: 90%;
    margin: 60px auto 0;
    display: flex;
    flex-direction: column;
    height: 300px;
    color: #8a8a8a;
    font-size: 14px;
    letter-spacing: 4px;
    input {
      outline: none;
      border: 0px;
      font-size: 14px;
      letter-spacing: 3px;
    }

    .link {
      width: 80%;
      height: 1px;
      border-top: solid #cdcdcd 1px;
      margin-left: 30px;
    }
    img {
      height: 16px;
      margin-top: 10px;
    }
    .account {
      display: flex;
      flex-direction: row;
      margin: 0 15px;

      div {
        margin-left: 15px;
        height: 40px;
      }
    }
    button {
      margin-top: 10px;
      background-color: #1296db;
      color: white;
      width: 80%;
      left: 50%;
      margin-top: 30px;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

<script>
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {};
  },
  methods: {
    returnbakck(){
     this.$router.go(-1);
    },
    btnRegist() {
      var accounturl = document.getElementById("account-regist").value;
      var passwordurl = document.getElementById("password-regist").value;
      if (
        accounturl == "" ||
        accounturl == null ||
        accounturl == "手机/邮箱/个性账号" ||
        passwordurl == "" ||
        passwordurl == null ||
        passwordurl == "请输入您的密码"
      ) {
        Toast({
          message: "请输入正确的账号密码",
          position: "middle",
          duration: 3000
        });
      } else {
        Toast({
          message: "登录成功",
          position: "middle",
          duration: 500
        });
        // this.$router.go(-1);
        this.$router.push({ path: "/Personal" });
        accounturl = JSON.stringify(accounturl);
        sessionStorage.setItem("accounturl", accounturl);
        var account = sessionStorage.getItem("accounturl");
        console.log(account);
        account = JSON.parse(account);
        console.log(account);
      }
    }
  }
};
</script>