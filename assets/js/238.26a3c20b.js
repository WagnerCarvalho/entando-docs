(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1036:function(e,t,a){"use strict";a.r(t);var o=a(32),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-on-azure-kubernetes-service-aks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-azure-kubernetes-service-aks"}},[e._v("#")]),e._v(" Installation on Azure Kubernetes Service (AKS)")]),e._v(" "),a("p",[e._v("The steps below walk you through installing the Entando Platform in an Azure Kubernetes Services (AKS) cluster.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#cluster-setup"}},[e._v("Create a single AKS cluster")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#deploy-nginx-ingress-controller"}},[e._v("Install NGINX as an ingress controller")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#install-the-entando-custom-resources"}},[e._v("Install the Entando Custom Resources")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#configure-the-entando-application"}},[e._v("Configure the Entando Application")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#deploy-your-entando-application"}},[e._v("Deploy Entando")])])]),e._v(" "),a("p",[e._v("If you're already comfortable setting up an AKS cluster and installing NGINX, then you may be able to skip to "),a("a",{attrs:{href:"#install-the-entando-custom-resources"}},[e._v("setting up Entando")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Azure account")]),e._v(" "),a("li",[e._v("If you choose not to use the Azure Cloud Shell, you'll also need the Azure command line tool.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you're using an Azure free account, you may need to upgrade your account to enable pay-as-you-go billing. The Azure free account default quota allows just 1-4 vCPU which is not sufficient for this tutorial. There may be a delay before the quotas are updated when you upgrade your account.")])]),e._v(" "),a("h2",{attrs:{id:"cluster-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[e._v("#")]),e._v(" Cluster Setup")]),e._v(" "),a("h3",{attrs:{id:"setup-and-connect-to-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-connect-to-the-cluster"}},[e._v("#")]),e._v(" Setup and Connect to the Cluster")]),e._v(" "),a("ol",[a("li",[e._v("Login to Azure: "),a("a",{attrs:{href:"https://portal.azure.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://portal.azure.com/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Select the "),a("code",[e._v("Kubernetes services")]),e._v(" icon\n"),a("ul",[a("li",[e._v("If the icon isn't visible, click "),a("code",[e._v("More services")]),e._v(" on the right and search for Kubernetes")])])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Create")]),e._v(" in the upper left corner")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Create a Kubernetes cluster")]),e._v(". You'll start with the "),a("code",[e._v("Basics")]),e._v(" tab.")]),e._v(" "),a("li",[e._v("Select a "),a("code",[e._v("Resource group")]),e._v(" or create one with the "),a("code",[e._v("Create new")]),e._v(" link, e.g. YOUR-RESOURCE-GROUP")]),e._v(" "),a("li",[e._v("Enter a name of your choice for the Kubernetes cluster name, e.g. YOUR-CLUSTER")]),e._v(" "),a("li",[e._v("Pick your "),a("code",[e._v("Region")]),e._v(" if it wasn't automatically selected for you.")]),e._v(" "),a("li",[e._v("In the "),a("code",[e._v("Availability zones")]),e._v(" dropdown, pick "),a("strong",[e._v("one and only one")]),e._v(" availability zone\n"),a("ul",[a("li",[e._v("Generally, you could pick more than one but it will result in a failure in a quickstart environment. If you chose more than one availability zone you will have to provision storage, manage node affinity, and provide the correct network configuration to ensure your application deploys. We recommend only doing this for production clusters.")])])]),e._v(" "),a("li",[e._v("Select an "),a("a",{attrs:{href:"https://www.entando.com/page/en/compatibility-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entando-compatible Kubernetes version"),a("OutboundLink")],1),e._v(", e.g. 1.21.x")]),e._v(" "),a("li",[e._v("Keep the default "),a("code",[e._v("Node size")]),e._v(", e.g. Standard DS2 v2")]),e._v(" "),a("li",[e._v("Keep the "),a("code",[e._v("Scale Method")]),e._v(" set to "),a("code",[e._v("Autoscale")]),e._v(" and the "),a("code",[e._v("Node count range")]),e._v(" set from "),a("code",[e._v("1")]),e._v(" to "),a("code",[e._v("5")])]),e._v(" "),a("li",[e._v("(Optional) If you're familiar with AKS, you can change settings under other tabs (e.g. "),a("code",[e._v("Node Pools")]),e._v(", "),a("code",[e._v("Access")]),e._v(") as desired but the defaults should work. Entando uses base Kubernetes APIs, so as long as you follow the Entando configuration instructions below, you can tune your cluster infrastructure to meet your goals.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Review + Create")]),e._v(" then "),a("code",[e._v("Create")]),e._v(". It may take several minutes for your cluster to initialize.")])]),e._v(" "),a("p",[e._v("Note: A different storage class can be configured for "),a("RouterLink",{attrs:{to:"/next/tutorials/getting-started/gke-install.html#appendix-configuring-clustered-storage"}},[e._v("Clustered Storage")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"deploy-nginx-ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-nginx-ingress-controller"}},[e._v("#")]),e._v(" Deploy NGINX Ingress Controller")]),e._v(" "),a("ol",[a("li",[e._v("Navigate to your cluster by clicking "),a("code",[e._v("Go to Resource")]),e._v(" from the results page, or go to "),a("code",[e._v("Home")]),e._v(" → "),a("code",[e._v("Kubernetes service")]),e._v(" and click on your cluster.")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Connect")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Open Cloud Shell")]),e._v(" "),a("ul",[a("li",[e._v("With a new Azure account, you may see a warning: "),a("code",[e._v("You have no storage mounted")]),e._v(". Follow the instructions to create a new storage account.")])])]),e._v(" "),a("li",[e._v("If it wasn't done automatically, run the first two commands (e.g. "),a("code",[e._v("az account set...")]),e._v(" and "),a("code",[e._v("az aks get-credentials...")]),e._v(") to connect to your cluster. This should only be needed the first time you run the Azure Cloud Shell.\n"),a("ul",[a("li",[e._v("The following instructions assume you will use the Azure Cloud Shell but you can also run the commands in a local environment via "),a("code",[e._v("kubectl")])])])]),e._v(" "),a("li",[e._v("Deploy the NGINX controller to enable access to the cluster")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.3/deploy/static/provider/aws/deploy.yaml \n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Get the external IP address for your ingress controller")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get services -n ingress-nginx\n")])])]),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME                      TYPE          CLUSTER-IP    EXTERNAL-IP                        \ningress-nginx-controller  LoadBalancer  10.0.28.197   20.120.54.243\n")])])]),a("p",[e._v("The value of the external URL (EXTERNAL-IP) should be available within a few minutes. You'll need this address for "),a("code",[e._v("YOUR-HOST-NAME")]),e._v(" in the steps below.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("NGINX is working correctly if a "),a("code",[e._v("404 Not Found")]),e._v(" error page is generated when accessing "),a("code",[e._v("YOUR-HOST-NAME")]),e._v(" from your browser. For a more complete test, you can "),a("RouterLink",{attrs:{to:"/next/tutorials/devops/manage-nginx.html#verify-the-nginx-ingress-install"}},[e._v("set up a simple test application")]),e._v(" using Azure Cloud Shell or your local "),a("code",[e._v("kubectl")]),e._v(". You can also "),a("RouterLink",{attrs:{to:"/next/tutorials/devops/manage-nginx.html#customize-the-nginx-configuration"}},[e._v("customize the NGINX ingress")]),e._v(" to optimize the configuration for Entando.")],1)]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#azure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Guide for NGINX on Azure"),a("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),a("h3",{attrs:{id:"install-the-entando-custom-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resources"}},[e._v("#")]),e._v(" Install the Entando Custom Resources")]),e._v(" "),a("ol",[a("li",[e._v("Apply the cluster-scoped custom resource definitions (CRDs). This is required only once per cluster.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/entando/entando-releases/v7.0.1/dist/ge-1-1-6/namespace-scoped-deployment/cluster-resources.yaml\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Create the namespace for the Entando Application")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl create namespace entando\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Download the "),a("code",[e._v("entando-operator-config")]),e._v(" template so you can configure the "),a("RouterLink",{attrs:{to:"/next/tutorials/devops/entando-operator.html"}},[e._v("Entando Operator")])],1)]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -sLO "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://raw.githubusercontent.com/entando/entando-releases/v7.0.1/dist/ge-1-1-6/samples/entando-operator-config.yaml"')]),e._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Edit the "),a("code",[e._v("entando-operator-config.yaml")]),e._v(" to add two properties")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.requires.filesystem.group.override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx"')]),e._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Apply the "),a("code",[e._v("ConfigMap")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f entando-operator-config.yaml -n entando\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Apply the namespace-scoped custom resources")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/v7.0.1/dist/ge-1-1-6/namespace-scoped-deployment/namespace-resources.yaml\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("You can use "),a("code",[e._v("kubectl get pods -n entando --watch")]),e._v(" to see the initial pods start up. Use "),a("code",[e._v("Ctrl+C")]),e._v(" to exit.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl get pods -n entando\nNAME                                   READY   STATUS    RESTARTS   AGE\nentando-k8s-service-86f8954d56-mphpr   1/1     Running   0          5m53s\nentando-operator-5b5465788b-ghb25      1/1     Running   0          5m53s\n")])])]),a("h3",{attrs:{id:"configure-the-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-entando-application"}},[e._v("#")]),e._v(" Configure the Entando Application")]),e._v(" "),a("ol",[a("li",[e._v("Download the "),a("code",[e._v("entando-app.yaml")]),e._v(" template")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -sLO "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://raw.githubusercontent.com/entando/entando-releases/v7.0.1/dist/ge-1-1-6/samples/entando-app.yaml"')]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Edit "),a("code",[e._v("entando-app.yaml")]),e._v(". Replace "),a("code",[e._v("YOUR-HOST-NAME")]),e._v(" with "),a("code",[e._v("EXTERNAL-IP + .nip.io")]),e._v(". See "),a("RouterLink",{attrs:{to:"/next/docs/consume/custom-resources.html#entandoapp"}},[e._v("the EntandoApp custom resource overview")]),e._v(" for additional options.")],1)]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ingressHostName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" YOUR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("NAME\n")])])]),a("p",[e._v("e.g. "),a("em",[e._v("ingressHostName: 20.120.54.243.nip.io")])]),e._v(" "),a("h2",{attrs:{id:"deploy-your-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-entando-application"}},[e._v("#")]),e._v(" Deploy your Entando Application")]),e._v(" "),a("ol",[a("li",[e._v("You can now deploy your application to your AKS cluster")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -n entando -f entando-app.yaml\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("It can take around 10 minutes for the application to fully deploy. You can watch the pods warming up with the command below. Use "),a("code",[e._v("Ctrl+C")]),e._v(" to exit the command.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get pods -n entando --watch\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Once all the pods are in a running state, access the Entando App Builder at the following address")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http://YOUR-HOST-NAME/app-builder/\n")])])]),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/next/docs/getting-started/#login-to-entando"}},[e._v("Getting Started guide")]),e._v(" for helpful login instructions and next steps.")],1),e._v(" "),a("h2",{attrs:{id:"appendix-a-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-troubleshooting"}},[e._v("#")]),e._v(" Appendix A - Troubleshooting")]),e._v(" "),a("p",[e._v("If you get an error like: "),a("code",[e._v("0/5 nodes are available: 5 node(s) had volume node affinity conflict")]),e._v(" or if several deployments fail to start, then you should check your availability zones. By default, an Azure cluster will include nodes from multiple zones, but Azure may not automatically provision their storage.")]),e._v(" "),a("p",[e._v("You can confirm this error in the AKS console as well:")]),e._v(" "),a("ol",[a("li",[e._v("In your cluster, select "),a("code",[e._v("Workloads")]),e._v(" in the left nav")]),e._v(" "),a("li",[e._v("Click on the deployment for your server application. This is "),a("code",[e._v("quickstart-deployment")]),e._v(" by default.")]),e._v(" "),a("li",[e._v("Click on the deployment name inside that application.")]),e._v(" "),a("li",[e._v("Click on the tab labeled "),a("code",[e._v("Conditions")])]),e._v(" "),a("li",[e._v("If you see an error that says "),a("code",[e._v("0/5 nodes are available: 5 node(s) had volume node affinity conflict")]),e._v(", then you need to reconfigure your cluster to have nodes in one zone, or work with your Azure operations team to provision storage to match node affinity.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);