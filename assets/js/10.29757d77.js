(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(t,a,e){"use strict";e.r(a);var l=e(6),s=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"元素权重"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元素权重"}},[t._v("#")]),t._v(" 元素权重")]),t._v(" "),e("p",[t._v("元素会被多个样式一层层作用，这就是层叠样式表的来源。如果多个样式作用在元素上就会产生优先级权重问题。")]),t._v(" "),e("p",[t._v("使用类、ID、伪类都有不同的权重，具体应用哪条规则要看权限大小。")]),t._v(" "),e("ul",[e("li",[t._v("相同权重的规则应用最后出现的")]),t._v(" "),e("li",[t._v("可以使用"),e("code",[t._v("!important")]),t._v("强制提升某个规则的权限。")])]),t._v(" "),e("h2",{attrs:{id:"权重应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权重应用"}},[t._v("#")]),t._v(" 权重应用")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("规则")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("权重")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("class，类属性值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0010")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("标签，伪元素")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0001")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("*")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("行内样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1000")])])])]),t._v(" "),e("p",[t._v("下面是ID权限大于CLASS的示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style>\n  .color {\n  \tcolor: red;\n  }\n\n  #hot {\n  \tcolor: green;\n  }\n</style>\n    \n<h2 class="color" id="hot">laot</h2>\n')])])]),e("p",[t._v("属性权重的示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style>\n  /* 权重:0021 */\n  h2[class="color"][id] {\n\t\tcolor: red;\n  }\n\n  /* 权重:0012 */\n  article h2[class="color"] {\n  \tcolor: blue;\n  }\n</style>\n\n<article>\n\t<h2 class="color" id="hot">laot</h2>\n</article>\n')])])]),e("p",[t._v("行级权重优先级最高")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<style>\n  /* 权重:0012 */\n  article h2[class="color"] {\n  \tcolor: blue;\n  }\n\n  #hot {\n  \tcolor: black;\n  }\n</style>\n\n<h2 class="color" id="hot" style="color:green;">laot</h2>\n')])])]),e("h2",{attrs:{id:"强制优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制优先级"}},[t._v("#")]),t._v(" 强制优先级")]),t._v(" "),e("p",[t._v("有时在规则冲突时，为了让某个规则强制有效可以使用 "),e("code",[t._v("!important")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<style>\n  h2 {\n \t color: red !important;\n  }\n\n  h2 {\n \t color: green;\n  }\n</style>\n\n<h2>laot</h2>\n")])])]),e("p",[t._v("两条规则权限一样，默认应用第二个规则，但第一个规则使用了"),e("code",[t._v("!important")]),t._v("提升了权限，所以被应用。")]),t._v(" "),e("h2",{attrs:{id:"less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[t._v("#")]),t._v(" LESS")]),t._v(" "),e("p",[t._v("为了使 CSS 更易维护和扩展，并减少在书写规则时对权重的思考，使用LESS是不错的主意。\n很多软件提供了自动生成LESS的功能，下面是在VSCODE中使用的方法。")]),t._v(" "),e("ol",[e("li",[t._v("安装插件 "),e("code",[t._v("easy-less")]),t._v(" 编译LESS")]),t._v(" "),e("li",[t._v("编辑扩展名为 "),e("code",[t._v(".less")]),t._v(" 的文件将自动生成同名的 "),e("code",[t._v(".css")]),t._v(" 文件。")])]),t._v(" "),e("p",[t._v("下面是一个LESS的示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("main {\n    article {\n        h1 {\n            color: red;\n        }\n    }\n}\n")])])]),e("p",[t._v("将生成"),e("code",[t._v("css")]),t._v("文件如下。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("main article h1 {\n  color: red;\n}\n")])])]),e("h2",{attrs:{id:"继承规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#继承规则"}},[t._v("#")]),t._v(" 继承规则")]),t._v(" "),e("p",[t._v("子元素可以继承父元素设置的样式。")]),t._v(" "),e("ul",[e("li",[t._v("子元素并不会继承全部样式。比如边框、高度等并不会继承。")]),t._v(" "),e("li",[t._v("继承的规则没有权重。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<style>\n  article {\n    color: red;\n    border: solid 1px #ddd;\n  }\n</style>\n...\n\n<article>\n\t<h2>laot <span>是个帅哥</span></h2>\n</article>\n")])])]),e("p",[t._v("上例中 h2 标签没有设置颜色样式，将继承"),e("code",[t._v("html")]),t._v("的颜色，并且边框没有产生继承，")]),t._v(" "),e("h2",{attrs:{id:"通配符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[t._v("#")]),t._v(" 通配符")]),t._v(" "),e("p",[t._v("在开发中使用 "),e("code",[t._v("*")]),t._v(" 选择器会有一个问题。因为通配符的权限为0，而继承的规则没有权重，看以下代码产生的问题。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<style>\n  * {\n  \tcolor: red;\n  }\n\n  h2 {\n  \tcolor: blue;\n  }\n</style>\n\n<article>\n\t<h2>laot <span>是个帅哥</span></h2>\n</article>\n")])])]),e("p",[e("code",[t._v("h2")]),t._v("中的"),e("code",[t._v("span")]),t._v("并没有继承"),e("code",[t._v("h2")]),t._v("的颜色，就是因为继承没有权重。而使用了"),e("code",[t._v("*")]),t._v("权重为0的规则。")])])}),[],!1,null,null,null);a.default=s.exports}}]);