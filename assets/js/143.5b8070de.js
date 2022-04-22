(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1145:function(e,a,t){"use strict";t.r(a);var n=t(32),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"entando-identity-management-keycloak"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-identity-management-keycloak"}},[e._v("#")]),e._v(" Entando Identity Management -- Keycloak")]),e._v(" "),n("p",[e._v("Entando Identity Management is powered by Keycloak. The Keycloak instance used for your Entando apps\ncan be "),n("a",{attrs:{href:"../../tutorials/devops/external-keycloak"}},[e._v("externally installed")]),e._v(" or you can use a dedicated instance on a per application basis. The sections below details the architecture and documentation required to customize your Keycloak instance.")]),e._v(" "),n("h2",{attrs:{id:"logging-into-your-keycloak-instance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#logging-into-your-keycloak-instance"}},[e._v("#")]),e._v(" Logging into your Keycloak Instance")]),e._v(" "),n("p",[e._v("In an Entando deployment Keycloak is protected by a Secret deployed in your Kubernetes instance. To get the default admin credentials you can query Kubernetes for the secret with this command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('kubectl get secret <project-name>kc-admin-secret -n <namespace> -o go-template="{{println}}Username: {{.data.username | base64decode}}{{println}}Password: {{.data.password | base64decode}}{{println}}{{println}}"\n')])])]),n("p",[e._v("Replace "),n("code",[e._v("<project-name>")]),e._v(" and "),n("code",[e._v("<namespace>")]),e._v(" with your values. If you're not sure of the secret name you can run")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl get secrets -n <namespace>\n")])])]),n("p",[e._v("And search for the secret that ends in "),n("code",[e._v("kc-admin-secret")])]),e._v(" "),n("h2",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),n("p",[e._v("In Entando 6 all authentication goes through Keycloak. This ensures that a micro frontend can call a microservice with a token that is available on the client.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(613),alt:"Init Containers Screenshot"}})]),e._v(" "),n("p",[e._v("By using Keycloak as a central point of authentication the Entando architecture is able to provide a single unified view of identity to the entire architecture. With this architecture Entando becomes more portable and can be integrated into other IDPs without changes to the source. Keycloak acts as an  abstraction to the underlying IDP.")]),e._v(" "),n("h2",{attrs:{id:"authorization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),n("h3",{attrs:{id:"plugins-microservices"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins-microservices"}},[e._v("#")]),e._v(" Plugins/Microservices")]),e._v(" "),n("p",[e._v("Authorization for the microservices comes from clients and roles in keycloak. The authorizations are stored in the JWT token and are available to the services when invoked.")]),e._v(" "),n("h3",{attrs:{id:"core"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" Core")]),e._v(" "),n("p",[e._v("Authorization for the entando-core and WCMS is provided by the Entando user management database. When a user is authenticated to the entando-core  a copy of that user is added to the Entando user management database.  That copy is made in support of the authorization flow noted below.")]),e._v(" "),n("p",[e._v("As noted above when a user is authenticated to the entando-core via keycloak a copy of that user is added to the entando-core user management database in support of WCMS functionality.  Using the App Builder WCMS roles and groups can be assigned to a user for access to functions in the App Builder or for portal-ui based content access in the runtime application The code that copies the user into the entando-core can be customized to automatically create groups and roles as needed for an application but it is something that must be done on a per implementation basis.")]),e._v(" "),n("p",[e._v("For more details on the code that copies users and data to the WCMS database see the "),n("a",{attrs:{href:"https://github.com/entando/entando-keycloak-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("entando-keycloak-plugin"),n("OutboundLink")],1),e._v(". The readme in that project includes properties that are available to your Entando app.")]),e._v(" "),n("p",[e._v("For a deeper look See: "),n("a",{attrs:{href:"https://github.com/entando/entando-keycloak-plugin/blob/master/src/main/java/org/entando/entando/keycloak/services/KeycloakAuthorizationManager.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("KeycloakAuthorizationManager.java"),n("OutboundLink")],1),e._v(" in the plugin for an example of adding attributes programatically. In particular, the "),n("a",{attrs:{href:"https://github.com/entando/entando-keycloak-plugin/blob/master/src/main/java/org/entando/entando/keycloak/services/KeycloakAuthorizationManager.java#L43",target:"_blank",rel:"noopener noreferrer"}},[e._v("processNewUser"),n("OutboundLink")],1),e._v(" method.")]),e._v(" "),n("h2",{attrs:{id:"social-login"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#social-login"}},[e._v("#")]),e._v(" Social Login")]),e._v(" "),n("p",[e._v("Keycloak allows Entando to provide social login as an out of the box capability. See the "),n("a",{attrs:{href:"https://www.keycloak.org/docs/7.0/server_admin/#social-identity-providers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keycloak Social Identity Providers"),n("OutboundLink")],1),e._v(" for documentation on enabling and configuring social logins in your Entando apps.")]),e._v(" "),n("h2",{attrs:{id:"one-time-passwords"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#one-time-passwords"}},[e._v("#")]),e._v(" One Time Passwords")]),e._v(" "),n("p",[e._v("Keycloak enables Entando applications to provide login via One Time Passwords (OTP) as well. See the "),n("a",{attrs:{href:"https://www.keycloak.org/docs/7.0/server_admin/#otp-policies",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keycloak OTP Policies"),n("OutboundLink")],1),e._v(" for more details on configuring and enabling OTP in your application.")]),e._v(" "),n("h2",{attrs:{id:"themes-and-look-and-feel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#themes-and-look-and-feel"}},[e._v("#")]),e._v(" Themes and Look and Feel")]),e._v(" "),n("p",[e._v("Developers can also customize the look and feel of the login page and all of the identity management system that ships with Entando. The "),n("a",{attrs:{href:"https://www.keycloak.org/docs/7.0/server_admin/#_themes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keycloak Theme Documentation"),n("OutboundLink")],1),e._v(" provides a lot of details on creating your own theme.")]),e._v(" "),n("p",[e._v("You can also review the code for the "),n("a",{attrs:{href:"https://github.com/entando/entando-keycloak/tree/master/themes/entando",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entando Theme"),n("OutboundLink")],1),e._v(" as an example Keycloak theme to start from.")])])}),[],!1,null,null,null);a.default=o.exports},613:function(e,a,t){e.exports=t.p+"assets/img/keycloak-arch-high-level.47cccaab.png"}}]);