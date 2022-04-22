(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1272:function(e,t,a){"use strict";a.r(t);var s=a(32),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-on-amazon-elastic-kubernetes-service-eks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-amazon-elastic-kubernetes-service-eks"}},[e._v("#")]),e._v(" Installation on Amazon Elastic Kubernetes Service (EKS)")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS CLI"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("AWS account")]),e._v(" "),a("li",[e._v("kubectl")]),e._v(" "),a("li",[e._v("helm3 client")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The steps below walk you though installing the Entando platform in an EKS cluster. Generally the steps are:")]),e._v(" "),a("ul",[a("li",[e._v("Configure an IAM role to allow kubernetes to manage the cluster")]),e._v(" "),a("li",[e._v("Create an EKS cluster with 5 nodes (to allow expansion for microservices)")]),e._v(" "),a("li",[e._v("Install NGINX as an ingress controller in the cluster")]),e._v(" "),a("li",[e._v("Install Entando")])]),e._v(" "),a("p",[e._v("If you're already comfortable setting up an EKS cluster and installing NGINX then you may be able to skip to "),a("a",{attrs:{href:"#install-the-entando-custom-resource-definitions"}},[e._v("setting up Entando")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"cluster-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[e._v("#")]),e._v(" Cluster Setup")]),e._v(" "),a("p",[e._v("These steps will use the AWS console to create the cluster. If you’re already familiar with creating an EKS cluster and assigning nodes to it via the AWS cli then you can use the cli process for cluster creation as well.")]),e._v(" "),a("h3",{attrs:{id:"setup-and-connect-to-the-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-connect-to-the-cluster"}},[e._v("#")]),e._v(" Setup and Connect to the Cluster")]),e._v(" "),a("ol",[a("li",[e._v("Login to AWS as a non-super admin user\n"),a("ul",[a("li",[e._v("If you don’t have a user besides the super admin it is recommended that you create one. Clusters created using the super admin for your account will have some restrictions that may complicate your installation.")]),e._v(" "),a("li",[e._v("Your user will need access to EKS and at least the ability to create a cluster. You may need additional policies for Route53 and other services depending on your exact configuration.")])])]),e._v(" "),a("li",[e._v("Create an IAM role for the cluster so that AWS can provision assets. See "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html"),a("OutboundLink")],1),e._v(" for more details.\n"),a("ul",[a("li",[e._v("Go to "),a("code",[e._v("IAM → Roles → Create Role")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("AWS Service")]),e._v(" for the type of trusted entity")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("EKS")]),e._v(" from the main list")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("EKS - Cluster")]),e._v(" under "),a("code",[e._v("Select your use case")])]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Permissions")])]),e._v(" "),a("li",[e._v("A Policy of "),a("code",[e._v("AmazonEKSClusterPolicy")]),e._v(" should already be present")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Tags")])]),e._v(" "),a("li",[e._v("(Optional) Add tags if you want")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next: Review")])]),e._v(" "),a("li",[e._v("Name your role (you’ll need this later), e.g. "),a("code",[e._v("my-eks-role")])])])]),e._v(" "),a("li",[e._v("Refine the role to enable Node Groups management and to add ELB access so that the cluster can deploy a load balancer for NGINX.\n"),a("ul",[a("li",[e._v("Go to "),a("code",[e._v("IAM → Roles → my-eks-role")])]),e._v(" "),a("li",[e._v("Under Permissions click "),a("code",[e._v("Attach policies")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("AmazonEKSWorkerNodePolicy")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("AmazonEKS_CNI_Policy")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("AmazonEC2ContainerRegistryReadOnly")])]),e._v(" "),a("li",[e._v("Add a policy of "),a("code",[e._v("ElasticLoadBalancingFullAccess")])]),e._v(" "),a("li",[e._v("Under Trust Relationships click "),a("code",[e._v("Edit trust relationship")]),e._v(". Add "),a("code",[e._v("ec2.amazonaws.com")]),e._v(" so the cluster can manage the EC2 resources.")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    {\n      "Effect": "Allow",\n      "Principal": {\n        "Service": "ec2.amazonaws.com"\n      },\n      "Action": "sts:AssumeRole"\n    }\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Go to "),a("code",[e._v("Services")]),e._v(" and select "),a("code",[e._v("Elastic Kubernetes Service")])]),e._v(" "),a("li",[e._v("Create an EKS Cluster\n"),a("ul",[a("li",[e._v("Add a cluster name (e.g. "),a("code",[e._v("cluster-1")]),e._v(") and click "),a("code",[e._v("Create EKS cluster")])]),e._v(" "),a("li",[e._v("Select an "),a("a",{attrs:{href:"https://www.entando.com/page/en/compatibility-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entando-compatible Kubernetes version"),a("OutboundLink")],1),e._v(", e.g. "),a("code",[e._v("1.20")])]),e._v(" "),a("li",[e._v("For "),a("code",[e._v("Cluster Service Role")]),e._v(", select the role you created above, e.g. "),a("code",[e._v("my-eks-role")]),e._v(". If you choose a different role it must have ELB permissions so the cluster can create a load balancer in "),a("code",[e._v("Networking")]),e._v(".")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Use the defaults for "),a("code",[e._v("Networking")]),e._v(" and click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Use the defaults for "),a("code",[e._v("Configure Logging")]),e._v(" and click "),a("code",[e._v("Next")]),e._v(".")]),e._v(" "),a("li",[e._v("Review your settings and then click "),a("code",[e._v("Create")]),e._v(". Cluster provisioning usually takes between 10 and 15 minutes.")]),e._v(" "),a("li",[e._v("See "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"),a("OutboundLink")],1),e._v(" for more information on cluster creation.")])])]),e._v(" "),a("li",[e._v("Add a Node Group to the cluster\n"),a("ul",[a("li",[e._v("Go to "),a("code",[e._v("Services → Elastic Kubernetes Service → Clusters")]),e._v(" and click on your cluster name.")]),e._v(" "),a("li",[e._v("Go to "),a("code",[e._v("Configuration")]),e._v(" and the "),a("code",[e._v("Compute")]),e._v(" tab")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add Node Group")])]),e._v(" "),a("li",[a("code",[e._v("Name")]),e._v(": give your group a name, e.g. "),a("code",[e._v("node-1")])]),e._v(" "),a("li",[a("code",[e._v("Node IAM Role")]),e._v(": Select the cluster role you created above. If the role doesn't appear, verify that you added the extra policies to the role.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Review the Compute and Scaling configuration. Typically the AWS defaults should work.")]),e._v(" "),a("li",[e._v("AMI type: "),a("code",[e._v("Amazon Linux 2")])]),e._v(" "),a("li",[e._v("Instance type: "),a("code",[e._v("t3.medium")])]),e._v(" "),a("li",[e._v("Review the Node Group scaling configuration")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("Maximum size")]),e._v(" to 5. This will be over-resourced for a "),a("code",[e._v("Getting Started")]),e._v(" experience but will leave capacity for adding microservices to your cluster without modifying the Nodegroup.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Review the Node Group network configuration.")]),e._v(" "),a("li",[a("code",[e._v("Subnets")]),e._v(" - VPC subnets should already be setup and selected.")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Configure SSH access to nodes")]),e._v(".  Follow the instructions to create a new SSH key pair if you don't already have one.")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("All")]),e._v(" to allow all source IPs to access the nodes, or to set your own restrictions via Selected Security Groups.")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Next")])]),e._v(" "),a("li",[e._v("Review your settings and then click "),a("code",[e._v("Create")]),e._v(". It may take a few minutes for the node to be created.")])])]),e._v(" "),a("li",[e._v("Connect "),a("code",[e._v("kubectl")]),e._v(" to the cluster\n"),a("ul",[a("li",[a("em",[e._v("Note:")]),e._v(" If this is a brand new setup you will need to login using the user you used to create your cluster in the console in the steps above. Make sure the users match.\n"),a("ul",[a("li",[a("code",[e._v("aws-configure")]),e._v(" (and then provide the Access key, etc.)")])])]),e._v(" "),a("li",[e._v("Setup your kube context via "),a("code",[e._v("aws eks --region region-code update-kubeconfig --name cluster_name")]),e._v(", e.g. "),a("code",[e._v("aws eks --region us-east-2 update-kubeconfig --name cluster-1")])]),e._v(" "),a("li",[e._v("More details and troubleshooting "),a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Your current context should now be configured for your AWS cluster. Run the command below to check:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl config current-context\n")])])]),e._v("Your output should look something like this:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("arn:aws:eks:us-east-2:483173223614:cluster/cluster-1\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"install-the-nginx-ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-nginx-ingress-controller"}},[e._v("#")]),e._v(" Install the NGINX Ingress Controller")]),e._v(" "),a("ol",[a("li",[e._v("Add the NGINX controller for ingress. This depends on your role having permissions for ELB.\n"),a("ul",[a("li",[e._v("For basic NGINX ingress install run this command")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.2/deploy/static/provider/cloud/deploy.yaml\n")])])]),a("ul",[a("li",[e._v("See "),a("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.github.io/ingress-nginx/deploy/#aws"),a("OutboundLink")],1),e._v(" as well as "),a("a",{attrs:{href:"https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(" for more detailed install steps.")])])]),e._v(" "),a("li",[e._v("Get the ELB external URL for your NGINX install\n"),a("ul",[a("li",[e._v("Run: "),a("code",[e._v("kubectl get services -n ingress-nginx")])]),e._v(" "),a("li",[e._v("Get the value of the external address (EXTERNAL-IP) for the ingress-nginx-controller:")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                        \ningress-nginx-controller             LoadBalancer   10.100.102.83    ad234bd11a1ff4dadb44639a6bbf707e-0e0a483d966405ee.elb.us-east-2.amazonaws.com\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("NGINX is working correctly if a "),a("code",[e._v("404 Not Found")]),e._v(" error page is generated when accessing the EXTERNAL-IP from your browser. Alternatively, you can "),a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/devops/manage-nginx.html#verify-the-nginx-ingress-install"}},[e._v("set up a simple test application")]),e._v(" using your local "),a("code",[e._v("kubectl")]),e._v(". You can also "),a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/devops/manage-nginx.html#customize-the-nginx-configuration"}},[e._v("customize the NGINX ingress")]),e._v(" to optimize the configuration for Entando.")],1)]),e._v(" "),a("h3",{attrs:{id:"install-the-entando-custom-resource-definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resource-definitions"}},[e._v("#")]),e._v(" Install the Entando Custom Resource Definitions")]),e._v(" "),a("p",[e._v("Once per cluster you need to deploy the "),a("code",[e._v("Entando Custom Resources")]),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Download the Custom Resource Definitions and deploy the cluster scoped resources")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/cluster-resources.yaml\n")])])]),a("p",[e._v("Next you can create a namespace for the Entando Application.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Create the namespace")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl create namespace entando\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Install the namespace scoped resources")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/orig/namespace-resources.yaml\n")])])]),a("p",[e._v("If you run "),a("code",[e._v("kubectl -n entando get pods")]),e._v(", you'll see the Entando operator is now running.")]),e._v(" "),a("h2",{attrs:{id:"deploy-your-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-entando-application"}},[e._v("#")]),e._v(" Deploy Your Entando Application")]),e._v(" "),a("p",[e._v("You can now deploy your application to Amazon EKS.")]),e._v(" "),a("ol",[a("li",[e._v("Download and unpack the "),a("code",[e._v("entando-helm-quickstart")]),e._v(" release:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -sfL https://github.com/entando-k8s/entando-helm-quickstart/archive/v6.3.2.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" xvz\n")])])]),a("ul",[a("li",[e._v("See the included README file for more information on the following steps.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Go to the downloaded directory")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" entando-helm-quickstart-6.3.2\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Edit "),a("code",[e._v("sample-configmaps/entando-operator-config.yaml")]),e._v(" and add the following settings in the data section")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.requires.filesystem.group.override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entando.ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx"')]),e._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Now create the ConfigMap for the operator")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -f sample-configmaps/entando-operator-config.yaml -n entando\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Next, in "),a("code",[e._v("values.yaml")]),e._v(" in the root directory set the following value:\n"),a("ul",[a("li",[e._v("Set "),a("code",[e._v("singleHostName")]),e._v(" to the value of the "),a("code",[e._v("EXTERNAL-IP")]),e._v(" of your "),a("code",[e._v("ingress-nginx-controller")]),e._v(":\n"),a("ul",[a("li",[e._v("For example: "),a("code",[e._v("singleHostName: ad234bd11a1ff4dadb44639a6bbf707e-0e0a483d966405ee.elb.us-east-2.amazonaws.com")])])])])])]),e._v(" "),a("li",[e._v("Run helm to generate the template file:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("helm template my-eks-app -n entando ./ "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" my-eks-app.yaml\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Deploy Entando via this command")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl apply -n entando -f my-eks-app.yaml \n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Watch Entando startup "),a("code",[e._v("kubectl get pods -n entando --watch")]),e._v(". It can take around 10 minutes before the application is fully deployed and ready.")]),e._v(" "),a("li",[e._v("Check for the Entando ingresses using "),a("code",[e._v("kubectl describe ingress -n entando")])]),e._v(" "),a("li",[e._v("Access your app using the URL for the ingress of the App Builder. This will be the URL of your load balancer, followed by "),a("code",[e._v("/app-builder/")]),e._v(" or "),a("code",[e._v("/entando-de-app/")]),e._v(" for the deployed application, e.g. "),a("code",[e._v("http://ad234bd11a1ff4dadb44639a6bbf707e-0e0a483d966405ee.elb.us-east-2.amazonaws.com/app-builder/")])])]),e._v(" "),a("p",[e._v("See the "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/getting-started/#log-in-to-entando"}},[e._v("Getting Started guide")]),e._v(" for helpful login instructions and next steps.")],1),e._v(" "),a("h2",{attrs:{id:"appendix-a-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-troubleshooting"}},[e._v("#")]),e._v(" Appendix A - Troubleshooting")]),e._v(" "),a("p",[e._v("IAM and Roles")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/56863539/getting-error-an-error-occurred-accessdenied-when-calling-the-assumerole-oper",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stackoverflow.com/questions/56863539/getting-error-an-error-occurred-accessdenied-when-calling-the-assumerole-oper"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("NGINX")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.nginx.com/nginx/deployment-guides/amazon-web-services/ingress-controller-elastic-kubernetes-services/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Issue with permissions for NGINX ingress:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" Warning  SyncLoadBalancerFailed   38m                 service-controller  (combined from similar events): Error syncing load balancer: failed to ensure load balancer: error creating\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);