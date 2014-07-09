global.BOOT=BOOT=function(params){"use strict";require("./UPPERCASE.JS-COMMON.js"),require("./UPPERCASE.JS-NODE.js"),CPU_CLUSTERING(function(workerData,on,broadcast){var cluster=require("cluster"),version=Date.now(),cpuCount=require("os").cpus().length,i,work=function(sharedData){var fs=require("fs"),path=require("path"),MULTI_LANG_SUPPORT=params.MULTI_LANG_SUPPORT,MULTI_PLATFORM_SUPPORT=params.MULTI_PLATFORM_SUPPORT,rootPath=__dirname+"/..",browserScript="\nglobal = window;\n",securedBrowserScript="\nglobal = window;\n",platformScripts={},css="",logoText,pageContent="",initMultiPlatformScripts,saveMultiPlatformScripts,stringifyJSONWithFunction,loadAll,generatePageContent,startServer,startREPL;initMultiPlatformScripts=function(){var t,e;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(e=MULTI_PLATFORM_SUPPORT[t],platformScripts[t]=void 0===e.initScript?"":e.initScript)},saveMultiPlatformScripts=function(){var t,e;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(e=MULTI_PLATFORM_SUPPORT[t],fs.writeFileSync(e.path,platformScripts[t]))},stringifyJSONWithFunction=function(data){return JSON.stringify(data,function(t,e){return"function"==typeof e?"__THIS_IS_FUNCTION_START__"+e.toString()+"__THIS_IS_FUNCTION_END__":e},"	").replace(/("__THIS_IS_FUNCTION_START__(.*)__THIS_IS_FUNCTION_END__")/g,function(match,content){return eval("("+eval('"'+content.substring('"__THIS_IS_FUNCTION_START__'.length,content.length-'__THIS_IS_FUNCTION_END__"'.length)+'"')+")").toString()})},loadAll=function(t){var e,n,o,r,i,s,a,c,O,P,f,S,l,C,_,I,d,E;e=function(t){var e=t.path,n=t.name;return fs.statSync(rootPath+"/"+e).isDirectory()===!0&&"."!==n[0]&&"node_modules"!==n&&"not_load"!==n&&"deprecated"!==n&&"_"!==n[0]},n=function(){fs.readdirSync(rootPath).forEach(function(t){var n;if(e({path:t,name:t})===!0){BOX(t),browserScript+="BOX('"+t+"');\n",securedBrowserScript+="BOX('"+t+"');\n";for(n in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(n)===!0&&(platformScripts[n]+="BOX('"+t+"');\n")}})},o=function(t){var e,n,o,r=rootPath+"/"+t,i=path.extname(t);if(r.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&i==="."+e)return n="//"+fs.statSync(r).mtime.getTime(),(fs.existsSync(r+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n)&&(o=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(r).toString(),r),fs.writeFileSync(r+".__UPPERCASE_IO_COMPILED",o)),void require(r+".__UPPERCASE_IO_COMPILED");".js"===i||".JS"===i?require(r):".__UPPERCASE_IO_COMPILED"===i&&fs.existsSync(r.substring(0,r.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(r)},r=function(t){var e,n,o,r=rootPath+"/"+t,i=path.extname(t);if(r.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&i==="."+e)return n="//"+fs.statSync(r).mtime.getTime(),fs.existsSync(r+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n?(o=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(r).toString(),r),fs.writeFileSync(r+".__UPPERCASE_IO_COMPILED",o)):o=fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString(),browserScript+=o+"\n",void(securedBrowserScript+=o+"\n");".js"===i||".JS"===i?(o=fs.readFileSync(r).toString(),browserScript+=o+"\n",securedBrowserScript+=o+"\n"):".__UPPERCASE_IO_COMPILED"===i&&fs.existsSync(r.substring(0,r.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(r)},i=function(t){var e,n,o,r=rootPath+"/"+t,i=path.extname(t);if(r.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(e in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(e)===!0&&i==="."+e)return n="//"+fs.statSync(r).mtime.getTime(),fs.existsSync(r+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString().substring(0,n.length)!==n?(o=n+"\n"+MULTI_LANG_SUPPORT[e](fs.readFileSync(r).toString(),r),fs.writeFileSync(r+".__UPPERCASE_IO_COMPILED",o)):o=fs.readFileSync(r+".__UPPERCASE_IO_COMPILED").toString(),void(securedBrowserScript+=o+"\n");".js"===i||".JS"===i?(o=fs.readFileSync(r).toString(),securedBrowserScript+=o+"\n"):".__UPPERCASE_IO_COMPILED"===i&&fs.existsSync(r.substring(0,r.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(r)},s=function(t,e){var n,o,r,i=rootPath+"/"+e,s=path.extname(e);if(i.substring(0,(rootPath+"/UPPERCASE.IO").length)!==rootPath+"/UPPERCASE.IO")for(n in MULTI_LANG_SUPPORT)if(MULTI_LANG_SUPPORT.hasOwnProperty(n)===!0&&s==="."+n)return o="//"+fs.statSync(i).mtime.getTime(),fs.existsSync(i+".__UPPERCASE_IO_COMPILED")===!1||fs.readFileSync(i+".__UPPERCASE_IO_COMPILED").toString().substring(0,o.length)!==o?(r=o+"\n"+MULTI_LANG_SUPPORT[n](fs.readFileSync(i).toString(),i),fs.writeFileSync(i+".__UPPERCASE_IO_COMPILED",r)):r=fs.readFileSync(i+".__UPPERCASE_IO_COMPILED").toString(),void(platformScripts[t]+=r+"\n");".js"===s||".JS"===s?(r=fs.readFileSync(i).toString(),platformScripts[t]+=r+"\n"):".__UPPERCASE_IO_COMPILED"===s&&fs.existsSync(i.substring(0,i.length-".__UPPERCASE_IO_COMPILED".length))===!1&&fs.unlinkSync(i)},a=function(t){var e;o(t),r(t);for(e in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(e)===!0&&s(e,t)},c=function(t,n){var o=function(t){var r,i;if(fs.existsSync(t)===!0)for(r=[],fs.readdirSync(t).forEach(function(o){var i=t+"/"+o;e({path:i,name:o})===!0?r.push(i):fs.statSync(rootPath+"/"+i).isDirectory()!==!0&&n(i)}),i=0;i<r.length;i+=1)o(r[i])};FOR_BOX(function(e){o(e.boxName+"/"+t)})},O=function(t){c(t,o)},P=function(t){c(t,r)},f=function(t){c(t,i)},S=function(){var t;for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&c(t,function(e){s(t,e)})},l=function(t){c(t,a)},C=function(){var t;if(void 0!==params){if(void 0!==params.CONFIG){EXTEND_DATA({origin:global.CONFIG,extend:params.CONFIG}),browserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n";for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(platformScripts[t]+="EXTEND_DATA({ origin : global.CONFIG, extend : "+stringifyJSONWithFunction(params.CONFIG)+" });\n")}void 0!==params.NODE_CONFIG&&(EXTEND_DATA({origin:global.NODE_CONFIG,extend:params.NODE_CONFIG}),NODE_CONFIG.rootPath=rootPath),void 0!==params.BROWSER_CONFIG&&(browserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n",securedBrowserScript+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+stringifyJSONWithFunction(params.BROWSER_CONFIG)+" });\n");for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&void 0!==params[t+"_CONFIG"]&&(platformScripts[t]+="EXTEND_DATA({ origin : global."+t+"_CONFIG, extend : "+stringifyJSONWithFunction(params[t+"_CONFIG"])+" });\n")}CONFIG.version=sharedData.version,CONFIG.workerId=cluster.worker.id,browserScript+="CONFIG.version = "+CONFIG.version+";\n",browserScript+="CONFIG.workerId = "+CONFIG.workerId+";\n",securedBrowserScript+="CONFIG.version = "+CONFIG.version+";\n",securedBrowserScript+="CONFIG.workerId = "+CONFIG.workerId+";\n";for(t in MULTI_PLATFORM_SUPPORT)MULTI_PLATFORM_SUPPORT.hasOwnProperty(t)===!0&&(platformScripts[t]+="CONFIG.version = "+CONFIG.version+";\n",platformScripts[t]+="CONFIG.workerId = "+CONFIG.workerId+";\n")},_=function(){NODE_CONFIG.isNotUsingDB===!0?t():(NODE_CONFIG.maxDataCount=NODE_CONFIG.maxDataCount,NODE_CONFIG.isNotRequiringDBAuth!==!0?CONNECT_TO_DB_SERVER({name:NODE_CONFIG.dbName,host:NODE_CONFIG.dbHost,port:NODE_CONFIG.dbPort,username:NODE_CONFIG.dbUsername,password:NODE_CONFIG.dbPassword},t):CONNECT_TO_DB_SERVER({name:NODE_CONFIG.dbName},t))},I=function(t){var e=rootPath+"/"+t,n=path.extname(t),o=fs.readFileSync(e).toString();".css"===n&&(css+=o)},d=function(){var t,e=UPPERCASE.IO.MODULE("uglify-js"),n=UPPERCASE.IO.MODULE("sqwish");browserScript=e.minify(browserScript,{fromString:!0,mangle:!0}).code,securedBrowserScript=e.minify(securedBrowserScript,{fromString:!0,mangle:!0}).code,css=n.minify(css);for(t in platformScripts)platformScripts.hasOwnProperty(t)===!0&&(platformScripts[t]=e.minify(platformScripts[t],{fromString:!0,mangle:!0}).code)},E=function(){logoText=fs.readFileSync(rootPath+"/UPPERCASE.IO/LOGO"),browserScript="/* Welcome to JavaScript World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+browserScript,css="/* Welcome to CSS World! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+css},a("UPPERCASE.IO/UPPERCASE.JS-COMMON.js"),a("UPPERCASE.IO/OCTOPUS/UPPERCASE.IO-BOX/CORE.js"),n(),r("UPPERCASE.IO/UPPERCASE.JS-BROWSER.js"),o("UPPERCASE.IO/UPPERCASE.JS-NODE.js"),r("UPPERCASE.IO/OCTOPUS/UPPERCASE.IO-BOX/BROWSER.js"),o("UPPERCASE.IO/OCTOPUS/UPPERCASE.IO-DB/NODE.js"),o("UPPERCASE.IO/OCTOPUS/UPPERCASE.IO-TRANSPORT/NODE.js"),l("COMMON"),O("SERVER"),P("BROWSER"),f("BROWSER_SECURED"),S(),C(),r("UPPERCASE.IO/BROWSER_INIT.js"),I("UPPERCASE.IO/STYLE.css"),CONFIG.isDevMode!==!0&&d(),E(),_(t)},generatePageContent=function(){pageContent+="<!DOCTYPE html>",pageContent+="<!--\n\n  Welcome! :)\n"+logoText+"\n  Contact: "+CONFIG.contactAddress+"\n\n-->",pageContent+="<html>",pageContent+="<head>",pageContent+='<meta charset="utf-8">',pageContent+='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'+(CONFIG.isMobileFullScreen===!0?", minimal-ui":"")+'">',pageContent+='<meta name="google" value="notranslate">',void 0!==CONFIG.googleSiteVerificationKey&&(pageContent+='<meta name="google-site-verification" content="'+CONFIG.googleSiteVerificationKey+'" />'),pageContent+='<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">',void 0!==CONFIG.description&&(pageContent+='<meta name="description" content="'+CONFIG.description+'">'),pageContent+='<link href="/favicon.ico" rel="shortcut icon">',pageContent+="<title>"+CONFIG.defaultTitle+"</title>",pageContent+='<link rel="stylesheet" type="text/css" href="__CSS?'+CONFIG.version+'" />',pageContent+="</head>",pageContent+="<body>",pageContent+="<noscript>",pageContent+='<p style="padding:15px;">',pageContent+="자바스크립트 기능이 꺼져있습니다. 브라우저의 자바스크립트 기능을 켜 주시기 바랍니다. 감사합니다~! ^-^",pageContent+="<br>",pageContent+="JavaScript is disabled. Please enable JavaScript in your browser. Thank you~! :)",pageContent+="</p>",pageContent+="</noscript>",pageContent+='<script type="text/javascript" src="__SCRIPT?'+CONFIG.version+'"></script>',pageContent+="</body>",pageContent+="</html>"},startServer=function(){var t,e,n,o,r=require("http"),i=require("https"),s=UPPERCASE.IO.MODULE("socket.io"),a=UPPERCASE.IO.MODULE("formidable").IncomingForm,c=UPPERCASE.IO.MODULE("imagemagick");o=function(t,e){var n,o,r,i,s,O,P,f,S,l,C,_,I,d,E,u,p,N,T,R,g,F,m,U,h,A=t.url,v={};s=function(t){var e=path.extname(t);return".png"===e?"image/png":".jpg"===e||".jpeg"===e?"image/jpeg":".gif"===e?"image/gif":".js"===e?"text/javascript":".json"===e?"application/json":".css"===e?"text/css":".txt"===e?"text/plain":".html"===e?"text/html":".swf"===e?"application/x-shockwave-flash":"application/octet-stream"},O=function(t){return"text/javascript"===t?"utf-8":"text/css"===t?"utf-8":"text/plain"===t?"binary":"text/html"===t?"utf-8":"image/png"===t?"binary":"image/jpeg"===t?"binary":"image/gif"===t?"binary":"application/x-shockwave-flash"===t?"binary":"binary"},P=function(){var t=A.indexOf("?");-1!==t&&(o=parseInt(A.substring(t+1),10),A=A.substring(0,t))},f=function(){n=A.substring(1)},S=function(){var t=n.indexOf("/");-1===t?r=CONFIG.defaultBoxName:(r=n.substring(0,t),n=n.substring(t+1))},l=function(){var t=n.indexOf("/");-1===t?i="":(i=n.substring(0,t),n=n.substring(t+1))},C=function(){var e;return void 0===t.headers.authorization?!1:(e=new Buffer(t.headers.authorization.split(" ")[1],"base64").toString().split(":"),console.log("Decoded authorization: "+e),e[0]===NODE_CONFIG.securedUsername&&e[1]===NODE_CONFIG.securedPassword)},_=function(e){return e===!0?void 0!==t.headers["if-none-match"]||void 0!==t.headers["if-modified-since"]:void 0!==t.headers["if-none-match"]&&parseInt(t.headers["if-none-match"],10)===CONFIG.version||void 0!==t.headers["if-modified-since"]&&new Date(t.headers["if-modified-since"]).getTime()===1e3*parseInt(CONFIG.version/1e3,10)},I=function(t){e.writeHead(302,{Location:t}),e.end()},d=function(){console.log("Someone is trying to AUTH!: "+t.connection.remoteAddress),e.statusCode=401,e.setHeader("WWW-Authenticate",'Basic realm="AUTH"'),e.end()},E=function(){e.statusCode=304,e.end()},u=function(t){var n=t.content,o=t.contentType,r=t.encoding,i=t.isToCache,s=t.lastModifiedTime;e.setHeader("Content-Type",o),void 0!==s?(e.setHeader("ETag",s.getTime()),e.setHeader("Last-Modified",s.toUTCString())):i===!0&&(e.setHeader("ETag",CONFIG.version),e.setHeader("Last-Modified",new Date(CONFIG.version).toUTCString())),e.statusCode=200,e.end(n,r)},p=function(){fs.exists(CONFIG.defaultBoxName+"/favicon.ico",function(t){t===!0?fs.readFile(CONFIG.defaultBoxName+"/favicon.ico","binary",function(t,n){null===t&&e.end(n,"binary")}):fs.readFile("UPPERCASE.IO/favicon.ico","utf-8",function(t,n){null===t&&e.end(n,"binary")})})},N=function(){void 0===t.headers.authorization?d():C()===!0?fs.exists(CONFIG.defaultBoxName+"/AUTHED.html",function(t){t===!0?fs.readFile(CONFIG.defaultBoxName+"/AUTHED.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))}):fs.readFile("UPPERCASE.IO/AUTHED.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))})}):fs.readFile("UPPERCASE.IO/AUTH_ERROR.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))})},T=function(){u({content:pageContent,contentType:"text/html",encoding:"utf-8"})},R=function(){_()===!0&&CONFIG.isDevMode!==!0?E():o!==CONFIG.version&&CONFIG.isDevMode!==!0?I(A+"?"+CONFIG.version):u(C()===!0?{content:securedBrowserScript,contentType:"text/javascript",encoding:"utf-8",isToCache:!0}:{content:browserScript,contentType:"text/javascript",encoding:"utf-8",isToCache:!0})},g=function(){_()===!0&&CONFIG.isDevMode!==!0?E():o!==CONFIG.version&&CONFIG.isDevMode!==!0?I(A+"?"+CONFIG.version):u({content:css,contentType:"text/css",encoding:"utf-8",isToCache:!0})},F=function(){var n=new a,o=[],i={};n.uploadDir="__RF/"+r+"/__TEMP/",fs.existsSync(rootPath+"/"+n.uploadDir)===!1&&console.log("Not exists folder: "+rootPath+"/"+n.uploadDir),void 0!==global[r]&&fs.existsSync(rootPath+"/"+n.uploadDir)===!0?(n.on("field",function(t,e){i[t]=e}).on("file",function(t,e){o.push({tempPath:e.path,size:e.size,name:e.name,type:e.type,lastModifiedTime:e.lastModifiedDate})}).on("end",function(){var t=global[r].DB("__UPLOAD_FILE"),n=0;EACH(o,function(s){var a=s.tempPath;return s.size>1024*CONFIG.maxUploadFileMB*1024?(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='SIZE'</script>","utf-8"),!1):(EACH(i,function(t,e){""!==t.trim()&&(s[e]=t)}),REMOVE_AT({data:s,key:"tempPath"}),void c.readMetadata(a,function(i,O){var P=function(){t.create(s,function(t,i){var s=UPPERCASE.IO.MODULE("mv"),c=rootPath+"/__RF/"+r+"/"+i.id;void 0===t&&s(a,c,function(){n+=1,n===o.length&&(EACH(o,function(t,e){o[e]=PACK_DATA(t)}),e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>fileDataSet="+JSON.stringify(o)+"</script>","utf-8")),console.log("File '"+c+"' ("+i.name+", "+i.size+" byte) uploaded.")})})};void 0!==O.exif?(s.exif=O.exif,c.convert([a,"-auto-orient",a],function(){P()})):P()}))})}).on("error",function(){e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8")}),n.parse(t)):(e.writeHead(200,{"Content-Type":"text/html"}),e.end("<script>errorCode='ERROR'</script>","utf-8"))},m=function(){var t,e,i;"UPPERCASE.JS-BROWSER-FIX/IE/BROWSER/DOM/TAG/IFRAME_FIX_REDIRECT.html"===n?(t=rootPath+"/"+r+"/R/"+n,e=s(n),i=O(e),fs.exists(t,function(n){n===!0?fs.readFile(t,i,function(t,n){null!==t?h(t):u({content:n,contentType:e,encoding:i})}):h()})):_()===!0?E():o!==CONFIG.version?I(A+"?"+CONFIG.version):(t=rootPath+"/"+r+"/R/"+n,void 0!==v[t]?u(v[t]):(e=s(n),i=O(e),fs.exists(t,function(n){n===!0?fs.readFile(t,i,function(n,o){null!==n?h(n):u(v[t]={content:o,contentType:e,encoding:i,isToCache:!0})}):h()})))},U=function(){var t;_(!0)===!0?E():(t=rootPath+"/__RF/"+r+"/"+n,fs.exists(t,function(e){e===!0?fs.readFile(t,"binary",function(e,n){null!==e?h(e):fs.stat(t,function(t,e){null!==t?h(t):u({content:n,contentType:"application/octet-stream",encoding:"binary",lastModifiedTime:e.mtime})})}):h()}))},h=function(t){void 0!==t&&console.log("[UPPERCASE.IO] ERROR:",t),fs.exists(CONFIG.defaultBoxName+"/ERROR.html",function(t){t===!0?fs.readFile(CONFIG.defaultBoxName+"/ERROR.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))}):fs.readFile("UPPERCASE.IO/ERROR.html","utf-8",function(t,n){null===t&&(e.writeHead(500,{"Content-Type":"text/html"}),e.end(n,"utf-8"))})})},P(),f(),"favicon.ico"===n?p():"__AUTH"===n?N():""===n?T():"__SCRIPT"===n?R():"__CSS"===n?g():(S(),l(),"R"===i?m(r):"RF"===i?U(r):"__UPLOAD"===n&&"POST"===t.method.toUpperCase()?F():h())},t=r.createServer(o).listen(CONFIG.port),void 0!==NODE_CONFIG.securedPort&&(e=i.createServer({key:fs.readFileSync(rootPath+"/"+NODE_CONFIG.securedKeyFileName),cert:fs.readFileSync(rootPath+"/"+NODE_CONFIG.securedCrtFileName)},o).listen(NODE_CONFIG.securedPort)),n=s.listen(void 0===CONFIG.socketIOPorts||void 0===CONFIG.socketIOPorts[CONFIG.workerId]?CONFIG.port+CONFIG.workerId:CONFIG.socketIOPorts[CONFIG.workerId]),console.log("Socket.IO port:",void 0===CONFIG.socketIOPorts||void 0===CONFIG.socketIOPorts[CONFIG.workerId]?CONFIG.port+CONFIG.workerId:CONFIG.socketIOPorts[CONFIG.workerId]),CONFIG.isDevMode===!0?n.set("log level",2):n.set("log level",1),n.configure(function(){n.set("flash policy port",void 0===CONFIG.flashPolicyServerPort?CONFIG.port+1955:CONFIG.flashPolicyServerPort),n.set("transports",CONFIG.transports)}),CONNS.socketPack=n.sockets,CONNS.broadcastToAllWorkers=broadcast,INIT_OBJECTS(),on("emitToAllSockets",function(t){CONNS.emitToAllSockets(t)}),FOR_BOX(function(t){void 0!==t.MAIN&&t.MAIN(workerData,{on:on,broadcast:broadcast})}),console.log("[UPPERCASE.IO] "+CONFIG.defaultTitle+" WORKER #"+workerData.id+" (PID:"+workerData.pid+") BOOTed. => http://localhost:"+CONFIG.port+(void 0!==NODE_CONFIG.securedPort?" SECUREd => https://localhost:"+NODE_CONFIG.securedPort:""))},startREPL=function(){DELAY(1,function(){var t=require("repl");t.start({prompt:"UPPERCASE.IO> ",input:process.stdin,output:process.stdout})})},initMultiPlatformScripts(),loadAll(function(){saveMultiPlatformScripts(),generatePageContent(),startServer(),NODE_CONFIG.isUsingREPL===!0&&startREPL()})},fork=function(){cluster.fork().send({version:version})};work({version:version})})};