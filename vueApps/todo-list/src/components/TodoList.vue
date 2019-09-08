<template>
  <div>
      <ul>
        <li v-for="(Item,index) in Items" v-bind:key="Item.name" v-bind:class="{finished: Item.finished, unfinished: !Item.finished}">
			<i class="far fa-check-square" v-on:click="toggleItem(Item,index)"></i>
            {{Item.name}}
			<span class="rmContainer">
			<i class="fas fa-minus-circle deleteBtn" v-on:click="removeItem(Item,index)"></i>
			</span>
		</li>
      </ul>
  </div>
</template>

<script>
export default {
	props: ['Items'],
	methods: {
		removeItem: function(Item, index) {
			this.$emit('sendRmSig', Item, index);
		},
		toggleItem: function(Item, index) {
			this.$emit('sendTogSig', Item, index);
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	padding-left: 0px;
	text-align: left;
	width: 800px;
	position: relative;
	left: 25%;
}

li {
	padding-left: 0px;
	min-height: 50px;
}

.finished {
	color: rgb(88, 88, 207);
	font-size: x-large;
}
.unfinished {
	color: red;
	font-size: x-large;
}

.deleteBtn {
	color: rgb(99, 22, 22);
	vertical-align: middle;
}

.rmContainer {
	float: right;
	width: 4rem;
}
</style>