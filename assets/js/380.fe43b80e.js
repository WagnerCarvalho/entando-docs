(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1253:function(e,t,a){"use strict";a.r(t);var s=a(32),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"export-and-publish-a-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-and-publish-a-bundle"}},[e._v("#")]),e._v(" Export and Publish a Bundle")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Use the Entando bundler command to export a bundle of Entando components from an existing Entando application. An Entando bundle can be used to do the initial install of Entando components into an Entando application, migrate Entando components from one environment to another (e.g. Dev to QA), to provide a template for building a new Entando application, or as the skeleton of an Entando solution. The output of this command is the same bundle directory structure created by an Entando project including a bundle descriptor file.")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Use the "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/reference/entando-cli.html#check-environment"}},[e._v("Entando CLI")]),e._v(" to verify you have the prerequisites in place for this tutorial (e.g. git, entando-bundler).")],1)]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent check-env develop \n")])])]),a("ul",[a("li",[e._v("You'll also need a running Entando application.")]),e._v(" "),a("li",[e._v("You'll need admin access to Keycloak or admin access to Kubernetes to set it up.")])]),e._v(" "),a("p",[e._v("The tutorial assumes you're using an Entando quickstart application. You may need to adjust the specific URLs, credentials, namespaces, etc. for a custom application.")]),e._v(" "),a("h2",{attrs:{id:"export-an-entando-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-an-entando-bundle"}},[e._v("#")]),e._v(" Export an Entando Bundle")]),e._v(" "),a("h3",{attrs:{id:"setup-the-keycloak-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-keycloak-client"}},[e._v("#")]),e._v(" Setup the Keycloak client")]),e._v(" "),a("p",[e._v("You'll need to setup a Keycloak client with the appropriate permissions for the bundler to access all of the necessary Entando APIs.")]),e._v(" "),a("ol",[a("li",[e._v("Find the secret for the Keycloak admin account. If you already have the admin credentials, then you can skip to step 3.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get secrets -n entando \n")])])]),a("p",[e._v("In a quickstart application, the secret is named "),a("code",[e._v("quickstart-kc-admin-secret")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Determine the admin password using the secret name.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl get secret quickstart-kc-admin-secret -n entando -o go-template"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{println}}Username: {{.data.username | base64decode}}{{println}}Password: {{.data.password | base64decode}}{{println}}{{println}}"')]),e._v("\n")])])]),a("p",[e._v("Example output:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("Username: entando_keycloak_admin\nPassword: 1pTZev82Ee\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Login to Keycloak using the admin credentials. The URL will be something like  "),a("code",[e._v("http://<YOUR-DOMAIN-OR-IP>/auth")]),e._v(". You can use this command to verify the URL.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("kubectl describe ingress/quickstart-kc-ingress\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Go to "),a("code",[e._v("Clients")]),e._v(" → "),a("code",[e._v("Create")])]),e._v(" "),a("li",[e._v("Enter a "),a("code",[e._v("Client ID")]),e._v(" of your choice, e.g. "),a("code",[e._v("entando-bundler")]),e._v(", and click "),a("code",[e._v("Save")]),e._v(".")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("Settings")]),e._v(" tab should be shown. Edit the following values:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Access Type:")]),e._v(" confidential")]),e._v(" "),a("li",[a("code",[e._v("Service Accounts Enabled:")]),e._v(" On")]),e._v(" "),a("li",[a("code",[e._v("Valid Redirect URLs:")]),e._v(" *")]),e._v(" "),a("li",[a("code",[e._v("Web Origins:")]),e._v(" *")])]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Click "),a("code",[e._v("Save")])]),e._v(" "),a("li",[e._v("Go to the "),a("code",[e._v("Service Account Roles")]),e._v(" tab")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Client Roles")]),e._v(" → "),a("code",[e._v("quickstart-server")])]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Available Roles")]),e._v(" → "),a("code",[e._v("superuser")]),e._v(".")]),e._v(" "),a("li",[e._v("Click "),a("code",[e._v("Add Selected")]),e._v(" to add "),a("code",[e._v("superuser")]),e._v(" to the "),a("code",[e._v("Assigned Roles")]),e._v(". This change will be saved automatically.")]),e._v(" "),a("li",[e._v("Go to the "),a("code",[e._v("Credentials")]),e._v(" tab and copy the "),a("code",[e._v("Secret")]),e._v(" shown there. You'll need this in the next section.")])]),e._v(" "),a("h3",{attrs:{id:"create-env-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-env-json"}},[e._v("#")]),e._v(" Create env.json")]),e._v(" "),a("ol",[a("li",[e._v("Create a directory where you'll run the bundler and change to that directory.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" testBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" testBundle\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Create an "),a("code",[e._v("env.json")]),e._v(" file with the environment URLs and client credentials. The "),a("code",[e._v("clientId")]),e._v(" and "),a("code",[e._v("clientSecret")]),e._v(" are from steps 5 and 12 above.")])]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"coreBaseApi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://<YOUR-DOMAIN-OR-IP>/entando-de-app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"k8ssvcApi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://<YOUR-DOMAIN-OR-IP>/k8s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"clientId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<YOUR-CLIENT-ID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"clientSecret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<YOUR-CLIENT-SECRET>"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"run-the-bundler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-bundler"}},[e._v("#")]),e._v(" Run the Bundler")]),e._v(" "),a("ol",[a("li",[e._v("Create a child directory to hold the bundler output. Using the name "),a("code",[e._v("bundle")]),e._v(" allows you to easily use the "),a("code",[e._v("ent prj")]),e._v(" command with this bundle.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" bundle\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Run the bundler command with your preferred settings.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent bundler from-env --location bundle --code my-test-bundle --description “My Test Bundle”\n")])])]),a("p",[e._v("The bundler will inspect the application using the Entando APIs, collect information about the individual components, construct the appropriate descriptor files, and finally assemble the top-level descriptor file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ls bundle\nassets      contentModels  contents         fragments  labels     pageModels  resources\ncategories  contentTypes   descriptor.yaml  groups     languages  pages       widgets\n")])])]),a("p",[e._v("At this point you have a full Entando project structure. You can inspect the output to edit the exported components or you could "),a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/create/pb/publish-simple-bundle.html#publish-the-bundle"}},[e._v("deploy it to another Entando application")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);