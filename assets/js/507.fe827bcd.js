(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{1447:function(e,t,n){"use strict";n.r(t);var o=n(32),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"pda-plugin-technical-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pda-plugin-technical-guide"}},[e._v("#")]),e._v(" PDA Plugin Technical Guide")]),e._v(" "),n("p",[e._v("This page explores PDA plugin structure and functionality in greater detail. The sample code and linked resources instruct the user in the versatility and usability of:")]),e._v(" "),n("ul",[n("li",[e._v("Task Forms")]),e._v(" "),n("li",[e._v("Widgets")]),e._v(" "),n("li",[e._v("Code Style")]),e._v(" "),n("li",[e._v("Sonar")])]),e._v(" "),n("h2",{attrs:{id:"task-forms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#task-forms"}},[e._v("#")]),e._v(" Task Forms")]),e._v(" "),n("p",[e._v("Widgets employ JSON schema to dynamically create any forms they contain. The JSON schemas are converted into React components using the "),n("code",[e._v("react-jsonshema-form")]),e._v(" library. Entando's initial implementation utilizes Material UI components derived from the Material UI theme library ("),n("code",[e._v("rjsf-material-ui")]),e._v(") as a baseline, and includes templates, widgets and fields ("),n("code",[e._v("react-jsonshema-form")]),e._v(" terms for forms components) that are specific to Entando.")]),e._v(" "),n("p",[e._v("This section will introduce the basic form configuration, but if you would like to learn more, please refer to the "),n("code",[e._v("react-jsonshema-form")]),e._v(" "),n("a",{attrs:{href:"https://react-jsonschema-form.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The themed JSON Form is created using the "),n("code",[e._v("withTheme()")]),e._v(" method from the "),n("code",[e._v("react-jsonschema-form")]),e._v(" package:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import { withTheme } from 'react-jsonschema-form';\nimport { Theme as MuiRJSForm } from 'rjsf-material-ui';\n\nconst JSONForm = props => {\n\n  const ThemedForm = withTheme(MuiRJSForm);\n\n  // ...\n\n  return (\n    <ThemedForm\n    schema={formSchema}\n    uiSchema={uiSchema}\n    {...customTemplates}\n    widgets={customWidgets}\n    formData={formData}\n    onSubmit={e => onSubmitForm(e)}\n    >\n  );\n};\n\nexport default JSONForm;\n")])])]),n("p",[e._v("A form schema provides the JSON definition of the form’s structure and is mandatory for a JSON Form to function. Users can supply form data via the "),n("code",[e._v("formData")]),e._v(" variable, which should follow the structure of JSON schema. UI schema can be supplied via the "),n("code",[e._v("uiSchema")]),e._v(" variable, which allows users to customize the form’s UI (e.g. components, rules, types).")]),e._v(" "),n("p",[e._v("You can test the JSON schema, UI schema and form data in the "),n("code",[e._v("react-jsonschema-form")]),e._v(" sandbox environment. Entando templates, widgets, and fields allow customization of form layout using Grid components. The size parameter in the UI schema’s "),n("code",[e._v("ui:options")]),e._v(" object specifies the fill area of a field or subform.")]),e._v(" "),n("p",[e._v("Size refers to the Material UI’s grid column widths (see the Material UI documentation), where the area the form can occupy is divided into 12 columns. A value of 12 (the default value if size is not provided) means the field or subform should take up all 12 columns. If two adjacent fields have size values of 8 and 4, respectively, they will share one row and the first field will be twice as wide as the second.")]),e._v(" "),n("p",[e._v("In addition, the user can provide an innerSize parameter to scale the input fields inside the columns. This helps with formatting when a user wants to make nonuniform adjustments to sizing.")]),e._v(" "),n("p",[e._v("Multicolumn layout can also be achieved via "),n("code",[e._v("generateColumnedOFT")]),e._v(" ("),n("code",[e._v("columnSize")]),e._v(") functionality, which assigns the default "),n("code",[e._v("columnSize")]),e._v(" to the created form. The function "),n("code",[e._v("generateColumnedOFT")]),e._v(" returns an "),n("code",[e._v("ObjectFieldTemplate")]),e._v(" that is used as a template for all object fields (fields that contain properties).")]),e._v(" "),n("p",[e._v("To explain the mapping between JSON schema and UI schema let's define an example\nschema:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "http://entando.org/schemas/pda-form.json",\n  "title": "Mortgage Application Form",\n  "type": "object",\n  "properties": {\n    "Application": {\n      "title": "Application",\n    "type": "object",\n    "required": [],\n    "properties": {\n        "mortgageamount": {\n          "type": "integer",\n          "title": "Mortgage amount",\n          "description": "Mortgage amount"\n        },\n        "downpayment": {\n          "type": "integer",\n          "title": "Down Payment",\n          "description": "Down Payment"\n        },\n        "applicant": {\n          "title": "Applicant",\n          "type": "object",\n          "required": [],\n          "properties": {\n            "name": {\n              "type": "string",\n              "title": "Name",\n              "description": "Name",\n              "maxLength": 100\n            },\n            "annualincome": {\n              "type": "integer",\n              "title": "Annual Income",\n              "description": "Annual Income"\n            }\n          }\n        },\n        "property": {\n          "title": "Property",\n          "type": "object",\n          "required": [],\n          "properties": {\n            "age": {\n              "type": "integer",\n              "title": "Age of property",\n              "description": "Age of property"\n            },\n            "address": {\n              "type": "string",\n              "title": "Address of property",\n              "description": "Address of property",\n              "maxLength": 100\n                }\n          }\n        }\n      }\n    },\n    "inlimit": {\n      "type": "boolean",\n    "title": "Is mortgage application in limit?"\n    }\n  }\n}\n')])])]),n("p",[e._v("From this JSON (you can copy & paste it into the "),n("code",[e._v("react-jsonschema-form")]),e._v('\nsandbox) we can see that there is a main form with a title “Mortgage\nApplication Form." The root form '),n("code",[e._v("Mortgage Application Form")]),e._v(" has two\nproperties: one is a subform called "),n("code",[e._v("Application")]),e._v(" and the other is a\ncheckbox field (field ID is "),n("code",[e._v("inlimit")]),e._v(").")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("Application")]),e._v(" subform contains two fields: "),n("code",[e._v("Mortgage Amount")]),e._v(" with field ID "),n("code",[e._v("mortgageamount")]),e._v(" and "),n("code",[e._v("Down Payment")]),e._v(" with field ID "),n("code",[e._v("downpayment")]),e._v(". It also contains two subforms: "),n("code",[e._v("Applicant")]),e._v(" with field ID "),n("code",[e._v("applicant")]),e._v(" and "),n("code",[e._v("Property")]),e._v(" with field ID "),n("code",[e._v("property")]),e._v(".")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("Applicant")]),e._v(" subform contains two fields: "),n("code",[e._v("Name")]),e._v(" with field ID "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("Annual Income")]),e._v(" with field ID "),n("code",[e._v("annualincome")]),e._v(". The "),n("code",[e._v("Property")]),e._v(" subform also contains two fields: "),n("code",[e._v("Age of property")]),e._v(" with field ID "),n("code",[e._v("age")]),e._v(" and "),n("code",[e._v("Address of property")]),e._v(" with field ID "),n("code",[e._v("address")]),e._v(".")]),e._v(" "),n("p",[e._v("By default (without providing UI schema), these are listed as one field per row. To use Entando’s implementation of Grid layout, users have to\nprovide UI schema with details about each field. For example, if we\nwould like to have a layout that looks like this (fields are marked\n"),n("code",[e._v("[ field name ]")]),e._v("):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("+----------------------------------------------------------------------------+\n| Mortgage Application Form                                                  |\n+----------------------------------------------------------------------------+\n| Application                                                                |\n+----------------------------------+-----------------------------------------+\n| [Mortgage amount]                | [Down Payment]                          |\n+----------------------------------+-----------------+-----------------------+\n| Applicant                                          | Property              |\n+----------------------------------+-----------------+-----------------------+\n| [Name]                           | [Annual Income] | [Age of property]     |\n+----------------------------------+-----------------+-----------------------+\n|                                                    | [Address of property] |\n+----------------------------------------------------+-----------------------+\n")])])]),n("p",[e._v("To set up the UI schema, you need to use field IDs to define each field you want to customize. For example, to add options to the "),n("code",[e._v("Name")]),e._v(" field, create an object tree beginning at the root: "),n("code",[e._v("Application")]),e._v(" —> "),n("code",[e._v("Applicant")]),e._v(" —> "),n("code",[e._v("Name")]),e._v(" (equivalent to "),n("code",[e._v("Application.Applicant.Name")]),e._v("). The UI schema for the table layout defined above looks like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("{\n  Application: {\n    'ui:options': {\n      size: 12, // <-- this value is not mandatory; size is 12  columns wide by default\n    },\n    mortgageamount: {\n      'ui:disabled': true, // <-- user can define fields disabled at UI schema level\n      'ui:options': {\n        size: 6, // <-- Mortgage Amount field should take up half of the row\n      },\n    },\n    downpayment: {\n      'ui:options': {\n         size: 4, // <-- Down Payment field should take up the other half of the row\n       },\n    },\n    applicant: {\n      'ui:options': {\n         size: 8, // <-- Applicant subform should take up 8 out of 12 columns\n      },\n      name: {\n        'ui:options': {\n          size: 8, // <-- Applicant Name field should take up 8 of the 8 columns that Applicant subform occupies\n        },\n      },\n      annualincome: {\n        'ui:options': {\n           size: 4, // <-- Annual Income field should take up the remaining 4 columns\n        },\n      },\n    },\n     property: {\n      'ui:options': {\n        size: 4, // <-- Property subform should take up the remaining 4 out of 12 columns\n      },\n      // note that Property field occupancy is not specified, defaulting to use all 12 of the columns available\n    },\n  },\n};\n")])])]),n("p",[e._v("As Material UI components are used for field templates, there might be a need to pass some Material UI options into the field. This can be done by adding the "),n("code",[e._v("muiProps")]),e._v(" object to "),n("code",[e._v("ui:options")]),e._v(".")]),e._v(" "),n("p",[e._v("For example, if you would like to make the down payment field resizable, you can add "),n("code",[e._v("multiline: true")]),e._v(" to the "),n("code",[e._v("muiProps")]),e._v(" option. If you want the field to take up multiple rows by default, add the fields "),n("code",[e._v("rows")]),e._v(" and "),n("code",[e._v("rowsMax")]),e._v(". The latter limits how many rows can be added until the scroll bar is shown.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("downpayment: {\n  'ui:options': {\n    size: 4,\n    muiProps: {\n      multiline: true,\n      rows: 2,\n      rowsMax: 4\n    }\n  }\n}\n")])])]),n("h2",{attrs:{id:"widgets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[e._v("#")]),e._v(" Widgets")]),e._v(" "),n("p",[e._v("Different types of widgets can be applied by passing the type via\n"),n("code",[e._v("ui:widget")]),e._v(". This property specifies the widget to use when the form\nrenders a UI field. See the documentation to learn about widgets supported by the "),n("code",[e._v("react-jsonschema-form")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"code-style"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-style"}},[e._v("#")]),e._v(" Code Style")]),e._v(" "),n("p",[e._v("Refer to: "),n("a",{attrs:{href:"https://github.com/entando/entando-code-style",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-code-style"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"sonar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonar"}},[e._v("#")]),e._v(" Sonar")]),e._v(" "),n("p",[e._v("Refer to: "),n("a",{attrs:{href:"https://sonarcloud.io/organizations/entando/projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://sonarcloud.io/organizations/entando/projects"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);