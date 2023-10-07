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
		// 'element-ui': /[\\/]node_modules[\\/]element-ui[\\/]/
	};

	for (let key in splitConfig) {
		let sc = splitConfig[key];
		if (sc.test(id)) return key;
	}

	return getVendorChunk(id, options);
}
