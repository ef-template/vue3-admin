import {
	splitVendorChunk,
	splitVendorChunkPlugin
} from 'vite'
const getVendorChunk = splitVendorChunk();

/**
 * rollup拆包策略
 * @param {*} id
 * @param {*} options
 */
export default function(id, options) {
	let splitConfig = {
		'vue': /[\\/]node_modules[\\/](@vue|vue|vuex|vue-router)[\\/]/,
    //  element-plus 拆处理目前会导致组件样式问题
		// 'element-plus': /[\\/]node_modules[\\/]element-plus[\\/]/
	};

	for (let key in splitConfig) {
		let sc = splitConfig[key];
		if (sc.test(id)) return key;
	}

	return getVendorChunk(id, options);
}
