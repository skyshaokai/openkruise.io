"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[8039],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Golang client"},p=void 0,s={unversionedId:"developer-manuals/go-client",id:"developer-manuals/go-client",isDocsHomePage:!1,title:"Golang client",description:"\u5982\u679c\u8981\u5728\u4e00\u4e2a Golang \u9879\u76ee\u4e2d\u5bf9 OpenKruise \u7684\u8d44\u6e90\u505a create/get/update/delete \u8fd9\u4e9b\u64cd\u4f5c\u3001\u6216\u8005\u901a\u8fc7 informer \u505a list-watch\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u652f\u6301 OpenKruise \u7684 client\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer-manuals/go-client.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/go-client",permalink:"/zh/docs/next/developer-manuals/go-client",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/developer-manuals/go-client.md",tags:[],version:"current",lastUpdatedBy:"wsy",lastUpdatedAt:1632470465,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"Golang client"},sidebar:"docs",previous:{title:"HPA configuration",permalink:"/zh/docs/next/best-practices/hpa-configuration"},next:{title:"Java client",permalink:"/zh/docs/next/developer-manuals/java-client"}},u=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[{value:"\u76f4\u63a5\u4f7f\u7528",id:"\u76f4\u63a5\u4f7f\u7528",children:[]},{value:"\u901a\u8fc7 controller-runtime \u4f7f\u7528",id:"\u901a\u8fc7-controller-runtime-\u4f7f\u7528",children:[]}]}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u8981\u5728\u4e00\u4e2a Golang \u9879\u76ee\u4e2d\u5bf9 OpenKruise \u7684\u8d44\u6e90\u505a create/get/update/delete \u8fd9\u4e9b\u64cd\u4f5c\u3001\u6216\u8005\u901a\u8fc7 informer \u505a list-watch\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u652f\u6301 OpenKruise \u7684 client\u3002"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u5f15\u5165 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-api"},"kruise-api")," \u4ed3\u5e93\uff0c\u5b83\u5305\u542b\u4e86 Kruise \u7684 schema \u5b9a\u4e49\u4ee5\u53ca clientset \u7b49\u5de5\u5177\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u8981"),"\u76f4\u63a5\u5f15\u5165\u6574\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"kruise")," \u4ed3\u5e93\u4f5c\u4e3a\u4f9d\u8d56\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5728\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod")," \u4e2d\u5f15\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-api")," \u4f9d\u8d56 \uff08\u7248\u672c\u53f7\u6700\u597d\u548c\u4f60\u5b89\u88c5\u7684 Kruise \u7248\u672c\u76f8\u540c\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"require github.com/openkruise/kruise-api v0.10.0\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version in your Project"),(0,i.kt)("th",{parentName:"tr",align:null},"Import Kruise-api < v0.10"),(0,i.kt)("th",{parentName:"tr",align:null},"Import Kruise-api >= v0.10"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"< 1.18"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y (x <= 9)"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y-legacy (x >= 10)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},">= 1.18"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y-1.18 (7 <= x <= 9)"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y (x >= 10)")))),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u5728\u4f60\u7684\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-api"),"\uff1a\u76f4\u63a5\u4f7f\u7528 \u6216 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-runtime")," \u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," \u6216 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-sdk"},"operator-sdk")," \u751f\u6210\u7684\uff0c\n\u90a3\u4e48\u5efa\u8bae\u4f60\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-runtime")," \u4f7f\u7528\u3002\u5426\u5219\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"\u76f4\u63a5\u4f7f\u7528"},"\u76f4\u63a5\u4f7f\u7528"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"New Kruise client using your rest config:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseclientset "github.com/openkruise/kruise-api/client/clientset/versioned"\n\n// cfg is the rest config defined in client-go, you should get it using kubeconfig or serviceaccount\nkruiseClient := kruiseclientset.NewForConfigOrDie(cfg)\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Get/List Kruise resources:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cloneSet, err := kruiseClient.AppsV1alpha1().CloneSets(namespace).Get(name, metav1.GetOptions{})\ncloneSetList, err := kruiseClient.AppsV1alpha1().CloneSets(namespace).List(metav1.ListOptions{})\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create/Update Kruise resources:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n\ncloneSet := kruiseappsv1alpha1.CloneSet{\n    // ...\n}\nerr = kruiseClient.AppsV1alpha1().CloneSets(namespace).Create(&cloneSet, metav1.CreateOptions)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Get first\ncloneSet, err := kruiseClient.AppsV1alpha1().CloneSets(namespace).Get(name, metav1.GetOptions{})\nif err != nil {\n    return err\n}\n\n// Modify object, such as replicas or template\ncloneSet.Spec.Replicas = utilpointer.Int32Ptr(5)\n\n// Update\n// This might get conflict, should retry it\nif err = kruiseClient.AppsV1alpha1().CloneSets(namespace).Update(&cloneSet, metav1.UpdateOptions); err != nil {\n    return err\n}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Watch Kruise resources:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseinformer "github.com/openkruise/kruise-api/client/informers/externalversions"\n\nkruiseInformerFactory := kruiseinformer.NewSharedInformerFactory(kruiseClient, 0)\nkruiseInformerFactory.Apps().V1alpha1().CloneSets().Informer().AddEventHandler(...)\nkruiseInformerFactory.Start(...)\n')),(0,i.kt)("h3",{id:"\u901a\u8fc7-controller-runtime-\u4f7f\u7528"},"\u901a\u8fc7 controller-runtime \u4f7f\u7528"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add kruise apis into the scheme in your ",(0,i.kt)("inlineCode",{parentName:"li"},"main.go"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseapi "github.com/openkruise/kruise-api"\n\n// ...\n_ = kruiseapi.AddToScheme(scheme)\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"New client")),(0,i.kt)("p",null,"This is needed when use controller-runtime client directly."),(0,i.kt)("p",null,"If your project is generated by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-sdk"},"operator-sdk"),",\nyou should get the client from ",(0,i.kt)("inlineCode",{parentName:"p"},"mgr.GetClient()")," instead of the example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "sigs.k8s.io/controller-runtime/pkg/client"\n\napiClient, err := client.New(c, client.Options{Scheme: scheme})\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Get/List")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\ncloneSet := kruiseappsv1alpha1.CloneSet{}\nerr = apiClient.Get(context.TODO(), types.NamespacedName{Namespace: namespace, Name: name}, &cloneSet)\n\ncloneSetList := kruiseappsv1alpha1.CloneSetList{}\nerr = apiClient.List(context.TODO(), &cloneSetList, client.InNamespace(instance.Namespace))\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create/Update/Delete")),(0,i.kt)("p",null,"Create a new CloneSet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n\ncloneSet := kruiseappsv1alpha1.CloneSet{\n    // ...\n}\nerr = apiClient.Create(context.TODO(), &cloneSet)\n')),(0,i.kt)("p",null,"Update an existing CloneSet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n\n// Get first\ncloneSet := kruiseappsv1alpha1.CloneSet{}\nif err = apiClient.Get(context.TODO(), types.NamespacedName{Namespace: namespace, Name: name}, &cloneSet); err != nil {\n    return err\n}\n\n// Modify object, such as replicas or template\ncloneSet.Spec.Replicas = utilpointer.Int32Ptr(5)\n\n// Update\n// This might get conflict, should retry it\nif err = apiClient.Update(context.TODO(), &cloneSet); err != nil {\n    return err\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"List watch and informer")),(0,i.kt)("p",null,"If your project is generated by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-sdk"},"operator-sdk")," and get the client from ",(0,i.kt)("inlineCode",{parentName:"p"},"mgr.GetClient()"),",\nthen methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"Get"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"List")," have already queried from informer instead of apiserver."))}m.isMDXComponent=!0}}]);