<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoInput" v-on:keyup.enter="clear_send">
	<span class="addContainer" v-on:click="clear_send">
		<i class="fas fa-plus-circle addBtn fa-2x"></i>
	</span>
  </div>

</template>

<script>
export default {
	data: function() {
		return {
			newTodoInput: '',
		};
	},
	methods: {
		clear_send: function() {
			var obj = { finished: false, name: this.newTodoInput };
			this.$emit('sendTodo', obj);
			this.newTodoInput = '';
		},
	},
};
</script>

<style scoped>
input:focus {
	outline: none;
}

.inputBox {
	background: white;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
	width: 800px;
	position: relative;
	left: 25%;
}

.inputBox input {
	border-style: none;
	font-size: 1.5rem;
	width: 600px;
}

.addContainer {
	float: right;
	background: linear-gradient(to right, #6478fb, #8763fb);
	display: block;
	width: 4rem;
	border-radius: 0 5px 5px 0;
	height: 50px;
}

.addBtn {
	color: white;
	vertical-align: middle;
}
</style>