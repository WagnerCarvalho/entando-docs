(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{1418:function(e,t,a){"use strict";a.r(t);var n=a(32),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"install-plugins-and-micro-frontends-without-a-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-plugins-and-micro-frontends-without-a-bundle"}},[e._v("#")]),e._v(" Install Plugins and Micro Frontends without a Bundle")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("In this tutorial you will learn how to install a plugin and micro frontend, generated with the Entando Blueprint, without the need to include the components in a bundle. Once the plugin is deployed into a cluster, link it to the EntandoApp, upload the static resources, and create the widgets for your app from the Entando App Builder.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("An Entando plugin built with the Entando Component Generator and populated with Micro\nFrontends. "),a("RouterLink",{attrs:{to:"/v7.0/tutorials/create/ms/generate-microservices-and-micro-frontends.html"}},[e._v("Generate a plugin and Micro Frontend here")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Node and npm installed (use the LTS version)")])]),e._v(" "),a("li",[a("p",[e._v("Docker installed and able to upload images to Docker Hub or a repository of your choice")])]),e._v(" "),a("li",[a("p",[e._v("An instance of the Entando platform running on Kubernetes. See "),a("RouterLink",{attrs:{to:"/v7.0/docs/getting-started/"}},[e._v("Getting Started")]),e._v(".")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/v7.0/docs/curate/ecr-bundle-details.html#plugin"}},[e._v("Here is a definition of an Entando plugin")]),e._v(", including information on the runtime contract required for using non-Java based plugins.")],1)]),e._v(" "),a("h2",{attrs:{id:"generate-a-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-docker-image"}},[e._v("#")]),e._v(" Generate a Docker image")]),e._v(" "),a("p",[e._v("JHipster uses the JIB Maven plugin to generate a Docker image for your\nmicroservice.")]),e._v(" "),a("p",[e._v("The name of the output image generated with JIB during the setup wizard is defined with:")]),e._v(" "),a("ul",[a("li",[e._v("The organization name you chose; default is set to "),a("code",[e._v("entando")])]),e._v(" "),a("li",[e._v("The name of the application")]),e._v(" "),a("li",[e._v("Version "),a("code",[e._v("0.0.1-SNAPSHOT")])])]),e._v(" "),a("p",[e._v("For example, a custom organization name of "),a("code",[e._v("myorg")]),e._v(" and an application name of "),a("code",[e._v("jhipster")]),e._v(" will result in a Docker image named "),a("code",[e._v("myorg/jhipster:0.0.1-SNAPSHOT")]),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Build the Docker image:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./mvnw -Pprod clean package jib:dockerBuild\n")])])])])]),e._v(" "),a("p",[e._v("The output image name can also be set by customizing the "),a("code",[e._v("./mvnw")]),e._v(" command using the "),a("code",[e._v("-Djib.to.image")]),e._v(" parameter. With the organization name "),a("code",[e._v("myneworg")]),e._v(", name "),a("code",[e._v("myapp")]),e._v(" and version "),a("code",[e._v("latest")]),e._v(", use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" ./mvnw -Pprod clean package jib:dockerBuild -Djib.to.image=myneworg/myapp:latest\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v("\nThe output image name can be changed in the "),a("code",[e._v("pom.xml")]),e._v(" file by configuring the "),a("code",[e._v("plugins.plugin.jib-maven-plugin.configuration.to.image")]),e._v(" tag as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" <plugin>\n   <groupId>com.google.cloud.tools</groupId>\n   <artifactId>jib-maven-plugin</artifactId>\n   <configuration>\n     \x3c!-- ... --\x3e\n     <to>\n       <image>\x3c!-- use a custom value here --\x3e</image>\n     </to>\n     \x3c!-- ... --\x3e\n   </configuration>\n </plugin>\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("If you change the target image of the Docker build, remember to update\nthe plugin metadata in the bundle accordingly. Once you deploy the plugin, you will also have to change the plugin Custom Resource in the "),a("code",[e._v("bundle/plugins")]),e._v(" folder to point to the correct image.")])]),e._v(" "),a("h2",{attrs:{id:"publish-the-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-docker-image"}},[e._v("#")]),e._v(" Publish the Docker image")]),e._v(" "),a("p",[e._v("Publish the Docker image for the microservice to make it\navailable for the bundle installation in the cluster. Docker Hub or an equivalent registry will do.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker push <name-of-the-image:tag>\n")])])]),a("h2",{attrs:{id:"deploy-the-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-plugin"}},[e._v("#")]),e._v(" Deploy the plugin")]),e._v(" "),a("p",[e._v("You can now deploy the plugin Custom Resource generated by the Entando Blueprint in the "),a("code",[e._v("bundle/plugins")]),e._v(" folder.")]),e._v(" "),a("p",[e._v("From the JHipster project directory, deploy the plugin:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" bundle/plugins\n\nkubectl create -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("plugin-file.yaml"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -n entando\n")])])]),a("h2",{attrs:{id:"link-the-plugin-to-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-the-plugin-to-the-app"}},[e._v("#")]),e._v(" Link the plugin to the App")]),e._v(" "),a("p",[e._v("Once the plugin server deployment is up and running, create an "),a("RouterLink",{attrs:{to:"/v7.0/docs/consume/custom-resources.html"}},[e._v("EntandoAppPluginLink Custom Resource")]),e._v("\nto make the plugin API available from the EntandoApp domain.")],1),e._v(" "),a("p",[e._v("Here is an example of a EntandoAppPluginLink Custom Resource. Some defaults are:")]),e._v(" "),a("ul",[a("li",[e._v("The EntandoPlugin generated with the Blueprint is "),a("code",[e._v("my-demo-plugin")])]),e._v(" "),a("li",[e._v("The EntandoApp exposing "),a("code",[e._v("my-demo-plugin")]),e._v(" API is "),a("code",[e._v("quickstart")]),e._v(". This is the app name in the environment built with the Getting Started instructions.")]),e._v(" "),a("li",[e._v("Both are deployed on the "),a("code",[e._v("entando")]),e._v(" namespace")]),e._v(" "),a("li",[e._v("The link is named "),a("code",[e._v("quickstart-to-my-demo-plugin-link")])]),e._v(" "),a("li",[e._v("The name of the link yaml is "),a("code",[e._v("my-link.yaml")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Change the defaults as needed if you used your own custom names for any of these fields.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: entando.org/v1\nkind: EntandoAppPluginLink\nmetadata:\n  name: quickstart-to-my-demo-plugin-link\n  namespace: entando\nspec:\n  entandoAppName: quickstart\n  entandoAppNamespace: entando\n  entandoPluginName: my-demo-plugin\n  entandoPluginNamespace: entando\n")])])]),a("ol",[a("li",[e._v("Add this link to your environment")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f my-link.yaml -n entando\n")])])]),a("p",[e._v("A new link deployer will start and work behind the scenes to add your plugin "),a("code",[e._v("ingressPath")]),e._v(" (part of the plugin "),a("code",[e._v("spec")]),e._v(") to the EntandoApp ingress.")]),e._v(" "),a("h2",{attrs:{id:"upload-the-static-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-the-static-resources"}},[e._v("#")]),e._v(" Upload the Static Resources")]),e._v(" "),a("p",[e._v("Now that the plugin and app are linked, generate the Micro Frontend from the App Builder\nand upload the static resources like "),a("code",[e._v("js")]),e._v(" and "),a("code",[e._v("css")]),e._v(" files.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("From the App Builder, go to "),a("code",[e._v("Configuration -> File Browser")])])]),e._v(" "),a("li",[a("p",[e._v("Navigate to the "),a("code",[e._v("public")]),e._v(" folder. Create a new folder using the name of the bundle (the value is in the "),a("code",[e._v("code")]),e._v(" field available in the "),a("code",[e._v("/bundle/descriptor.yaml")]),e._v(" file of the blueprint project) or use a custom name such as "),a("code",[e._v("demo-widget")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Upload all the resources in the "),a("code",[e._v("/bundle/resources")]),e._v(" folder of the project into the new folder")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("If you do not duplicate the folder name and structure of "),a("code",[e._v("/bundle/resources")]),e._v(", you will need to update the references to them in the customUI/configUI of the widget.")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("In the App Builder, go to "),a("code",[e._v("Components → Micro frontends & Widgets")])])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("code",[e._v("Add")]),e._v(" to create the widget")])]),e._v(" "),a("li",[a("p",[e._v("Enter the following with your choices for "),a("code",[e._v("anyname")]),e._v(":")])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Title: anyname1")]),e._v(" → enter for both English and Italian languages")]),e._v(" "),a("li",[a("code",[e._v("Code: anyname2")]),e._v(" → dashes are not allowed")]),e._v(" "),a("li",[a("code",[e._v("Group: Free Access")])]),e._v(" "),a("li",[a("code",[e._v("Icon")]),e._v(":  → upload an icon of your choice")])]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[e._v("Under customUI, copy one of the widgets you generated with the Blueprint.\nFor example, the customUI for the "),a("code",[e._v("detailWidget")]),e._v(" of the Conference entity is available in\n"),a("code",[e._v("/bundle/ui/widgets/conference/detailsWidget/conference-details-widget.ftl")])])]),e._v(" "),a("li",[a("p",[e._v("If your path differs from the default, update the service URL to match the location where the ingress for your microservice was deployed.")])])]),e._v(" "),a("p",[e._v("For example, update the service-URL value with the relative path of your service if you're deploying a bundle "),a("code",[e._v('<car-table service-url="/newBp/api"  />')]),e._v(".")]),e._v(" "),a("p",[e._v("Or use the full path if you're deploying the BE and FE individually\n"),a("code",[e._v('<car-table service-url="http://newbp-plugin-entando.192.168.64.7.nip.io/newBp/api"/>')]),e._v(".")]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[e._v("If you're creating a new page from scratch or your page is missing the Keycloak fragment, you can add it with this freemarker snippet:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<@wp.fragment code="keycloak_auth" escapeXml=false />\n')])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Your Entando application includes a "),a("code",[e._v("keycloak_auth")]),e._v(" fragment that will inject the token\nand connection to Keycloak that your Micro Frontends need to invoke the protected APIs. To view the token, go to "),a("code",[e._v("Components → UX Fragments")]),e._v(" in the App Builder and search for "),a("code",[e._v("keycloak_auth")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"use-the-micro-frontend-and-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-micro-frontend-and-microservice"}},[e._v("#")]),e._v(" Use the Micro Frontend and Microservice")]),e._v(" "),a("p",[e._v("Now the Micro Frontends and microservice is available for use in your Entando App Builder.")])])}),[],!1,null,null,null);t.default=o.exports}}]);