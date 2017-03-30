<template>
<div class="actorInfo">
	<div class="goBack">
			<div id="back" @click="goback()"><</div>
			<div >影星资料</div>
	</div>

	<div class="baseInfo clearfix">
		<div class="float_l" ><img :src="starMsg.avatars.medium" :alt="starMsg.alt"></div>
		<div class="info float_l">
			<h3>{{starMsg.name}}</h3>
			<p>性别：{{starMsg.gender}}</p>
			<p>英文名：{{starMsg.name_en}}</p>
			<p>英文名：{{starMsg.name_en}}</p>
			<p>别名：{{starMsg.aka.join(",")}}</p>
		</div>
	</div>
	<div class="works">
		<h3>代表作品</h3>
		<div class="work clearfix" v-for="work in starMsg.works">
			<div class="float_l" @click="showMovie(work.subject.id)"><img :src="work.subject.images.small" alt=""></div>
			<div class="movieInfo float_l">
				<h3>{{work.subject.title}}({{work.subject.original_title}})</h3>
				<p>角色：{{work.roles[0]}}</p>
				<p>年份：{{work.subject.year}}</p>
			</div>
		</div>
	</div>

</div>
</template>



<script>
	export default {
		name:"actor",
		data:function(){
			return {
				starMsg:{}
			}
		},
		methods:{
			goback:function(){
				  window.history.go(-1);
			},
			showMovie:function(id){
				const src='/movie/'+id;
				this.$router.push({path: src});
			}

		},
		mounted: function () {
	      		this.$http.jsonp('https://api.douban.com/v2/movie/celebrity/' + this.$route.params.id)
		          .then(function (response) {
		            this.starMsg = response.body;
		          })
		          .catch(function (response) {
		            console.log(response)
		          })
    	},

	}

</script>


<style scoped>
.goBack{
	background-color:#F01414;
	color:#fff;
	font-size: 25px;
	position: relative;
	height: 50px;
	padding:20px 0 10px 0px ;
	text-align: center;
}
#back{
	position:absolute;
	top:20px;
	left:20px;
	font-size: 26px;
}
.baseInfo{
	background-color: #E5F5FA;
	padding: 20px;
}
.baseInfo .info{
	color:#666;
	margin-left: 20px;
	width: 210px;
	line-height: 30px;
}
.works{
	padding:10px 20px;
	background-color: #F1F1F1;
}
.work{
	margin:10px;
	border-bottom: 1px solid #888;
}
.movieInfo{
	margin-left: 20px;
	color:#666;
	width: 200px;
}
</style>
