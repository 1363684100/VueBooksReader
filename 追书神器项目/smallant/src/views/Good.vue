<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
      
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" @click="togglec">精选</a>
          <a class="mui-control-item" @click="toggle">新书</a>
          <a class="mui-control-item" @click="togglea">完结</a>
          <a class="mui-control-item" @click="toggled">热门</a>
          <router-link to="/books/searchbooks">
           <i class="mui-icon mui-icon-search"></i>
          </router-link>
        </div>
      </div>
    </div>

    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item" alt="banner" class="banner-items" />
      </mt-swipe-item>
    </mt-swipe>

    <div class="books-recommend">
      <h4>
        <a>|</a> 男生频道
      </h4>
    </div>

    <div class="container">
      <div class="bookListss" v-for="item in  booksList" :key="item.id" @click="goDetail(item._id)">
        <div class="images">
          <img :src="item.cover | setCover" />
        </div>
        <div class="book-message">
          <h4>{{item.title}}</h4>
          <div class="book-info  mui-ellipsis-2">{{item.shortIntro}}</div>
          <div class="author-cate">
            <div class="auImage">
              <img src="../assets/user.png" />
            </div>
            <div class="author">{{item.author}}</div>
            <div class="majorCate">{{item.minorCate}}</div>
            <div class="retentionRatio">留存率:{{item.retentionRatio}}%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="books-recommend">
      <h4>
        <a>|</a> 女生频道
      </h4>
    </div>

    <div class="container">
      <div
        class="bookListss"
        v-for="item in booksnewList"
        :key="item.id"
        @click="goDetails(item._id)"
      >
        <div class="images">
          <img :src="item.cover | setCover" />
        </div>
        <div class="book-message">
          <h4>{{item.title}}</h4>
          <div class="book-info mui-ellipsis-2">{{item.shortIntro}}</div>
          <div class="author-cate">
            <div class="auImage">
              <img src="../assets/user.png" />
            </div>
            <div class="author">{{item.author}}</div>
            <div class="majorCate">{{item.minorCate}}</div>
            <div class="retentionRatio">留存率:{{item.retentionRatio}}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less"  scoped>
* {
		margin: 0;
		padding: 0;
	}

* { 
    touch-action: none; 
  }

.mint-swipe {
  width: 100%;
  height: 185px;
  padding-top:45px
}

