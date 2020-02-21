<template>
  <div class="all-conntainer">
    <router-view></router-view>
    <div class="top-container">
      <router-link to="/per/personre">
        <div class="top-brief">
          <div class="data-portrait" id="dataportrait"></div>
          <div class="data-text">
            <div id="countcg">立即登录</div>
            <div class="data-smallt">账户信息，购买记录云同步</div>
          </div>
        </div>
      </router-link>
      <div class="top-img">
        <img src="../assets/images/333.png" class="topimg-Member" />
      </div>
    </div>
    <div class="text-container">
      <div class="account">
        <div>我的账户</div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
      <div class="balance">
        <div class="balance-top">
          <div id="rechargechang">余额 {{$store.state.count}}书币 + 0书币</div>
          <router-link to="/Per/personinfo">
          <div class="recharge">充值</div>
          </router-link>
        </div>
        <div class="balance-bottom">
          <div>
            <div>0</div>
            <div>月票</div>
          </div>
          <div>
            <div>0</div>
            <div>推荐票</div>
          </div>
          <div>
            <div>0</div>
            <div>优惠券</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="bottomc-msg">
        <div class="bottomc-msgline">
          <div>
            <img src="@/assets/images/mseeage.png" />
          </div>
          <div class="bottomc-msgtext">消息</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
      <div class="bottomc-msg">
        <div class="bottomc-msgline">
          <div>
            <img src="@/assets/images/leave.png" />
          </div>
          <div class="bottomc-msgtext">等级</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
      <div class="bottomc-msg"  @click="BrowseRecord()">
        <div class="bottomc-msgline"  >
          <div>
            <img src="@/assets/images/record.png" />
          </div>
          <div class="bottomc-msgtext">浏览记录</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png"/>
        </div>
      </div>
      <div class="bottomc-msg">
        <div class="bottomc-msgline">
          <div>
            <img src="@/assets/images/bookList.png" />
          </div>
          <div class="bottomc-msgtext">书单</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
      <div class="bottomc-msg">
        <div class="bottomc-msgline">
          <div>
            <img src="@/assets/images/comment.png" />
          </div>
          <div class="bottomc-msgtext">评论</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
      <div class="bottomc-msg">
        <div class="bottomc-msgline">
          <div>
            <img src="@/assets/images/talk.png" />
          </div>
          <div class="bottomc-msgtext">讨论</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
      <div class="bottomc-msg">
        <div class="bottomc-msgline">
          <div>
            <img src="@/assets/images/follow.png" />
          </div>
          <div class="bottomc-msgtext">关注</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
      <div class="bottomc-msg">
        <div class="bottomc-msgline">
          <div>
            <img src="@/assets/images/Collection.png" />
          </div>
          <div class="bottomc-msgtext">收藏</div>
        </div>
        <div>
          <img src="@/assets/images/Greate.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" >
.all-conntainer {
  height: 100%;
  font-size: 16px;
  .top-container {
    background-image: url("../assets/images/top2.png");
    height: 220px;
    background-size: 100% 100%;
    position: relative;
  }
  .top-brief {
    position: relative;
    left: 16px;
    top: 50px;
    display: flex;
    flex-direction: row;

    .data-portraited {
        width: 56px;
    height: 56px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
      background-image: url("../assets/images/top2.png");
      background-size: 100% 100%;
    
    }
    img {
      height: 26px;
      padding-top: 5px;
    }
    .data-smallt {
      font-weight: lighter;
      font-size: 12px;
      margin-top: 6px;
    }
  }
  .topimg-Member {
    height: 80px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .data-portrait {
    width: 56px;
    height: 56px;
    background: #ffff;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
  }
  .data-text {
    font-size: 20px;
    // color: white;
    margin-left: 14px;
    padding-top: 8px;
  }
  .text-container {
    .account {
      display: flex;
      margin: auto;
      height: 60px;
      align-items: center;
      width: 90%;
      padding: 0 0 0 20px;
      flex-direction: row;
      justify-content: space-between;
      border: 1px solid rgba(144, 144, 144, 0.1);

      img {
        width: 20px;
        margin-right: 10px;
      }
    }

    .balance {
      border: 1px solid rgba(144, 144, 144, 0.1);
      width: 90%;
      margin: auto;
      display: flex;
      padding: 20px 20px 0;
      flex-direction: column;
      box-shadow: 0px 10px 10px -15px #333;

      .balance-top {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        .recharge{
          border: 1px solid #1296db;
          padding: 0px 8px;
           border-radius: 50px;;
          font-size: 10px;
          color: #1296db;
        }
      }
      .balance-bottom {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 14px;
        text-align: center;
        padding-bottom: 14px;
      }
    }
  }
  .bottom-container {
    margin-top: 8px;
    display: flex;
    flex-direction: column;

    img {
      width: 20px;
    }

    .bottomc-msg {
      margin-top: 10px;
      padding: 10px 30px;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .bottomc-msgline {
      display: flex;
      flex-direction: row;
    }
    .bottomc-msgtext {
      margin-left: 16px;
      padding-top: 2px;
    }
  }
}
</style>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    createcode() {
      var account = sessionStorage.getItem("accounturl");
      account = JSON.parse(account);
      console.log(account);
      if (account !== null) {
        document.getElementById("countcg").innerHTML =
          "<div>" + account + "</div>";
        document.getElementById("dataportrait").className ="data-portraited";
      }
    },
    BrowseRecord(){
      this.$router.push({ path: "/Per/browere" });
    },
  },
  mounted: function() {
    this.createcode();
  }
};
</script>