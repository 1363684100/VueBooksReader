<template>
  <div>
    <div class="book-header">
    <div class='mybook'>我的书架</div> 
      <div @click="clearshlelf()" class='myclear' >全部清空</div> 

      </div>
    
    
      <!-- <div> <img src="@/assets/images/return.png"  @click="returnbtn()"></div> -->
   
    <div class="container" >
      <div class="blank"></div>
      <div class="bookList" v-for="(item,idx) in booksList" :key="idx" @click="bookInfo(item._id)">
        <div class="images">
          <img v-if="item.cover" :src="item.cover | setCover" />
        </div>
        <div class="book-message">
          <h4>{{item.title}}</h4>
          <div class="book-info mui-ellipsis-2">{{item.longIntro}}</div>
          <div class="author-cate">
            <div class="auImage">
              <!-- <img src="../../assets/user.png" /> -->
            </div>
            <div class="author">{{item.author}}</div>
            <div class="majorCate">{{item.majorCate}}</div>
            <div class="retentionRatio">留存率:{{item.retentionRatio}}%</div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/Good" tag="span">
      <div class="icon">
        <i class="iconfont icon-jiarushujia1" v-if = "iconn"/>
      </div>
    </router-link>

  </div>
</template>

<script>
import myaxios, { bookDetailURL, staticPath } from "@/tools/myaxios.js";

export default {   
  computed: {
    booked() {
      return this.$store.state.books;
    }
  },
  data: function() {
    return {
      booksList: [],
      id: "",
      bs: [],
      index: 0,
      iconn : true			
    };
  },
  methods: { 
    clearshlelf(){
      this.booksList=[];
      this.$store.commit('deleate');
      this.iconn = true;
    },
       goListDetail(item, key) {
          this.$router.push({
          path: "/Sort/books",
          query: { gender: key, major: item.name },          
        });
      },
    // clearbowect(){
    //   this.booksList=null;
    //    this.$store.commit("clearbothbo");
    // }
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
      this.iconn = false;
    });
    
    // this.booksList.unshift(data);
    // console.log(this.booksList, data);
  },
  filters: {
    setCover(cover) {
      if (cover.indexOf(staticPath) > -1) {
        return cover;
      }
      return staticPath + cover;
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.icon i {
  font-size: 70px;
  color: gray;
}
.mint-header {
  text-align: left;
}

.book-header{
  top:0;
 width: 100%;
  height: 46px;
  background-color: rgb(252,136,111);
  color: white;
  line-height: 46px;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-family: "Source Han Sans CN";
  position:fixed;

  .myclear{
    margin-right: 20px;
  }
  .mybook{
   margin-left: 50px;
   transform: translateX(-50%)
  }
}
.blank {
  width: 100px;
  height: 1px;
}
.container {
  width: 100%;
  height: 100%;
  margin-top: 48px;
  // margin-bottom: 50px;
}
.bookList {
  width: 100%;
  height: 110px;
  /*border: 1px solid red;*/
  margin-top: 14px;
  .images {
    float: left;
    margin-left: 10px;
    width: 80px;
    height: 110px;
    img {
      width: 80px;
      height: 110px;
    }
  }
  .book-message {
    float: left;
    width: 68%;
    height: 85px;
    margin-left: 10px;
    h4 {
      font-size: 16px;
      font-weight: 700;
      font-family: "PingFang SC";
      margin-top: 4px;
    }
    .book-info {
      width: 95%;
      height: 40px;
      font-size: 14px;
      font-family: "PingFang SC";
      color: gray;
      overflow: hidden;
      /*background-color: pink;*/
      margin-top: 15px;
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
      line-height:  15px;
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