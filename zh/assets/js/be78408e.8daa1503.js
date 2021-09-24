"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5078],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,k=m["".concat(d,".").concat(u)]||m[u]||s[u]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8203:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={title:"BroadcastJob"},d=void 0,c={unversionedId:"user-manuals/broadcastjob",id:"user-manuals/broadcastjob",isDocsHomePage:!1,title:"BroadcastJob",description:"\u8fd9\u4e2a\u63a7\u5236\u5668\u5c06 Pod \u5206\u53d1\u5230\u96c6\u7fa4\u4e2d\u6bcf\u4e2a node \u4e0a\uff0c\u7c7b\u4f3c\u4e8e DaemonSet\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/broadcastjob.md",sourceDirName:"user-manuals",slug:"/user-manuals/broadcastjob",permalink:"/zh/docs/next/user-manuals/broadcastjob",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/broadcastjob.md",tags:[],version:"current",lastUpdatedBy:"wsy",lastUpdatedAt:1632470465,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"BroadcastJob"},sidebar:"docs",previous:{title:"Advanced DaemonSet",permalink:"/zh/docs/next/user-manuals/advanceddaemonset"},next:{title:"AdvancedCronJob",permalink:"/zh/docs/next/user-manuals/advancedcronjob"}},p=[{value:"Spec \u5b9a\u4e49",id:"spec-\u5b9a\u4e49",children:[{value:"Template",id:"template",children:[]},{value:"Parallelism",id:"parallelism",children:[]},{value:"CompletionPolicy",id:"completionpolicy",children:[]}]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[{value:"\u76d1\u63a7 BroadcastJob status",id:"\u76d1\u63a7-broadcastjob-status",children:[]},{value:"ttlSecondsAfterFinished",id:"ttlsecondsafterfinished",children:[]},{value:"activeDeadlineSeconds",id:"activedeadlineseconds",children:[]},{value:"completionPolicy",id:"completionpolicy-1",children:[]}]}],s={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a7\u5236\u5668\u5c06 Pod \u5206\u53d1\u5230\u96c6\u7fa4\u4e2d\u6bcf\u4e2a node \u4e0a\uff0c\u7c7b\u4f3c\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"),"\uff0c\n\u4f46\u662f BroadcastJob \u7ba1\u7406\u7684 Pod \u5e76\u4e0d\u662f\u957f\u671f\u8fd0\u884c\u7684 daemon \u670d\u52a1\uff0c\u800c\u662f\u7c7b\u4f3c\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"Job")," \u7684\u4efb\u52a1\u7c7b\u578b Pod\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\u5728\u6bcf\u4e2a node \u4e0a\u7684 Pod \u90fd\u6267\u884c\u5b8c\u6210\u9000\u51fa\u540e\uff0cBroadcastJob \u548c\u8fd9\u4e9b Pod \u5e76\u4e0d\u4f1a\u5360\u7528\u96c6\u7fa4\u8d44\u6e90\u3002\n\u8fd9\u4e2a\u63a7\u5236\u5668\u975e\u5e38\u6709\u5229\u4e8e\u505a\u5347\u7ea7\u57fa\u7840\u8f6f\u4ef6\u3001\u5de1\u68c0\u7b49\u8fc7\u4e00\u6bb5\u65f6\u95f4\u9700\u8981\u5728\u6574\u4e2a\u96c6\u7fa4\u4e2d\u8dd1\u4e00\u6b21\u7684\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0cBroadcastJob \u8fd8\u53ef\u4ee5\u7ef4\u6301\u6bcf\u4e2a node \u8dd1\u6210\u529f\u4e00\u4e2a Pod \u4efb\u52a1\u3002\u5982\u679c\u91c7\u53d6\u8fd9\u79cd\u6a21\u5f0f\uff0c\u5f53\u540e\u7eed\u96c6\u7fa4\u4e2d\u65b0\u589e node \u65f6 BroadcastJob \u4e5f\u4f1a\u5206\u53d1 Pod \u4efb\u52a1\u4e0a\u53bb\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"spec-\u5b9a\u4e49"},"Spec \u5b9a\u4e49"),(0,r.kt)("h3",{id:"template"},"Template"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Template")," \u63cf\u8ff0\u4e86 Pod \u6a21\u677f\uff0c\u7528\u4e8e\u521b\u5efa\u4efb\u52a1 Pod\u3002\n\u6ce8\u610f\uff0c\u7531\u4e8e\u662f\u4efb\u52a1\u7c7b\u578b\u7684 Pod\uff0c\u5176\u4e2d\u7684 restart policy \u53ea\u80fd\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Never")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"OnFailure"),"\uff0c\u4e0d\u5141\u8bb8\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Always"),"\u3002"),(0,r.kt)("h3",{id:"parallelism"},"Parallelism"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Parallelism")," \u6307\u5b9a\u4e86\u6700\u591a\u80fd\u5141\u8bb8\u591a\u5c11\u4e2a Pod \u540c\u65f6\u5728\u6267\u884c\u4efb\u52a1\uff0c\u9ed8\u8ba4\u4e0d\u505a\u9650\u5236\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u4e00\u4e2a\u96c6\u7fa4\u91cc\u6709 10 \u4e2a node\u3001\u5e76\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Parallelism")," \u4e3a 3\uff0c\u90a3\u4e48 BroadcastJob \u4f1a\u4fdd\u8bc1\u540c\u65f6\u53ea\u4f1a\u6709 3 \u4e2a node \u4e0a\u7684 Pod \u5728\u6267\u884c\u3002\u6bcf\u5f53\u4e00\u4e2a Pod \u6267\u884c\u5b8c\u6210\uff0cBroadcastJob \u624d\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0 Pod \u6267\u884c\u3002"),(0,r.kt)("h3",{id:"completionpolicy"},"CompletionPolicy"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CompletionPolicy")," \u652f\u6301\u6307\u5b9a BroadcastJob \u63a7\u5236\u5668\u7684 reconciling \u884c\u4e3a\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Always")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Never"),"\uff1a"),(0,r.kt)("h4",{id:"always"},"Always"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Always")," \u7b56\u7565\u610f\u5473\u7740 job \u6700\u7ec8\u4f1a\u5b8c\u6210\uff0c\u4e0d\u7ba1\u662f\u6267\u884c\u6210\u529f\u8fd8\u662f\u5931\u8d25\u4e86\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Always")," \u7b56\u7565\u4e0b\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds"),"\uff1a\u6307\u5b9a\u4e00\u4e2a\u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c BroadcastJob \u5f00\u59cb\u8fd0\u884c\u8d85\u8fc7\u4e86\u8fd9\u4e2a\u65f6\u95f4\uff0c\u6240\u6709\u8fd8\u5728\u8dd1\u7740\u7684 job \u90fd\u4f1a\u88ab\u505c\u6b62\u3001\u5e76\u6807\u8bb0\u4e3a\u5931\u8d25\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BackoffLimit"),"\uff1a\u6307\u5b9a\u4e00\u4e2a\u91cd\u8bd5\u6b21\u6570\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u6b21\u6570\u540e\u624d\u6807\u8bb0 job \u5931\u8d25\uff0c\u9ed8\u8ba4\u6ca1\u6709\u9650\u5236\u3002\u76ee\u524d\uff0cPod \u5b9e\u9645\u7684\u91cd\u8bd5\u6b21\u6570\u662f\u770b Pod status \u4e2d\u4e0a\u62a5\u6240\u6709\u5bb9\u5668\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kruiseio/kruise/blob/d61c12451d6a662736c4cfc48682fa75c73adcbc/vendor/k8s.io/api/core/v1/types.go#L2314"},"ContainerStatus.RestartCount")," \u91cd\u542f\u6b21\u6570\u3002\u5982\u679c\u8fd9\u4e2a\u91cd\u542f\u6b21\u6570\u8d85\u8fc7\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"BackoffLimit"),"\uff0c\u8fd9\u4e2a job \u5c31\u4f1a\u88ab\u6807\u8bb0\u4e3a\u5931\u8d25\u3001\u5e76\u628a\u8fd0\u884c\u7684 Pod \u5220\u9664\u6389\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TTLSecondsAfterFinished")," \u9650\u5236\u4e86 BroadcastJob \u5728\u5b8c\u6210\u4e4b\u540e\u7684\u5b58\u6d3b\u65f6\u95f4\uff0c\u9ed8\u8ba4\u6ca1\u6709\u9650\u5236\u3002\u6bd4\u5982\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"TTLSecondsAfterFinished")," \u4e3a 10s\uff0c\u90a3\u4e48\u5f53 job \u7ed3\u675f\u540e\u8d85\u8fc7\u4e86 10s\uff0c\u63a7\u5236\u5668\u5c31\u4f1a\u628a job \u548c\u4e0b\u9762\u7684\u6240\u6709 Pod \u5220\u6389\u3002"))),(0,r.kt)("h4",{id:"never"},"Never"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Never")," \u7b56\u7565\u610f\u5473\u7740 BroadcastJob \u6c38\u8fdc\u90fd\u4e0d\u4f1a\u7ed3\u675f\uff08\u6807\u8bb0\u4e3a Succeeded \u6216 Failed\uff09\uff0c\u5373\u4f7f\u5f53\u524d job \u4e0b\u9762\u7684 Pod \u90fd\u5df2\u7ecf\u6267\u884c\u6210\u529f\u4e86\u3002\n\u8fd9\u4e5f\u610f\u5473\u7740 ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"BackoffLimit"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"TTLSecondsAfterFinished")," \u8fd9\u4e09\u4e2a\u53c2\u6570\u662f\u4e0d\u80fd\u4f7f\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u7528\u6237\u5e0c\u671b\u5bf9\u96c6\u7fa4\u4e2d\u6bcf\u4e2a node \u90fd\u4e0b\u53d1\u4e00\u4e2a\u914d\u7f6e\uff0c\u5305\u62ec\u540e\u7eed\u65b0\u589e\u7684 node \u90fd\u9700\u8981\u505a\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Never")," \u7b56\u7565\u7684 BroadcastJob\u3002"),(0,r.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("h3",{id:"\u76d1\u63a7-broadcastjob-status"},"\u76d1\u63a7 BroadcastJob status"),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u5355 node \u96c6\u7fa4\u4e2d\u521b\u5efa\u4e00\u4e2a BroadcastJob\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get bcj")," \uff08BroadcastJob \u7684 short name\uff09\u770b\u5230\u4ee5\u4e0b\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," NAME                 DESIRED   ACTIVE   SUCCEEDED   FAILED\n broadcastjob-sample  1         0        1           0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Desired")," : \u671f\u671b\u7684 Pod \u6570\u91cf\uff08\u7b49\u540c\u4e8e\u5f53\u524d\u96c6\u7fa4\u4e2d\u5339\u914d\u7684 node \u6570\u91cf\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Active"),": \u8fd0\u884c\u4e2d\u7684 Pod \u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUCCEEDED"),": \u6267\u884c\u6210\u529f\u7684 Pod \u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FAILED"),": \u6267\u884c\u5931\u8d25\u7684 Pod \u6570\u91cf")),(0,r.kt)("h3",{id:"ttlsecondsafterfinished"},"ttlSecondsAfterFinished"),(0,r.kt)("p",null,"\u521b\u5efa BroadcastJob \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"ttlSecondsAfterFinished")," \u4e3a 30\u3002\n\u8fd9\u4e2a job \u4f1a\u5728\u6267\u884c\u7ed3\u675f\u540e 30s \u88ab\u5220\u9664\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-ttl\nspec:\n  template:\n    spec:\n      containers:\n        - name: pi\n          image: perl\n          command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Always\n    ttlSecondsAfterFinished: 30\n')),(0,r.kt)("h3",{id:"activedeadlineseconds"},"activeDeadlineSeconds"),(0,r.kt)("p",null,"\u521b\u5efa BroadcastJob \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"activeDeadlineSeconds")," \u4e3a 10\u3002\n\u8fd9\u4e2a job \u4f1a\u5728\u8fd0\u884c\u8d85\u8fc7 10s \u4e4b\u540e\u88ab\u6807\u8bb0\u4e3a\u5931\u8d25\uff0c\u5e76\u628a\u4e0b\u9762\u8fd8\u5728\u8fd0\u884c\u7684 Pod \u5220\u9664\u6389\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-active-deadline\nspec:\n  template:\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["sleep",  "50000"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Always\n    activeDeadlineSeconds: 10\n')),(0,r.kt)("h3",{id:"completionpolicy-1"},"completionPolicy"),(0,r.kt)("p",null,"\u521b\u5efa BroadcastJob \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"completionPolicy")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Never"),"\u3002\n\u8fd9\u4e2a job \u4f1a\u6301\u7eed\u8fd0\u884c\u5373\u4f7f\u5f53\u524d\u6240\u6709 node \u4e0a\u7684 Pod \u90fd\u6267\u884c\u5b8c\u6210\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-never-complete\nspec:\n  template:\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["sleep",  "5"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Never\n')))}m.isMDXComponent=!0}}]);