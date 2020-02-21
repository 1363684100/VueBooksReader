<template>
  <div>
     
    <div
      ref="wrapper"
      v-show="!showpage"
      class="content"
      id="content"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
      <h4>{{this.booksTexttitle}}</h4>
      <div class="booksTextContent">{{this.booksTextContent}}</div>
    </div>

    <div class="chapters" v-show="catalogue">
        <div class="bookName">{{this.bookName}}</div>
        <ul>
          <li
            v-for="item in chapters"
            :key="item.id"
            @click="changeContent(item.link,item.order)"
          >{{item.title}}</li>
        </ul>
      </div>

    <div class="top" v-show="visible">
      <div slot="left" @click="$router.back(-1)">
        <mt-button icon="back" class="back">返回</mt-button>
      </div>
    </div>
    <div v-show="visible" @click="enter" class="you">{{con}}</div>
    <div class="mid" @click="dis">中</div>
    <div class="footer" v-show="visible">
      <div class="footer-content">
        <!-- 设置功能 -->
        <div v-show="readset" class="read-set-switch">
          <div @click="sizeSub" class="read-set-switch-item">
            <span>A-</span>
          </div>
          <div @click="sizeAdd" class="read-set-switch-item">
            <span>A+</span>
          </div>
        </div>
        <ul class="footer-tab">
          <li class="footer-tab-item" @click="catalogue = !catalogue,visible = !visible">
            <div>
              <img src="../../assets/images/mulu.png" />
            </div>
            <div>目录</div>
          </li>
          <li class="footer-tab-item" @click="change">
            <div>
              <img v-if="flag" src="../../assets/images/sun.png" />
              <img v-else src="../../assets/images/moon.png" />
            </div>
            <div>{{message}}</div>
          </li>
          <li class="footer-tab-item" @click="readset = !readset">
            <div>
              <img src="../../assets/images/Aa.png" />
            </div>
            <div>设置</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "@/../node_modules/mui/js/mui.js";
