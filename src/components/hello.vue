<template>
<div>
	<v-header ></v-header>
	<div class="onShowMovies">
		<div class="moviesList" v-for="(item,index) in on_show_movies" @click="showMovieDetail(item.id)">
			<div class="movie clearfix">
				<div class="image float_l">
					<img v-bind:src="item.images.small" alt="">					
				</div>				
				<div class="float_l movieInfo">
					<h2>{{item.title}}</h2>
					<star :score="item.rating.average"></star>
					<p>{{ item.rating.average }}分</p>
					<p>导演：{{ item.directors[0].name }}</p>
					<p>主演：
						<span v-for="actor in item.casts">
							{{actor.name}}
						</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import vHeader from './header/header.vue'
	import star from './star/star.vue'
	export default {
		name:"hello",
		data:function(){
			return{
				on_show_movies:[]

			}
		},
		components:{
			"v-header":vHeader,
			star:star
		},
		mounted:function(){
			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
			.then(function(response){

				this.on_show_movies=response.body.subjects;

			})
			.catch(function (response) {
         	 	console.log(response)
       		 })

		},
		methods:{
			showMovieDetail:function(id){
				const movieDetail='/movie/'+id

				this.$router.push({path: movieDetail});

			}
		}
	}
</script>
<style scoped>
.moviesList{
	width: 100%;
	height:100px;
	padding:10px 20px;
	border-bottom: 2px solid #ccc;
}
.movie{
	width:100%;
	
}	
.movieInfo{
	margin-left:20px;
}
</style>