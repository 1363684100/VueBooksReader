<template>
  <div>
    <header>
      <div> <img src="@/assets/images/return.png"  @click="returnbtn()"></div>
      <div class="readcode">浏览记录</div>
        <div class="readclear" @click="clearbowect()">全部清空</div> 
      </header>
    <div class="container">
      <div class="blank"></div>
      <div class="bookList" v-for="(item,idx) in booksList" :key="idx" @click="bookInfo(item._id)">
        <div class="images">
          <img v-if="item.cover" :src="item.cover | setCover" />
        </div>
        <div class="book-message">
          <div class="book-titleb">{{item.title}}</div>
          <div class="book-info mui-ellipsis-2">{{item.longIntro}}</div>
          <div class="author-cate">
            <div class="auImage">
              <img src="../../assets/user.png" />
            </div>
            <div class="author">{{item.author}}</div>
            <div class="majorCate">{{item.majorCate}}</div>
            <div class="retentionRatio">留存率:{{item.retentionRatio}}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myaxios, { bookDetailURL, staticPath } from "@/tools/myaxios.js";

export default {
  computed: {
    booked() {
      return this.$store.state.boot;
    }
  },
  data: function() {
    return {
      booksList: [],
      id: "",
      bs: [],
      index: 0,
    };
  },
  methods: {
    returnbtn(){
      this.$router.go(-1);
    },
    clearbowect(){
      this.booksList=[];
      this.$store.commit('deleate2');
    },
    bookInfo(id){
      this.$router.push({
					path: "/Bowerect/bowerect",
					query:{id:id}
				})
    }
  },
  async created() {
    this.bs = this.booked;
    this.bs.forEach(async (element, idx) => {
      let { data } = await myaxios("GET", bookDetailURL + this.bs[idx].id);
      this.booksList.unshift(data);
    });
    // this.booksList.unshift(data);
    // console.log(this.booksList, data,11111);               
  },
  filters: {
    setCover(cover) {
      if (cover.indexOf(staticPath) > -1) {
        return cover;
      }
      return staticPath + cover;
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  height: 46px;
  background-color: rgb(252,136,111);
  color: white;
  text-align: center;
  line-height: 46px;
  font-size: 17px;
  font-family: "Source Han Sans CN";
  position: fixed;
  left: 0;
  top: 0;

    display: flex;
  flex-direction: row;
  justify-content: space-around ;

  img{
    width: 18px;
    margin-top: 14px;
    margin-left: -34px;
  }

}
.blank {
  width: 100px;
  height: 1px;
}
.readcode{
  position: relative;
  left:28px
}
.readclear{
  position: relative;
  left:30px;
}
.container {
  width: 100%;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
}
.bookList {
  width: 100%;
  height: 100px;
  /*border: 1px solid red;*/
  margin-top: 24px;
  .images {
    
    float: left;
    margin-left: 10px;
    width: 76px;
    height: 94px;
     
    img {
     width: 76px;
      height: 100%;
      border-radius:4px; 
     box-shadow: 0px 7px 7px -9px #5E5E5E;
    }
  }
  .book-message {
    float: left;
    width: 68%;
    height: 80px;
    margin-left: 10px;
    font-size: 12px;
    .book-titleb {
      padding-top:3px; 
      color: rgb(51,51,51);
      font-size: 14px;
      font-weight: 700;
      font-family: 'PingFang SC';
      
    }
    .book-info {
      width: 95%;
      height: 34px;
      font-size: 10px;
      line-height: 16px;
      font-family: 'PingFang SC';
      color: 515151;
      overflow: hidden;
      /*background-color: pink;*/
      margin-top: 6px;
    }
  }
  .author-cate {
    width: 100%;
    height: 22px;
    margin-top: 6px;
    .auImage {
      float: left;
      width: 15px;
      height: 20px;
    }
    img {
      width: 15px;
      height: 15px;
      margin-top: 2px;
    }
    .author {
      float: left;
      width: 60px;
      height: 20px;
      color: gray;  
      font-size: 12px;
      font-family: 'PingFang SC';
    }
    .majorCate {
      float: left;
      width: 55px;
      height: 15px;
       border: 1px solid gray;
       background-color: white;
      font-size: 10px;
      color: gray;
      font-family: 'PingFang SC';
      border-radius: 5px;
      text-align: center;
      line-height:  13px;
      margin-left:32px;
      margin-top: 4px;
    }
    .retentionRatio {
      float: left;
      width: 80px;
      height: 15px;
      background-color: white;
       border: 1px solid rgb(238,64,83);
      font-size: 10px;
          color: rgb(238,64,83);
      font-family: 'PingFang SC';
      border-radius: 5px;
       font-weight: 400;
      text-align: center;
       line-height: 15px;
      margin-left: 7px;
      margin-top: 4px;
    }
  }
}
</style>