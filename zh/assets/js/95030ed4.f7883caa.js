"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[1087],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return t?n.createElement(k,s(s({ref:a},d),{},{components:t})):n.createElement(k,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3149:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],l={title:"SidecarSet"},o=void 0,p={unversionedId:"user-manuals/sidecarset",id:"user-manuals/sidecarset",isDocsHomePage:!1,title:"SidecarSet",description:"\u8fd9\u4e2a\u63a7\u5236\u5668\u652f\u6301\u901a\u8fc7 admission webhook \u6765\u81ea\u52a8\u4e3a\u96c6\u7fa4\u4e2d\u521b\u5efa\u7684\u7b26\u5408\u6761\u4ef6\u7684 Pod \u6ce8\u5165 sidecar \u5bb9\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/sidecarset.md",sourceDirName:"user-manuals",slug:"/user-manuals/sidecarset",permalink:"/zh/docs/next/user-manuals/sidecarset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/sidecarset.md",tags:[],version:"current",lastUpdatedBy:"wsy",lastUpdatedAt:1632470465,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"SidecarSet"},sidebar:"docs",previous:{title:"AdvancedCronJob",permalink:"/zh/docs/next/user-manuals/advancedcronjob"},next:{title:"WorkloadSpread",permalink:"/zh/docs/next/user-manuals/workloadspread"}},d=[{value:"\u8303\u4f8b",id:"\u8303\u4f8b",children:[{value:"\u521b\u5efa SidecarSet",id:"\u521b\u5efa-sidecarset",children:[]},{value:"\u521b\u5efa Pod",id:"\u521b\u5efa-pod",children:[]},{value:"\u66f4\u65b0sidecar container Image",id:"\u66f4\u65b0sidecar-container-image",children:[]}]},{value:"SidecarSet\u529f\u80fd\u8bf4\u660e",id:"sidecarset\u529f\u80fd\u8bf4\u660e",children:[{value:"sidecar container\u6ce8\u5165",id:"sidecar-container\u6ce8\u5165",children:[]},{value:"sidecar\u66f4\u65b0\u7b56\u7565",id:"sidecar\u66f4\u65b0\u7b56\u7565",children:[]},{value:"\u53d1\u5e03\u987a\u5e8f\u63a7\u5236",id:"\u53d1\u5e03\u987a\u5e8f\u63a7\u5236",children:[]},{value:"Sidecar\u70ed\u5347\u7ea7\u7279\u6027",id:"sidecar\u70ed\u5347\u7ea7\u7279\u6027",children:[]},{value:"SidecarSet\u72b6\u6001\u8bf4\u660e",id:"sidecarset\u72b6\u6001\u8bf4\u660e",children:[]}]}],c={toc:d};function u(e){var a=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u4e2a\u63a7\u5236\u5668\u652f\u6301\u901a\u8fc7 admission webhook \u6765\u81ea\u52a8\u4e3a\u96c6\u7fa4\u4e2d\u521b\u5efa\u7684\u7b26\u5408\u6761\u4ef6\u7684 Pod \u6ce8\u5165 sidecar \u5bb9\u5668\u3002\n\u8fd9\u4e2a\u6ce8\u5165\u8fc7\u7a0b\u548c ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/"},"istio"),"\n\u7684\u81ea\u52a8\u6ce8\u5165\u65b9\u5f0f\u5f88\u7c7b\u4f3c\u3002\n\u9664\u4e86\u5728 Pod \u521b\u5efa\u65f6\u5019\u6ce8\u5165\u5916\uff0cSidecarSet \u8fd8\u63d0\u4f9b\u4e86\u4e3a\u8fd0\u884c\u65f6 Pod \u539f\u5730\u5347\u7ea7\u5176\u4e2d\u5df2\u7ecf\u6ce8\u5165\u7684 sidecar \u5bb9\u5668\u955c\u50cf\u7684\u80fd\u529b\u3002"),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0cSidecarSet \u5c06 sidecar \u5bb9\u5668\u7684\u5b9a\u4e49\u548c\u751f\u547d\u5468\u671f\u4e0e\u4e1a\u52a1\u5bb9\u5668\u89e3\u8026\u3002\n\u5b83\u4e3b\u8981\u7528\u4e8e\u7ba1\u7406\u65e0\u72b6\u6001\u7684 sidecar \u5bb9\u5668\uff0c\u6bd4\u5982\u76d1\u63a7\u3001\u65e5\u5fd7\u7b49 agent\u3002"),(0,i.kt)("h2",{id:"\u8303\u4f8b"},"\u8303\u4f8b"),(0,i.kt)("h3",{id:"\u521b\u5efa-sidecarset"},"\u521b\u5efa SidecarSet"),(0,i.kt)("p",null,"\u5982\u4e0b\u7684 sidecarset.yaml \u5b9a\u4e49\u4e86\u4e00\u4e2a SidecarSet\uff0c\u5176\u4e2d\u5305\u62ec\u4e86\u4e00\u4e2a\u540d\u4e3a sidecar1 \u7684 sidecar \u5bb9\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# sidecarset.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: RollingUpdate\n    maxUnavailable: 1\n  containers:\n  - name: sidecar1\n    image: centos:6.7\n    command: ["sleep", "999d"] # do nothing at all\n    volumeMounts:\n    - name: log-volume\n      mountPath: /var/log\n  volumes: # this field will be merged into pod.spec.volumes\n  - name: log-volume\n    emptyDir: {}\n')),(0,i.kt)("p",null,"\u521b\u5efa\u8fd9\u4e2a YAML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f sidecarset.yaml\n")),(0,i.kt)("h3",{id:"\u521b\u5efa-pod"},"\u521b\u5efa Pod"),(0,i.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u5339\u914d SidecarSet selector \u7684 Pod\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: nginx # matches the SidecarSet's selector\n  name: test-pod\nspec:\n  containers:\n  - name: app\n    image: nginx:1.15.1\n")),(0,i.kt)("p",null,"\u521b\u5efa\u8fd9\u4e2a Pod\uff0c\u4f60\u4f1a\u53d1\u73b0\u5176\u4e2d\u88ab\u6ce8\u5165\u4e86 sidecar1 \u5bb9\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod\nNAME       READY   STATUS    RESTARTS   AGE\ntest-pod   2/2     Running   0          118s\n")),(0,i.kt)("p",null,"\u6b64\u65f6\uff0cSidecarSet status \u88ab\u66f4\u65b0\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get sidecarset test-sidecarset -o yaml | grep -A4 status\nstatus:\n  matchedPods: 1\n  observedGeneration: 1\n  readyPods: 1\n  updatedPods: 1\n")),(0,i.kt)("h3",{id:"\u66f4\u65b0sidecar-container-image"},"\u66f4\u65b0sidecar container Image"),(0,i.kt)("p",null,"\u66f4\u65b0sidecarSet\u4e2dsidecar container\u7684image=centos:7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit sidecarsets test-sidecarset\n\n# sidecarset.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: test-sidecarset\nspec:\n  containers:\n    - name: sidecar1\n      image: centos:7\n")),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c\u53d1\u73b0pod\u4e2d\u7684sidecar\u5bb9\u5668\u5df2\u7ecf\u88ab\u66f4\u65b0\u4e3a\u4e86centos:7\uff0c\u5e76\u4e14pod\u4ee5\u53ca\u5176\u5b83\u7684\u5bb9\u5668\u6ca1\u6709\u91cd\u542f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pods |grep test-pod\ntest-pod                            2/2     Running   1          7m34s\n\n$ kubectl get pods test-pod -o yaml |grep \'image: centos\'\n    image: centos:7\n\n$ kubectl describe pods test-pod\nEvents:\n  Type    Reason     Age                 From               Message\n  ----    ------     ----                ----               -------\n  Normal  Killing    5m47s               kubelet            Container sidecar1 definition changed, will be restarted\n  Normal  Pulling    5m17s               kubelet            Pulling image "centos:7"\n  Normal  Created    5m5s (x2 over 12m)  kubelet            Created container sidecar1\n  Normal  Started    5m5s (x2 over 12m)  kubelet            Started container sidecar1\n  Normal  Pulled     5m5s                kubelet            Successfully pulled image "centos:7"\n')),(0,i.kt)("h2",{id:"sidecarset\u529f\u80fd\u8bf4\u660e"},"SidecarSet\u529f\u80fd\u8bf4\u660e"),(0,i.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 SidecarSet yaml \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: sample\n  containers:\n  - name: nginx\n    image: nginx:alpine\n  initContainers:\n  - name: init-container\n    image: busybox:latest\n    command: [ "/bin/sh", "-c", "sleep 5 && echo \'init container success\'" ]\n  updateStrategy:\n    type: RollingUpdate\n  namespace: ns-1\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"spec.selector \u901a\u8fc7label\u7684\u65b9\u5f0f\u9009\u62e9\u9700\u8981\u6ce8\u5165\u3001\u66f4\u65b0\u7684pod\uff0c\u652f\u6301matchLabels\u3001MatchExpressions\u4e24\u79cd\u65b9\u5f0f\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/")),(0,i.kt)("li",{parentName:"ul"},"spec.containers \u5b9a\u4e49\u9700\u8981\u6ce8\u5165\u3001\u66f4\u65b0\u7684pod.spec.containers\u5bb9\u5668\uff0c\u652f\u6301\u5b8c\u6574\u7684k8s container\u5b57\u6bb5\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/containers/"},"https://kubernetes.io/docs/concepts/containers/")),(0,i.kt)("li",{parentName:"ul"},"spec.initContainers \u5b9a\u4e49\u9700\u8981\u6ce8\u5165\u7684pod.spec.initContainers\u5bb9\u5668\uff0c\u652f\u6301\u5b8c\u6574\u7684k8s initContainer\u5b57\u6bb5\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u5165initContainers\u5bb9\u5668\u9ed8\u8ba4\u57fa\u4e8econtainer name\u5347\u7ea7\u6392\u5e8f"),(0,i.kt)("li",{parentName:"ul"},"initContainers\u53ea\u652f\u6301\u6ce8\u5165\uff0c\u4e0d\u652f\u6301pod\u539f\u5730\u5347\u7ea7"))),(0,i.kt)("li",{parentName:"ul"},"spec.updateStrategy sidecarSet\u66f4\u65b0\u7b56\u7565\uff0ctype\u8868\u660e\u5347\u7ea7\u65b9\u5f0f\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NotUpdate \u4e0d\u66f4\u65b0\uff0c\u6b64\u6a21\u5f0f\u4e0b\u53ea\u4f1a\u5305\u542b\u6ce8\u5165\u80fd\u529b"),(0,i.kt)("li",{parentName:"ul"},"RollingUpdate \u6ce8\u5165+\u6eda\u52a8\u66f4\u65b0\uff0c\u5305\u542b\u4e86\u4e30\u5bcc\u7684\u6eda\u52a8\u66f4\u65b0\u7b56\u7565\uff0c\u540e\u9762\u4f1a\u8be6\u7ec6\u4ecb\u7ecd"))),(0,i.kt)("li",{parentName:"ul"},"spec.namespace sidecarset\u9ed8\u8ba4\u5728k8s\u6574\u4e2a\u96c6\u7fa4\u8303\u56f4\u5185\u751f\u6548\uff0c\u5373\u5bf9\u6240\u6709\u7684\u547d\u540d\u7a7a\u95f4\u751f\u6548\uff08\u9664\u4e86kube-system, kube-public\uff09\uff0c\u5f53\u8bbe\u7f6e\u8be5\u5b57\u6bb5\u65f6\uff0c\u53ea\u5bf9\u8be5namespace\u7684pod\u751f\u6548")),(0,i.kt)("h3",{id:"sidecar-container\u6ce8\u5165"},"sidecar container\u6ce8\u5165"),(0,i.kt)("p",null,"sidecar \u7684\u6ce8\u5165\u53ea\u4f1a\u53d1\u751f\u5728 Pod \u521b\u5efa\u9636\u6bb5\uff0c\u5e76\u4e14\u53ea\u6709 Pod spec \u4f1a\u88ab\u66f4\u65b0\uff0c\u4e0d\u4f1a\u5f71\u54cd Pod \u6240\u5c5e\u7684 workload template \u6a21\u677f\u3002\nspec.containers\u9664\u4e86\u9ed8\u8ba4\u7684k8s container\u5b57\u6bb5\uff0c\u8fd8\u6269\u5c55\u4e86\u5982\u4e0b\u4e00\u4e9b\u5b57\u6bb5\uff0c\u6765\u65b9\u4fbf\u6ce8\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: sample\n  containers:\n    # default K8s Container fields\n  - name: nginx\n    image: nginx:alpine\n    volumeMounts:\n    - mountPath: /nginx/conf\n      name: nginx.conf\n    # extended sidecar container fields\n    podInjectPolicy: BeforeAppContainer\n    shareVolumePolicy:\n      type: disabled | enabled\n    transferEnv:\n    - sourceContainerName: main\n      envName: PROXY_IP    \n  volumes:\n  - Name: nginx.conf\n    hostPath: /data/nginx/conf\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"podInjectPolicy \u5b9a\u4e49container\u6ce8\u5165\u5230pod.spec.containers\u4e2d\u7684\u4f4d\u7f6e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"BeforeAppContainer(\u9ed8\u8ba4) \u6ce8\u5165\u5230pod\u539fcontainers\u7684\u524d\u9762"),(0,i.kt)("li",{parentName:"ul"},"AfterAppContainer \u6ce8\u5165\u5230pod\u539fcontainers\u7684\u540e\u9762"))),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5377\u5171\u4eab",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5171\u4eab\u6307\u5b9a\u5377\uff1a\u901a\u8fc7 spec.volumes \u6765\u5b9a\u4e49 sidecar \u81ea\u8eab\u9700\u8981\u7684 volume\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"https://kubernetes.io/docs/concepts/storage/volumes/")),(0,i.kt)("li",{parentName:"ul"},"\u5171\u4eab\u6240\u6709\u5377\uff1a\u901a\u8fc7 spec.containers","[i]",".shareVolumePolicy.type = enabled | disabled \u6765\u63a7\u5236\u662f\u5426\u6302\u8f7dpod\u5e94\u7528\u5bb9\u5668\u7684\u5377\uff0c\u5e38\u7528\u4e8e\u65e5\u5fd7\u6536\u96c6\u7b49 sidecar\uff0c\u914d\u7f6e\u4e3a enabled \u540e\u4f1a\u628a\u5e94\u7528\u5bb9\u5668\u4e2d\u6240\u6709\u6302\u8f7d\u70b9\u6ce8\u5165 sidecar \u540c\u4e00\u8def\u7ecf\u4e0b(sidecar\u4e2d\u672c\u8eab\u5c31\u6709\u58f0\u660e\u7684\u6570\u636e\u5377\u548c\u6302\u8f7d\u70b9\u9664\u5916\uff09"))),(0,i.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u5171\u4eab",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 spec.containers","[i]",".transferEnv \u6765\u4ece\u522b\u7684\u5bb9\u5668\u83b7\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u4f1a\u628a\u540d\u4e3a sourceContainerName \u5bb9\u5668\u4e2d\u540d\u4e3a envName \u7684\u73af\u5883\u53d8\u91cf\u62f7\u8d1d\u5230\u672c\u5bb9\u5668")))),(0,i.kt)("h4",{id:"\u6ce8\u5165\u6682\u505c"},"\u6ce8\u5165\u6682\u505c"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5df2\u7ecf\u521b\u5efa\u7684 SidecarSet\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.injectionStrategy.paused=true")," \u5b9e\u73b0sidecar container\u7684\u6682\u505c\u6ce8\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  ... ...\n  injectionStrategy:\n    paused: true\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u65b9\u6cd5\u53ea\u4f5c\u7528\u4e8e\u65b0\u521b\u5efa\u7684 Pod\uff0c\u5bf9\u4e8e\u5df2\u6ce8\u5165 Pod \u7684\u5b58\u91cf sidecar container \u4e0d\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002"),(0,i.kt)("h4",{id:"imagepullsecrets"},"imagePullSecrets"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,i.kt)("p",null,"SidecarSet \u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e spec.imagePullSecrets\uff0c\u6765\u914d\u5408 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/configuration/secret/"},"Secret")," \u62c9\u53d6\u79c1\u6709 sidecar \u955c\u50cf\u3002\u5176\u5b9e\u73b0\u539f\u7406\u4e3a: \u5f53sidecar\u6ce8\u5165\u65f6\uff0cSidecarSet \u4f1a\u5c06\u5176 spec.imagePullSecrets \u6ce8\u5165\u5230",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/tasks/configure-pod-container/pull-image-private-registry/"}," Pod \u7684 spec.imagePullSecrets"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  ... ....\n  imagePullSecrets:\n  - name: my-secret\n")),(0,i.kt)("p",null,"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u9700\u8981\u62c9\u53d6\u79c1\u6709 sidecar \u955c\u50cf\u7684 Pod\uff0c\u7528\u6237\u5fc5\u9700\u786e\u4fdd\u8fd9\u4e9b Pod \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u5df2\u5b58\u5728\u5bf9\u5e94\u7684 Secret"),"\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u62c9\u53d6\u79c1\u6709\u955c\u50cf\u5931\u8d25\u3002"),(0,i.kt)("h3",{id:"sidecar\u66f4\u65b0\u7b56\u7565"},"sidecar\u66f4\u65b0\u7b56\u7565"),(0,i.kt)("p",null,"SidecarSet\u4e0d\u4ec5\u652f\u6301sidecar\u5bb9\u5668\u7684\u539f\u5730\u5347\u7ea7\uff0c\u800c\u4e14\u63d0\u4f9b\u4e86\u975e\u5e38\u4e30\u5bcc\u7684\u5347\u7ea7\u3001\u7070\u5ea6\u7b56\u7565\u3002"),(0,i.kt)("h4",{id:"\u5206\u6279\u53d1\u5e03"},"\u5206\u6279\u53d1\u5e03"),(0,i.kt)("p",null,"Partition \u7684\u8bed\u4e49\u662f ",(0,i.kt)("strong",{parentName:"p"},"\u4fdd\u7559\u65e7\u7248\u672c Pod \u7684\u6570\u91cf\u6216\u767e\u5206\u6bd4"),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\u3002\u8fd9\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"partition")," \u4e0d\u8868\u793a\u4efb\u4f55 ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," \u5e8f\u53f7\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u8bbe\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"partition"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u6570\u5b57\uff0c\u63a7\u5236\u5668\u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"(replicas - partition)")," \u6570\u91cf\u7684 Pod \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u767e\u5206\u6bd4\uff0c\u63a7\u5236\u5668\u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"(replicas * (100% - partition))")," \u6570\u91cf\u7684 Pod \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    partition: 90\n")),(0,i.kt)("p",null,"\u5047\u8bbe\u8be5SidecarSet\u5173\u8054\u7684pod\u6570\u91cf\u662f100\u4e2a\uff0c\u5219\u672c\u6b21\u5347\u7ea7\u53ea\u4f1a\u5347\u7ea710\u4e2a\uff0c\u4fdd\u755990\u4e2a\u3002"),(0,i.kt)("h4",{id:"\u6700\u5927\u4e0d\u53ef\u7528\u6570\u91cf"},"\u6700\u5927\u4e0d\u53ef\u7528\u6570\u91cf"),(0,i.kt)("p",null,"MaxUnavailable \u662f\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u4fdd\u8bc1\u7684\uff0c\u540c\u4e00\u65f6\u95f4\u4e0b\u6700\u5927\u4e0d\u53ef\u7528\u7684 Pod \u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002\u7528\u6237\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u503c\u6216\u767e\u5206\u6bd4\uff08\u767e\u5206\u6bd4\u4f1a\u88ab\u63a7\u5236\u5668\u6309\u7167selected pod\u505a\u57fa\u6570\u6765\u8ba1\u7b97\u51fa\u4e00\u4e2a\u80cc\u540e\u7684\u7edd\u5bf9\u503c\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    maxUnavailable: 20%\n")),(0,i.kt)("p",null,"\u6ce8\u610f\uff0cmaxUnavailable \u548c partition \u4e24\u4e2a\u503c\u662f\u6ca1\u6709\u5fc5\u7136\u5173\u8054\u3002\u4e3e\u4f8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53 {matched pod}=100,partition=50,maxUnavailable=10\uff0c\u63a7\u5236\u5668\u4f1a\u53d1\u5e03 50 \u4e2a Pod \u5230\u65b0\u7248\u672c\uff0c\u4f46\u662f\u53d1\u5e03\u7a97\u53e3\u4e3a 10\uff0c\u5373\u540c\u4e00\u65f6\u95f4\u53ea\u4f1a\u53d1\u5e03 10 \u4e2a Pod\uff0c\u6bcf\u53d1\u5e03\u597d\u4e00\u4e2a Pod \u624d\u4f1a\u518d\u627e\u4e00\u4e2a\u53d1\u5e03\uff0c\u76f4\u5230 50 \u4e2a\u53d1\u5e03\u5b8c\u6210\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53 {matched pod}=100,partition=80,maxUnavailable=30\uff0c\u63a7\u5236\u5668\u4f1a\u53d1\u5e03 20 \u4e2a Pod \u5230\u65b0\u7248\u672c\uff0c\u56e0\u4e3a\u6ee1\u8db3 maxUnavailable \u6570\u91cf\uff0c\u6240\u4ee5\u8fd9 20 \u4e2a Pod \u4f1a\u540c\u65f6\u53d1\u5e03\u3002")),(0,i.kt)("h4",{id:"\u66f4\u65b0\u6682\u505c"},"\u66f4\u65b0\u6682\u505c"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e paused \u4e3a true \u6682\u505c\u53d1\u5e03\uff0c\u6b64\u65f6\u5bf9\u4e8e\u65b0\u521b\u5efa\u7684\u3001\u6269\u5bb9\u7684pod\u4f9d\u65e7\u4f1a\u5b9e\u73b0\u6ce8\u5165\u80fd\u529b\uff0c\u5df2\u7ecf\u66f4\u65b0\u7684pod\u4f1a\u4fdd\u6301\u66f4\u65b0\u540e\u7684\u7248\u672c\u4e0d\u52a8\uff0c\u8fd8\u6ca1\u6709\u66f4\u65b0\u7684pod\u4f1a\u6682\u505c\u66f4\u65b0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    paused: true\n")),(0,i.kt)("h4",{id:"\u91d1\u4e1d\u96c0\u53d1\u5e03"},"\u91d1\u4e1d\u96c0\u53d1\u5e03"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6709\u91d1\u4e1d\u96c0\u53d1\u5e03\u9700\u6c42\u7684\u4e1a\u52a1\uff0c\u53ef\u4ee5\u901a\u8fc7strategy.selector\u6765\u5b9e\u73b0\u3002\u65b9\u5f0f\uff1a\u5bf9\u4e8e\u9700\u8981\u7387\u5148\u91d1\u4e1d\u96c0\u7070\u5ea6\u7684pod\u6253\u4e0a\u56fa\u5b9a\u7684labels","[canary.release]"," = true\uff0c\u518d\u901a\u8fc7strategy.selector.matchLabels\u6765\u9009\u4e2d\u8be5pod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    selector:\n      matchLabels:\n      - canary.release: true\n")),(0,i.kt)("h3",{id:"\u53d1\u5e03\u987a\u5e8f\u63a7\u5236"},"\u53d1\u5e03\u987a\u5e8f\u63a7\u5236"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5bf9\u5347\u7ea7\u7684pod\u6392\u5e8f\uff0c\u4fdd\u8bc1\u591a\u6b21\u5347\u7ea7\u7684\u987a\u5e8f\u4e00\u81f4"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9009\u62e9\u4f18\u5148\u987a\u5e8f\u662f\uff08\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff09\uff1a unscheduled < scheduled, pending < unknown < running, not-ready < ready, newer pods < older pods"),(0,i.kt)("li",{parentName:"ul"},"scatter\u6253\u6563\u6392\u5e8f")),(0,i.kt)("h4",{id:"scatter\u6253\u6563\u987a\u5e8f"},"scatter\u6253\u6563\u987a\u5e8f"),(0,i.kt)("p",null,"\u6253\u6563\u7b56\u7565\u5141\u8bb8\u7528\u6237\u5b9a\u4e49\u5c06\u7b26\u5408\u67d0\u4e9b\u6807\u7b7e\u7684 Pod \u6253\u6563\u5230\u6574\u4e2a\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u3002\u6bd4\u5982\uff0c\u4e00\u4e2a SidecarSet\u6240\u7ba1\u7406\u7684pod\u4e3a10\uff0c\u5982\u679c\u4e0b\u9762\u6709 3 \u4e2a Pod \u5e26\u6709 foo=bar \u6807\u7b7e\uff0c\u4e14\u7528\u6237\u5728\u6253\u6563\u7b56\u7565\u4e2d\u8bbe\u7f6e\u4e86\u8fd9\u4e2a\u6807\u7b7e\uff0c\u90a3\u4e48\u8fd9 3 \u4e2a Pod \u4f1a\u88ab\u653e\u5728\u7b2c 1\u30016\u300110 \u4e2a\u4f4d\u7f6e\u53d1\u5e03\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: sidecarset\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    scatterStrategy:\n    - key: foo\n      value: bar\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u5982\u679c\u4f7f\u7528 scatter \u7b56\u7565\uff0c\u5efa\u8bae\u53ea\u8bbe\u7f6e\u4e00\u5bf9 key-value \u505a\u6253\u6563\uff0c\u4f1a\u6bd4\u8f83\u597d\u7406\u89e3\u3002")),(0,i.kt)("h3",{id:"sidecar\u70ed\u5347\u7ea7\u7279\u6027"},"Sidecar\u70ed\u5347\u7ea7\u7279\u6027"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,i.kt)("p",null,"SidecarSet\u539f\u5730\u5347\u7ea7\u4f1a\u5148\u505c\u6b62\u65e7\u7248\u672c\u7684\u5bb9\u5668\uff0c\u7136\u540e\u521b\u5efa\u65b0\u7248\u672c\u7684\u5bb9\u5668\u3002\u8fd9\u79cd\u65b9\u5f0f\u66f4\u52a0\u9002\u5408\u4e0d\u5f71\u54cdPod\u670d\u52a1\u53ef\u7528\u6027\u7684sidecar\u5bb9\u5668\uff0c\u6bd4\u5982\u8bf4\uff1a\u65e5\u5fd7\u6536\u96c6Agent\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u5bf9\u4e8e\u5f88\u591a\u4ee3\u7406\u6216\u8fd0\u884c\u65f6\u7684sidecar\u5bb9\u5668\uff0c\u4f8b\u5982Istio Envoy\uff0c\u8fd9\u79cd\u5347\u7ea7\u65b9\u6cd5\u5c31\u6709\u95ee\u9898\u4e86\u3002Envoy\u4f5c\u4e3aPod\u4e2d\u7684\u4e00\u4e2a\u4ee3\u7406\u5bb9\u5668\uff0c\u4ee3\u7406\u4e86\u6240\u6709\u7684\u6d41\u91cf\uff0c\u5982\u679c\u76f4\u63a5\u91cd\u542f\uff0cPod\u670d\u52a1\u7684\u53ef\u7528\u6027\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u5982\u679c\u9700\u8981\u5355\u72ec\u5347\u7ea7envoy sidecar\uff0c\u5c31\u9700\u8981\u590d\u6742\u7684grace\u7ec8\u6b62\u548c\u534f\u8c03\u673a\u5236\u3002\u6240\u4ee5\u6211\u4eec\u4e3a\u8fd9\u79cdsidecar\u5bb9\u5668\u7684\u5347\u7ea7\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b0\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: SidecarSet\nmetadata:\n  name: hotupgrade-sidecarset\nspec:\n  selector:\n    matchLabels:\n      app: hotupgrade\n  containers:\n  - name: sidecar\n    image: openkruise/hotupgrade-sample:sidecarv1\n    imagePullPolicy: Always\n    lifecycle:\n      postStart:\n        exec:\n          command:\n          - /bin/sh\n          - /migrate.sh\n    upgradeStrategy:\n      upgradeType: HotUpgrade\n      hotUpgradeEmptyImage: openkruise/hotupgrade-sample:empty\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"upgradeType: HotUpgrade\u4ee3\u8868\u8be5sidecar\u5bb9\u5668\u7684\u7c7b\u578b\u662fhot upgrade\uff0c\u5c06\u6267\u884c\u70ed\u5347\u7ea7\u65b9\u6848"),(0,i.kt)("li",{parentName:"ul"},"hotUpgradeEmptyImage: \u5f53\u70ed\u5347\u7ea7sidecar\u5bb9\u5668\u65f6\uff0c\u4e1a\u52a1\u5fc5\u987b\u8981\u63d0\u4f9b\u4e00\u4e2aempty\u5bb9\u5668\u7528\u4e8e\u70ed\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u5bb9\u5668\u5207\u6362\u3002empty\u5bb9\u5668\u540csidecar\u5bb9\u5668\u5177\u6709\u76f8\u540c\u7684\u914d\u7f6e\uff08\u9664\u4e86\u955c\u50cf\u5730\u5740\uff09\uff0c\u4f8b\u5982\uff1acommand, lifecycle, probe\u7b49\uff0c\u4f46\u662f\u5b83\u4e0d\u505a\u4efb\u4f55\u5de5\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"lifecycle.postStart: \u72b6\u6001\u8fc1\u79fb\uff0c\u8be5\u8fc7\u7a0b\u5b8c\u6210\u70ed\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u7684\u72b6\u6001\u8fc1\u79fb\uff0c\u8be5\u811a\u672c\u9700\u8981\u7531\u4e1a\u52a1\u6839\u636e\u81ea\u8eab\u7684\u7279\u70b9\u81ea\u884c\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1anginx\u70ed\u5347\u7ea7\u9700\u8981\u5b8c\u6210Listen FD\u5171\u4eab\u4ee5\u53ca\u6d41\u91cf\u6392\u6c34\uff08reload\uff09")),(0,i.kt)("p",null,"\u70ed\u5347\u7ea7\u7279\u6027\u603b\u5171\u5305\u542b\u4ee5\u4e0b\u4e24\u4e2a\u8fc7\u7a0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pod\u521b\u5efa\u65f6\uff0c\u6ce8\u5165\u70ed\u5347\u7ea7\u5bb9\u5668"),(0,i.kt)("li",{parentName:"ol"},"\u539f\u5730\u5347\u7ea7\u65f6\uff0c\u5b8c\u6210\u70ed\u5347\u7ea7\u6d41\u7a0b")),(0,i.kt)("h4",{id:"\u6ce8\u5165\u70ed\u5347\u7ea7\u5bb9\u5668"},"\u6ce8\u5165\u70ed\u5347\u7ea7\u5bb9\u5668"),(0,i.kt)("p",null,"Pod\u521b\u5efa\u65f6\uff0cSidecarSet Webhook\u5c06\u4f1a\u6ce8\u5165\u4e24\u4e2a\u5bb9\u5668\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"{sidecarContainer.name}-1: \u5982\u4e0b\u56fe\u6240\u793a envoy-1\uff0c\u8fd9\u4e2a\u5bb9\u5668\u4ee3\u8868\u6b63\u5728\u5b9e\u9645\u5de5\u4f5c\u7684sidecar\u5bb9\u5668\uff0c\u4f8b\u5982\uff1aenvoy:1.16.0"),(0,i.kt)("li",{parentName:"ol"},"{sidecarContainer.name}-2: \u5982\u4e0b\u56fe\u6240\u793a envoy-2\uff0c\u8fd9\u4e2a\u5bb9\u5668\u662f\u4e1a\u52a1\u914d\u7f6e\u7684hotUpgradeEmptyImage\u5bb9\u5668\uff0c\u4f8b\u5982\uff1aempty:1.0\uff0c\u7528\u4e8e\u540e\u9762\u7684\u70ed\u5347\u7ea7\u673a\u5236")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sidecarset hotupgrade_injection",src:t(6685).Z})),(0,i.kt)("h4",{id:"\u70ed\u5347\u7ea7\u6d41\u7a0b"},"\u70ed\u5347\u7ea7\u6d41\u7a0b"),(0,i.kt)("p",null,"\u70ed\u5347\u7ea7\u6d41\u7a0b\u4e3b\u8981\u5206\u4e3a\u4e00\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Upgrade: \u5c06empty\u5bb9\u5668\u5347\u7ea7\u4e3a\u5f53\u524d\u6700\u65b0\u7684sidecar\u5bb9\u5668\uff0c\u4f8b\u5982\uff1aenvoy-2.Image = envoy:1.17.0"),(0,i.kt)("li",{parentName:"ol"},"Migration: lifecycle.postStart\u5b8c\u6210\u70ed\u5347\u7ea7\u6d41\u7a0b\u4e2d\u7684\u72b6\u6001\u8fc1\u79fb\uff0c\u5f53\u8fc1\u79fb\u5b8c\u6210\u540e\u9000\u51fa"),(0,i.kt)("li",{parentName:"ol"},"Reset: \u72b6\u6001\u8fc1\u79fb\u5b8c\u6210\u540e\uff0c\u70ed\u5347\u7ea7\u6d41\u7a0b\u5c06\u8bbe\u7f6eenvoy-1\u5bb9\u5668\u4e3aempty\u955c\u50cf\uff0c\u4f8b\u5982\uff1aenvoy-1.Image = empty:1.0")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u4e09\u4e2a\u6b65\u9aa4\u5b8c\u6210\u4e86\u70ed\u5347\u7ea7\u4e2d\u7684\u5168\u90e8\u6d41\u7a0b\uff0c\u5f53\u5bf9Pod\u6267\u884c\u591a\u6b21\u70ed\u5347\u7ea7\u65f6\uff0c\u5c06\u91cd\u590d\u6027\u7684\u6267\u884c\u4e0a\u8ff0\u4e09\u4e2a\u6b65\u9aa4\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sidecarset hotupgrade",src:t(223).Z})),(0,i.kt)("h4",{id:"migration-demo"},"Migration Demo"),(0,i.kt)("p",null,"SidecarSet\u70ed\u5347\u7ea7\u673a\u5236\u4e0d\u4ec5\u5b8c\u6210\u4e86mesh\u5bb9\u5668\u7684\u5207\u6362\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u65b0\u8001\u7248\u672c\u7684\u534f\u8c03\u673a\u5236\uff08PostStartHook\uff09\uff0c\u4f46\u662f\u81f3\u6b64\u8fd8\u53ea\u662f\u4e07\u91cc\u957f\u5f81\u7684\u7b2c\u4e00\u6b65\uff0cMesh\u5bb9\u5668\u540c\u65f6\u8fd8\u9700\u8981\u63d0\u4f9b PostStartHook \u811a\u672c\u6765\u5b8c\u6210mesh\u670d\u52a1\u81ea\u8eab\u7684\u5e73\u6ed1\u5347\u7ea7\uff08\u4e0a\u8ff0Migration\u8fc7\u7a0b\uff09\uff0c\u5982\uff1aEnvoy\u70ed\u91cd\u542f\u3001Mosn\u65e0\u635f\u91cd\u542f\u3002\n\u4e3a\u4e86\u65b9\u4fbf\u5927\u5bb6\u80fd\u66f4\u597d\u7684\u7406\u89e3Migration\u8fc7\u7a0b\uff0c\u5728kruise\u4ed3\u5e93\u4e0b\u9762\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5305\u542b\u4ee3\u7801\u548c\u955c\u50cf\u7684demo\uff0c\u4f9b\u5927\u5bb6\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/samples/tree/master/hotupgrade"},"Migration Demo")),(0,i.kt)("p",null,"\u8bbe\u8ba1\u6587\u6863\u8bf7\u53c2\u8003: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/docs/proposals/20210305-sidecarset-hotupgrade.md"},"proposals sidecarset hot upgrade")),(0,i.kt)("p",null,"\u5f53\u524d\u5df2\u77e5\u7684\u5229\u7528SidecarSet\u70ed\u5347\u7ea7\u673a\u5236\u7684\u6848\u4f8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.aliyun.com/document_detail/193804.html"},"ALIYUN ASM")," \u5b9e\u73b0\u4e86Service Mesh\u4e2d\u6570\u636e\u9762\u7684\u65e0\u635f\u5347\u7ea7")),(0,i.kt)("h3",{id:"sidecarset\u72b6\u6001\u8bf4\u660e"},"SidecarSet\u72b6\u6001\u8bf4\u660e"),(0,i.kt)("p",null,"\u901a\u8fc7sidecarset\u539f\u5730\u5347\u7ea7sidecar\u5bb9\u5668\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7SidecarSet.Status\u6765\u89c2\u5bdf\u5347\u7ea7\u7684\u8fc7\u7a0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# kubectl describe sidecarsets sidecarset-example\nName:         sidecarset-example\nKind:         SidecarSet\nStatus:\n  Matched Pods:         10  # The number of PODs injected and managed by the Sidecarset\n  Updated Pods:         5   # 5 PODs have been updated to the container version in the latest SidecarSet\n  Ready Pods:           8   # Matched Pods pod.status.condition.Ready = true number\n  Updated Ready Pods:   3   # Updated Pods && Ready Pods number\n")))}u.isMDXComponent=!0},223:function(e,a,t){a.Z=t.p+"assets/images/sidecarset_hotupgrade-8f7325ba1f999667c60bea6d6aec32f9.png"},6685:function(e,a,t){a.Z=t.p+"assets/images/sidecarset_hotupgrade_injection-bc68babcd84165fd3561dd2d4f5f8d9d.png"}}]);