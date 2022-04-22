(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{1344:function(e,t,o){"use strict";o.r(t);var a=o(32),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installation-on-red-hat-openshift-using-the-operatorhub"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-red-hat-openshift-using-the-operatorhub"}},[e._v("#")]),e._v(" Installation on Red Hat OpenShift using the OperatorHub")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The following tutorial shows how to install an Entando application using the Red Hat-certified "),o("code",[e._v("Entando Operator")]),e._v(" and covers a few common enterprise configurations. If you're working with an OpenShift version prior to 4.6 then you may require the alternative "),o("RouterLink",{attrs:{to:"/v6.3/tutorials/devops/installation/open-shift/openshift-install.html"}},[e._v("manual instructions")]),e._v(".")],1),e._v(" "),o("p",[e._v("We have two sets of scenarios listed below:")]),e._v(" "),o("ul",[o("li",[e._v("Scenario 1.1-1.5 for cluster admins who can create projects and operators")]),e._v(" "),o("li",[e._v("Scenario 2.1 for a user with access to administer a project.")])]),e._v(" "),o("p",[e._v("Scenario 1.1 is similar to the Entando quickstart style of deployment which can be applied in many environments, including on local developer laptops. The subsequent scenarios (1.2-1.5) build on that initial setup but can be performed independently if desired. Unless otherwise noted, you have the freedom to keep or modify the default options when installing the "),o("code",[e._v("Entando Operator")]),e._v(" and other resources in the tutorials.")]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("ul",[o("li",[e._v("A 4.6 (or higher) OpenShift installation\n"),o("ul",[o("li",[e._v("For simplicity the tutorial instructions are for a local Code Ready Containers (CRC) instance but this will require significant dedicated resources, e.g. at least 4 vCPU and 10GB RAM. In some environments you may need to start CRC using "),o("code",[e._v("crc start -n 8.8.8.8")]),e._v(" in order to install operators.")])])]),e._v(" "),o("li",[e._v("(For scenarios 1.x) cluster-admin access to OpenShift for initial installation of the Entando Operator")]),e._v(" "),o("li",[e._v("(For scenarios 2.x) namepace-level access to a specific OpenShift project for installation of an Entando application using an Entando Operator installed in the cluster")]),e._v(" "),o("li",[e._v("Familiarity with the OpenShift console and operation")])]),e._v(" "),o("h2",{attrs:{id:"scenario-1-1-embedded-database"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-1-embedded-database"}},[e._v("#")]),e._v(" Scenario 1.1 - Embedded Database")]),e._v(" "),o("p",[e._v("The initial scenario is to deploy the operator and Entando application in a single namespace. We'll start with the smallest application footprint which uses an embedded database.")]),e._v(" "),o("ol",[o("li",[e._v("Locate the "),o("code",[e._v("Entando Operator")]),e._v(" in the "),o("code",[e._v("Operators → OperatorHub")]),e._v(" using the Filter feature.")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Install")]),e._v(" to view the "),o("code",[e._v("Entando Operator")]),e._v(" install options.")]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("A specific namespace on the cluster")]),e._v(" for the "),o("code",[e._v("Installation mode")]),e._v(".")]),e._v(" "),o("li",[e._v("Choose an empty namespace for "),o("code",[e._v("Installed Namespace")]),e._v(". You can create one from "),o("code",[e._v("Home → Projects")]),e._v(" first, if needed, e.g. "),o("code",[e._v("entando-one")]),e._v(".")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Install")]),e._v(" to install the operator into your target namespace.")]),e._v(" "),o("li",[e._v("The install may take a few minutes to complete after which you can click "),o("code",[e._v("View Operator")]),e._v(" to see the operator in your namespace, or you can go to "),o("code",[e._v("Operators → Installed Operators")]),e._v(" at any point and select it from there.")]),e._v(" "),o("li",[e._v("Now go to "),o("code",[e._v("Entando Composite Application")]),e._v(" and click "),o("code",[e._v("Create instance")])]),e._v(" "),o("li",[e._v("Change the "),o("code",[e._v("Dbms Override")]),e._v(" to "),o("code",[e._v("embedded")]),e._v(". This is the lightest and quickest way to test a full Entando application but you'll need to modify the YAML as well in step 10.")]),e._v(" "),o("li",[e._v("(Optional) If you're working in anything but a single project environment, you'll need to provide an "),o("code",[e._v("Ingress Host Name Override")]),e._v(" specific to your namespace, e.g. "),o("code",[e._v("entando-one.<my-base-openshift-url>.")]),e._v(" In CRC you can keep the default "),o("code",[e._v("entando.apps-crc.testing")]),e._v(" for your first project.")]),e._v(" "),o("li",[e._v("Switch to the YAML view and remove the following section since it isn't needed with an embedded database.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("    - kind: EntandoDatabaseService\n      metadata:\n        name: inline-entando-database-service\n      spec:\n        createDeployment: true\n")])])]),o("ol",{attrs:{start:"11"}},[o("li",[e._v("(Optional) Feel free to edit the YAML to customize the names of the components deployed by the EntandoCompositeApp, e.g. "),o("code",[e._v("inline-entando-database-service")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")]),e._v(". The "),o("code",[e._v("Entando Operator")]),e._v(" will now proceed to deploy the appropriate resources.")]),e._v(" "),o("li",[e._v("Go to "),o("code",[e._v("Entando Composite Application → my-entando-composite-app")]),e._v(" to check the status of the deploy or its "),o("code",[e._v("Events")]),e._v(" tab to follow its progress.")])]),e._v(" "),o("p",[e._v("See the "),o("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")]),e._v(" below to continue your work with Entando.")]),e._v(" "),o("h2",{attrs:{id:"scenario-1-2-postgresql"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-2-postgresql"}},[e._v("#")]),e._v(" Scenario 1.2 - PostgreSQL")]),e._v(" "),o("p",[e._v("For this scenario we'll prepare a more production-like configuration. Here we'll switch from an embedded on-disk database to a dedicated PostgreSQL database. For this scenario we'll start where step 6 ends in the previous scenario. If you already ran Scenario 1.1 you can either go to that project and remove the Composite App via "),o("code",[e._v("Installed Operators → Entando Operator → Entando Composite Application")]),e._v(" or prepare a new project using steps 1-5 above.")]),e._v(" "),o("p",[e._v("Now let's create a new application, this time using PostgreSQL.")]),e._v(" "),o("ol",[o("li",[e._v("Go to "),o("code",[e._v("Entando Composite Application")]),e._v(" and click "),o("code",[e._v("Create instance")])]),e._v(" "),o("li",[e._v("Keep the default "),o("code",[e._v("Dbms Override")]),e._v(" as "),o("code",[e._v("postgresql")]),e._v(". You should not remove the EntandoDatabaseService in this case.")]),e._v(" "),o("li",[e._v("(Optional) Set the "),o("code",[e._v("Ingress Host Name Override")]),e._v(" as in step 9 above.")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")]),e._v(". The "),o("code",[e._v("Entando Operator")]),e._v(" will now proceed to deploy the appropriate resources just as in Scenario 1.1 but with the addition of a PostgreSQL database deployment.")])]),e._v(" "),o("p",[e._v("See the "),o("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")]),e._v(" below to continue your work with Entando.")]),e._v(" "),o("h2",{attrs:{id:"scenario-1-3-postgresql-plus-openshift-ssl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-3-postgresql-plus-openshift-ssl"}},[e._v("#")]),e._v(" Scenario 1.3 - PostgreSQL plus OpenShift SSL")]),e._v(" "),o("p",[e._v("For this scenario we'll build on Scenario 1.2 but enable SSL using OpenShift's internal Certificate Authority. As a starting point, you can either remove the Composite App from the previous scenarios or prepare a new project per steps 1-5 in Scenario 1.1.")]),e._v(" "),o("ol",[o("li",[e._v("Using your browser, examine and save the SSL certificate for your environment. For example, in Chrome, go to any OpenShift console page, click on "),o("code",[e._v("View Site Information")]),e._v(" next to the URL (it may be labeled "),o("code",[e._v("Not secure")]),e._v(" ) then go to "),o("code",[e._v("Details -> Copy to File")]),e._v(" and save the certificate as a Base-64 encoded X.509 file, e.g. "),o("code",[e._v("openshift.cer.")])]),e._v(" "),o("li",[e._v("Go to "),o("code",[e._v("Workflows → Secrets → Create")]),e._v(" and select "),o("code",[e._v("Key/value secret")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Secret Name")]),e._v(", e.g. "),o("code",[e._v("entando-ca-cert-secret")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Key")]),e._v(", e.g. "),o("code",[e._v("openshift.cer")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Value")]),e._v(" by clicking "),o("code",[e._v("Browse...")]),e._v(" and loading the file you saved in Step 1.")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")])]),e._v(" "),o("li",[e._v("Next go to "),o("code",[e._v("Workloads → ConfigMaps")]),e._v(" and create a ConfigMap named "),o("code",[e._v("entando-operator-config")]),e._v(" This is the ConfigMap used by the Operator to configure the deployments. You'll need to supply your own project name for the namespace.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("kind: ConfigMap\napiVersion: v1\nmetadata:\n name: entando-operator-config\n namespace: entando-one\ndata:\n entando.ca.secret.name: entando-ca-cert-secret\n entando.use.auto.cert.generation: 'true'\n")])])]),o("ol",{attrs:{start:"8"}},[o("li",[e._v("Click "),o("code",[e._v("Create")])])]),e._v(" "),o("p",[e._v("Now let's create a new application, just like in Scenario 1.2 but with OpenShift SSL in place.")]),e._v(" "),o("ol",{attrs:{start:"9"}},[o("li",[e._v("Go to "),o("code",[e._v("Entando Composite Application")]),e._v(" and click "),o("code",[e._v("Create instance")])]),e._v(" "),o("li",[e._v("Keep the default "),o("code",[e._v("Dbms Override")]),e._v(" as "),o("code",[e._v("postgresql")]),e._v(".")]),e._v(" "),o("li",[e._v("(Optional) Set the "),o("code",[e._v("Ingress Host Name Override")]),e._v(" as in Scenario 1 step 9.")]),e._v(" "),o("li",[e._v("You don't need to set the "),o("code",[e._v("TLS Secret Name Override")]),e._v(" since it will be taken from the "),o("code",[e._v("entando-operator-config")]),e._v(" ConfigMap.")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")]),e._v(". The "),o("code",[e._v("Entando Operator")]),e._v(" will now proceed to deploy the appropriate resources.")])]),e._v(" "),o("p",[e._v("Once the deployment is complete you can confirm that all routes use https with OpenShift's CA. You will likely still see security warnings in the browser.")]),e._v(" "),o("p",[e._v("See the "),o("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")]),e._v(" below to continue your work with Entando.")]),e._v(" "),o("h2",{attrs:{id:"scenario-1-4-postgresql-plus-self-signed-ssl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-4-postgresql-plus-self-signed-ssl"}},[e._v("#")]),e._v(" Scenario 1.4 - PostgreSQL plus self-signed SSL")]),e._v(" "),o("p",[e._v("This scenario is similar to Scenario 1.3 but here we'll use a self-signed certificate rather than using OpenShift's Certificate Authority. As a starting point, you can either remove the Composite App from the previous scenarios or prepare a new project per steps 1-5 in Scenario 1.1.")]),e._v(" "),o("p",[e._v("We'll start by creating a self-signed certificate and then preparing the Secrets and ConfigMap to match. There are various ways to create an X.509 self-signed certificate and you can use your own preferred mechanism.")]),e._v(" "),o("ol",[o("li",[e._v("Using "),o("a",{attrs:{href:"https://www.openssl.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSSL"),o("OutboundLink")],1),e._v(" create a certificate for your application. You'll need to adjust the CN value to match your project.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('openssl req -nodes -x509 -newkey rsa:4096 -keyout tls.key -out tls.crt -days 365 -subj "/CN=entando.apps-crc.testing"\n')])])]),o("p",[e._v("You should see output similar to this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Generating a RSA private key\n.....................................................................++++\n........................................................................................................................................................................................++++\nwriting new private key to 'tls.key'\n-----\n")])])]),o("p",[e._v("Now we can create a TLS Secret using the generated files.")]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Go to "),o("code",[e._v("Workloads → Secrets → Create")]),e._v(" and select "),o("code",[e._v("From YAML")]),e._v(".")]),e._v(" "),o("li",[e._v("Enter this "),o("code",[e._v("YAML")]),e._v(", update the namespace to match your project, and click "),o("code",[e._v("Create")]),e._v(":")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("kind: Secret\napiVersion: v1\nmetadata:\n  name: entando-tls-secret\n  namespace: entando-one\ndata:\n  tls.key: ''\n  tls.crt: ''\ntype: kubernetes.io/tls\n")])])]),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Click on "),o("code",[e._v("Actions → Edit Secret")]),e._v(" and use the "),o("code",[e._v("Browse...")]),e._v(" buttons to upload the key and cert files.")])]),e._v(" "),o("p",[e._v("Now we'll also create the "),o("code",[e._v("entando-ca-cert-secret")]),e._v(" Secret, similar to what was done in Scenario 1.3 but now using the self-signed certificate.")]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("Go to "),o("code",[e._v("Workflows → Secrets → Create")]),e._v(" and select "),o("code",[e._v("Key/value secret")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Secret Name")]),e._v(", e.g. "),o("code",[e._v("entando-ca-cert-secret")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Key")]),e._v(", e.g. "),o("code",[e._v("cert1.crt")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Value")]),e._v(" by clicking "),o("code",[e._v("Browse...")]),e._v(" and loading the cert file from Step 1, e.g. "),o("code",[e._v("tls.crt")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")])]),e._v(" "),o("li",[e._v("Next go to "),o("code",[e._v("Workloads → ConfigMaps")]),e._v(" and create a ConfigMap named "),o("code",[e._v("entando-operator-config.")]),e._v(" This is the ConfigMap used by the Operator to configure the deployments. You'll need to supply your own project name for the namespace.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("kind: ConfigMap\napiVersion: v1\nmetadata:\n name: entando-operator-config\n namespace: entando-one\ndata:\n entando.ca.secret.name: entando-ca-cert-secret\n entando.tls.secret.name: entando-tls-secret\n")])])]),o("ol",{attrs:{start:"11"}},[o("li",[e._v("Click "),o("code",[e._v("Create")])])]),e._v(" "),o("p",[e._v("Now let's create a new application, just like in Scenario 1.3 but with the self-signed SSL certificate.")]),e._v(" "),o("ol",{attrs:{start:"12"}},[o("li",[e._v("Go to "),o("code",[e._v("Entando Composite Application")]),e._v(" and click "),o("code",[e._v("Create instance")])]),e._v(" "),o("li",[e._v("Keep the default "),o("code",[e._v("Dbms Override")]),e._v(" as "),o("code",[e._v("postgresql")]),e._v(".")]),e._v(" "),o("li",[e._v("(Optional) Set the "),o("code",[e._v("Ingress Host Name Override")]),e._v(" as in Scenario 1.1 step 9.")]),e._v(" "),o("li",[e._v("You don't need to set the "),o("code",[e._v("TLS Secret Name Override")]),e._v(" since it will be taken from the "),o("code",[e._v("entando-operator-config")]),e._v(" ConfigMap.")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")]),e._v(". The "),o("code",[e._v("Entando Operator")]),e._v(" will now proceed to deploy the appropriate resources.")])]),e._v(" "),o("p",[e._v("Once the deployment is complete you can confirm that all routes use https with the self-signed certificate. You will still see security warnings in the browser.")]),e._v(" "),o("p",[e._v("See the "),o("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")]),e._v(" below to continue your work with Entando.")]),e._v(" "),o("h2",{attrs:{id:"scenario-1-5-cluster-scoped-operator-with-wildcard-ssl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-5-cluster-scoped-operator-with-wildcard-ssl"}},[e._v("#")]),e._v(" Scenario 1.5 - Cluster-scoped operator with wildcard SSL")]),e._v(" "),o("p",[e._v("For this scenario we'll install the Entando Operator so the same operator instance can manage applications across namespaces.")]),e._v(" "),o("ol",[o("li",[e._v("Locate the "),o("code",[e._v("Entando Operator")]),e._v(" in the "),o("code",[e._v("Operators → OperatorHub")]),e._v(" using the Filter feature.")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Install")]),e._v(" to view the "),o("code",[e._v("Entando Operator")]),e._v(" install options.")]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("All namespaces on the cluster")]),e._v(" for the "),o("code",[e._v("Installation mode")]),e._v(".")]),e._v(" "),o("li",[e._v("Keep the default "),o("code",[e._v("openshift-operators")]),e._v(" for the "),o("code",[e._v("Installed Namespace")]),e._v(".")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Install")]),e._v(" to install the operator into the cluster.")])]),e._v(" "),o("p",[e._v("Now, similar to Scenario 1.4, we'll setup a self-signed certificate but this time as a wildcard certificate and then configure the Secrets and ConfigMap to match. There are various ways to create an X.509 self-signed certificate and you can use your own preferred mechanism.")]),e._v(" "),o("ol",{attrs:{start:"6"}},[o("li",[e._v("Using "),o("a",{attrs:{href:"https://www.openssl.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSSL"),o("OutboundLink")],1),e._v(" create a certificate for your application. You'll need to adjust the CN value to match your environment but make sure to include the leading "),o("code",[e._v("*.")]),e._v(" for the wildcard designation.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('openssl req -nodes -x509 -newkey rsa:4096 -keyout tls.key -out tls.crt -days 365 -subj "/CN=*.apps-crc.testing"\n')])])]),o("p",[e._v("You should see output similar to this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Generating a RSA private key\n.....................................................................++++\n........................................................................................................................................................................................++++\nwriting new private key to 'tls.key'\n-----\n")])])]),o("p",[e._v("Now we can go to the "),o("code",[e._v("openshift-operators")]),e._v(" project and create a TLS Secret using the generated files.")]),e._v(" "),o("ol",{attrs:{start:"7"}},[o("li",[e._v("Go to "),o("code",[e._v("Workloads → Secrets → Create")]),e._v(" and select "),o("code",[e._v("From YAML")]),e._v(".")]),e._v(" "),o("li",[e._v("Enter this "),o("code",[e._v("YAML")]),e._v(" and click "),o("code",[e._v("Create")]),e._v(":")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("kind: Secret\napiVersion: v1\nmetadata:\n  name: entando-tls-secret\n  namespace: openshift-operators\ndata:\n  tls.key: ''\n  tls.crt: ''\ntype: kubernetes.io/tls\n")])])]),o("ol",{attrs:{start:"9"}},[o("li",[e._v("Click on "),o("code",[e._v("Actions → Edit Secret")]),e._v(" and use the "),o("code",[e._v("Browse...")]),e._v(" buttons to upload the key and cert files.")])]),e._v(" "),o("p",[e._v("Now we'll also create the "),o("code",[e._v("entando-ca-cert-secret")]),e._v(" Secret using the self-signed wildcard certificate.")]),e._v(" "),o("ol",{attrs:{start:"10"}},[o("li",[e._v("Go to "),o("code",[e._v("Workflows → Secrets → Create")]),e._v(" and select "),o("code",[e._v("Key/value secret")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Secret Name")]),e._v(", e.g. "),o("code",[e._v("entando-ca-cert-secret")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Key")]),e._v(", e.g. "),o("code",[e._v("cert1.crt")])]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("Value")]),e._v(" by clicking "),o("code",[e._v("Browse...")]),e._v(" and loading the cert file from Step 1, e.g. "),o("code",[e._v("tls.crt")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")])]),e._v(" "),o("li",[e._v("Next go to "),o("code",[e._v("Workloads → ConfigMaps")]),e._v(" and create a ConfigMap named "),o("code",[e._v("entando-operator-config.")]),e._v(" This is the ConfigMap used by the Operator to configure the deployments. You'll need to supply the routing suffix for your environment. Don't include a leading "),o("code",[e._v("*.")]),e._v(" since this is just the suffix.")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("kind: ConfigMap\napiVersion: v1\nmetadata:\n name: entando-operator-config\n namespace: openshift-operators\ndata:\n entando.ca.secret.name: entando-ca-cert-secret\n entando.tls.secret.name: entando-tls-secret\n entando.default.routing.suffix: apps-crc.testing \n")])])]),o("ol",{attrs:{start:"16"}},[o("li",[e._v("Click "),o("code",[e._v("Create")])]),e._v(" "),o("li",[e._v("You can now proceed to create one or more Entando applications in their own namespaces, e.g. using the steps for Scenario 1.1 starting from Step 7 or as a different user in Scenario 2.1. You can leave out the "),o("code",[e._v("Ingress Host Name Override")]),e._v(" since the cluster-scoped operator will provide it for you based on the routing.suffix.")])]),e._v(" "),o("p",[e._v("See the "),o("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")]),e._v(" below to continue your work with Entando.")]),e._v(" "),o("h2",{attrs:{id:"scenario-2-1-developer-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scenario-2-1-developer-project"}},[e._v("#")]),e._v(" Scenario 2.1 - Developer Project")]),e._v(" "),o("p",[e._v("For this scenario we'll use the cluster-installed Entando Operator to install an Entando application by individually creating each of its elements. This is much like what is done in Scenarios 1.1-1.2 but gives you greater control of the overall setup of the application. The prerequisites are that the Operator was installed in the cluster and that you have access to your own project.")]),e._v(" "),o("p",[e._v("First we'll start by creating the database for the application.")]),e._v(" "),o("ol",[o("li",[e._v("Go to "),o("code",[e._v("Installed Operators")]),e._v(", make sure you've selected your own Project, e.g. "),o("code",[e._v("entando-two")]),e._v(", and and then go to "),o("code",[e._v("Provided APIs → Entando Database Service")]),e._v(" and click "),o("code",[e._v("Create EntandoDatabaseService.")])])]),e._v(" "),o("p",[e._v("The default settings work fine for this step. They include creating the deployment and using PostgresSQL for the DBMS. If you examine the YAML it looks something like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("apiVersion: entando.org/v1\nkind: EntandoDatabaseService\nmetadata:\n  namespace: entando-two\n  name: my-entando-database-service\nspec:\n  createDeployment: true\n  dbms: postgresql\n  databaseName: my_database\n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Click "),o("code",[e._v("Create.")]),e._v(" The operator will now create the deployment and resources needed for the database.")])]),e._v(" "),o("p",[e._v("Next let's setup the Keycloak server for identity management.")]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Similar to Step 1, go to "),o("code",[e._v("Installed Operators -> Select your project (if needed) → Provided APIs → Entando Keycloak Server")]),e._v(" and click "),o("code",[e._v("Create EntandoKeycloakServer.")])]),e._v(" "),o("li",[e._v("(Optional) Select a "),o("code",[e._v("TLS Secret")]),e._v(" to secure the service, e.g "),o("code",[e._v("entando-tls-secret")]),e._v(" per Scenario 1.5.")]),e._v(" "),o("li",[e._v("(Optional) Set the "),o("code",[e._v("Ingress Host Name")]),e._v(" for your project, e.g. "),o("code",[e._v("entando-two.<my-base-openshift-url>")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")])])]),e._v(" "),o("p",[e._v("Once the deployment is complete you can check "),o("code",[e._v("Networking → Routes")]),e._v(" to find the URL for the new Keycloak if you didn't specify the "),o("code",[e._v("Ingress Host Name")]),e._v(", e.g. "),o("code",[e._v("my-keycloak-entando-two.apps-crc.testing/auth/")]),e._v(". The generated admin credentials can be found under "),o("code",[e._v("Workloads → Secrets")]),e._v(", e.g. "),o("code",[e._v("my-keycloak-admin-secret")])]),e._v(" "),o("p",[e._v("Next we'll prepare the infrastructure service.")]),e._v(" "),o("ol",{attrs:{start:"7"}},[o("li",[e._v("Go to "),o("code",[e._v("Installed Operators -> Select your project (if needed) → Provided APIs → Entando Cluster Infrastructure")]),e._v(" and click "),o("code",[e._v("Create EntandoClusterInfrastructure.")])]),e._v(" "),o("li",[e._v("(Optional) Set the "),o("code",[e._v("Ingress Host Name")]),e._v(", e.g. "),o("code",[e._v("entando-two.<my-base-openshift-url>")])]),e._v(" "),o("li",[e._v("(Optional) If you chose to apply a "),o("code",[e._v("TLS Secret")]),e._v(" in Step 4 then you'll want to do the same here by setting the "),o("code",[e._v("TLS Secret Name")]),e._v(", e.g. "),o("code",[e._v("entando-tls-secret.")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Create")])])]),e._v(" "),o("p",[e._v("Now we'll create the application itself.")]),e._v(" "),o("ol",{attrs:{start:"11"}},[o("li",[e._v("Go to "),o("code",[e._v("Installed Operators -> Select your project (if needed) → Provided APIs → CLick on View more (if needed) -> EntandoApp")]),e._v(" and click "),o("code",[e._v("Create instance.")])]),e._v(" "),o("li",[e._v("(Optional) Set the "),o("code",[e._v("Ingress Host Name")]),e._v(", e.g. "),o("code",[e._v("entando-two.<my-base-openshift-url>")])]),e._v(" "),o("li",[e._v("(Optional) If you chose to apply a "),o("code",[e._v("TLS Secret")]),e._v(" in Step 4 then you'll want to do the same here by setting the "),o("code",[e._v("TLS Secret Name")]),e._v(", e.g. "),o("code",[e._v("entando-tls-secret.")])])]),e._v(" "),o("p",[e._v("See the "),o("a",{attrs:{href:"#next-steps"}},[e._v("Next Steps")]),e._v(" below to continue your work with Entando.")]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),o("p",[e._v("Once you've completed any of the scenarios above, you have several options.")]),e._v(" "),o("ul",[o("li",[e._v("Check out "),o("code",[e._v("Networking → Routes")]),e._v(" to see the URLs for the running services. Common starting points include the "),o("code",[e._v("Entando App Builder")]),e._v(" (e.g. "),o("code",[e._v("http://entando.apps-crc.testing/app-builder/")]),e._v(") or "),o("code",[e._v("Entando application")]),e._v(" itself (e.g. "),o("code",[e._v("http://entando.apps-crc.testing/entando-de-app/")]),e._v(").")]),e._v(" "),o("li",[e._v("This suggested "),o("RouterLink",{attrs:{to:"/v6.3/docs/getting-started/#next-steps"}},[e._v("list of next steps")]),e._v(" could also be useful.")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);