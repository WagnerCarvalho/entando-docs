(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{1254:function(t,e,s){"use strict";s.r(e);var a=s(32),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"add-a-github-actions-ci-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-github-actions-ci-workflow"}},[t._v("#")]),t._v(" Add a GitHub Actions CI Workflow")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("This tutorial shows how to use the JHipster "),s("code",[t._v("ci-cd")]),t._v(" sub-generator to quickly create a basic GitHub Actions Workflow for the microservices and micro frontends (MFEs) generated by the Entando Component Generator.")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[t._v("An existing project with a GitHub repository. See the "),s("RouterLink",{attrs:{to:"/v6.3.2/tutorials/create/ms/generate-microservices-and-micro-frontends.html"}},[t._v("Entando Component Generator")]),t._v(" to create a new one.")],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),s("OutboundLink")],1),t._v(". These are enabled by default without additional configuration. Please note public repositories currently qualify for unlimited usage but private repositories can encounter usage restrictions.")]),t._v(" "),s("li",[t._v("Use the "),s("RouterLink",{attrs:{to:"/v6.3.2/docs/reference/entando-cli.html#check-environment"}},[t._v("Entando CLI")]),t._v(" to verify you have the command line prerequisites in place for this tutorial (e.g. npm, git, JHipster).")],1)]),t._v(" "),s("h2",{attrs:{id:"create-a-backend-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-backend-workflow"}},[t._v("#")]),t._v(" Create a Backend Workflow")]),t._v(" "),s("ol",[s("li",[t._v("Go to your main project folder in the shell")]),t._v(" "),s("li",[t._v("Run the JHipster "),s("code",[t._v("ci-cd")]),t._v(" subgenerator")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ent jhipster ci-cd\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Select "),s("code",[t._v("GitHub Actions")])]),t._v(" "),s("li",[t._v("Click ENTER to choose no "),s("code",[t._v("tasks/integrations")]),t._v(" and generate the default workflow")]),t._v(" "),s("li",[t._v("The initial workflow file is available at "),s("code",[t._v(".github/workflows/github-ci.yml")])]),t._v(" "),s("li",[t._v("Commit the workflow file and push it to GitHub.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" .github\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Add the backend CI job"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("Since the workflow runs on "),s("code",[t._v("push")]),t._v(" or "),s("code",[t._v("pull-request")]),t._v(", you can immediately check the GitHub "),s("code",[t._v("Repository → Actions")]),t._v(" tab to see the status of the corresponding jobs. The standard tests in a Blueprint-generated project can take a few minutes to run.")])]),t._v(" "),s("ul",[s("li",[t._v("You can review the logs for each step to diagnose CI failures.")]),t._v(" "),s("li",[t._v("If the workflow fails or times out, you should receive an email notification.")]),t._v(" "),s("li",[t._v("You can choose to skip the CI workflow by including "),s("code",[t._v("skip ci")]),t._v(" or "),s("code",[t._v("ci skip")]),t._v(" in your commit message. This can be customized in the job definition.")]),t._v(" "),s("li",[t._v("See the "),s("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),s("OutboundLink")],1),t._v(" documentation for more information on alternative trigger options.")])]),t._v(" "),s("p",[t._v("Next, let's expand the workflow to also include the micro frontends.")]),t._v(" "),s("h2",{attrs:{id:"add-a-frontend-job"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-frontend-job"}},[t._v("#")]),t._v(" Add a Frontend Job")]),t._v(" "),s("p",[t._v("We'll now add a second job to the workflow definition, specifically for the micro frontends. Optionally, you could also create a completely separate workflow file if you'd prefer.")]),t._v(" "),s("ol",[s("li",[t._v("Add a new entry under "),s("code",[t._v("jobs:")]),t._v(", paying attention to the YAML indentation.")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("micro-frontends")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" micro frontend job\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"!contains(github.event.head_commit.message, '[ci skip]') && !contains(github.event.head_commit.message, '[skip ci]') && !contains(github.event.pull_request.title, '[skip ci]') && !contains(github.event.pull_request.title, '[ci skip]')\"")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2.1.4\n         "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14.15.0'")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Run tests\n         "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n           cd ui/widgets/conference/detailsWidget\n           npm install\n           npm test")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("(Optional) If your widget path differs from the standard Blueprint example, you should change the first command in "),s("code",[t._v("Run tests")]),t._v(" to match your path.")]),t._v(" "),s("li",[t._v("Commit and push the changes to GitHub.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('   git add .github\n   git commit -m "Add the microfrontend CI job"\n   git push\n')])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Now check the GitHub "),s("code",[t._v("Repository → Actions")]),t._v(" tab to see the status of the jobs. When the "),s("code",[t._v("micro-frontends")]),t._v(" job is complete, you should see something like this:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Test Suites: 2 passed, 2 total\nTests:       4 passed, 4 total\nSnapshots:   0 total\nTime:        2.911s\nRan all test suites.\n")])])]),s("h2",{attrs:{id:"extend-the-frontend-job-for-multiple-mfes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extend-the-frontend-job-for-multiple-mfes"}},[t._v("#")]),t._v(" Extend the Frontend Job for Multiple MFEs")]),t._v(" "),s("p",[t._v("You may have multiple micro frontends or widgets in your project. One option is to duplicate the job for each MFE, but you can also use the GitHub Actions matrix feature to avoid duplicating those definitions.")]),t._v(" "),s("ol",[s("li",[t._v("Change your job definition to the following. Note the changes:")])]),t._v(" "),s("ul",[s("li",[t._v("The "),s("code",[t._v("job.name")]),t._v(" is dynamically set using the MFE matrix name")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("job.strategy")]),t._v(" has been set to "),s("code",[t._v("fail-fast:false")]),t._v(" so all MFEs will be tested, rather than stopping the job on the first failure")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("job.strategy.matrix.mfe")]),t._v(" provides the list of MFEs in this project. You should update this list to match your project.")]),t._v(" "),s("li",[t._v("The first command in "),s("code",[t._v("Run tests")]),t._v(" is parametrized to use the MFE matrix name")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("micro-frontends")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matrix.mfe "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" micro frontend\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"!contains(github.event.head_commit.message, '[ci skip]') && !contains(github.event.head_commit.message, '[skip ci]') && !contains(github.event.pull_request.title, '[skip ci]') && !contains(github.event.pull_request.title, '[ci skip]')\"")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fail-fast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matrix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mfe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ui/widgets/conference/detailsWidget\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ui/widgets/conference/formWidget\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ui/widgets/conference/tableWidget\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2.1.4\n         "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14.15.0'")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Run tests\n         "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n           cd ${{ matrix.mfe }}\n           npm install\n           npm run test")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Now check the GitHub "),s("code",[t._v("Repository → Actions")]),t._v(" tab to see the status of the jobs. You should see that the tests were run for all configured MFEs with a summary message like this: "),s("code",[t._v("3 jobs completed")]),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports}}]);