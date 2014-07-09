global.MULTI_PROTOCOL_SOCKET_SERVER=MULTI_PROTOCOL_SOCKET_SERVER=METHOD({run:function(_,E){"use strict";var o=_.socketServerPort,t=_.webSocketServerPort,e=_.webSocketFixServerPort;SOCKET_SERVER(o,E),WEB_SOCKET_SERVER({port:t,fixServerPort:e},E)}}),global.WEB_SOCKET_FIX_SERVER=WEB_SOCKET_FIX_SERVER=METHOD(function(){"use strict";var _=5,E=2;return{run:function(o,t){var e={},n={},R={},a={},i={},d={},S=function(_,E,o,t){void 0===e[_]&&(e[_]={}),void 0===e[_][E]?e[_][E]=o:e[_][E]+=o,t===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__ADD_CONTENT",data:{clientId:_,requestKey:E,content:o}})},C=function(_,E,o){void 0!==e[_]&&delete e[_][E],o===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__REMOVE_CONTENT",data:{clientId:_,requestKey:E}})},c=function(_,E){void 0!==R[_]?R[_](E):N(_,E,!0)},T=function(_,E,o){var t=n[_][E];void 0!==t&&EACH(t,function(t){t(o,function(o){c(_,{methodName:"__CALLBACK_"+E,data:o})})})},r=function(_){void 0!==i[_]&&(i[_].remove(),delete i[_]),delete R[_]},N=function(_,E,o){void 0===a[_]&&(a[_]=[]),a[_].push(E),o===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__SEND",data:{clientId:_,params:E}})},I=function(_,E){REMOVE({data:a[_],key:0}),0===a[_].length&&delete a[_],E===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__REMOVE_FIRST_WATING_PARAMS",data:_})},v=function(_,E){void 0!==d[_]&&(d[_].remove(),delete d[_]),E===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__REMOVE_LIFE_DELAY",data:_})},O=function(_,E){r(_),void 0!==n[_]&&delete n[_],void 0!==a[_]&&delete a[_],v(_),void 0!==e[_]&&delete e[_],E===!0&&void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__REMOVE_ALL",data:_})};void 0!==CPU_CLUSTERING.on&&(CPU_CLUSTERING.on("__WEB_SOCKET_FIX_SERVER__RUN_METHODS",function(_){var E=_.clientId;void 0!==n[E]&&T(E,_.methodName,_.data)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_SERVER__REMOVE_FIRST_WATING_PARAMS",function(_){void 0!==a[_]&&I(_)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_SERVER__SEND",function(_){var E=_.clientId,o=_.params;void 0!==R[E]?(R[E](o),void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__REMOVE_FIRST_WATING_PARAMS",data:E})):N(E,o)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_SERVER__REMOVE_LIFE_DELAY",function(_){v(_)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_SERVER__REMOVE_ALL",function(_){O(_)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_SERVER__ADD_CONTENT",function(_){S(_.clientId,_.requestKey,_.content)}),CPU_CLUSTERING.on("__WEB_SOCKET_FIX_SERVER__REMOVE_CONTENT",function(_){C(_.clientId,_.requestKey)})),WEB_SERVER(o,function(o,N,u){var s,U,f,L=o.params,K=L.clientId,V=INTEGER(L.connectionKey),P=INTEGER(L.requestKey),m=L.content,l="true"===L.isEnd,A=function(_,E){void 0!==n[K]?T(K,_,E):void 0!==CPU_CLUSTERING.broadcast&&CPU_CLUSTERING.broadcast({methodName:"__WEB_SOCKET_FIX_SERVER__RUN_METHODS",data:{clientId:K,methodName:_,data:E}}),"__DISCONNECTED"===_&&O(K,!0)};void 0===K?(K=RANDOM_STR(40),s=n[K]={},t({ip:o.ip},U=function(_,E){var o=s[_];void 0===o&&(o=s[_]=[]),o.push(E)},f=function(_,E){var o=s[_];void 0!==o&&(void 0!==E?REMOVE({data:o,value:E}):delete s[_])},function(_,E){var o=_.methodName;c(K,_),void 0!==E&&U("__CALLBACK_"+o,function(_){E(_),f("__CALLBACK_"+o)})},function(){A("__DISCONNECTED")}),N({contentType:"application/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.response('"+STRINGIFY({clientId:K,connectionKey:V,requestKey:P})+"')"})):l===!0?(RUN(function(){var o,t=void 0===e[K]?void 0:PARSE_STR(e[K][P]),n=void 0===t?void 0:t.methodName,S=void 0===t?void 0:t.data;void 0!==n?(A(n,S),N({contentType:"application/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.removeRequestInfo("+P+")"})):void 0!==R[K]?R[K]():(v(K,!0),o=function(){A("__DISCONNECTED")},R[K]=function(_){N({contentType:"application/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.response('"+STRINGIFY({connectionKey:V,clientId:K,params:_,requestKey:P})+"')"}),r(K),d[K]=DELAY(E,o)},u(o),i[K]=DELAY(_,function(){void 0!==R[K]&&R[K]()}),void 0!==a[K]&&(R[K](a[K][0]),I(K,!0)))}),C(K,P,!0)):(S(K,P,m,!0),N({contentType:"application/javascript",content:"CONNECT_TO_WEB_SOCKET_SERVER.request("+P+")"}))}),console.log("[UPPERCASE.IO-WEB_SOCKET_FIX_SERVER] RUNNING WEB SOCKET FIX SERVER... (PORT:"+o+")")}}}),global.WEB_SOCKET_SERVER=WEB_SOCKET_SERVER=METHOD({run:function(_,E){"use strict";var o,t,e,n=require("ws").Server;CHECK_IS_DATA(_)===!0?(o=_.port,t=_.fixServerPort):o=_,e=new n({port:o}),e.on("connection",function(_){var o,t,e,n,R,a={},i=function(_,E){var o=a[_];void 0!==o&&EACH(o,function(o){o(E,function(E){R({methodName:"__CALLBACK_"+_,data:E})})})};_.on("message",function(_){var E=PARSE_STR(_);void 0!==E&&i(E.methodName,E.data)}),_.on("close",function(){t!==!0&&i("__DISCONNECTED"),a=void 0}),_.on("error",function(_){i("__ERROR",_)}),o=_.upgradeReq.headers["x-forwarded-for"],void 0===o&&(o=_.upgradeReq.connection.remoteAddress),E({ip:o},e=function(_,E){var o=a[_];void 0===o&&(o=a[_]=[]),o.push(E)},n=function(_,E){var o=a[_];void 0!==o&&(void 0!==E?REMOVE({data:o,value:E}):delete a[_])},R=function(E,o){var t=E.methodName;_.send(STRINGIFY(E)),void 0!==o&&e("__CALLBACK_"+t,function(_){o(_),n("__CALLBACK_"+t)})},function(){t=!0,_.close()})}),console.log("[UPPERCASE.IO-WEB_SOCKET_SERVER] RUNNING WEB SOCKET SERVER... (PORT:"+o+")"),void 0!==t&&WEB_SOCKET_FIX_SERVER(t,E)}});