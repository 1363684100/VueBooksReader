<template>
  <div id="app" class="container">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <mt-tabbar v-if="tabType" v-model="selected">
      <mt-tab-item id="shelf">
        <router-link to="/" tag="span">
          <i class="iconfont icon-wodeshujia" />
          <div class="mt-list">书架</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="Sort">
        <router-link to="/Sort" tag="span">
          <i class="iconfont icon-fenlei2"></i>
          <div class="mt-list">分类</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="Good">
        <router-link to="/Good" tag="span">
          <i class="iconfont icon-paihang3" />
          <div class="mt-list">精选</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="Ranking">
        <router-link to="/Ranking" tag="span">
          <i class="iconfont icon-paihang" />
          <div class="mt-list">排行</div>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="home">
        <router-link to="/personal" tag="span">
          <i class="iconfont icon-geren" />
          <div class="mt-list">我的</div>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: "Shelf",
      tabType: true,
      transitionName: "",
      isBack: false,
      flag: false
    };
  },
  watch:{
     "$route.path": function(newVal, oldVal) {
      var routerArr = ["/", "/Sort", "/Good", "/Ranking", "/personal"];
      if (routerArr.includes(newVal)) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    $route(to, from) {
      var routerArr = ["/", "/Sort", "/Good", "/Ranking", "/personal"];
      if (this.isBack == true) {
        this.transitionName = "slide-right";
      } else {
        if (routerArr.includes(to.path)) {
          this.transitionName = "";
        } else {
          this.transitionName = "slide-left";
        }
      }
      this.isBack = false;
    }
  },
   watch: {
    $route: function(r) {
      this.tabType = r.path !== "/booksinfo/bookcontent";
      if(r.path =='/Good'){
        this.selected= "Good"
      }
    },
   
  }
};
</script>

<style lang="less">
body {
  background-color: #fff;
}

.mint-tabbar > .mint-tab-item.is-selected{
  color: rgb(40,35,31);
}
.container {
  overflow: hidden;
}
.mint-tab-item {
  color: gray;
}
.mt-list {
  height: 22px;
  line-height: 22px;
}
.search {
  position: absolute;
  top: 12px;
  right: 10px;
  z-index: 2;
}
.mint-tabbar {
  position: fixed;
  bottom: 0;
}

// 动画
.slide-left-enter {
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
	}
	/*左边离开*/
	
	.slide-left-leave-to {
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100% 0);
		position: absolute;
	}
	/*右边进入*/
	
	.slide-right-enter {
		-webkit-transform: translate(-100%, 0);
		transform: translate(-100% 0);
	}
	/*右边离开*/
	
	.slide-right-leave-to {
		-webkit-transform: translate(100%, 0);
		transform: translate(100%, 0);
		position: absolute;
	}
	/*进入退出动画*/
	.slide-right-enter-active,
	.slide-left-enter-active,
	.slide-right-leave-active,
	.slide-left-leave-active {
		transition: all 0.5s ease;
	}

</style>
