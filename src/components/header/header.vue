<template>
	<div>
		<div class="header clearfix">
			<div class="float_l header-left">
				<div class="float_l logo"><img src='../../assets/logo.png' height="44" width="44" alt="猫眼电影"></div>
				<div class="title float_l">
					<h3>狗腿子电影</h3>
					<p class="gray-words">查影讯，上狗腿子就够了</p>
				</div>

			</div>		
			<div class="header-right float_r" @click="search">
				<input type="text" class="searchinput" v-model.trim="query" placeholder="请输入电影名称">
			</div>
		</div>	
		<div class="nav-bar">
				<router-link to="/movie" class="v-nav">正在热映</router-link>
      			<router-link to="/comingSoon" class="v-nav">即将上映</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
	      	return {
	        	query: ''
	      	}
	    },	
	 	methods: {
	      search: function () {
	        this.$router.push({path: '/searchPage'})
	      }
	    }
	}
</script>




<style>
.header{
	background-color: #CAE9EC;
	padding: 10px 20px;
}
.float_l{
	float:left;
}
.float_r{
	float: right;
}
.gray-words{
	color:gray;
}
.clearfix:after{
	content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix{
	zoom:1;
}

.logo{
	display:block;
	margin-right:20px;
}
.title{
	margin-top:5px;
}
.searchinput{
	width: 100px;
	height: 20px;
	border: none;
	margin-top:13px;
	border-radius: 12px;
	padding:1px 10px;
}
 .nav-bar {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: #0C65CC;
  }
  .v-nav {
    flex: 1;
    text-align: center;
    text-decoration: none;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    color: #F9FAFC;
  }

</style>