(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/Header/header.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 20px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ed3b7d;\n  height: 60px;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n  height: 256px;\n}.a{\n  fill: #fff;\n }\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n\n.welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n",""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Header/Header.stories.tsx":"./src/stories/Header/Header.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Header/Header.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CCLHeader",(function(){return CCLHeader}));__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/stories/Header/header.css");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Header_Header=function Header(){return Object(jsx_runtime.jsx)("header",{children:Object(jsx_runtime.jsx)("div",{className:"wrapper",children:Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1366 768",children:[Object(jsx_runtime.jsx)("title",{children:"CANDY CHUPS Lab."}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M107.31,420.79c-24.44,0-39.2-16.6-39.2-39.2,0-25.59,16.15-46.35,40.13-46.35,18.21,0,29.17,11.42,29.17,25.94a24.38,24.38,0,0,1-24,24.91c-9.69,0-12.69-6.34-12.69-14.3,0-10.14,4.38-22.25,9.11-31.13h-.23c-5.65,8.76-10.84,21.79-10.84,32.52,0,8.76,3.69,15.33,15.45,15.33s25.48-6.46,32.4-13.37c2,.34,2.88,2.07,2.88,4.49C149.51,393.81,136.14,420.79,107.31,420.79Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M242.56,380.44c2,.34,2.88,2.07,2.88,4.5,0,12.33-6.8,35.85-23.18,35.85-10.14,0-15.79-8.53-18.21-17.41-.69,4.61-3.69,9.92-8.3,9.92-3.81,0-5.65-4.5-5.65-10.15a35.76,35.76,0,0,1,1.61-10.26h-.23a57.93,57.93,0,0,0-3.34,13.72c-7.27,10.38-16,17.87-29.63,17.87s-19.37-9.45-19.37-18.33c0-8.07,4.49-15.68,11.76-15.68.46,6,7,8.65,12.1,8.65,13,0,29.4-16,37.82-32.4a80.94,80.94,0,0,1,7.84-20.52c-20.18,0-26.06,7.38-26.06,13.72a8.76,8.76,0,0,0,8.65,8.87c0,8.07-9.34,14.65-18.68,14.65-14.87,0-22.94-11.07-22.94-22.83,0-19.83,16.72-27.56,35.28-27.56a75.42,75.42,0,0,1,29.28,6,21.22,21.22,0,0,1,15.45-6.23c9.92,0,13.72,4.73,13.72,10.38,0,5.42-3.45,11.41-8.41,14.87a82,82,0,0,1,3.57-16.49h-.23c-4.5,9.8-6.92,21.91-6.92,34.13a86.08,86.08,0,0,0,2.19,19.72A52.75,52.75,0,0,0,242.56,380.44Zm-45.08,8.65a9.59,9.59,0,0,0,2.53-.35,28.28,28.28,0,0,1-.69-6,65,65,0,0,1,.92-8.76H200a43.78,43.78,0,0,1-5.19,14.53A4.58,4.58,0,0,0,197.48,389.09Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M267.35,377.21c-5.54-6.92-14.18-16.14-21.33-21.67,4.72-9.34,13.14-20.41,24.09-20.41,16.15,0,31.36,24.79,37.24,36.55l.23-.12a83.38,83.38,0,0,0-5.18-11.87,31.38,31.38,0,0,1-.58-6.23c0-10.61,5.53-18.22,13.95-18.22,7.61,0,11.65,4.85,11.65,10.73a10.85,10.85,0,0,1-.23,2.65c-15.11.46-16.49,19.94-16.49,30.55A43.1,43.1,0,0,1,314,395.66c0,14.64-7.15,23.52-20.18,25.13-6.11-15.79-13.48-27.44-22.94-39.31l-.11.11a150.54,150.54,0,0,1,7.26,13.26c-1.15,13.72-12.68,25.94-24.21,25.94-11.3,0-16-9.11-16-17.87,0-6.34,2.54-12.57,6.69-14.87,2.19,3.46,6.69,6.45,10.61,6.45C261.7,394.5,267.35,389.89,267.35,377.21Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M321,389.89A117.93,117.93,0,0,1,326.15,358a33.28,33.28,0,0,0,11.53,2c1.84,0,3.11-.12,3.11-.12v-.23c-14.41-1.73-23.06-9.45-23.06-21.68a33.44,33.44,0,0,1,1.61-9.91c10.84,7.38,26.52,10.38,37.82,10.38,2.31,0,4.38-.23,5.88-.35-3.92,8-7,18.1-9.11,28.59h.23c6.69-15.56,15.45-31.36,29.17-31.36,12.8,0,18.22,12.69,18.22,28.25,0,18-10.38,56.61-32.28,56.61-11.76,0-23.75-12.57-28.48-23.87h-.46c3.11,7.61,6.22,12.92,11.18,18.45a14.52,14.52,0,0,1-12.1,6.11C330.3,420.79,321,413.18,321,389.89Zm51.54-41.5c-8.42,18.1-14.3,36.89-19.14,55.57,8.87-14.07,15.79-37.24,19.37-55.57Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M423.11,420.68c-14.87-1.16-21.21-13.61-21.21-31,0-10.26,1.38-19.6,5.3-31.7,3.34,1.5,8.19,2,11.88,2,1,0,2-.12,2.76-.12v-.23c-14.52-1.73-23.06-9.45-23.06-21.68A35.4,35.4,0,0,1,400.4,328c10.84,7.38,26.52,10.38,37.81,10.38,2.31,0,5.88-.35,5.88-.35-5.18,10.72-10.14,27.21-10.14,42.2A56.63,56.63,0,0,0,436,396.12a33.53,33.53,0,0,1-8.18,15.1l.23.35c10.14-8.65,13.14-20.64,13.14-31.71,0-7.61-.92-13.83-2.53-22.36,4.95-13.49,15.56-22.26,24.32-22.26,7.73,0,14.07,6.69,14.07,22.83,0,22.48-12.34,41.05-27.67,56.38C432.45,431.4,411.93,442,399.82,442c-7.61,0-10.95-4.15-10.95-9.23,0-6.68,5.88-15.1,15.33-18a32.66,32.66,0,0,0,18.91,6.11Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M539.91,420.79c-24.45,0-39.2-16.6-39.2-39.2,0-25.59,16.14-46.35,40.12-46.35,18.22,0,29.17,11.42,29.17,25.94a24.38,24.38,0,0,1-24,24.91c-9.69,0-12.69-6.34-12.69-14.3,0-10.14,4.39-22.25,9.11-31.13h-.23c-5.65,8.76-10.84,21.79-10.84,32.52,0,8.76,3.69,15.33,15.45,15.33s25.48-6.46,32.4-13.37c2,.34,2.88,2.07,2.88,4.49C582.1,393.81,568.73,420.79,539.91,420.79Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M673.76,340c-7.6,13.26-12.45,35.51-12.45,52.46v3a52.75,52.75,0,0,0,9-15c2,.34,2.88,2.07,2.88,4.5,0,12.33-6.69,35.85-23.18,35.85-10,0-17.41-9.68-19-21.21l-8.65-1.27c-5.53,14.64-15.22,25.48-31,25.48-11.3,0-19.6-7.84-19.6-21.1,0-15.91,10.49-26.17,26.86-27.67a121.57,121.57,0,0,0-.8-15.45,19.51,19.51,0,0,0,4.49.46,24.52,24.52,0,0,0,10-1.61l-.11-.23c-1.5.11-3,.23-4.38.23-15.68,0-23.64-9.69-23.64-23.52a21.32,21.32,0,0,1,.12-2.77,62.66,62.66,0,0,0,21.09,3.34c9.46,0,17.07-1.73,24.91-3.92a86.88,86.88,0,0,1,.92,12.92,183.25,183.25,0,0,1-2.65,27.09h1.27c1.61-12.68,9.8-36.32,27.9-36.32A30.16,30.16,0,0,1,673.76,340Zm-80,58.45c-7-.11-12.34,5.31-12.34,7.15A1.41,1.41,0,0,0,582.8,407C585.68,407,591.9,402.11,593.75,398.42Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M705.7,338.36c2.31,0,5.88-.35,5.88-.35-6.57,13.26-10.14,29.63-10.14,46.12a111.16,111.16,0,0,0,.92,13.95l1.38-2.31c-.23-2.76-.34-5.53-.34-8.18,0-28,11.41-52.35,29.28-52.35a29.71,29.71,0,0,1,16,4.73c-7,13.95-12.45,32.63-12.45,55.46a53,53,0,0,0,9-15c2,.34,2.88,2.07,2.88,4.38,0,12.45-6.69,36-22.94,36-8,0-12.92-5.76-15.57-10a61.11,61.11,0,0,0,5.77-13.83l-.35-.23c-5.07,11.41-13.26,24.09-24.67,24.09-16.26,0-20.87-14.52-20.87-30.21A117.08,117.08,0,0,1,674.69,358a33.28,33.28,0,0,0,11.53,2c1.84,0,3.11-.12,3.11-.12v-.23c-14.41-1.73-23.06-9.45-23.06-21.68a33.44,33.44,0,0,1,1.61-9.91C678.72,335.36,694.4,338.36,705.7,338.36Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M777.65,366.6c8.64-19.94,17-31.36,28-31.36,10.73,0,15.91,10.61,15.91,22.26,0,18.44-12.91,42.88-33.32,42.88-12.45,0-27.09-6.91-34.82-13.37l-.11.12a62.38,62.38,0,0,0,22.14,13.25,99.62,99.62,0,0,0,2.3,11.07c-3.23,4.61-9.22,9.34-14.87,9.34-9.11,0-18.45-7.61-18.45-30.9A117.93,117.93,0,0,1,749.63,358a33.28,33.28,0,0,0,11.53,2c1.84,0,3.11-.12,3.11-.12v-.23c-14.41-1.73-23.06-9.45-23.06-21.68a33.15,33.15,0,0,1,1.62-9.91c10.84,7.38,26.52,10.38,37.81,10.38,2.31,0,4.39-.23,5.88-.35a93.81,93.81,0,0,0-9,28.59Zm12.1-5.18a230.19,230.19,0,0,0-15.1,29.05c2.65-.58,6.23-5.65,8.53-9.92a76.34,76.34,0,0,0,6.8-19.13C789.87,361.53,789.87,361.18,789.75,361.42Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M853.63,420.79c-22,0-34.94-9.34-34.94-22.83,0-9.33,7.15-18,17.3-18,8.76,12.45,21.9,23.86,32.86,31.13l.11-.23c-17.64-15.57-38.16-33.09-38.16-52.35,0-15.68,16.26-23.29,32.17-23.29,15.22,0,30,6.92,30,20.06,0,6.35-5.53,12.57-12.1,16.15C870.46,360,860.78,354,848.79,346.89l-.12.11c20.06,14.18,38.16,28.6,38.16,48.77C886.83,412.61,875.07,420.79,853.63,420.79Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M974.34,394.85c11,0,21.68-4.38,28.13-14.07,2.31.35,2.89,1.85,2.89,6.58,0,14.29-8.42,35.28-35.28,35.28-16.37,0-33.09-12-45-24.56l-.11.11c6.8,9.11,18.1,17.64,27.67,22.49a29.45,29.45,0,0,1-14.18,4.26c-12.92,0-25.37-9.22-25.37-19.25,0-11.53,8.42-17.41,21.45-17.41a44.5,44.5,0,0,1,17.06,3.34v-.23c-4.27-2.65-11.07-4-17.06-4.61-8.07-.81-15-5.65-15-15.8,0-6.45,3-12.1,8.88-14.52,5.76,4.26,14.52,6.57,21.67,6.57.69,0,1.38-.12,2-.12v-.23c-6.34-.34-12.68-2.19-15.68-4.15,2.19-15.79,15.22-24.79,30.67-24.79,12.45,0,24,7.5,24,23.64,0,12.91-8.53,26.63-24,29.28v1.73a50,50,0,0,1-.35,5.77A42.65,42.65,0,0,0,974.34,394.85Zm-2-53.73c-3.34,4-5.42,10.73-6.11,16.72h.23c3.58-4.73,5.77-12,6.11-16.72Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M1020.69,405.46c3.92-9.34,6.57-21,8.76-31.71h-.23c-6.34,24.21-14.29,47-25.36,47-7.61,0-11.76-10.83-11.76-23.29,0-17.75,8.42-38.16,24.1-38.16,6.34,0,13.83,3.46,22.48,11.88l.23-.24c-2.54-3.22-6-6.91-9.23-8.87a17.44,17.44,0,0,1,9.69-2.77,19.62,19.62,0,0,1,12.91,5c-4.15,7.72-6.34,19-6.34,33.2,4.15-5,6.92-11.53,9.46-17.06,1.84.34,2.88,1.84,2.88,4.73,0,7.49-7.61,35.62-24.21,35.62C1025.3,420.79,1022,413.07,1020.69,405.46Zm-4.38-10c3.57-6.92,6.8-17.18,9.34-25.48-2.77,1.15-6.23,10.26-9.57,25.48Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M1050.9,386.66c0-21.09,8.65-44.5,26.86-44.5a24.87,24.87,0,0,1,13.72,4.38l-10.26,27.21c-3.34,7.27-8.3,24.44-9.57,32.75h.35c5.65-22.37,13.72-47.16,25.36-47.16,8.07,0,13.38,12,13.38,24.44,0,17.64-10.61,37-25.6,37-8.3,0-16.37-6-22.14-11.87l-.23.23a46.52,46.52,0,0,0,12.11,10.72,10.25,10.25,0,0,1-3.92.92C1057,420.79,1050.9,404.3,1050.9,386.66Zm34-1.84c-3.57,6.92-6.8,17.18-9.34,25.48,2.77-1.15,6.23-10.26,9.57-25.48Z"}),Object(jsx_runtime.jsx)("path",{className:"a",d:"M1131.49,399c6.69,0,12.68,2.65,12.68,8.42,0,6.11-7,15.68-14.06,15.68s-10.26-9.46-10.26-14.88S1123,399,1131.49,399Z"})]})})})})};Header_Header.displayName="Header";var stories_Header_Header=Header_Header,CCLHeader=(__webpack_exports__.default={component:stories_Header_Header},{})},"./src/stories/Header/header.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/stories/Header/header.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("style",null,"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",{id:"ccl-component-kit"},"CCL Component Kit"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"CANDY CHUPS Lab.名義でWebサービスを作成する時に使用できるツールキットです。\nFigmaをそのうち用意します。コンポーネントは随時機能とともに追加していきます。"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"製作者：れいじ(@reiji1020)"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);