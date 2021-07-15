export default {
	path: '/ab',
	component: () =>import('@/components/AB'),
	meta: {
			isShow: true //隐藏header和footer
	},
	children: [
		{
			path: 'cs',
			component: () =>import('@/components/CS'),
			meta: {
				isShow: true //隐藏header和footer
			}
		}
	]
}