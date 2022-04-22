(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1220:function(a,s,t){"use strict";t.r(s);var e=t(32),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"quick-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-reference"}},[a._v("#")]),a._v(" Quick Reference")]),a._v(" "),t("p",[a._v("Just the steps, for advanced users.")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("Install "),t("a",{attrs:{href:"https://multipass.run/#install",target:"_blank",rel:"noopener noreferrer"}},[a._v("Multipass"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("Launch VM")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("multipass launch --name ubuntu-lts --cpus "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" --mem 8G --disk 20G\n")])])]),t("p",[a._v("Open Ubuntu shell")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("multipass shell ubuntu-lts\n")])])]),t("p",[a._v("Install k3s")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sfL https://get.k3s.io "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" -\n")])])]),t("p",[a._v("Check for node ready")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl get "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v("\n")])])]),t("p",[a._v("Create namespace")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl create namespace entando\n")])])]),t("p",[a._v("Deploy custom resource definitions")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl apply -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/cluster-resources.yaml\n")])])]),t("p",[a._v("Deploy namespace scoped assets")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl apply -n entando -f https://raw.githubusercontent.com/entando/entando-releases/v6.3.2/dist/ge-1-1-6/namespace-scoped-deployment/orig/namespace-resources.yaml\n")])])]),t("p",[a._v("Download Helm chart (or "),t("a",{attrs:{href:"https://github.com/entando-k8s/entando-helm-quickstart",target:"_blank",rel:"noopener noreferrer"}},[a._v("generate your own"),t("OutboundLink")],1),a._v(")")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sfL https://github.com/entando-k8s/entando-helm-quickstart/archive/v6.3.2.tar.gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvz\n")])])]),t("p",[a._v("Configure external access to your cluster with your VM IP")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" -I "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $1}'")]),a._v("\n")])])]),t("p",[a._v("Edit the file in "),t("code",[a._v("sample-configmaps/entando-operator-config.yaml")]),a._v(" and uncomment the value for "),t("code",[a._v("entando.default.routing.suffix:")]),a._v(" and set the value to the IP address of your Ubuntu VM plus "),t("code",[a._v(".nip.io")]),a._v(". For example, "),t("code",[a._v("entando.default.routing.suffix: 192.168.64.21.nip.io")]),a._v(". Pay attention to yaml spacing")]),a._v(" "),t("p",[a._v("Deploy Entando")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl apply -f sample-configmaps/entando-operator-config.yaml -n entando\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" helm template quickstart ./ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl apply -n entando -f -\n")])])]),t("p",[a._v("Check for "),t("code",[a._v("quickstart-composite-app-deployer")]),a._v(" with a status of completed using the command below")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl get pods -n entando --watch\n")])])]),t("p",[a._v("Get URL to access Entando App Builder from your browser")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" kubectl get ingress -n entando -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("jsonpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{.items[2].spec.rules[*].host}{.items[2].spec.rules[*].http.paths[1].path}{\"\\n\"}'")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);