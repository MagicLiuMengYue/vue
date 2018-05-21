<template>
  <div class="Header">
   <router-link :to="{name:'index'}" >
     <img src="../assets/logo.png" />
     <span><a href="#">关于</a></span>
   </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return{

      }
    }
  }
</script>
<style scoped>
  .Header {
		background:#5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 30px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>

