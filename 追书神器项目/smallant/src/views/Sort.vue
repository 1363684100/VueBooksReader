<template>
  <div class="listBooks">
    <div class="book-header">书籍分类 </div>

    <div class="mui-content">
      <h4>{{listType.male.name}}</h4>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li
          @click="goListDetail(item,listType.male.type)"
          v-for="(item,index) in categeorymale.maleList"
          :key="index"
          class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
        >
          <div>
            <span class="mui-message">{{item.name}}</span>
            <div class="mui-media-body">{{item.bookCount}}本</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="mui-content">
      <h4>{{listType.female.name}}</h4>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li @click="goListDetail(item,listType.female.type)"
          v-for="(item,index) in categeorymale.femaleList"
          :key="index"
          class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
        >
          <a href="#">
            <span class="mui-message">{{item.name}}</span>
            <div class="mui-media-body">{{item.bookCount}}本</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import myaxios, { statistics } from "@/tools/myaxios.js";
export default {
  data: function() {
    return {
      listType: {
        male: {
          name: "男生",
          type: "male"
        },
        female: {
          name: "女生",
          type: "female"
        }
      },
      categeorymale: {
        maleList: [],
        femaleList: [],
      },

      value: ""
    };
  },
    async created() {
      let { data } = await myaxios("GET", statistics);
    this. categeorymale.maleList = data.male;
    this. categeorymale.femaleList = data.female;
  },
  methods: {
    goListDetail(item, key) {
      this.$router.push({
        path: "/Sort/books",
        query: { gender: key, major: item.name }
      });
    }
  }
};
</script>


<style lang="less" scoped>
.book-header{
 width: 100%;
  height: 46px;
  background-color: rgb(252,136,111);
  color: white;
  text-align: center;
  line-height: 46px;
  font-size: 17px;
  font-family: "Source Han Sans CN";
}
html body{
  background-color: #efeff4
  }
  .mui-table-view{
    background-color: #efeff4;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-top: 0.5px solid #f8f8f8;
    border-right: 0.5px solid #f8f8f8;
    padding:8px 8px;
  }
  .mui-message{
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 12px;
    font-weight: 500;
    color: rgb(117, 112, 112);
  }
  h4{
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
    color: #666;
    font-weight: normal;
    font-size: 13px;
    margin: 0
  }
</style>