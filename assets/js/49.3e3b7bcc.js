(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1279:function(e,t,n){"use strict";n.r(t);var a=n(32),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"entando-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-hub"}},[e._v("#")]),e._v(" Entando Hub")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The Entando Hub enables a team to share components across Entando Applications. It can be installed in Entando 6.3.2 or higher and includes API-level integration with the Entando 7.0 App Builder.")]),e._v(" "),a("p",[e._v("The Hub allows users to:")]),e._v(" "),a("ul",[a("li",[e._v("Centralize components and business capabilities for use across teams, groups, or clients.")]),e._v(" "),a("li",[e._v("Publish, manage and communicate component features, versions and metadata.")]),e._v(" "),a("li",[e._v("Perform business-level assessment of component readiness.")])]),e._v(" "),a("p",[e._v("This tutorial covers:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#configuration"}},[e._v("Configuration")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#using-the-hub"}},[e._v("Using the Hub")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#application-details"}},[e._v("Application Details")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#resources"}},[e._v("Resources")])])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("The Hub is installed using the Entando Component Repository (ECR) and two Entando Bundles.  The first bundle contains the Hub micro frontends and microservices, and the second sets up the initial content and pages for the Hub user experience.")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("An Entando Application on any Kubernetes provider. Follow the "),a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/#operations"}},[e._v("tutorials")]),e._v(" appropriate to your environment to install the Entando platform.")],1),e._v(" "),a("li",[e._v("The "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/reference/entando-cli.html#overview"}},[e._v("ent command line tool")]),e._v(", installed and connected to your Kubernetes instance.")],1)]),e._v(" "),a("h3",{attrs:{id:"installation-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps"}},[e._v("#")]),e._v(" Installation Steps")]),e._v(" "),a("ol",[a("li",[e._v("Apply the Custom Resource Definitions for the Hub component bundles. You'll need to adjust the "),a("code",[e._v("-n entando")]),e._v(" option in each command to match your namespace or project.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ent bundler from-git -r https://github.com/entando-samples/entando-hub-application-bundle.git -d | ent kubectl apply -n entando -f -\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ent bundler from-git -r https://github.com/entando-samples/entando-hub-content-bundle.git -d | ent kubectl apply -n entando -f -\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("Log into your App Builder instance.")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("code",[e._v("Repository")]),e._v(" from the menu on the left. Your bundles will be visible in the repository as shown in the screenshot below.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:n(738),alt:"install-bundles.png"}})]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Select "),a("code",[e._v("Install")]),e._v(" for each bundle, where order of installation is important. The "),a("code",[e._v("entando-hub-application-bundle")]),e._v(" must be installed first because it provides the "),a("code",[e._v("entando-hub-content-bundle")]),e._v(" with MFEs. It may take several minutes to download the Docker images for the microservices and install related assets.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("(Entando 6.3.2) A cache issue impacting the first deployment of the "),a("code",[e._v("entando-hub-content-bundle")]),e._v(" can prevent all widgets or MFEs from appearing on some pages, particularly the Dashboard page.")]),e._v(" "),a("p",[e._v("To clear the cache, select "),a("code",[e._v("Administration")]),e._v(" from the bottom of the left menu, then "),a("code",[e._v("Reload configuration")]),e._v(".")]),e._v(" "),a("p",[e._v("Alternatively, restarting the quickstart-server pod (which contains the Entando App Engine) will also clear the cache, and can be achieved with "),a("code",[e._v("ent k delete pod/<YOUR QUICKSTART-SERVER POD>")]),e._v(", e.g. "),a("code",[e._v("ent k delete pod/quickstart-server-deployment-5d785b997c-r4sc8")]),e._v(". It will take several minutes for the pod to redeploy after deletion.")])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Set up permissions to configure the service:")])]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/v6.3.2/docs/consume/identity-management.html#logging-into-your-keycloak-instance"}},[e._v("Login to your Keycloak instance")]),e._v(" as an admin.")],1),e._v(" "),a("li",[e._v("Give at least one user the ability to manage the Hub by granting the "),a("code",[e._v("eh-admin")]),e._v(" role. Assign the "),a("code",[e._v("eh-admin")]),e._v(" role for the "),a("code",[e._v("pn-cee95efc-77ff566e-entandopsdh-entando-hub-catalog-ms-server")]),e._v(" client. Go to "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/consume/identity-management.html#authorization"}},[e._v("Assign client roles")]),e._v(" for more details.")],1),e._v(" "),a("li",[e._v("Give the generated plugin client permission to manage users.\n"),a("ol",[a("li",[e._v("From the left sidebar, go to "),a("code",[e._v("Clients")]),e._v(", and select client ID "),a("code",[e._v("pn-cee95efc-77ff566e-entandopsdh-entando-hub-catalog-ms-server")]),e._v(".")]),e._v(" "),a("li",[e._v("Click the "),a("code",[e._v("Service Account")]),e._v(" tab at the top and select "),a("code",[e._v("realm-management")]),e._v(" from the "),a("code",[e._v("Client Roles")]),e._v(" field.")]),e._v(" "),a("li",[e._v("Choose "),a("code",[e._v("realm-admin")]),e._v(" from "),a("code",[e._v("Available Roles")]),e._v(".  Click "),a("code",[e._v("Add selected")]),e._v(". It should appear as an  "),a("code",[e._v("Assigned Role")]),e._v(".")])])])]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Access the Hub from the App Builder by navigating to "),a("code",[e._v("Pages → Management")]),e._v(", finding "),a("code",[e._v("Entando Hub")]),e._v(" in the page tree, and clicking "),a("code",[e._v("View Published Page")]),e._v(" from its actions.")])]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("(New with Entando 7.0.0) Any Hub instance can be accessed from the Entando App Builder of another Entando Application. Configure the App Builder to access the desired Hub instance via the endpoint "),a("code",[e._v("BASEURL/entando-hub-api/appbuilder/api")]),e._v(", where the BASEURL is the URL for the Entando Application.")])]),e._v(" "),a("h2",{attrs:{id:"using-the-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-hub"}},[e._v("#")]),e._v(" Using the Hub")]),e._v(" "),a("h3",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("p",[e._v("The key entities in the Entando Hub are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Bundle Group")]),e._v(": A Bundle Group is a group of one or more Entando Bundles.")]),e._v(" "),a("li",[a("code",[e._v("Bundle Group Version")]),e._v(": A Bundle Group can have one or more versions, each with a particular status.")]),e._v(" "),a("li",[a("code",[e._v("Bundle")]),e._v(": A Bundle is the deployment unit within an Entando Application. A Bundle can contain one or multiple components such as micro frontends, microservices, or any of the "),a("RouterLink",{attrs:{to:"/v6.3.2/docs/curate/ecr-bundle-details.html#overview"}},[e._v("component types")]),e._v(" available in Entando.")],1),e._v(" "),a("li",[a("code",[e._v("Category")]),e._v(": Each Bundle Group belongs to a specific category. The initial possible categories are Solution Template, Packaged Business Capability (PBC), or Component Collection. An admin of an Entando Hub can refine the available categories as desired.")]),e._v(" "),a("li",[a("code",[e._v("Organization")]),e._v(": Bundle Groups belong to a single organization. Authors and managers can only update Bundle Groups for their own organization.")]),e._v(" "),a("li",[a("code",[e._v("User")]),e._v(": User identity is managed within Keycloak, where users are granted roles within the Hub. Users must be assigned to a specific organization.")])]),e._v(" "),a("p",[e._v("Notes:")]),e._v(" "),a("ul",[a("li",[e._v("A private repository can be used for a Bundle, but this requires "),a("RouterLink",{attrs:{to:"/v6.3.2/tutorials/curate/ecr-private-git-repo.html#overview"}},[e._v("an additional Kubernetes secret")]),e._v(" before deployment via the App Builder.")],1)]),e._v(" "),a("h3",{attrs:{id:"roles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[e._v("#")]),e._v(" Roles")]),e._v(" "),a("p",[e._v("Three roles are used to provide access to the Hub features:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("eh-author")]),e._v(": An author can create and edit Bundle Groups for their organization and submit them for publication.")]),e._v(" "),a("li",[a("code",[e._v("eh-manager")]),e._v(": A manager has the permissions of an author, but can also approve a publication request for their organization.")]),e._v(" "),a("li",[a("code",[e._v("eh-admin")]),e._v(": An admin has full access to create, update, and delete Bundle Groups for the entire Hub instance. An admin can also create categories and organizations, and assign users to an organization.")]),e._v(" "),a("li",[a("code",[e._v("guest")]),e._v(": Any user without one of the preceding roles is considered a guest in the Entando Hub and is given a read-only view of the public catalog. This is also true for unauthenticated users.")])]),e._v(" "),a("h3",{attrs:{id:"bundle-group-version-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-group-version-status"}},[e._v("#")]),e._v(" Bundle Group Version Status")]),e._v(" "),a("p",[e._v("The possible statuses for the versions of a Bundle Group are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Draft")]),e._v(": This is the default status for the first version of a Bundle Group.")]),e._v(" "),a("li",[a("code",[e._v("Publication Request")]),e._v(": An eh-author sets a version to this status to request an eh-manager or eh-admin to review the version and mark it for publication. An eh-manager or eh-admin may edit versions with this status.")]),e._v(" "),a("li",[a("code",[e._v("Published")]),e._v(": Versions with this status are visible in the home page list of available Bundle Groups and also available in the App Builder-facing API. An eh-manager or eh-admin may edit Published versions.")]),e._v(" "),a("li",[a("code",[e._v("Archived")]),e._v(": Previously Published versions are assigned this status. No edits can be made on an Archived version.")]),e._v(" "),a("li",[a("code",[e._v("Deletion Request")]),e._v(": An eh-manager or eh-admin can delete versions once this status has been set.")])]),e._v(" "),a("p",[e._v("Notes:")]),e._v(" "),a("ul",[a("li",[e._v("An eh-author can change any field except Organization while a version is in Draft.")]),e._v(" "),a("li",[e._v("There is no automated notification process when a Publication Request is made for a Bundle Group version.")])]),e._v(" "),a("h3",{attrs:{id:"bundle-group-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-group-creation"}},[e._v("#")]),e._v(" Bundle Group Creation")]),e._v(" "),a("p",[e._v("Clicking the "),a("code",[e._v("Add +")]),e._v(" button at the top of the page displays the form for creating a new Bundle Group:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(739),alt:"hub-add.png"}})]),e._v(" "),a("h3",{attrs:{id:"bundle-group-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundle-group-versions"}},[e._v("#")]),e._v(" Bundle Group Versions")]),e._v(" "),a("p",[e._v("The list of Bundle Group Versions can be seen by clicking "),a("code",[e._v("View Versions")]),e._v(" on any entry in the catalog:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(740),alt:"hub-actions.png"}})]),e._v(" "),a("p",[e._v("Notes:")]),e._v(" "),a("ul",[a("li",[e._v("Once the first version of a group is published, the organization, name, and category can no longer be changed.")]),e._v(" "),a("li",[e._v("A new version of a Bundle Group can be created (via the "),a("code",[e._v("New Version")]),e._v(" option) after the first version has been published.")]),e._v(" "),a("li",[e._v("There can be at most two active versions: one Draft or Publication Requested version and one Published version.")]),e._v(" "),a("li",[e._v("When a new version is published, the previous version is set to Archived.")]),e._v(" "),a("li",[e._v("Archived versions are only visible in the versions view and are not shown elsewhere in the user interface.")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(741),alt:"hub-versions.png"}})]),e._v(" "),a("h2",{attrs:{id:"application-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-details"}},[e._v("#")]),e._v(" Application Details")]),e._v(" "),a("p",[e._v("The Hub includes the following key components:")]),e._v(" "),a("h3",{attrs:{id:"micro-frontends-widgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#micro-frontends-widgets"}},[e._v("#")]),e._v(" Micro Frontends / Widgets")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Entando Hub App")]),e._v(": This is the main micro frontend which contains the management UI for the Hub entities noted above.")]),e._v(" "),a("li",[a("code",[e._v("Entando Hub Login")]),e._v(": This is an optional login component which can be used in a page’s top navigation.")])]),e._v(" "),a("h3",{attrs:{id:"microservices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservices"}},[e._v("#")]),e._v(" Microservices")]),e._v(" "),a("p",[e._v("A single Spring Boot microservice provides two REST endpoints:")]),e._v(" "),a("ul",[a("li",[e._v("The first is a backend-for-a-frontend (BFF) service for the Hub UI and contains the various entity APIs.")]),e._v(" "),a("li",[e._v("The second provides methods that support the Entando App Builder integration (7.0.0+).")])]),e._v(" "),a("h3",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[e._v("#")]),e._v(" Content")]),e._v(" "),a("p",[e._v("The Hub content bundle ("),a("code",[e._v("entando-hub")]),e._v(") includes a custom template and a page preconfigured with the main Hub micro frontends.")]),e._v(" "),a("h3",{attrs:{id:"integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[e._v("#")]),e._v(" Integration")]),e._v(" "),a("p",[e._v("The Entando App Builder should be configured using the endpoint "),a("code",[e._v("BASEURL/entando-hub-api/appbuilder/api")]),e._v(", where the BASEURL is the URL for the Entando Application.")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("h3",{attrs:{id:"source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[e._v("#")]),e._v(" Source Code")]),e._v(" "),a("p",[e._v("Entando open source examples and tutorials are available on GitHub. Reference the Hub sample project for instructions to build the project from source code:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/entando-samples/entando-hub",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-samples/entando-hub"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports},738:function(e,t,n){e.exports=n.p+"assets/img/install-bundles.0c736118.png"},739:function(e,t,n){e.exports=n.p+"assets/img/hub-add.8ea04cb6.png"},740:function(e,t,n){e.exports=n.p+"assets/img/hub-actions.682c93ee.png"},741:function(e,t,n){e.exports=n.p+"assets/img/hub-versions.b9ec23b1.png"}}]);