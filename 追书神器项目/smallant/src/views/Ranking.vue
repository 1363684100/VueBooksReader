<template>
	<div>
		<header>
			<div class="sex-selected">
				<a href="#sexMale" class="malesty">
					<h4>男生</h4></a>
				<a href="#sexFemale" class="femalesty">
					<h4>女生</h4></a>
			</div>
		</header>
		<div class="ranking">
			
			<div class="ranking-table">
				<div class="male-table">
					<h5 id="sexMale">---------------  男生   ---------------</h5>
					<div class="male-ranking" v-for="(item,idx) in maleRank" :key="item.id">
						<router-link :to="'/ranks/malerankDetail/' + maleRank[idx]._id">{{item.title}}</router-link>
					</div>
				</div>

				<div class="female-table">
					<h5 id="sexFemale">---------------  女生   ---------------</h5>
					<div class="female-ranking" v-for="(item,idx) in femaleRank" :key="item.id">
						<router-link :to="'/ranks/femalerankDetail/' + femaleRank[idx]._id">{{item.title}}</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import myaxios, { rankingGenderURL, staticPath } from '@/tools/myaxios.js';
	export default {
		data: function() {
			return {
				maleRank: [],
				femaleRank: []
			}
		},
		filters: {
			setCover(cover) {
				if(cover.indexOf(staticPath) > -1) {
					return cover;
				}
				return staticPath + cover;
			}
		},
		methods: {
			
		},
		async created() {
			let { data } = await myaxios("GET", rankingGenderURL);
//			console.log(data);
			this.maleRank = data.male;
//			
			this.femaleRank = data.female;
//			console.log(this.femaleRank)
		}
	}
</script>
<style scoped lang="less" scoped>
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
		line-height: 40px;
		font-size: 18px;
		font-family: "微软雅黑";
		position: fixed;
		left: 0;
		top: 0;
		
	}
	.sex-selected{
		margin-left: 138px;
		margin-top: 5px;
		.malesty{
			border-top-left-radius: 15px;
			border-bottom-left-radius: 15px;
		}
		.femalesty{
			border-top-right-radius: 15px;
			border-bottom-right-radius: 15px;
		}
		a{
			padding-top: 4px;
			float: left;
			width: 50px;
			height: 30px;
			border: 1px solid white;
			text-align: center;
			line-height: 30px;
			color: white;
			
		}	
	} 
	
	.ranking {
		margin-bottom: 100px;
		margin-top: 40px;
	}
	

	.ranking-table {
		margin:auto;
		margin-top: 50px;
		width: 260px;
		height: 800px;
		h5 {
			height: 20px;
			font-size: 14px;
			color: #ccc;
			text-align: center;
			line-height: 20px;
		}
		a {
			float: left;
			color: #515151;
			font-size: 14px;
			font-family: "微软雅黑";
			height: 30px;
			width: 110px;
	/*		background-color: #e6e6e6;*/
			overflow: hidden;
			margin-top: 10px;
			margin-left: 15px;
			text-align: center;
			line-height: 30px;
			border: 1px solid #bfbfbf;
			border-radius: 6px;
		}
		img{
			width: 20px;
			height: 20px;
		}
	}
	
	.female-table {
		margin-top: 20px;
		float: left;
		width: 260px;
		h5 {
			height: 20px;
			font-size: 14px;
			color: #ccc;
			text-align: center;
			line-height: 20px;
		}
	}
</style>