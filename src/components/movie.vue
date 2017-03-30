<template>
	<div class="movieInfo">
		<div class="goBack">
			<div id="back" @click="goback()"><</div>
			<div >{{movieMsg.title}}</div>
		</div>

		<div class="title clearfix">
			<div class="float_l image">
				<img v-bind:src="movieMsg.images.medium" :alt="movieMsg.alt">
			</div>		
			<div class="movieName float_l">
				<h2>{{movieMsg.title}}</h2>
				<star :score="movieMsg.rating.average"></star>
				<p>{{movieMsg.rating.average}}({{movieMsg.collect_count}}人评分)</p>
				<p>{{movieMsg.year}}年</p>
				<p>类型：{{movieMsg.genres.join(', ')}}</p>
				<p>导演：{{movieMsg.directors[0].name}}</p>
			</div>
		</div>
		<div class="summary">
			{{movieMsg.summary}}
		</div>

		<div class="actors clearfix">
			<h3>演员列表</h3>
			<div class="actor float_l" v-for="actor in movieMsg.casts" v-on:click="showActor(actor.id)">
				<img :src="actor.avatars.small" :alt="actor.alt">				
				<p class="actorName">{{actor.name}}</p>
			</div>
		</div>

		<div class="comments">
			<h3>热门评论</h3>
			<div class="comment" v-for="comment in movieMsg.popular_comments">
				<div class="scoreAndTime clearfix">
					<star class="float_l" :score="comment.rating.value*2"></star>
					<div class="float_l">{{comment.created_at}}</div>
				</div>
				<p>{{comment.content}}</p>
				<div class="commentMan clearfix">
					<div class="float_l"><img :src="comment.author.avatar" :alt="comment.author.alt"> </div>
					<div class="float_l name">{{comment.author.name}}</div>
				</div>
			</div>


		</div>

	</div>
</template>


<script>
import star from './star/star'
	export default {
		data (){
			return {
				movieMsg:{}
			}
		},
		methods:{
			goback:function(){
				  window.history.go(-1);
			},
			showActor:function(id){
				const path = '/actor/' + id;
        		this.$router.push({path: path})
			}

		},
		components:{
			star
		},
		 mounted: function () {
		      this.$nextTick(function () {
		        const _this = this
		        const id = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd'
		        this.$http.jsonp(id)
		        .then(function (response) {
		          _this.movieMsg = response.body
		        })
		        .catch(function (response) {
		        })
		      })
		  },


	}
</script>


<style scoped>
.movieInfo{
	background-color: #DEE9F0;
	font-size: 14px;
}
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
.title{
	padding: 10px 20px;
	background-color: #DED9D9;
	margin:0;
}
.movieName{
	margin-left:20px;
	color:#706F6F;
}
.summary{
	padding:10px 20px;
	color:#333;
	line-height: 25px;
}
.actors{
	width: 90%;
	margin:0 auto;
}
.actor{
	margin-top:20px;
	margin-left:20px;
}
.actor .actorName{
	font-size: 12px;
	height: 40px;
	line-height: 20px;
	width:70px;
}
.comments{
	padding:10px 20px;
}
.comment{
	width: 100%;
	padding: 20px 0;
}
.commentMan{
	border-bottom: 1px solid #ccc;
	padding:10px 0;
}
.commentMan img{
	border-radius: 50%;
}
.commentMan .name{
	margin:10px;
}
</style>
