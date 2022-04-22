(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{1339:function(e,t,a){"use strict";a.r(t);var n=a(32),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"entando-6-azure-kubernetes-installation-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-6-azure-kubernetes-installation-instructions"}},[e._v("#")]),e._v(" Entando 6 Azure Kubernetes Installation Instructions")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Azure account\n"),a("ul",[a("li",[a("ul",[a("li",[e._v("Note: If you're using an Azure free account, you may need to upgrade your account first to enable pay-as-you-go billing. The Azure free account default quota includes just 1-4 vCPU which is not sufficient for this tutorial. There may be a delay before the quotas are updated when you upgrade your account.")])])])])]),e._v(" "),a("li",[e._v("If you're not using Azure Cloud Shell:\n"),a("ul",[a("li",[e._v("Azure command line tool")]),e._v(" "),a("li",[e._v("Helm2 client")])])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The steps below walk you through installing the Entando platform in an Azure Kubernetes Services (AKS) cluster. Generally the steps are:")]),e._v(" "),a("ul",[a("li",[e._v("Create an AKS cluster with 5 nodes (to allow expansion for microservices)")]),e._v(" "),a("li",[e._v("Install nginx as an ingress controller in the cluster")]),e._v(" "),a("li",[e._v("Install Entando")])]),e._v(" "),a("p",[e._v("If you're already comfortable setting up an AKS cluster and installing nginx then you may be able to skip to "),a("a",{attrs:{href:"#install-the-entando-custom-resource-definitions-crds"}},[e._v("setting up Entando")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"cluster-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[e._v("#")]),e._v(" Cluster Setup")]),e._v(" "),a("h3",{attrs:{id:"setup-and-connect-to-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-connect-to-the-cluster"}},[e._v("#")]),e._v(" Setup and Connect to the Cluster")]),e._v(" "),a("ol",[a("li",[e._v("Login to Azure ("),a("a",{attrs:{href:"https://portal.azure.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://portal.azure.com/"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("Select the "),a("code",[e._v("Kubernetes services")]),e._v(" icon\n"),a("ul",[a("li",[e._v("If not listed click "),a("code",[e._v("More services")]),e._v(" on the right and search for Kubernetes")])])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add")]),e._v(" in upper left corner")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Kubernetes cluster")]),e._v(". You'll start with the "),a("code",[e._v("Basics")]),e._v(" tab.")]),e._v(" "),a("li",[e._v("Select a "),a("code",[e._v("Resource group")]),e._v(" or create one with the "),a("code",[e._v("Create new")]),e._v(" link if it you don’t have one, e.g. "),a("code",[e._v("resource-group-1")])]),e._v(" "),a("li",[e._v("Enter a name of your choice in Kubernetes cluster name, e.g. "),a("code",[e._v("cluster-1")])]),e._v(" "),a("li",[e._v("Pick your "),a("code",[e._v("Region")]),e._v(" if it wasn't automatically selected for you.")]),e._v(" "),a("li",[e._v("In the "),a("code",[e._v("Availability zones")]),e._v(" dropdown pick "),a("strong",[e._v("one and only one")]),e._v(" availability zone\n"),a("ul",[a("li",[e._v("Generally, you could pick more than one but it will result in a failure in a quickstart environment. If you chose more than one availability zone you will have to provision storage, manage node affinity, and ensure correct network configuration to ensure your application deploys. We recommend only doing this for production clusters.")])])]),e._v(" "),a("li",[e._v("Select  "),a("code",[e._v("1.18.10")]),e._v(" for the "),a("code",[e._v("Kubernetes version")])]),e._v(" "),a("li",[e._v("Keep the default "),a("code",[e._v("Node size")]),e._v(", e.g. "),a("code",[e._v("Standard DS2 v2")])]),e._v(" "),a("li",[e._v("Change the "),a("code",[e._v("Node count")]),e._v(" to "),a("code",[e._v("5")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Node Pools")]),e._v(" to move to the next tab.")]),e._v(" "),a("li",[e._v("Keep the default values here\n"),a("ul",[a("li",[e._v("If you're familiar with AKS your can change as desired based on your objectives/knowledge")])])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Authentication")])]),e._v(" "),a("li",[e._v("For "),a("code",[e._v("Authentication method")]),e._v(" select "),a("code",[e._v("System-assigned managed identity")]),e._v(" "),a("ul",[a("li",[e._v("You can pick a "),a("code",[e._v("Service principal")]),e._v(" instead and Azure will automatically generate one for you. If you use an existing principal it is up to you to configure it and ensure you have the access you need.")])])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Networking")])]),e._v(" "),a("li",[e._v("Enter a value for DNS name prefix, e.g. "),a("code",[e._v("cluster-1-dns")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Review + Create")]),e._v(" "),a("ul",[a("li",[e._v("Note: There are many other configuration options available for an AKS cluster. Generally, you can change these based on your experience and comfort level with the AKS platform. Entando uses base Kubernetes APIs so as long as you follow the Entando configuration instructions below you can tune your cluster infrastructure to meet your goals")])])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Create")])]),e._v(" "),a("li",[e._v("Wait for your cluster to initialize.\n"),a("ul",[a("li",[e._v("This may take a few minutes")])])])]),e._v(" "),a("h3",{attrs:{id:"deploy-nginx-ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-nginx-ingress-controller"}},[e._v("#")]),e._v(" Deploy NGINX Ingress Controller")]),e._v(" "),a("ol",[a("li",[e._v("Navigate to your cluster by clicking "),a("code",[e._v("Go to Resource")]),e._v(" from the results page or by the top navigation "),a("code",[e._v("Home - Kubernetes service")]),e._v(" and clicking on your cluster.")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Connect")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Bash")])]),e._v(" "),a("li",[e._v("Run the first two commands (e.g. "),a("code",[e._v("az account set...")]),e._v(" and "),a("code",[e._v("az aks get-credentials...")]),e._v(" to connect to your cluster. This should only be needed the first time you run the Azure Cloud Shell.\n"),a("ul",[a("li",[e._v("The Cloud Shell times out after 20 minutes of inactivity.")]),e._v(" "),a("li",[e._v("The following instructions assume you'll use the Azure Cloud Shell but you can also run the commands in a local environment if you have "),a("code",[e._v("kubectl")])])])]),e._v(" "),a("li",[e._v("Deploy nginx with the commands below. See "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/ingress-basic",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx instructions"),a("OutboundLink")],1),e._v(" for more details.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create namespace ingress-basic\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo add stable https://kubernetes-charts.storage.googleapis.com/\nhelm repo update\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('helm install nginx-ingress ingress-nginx/ingress-nginx \\\n    --namespace ingress-basic \\\n    --set controller.replicaCount=2 \\\n    --set controller.nodeSelector."beta\\.kubernetes\\.io/os"=linux \\\n  --set defaultBackend.nodeSelector."beta\\.kubernetes\\.io/os"=linux\n')])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Get the external IP address for your ingress controller. Record the value of EXTERNAL-IP for "),a("code",[e._v("nginx-ingress-controller")]),e._v(" from the command below.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get service -n ingress-basic\n")])])]),a("h3",{attrs:{id:"verify-the-nginx-ingress-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-nginx-ingress-install"}},[e._v("#")]),e._v(" Verify the NGINX Ingress Install")]),e._v(" "),a("p",[e._v("We recommend setting up a test application so you can easily verify the ingress is working in your cluster. See "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/devops/installation/google-cloud-platform/#verify-the-nginx-ingress-install"}},[e._v("this page")]),e._v(" for those steps. You can use either Azure Cloud Shell or your local "),a("code",[e._v("kubectl")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"install-the-entando-custom-resource-definitions-crds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resource-definitions-crds"}},[e._v("#")]),e._v(" Install the Entando Custom Resource Definitions (CRDs)")]),e._v(" "),a("p",[e._v("Once per cluster you need to deploy the "),a("code",[e._v("Entando Custom Resources")]),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Download the Custom Resource Definitions (CRDs) and unpack them")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -L -C - https://raw.githubusercontent.com/entando/entando-releases/v6.3.0/dist/qs/custom-resources.tar.gz | tar -xz\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Install the Entando CRDs:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f dist/crd\n")])])]),a("h2",{attrs:{id:"deploy-your-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-entando-application"}},[e._v("#")]),e._v(" Deploy Your Entando Application")]),e._v(" "),a("p",[e._v("You can now deploy your application to Azure Kubernetes Service.")]),e._v(" "),a("ol",[a("li",[e._v("Download and unpack the entando-helm-quickstart:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -sfL https://github.com/entando-k8s/entando-helm-quickstart/archive/v6.3.0.tar.gz | tar xvz\n")])])]),a("ul",[a("li",[e._v("See the included README file for more information on subsequent steps.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Change into the new directory")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd entando-helm-quickstart-6.3.0\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Edit the "),a("code",[e._v("values.yaml")])]),e._v(" "),a("ul",[a("li",[e._v("Set "),a("code",[e._v("supportOpenshift: false")])]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("ENTANDO_DEFAULT_ROUTING_SUFFIX")]),e._v(" to the EXTERNAL-IP of your ingress controller and add nip.io to the end\n"),a("ul",[a("li",[e._v("For example: "),a("code",[e._v("ENTANDO_DEFAULT_ROUTING_SUFFIX: 52.188.177.248.nip.io")])])])]),e._v(" "),a("li",[e._v("Configure nginx as the ingress controller and enable file system groups for persistent volume access:\n"),a("ul",[a("li",[a("code",[e._v('ENTANDO_INGRESS_CLASS: "nginx"')])]),e._v(" "),a("li",[a("code",[e._v('ENTANDO_REQUIRES_FILESYSTEM_GROUP_OVERRIDE: "true"')])])])]),e._v(" "),a("li",[e._v("See "),a("a",{attrs:{href:"#appendix-a-example-values-yaml-file-for-helm-quickstart"}},[e._v("Appendix A")]),e._v(" for an example values.yaml")])])]),e._v(" "),a("li",[a("p",[e._v("Create the Entando namespace:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create namespace entando\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Run helm to generate the template file:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm template my-aks-app --namespace=entando ./ > my-aks-app.yaml\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Deploy Entando via")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f my-aks-app.yaml\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Watch Entando startup. The application will be available when the quickstart-server-deployment pod shows 3/3 in the READY column and RUNNING in the STATUS column.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get pods -n entando --watch\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Check for the Entando ingresses using")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl describe ingress -n entando\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Access your app on the url for the ingress of the app builder, e.g. "),a("code",[e._v("http://quickstart-entando.EXTERNAL-IP.nip.io/entando-de-app")])])]),e._v(" "),a("h2",{attrs:{id:"appendix-a-example-values-yaml-file-for-helm-quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-example-values-yaml-file-for-helm-quickstart"}},[e._v("#")]),e._v(" Appendix A - Example values.yaml file for Helm Quickstart")]),e._v(" "),a("p",[e._v("In the example below the application will deploy with embedded databases and will use "),a("code",[e._v("nginx")]),e._v("\nas the ingress controller. Replace "),a("code",[e._v("<YOUR-IP>")]),e._v(" with the EXTERNAL-IP address of your nginx controller")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('app:\n name: quickstart\n dbms: none\noperator:\n supportOpenshift: false\n env:\n   ENTANDO_DOCKER_IMAGE_VERSION_FALLBACK: 6.0.0\n   #ENTANDO_DOCKER_REGISTRY_OVERRIDE: docker.io # Remove comment if you want to always use a specific docker registry\n   #ENTANDO_DOCKER_IMAGE_ORG_OVERRIDE: entando # Remove the comment if you want to always use a specific docker organization\n   ENTANDO_DEFAULT_ROUTING_SUFFIX: <YOUR-IP>.nip.io\n   ENTANDO_POD_READINESS_TIMEOUT_SECONDS: "1000"\n   ENTANDO_POD_COMPLETION_TIMEOUT_SECONDS: "1000"\n   ENTANDO_DISABLE_KEYCLOAK_SSL_REQUIREMENT: "true"\n   ENTANDO_K8S_OPERATOR_IMPOSE_DEFAULT_LIMITS: "false"\n   ENTANDO_INGRESS_CLASS: "nginx"\n   ENTANDO_REQUIRES_FILESYSTEM_GROUP_OVERRIDE: "true"\n tls:\n   caCrt:\n   tlsCrt:\n   tlsKey:\ndeployPDA: false\n')])])]),a("h2",{attrs:{id:"appendix-b-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-b-troubleshooting"}},[e._v("#")]),e._v(" Appendix B - Troubleshooting")]),e._v(" "),a("p",[e._v("If you get an error like: "),a("code",[e._v("0/5 nodes are available: 5 node(s) had volume node affinity conflict.")]),e._v(" or if your deployment hangs in a situation like this from "),a("code",[e._v("kubectl get pods -n entando")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME                                                 READY   STATUS      RESTARTS   AGE\nmy-aks-app-operator-644697776f-sxtq2                 1/1     Running     0          13m\nquickstart-composite-app-deployer-2guz0n42pc         1/1     Running     0          13m\nquickstart-deployer-jj4njqk4bg                       1/1     Running     0          10m\nquickstart-eci-deployer-t0xktqsonk                   0/1     Completed   0          11m\nquickstart-eci-k8s-svc-deployment-78f64c8d89-7c578   1/1     Running     0          11m\nquickstart-kc-deployer-16gzv3clsj                    0/1     Completed   0          13m\nquickstart-kc-server-deployment-7c9bc65744-g52nx     1/1     Running     0          13m\nquickstart-server-deployment-55fcfc6b68-szvkl        0/3     Pending     0          10m\n")])])]),a("p",[e._v("Double check your availability zones. By default an Azure cluster will include nodes from multiple zones but it will not provision storage\nfor all of those nodes so you can't deploy your application.")]),e._v(" "),a("p",[e._v("You can confirm this error in the AKS console as well:")]),e._v(" "),a("ol",[a("li",[e._v("In your cluster select "),a("code",[e._v("Workloads")]),e._v(" in the left nav")]),e._v(" "),a("li",[e._v("Click on the deployment for your server application. This is "),a("code",[e._v("quickstart-server-deployment")]),e._v(" by default")]),e._v(" "),a("li",[e._v("Click on the deployment name inside that application. There will be one")]),e._v(" "),a("li",[e._v("Click on the tab labeled "),a("code",[e._v("Conditions")])]),e._v(" "),a("li",[e._v("If you see an error that says "),a("code",[e._v("0/5 nodes are available: 5 node(s) had volume node affinity conflict.")]),e._v(" Then you need to reconfigure\nyour cluster to have nodes in one zone or work with your Azure operations team to provision storage to match node affinity.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);