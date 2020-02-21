<template>
  <div>    
    <div class="boxx">
	<mt-header class="book-header">
      <div slot="left" @click="$router.back(-1)">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
      <input type="text" placeholder="书名/作者/关键字" id="itext" />
      <button class="btn2" @click="searchtoggle">搜索</button>
    </div>

    <div id="everysearch" v-if="sshow">
      <div class="everyone">大家都在搜</div>
      <div class="hotwords">
        <span
          v-for="item in everyonereadbooks"
          :key="item.id"
          id="sspan"
          @click="atoggle(item.name)"
        >{{item.name}}</span>
      </div>
    </div>

    <div class="containers">
      <div
        class="bookListss"
        v-for="item in booksearchList"
        :key="item.id"
        @click="goDetailss(item._id)"
      >
        <div class="images">
          <img :src="item.cover | setCover" />
        </div>
        <div class="book-message">
          <h4>{{item.title}}</h4>
          <div class="book-info mui-ellipsis-2">{{item.shortIntro}}</div>
          <div class="author-cate">
            <div class="auImage">
              <img src="../../assets/user.png" />
            </div>
            <div class="author">{{item.author}}</div>
            <div class="majorCate">{{item.cat}}</div>
            <div class="retentionRatio">留存率:{{item.retentionRatio}}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import myaxios, { staticPath, booksearchURL } from "@/tools/myaxios.js";
export default {
  filters: {
    setCover(cover) {
      if (cover.indexOf(staticPath) > -1) {
        return cover;
      }
      return staticPath + cover;
    }
  },
  data: function() {
    return {
      search: "",
      booksearchList: [],
      everyonereadbooks: [
        { name: "斗罗大陆" },
        { name: "圣墟" },
        { name: "我吃西红柿" },
        { name: "都市" },
        { name: "言情" },
        { name: "武侠" }
      ],
      sshow: true
    };
  },
  methods: {
    goDetailss(id) {
      this.$router.push({
        path: "/Sortbooks/sortbooksInfo",
        query: { id: id }
      });
    },
    searchtoggle() {
      var vm = document.getElementById("itext").value;
      this.search = vm;
      this.sshow = !this.sshow;
      console.log(this.sshow);
      //  console.log(this.search)
    },
    atoggle(name) {
      document.getElementById("itext").value = name;
    }
  },
  //    async created(){
  //         let {data} = await myaxios("GET",booksearchURL+ "query=" + this.search)
  //         console.log(booksearchURL+ "query=" + this.search)
  //     },
  watch: {
    search: async function(val, oldval) {
      let { data } = await myaxios(
        "GET",
        booksearchURL + "query=" + this.search
      );
      this.booksearchList = data.books;
    }
  }
};
</script>

<style lang = "less" scoped>
* {
  padding: 0;
  margin: 0;
}

header {
		width: 100%;
		height: 40px;
		background-color:rgb(252, 136, 111);
		color: white;
		text-align: center;
		line-height: 40px;
		font-size: 18px;
		font-family: "微软雅黑";
		position: fixed;
		left: 0;
		top: 0;
		.mint-header-title {
			position: absolute;
			left: 160px;
			bottom: 0;
			line-height: 34px;
		}
	}
.boxx {
  width: 100%;
  height: 130px;
  background-color:rgb(252, 136, 111);
  padding-top: 50px;
  padding-left: 16px;
  position: relative;
  input {
    width: 80%;
    height: 45px;
    border-radius: 2% 2%;
  }
}
.btn2 {
  position: absolute;
  right: 5px;
  top: 56px;
  width: 48px;
  height: 34px;
}

#everysearch {
  width: 100%;
  height: 150px;
  padding-top: 20px;
}

.everyone {
  float: left;
  margin-right: 195px;
  margin-left: 8px;
  font-size: 16px;
}
.hotwords {
  margin-top: 10px;
  margin-left: 8px;
  padding: 30px 30px;
  span {
    display: block;
    float: left;
    width: 90px;
    height: 35px;
    font-family: "PingFang SC";
    font-size: 14px;
  }
}

.containers {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
}
.bookListss {
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
    height: 110px;
    margin-left: 10px;
    h4 {
      font-size: 16px;
      font-weight: 700;
      font-family: "微软雅黑";
      margin-top: 4px;
    }
    .book-info {
      width: 95%;
      height: 40px;
      font-size: 14px;
      font-family: "微软雅黑";
      color: gray;
      overflow: hidden;
      /*background-color: pink;*/
      margin-top: 15px;
    }
  }
  .author-cate {
    width: 100%;
    height: 20px;
    margin-top: 14px;
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
      height: 15px;
      color: gray;
      font-size: 12px;
      font-family: "微软雅黑";
    }
    .majorCate {
      float: left;
      width: 50px;
      height: 20px;
      background-color: #ccc;
      font-size: 12px;
      color: gray;
      font-family: "微软雅黑";
      border-radius: 5px;
      text-align: center;
      line-height: 20px;
      margin-left: 6%;
    }
    .retentionRatio {
      float: left;
      width: 90px;
      height: 20px;
      background-color: #c0a16b;
      font-size: 12px;
      color: red;
      font-family: "微软雅黑";
      border-radius: 5px;
      text-align: center;
      line-height: 20px;
      margin-left: 5px;
    }
  }
}
</style>