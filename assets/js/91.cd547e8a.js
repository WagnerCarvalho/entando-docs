(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1223:function(e,t,a){"use strict";a.r(t);var n=a(32),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"caching-and-clustering-in-an-entando-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#caching-and-clustering-in-an-entando-application"}},[e._v("#")]),e._v(" Caching and Clustering in an Entando Application")]),e._v(" "),n("h2",{attrs:{id:"app-engine-clustering-and-high-availability"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-engine-clustering-and-high-availability"}},[e._v("#")]),e._v(" App Engine Clustering and High Availability")]),e._v(" "),n("p",[e._v("The Entando App Engine can be deployed as a clustered set of instances using the clustering and replication ability of Kubernetes. It is backed by a shared cache with two default choices for implementation.")]),e._v(" "),n("p",[e._v("This guide demonstrates how to configure and test a clustered instance of the Entando App Engine.")]),e._v(" "),n("p",[e._v("Microservices clustering that adds functionality to an Entando Application is different from clustering used by the Entando App Engine. Microservices rely on a custom clustering configuration and setup based on implementation and selections made during their creation. Refer to documentation addressing clustered microservices and caching implementation for configuration and deployment details.")]),e._v(" "),n("h2",{attrs:{id:"storage-requirements-for-clustered-entando-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#storage-requirements-for-clustered-entando-applications"}},[e._v("#")]),e._v(" Storage Requirements for Clustered Entando Applications")]),e._v(" "),n("p",[e._v("To scale an Entando Application across multiple nodes a storage class that supports a "),n("code",[e._v("ReadWriteMany")]),e._v(" access policy must be instantiated. There are a number of ways to accomplish this, inclusive of dedicated storage providers such as GlusterFS. Cloud Kubernetes providers also offer clustered storage options specific to their implementation, such as Google Cloud File in GKE or Azure Files in AKS.")]),e._v(" "),n("p",[e._v("Two different storage classes can be used for clustered vs non-clustered storage if the default class doesn't support "),n("code",[e._v("ReadWriteMany")]),e._v(". To achieve this, add the following properties to the operator config map in the helm templates:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('entando.k8s.operator.default.clustered.storage.class: "[clustered RWX storage class]"\nentando.k8s.operator.default.non.clustered.storage.class: "[RWO storage class]"\n')])])]),n("p",[e._v("Set both values to the storage class appropriate to the configuration.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("To scale an Entando Application without the use of clustered storage assumes all instances are scheduled to a single node and requires a "),n("code",[e._v("ReadWriteOnce (RWO)")]),e._v(" policy in conjunction with taints on other nodes. Understanding the pros and cons of same-node scheduling is critical for node resource optimization and application recovery, should the instance become unreachable. Note that if the node quits or is shut down the application will be unavailable until Kubernetes reschedules the pods to an alternate node.")])]),e._v(" "),n("h2",{attrs:{id:"caching"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[e._v("#")]),e._v(" Caching")]),e._v(" "),n("h3",{attrs:{id:"data-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-management"}},[e._v("#")]),e._v(" Data Management")]),e._v(" "),n("p",[e._v("At startup the Entando App Engine will load all database data into the shared cache. Applicable content will be served from the cache when a page is rendered or content is fetched. In the event of a write to the cache, both the cache and database will be updated.")]),e._v(" "),n("p",[e._v("The following objects are cached in the base implementation of Entando App Engine:")]),e._v(" "),n("ul",[n("li",[e._v("Pages")]),e._v(" "),n("li",[e._v("Page templates")]),e._v(" "),n("li",[e._v("Categories")]),e._v(" "),n("li",[e._v("Widgets")]),e._v(" "),n("li",[e._v("Configuration (Application level configuration)")]),e._v(" "),n("li",[e._v("Roles")]),e._v(" "),n("li",[e._v("Groups")]),e._v(" "),n("li",[e._v("Languages")]),e._v(" "),n("li",[e._v("Labels (i18n)")]),e._v(" "),n("li",[e._v("User profiles")]),e._v(" "),n("li",[e._v("API Catalog (legacy API metadata separate from swagger)")]),e._v(" "),n("li",[e._v("Data models and data types (deprecated)")])]),e._v(" "),n("h2",{attrs:{id:"infinispan-implementation-default"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#infinispan-implementation-default"}},[e._v("#")]),e._v(" Infinispan Implementation (Default)")]),e._v(" "),n("p",[e._v("The default implementation of the Entando App Engine cache is included in the quickstart and base images of the release and utilizes "),n("a",{attrs:{href:"https://infinispan.org/docs/stable/titles/embedding/embedding.html#install_library",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infinispan in Library Mode"),n("OutboundLink")],1),e._v(". It is managed through configuration of the application server hosting the Entando App Engine.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(678),alt:"Infinispan Caching"}})]),e._v(" "),n("p",[e._v("Add replicas of the Entando App Engine (entando-de-app) to a deployment to take advantage of the base implementation. Note that new pods will automatically join the cluster. A high availability deployment distributed across nodes is a function of the deployment objectives and underlying Kubernetes implementation. The party responsible for cluster and application implementation must ensure that applications are scheduled and deployed in accordance with uptime and performance goals.")]),e._v(" "),n("p",[n("a",{attrs:{href:"../../tutorials/devops/caching-and-clustering"}},[e._v("Read more here")]),e._v(" for tutorials and step-by-step instructions to use the Infinispan cache in an Entando Application.")]),e._v(" "),n("h2",{attrs:{id:"redis-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis-implementation"}},[e._v("#")]),e._v(" Redis Implementation")]),e._v(" "),n("p",[e._v("An Entando Application can also be configured to utilize an external "),n("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis"),n("OutboundLink")],1),e._v(" cache. In a Redis implementation of an Entando Application the cache is deployed independently of the Entando App Engine and the Entando App Engine is configured to connect to the deployed instance.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(679),alt:"Redis Caching"}})]),e._v(" "),n("p",[e._v("The Redis cache is not deployed by the Entando Operator and must be managed by a DevOps team member or Kubernetes cluster administrators.")]),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/v6.3.2/tutorials/devops/caching-and-clustering.html#configuring-and-deploying-with-redis"}},[e._v("Read more here")]),e._v(" for tutorials and step-by-step instructions to use a Redis cache in an Entando Application.")],1),e._v(" "),n("h2",{attrs:{id:"performance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),n("p",[e._v("Consider the following when designing an Entando App Engine cluster:")]),e._v(" "),n("ul",[n("li",[e._v("In a read only implementation, or an implementation with infrequent writes to the cached objects listed above, the network latency between pods on different nodes will not be a major driver of runtime performance. Each pod will have a fully replicated copy of the cache.")]),e._v(" "),n("li",[e._v("In write heavy implementations network latency between nodes can factor into performance.")]),e._v(" "),n("li",[e._v("The overall performance impact of network latency will vary depending upon implementation. Performance is impacted by the types of objects written, the size of those objects, and whether the writes invalidate single or entire lists of objects in the cache.")])]),e._v(" "),n("p",[e._v("It is generally recommended that performance testing on clustered instances correlates to the expected runtime traffic pattern of a live application. Every application will have a unique performance profile.")]),e._v(" "),n("h3",{attrs:{id:"cache-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cache-management"}},[e._v("#")]),e._v(" Cache Management")]),e._v(" "),n("p",[e._v("When a new replica of an Entando Application joins a cluster of applications the cache is replicated to that node. If the cache is relatively large or the network is slow this may add to the total startup time of the new instance. Existing instances will continue to function.")])])}),[],!1,null,null,null);t.default=i.exports},678:function(e,t,a){e.exports=a.p+"assets/img/infinispan-caching.7a9cc198.png"},679:function(e,t,a){e.exports=a.p+"assets/img/redis-caching.25e28501.png"}}]);