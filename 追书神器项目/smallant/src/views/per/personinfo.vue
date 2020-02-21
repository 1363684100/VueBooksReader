<template>
  <div class="deposit-all">
    <div class="deposit-top">
      <div class="deposittop-text">
        <div>
          <img src="@/assets/images/Greate-l.png" @click="outdeposit"/>
        </div>
        <div class="deposittop-textbook">书币充值</div>
      </div>
      <div>
        <img src="@/assets/images/top-book.jpg" class="deposittop-img" />
      </div>
    </div>
    <div class="deposit-box">
      <div class="deposit-btnzo">500书币</div>
      <div class="deposit-btn" @click="amountChang()">￥5</div>
    </div>
    <div class="link"></div>
    <div class="deposit-box">
      <div class="deposit-btnzo">1000书币</div>
      <div class="deposit-btn" @click="amountChang2()">￥10</div>
    </div>
    <div class="link"></div>
    <div class="deposit-box">
      <div>3000书币</div>
      <div class="deposit-btn" @click="amountChang3()">￥30</div>
    </div>
    <div class="link"></div>
    <div class="deposit-box">
      <div>5000书币</div>
      <div class="deposit-btn" @click="amountChang4()" >￥50</div>
    </div>
   
    <div class="link"></div>
  </div>
</template>
<style lang="less">
.deposit-all {
  width: 100%;

  .deposit-top {
    margin-top: 20px; 

    .deposittop-img {
      width: 100%;
      height: 65px;
      margin: 15px 0 0;
    }
    .deposittop-text {
      width: 100%;
      display: flex;
      font-size: 22px;
      flex-direction: space-between;

      .deposittop-textbook {
        margin-left: 80px;
      }
    }
    img {
      width: 18px;
      height: 18px;
      margin-left: 22px;
    }
  }
  .deposit-box {
    margin-top: 12px;
    width: 100%;
     font-size: 16px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    .deposit-btn {
      background-color: #fc6703;
      padding: 2px 0;
      border-radius: 50px;
      font-size: 16px;
      color: white;
      width: 70px;
      text-align: center;
    }
  }
  .link {
    width: 100%;
    height: 1px;
    border-top: solid #e6e6e6 1px;
    margin: 15px 0 0 0;
  }
  .require-deposit {
    position: absolute;
    width: 90%;
    height: 200px;
    background: white;
    border: 1px black solid;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
  }
}
</style>

<script>
export default {
  data: function() {
   
    return {
      
    };
  },
  methods: {
   
   outdeposit(){
     
      this.$router.push({ path: "/Personal" });
   },
   amountChang(){
       var depositbtn = document.querySelector(".deposit-btnzo");
      this.$store.commit('increment');
       this.$router.push({ path: "/Personal" });
      console.log(depositbtn)
   },
   amountChang2(){
      this.$store.commit('increment2');
       this.$router.push({ path: "/Personal" });
      console.log('2')
   },
   amountChang3(){
      this.$store.commit('increment3');
       this.$router.push({ path: "/Personal" });
      console.log('Shad')
   },
   amountChang4(){
      this.$store.commit('increment4');
       this.$router.push({ path: "/Personal" });
      console.log('Shad')
   }
  }
};
</script>