.mui-slider {
  position: fixed;
  background-color:rgb(252, 136, 111);
  height: 46px;
}
.mui-scroll {
  padding-left: 24px;
  .mui-control-item.mui-active {
    color:black!important
  }
 
  .mui-control-item:hover{
    color:blue;
  }
  a {
    line-height: 46px;
  }
}
.banner-items {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
.books-recommend {
  margin-top: 16px;
  margin-bottom: 20px;
  a {
    width: 5px;
    height: 5px;
    color: brown;
    margin-left: 8px;
  }
}
 .mui-icon {
        float: right;
        border: 0;
        margin-left: 8px;
        line-height: 40px;
        color:white
    }
	
	.container{
		width: 100%;
		height: 100%;
		margin-top: 20px;
		margin-bottom: 50px;
	}
	.bookListss{		
		width: 100%;
		height: 110px;
		/*border: 1px solid red;*/
		margin-top: 14px;
		.images{
			float: left;
			margin-left: 10px;
			width: 80px;
			height: 110px;
			img{
				width: 80px;
				height: 110px;
			}
			
		}
		.book-message{
			float: left;
			width: 68%;
			height: 110px;
			margin-left: 10px;
			h4{
				font-size: 16px;
				font-weight: 700;
				font-family: "微软雅黑";
				margin-top: 4px;				
			}
			.book-info{
				width: 95%;
				height: 40px;
				font-size: 14px;
        font-family: 'PingFang SC';
				color: gray;
				overflow: hidden;
				/*background-color: pink;*/
				margin-top: 15px;
			}
		}
		.author-cate{
			width: 100%;
			height: 20px;
			margin-top: 14px;
			.auImage{
				float: left;
				width: 15px;
				height: 20px;
			}
			img{
				width: 15px;
				height: 15px;
				margin-top: 2px;
			}
			.author{
				float: left;
				width: 70px;
				height: 15px;
				color: gray;
				font-size: 12px;
				font-family: "微软雅黑";
			}
			.majorCate{
				float: left;
				width: 50px;
				height: 20px;
        background-color: white;
        border: 1px solid gray;
				font-size: 12px;
				color: gray;
				font-family: "微软雅黑";
				border-radius: 5px;
				text-align: center;
				line-height: 20px;
				margin-left: 6%;
				
			}
			.retentionRatio{
				float: left;
				width: 90px;
				height: 20px;
        background-color:white;
         border: 1px solid rgb(238, 64, 83);
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

.clickmore {
  width: 100%;
  height: 55px;
  position: absolute;
  a {
    display: block;
    text-align: center;
    line-height: 50px;
    margin: auto;
    position: relative;
    top:-50px
  }
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{
  color:white
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item:hover{
  color:black;
}
</style>



<script>
import mui from "mui/js/mui.min.js";
import myaxios, {
 bookrankURL,
  staticPath,
   bookranksURL,
  booksURL,
  bookmonthURL,
  bookmonthsURL,
  bookancientURL,
  hotbookURL,
  hotsbookURL
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
      banner: [
        "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/b186fbfe58df6ce0b40229553bd04595.jpg",
        "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/e95e611fb3e595198332579e4c399b9f.jpg",
        "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/b4c950bb4624a78b8aa0d8e919497efb.jpg"
      ],
      booksLists: [], //精选 男生最爱     用来实现切换
      booksnewsList: [], //精选  女生最爱 用来实现切换
      booksxhuanList: [], //新书   玄幻
      booksgudlove: [], //新书   古代言情
      booksdusiList: [], //完结   都市
      booksloveLists: [], //完结   现代爱情
      booksnewList: [], // 精选 女生最爱
      booksList: [], //精选 男生最爱
      bookhotList: [], //热门 男生频道
      bookshotList: [], //热门 女生
    };
  },
  async created() {
     Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
    let { data } = await myaxios("GET",bookrankURL, + this.id);
    this.booksList = data.books;
    this.booksLists = data.books; //精选 的数据

    let { data: pdata } = await myaxios("GET",  bookranksURL);
    this.booksnewList = pdata.books;
    this.booksnewsList = pdata.books; //精选  的数据

    let { data: wdata } = await myaxios("GET", booksURL);
    this.booksxhuanList = wdata.books;
    let { data: bdata } = await myaxios("GET", bookancientURL); //新书 的数据
    this.booksgudlove = bdata.books;

    let { data: zdata } = await myaxios("GET", bookmonthURL);
    this.booksdusiList = zdata.books;
    let { data: ydata } = await myaxios("GET", bookmonthsURL); // 完结  的数据
    this.booksloveLists = ydata.books;

    let { data: hdata } = await myaxios("GET", hotbookURL);
    this.bookhotList = hdata.books;
    let { data: gdata } = await myaxios("GET", hotsbookURL); //热门  的数据
    this.bookshotList = gdata.books;

Indicator.close();

  },

  methods: {
    goDetail(id) {
      this.$router.push({ path: "/books/numbooks/", query: { id: id } });
    },
    goDetails(id) {
      this.$router.push({ path: "/books/gnumbooks/", query: { id: id } });
    },
    toggle() {
      this.booksList = this.booksxhuanList;
      this.booksnewList = this.booksgudlove; //点击新书来到新书
      return {
        booksList: []
      };
    },
    togglea() {
      this.booksList = this.booksdusiList;
      this.booksnewList = this.booksloveLists; //点击完结来到完结
      return {
        booksList: []
      };
    },

    toggled() {
      (this.booksList = this.bookhotList),
        (this.booksnewList = this.bookshotList); //点击热门来到热门
      return {
        booksList: []
      };
    },

    togglec() {
      (this.booksList = this.booksLists),
        (this.booksnewList = this.booksnewsList); //点击精选来到精选
    }
  },

  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
};
</script>

