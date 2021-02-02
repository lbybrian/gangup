export default {
    path : '/player',
    component : () => import('@/views/Player'),
	redirect:'/player/checkbox',
    children: [
	{
		path: "checkbox",
		component: ()=> import("@/components/Ggzj/checkbox"),
	}, 
    {
    	path: "formInfo",
        component: ()=> import("@/components/Ggzj/formInfo"),
    }, 
    {
    	path: "wordCloud",
        component: ()=> import("@/components/Ggzj/wordCloud"),
    }, 
    {
    	path: "sanKey",
        component: ()=> import("@/components/Ggzj/sanKey"),
    }, 
    {
    	path: "gaugeChart",
        component: ()=> import("@/components/Ggzj/gaugeChart"),
    },
	{
		path: "scatterChart",
	    component: ()=> import("@/components/Ggzj/mapChart/scatterChart"),
	},
	{
		path: "mapBox",
	    component: ()=> import("@/components/Ggzj/mapChart/mapBox"),
	},
	{
		path: "olGisMap",
	    component: ()=> import("@/components/Ggzj/mapChart/olGisMap"),
	},
//  {
//      component: "modules/about/dataTable",
//      path: "/about/dataTable",
//  }, 
//  {
//      component: "modules/about/relationship",
//      path: "/about/relationship",
//  }, 
//{
//      component: "modules/about/formInfo",
//      path: "/about/formInfo",
//  }, {
//      component: "modules/about/menuItem",
//      path: "/about/menuItem",
//  }, {
//      component: "modules/about/gallery",
//      path: "/about/gallery",
//  }, {
//      component: "modules/about/chart/barChart",
//      path: "/about/barChart",
//  }, {
//      component: "modules/about/chart/lineChart",
//      path: "/about/lineChart",
//  }, {
//      component: "modules/about/chart/scatterChart",
//      path: "/about/scatterChart",
//  }, {
//      component: "modules/about/chart/pieChart",
//      path: "/about/pieChart",
//  }, {
//      component: "modules/about/chart/gaugeChart",
//      path: "/about/gaugeChart",
//  }, {
//      component: "modules/about/chart/radarChart",
//      path: "/about/radarChart",
//  }, {
//      component: "modules/about/chart/funnelChart",
//      path: "/about/funnelChart",
//  }, {
//      component: "modules/about/chart/radarChart",
//      path: "/about/radarChart",
//  }, {
//      component: "modules/about/chart/treeChart",
//      path: "/about/treeChart",
//  }, {
//      component: "modules/about/flowChart",
//      path: "/about/flowChart",
//  }, {
//      component: "modules/about/arcChart",
//      path: "/about/arcChart",
//  }, {
//      component: "modules/about/wordCloud",
//      path: "/about/wordCloud",
//  }, {
//      component: "modules/about/mapBox",
//      path: "/about/mapBox",
//  }, {
//    component: "modules/about/tree",
//    path: "/tree",
//  },{
//      component: "modules/about/sanKey",
//      path: "/about/sanKey",
//  },{
//      component: "modules/about/olGisMap",
//      path: "/about/olGisMap",
//  }, 
    ]
}