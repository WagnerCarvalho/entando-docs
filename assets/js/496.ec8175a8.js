(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{1432:function(e,t,a){"use strict";a.r(t);var n=a(32),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"connect-to-an-external-keycloak-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-an-external-keycloak-instance"}},[e._v("#")]),e._v(" Connect to an External Keycloak Instance")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("This tutorial enables the Entando administrator to leverage an existing\nKeycloak instance.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("A Keycloak instance")])]),e._v(" "),a("li",[a("p",[e._v('A realm named "entando" on that instance')])]),e._v(" "),a("li",[a("p",[e._v('An admin user for the "entando" realm')])])]),e._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("h3",{attrs:{id:"_1-get-keycloak-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-keycloak-information"}},[e._v("#")]),e._v(" 1. Get keycloak information")]),e._v(" "),a("p",[e._v("Retrieve the relevant information from the Keycloak instance you want to\nuse.")]),e._v(" "),a("p",[e._v("Specifically you will need:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('The username of the Keycloak admin that has admin rights to the\n"entando" realm, e.g entando-keycloak-admin')])]),e._v(" "),a("li",[a("p",[e._v("The Keycloak admin password, e.g. password123")])]),e._v(" "),a("li",[a("p",[e._v("The base url for the Keycloak server, including the auth value, e.g.\nhttps://your-keycloak-instance.com/auth")])])]),e._v(" "),a("h3",{attrs:{id:"_2-generate-the-secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-generate-the-secret"}},[e._v("#")]),e._v(" 2. Generate the secret")]),e._v(" "),a("p",[e._v("You now need to generate a secret with name "),a("em",[e._v("keycloak-admin-secret")]),e._v("\nusing the information retrieved from step 1. The Entando administrator\nwill automatically detect this secret by name, and use it to log onto\nthe provided Keycloak server.")]),e._v(" "),a("p",[e._v("Here is an example of the secret you will need to construct:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('---\napiVersion: v1\nstringData:\n    username: #the username of the Keycloak admin user for the "entando" realm\n    password: #the password of this Keycloak admin user\n    url: #the base url of the Keycloak service, typically ending with the path /auth\nkind: Secret\nmetadata\n    name: keycloak-admin-secret\n    namespace: YOUR-APP-NAMESPACE\ntype: Opaque\n')])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),e._v(" "),a("p",[e._v("To encode your values, in bash, you can do\n"),a("code",[e._v("echo YOUR-VALUE | base64")])])]),e._v(" "),a("h3",{attrs:{id:"_3-upload-the-secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-upload-the-secret"}},[e._v("#")]),e._v(" 3. Upload the secret")]),e._v(" "),a("p",[e._v("Next upload the secret to the namespace where you want to deploy your\nEntando instance.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("oc create -f YOUR-SECRET.yaml -n MY-APP-NAMESPACE\n")])])]),a("h3",{attrs:{id:"_4-deploy-the-entando-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-deploy-the-entando-application"}},[e._v("#")]),e._v(" 4. Deploy the Entando application")]),e._v(" "),a("p",[e._v("Now you are ready to deploy your Entando application and the\nadministrator will reuse the "),a("em",[e._v("keycloak-admin-secret")]),e._v(" secret to populate\nthe environment correctly.")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("You should now have a working Entando instance using an external\nKeycloak server.")])])}),[],!1,null,null,null);t.default=o.exports}}]);