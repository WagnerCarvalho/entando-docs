(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1401:function(e,t,a){"use strict";a.r(t);var o=a(32),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"page-and-content-protection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-and-content-protection"}},[e._v("#")]),e._v(" Page and Content Protection")]),e._v(" "),a("p",[e._v("In the Entando Web Content Management System (WCMS) you have the ability to protect pages, content, and digital assets (images and files) by assigning groups that have the authorization to view those assets. If users without the correct authorization attempt to view those assets the platform will return an error. You can handle those errors as required for your application with dedicated error pages or by adding logic to your widgets or freemarker templates.")]),e._v(" "),a("h2",{attrs:{id:"create-a-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-group"}},[e._v("#")]),e._v(" Create a Group")]),e._v(" "),a("p",[e._v("Protected pages, content, and digital assets in the WCMS are protected by assigning groups to the resource that is being created. You can add new groups in the Entando App Builder as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("code",[e._v("Users → Groups")]),e._v(" from the left navigation")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("Add")])]),e._v(" "),a("li",[e._v("Enter a "),a("code",[e._v("Name")]),e._v(" and a "),a("code",[e._v("Code")]),e._v(" for your group`")])]),e._v(" "),a("p",[e._v("The groups you create here can be utilized to protect pages, content, images, and attachments in the CMS. Groups can be assigned to individual users in the "),a("code",[e._v("Users")]),e._v(" section of the app builder or as part of a customization of your entando-core-app using APIs or custom code.")]),e._v(" "),a("p",[e._v("Pages and Content have settings for an "),a("code",[e._v("Owner Group")]),e._v(" as well as a set of optional "),a("code",[e._v("Join Groups")]),e._v(". The "),a("code",[e._v("Owner Group")]),e._v(" indicates the team within the "),a("code",[e._v("App Builder")]),e._v(" who owns and can modify the page. Additional groups can be given access to the item via the "),a("code",[e._v("Join Group")]),e._v(" setting. Note: the default App Builder configuration prevents the "),a("code",[e._v("Owner Group")]),e._v(" from being changed after the item is created.")]),e._v(" "),a("h2",{attrs:{id:"protect-a-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protect-a-page"}},[e._v("#")]),e._v(" Protect a Page")]),e._v(" "),a("ol",[a("li",[e._v("Select "),a("code",[e._v("Pages → Management")]),e._v(" from the left navigation")]),e._v(" "),a("li",[e._v("Create a new page. Assign values as you see fit")]),e._v(" "),a("li",[e._v("To protect a page, assign the "),a("code",[e._v("Owner Group")]),e._v(" to any group other than "),a("code",[e._v("Free Access")])]),e._v(" "),a("li",[e._v("(Optional) Add groups via "),a("code",[e._v("Join Group")])]),e._v(" "),a("li",[e._v("Finish configuring the page and select "),a("code",[e._v("Save")])])]),e._v(" "),a("p",[e._v("At this point only users assigned to either the "),a("code",[e._v("Owner Group")]),e._v(" or "),a("code",[e._v("Join Group")]),e._v(" will have the ability to view that page. They can also manage the Page if they have the appropriate App Builder role.")]),e._v(" "),a("p",[e._v("If you would like to test this, navigate to the page URL in a private or incognito browser window and you will be redirected to the "),a("code",[e._v("Sign in to Proceed Further")]),e._v(" page of your application.\nThe "),a("code",[e._v("Sign in to Proceed Further")]),e._v(" page can be changed by going to "),a("code",[e._v("Pages → Settings")]),e._v(" and picking the page you would like to render to users who need to sign in.")]),e._v(" "),a("h2",{attrs:{id:"protect-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protect-content"}},[e._v("#")]),e._v(" Protect Content")]),e._v(" "),a("ol",[a("li",[e._v("Select "),a("code",[e._v("Content → Management")]),e._v(" from the left navigation")]),e._v(" "),a("li",[e._v("Select the "),a("code",[e._v("Add Content")]),e._v(" button and pick the content type to be created")]),e._v(" "),a("li",[e._v("To protect a content item, assign the "),a("code",[e._v("Owner Group")]),e._v(" to any group other than "),a("code",[e._v("Free Access")])]),e._v(" "),a("li",[e._v("(Optional) Add groups via "),a("code",[e._v("Join Group")])]),e._v(" "),a("li",[e._v("Finish configuring the page and select "),a("code",[e._v("Save")])])]),e._v(" "),a("p",[e._v("The content you are creating will only be available to users assigned to the "),a("code",[e._v("Owner Group")]),e._v(" of "),a("code",[e._v("Join Group")]),e._v(". The default WCMS widgets will only return content authorized for a given user. See the "),a("a",{attrs:{href:"#freemarker-tags-and-consuming-protected-resources"}},[e._v("freemarker tags")]),e._v(" section below for information on creating custom widgets that utilize protected content.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Images and Attachments and Groups")]),e._v(" "),a("p",[e._v("When creating content the "),a("code",[e._v("Owner Group")]),e._v(" of the content and the "),a("code",[e._v("Group")]),e._v(" assigned to the digital asset must match. For example, when creating content with an "),a("code",[e._v("Owner Group")]),e._v(" of "),a("code",[e._v("Administrators")]),e._v(" the content creator will be unable to select images and attachments that are assigned a different group. The exception to this is assets with a group of "),a("code",[e._v("Free Access")]),e._v(". Assets with "),a("code",[e._v("Free Access")]),e._v(" can be added to protected content.")])]),e._v(" "),a("h2",{attrs:{id:"protect-images-and-attachments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protect-images-and-attachments"}},[e._v("#")]),e._v(" Protect Images and Attachments")]),e._v(" "),a("p",[e._v("Images and attachments uploaded to the CMS can be protected by assigning groups.")]),e._v(" "),a("ol",[a("li",[e._v("Select "),a("code",[e._v("Content → Assets")]),e._v(" from the left navigation")]),e._v(" "),a("li",[e._v("Upload your file(s)")]),e._v(" "),a("li",[e._v("In the provided modal window select the "),a("code",[e._v("Group")]),e._v(" that you would like to own the asset")]),e._v(" "),a("li",[e._v("Only users with the assigned "),a("code",[e._v("Group")]),e._v(" will have the ability to view the asset you've created\n"),a("ul",[a("li",[e._v("The asset will only be available to content with the same "),a("code",[e._v("Group")]),e._v(" unless the attachment or image has been given a group of "),a("code",[e._v("Free Access")])])])])]),e._v(" "),a("h2",{attrs:{id:"freemarker-tags-and-consuming-protected-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freemarker-tags-and-consuming-protected-resources"}},[e._v("#")]),e._v(" Freemarker Tags and Consuming Protected Resources")]),e._v(" "),a("p",[e._v("The WCMS provides a set of freemarker tags to assist in consuming protected assets in widgets and pages. The "),a("RouterLink",{attrs:{to:"/v7.0/docs/reference/freemarker-tags/freemarker-core-tags.html#tag-ifauthorized"}},[e._v("if-authorized")]),e._v(" and "),a("RouterLink",{attrs:{to:"/v7.0/docs/reference/freemarker-tags/freemarker-core-tags.html#tag-nav"}},[e._v("tag-nav")]),e._v(" tags can help in rendering page lists and fetching assets.")],1),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/v7.0/docs/reference/freemarker-tags/freemarker-JACMS-tags.html#tag-content"}},[e._v("content")]),e._v(" and "),a("RouterLink",{attrs:{to:"/v7.0/docs/reference/freemarker-tags/freemarker-JACMS-tags.html#tag-contentlist"}},[e._v("content-list")]),e._v(" tags also provide the ability to fetch and render protected content and protected lists of content.")],1),e._v(" "),a("p",[e._v("Additionally, the  "),a("RouterLink",{attrs:{to:"/v7.0/docs/consume/entando-apis.html"}},[e._v("REST APIs")]),e._v(" allow clients to fetch protected pages and assets by group via query parameters. The content REST APIs also include the ability to filter by group and access level.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);