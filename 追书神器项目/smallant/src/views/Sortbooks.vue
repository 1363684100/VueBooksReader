<template>
  <div class="sortbooks">
     <header>
        <div>
          <img src="@/assets/images/return.png" @click="returnbakck()" />
        </div>
        <div class="returnbk">书籍详情</div>
      </header>
    <div class="sortbookselect">
      <ul class="selectsort">
        <li
          v-for="(item,index) in largeTypes"
          :key="item.type"
          :class="{'active':index===TypeIndexTop}"
          @click="setLargeTypeTop(item.type,index)"
        >{{item.name}}</li>
      </ul>
      <ul class="selectsort">
        <li
          v-for="(min,index) in mins"
          :key="min.type"
          :class="{'active':index===TypeIndexSecond}"
          @click="setLargeTypeSecond(min,index)"
        >{{min}}</li>
      </ul>
    </div>

    <div
      class="container"
      >
      <div class="blank"></div>
      <div class="bookList" v-for="item in bookmsg" :key="item.id" @click="goInfo(item._id)">
        <div class="images">
          <img v-if="item.cover" :src="item.cover | setCover" />
        </div>
        <div class="book-message">
          <h4>{{item.title}}</h4>
          <div class="book-info mui-ellipsis-2" style="-webkit-line-clamp:2">{{item.shortIntro}}</div>
          <div class="author-cate">
            <div class="auImage">
              <img src="@/assets/user.png" />
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
import myaxios, {
  sortbooks,
  booksbrief,
  staticPath,
  book
} from "@/tools/myaxios.js";

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
      id: this.$route.params.id,
      bookmsg: [],
      TypeIndexTop: 0,
      TypeIndexSecond: 0,
      mins: [],
      genderName: "",
      title:"分类",
      flag: false,
			isBack: false,
      type: "hot",
      min: "",
      bookss: "",
      largeTypes: [
        {
          type: "hot",
          name: "热门"
        },
        {
          type: "new",
          name: "新书",
          duration: "all"
        },
        {
          type: "reputation",
          name: "好评"
        },
        {
          type: "over",
          name: "完结"
        },
        {
          type: "monthly",
          name: "包月"
        }
      ]
    };
  },
  methods: {
     returnbakck(){
     this.$router.go(-1);
    },
    goback() {
				this.isBack = true;
				this.$router.go(-1);
			},
    goInfo(id) {
      this.$router.push({
        path: "/Sortbooks/sortbooksInfo",
        query: { id: id }
      });
    },
    setLargeTypeTop(type, index) {
      this.TypeIndexTop = index;
      if (this.type === type) {
        return;
      } else {
        this.type = type;
      }
    },
    setLargeTypeSecond(min, index) {
      this.TypeIndexSecond = index;
      if (this.min === min) {
        return;
      }
      this.min = min;
      console.log(this.min);
    },
  },

  async beforeRouteEnter(to, from, next) {
    let { data } = await myaxios("GET", sortbooks);
    next(vm => {
      vm.major = vm.$route.query.major;
      vm.gender = vm.$route.query.gender;
      data[vm.$route.query.gender].forEach(type => {
        if (type.major === vm.$route.query.major) {
          vm.mins = type.mins;
          if (type.mins.length > 0) {
            vm.mins.unshift("全部");
          }
        }
      });
    });
  },

  async created() {
    this.majorName = this.$route.query.major;
    this.genderName = this.$route.query.gender;
    let { data } = await myaxios(
      "GET",
      booksbrief +
        "gender=" +
        this.genderName +
        "&type=" +
        "hot" +
        "&major=" +
        this.majorName +
        "&minor=&start=0"
    );

    this.bookmsg = data.books;
    console.log(data);
  },
  watch: {
    type: async function(val, oldVal, bookss) {
      this.type = val;
      if (this.min === "全部") {
        let { data } = await myaxios(
          "GET",
          booksbrief +
            "gender=" +
            this.genderName +
            "&type=" +
            "hot" +
            "&major=" +
            this.majorName +
            "&minor=&start=0&limit=20"
        );

        this.bookmsg = data.books;
      } else {
        let { data } = await myaxios(
          "GET",
          booksbrief +
            "gender=" +
            this.genderName +
            "&type=" +
            this.type +
            "&major=" +
            this.majorName +
            "&minor=" +
            this.min +
            "&start=0&limit=20"
        );
        this.bookmsg = data.books;
      }
    },
    min: async function(val, oldVal, bookss) {
      this.min = val;
      if (this.min === "全部") {
        let { data } = await myaxios(
          "GET",
          booksbrief +
            "gender=" +
            this.genderName +
            "&type=" +
            this.type +
            "&major=" +
            this.majorName +
            "&minor=&start=0&limit=20"
        );
        this.bookmsg = data.books;
      } else {
        let { data } = await myaxios(
          "GET",
          booksbrief +
            "gender=" +
            this.genderName +
            "&type=" +
            this.type +
            "&major=" +
            this.majorName +
            "&minor=" +
            this.min +
            "&start=0&limit=20"
        );
        this.bookmsg = data.books;
      }
    }
  }
};
</script>

<style lang="less">
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
.selectsort {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #d4d2d2;
}
.sortbookselect{
  margin-top: 46px;
}
.selectsort {
  padding: 0;
  margin: 0;
}
.selectsort li {
  font-size: 14px;
  list-style: none;
  float: left;
  margin: 0 4px;
}
.active {
  color: red;
}
.blank {
  width: 100px;
  height: 1px;
}
.container {
  width: 100%;
  height: 100%;
}
.bookList {
  width: 100%;
  height: 110px;
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