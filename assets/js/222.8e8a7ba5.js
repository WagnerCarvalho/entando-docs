(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1019:function(e,t,a){"use strict";a.r(t);var s=a(32),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"build-and-publish-a-project-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-publish-a-project-bundle"}},[e._v("#")]),e._v(" Build and Publish a Project Bundle")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This tutorial demonstrates how to deploy an existing Entando project directory into the "),a("RouterLink",{attrs:{to:"/next/docs/getting-started/concepts-overview.html#entando-component-repository"}},[e._v("Entando Component Repository")]),e._v(" (ECR). This involves building a Docker image from your microservice, creating an Entando Bundle, checking your Bundle artifacts into Git, and deploying the Bundle into Kubernetes.")],1),e._v(" "),a("p",[e._v("The Entando CLI (ent) automates many of the tasks involved in deploying an Entando Bundle, but you can also choose to perform these tasks manually.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Use the "),a("RouterLink",{attrs:{to:"/next/docs/reference/entando-cli.html#check-the-environment"}},[e._v("Entando CLI")]),e._v(" to verify you have the prerequisites in place (e.g. Java, npm, git)")],1)]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent check-env develop\n")])])]),a("ul",[a("li",[e._v("Your Git credentials")]),e._v(" "),a("li",[e._v("A Git repository")]),e._v(" "),a("li",[e._v("An Entando instance")]),e._v(" "),a("li",[e._v("An Entando project directory, either "),a("RouterLink",{attrs:{to:"/next/tutorials/create/pb/publish-simple-bundle.html"}},[e._v("developed by hand")]),e._v(" or "),a("RouterLink",{attrs:{to:"/next/tutorials/create/ms/generate-microservices-and-micro-frontends.html"}},[e._v("generated by the Entando Component Generator")])],1)]),e._v(" "),a("h2",{attrs:{id:"cli-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-steps"}},[e._v("#")]),e._v(" CLI Steps")]),e._v(" "),a("p",[e._v("The following steps make use of the Entando "),a("code",[e._v("ent prj")]),e._v(" command and its publication system (pbs) convenience methods. See the "),a("a",{attrs:{href:"#manual-steps"}},[e._v("Manual Steps")]),e._v(" section below for a more detailed description of the underlying tasks.")]),e._v(" "),a("ol",[a("li",[e._v("Build the project using the "),a("code",[e._v("ent prj")]),e._v(" command. This saves you from having to build each part of the project individually. If you are using a project directory with just a bundle child directory (e.g. a bundle with hand-built components or exported from another environment), then there is nothing to build and you should skip this step.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj build\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The first run can take longer due to node downloads for any MFE widgets. You can use "),a("code",[e._v("ent prj fe-build")]),e._v(" or "),a("code",[e._v("ent prj be-build")]),e._v(" for subsequent runs to independently build just the frontend or backend components.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Initialize the bundle directory")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj pbs-init\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Publish the build artifacts to GitHub and Docker Hub")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj pbs-publish\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Deploy the bundle into the ECR")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj deploy\n")])])]),a("p",[e._v("Jump to "),a("a",{attrs:{href:"#install-the-bundle-into-an-application"}},[e._v("Install the Bundle into an Application")]),e._v(" below to finish installing your bundle.")]),e._v(" "),a("h2",{attrs:{id:"manual-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-steps"}},[e._v("#")]),e._v(" Manual Steps")]),e._v(" "),a("h3",{attrs:{id:"build-a-docker-image-for-microservices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-a-docker-image-for-microservices"}},[e._v("#")]),e._v(" Build a Docker Image for Microservices")]),e._v(" "),a("ol",[a("li",[e._v("Build the project from the project directory")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./mvnw -Pprod clean package jib:dockerBuild\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("By default, the organization used to generate the Docker image is "),a("code",[e._v("entando")]),e._v(". You can customize this value during project initialization by either changing the "),a("code",[e._v("pom.xml")]),e._v(" file or providing the "),a("code",[e._v("-Djib.to.image=<org>/<name>:<version>")]),e._v(" to the "),a("code",[e._v("jib:dockerBuild")]),e._v(" command.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("The output image name is generated using the organization value defined during project initialization. You can override the provided values by altering the "),a("code",[e._v("pom.xml")]),e._v(" file or by customizing the "),a("code",[e._v("-Djib.to.image")]),e._v(" parameter used by the "),a("code",[e._v("./mvnw")]),e._v(" command.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")])]),e._v(" "),a("p",[e._v("If you manually override the target image of the Docker build, remember to update the plugin metadata accordingly.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("View your image and tag")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" images\n")])])]),a("p",[e._v("Output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nmyusername/example-app   0.0.1-SNAPSHOT      4ec7f05b2b27        33 seconds ago      213MB\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Publish the Docker image to Docker repository (Docker Hub or equivalent). You may need to first login via "),a("code",[e._v("docker login")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("name-of-the-image:tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("For example: "),a("code",[e._v("docker push myusername/example-app:0.0.1-SNAPSHOT")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("All of the layers are pushed the first time you run this command, which takes time. Subsequent runs are much faster.")])]),e._v(" "),a("p",[e._v("Output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker push myusername/example-app:0.0.1-SNAPSHOT\nThe push refers to repository [docker.io/myusername/example-app]\n545361404af4: Pushed\n...\nf1b5933fe4b5: Pushed\n0.0.1-SNAPSHOT: digest: sha256:804b3b91b83094c45020b4748b344f7199e3a0b027f4f6f54109cbb3b8a1f867 size: 2626\n")])])]),a("h3",{attrs:{id:"build-your-bundle-and-publish-to-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-your-bundle-and-publish-to-git"}},[e._v("#")]),e._v(" Build Your Bundle and Publish to Git")]),e._v(" "),a("ol",[a("li",[e._v("Populate the bundle with the generated micro frontends using "),a("code",[e._v("./buildBundle.sh")]),e._v(" or "),a("code",[e._v("npm run populate-bundle")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./buildBundle.sh\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Important")]),e._v("\nIt takes time to populate the bundle with micro frontends. You can watch the progress of this process on the console.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("The output of your bundle is in the top-level "),a("code",[e._v("bundle")]),e._v(" directory of your microservice")])]),e._v(" "),a("li",[a("p",[e._v("Commit your bundle files to Git, separate from the top-level project files")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" bundle "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" .gitignore\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" bundle/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Init Git repository"')]),e._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("Create a new Git repository, e.g. "),a("code",[e._v("my-bundle")])])]),e._v(" "),a("li",[a("p",[e._v("Add your remote repository as origin and push the bundle")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin https://your/remote/repository.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push -u origin master\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Publish a Git tag")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git tag -a "v0.0.1" -m "My first tag"\ngit push --tags\n')])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Generate a custom resource for your bundle. Update the following command with your bundle name, namespace and repository URL.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent bundler from-git --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("bundle-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("entando --repository"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-repository-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --dry-run "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" example-bundle.yaml\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Make your bundle available in Kubernetes")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f example-bundle.yaml -n entando\n")])])]),a("h2",{attrs:{id:"install-the-bundle-into-an-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-bundle-into-an-application"}},[e._v("#")]),e._v(" Install the Bundle into an Application")]),e._v(" "),a("p",[e._v("You can either install the bundle through the ent CLI or the "),a("code",[e._v("App Builder")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"use-the-entando-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-entando-cli"}},[e._v("#")]),e._v(" Use the Entando CLI")]),e._v(" "),a("ol",[a("li",[e._v("In your project folder, run the following command")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("If you have already installed the bundle, you can use "),a("code",[e._v("--conflict-strategy")]),e._v(" to adopt a strategy for existing components (CREATE, SKIP, OVERRIDE)")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("ent prj "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --conflict-strategy"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("OVERRIDE\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("In the event of a timeout or pod failure, refer to the errors captured by the quickstart-cm-deployment and plugin deployer logs.")])]),e._v(" "),a("h2",{attrs:{id:"use-the-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-app-builder"}},[e._v("#")]),e._v(" Use the App Builder")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Log into your App Builder and select "),a("code",[e._v("Repository")]),e._v(" in the lower left")])]),e._v(" "),a("li",[a("p",[e._v("Find your bundle and select "),a("code",[e._v("Install")])])])]),e._v(" "),a("p",[e._v("The Entando Platform downloads and installs the Docker image for your microservice and installs your micro frontends into the Entando Application. You can add these micro frontend widgets to the page(s) of your choice. You can either leverage a page provided by Entando or follow our "),a("RouterLink",{attrs:{to:"/next/tutorials/compose/page-management.html"}},[e._v("Page Management tutorial")]),e._v(" to create your own page or page template. Note that your page template must include the UX fragment "),a("code",[e._v("keycloak_auth")]),e._v(" because an application based on the Entando Blueprint expects a user to be authenticated.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);