import myaxios, {
  booksChaptersURL,
  booksChaptersIdURL,
  booksTextURL
} from "@/tools/myaxios.js";
export default {
  data() {
    return {
      showpage: false,
      visible: false,
      catalogue: false,
      message: "日间模式",
      con: "加入书架",
      flag: true, //单位切换开关
      readset: false,
      downIcon: true,
      size: 14,
      chapters: [],
      bookName: "",
      link: "",
      booksTextContent: "",
      booksTexttitle: "",
      id: "",
      index: 0,
      loading: false,
      chaptersLink: ""
    };
  },
  methods: {
    //日夜切换
    change: function() {
      if (this.flag == true) {
        this.message = "夜间模式";
        document.getElementById("content").style.backgroundColor = "black";
      } else if (this.flag == false) {
        this.message = "日间模式";
        document.getElementById("content").style.backgroundColor =
          "rgb(238, 230, 221)";
      }
      this.flag = !this.flag;
    },
    //加入书架
    enter: function() {
      this.con = "已在书架";
    },
    //目录显示
    dis: function() {
      if (this.catalogue) {
        this.catalogue = !this.catalogue;
        document.getElementById("content").style.position = ""
      } else {
        this.visible = !this.visible;
        if(this.visible){
          document.getElementById("content").style.position = "fixed"
        }else{
          document.getElementById("content").style.position = ""
        }
      }
    },
    async loadMore() {
      this.showpage = true;
      this.loading = true;
      this.index += 1;
      let data3 = await myaxios(
        "GET",
        booksChaptersURL + this.id + "?view=chapters&channel=mweb"
      );

      this.link = data3.data.chapters[this.index].link;
      let data4 = await myaxios("GET", booksTextURL + this.link);
      this.booksTextContent = data4.data.chapter.cpContent;
      this.booksTexttitle = data4.data.chapter.title;
      // console.log(this.index)
      setTimeout(() => {
        this.loading = false;
      }, 1000);

      setTimeout(() => {
        this.showpage = false;
      }, 10);
    },
    //设置字体
    sizeSub() {
      if (this.size > 4) {
        this.size--;
      }
      // console.log(this)
      document.getElementById("content").style.fontSize = this.size + "px";
    },
    sizeAdd() {
      if (this.size < 20) {
        this.size++;
      }
      // console.log(this.size)
      document.getElementById("content").style.fontSize = this.size + "px";
    },
    async changeContent(link,order) {
      this.chaptersLink = link;
      this.index = order-1
      // console.log(this.chaptersLink)
      let data2 = await myaxios("GET", booksTextURL + this.chaptersLink);
      this.booksTextContent = data2.data.chapter.cpContent;
      this.booksTexttitle = data2.data.chapter.title;

      this.catalogue = !this.catalogue;
      document.getElementById("content").style.position = ""
    }
  },
  async created() {
    let { data } = await myaxios(
      "GET",
      booksChaptersIdURL + this.$route.query.id
    );
    this.id = data[0]._id;
    let data1 = await myaxios(
      "GET",
      booksChaptersURL + this.id + "?view=chapters&channel=mweb"
    );
    this.chapters = data1.data.chapters;
    this.bookName = data1.data.bookName;
    // console.log(data1.data.chapters[1]);
    this.link = data1.data.chapters[0].link;
    // console.log(this.link,this.index)

    let data2 = await myaxios("GET", booksTextURL + this.link);
    this.booksTextContent = data2.data.chapter.cpContent;
    this.booksTexttitle = data2.data.chapter.title;
    // console.log(this.booksTextContent,this.booksTexttitle)
    // console.log(data2.data.chapter)
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.mint-button--default{
  background-color: black;
  border:none;
}
.mint-header .mint-button{
  color: white;
  background-color: black;
}
.content {
  padding: 40px 10px 0px;
  width: 100%;
  color: rgb(102, 102, 102);
  background: rgb(238, 230, 221);
  word-break: break-all;
}

.chapters {
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  background-color: white;
  z-index: 9999;
  padding-left: 10px;
  .bookName {
    font-size: 13px;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
    border-bottom: 0.5px solid #ebebeb;
  }
  ul {
    list-style: none;
    li {
      font-size: 11px;
      color: #999;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ebebeb;
    }
  }
}
.top {
  width: 100%;
  height: 42px;
  background-color: rgba(0, 0, 0, 0.9);
  display: block;
  position: absolute;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  z-index: 999;
}
.mid {
  width: 100%;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.9);
  display: block;
  position: fixed;
  top: 20%;
  opacity: 0;
  color: white;
  z-index: 999;
}
.footer {
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  color: white;
  z-index: 999;
}
.footer-content {
  position: fixed;
  width: 100%;
}
.footer-tab {
  text-align: center;
}
.footer-tab-item {
  width: 125px;
  height: 50px;
  list-style-type: none;
  display: inline-block;
  position: relative;
  bottom: 3px;
  font-size: 12px;
}
.footer-tab-item img {
  width: 25px;
  height: 25px;
  top: 5px;
  position: relative;
}

//加入书架style
.you {
  font-size: 15px;
  background: black;
  height: 30px;
  width: 50px;
  float: right;
  border-radius: 30px 0px 0px 30px;
  margin: 23px 0 23px 16px;
  text-align: center;
  line-height: 35px;
  color: white;
  font-size: 12px;
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 999;
}
.you2 {
  font-size: 15px;
  background: black;
  height: 30px;
  width: 50px;
  float: right;
  border-radius: 30px 0px 0px 30px;
  margin: 23px 0 23px 16px;
  text-align: center;
  line-height: 35px;
  color: white;
  font-size: 12px;
  z-index: 999;
}
//设置里的内容A+A-
.read-set-switch {
  position: absolute;
  top: -31px;
  width: 100%;
  height: 30px;
  background-color: black;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.read-set-switch-item {
  display: inline-block;
  width: 151px;
  padding-left: 10px;
  line-height: 30px;
  border-radius: 30px;
  border: solid 1px gray;
}
.back{
  border: 0;
  color: #ebebeb
}

// .read-set-switch-item span{
// }
</style>