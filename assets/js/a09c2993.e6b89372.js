"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Introduction",slug:"/"},l=void 0,p={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Welcome to OpenKruise!",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"wsy",lastUpdatedAt:1632470465,formattedLastUpdatedAt:"9/24/2021",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/docs/next/installation"}},u=[{value:"Key features",id:"key-features",children:[]},{value:"Relationship",id:"relationship",children:[{value:"OpenKruise vs. Kubernetes",id:"openkruise-vs-kubernetes",children:[]},{value:"OpenKruise vs. Platform-as-a-Service (PaaS)",id:"openkruise-vs-platform-as-a-service-paas",children:[]}]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to OpenKruise!"),(0,o.kt)("p",null,"OpenKruise is an extended component suite for Kubernetes, which mainly focuses on application automations, such as ",(0,o.kt)("em",{parentName:"p"},"deployment, upgrade, ops and avalibility protection"),"."),(0,o.kt)("p",null,"Mostly features provided by OpenKruise are built primarily based on CRD extensions. They can work in pure Kubernetes clusters without any other dependences."),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Advanced Workloads")),(0,o.kt)("p",{parentName:"li"},"  OpenKruise contains a set of advanced workloads, such as CloneSet, Advanced StatefulSet, Advanced DaemonSet, BroadcastJob."),(0,o.kt)("p",{parentName:"li"},"  They all support not only the basic features which are similar to the original Workloads in Kubernetes, but also more advanced abilities like in-place update, configurable scale/upgrade strategies, parallel operations."),(0,o.kt)("p",{parentName:"li"},"  In-place Update is a new methodology to update container images and even environments.\nIt only restarts the specific container with the new image and the Pod will not be recreated, which leads to much faster update process and much less side effects on other sub-systems such as scheduler, CNI or CSI.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bypass Application Management")),(0,o.kt)("p",{parentName:"li"},"  OpenKruise provides several bypass ways to manage sidecar container, multi-domain deployment for applications, which means you can manage these things without modifying the Workloads of applications."),(0,o.kt)("p",{parentName:"li"},"  For example, SidecarSet can help you inject sidecar containers into all matching Pods during creation and even update them in-place with no effect on other containers in Pod."),(0,o.kt)("p",{parentName:"li"},"  WorkloadSpread constrains the spread of stateless workload, which empowers single workload the abilities for multi-domain and elastic deployment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"High-avalibility Protection")),(0,o.kt)("p",{parentName:"li"},"  OpenKruise works hard on protecting high-avalibility for applications."),(0,o.kt)("p",{parentName:"li"},"  Now it can prevent your Kubernetes resources from the cascading deletion mechanism, including CRD, Namespace and almost all kinds of Workloads."),(0,o.kt)("p",{parentName:"li"},"  In voluntary disruption scenarios, PodUnavailableBudget can achieve the effect of preventing application disruption or SLA degradation, which is not only compatible with Kubernetes PDB protection for Eviction API, but also able to support the protection ability of above scenarios.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"High-level Operation Features")),(0,o.kt)("p",{parentName:"li"},"  OpenKruise also provides high-level operation features to help you manage your applications better."),(0,o.kt)("p",{parentName:"li"},"  You can use ImagePullJob to download any images on any nodes you want. Or you can even requires one or more containers in an running Pod to be restarted."))),(0,o.kt)("h2",{id:"relationship"},"Relationship"),(0,o.kt)("h3",{id:"openkruise-vs-kubernetes"},"OpenKruise vs. Kubernetes"),(0,o.kt)("p",null,"Briefly speaking, OpenKruise plays a subsidiary role of Kubernetes."),(0,o.kt)("p",null,"Kubernetes itself has already provides some features for application deployment and management, such as some ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"basic Workloads"),".\nBut it is far from enough to deploy and manage lots of applications in large-scale production clusters."),(0,o.kt)("p",null,"OpenKruise can be easily installed in any Kubernetes clusters.\nIt makes up for defects of Kubernetes, including but not limited to application deployment, upgrade, protection and operations."),(0,o.kt)("h3",{id:"openkruise-vs-platform-as-a-service-paas"},"OpenKruise vs. Platform-as-a-Service (PaaS)"),(0,o.kt)("p",null,"OpenKruise is ",(0,o.kt)("strong",{parentName:"p"},"not")," a PaaS and it will ",(0,o.kt)("strong",{parentName:"p"},"not")," provide any abilities of PaaS."),(0,o.kt)("p",null,"It is a standard extended suite for Kubernetes, currently contains two components named ",(0,o.kt)("inlineCode",{parentName:"p"},"kruise-manager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"kruise-daemon"),".\nPaaS can use the features provided by OpenKruise to make applications deployment and management better."),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"Here are some recommended next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start to ",(0,o.kt)("a",{parentName:"li",href:"./installation"},"install OpenKruise"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn OpenKruise's ",(0,o.kt)("a",{parentName:"li",href:"core-concepts/architecture"},"Architecture"),".")))}d.isMDXComponent=!0}}]);