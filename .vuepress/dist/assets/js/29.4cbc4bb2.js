(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{153:function(t,n,s){"use strict";s.r(n);var e=s(0),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"chapter-6-integrating-business-logic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-6-integrating-business-logic","aria-hidden":"true"}},[t._v("#")]),t._v(" Chapter 6. Integrating Business Logic")]),t._v(" "),s("h2",{attrs:{id:"transforming-response-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforming-response-content","aria-hidden":"true"}},[t._v("#")]),t._v(" Transforming Response Content")]),t._v(" "),s("h2",{attrs:{id:"calling-other-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calling-other-apis","aria-hidden":"true"}},[t._v("#")]),t._v(" Calling Other APIs")]),t._v(" "),s("p",[t._v("Need to simplify this, using just a single loop rather than a nested syntax. Also, could probably just use a Laravel collection method and eliminate the loop altogether.")]),t._v(" "),s("pre",[s("code",[t._v("$api = $platform['api'];\n$options = [];\n\n$responseBody = $event['response']['content'];\n\nforeach ($responseBody['resource'] as $n => $record) {\n    \n    $statusUpdates = [];\n    \n    if(isset($record['status_history'])) {\n    \n        foreach($record['status_history'] as $sh) {\n        \n           $translate = [];\n        \n           $translate['text'][] = $sh['STATUS'];\n           $translate['source'] = \"English\";\n           $translate['target'] = \"Spanish\";\n    \n           $payload = json_encode($translate);\n        \n           $url = \"watson/\";\n           $post = $api->post;\n           $result = $post($url, $payload, $options);    \n         \n           $sh['STATUS'] = $result['content']['translations'][0]['translation'];\n    \n           $statusUpdates[] = $sh;\n    \n        }\n    \n    }\n\n    $record['status_history'] = $statusUpdates;\n    \n    $responseBody['resource'][$n] = $record;\n    \n}\n\n$event['response']['content'] = $responseBody;")])])])}],!1,null,null,null);a.options.__file="chapter06.md";n.default=a.exports}}]);