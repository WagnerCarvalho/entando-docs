(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{1312:function(e,t,a){"use strict";a.r(t);var n=a(32),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"entando-6-3-0-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-6-3-0-release-notes"}},[e._v("#")]),e._v(" Entando 6.3.0 Release Notes")]),e._v(" "),a("h2",{attrs:{id:"new-features-and-major-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-features-and-major-fixes"}},[e._v("#")]),e._v(" New Features and Major Fixes")]),e._v(" "),a("h3",{attrs:{id:"infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure"}},[e._v("#")]),e._v(" Infrastructure")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Enhanced the Entando Operator so it can run on a dedicated namespace and support multiple Entando Applications in different namespaces.")]),e._v(" "),a("ul",[a("li",[e._v("This enables a separation of privileges so the operator can be managed by Kubernetes administrators and an Entando Application can be managed by users with access to a specific namespace.")])])]),e._v(" "),a("li",[a("p",[e._v("Upgraded to Java 11 for all core Entando docker images")])]),e._v(" "),a("li",[a("p",[e._v("Improved support for Google GKE, Azure AKS, and Amazon EKS cloud deployments")])]),e._v(" "),a("li",[a("p",[e._v("Added support for OpenShift 4.X via quickstart templates")])]),e._v(" "),a("li",[a("p",[e._v("Added configuration options so the Entando Component Repository can deploy bundles based on private registries and repositories")])]),e._v(" "),a("li",[a("p",[e._v("Improved support for more complex topologies of TLS enabled ingresses")])]),e._v(" "),a("li",[a("p",[e._v("Added support for single domain configurations")]),e._v(" "),a("ul",[a("li",[e._v("In previous versions Entando used subdomains to expose subsystems and bundle microservices. Entando 6.3 can now operate under a single domain using the url path for routing. This can simplify infrastructure and certificate management.")])])]),e._v(" "),a("li",[a("p",[e._v("Enabled tuning the resource requirements of the core service pods")])]),e._v(" "),a("li",[a("p",[e._v("Made Jboss EAP and Wildfly cache configuration available on the default docker images for the core services")])]),e._v(" "),a("li",[a("p",[e._v("Added support for using Kubernetes secrets for external database")])]),e._v(" "),a("li",[a("p",[e._v("Added options to preserve persistent volumes when a related Entando custom resource is deleted")])]),e._v(" "),a("li",[a("p",[e._v("Simplified propagation of environment parameters")])]),e._v(" "),a("li",[a("p",[e._v("Supported clustered caching based on Redis, including using the Redis client frontend for node-local caching")])])]),e._v(" "),a("h3",{attrs:{id:"new-use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-use-cases"}},[e._v("#")]),e._v(" New Use Cases")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Added capability to integrate with an external OIDC identity provider")])]),e._v(" "),a("li",[a("p",[e._v("Added integration with Azure WAF")])]),e._v(" "),a("li",[a("p",[e._v("Supported GKE installation in development configurations")])])]),e._v(" "),a("h3",{attrs:{id:"security-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-fixes"}},[e._v("#")]),e._v(" Security Fixes")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("XSS: Added a default, mandatory Content Security Policy (CSP) to cover cases outside the scope of input sanitization")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("This policy increases the security of all modules deployed within Entando, whether developed by Entando, clients, or 3rd parties.")])]),e._v(" "),a("li",[a("p",[e._v("The CSP can be customized via Entando system parameters.")])]),e._v(" "),a("li",[a("p",[e._v('The authorization data required by CSP (the "nonce") is automatically applied to elements developed within AppBuilder or installed via Entando Bundles.')])]),e._v(" "),a("li",[a("p",[e._v("Developers should be aware of the constraints imposed by CSP, in particular with regard to code dynamic evaluation and event management. See Google’s CSP guide for more details: "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/security/csp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/web/fundamentals/security/csp"),a("OutboundLink")],1)])])])]),e._v(" "),a("li",[a("p",[e._v("Applied fixes for sanitization/path traversal indicated by static code analysis")])]),e._v(" "),a("li",[a("p",[e._v("Updated encryption algorithms (to AES and SHA256) for two cases of token generation")]),e._v(" "),a("ul",[a("li",[e._v("These changes are not compatible with older versions of Java 8.")])])]),e._v(" "),a("li",[a("p",[e._v("Fixed XXE cases by updating and configuring the XML object factories")]),e._v(" "),a("ul",[a("li",[e._v("These fixes are not compatible with older versions of Java 8.")])])]),e._v(" "),a("li",[a("p",[e._v("Removed support for weak encryption algorithms, including MD5, Argon, 3DES")])]),e._v(" "),a("li",[a("p",[e._v("Updated to recent and more secure versions of spring-boot, Apache CXF, Keycloak engine and client libraries")])]),e._v(" "),a("li",[a("p",[e._v("Improved log sanitization")])])]),e._v(" "),a("h3",{attrs:{id:"entando-component-repository-ecr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-component-repository-ecr"}},[e._v("#")]),e._v(" Entando Component Repository (ECR)")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Upgraded to Java 11 for all Entando Bundles")])]),e._v(" "),a("li",[a("p",[e._v("Renamed "),a("em",[e._v("entando-bundle-cli")]),e._v(" repository and tool to "),a("em",[e._v("entando-bundler")]),e._v(" (or just "),a("em",[e._v("bundler")]),e._v(") to avoid confusion with the new "),a("em",[e._v("entando-cli")]),e._v(" command line tool")])]),e._v(" "),a("li",[a("p",[e._v("Added the ability to export all content in an Entando Application via the "),a("em",[e._v("entando-bundler")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("This does not include users but does include groups and permissions.")])]),e._v(" "),a("li",[a("p",[e._v("In some cases, an exported bundle may need to be manually updated before importing it into another Entando application (e.g. if the css for a widget is pointing to a root resource)")])])])]),e._v(" "),a("li",[a("p",[e._v("Added a "),a("em",[e._v("forced overwrite")]),e._v(" installation strategy for Entando Bundles that creates new objects or updates existing objects in order to allow business cases like:")]),e._v(" "),a("ul",[a("li",[a("ol",[a("li",[e._v("continuous deployment in development scenarios")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[e._v("continuous deployment of staging to production")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[e._v("migration of Entando Applications. The developer/admin will still be responsible for the update of data structures, as appropriate.")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[e._v("develop a component, export as a bundle, import to a QA or test instance, then import into a production instance")])])])])]),e._v(" "),a("li",[a("p",[e._v("Improved the bundle plugin descriptor to provide new capabilities. New properties:")]),e._v(" "),a("ul",[a("li",[a("ol",[a("li",[a("em",[e._v("deploymentBaseName")]),e._v(": The base name to assign to the Kubernetes pods. If not present the base name will be generated from the docker organization, image name and image version. If the generated name is too long it will be truncated in order to respect Kubernetes constraints.")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[a("em",[e._v("ingressPath")]),e._v(": the ingress path to assign to the plugin deployment")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[a("em",[e._v("permissions")]),e._v(": a list of Keycloak clientId / role mappings")])])])])])]),e._v(" "),a("h3",{attrs:{id:"developer-experience"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-experience"}},[e._v("#")]),e._v(" Developer Experience")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Entando 6.3 now includes a Command Line Interface, "),a("em",[e._v("entando-cli")]),e._v(" or simply "),a("em",[e._v("ent")]),e._v(", intended to accelerate Entando development by automating common development tasks. The CLI can been used to do the following:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Simplify the quickstart install process via a one line script leveraging a multipass VM for direct install via "),a("em",[e._v("ent quickstart")])])]),e._v(" "),a("li",[a("p",[e._v("Prepare a developer environment via "),a("em",[e._v("ent check-env")]),e._v(" which installs tools such as npm, git, jhipster. The correct version of each dependency is installed based on the Entando version configured in the developer environment and uses private installs of npm-based tools to avoid conflicts across projects.")])]),e._v(" "),a("li",[a("p",[e._v("Create, build, and publish bundles via project-level commands such as "),a("em",[e._v("ent jhipster")]),e._v(" and "),a("em",[e._v("ent prj")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Use the "),a("em",[e._v("ent bundler")]),e._v(" command to help prepare bundle custom resources or to export a complete bundle from an existing Entando Application.")])]),e._v(" "),a("li",[a("p",[e._v("Use helper commands such as "),a("em",[e._v("ent app-info")]),e._v(", "),a("em",[e._v("ent pod-info")]),e._v(", and "),a("em",[e._v("ent diag")]),e._v(" to collect diagnostic information related to an Entando application and which can be shared with Entando Support.")])]),e._v(" "),a("li",[a("p",[e._v("(experimental) Use helper commands such as "),a("em",[e._v("ent attach-vm")]),e._v(" and "),a("em",[e._v("ent kubectl")]),e._v(" to interact with an Entando application.")])]),e._v(" "),a("li",[a("p",[e._v("For more information on the CLI see "),a("RouterLink",{attrs:{to:"/v6.3/docs/reference/entando-cli.html"}},[e._v("this page")]),e._v(".")],1)])])]),e._v(" "),a("li",[a("p",[e._v("Added compatibility fixes when running Entando tools on Linux, MacOS, and Windows 10.")])])]),e._v(" "),a("h3",{attrs:{id:"quickstart-installs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-installs"}},[e._v("#")]),e._v(" Quickstart Installs")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Enabled the one step HTTP installer for use on Linux, MacOS, and Windows 10 to set up a fully functional Entando Application in Kubernetes.")])]),e._v(" "),a("li",[a("p",[e._v("Added support for Windows 10 mshome.net-based addresses when installing a quickstart via the Entando CLI.")])]),e._v(" "),a("li",[a("p",[e._v("Provided a new template for deploying the Entando operator into a dedicated namespace")])]),e._v(" "),a("li",[a("p",[e._v("Enhanced the quickstart so base docker images can be specified. This is required for scenarios where only private registries are allowed.")])])]),e._v(" "),a("h3",{attrs:{id:"appbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appbuilder"}},[e._v("#")]),e._v(" AppBuilder")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Streamlined and simplified the Page and Content creation workflow")])]),e._v(" "),a("li",[a("p",[e._v("Improved the Page Management and Page Designer UX to ease page design and configuration")])]),e._v(" "),a("li",[a("p",[e._v("Added Welcome Wizard guided tutorial to help new users create a fully functional page in a new Application and introduce them to the main features of the App Builder interface")])]),e._v(" "),a("li",[a("p",[e._v("Added Profile → Preferences options to allow users to customize their App Builder experience. Current settings include the Welcome Wizard, Missing Translation Warning, and Load on Page Select.")])])]),e._v(" "),a("h2",{attrs:{id:"deprecation-warnings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecation-warnings"}},[e._v("#")]),e._v(" Deprecation Warnings")]),e._v(" "),a("ul",[a("li",[e._v("ECR: The format of the Bundle Plugin descriptor has been updated. The format used in Entando 6.2 has been deprecated.")])]),e._v(" "),a("h2",{attrs:{id:"open-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-issues"}},[e._v("#")]),e._v(" Open Issues")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("ECR: The "),a("em",[e._v("forced overwrite")]),e._v(" scenario when installing an Entando Bundle can only be utilized via API calls. A user interface will be provided in a future release.")])]),e._v(" "),a("li",[a("p",[e._v("MySQL support will be restored in a patch release")])])]),e._v(" "),a("h2",{attrs:{id:"previous-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#previous-releases"}},[e._v("#")]),e._v(" Previous Releases")]),e._v(" "),a("p",[e._v("Please see the "),a("code",[e._v("Versions")]),e._v(" list in the main navigation menu above to access documentation and release notes for previous versions of Entando.")])])}),[],!1,null,null,null);t.default=i.exports}}]);