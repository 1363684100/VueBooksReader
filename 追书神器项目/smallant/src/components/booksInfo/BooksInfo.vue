<template>
  <div>
    <div class="books-detail">
      <header>
        <div>
          <img src="@/assets/images/return.png" @click="returnbtn()" />
        </div>
        <div class="returnbk">书籍详情</div>
      </header>

      <div class="book-detail">
        <div class="cover">
          <img v-if="detaiInfo.cover" :src="detaiInfo.cover | setCover" alt />
        </div>

        <div class="desc">
          <h1>{{detaiInfo.title}}</h1>
          <p class="info">
            <span>{{detaiInfo.author}}</span> |
            <span>{{detaiInfo.minorCate}}</span> |
            <span>{{parseInt(detaiInfo.wordCount/10000)}}万字</span>
          </p>
          <p class="update">{{serial}}</p>
          <p>{{detaiInfo.lastChapter}}</p>
        </div>
      </div>
      <div class="read-link">
        <div class="sj" @click="addTobooks()">{{flag ? '已加入书架' : '加入书架'}}</div>
        <div class="read" @click="goReadBooks(),setUserLocalStorage(),setbowere()">开始阅读</div>
      </div>
      <div class="reader-data">
        <p class="item">
          <span class="key">追人气</span>
          <span>{{detaiInfo.latelyFollower}}</span>
        </p>
        <p class="item">
          <span class="key">读者存留率</span>
          <span>{{detaiInfo.retentionRatio}}%</span>
        </p>
        <p class="item">
          <span class="key">日更字数/天</span>
          <span>{{detaiInfo.serializeWordCount}}</span>
        </p>
      </div>
      <div class="introduction">{{detaiInfo.longIntro}}</div>
      <div class="comment">
        <p class="comment-title">热门评论</p>
        <ul>
          <li class="comment-list" v-for="(item,idx) in reviews" :key="item.id">
            <div class="inner">
              <div class="cover">
                <img :src="reviews[idx].author.avatar | setCover" alt />
              </div>
              <div class="right">
                <p class="name">
                  <span>{{reviews[idx].author.nickname}}</span>
                  <span class="authorLv">LV{{reviews[idx].author.lv}}</span>
                </p>
                <p class="title">{{reviews[idx].title}}</p>
                <div class="content">{{reviews[idx].content}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import myaxios, {
  bookDetailURL,
  staticPath,
  bookDiscussURL
} from "@/tools/myaxios.js";
export default {
  data: function() {
    return {
      title: "书籍详情",
      book: {},
      upDate: 0,
      flag: false,
      comments: [],
      detaiInfo: "",
      serial: "",
      reviews: [],
      id: "",
      bookkk: [],
      bookd: []
    };
  },
  methods: {
    returnbtn(){
      this.$router.go(-1);
    },
    setbowere() {
      var booksinto = {
        id: this.bookkk
      };
      console.log(booksinto, 123);
      this.$store.commit("setbowere", booksinto);
    },
    addTobooks() {
      this.flag = true;
      var booksinfor = {
        id: this.bookd
      };
      console.log(booksinfor, 123);
      this.$store.commit("addTobooks", booksinfor);
    },

    goReadBooks(id) {
      this.$router.push({
        path: "/booksinfo/bookcontent",
        query: { id: this.id }
      });
    },
    setUserLocalStorage() {}
  },
  async created() {
    let { data } = await myaxios("GET", bookDetailURL + this.$route.query.id);
    this.bookkk = data._id;
    this.bookd = data._id;
    this.author = data.author;
    this.detaiInfo = data;
    this.id = data._id;
    if (data.isSerial == false) {
      this.serial = "完结";
    } else {
      this.serial = "连载中";
    }

    let { data: idata } = await myaxios(
      "GET",
      bookDiscussURL + "book=" + this.$route.query.id + "&limit=5"
    );
    this.reviews = idata.reviews;
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
.books-detail {
  max-width: 750px;
  margin-bottom: 60px;
}
header {
  width: 100%;
  height: 46px;
  background-color: rgb(252, 136, 111);
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

  .returnbk{
    margin-left: 122px;
  }
  img {
    width: 18px;
    margin-top: 14px;
    margin-left: 10px;
  }
}

.book-detail {
  display: flex;
  padding: 30px;
  margin-top: 30px;
  .cover {
    flex: 0 0 75px;
    height: 100px;
    margin-right: 10px;
    overflow: hidden;
    img {
      height: 100px;
      width: 100%;
    }
  }
  .desc {
    h1 {
      height: 25px;
      font-size: 16px;
      font-family: "微软雅黑";
      margin: 0;
    }
    p {
      height: 20px;
      color: #999;
      font-size: 12px;
      margin: 0;
      font-family: "微软雅黑";
    }
  }
}

.read-link {
  display: flex;
  padding: 0 15px 15px 15px;
  font-size: 15px;
  div {
    flex: 1;
    text-align: center;
    line-height: 40px;
    height: 40px;
  }
  .sj {
    border: 1px solid #c62f2f;
    color: #c62f2f;
    box-sizing: border-box;
    margin-right: 5px;
  }
  .read {
    background: #c62f2f;
    color: #fff;
    margin-left: 5px;
  }
}

.reader-data {
  padding: 15px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  box-sizing: border-box;
  font-size: 0;
  .item {
    display: inline-block;
    width: 33%;
    text-align: center;
    vertical-align: middle;
  }
  span {
    font-size: 12px;
    color: #797979;
  }
  .key {
    display: block;
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }
}

.introduction {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  font-size: 12px;
  color: black;
  line-height: 20px;
  overflow: hidden;
  text-align: justify;
  border-bottom: 1px solid #ebebeb;
}

.comment {
  li {
    margin-top: 10px;
    list-style-type: none;
  }
  .comment-title {
    color: #000;
    font-size: 16px;
    font-family: "微软雅黑";
    height: 30px;
    line-height: 30px;
  }
  .comment-list {
    .inner {
      position: relative;
      .cover {
        position: absolute;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }
      }
      .right {
        padding: 0 5px 0 40px;
        .name {
          font-size: 12px;
          color: black;
          height: 15px;
          font-weight: 600;
          .authorLv {
            width: 20px;
            height: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-left: 5px;
            color: gray;
          }
        }
        .title {
          font-size: 12px;

          height: 15px;
          overflow: hidden;
          width: 280px;
          color: black;
        }
        .content {
          width: 320px;
          height: 60px;
          overflow: hidden;
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>