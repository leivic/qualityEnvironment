//vuex状态管理器 先cd到项目地址 npm install vuex --save 
//npm install是将模块安装到项目的 nnode_modules里面 
//--save是将依赖添加到运行环境  dependencies里面

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//安装vuex

const store = new Vuex.Store({ //使用vuex.store构造函数 生成对象store
    state: {
        // 定义一个name，以供全局使用
        name: '张三',
        // 定义一个number，以供全局使用
        number: 0,
        // 定义一个list，以供全局使用
        list: [
            { id: 1, name: '111' },
            { id: 2, name: '222' },
            { id: 3, name: '333' },
        ]
    },
    // 在store对象中增加getters属性
    getters: {
        getMessage(state) { // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
            return `hello${state.name}`;//es5模版变量写法
        }
    },
    mutations: {
	setNumber(state) {
	    state.number = 5;
	},
	setNumberIsWhat(state, payload) { // 增加一个带参数的mutations方法，并且官方建议payload为一个对象
	//vuex比较奇怪 可以随便取  但不能随便改	
	    state.number = payload.number;
	},
    },
    actions: {//增加一个action属性 
	setNum(content, payload) {   // 增加payload参数
	    return new Promise(resolve => {//模拟一个异步操作 一秒后修改number为参数payload对象的number
		setTimeout(() => {
		    content.commit('setNumberIsWhat', { number: payload.number });
		    resolve();
		}, 1000);
	    });
	},
    }
    
    
});

export default store;//导出对象store es5模块化 import export