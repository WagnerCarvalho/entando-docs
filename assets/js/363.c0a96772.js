(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1224:function(e,a,t){"use strict";t.r(a);var n=t(32),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"manage-entando-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-entando-databases"}},[e._v("#")]),e._v(" Manage Entando Databases")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Entando’s Docker images currently support three different relational\ndatabase management systems: PostgreSQL, MySQL and Oracle. With\nPostgreSQL and MySQL, by default, Entando’s will automatically create a\nKubernetes Deployment hosting the database management systems. However,\nfor Oracle, and also for other scenarios that may require it, Entando\nsupports connectivity to existing external databases. This document\nprovides the user with the necessary information to decide how to manage\nEntando’s databases.")]),e._v(" "),t("h2",{attrs:{id:"lightweight-low-config-databases-with-postgresql-and-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightweight-low-config-databases-with-postgresql-and-mysql"}},[e._v("#")]),e._v(" Lightweight, low-config Databases with PostgreSQL and MySQL")]),e._v(" "),t("p",[e._v("When deploying Entando Custom Resources that require databases to a new\nNamespace, the default behavior for Entando is to create a Kubernetes\nDeployment. It uses the standard Openshift compliant images:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("centos/mysql-57-centos7 and")])]),e._v(" "),t("li",[t("p",[e._v("centos/postgresql-96-centos7)")])])]),e._v(" "),t("p",[e._v("This is a fairly low-configuration approach, as Entando will create and\ninitialize the databases transparently. Persistent data is stored on any\nPersistent Volume that meets our Persistent Volume Claim requirements.\nWhen an Entando Custom Resource is redeployed, the Persistent Volumes\nremain in tact. Since the subsequent data initialization is idempotent,\nthe supporting Deployments will scale up and behave as expected.")]),e._v(" "),t("p",[e._v("Generally our services encapsulate the database they use entirely, and\nprovide facilities to import and export the data without needing any\nknowledge of the internal workings of the underlying data store. For\nmost simple Entando Apps the database doesn’t grow too large and is\nfairly easy to manage. This state of affairs allowed us to keep our\ndatabases isolated from each other, thus allowing for isolated\ndeployments without needing complex coordination of database migration\nfor the different deployment pipelines.")]),e._v(" "),t("p",[e._v("It is worth noting that these database Deployments are not clustered.\nThe customer is therefore strongly advised to provide redundancy and\nclustering in the form of clustered storage. These database deployments\ndo specify a restartPolicy of 'Always', so in the event of a\nnon-corrupting failure, the database Pod should therefore restart in\nabout 30 seconds. This by no means offers the features of a full\ndatabase cluster, but may suffice for many scenarios.")]),e._v(" "),t("p",[e._v("However, in more advanced use cases, such as the use of our CMS\nfunctionality, this simplistic approach may not scale. And where there\nis a a centralized database admin team, or where there is a requirement\nto comply to strict organizational governance w.r.t. databases, this\napproach does result in a multitude of databases that may be difficult\nfor the database admin team to manage.")]),e._v(" "),t("h2",{attrs:{id:"existing-external-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#existing-external-databases"}},[e._v("#")]),e._v(" Existing External Databases")]),e._v(" "),t("p",[e._v("For this reason, Entando can also be configured to use an existing\ndatabase service provided by the customer. In these scenarios, the\ncustomer is expected to take responbility for the lower level database\noperations such as tablespace creation, permissions and clustering.\nEntando will however still be responsible for creating and populating\nthe tables, indices and foreing keys. Entando will also create all of\nthese in the appropriate table 'container' for the DBMS in question such\nas a schema (Oracle/PostgreSQL) or a database (MySQL). In order to\nachieve this, Entando installs a dedicated CustomResourceDefinition in\nKubernetes, called an 'EntandoDatabaseService'")]),e._v(" "),t("p",[e._v("The idea is for EntandoDatabaseService custom resources to be created in\nthe namespace the EntandoApps and EntandoPlugin that should use them\nwill be created. The EntandoDatabaseService is usually created along\nwith a secret that carries admin credentials to the database in\nquestion.")]),e._v(" "),t("h3",{attrs:{id:"structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),t("p",[e._v("The EntandoDatabaseService custom resource looks like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(" EntandoDatabaseService\nmetadata:\n  name: string, any K8S compliant name\n  namespace: string, the namespace this will be created in\nspec:\n  dbms: string, one of oracle, postgresql or mysql\n  host: string, either an ip address or hostname where the database service is hosted\n  port: integer, the port on which the database service is hosted\n  databaseName: string, the name of the database, only required for PostgreSQL and Oracle\n  secretName: the name of the Secret in the same namespace carrying admin credentials to the database service\n  tablespace: (Oracle only)  the tablespace to use to create the required schemas in\n  jdbcParameters: a map containing name-value pairs for any additional parameters required for the JDBC driver to connect to the database.\n")])])]),t("p",[e._v("The Secret that will provide the admin credentials, identified by the\nabove "),t("code",[e._v("secretName")]),e._v(" should look like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Secret:\n  name: string, any K8S compliant name\n  namespace: string, the namespace this will be created in\n  stringData:\n    username: string, name of an admin user that can create schemas and other users\n    password: string, password of the above user\n")])])]),t("h3",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),t("p",[e._v("In order for the EntandoApp and EntandoPlugin deployer to pick up the\ncorrect database service, the EntandoDatabaseService needs to be created\nBEFORE the EntandoApps and EntandoPlugins are created. There can be\nmultiple EntandoDatabaseServices in the namespace, but they need to\npoint to database services of different vendors, i.e. PostgreSQL, Oracle\nand MySQL. Entando currently cannot enforce any validation but if there\nare two EntandoDatabaseServices that have the same DBMS vendor, it will\nsimply pick the first one and continue. Please ensure that only one\nEntandoDatabaseService exists for each DBMS vendor you need to use.")]),e._v(" "),t("p",[e._v("Once the appropriate EntandoDatabaseServices have been created, any\nEntandoApp or EntandoPlugin that is created will have to specify the\nappropriate DBMS vendor in their "),t("code",[e._v("spec.dbms")]),e._v(" property. If the\nEntandoOperator detects an EntandoDatabaseService with a matching DBMS\nvendor, it will continue to create the necessary schemas on the specific\ndatabase. If the EntandoOperator does not detect an\nEntandoDatabaseService with a matching DBMS vendor, it will fall back\nonto its default behaviour which is to create a matching Deployment and\nspin up a database service from the same namespace. If the "),t("code",[e._v("spec.dbms")]),e._v("\nproperty is not specified on an EntandoApp, the EntandoOperator will\ndefault to PostgreSQL. If the "),t("code",[e._v("spec.dbms")]),e._v(" property is not specified on\nan EntandoPlugin, the EntandoOperator will assume that the EntandoPlugin\nin question does not require a database and hence bypass any database\nand schema creation.")]),e._v(" "),t("p",[e._v("When the EntandoOperator processes your Entandoapp or EntandoPlugin with\nan appropriate "),t("code",[e._v("spec.dbms")]),e._v(" specified, it will create a Schema/User pair\nfor each datasource required. A typical EntandoApp deployment requires 3\ndatasources (portdb,servdb and dedb). Plugins generally only require one\ndatasource (plugindb).")]),e._v(" "),t("p",[e._v("The database schema and user created will have the same name. The name\nis derived from the name of the EntandoPlugin or EntandoApp by replacing\nall characters that are not ANSI-SQL compliant with an underscore. The\ndatasource name is then suffixed to the schema name. When defining the\nname of your app or plugin, please keep in mind that some DBMS vendors\ndo not support long schema names. Future versions of Entando will allow\nyou to override the schema prefix for an app or plugin, but for now this\nis a limitation one has to keep in mind.")]),e._v(" "),t("h3",{attrs:{id:"keeping-track-of-credentials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keeping-track-of-credentials"}},[e._v("#")]),e._v(" Keeping track of credentials")]),e._v(" "),t("p",[e._v('The EntandoOperator generates a Kubernetes Secret for each schema/user\ncombination it creates. The name of this secret is the concatenation of\nthe name of the EntandoApp or EntandoPlugin, the datasource qualifier\nand then the suffix "-secret". For instance, for an EntandoApp called\n"my-app" the "portdb" datasource will have a corresponding Kubernetes\nSecret called "my-app-portdb-secret". The EntandoOperator will never\noverwrite or update an existing database secret. We generate a random\nstring for the password which is generally considered the safest\napproach. If you do however wish to change the password in for the\nresulting user, please remember to update the password on the Kubernetes\nSecret too. Such an operation is however error prone and could result in\nsubsequent deployments failing.')]),e._v(" "),t("p",[e._v("The EntandoOperator’s schema creation logic is idempotent. If it\ntherefore finds that the generated schema/user combination found in the\nassociated Kuberentes Secret already exists, it won’t do anything.\nHowever, it will attempt to log in, and if it fails to log in, it will\nattempt to create the user. If the user already exists, but with a\ndifferent password than the one in the Kubernetes Secret, all subsequent\ndeployment operations will fail.")]),e._v(" "),t("h2",{attrs:{id:"vendor-specific-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vendor-specific-notes"}},[e._v("#")]),e._v(" Vendor specific notes")]),e._v(" "),t("h3",{attrs:{id:"oracle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[e._v("#")]),e._v(" Oracle")]),e._v(" "),t("h4",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  EntandoDatabaseService\n    metadata:\n      name:oracle-service\n    spec:\n      dbms: oracle\n      host: 10.0.0.13\n      port: 1521\n      databaseName: ORCLPDB1.localdomain\n      secretName: oracle-secret\n      tablespace: entando_ts\n      jdbcParameters: {}\n  Secret:\n    metadata:\n      name: oracle-secret\n    stringData:\n      username: admin\n      password: admin123\n")])])]),t("h4",{attrs:{id:"resulting-connection-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resulting-connection-string"}},[e._v("#")]),e._v(" Resulting connection string:")]),e._v(" "),t("p",[e._v("jdbc:oracle:thin:@//10.0.0.13:1521/ORCLPDB1.localdomain")]),e._v(" "),t("h3",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("Oracle has some rather complicated rules in building the correct\nconnection string. Please note that for the sake of portability and\nlightweight image we are limited to the thin driver. The "),t("code",[e._v("databaseName")]),e._v("\ncould also be an Oracle service as opposed to an Oracle "),t("code",[e._v("SID")]),e._v(". Please\ncoordinate with your Oracle DB Admin to determine exactly what value to\nuse here. We strongly recommend testing your settings with some code or\na tool that constructs JDBC connection.")]),e._v(" "),t("p",[e._v("When the EntandoOperator prepares the schemas for your EntandoApp or\nEntandoPlugin, it will create a user for every datasource required, and\nas is standard behaviour for Oracle, that user will have its own schema\nwith the same name. Permissions are set up to ensure that one user\ncannot access tables from another user’s schema. Please note that Oracle\nlimits schema names to 30 characters. If you intend to use Oracle,\nplease keep the name of your apps and plugins short enough. The suffixes\nthat we append to the app or plugin name to ensure the resulting schema\nname is unique are usually shorter than 8 characters, so names of about\n20 characters should be safe.")]),e._v(" "),t("p",[e._v("You can specify which tablespace Entando should use to create the\nschemas in using the "),t("code",[e._v("spec.tablespace")]),e._v(" property")]),e._v(" "),t("h4",{attrs:{id:"ora-01704-string-literal-too-long"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ora-01704-string-literal-too-long"}},[e._v("#")]),e._v(" ORA-01704: string literal too long")]),e._v(" "),t("p",[e._v("Entando requires extended datatypes to be activated in Oracle 12c and\nhigher\n("),t("a",{attrs:{href:"https://oracle-base.com/articles/12c/extended-data-types-12cR1",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://oracle-base.com/articles/12c/extended-data-types-12cR1"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("h3",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySQL")]),e._v(" "),t("h4",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('EntandoDatabaseService\n  metadata:\n    name:mysql-service\n  spec:\n    dbms: mysql\n    host: 10.0.0.13\n    port: 3306\n    databaseName:\n    secretName: mysql-secret\n    jdbcParameters:\n       useSSL: "true"\nSecret:\n  metadata:\n    name: mysql-secret\n  stringData:\n    username: admin\n    password: admin123\n')])])]),t("h3",{attrs:{id:"resulting-connection-string-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resulting-connection-string-2"}},[e._v("#")]),e._v(" Resulting Connection String")]),e._v(" "),t("p",[e._v("jdbc:mysql://10.0.0.13:3306")]),e._v(" "),t("h3",{attrs:{id:"notes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes-2"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("MySQL doesn’t really support schemas, or more accurately, it doesn’t\ndistinguish between schemas and databases. For this reason, no\ndatabaseName is required. The EntandoOperator will therefore create an\nentirely new database for each datasource your EntandoApp or\nEntandoPlugin requires. It will also create a user with the same name as\nthe database with permission set up to ensure one user cannot access the\ndatabase of another user. Please note that MySQL limits database names\nto 63 characters. Keep this in mind when defining the names of your\nEntandoApps and EntandoPlugins")]),e._v(" "),t("h3",{attrs:{id:"postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[e._v("#")]),e._v(" PostgreSQL")]),e._v(" "),t("h4",{attrs:{id:"example-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  EntandoDatabaseService\n    metadata:\n      name:postgresql-service\n    spec:\n      dbms: postgresql\n      host: 10.0.0.13\n      port: 5432\n      databaseName: my_db\n      secretName: postgresql-secret\n      jdbcParameters: {}\n\n  Secret:\n    metadata:\n      name: postgresql-secret\n    stringData:\n      username: admin\n      password: admin123\n")])])]),t("h4",{attrs:{id:"resulting-connection-string-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resulting-connection-string-3"}},[e._v("#")]),e._v(" Resulting Connection String")]),e._v(" "),t("p",[e._v("jdbc:postgresql://10.0.0.13:5432/my_db")]),e._v(" "),t("h4",{attrs:{id:"notes-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes-3"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("p",[e._v("PostgreSQL behaves very similar to Oracle when it comes to how it\nassociates a user with its own schema. The current username is used as a\ndefault schema/prefix to resolve tables. As with Oracle, Entando ensures\nthat two users don’t have access to each other’s schemas.")]),e._v(" "),t("h2",{attrs:{id:"skipping-database-preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skipping-database-preparation"}},[e._v("#")]),e._v(" Skipping database preparation")]),e._v(" "),t("p",[e._v("When an Entando App is being deployed, there is an operator responsible for the entire deployment process. It takes care also of DB creation and preparation.\nIf you have an already prepared DB (schemas, tables, and all other stuff), you could skip schemas creation and DB preparation of the EntandoApp in order to speed up the deploy process.")]),e._v(" "),t("p",[e._v("You can achieve this by specifying some properties for the EntandoApp component present in the helm generated file. Look at "),t("a",{attrs:{href:"https://github.com/entando-k8s/entando-helm-quickstart",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),t("OutboundLink")],1),e._v(" for more info.")]),e._v(" "),t("p",[e._v("For "),t("code",[e._v("spec.dbms")]),e._v(" property you should choose "),t("code",[e._v("none")]),e._v(", then you should add all needed DB connection parameters.\nAfter updating parameters with the one you need, you should end with a yaml like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('- kind: "EntandoApp"\n  metadata:\n    annotations: {}\n    labels: {}\n    name: "example-qs"\n  spec:\n    dbms: "none"\n    replicas: 1\n    standardServerImage: wildfly\n    ingressPath: /entando-de-app\n    environmentVariables:\n      - name: SPRING_DATASOURCE_USERNAME\n        value: admin\n      - name: SPRING_DATASOURCE_PASSWORD\n        value: adminadmin\n      - name: SPRING_DATASOURCE_URL\n        value: "jdbc:postgresql://192.168.1.82:5432/testdb?currentSchema=admin_qs_dedb"\n      - name: SPRING_JPA_DATABASE_PLATFORM\n        value: org.hibernate.dialect.PostgreSQLDialect\n      - name: PORTDB_URL\n        value: "jdbc:postgresql://192.168.1.82:5432/testdb?currentSchema=admin_qs_portdb"\n      - name: PORTDB_USERNAME\n        value: admin\n      - name: PORTDB_PASSWORD\n        value: adminadmin\n      - name: PORTDB_CONNECTION_CHECKER\n        value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker\n      - name: PORTDB_EXCEPTION_SORTER\n        value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter\n      - name: SERVDB_URL\n        value: "jdbc:postgresql://192.168.1.82:5432/testdb?currentSchema=admin_qs_servdb"\n      - name: SERVDB_USERNAME\n        value: admin\n      - name: SERVDB_PASSWORD\n        value: adminadmin\n      - name: SERVDB_CONNECTION_CHECKER\n        value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLValidConnectionChecker\n      - name: SERVDB_EXCEPTION_SORTER\n        value: org.jboss.jca.adapters.jdbc.extensions.postgres.PostgreSQLExceptionSorter\n')])])]),t("h3",{attrs:{id:"how-it-works-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works-2"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),t("p",[e._v("Using "),t("code",[e._v('spec.dbms: "none"')]),e._v(" will cause the operator to skip that initial schema/user creation step entirely.\nThen adding those variables under the "),t("code",[e._v("spec.environmentVariables")]),e._v(" section will supply connection parameters that will be used by EntandoApp.\nKeep in mind that all these parameters will be applied to each of the containers in the EntandoApp pod and that they will also override existing values.")])])}),[],!1,null,null,null);a.default=s.exports}}]);