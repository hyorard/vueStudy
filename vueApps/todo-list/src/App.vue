<template>
  <div>
    <todo-header></todo-header>
    <todo-input v-on:sendTodo="save_clear"></todo-input>
    <todo-list v-bind:Items="newTodo"
	v-on:sendRmSig="removeItem"
	v-on:sendTogSig="toggleItem"></todo-list>
    <todo-footer v-on:sendClearAllSig="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
	data: function() {
		return {
			newTodo: [],
		};
	},
	methods: {
		save_clear: function(newItem) {
			var item = newItem;
			this.newTodo.push(item);
			localStorage.setItem(item.name, JSON.stringify(item));
		},
		removeItem: function(Item, index) {
			this.newTodo.splice(index, 1);
			localStorage.removeItem(Item);
		},
		clearAll: function() {
			this.newTodo = [];
			localStorage.clear();
		},
		toggleItem: function(Item, index) {
			this.newTodo[index].finished = !this.newTodo[index].finished;
			localStorage.removeItem(Item);
			localStorage.setItem(Item.name, JSON.stringify(Item));
		},
	},
	created: function() {
		if (localStorage.length > 0) {
			for (var i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
					this.newTodo.push(
						JSON.parse(localStorage.getItem(localStorage.key(i))),
					);
				}
			}
		}
	},
	components: {
		'todo-header': TodoHeader,
		'todo-input': TodoInput,
		'todo-list': TodoList,
		'todo-footer': TodoFooter,
	},
};
</script>

<style>
body {
	text-align: center;
	background: linear-gradient(to right, #0d87ac, #336d3d);
	font-family: 'Chilanka', cursive;
}

input {
	border-style: groove;
	width: 200px;
}

button {
	border-style: groove;
}

.shadow {
	box-shadow: 5px 10px 10px rgb(5, 5, 5);
}
</style>