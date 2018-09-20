(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{167:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"chapter-3-generating-a-database-backed-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-3-generating-a-database-backed-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Chapter 3. Generating a Database-backed API")]),e._v(" "),a("p",[e._v("DreamFactory's capabilities are vast, however there is no more popular feature than its ability to generate a database-backed REST API. By embracing this automated approach, development teams can shave weeks if not months off the development cycle, and in doing so greatly reduce the likelihood of bugs or security issues due to mishaps such as SQL injection. This approach doesn't come at the cost of trade offs either, because DreamFactory's database-backed APIs are fully-featured REST interfaces, offering comprehensive CRUD (create, retrieve, update, delete) capabilities, endpoints for executing stored procedures, and even endpoints for managing the schema.")]),e._v(" "),a("p",[e._v("In this chapter you'll learn all about DreamFactory's database support by way of an introduction to the following topics:")]),e._v(" "),a("ul",[a("li",[e._v("Generating a new database-backed REST API")]),e._v(" "),a("li",[e._v("Interacting with the auto-generated Swagger documentation")]),e._v(" "),a("li",[e._v("Securing API access to your API using API keys and roles")])]),e._v(" "),a("p",[e._v("We chose MySQL as the basis for examples found throughout the chapter, because it is free, ubiquitously available on hosting providers and cloud environments, and can otherwise be easily installed on all operating systems. Therefore to follow along with this chapter you'll need:")]),e._v(" "),a("ul",[a("li",[e._v("Access to a DreamFactory instance and a MySQL database.")]),e._v(" "),a("li",[e._v("If your MySQL database is running somewhere other than your laptop, you'll need to make sure your firewall is configured to allow traffic between port 3306 and the location where your DreamFactory instance is running.")]),e._v(" "),a("li",[e._v("A MySQL user account configured in such a way that it can connect to your MySQL server from the DreamFactory instance's IP address.")])]),e._v(" "),a("p",[e._v("Before we begin, keep in mind MySQL is just one of DreamFactory supported 18 databases. The following table presents a complete list of what's supported:")]),e._v(" "),a("p",[e._v("TABLE HERE")]),e._v(" "),a("p",[e._v("Best of all, thanks to DreamFactory's unified interface and API generation solution, everything you learn in this chapter applies identically to your chosen database! So if you already plan on using another database, then by all means feel free to follow along using it instead!")]),e._v(" "),a("h2",{attrs:{id:"generating-a-mysql-backed-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-mysql-backed-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Generating a MySQL-backed API")]),e._v(" "),a("p",[e._v("To generate a MySQL-backed API, login to your DreamFactory instance using an administrator account and click on the Services tab:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/navbar-services.png",alt:"The Services Tab"}})]),e._v(" "),a("p",[e._v("On the left side of the interface you'll see the "),a("code",[e._v("Create")]),e._v(" button. Click this button to begin generating an API. You'll be presented with a single dropdown form control titled "),a("code",[e._v("Select Service Type")]),e._v(". You'll use this dropdown to both generate new APIs and configure additional authentication options. There's a lot to review in this menu, but for the moment let's stay on track and just navigate to "),a("code",[e._v("Databases")]),e._v(" and then "),a("code",[e._v("MySQL")]),e._v(":")]),e._v(" "),a("img",{attrs:{src:"/images/service-create-mysql.png",width:"1000"}}),e._v(" "),a("p",[e._v("After selecting MySQL, you'll be presented with the following form:")]),e._v(" "),a("img",{attrs:{src:"/images/services-overview.png",width:"1000"}}),e._v(" "),a("p",[e._v("Let's review these fields:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Name")]),e._v(": The name will form part of your API URL, so you'll want to use a lowercase string with no spaces or special characters. Further, you'll want to typically choose something which allows you to easily identify the API's purpose. For instance for your MySQL-backed API you might choose a name such as "),a("code",[e._v("mysql")]),e._v(", "),a("code",[e._v("corporate")]),e._v(", or "),a("code",[e._v("store")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Label")]),e._v(': The label is used for referential purposes within the administration interface and system-related API responses. You can use something less terse here, such as "MySQL-backed Corporate Database API".')]),e._v(" "),a("li",[a("strong",[e._v("Description")]),e._v(": Like the label, the description is used for referential purposes within the administration interface and system-related API responses.")]),e._v(" "),a("li",[a("strong",[e._v("Active")]),e._v(": This determines whether the API is active. By default it is set to active however if you're not yet ready to begin using the API or would like to later temporarily disable it, just return to this screen and toggle the checkbox.")])]),e._v(" "),a("p",[e._v("After completing these fields, click on the "),a("code",[e._v("Config")]),e._v(" tab located at the top of the interface. You'll be presented with the following form (I'll only present the top of the form since this one is fairly long):")]),e._v(" "),a("img",{attrs:{src:"/images/services-config.png",width:"1000"}}),e._v(" "),a("p",[e._v("This form might look a bit intimidating at first, however in most cases there are only a few fields you'll need to complete. Let's cover those first, followed by an overview of the optional fields.")]),e._v(" "),a("h3",{attrs:{id:"required-configuration-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required-configuration-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Required Configuration Fields")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Host")]),e._v(":")]),e._v(" "),a("li",[a("strong",[e._v("Port Number")]),e._v(":")]),e._v(" "),a("li",[a("strong",[e._v("Database")]),e._v(":")]),e._v(" "),a("li",[a("strong",[e._v("Username")]),e._v(":")]),e._v(" "),a("li",[a("strong",[e._v("Password")])])]),e._v(" "),a("p",[e._v("W> Keep in mind you'll be generating an API which can in\nW> fact interact with the underlying database! While perhaps\nW> obvious, once you generate this API it means any data or\nW> schema manipulation requests you subsequently issue will\nW> in fact affect your database. Therefore be sure to connect\nW> to a test database when first experimenting with DreamFactory\nW> so you don't wind up issuing a request that you later come to regret.")]),e._v(" "),a("h3",{attrs:{id:"optional-configuration-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-configuration-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Optional Configuration Fields")]),e._v(" "),a("p",[e._v("Following the required fields you'll find a number of optional parameters. These can and do vary slightly according to the type of database you've selected, so don't be surprised if you see some variation below. Don't worry about this too much at the moment, because chances are you're not going to need to modify any of the optional configuration fields at this point in time. However we'd like to identify a few fields which are used more often than others:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Schema")]),e._v(":")]),e._v(" "),a("li",[a("strong",[e._v("Data Retrieval Caching Enabled")]),e._v(":")]),e._v(" "),a("li",[a("strong",[e._v("Cache Time to Live (minutes)")]),e._v(":")])]),e._v(" "),a("p",[e._v("After completing the required fields in addition to any desired optional fields, press the "),a("code",[e._v("Save")]),e._v(" button to generate your API. After a moment you'll see a pop up message indicating "),a("code",[e._v("TODO")]),e._v(". Congratulations you've just generated your first database-backed API! So what can you do with this shiny new toy? Read on to learn more.")]),e._v(" "),a("h3",{attrs:{id:"a-note-about-api-capabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-note-about-api-capabilities","aria-hidden":"true"}},[e._v("#")]),e._v(" A Note About API Capabilities")]),e._v(" "),a("p",[e._v("Most databases employ a user authorization system which gives administrators the ability to determine exactly what a user can do after successfully establishing a connection. In the case of MySQL, "),a("em",[e._v("privileges")]),e._v(" are used for this purpose. Administrators can grant and revoke user privileges, and in doing so determine what databases a user can connect to, whether the user can create, retrieve, update, and delete records, and whether the user has the ability to manage the schema.")]),e._v(" "),a("p",[e._v("Because DreamFactory connects to your database on behalf of this user, the resulting API is logically constrained by that user's authorized capabilities. DreamFactory will however display a complete set of Swagger documentation regardless, so if you are attempting to interact with the API via the Swagger docs or via any other client and aren't obtaining the desired outcome, be sure to check your database user permissions to confirm the user can indeed carry out the desired task.")]),e._v(" "),a("p",[e._v("Further, keep in mind this can serve as an excellent way to further lock down your API. Although as you'll later learn DreamFactory offers some excellent security-related features for restricting API access, it certainly wouldn't hurt to additionally configure the connecting database user's privileges to reflect the desired API capabilities. For instance, if you intend for the API to be read-only, then create a database user with read-only authorization. If API read and create capabilities are desired, then configure the user accordingly.")]),e._v(" "),a("h2",{attrs:{id:"interacting-with-your-api-via-the-api-docs-tab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-your-api-via-the-api-docs-tab","aria-hidden":"true"}},[e._v("#")]),e._v(" Interacting with Your API via the API Docs Tab")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TODO")]),e._v(" message which appears following successful generation of a new REST API is rather anticlimactic, because this simple message really doesn't convey exactly how much tedious work DreamFactory has just saved you and your team. Not only did it generate a fully-featured REST API, but also secured it from unauthorized access and additionally generated interactive "),a("a",{attrs:{href:"TODO"}},[e._v("Swagger documentation")]),e._v(" for all of your endpoints! If you haven't used Swagger before, you're in for a treat because it's a really amazing tool which allows developers to get familiar with an API without being first required to write any code. Further, each endpoint is documented with details about both the input parameters and response.")]),e._v(" "),a("p",[e._v("To access your new API's documentation, click on the "),a("code",[e._v("API Docs")]),e._v(" tab located at the top of the screen:")]),e._v(" "),a("p",[e._v("INSERT API DOCS NAV BAR HIGHLIGHT HERE")]),e._v(" "),a("p",[e._v("You'll be presented with a list of all documentation associated with your DreamFactory instance. The "),a("code",[e._v("db")]),e._v(", "),a("code",[e._v("email")]),e._v(", "),a("code",[e._v("files")]),e._v(", "),a("code",[e._v("logs")]),e._v(", "),a("code",[e._v("system")]),e._v(", and "),a("code",[e._v("user")]),e._v(" documentation are automatically included with all DreamFactory instances, and can be very useful should you eventually desire to programmatically manage your instance. Let's just ignore those for now and focus on the newly generated database documentation. Click on the table row associated with this service to access the documentation. You'll be presented with a screen that looks like this:")]),e._v(" "),a("p",[e._v("DOCS SCREENSHOT, FADED AT BOTTOM")]),e._v(" "),a("p",[e._v("Scrolling through this list, you can see that quite a few API endpoints have been generated! If you generated an API for a database which supports stored procedures, towards the top you'll find endpoints named "),a("code",[e._v("TODO")]),e._v(" and "),a("code",[e._v("TODO")]),e._v(". Scrolling down, you'll encounter quite a few endpoints used to manage your schema, followed by a set of CRUD (create, retrieve, update, delete) endpoints which are undoubtedly the most commonly used of the bunch.")]),e._v(" "),a("h3",{attrs:{id:"querying-table-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying-table-records","aria-hidden":"true"}},[e._v("#")]),e._v(" Querying Table Records")]),e._v(" "),a("p",[e._v("Let's test the API by retrieving a set of table records. Select the "),a("code",[e._v("GET /_table/{table_name} Retrieve one or more records")]),e._v(" entry:")]),e._v(" "),a("p",[e._v("ENDPOINT LINE ITEM SCREENSHOT")]),e._v(" "),a("p",[e._v("A slideout window will open containing two sections. The first, "),a("code",[e._v("Parameters")]),e._v(", identifies the supported request parameters. The second, "),a("code",[e._v("Responses")]),e._v(", indicates what you can expect to receive by way of a response, including the status code and a JSON response template. In the case of the "),a("code",[e._v("GET _/table/{table_name}")]),e._v(" endpoint, you have quite a few parameters at your disposal, because this endpoint represents the primary way in which table data is queried. By manipulating these parameters you'll be able to query for all records, or a specific record according to its primary key, or a subset of records according to a particular condition. Further, you can use these parameters to perform other commonplace tasks such as grouping and counting records, and joining tables.")]),e._v(" "),a("p",[e._v("To test the endpoint, click the "),a("code",[e._v("Try it out")]),e._v(" button located on the right. When you do, the input parameter fields will be enabled, allowing you to enter values to modify the default query's behavior. For the moment we're going to modify just one parameter: "),a("code",[e._v("table_name")]),e._v(". It's located at the very bottom of the parameter list. Enter the name of a table you know exists in the database, and press the blue "),a("code",[e._v("Execute")]),e._v(" button. Below the button you'll see a \"Loading\" icon, and soon thereafter a list of records found in the designated table will be presented in JSON format. Here's an example of what I see when running this endpoint against our test MySQL database:")]),e._v(" "),a("p",[e._v("MYSQL DB TABLE RECORD OUTPUT")]),e._v(" "),a("p",[e._v("Congratulations! You've just successfully interacted with the database API by way of the Swagger documentation. If you don't see a list of records, be sure to confirm the following:")]),e._v(" "),a("ul",[a("li",[e._v("Does the specified table exist?")]),e._v(" "),a("li",[e._v("If you received a "),a("code",[e._v("500")]),e._v(" status code, check the service configuration credentials. The "),a("code",[e._v("500")]),e._v(" code almost certainly means DreamFactory was unable to connect to the database. If everything checks out, make sure you can connect to the database from the DreamFactory instance's IP address via the database port. If you can't then it's probably a firewall issue.")])]),e._v(" "),a("p",[e._v("The API Docs interface is fantastically useful for getting familiar with an API, and we encourage you to continue experimenting with the different endpoints to learn more about how it works. However, you'll eventually want to transition from interacting with your APIs via the API Docs interface to doing so using a third-party client, and ultimately by way of your own custom applications. So let's take that next step now, and interact with the new API using an HTTP client. In the last chapter you were introduced to a few such clients. We'll be using Insomnia for the following examples however there will be no material differences between Insomnia, Postman, or any other similar client.")]),e._v(" "),a("p",[e._v("But first we need to create an API key which will be used to exclusively access this database API. This is done by first creating a "),a("em",[e._v("role")]),e._v(" and then assigning the role to an "),a("em",[e._v("application")]),e._v(". Let's take care of this next.")]),e._v(" "),a("h2",{attrs:{id:"creating-a-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-role","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a Role")]),e._v(" "),a("p",[e._v("Over time your DreamFactory instance will likely manage multiple APIs. Chances are you're going to want to silo access to these APIs, creating one or several API keys for each. These API keys will be configured to allow access to one or some APIs, but in all likelihood not all of them. To accomplish this, you'll create a "),a("em",[e._v("role")]),e._v(" which is associated with one or more services, and then assign that role to an "),a("em",[e._v("application")]),e._v(". An application is just an easy way to connect an API key to a role.")]),e._v(" "),a("p",[e._v("To create a role, click on the "),a("code",[e._v("Roles")]),e._v(" tab located at the top of the screen:")]),e._v(" "),a("p",[e._v("INSERT ROLES NAV BAR HIGHLIGHT HERE")]),e._v(" "),a("p",[e._v("Presuming this is the first time you've created a role, you'll be prompted to create one as depicted in this screenshot:")]),e._v(" "),a("p",[e._v("TODO create-first-role.png")]),e._v(" "),a("p",[e._v("Click the "),a("code",[e._v("Create a Role!")]),e._v(" button and you'll be prompted to enter a role name and description. Unlike the service name, the role name is only used for human consumption so be sure to name it something descriptive such as "),a("code",[e._v("MySQL Role")]),e._v(". Next, click the "),a("code",[e._v("Access")]),e._v(" tab. Here you'll be prompted to identify the API(s) which should be associated with this service. The default interface looks like that presented in the below screenshot:")]),e._v(" "),a("p",[e._v("TODO roles-service-access-definition-form")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Service")]),e._v(" select box contains all of the APIs you've defined this far, including a few which are automatically included with each DreamFactory instance ("),a("code",[e._v("system")]),e._v(", "),a("code",[e._v("api_docs")]),e._v(", etc). Select the "),a("code",[e._v("mysql")]),e._v(" service. Now here's where things get really interesting. After selecting the "),a("code",[e._v("mysql")]),e._v(" service, click on the "),a("code",[e._v("Component")]),e._v(" select box. You'll see this select box contains a list of all assets exposed through this API! If you leave the "),a("code",[e._v("Component")]),e._v(" select box set to "),a("code",[e._v("*")]),e._v(", then the role will have access to all of the APIs assets. However, you're free to restrict the role's access to one or several assets by choosing for instance "),a("code",[e._v("_table/employees/*")]),e._v(". This would limit this role's access to "),a("em",[e._v("just")]),e._v(" performing CRUD operations on the "),a("code",[e._v("employees")]),e._v(" table! If you wanted to add access to another asset, or even to another service, just click the plus sign next to the "),a("code",[e._v("Advanced Filters")]),e._v(" header, and you'll see an additional row added to the interface:")]),e._v(" "),a("p",[e._v("TODO roles-service-access-definition-form-2.png")]),e._v(" "),a("p",[e._v("Use the new row to assign another service and/or already assigned service component to the role.")]),e._v(" "),a("h2",{attrs:{id:"querying-the-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying-the-database","aria-hidden":"true"}},[e._v("#")]),e._v(" Querying the Database")]),e._v(" "),a("h3",{attrs:{id:"retrieving-all-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-all-records","aria-hidden":"true"}},[e._v("#")]),e._v(" Retrieving All Records")]),e._v(" "),a("p",[e._v("Let's recreate the task of retrieving all records within the HTTP client. Open your client and in the address bar set the URL to "),a("code",[e._v("/api/v2/{service_name}/{table_name}")]),e._v(", replacing "),a("code",[e._v("{service_name}")]),e._v(" with the name of your API and "),a("code",[e._v("{table_name}")]),e._v(" with the name of a table found within the database. For the remainder of this chapter I'll use "),a("code",[e._v("mysql")]),e._v(" as the service name. Because we're retrieving records the method will be set to "),a("code",[e._v("GET")]),e._v(".")]),e._v(" "),a("p",[e._v("Next, we'll need to set the header which")]),e._v(" "),a("h3",{attrs:{id:"querying-by-primary-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying-by-primary-key","aria-hidden":"true"}},[e._v("#")]),e._v(" Querying by Primary Key")]),e._v(" "),a("h1",{attrs:{id:"launch-other-one-see-if-works-then-compare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-other-one-see-if-works-then-compare","aria-hidden":"true"}},[e._v("#")]),e._v(" ========================================================================\nLAUNCH OTHER ONE SEE IF WORKS. THEN COMPARE.")]),e._v(" "),a("p",[e._v("=======================")]),e._v(" "),a("p",[e._v("=-============")]),e._v(" "),a("h3",{attrs:{id:"adding-a-record-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-record-filter","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding a Record Filter")]),e._v(" "),a("h3",{attrs:{id:"grouping-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grouping-records","aria-hidden":"true"}},[e._v("#")]),e._v(" Grouping Records")]),e._v(" "),a("h3",{attrs:{id:"inserting-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inserting-records","aria-hidden":"true"}},[e._v("#")]),e._v(" Inserting Records")]),e._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),a("h3",{attrs:{id:"creating-a-new-record"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-record","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a New Record")]),e._v(" "),a("pre",[a("code",[e._v('{\n\t"resource": [\n\t\t{\n\t\t\t"dept_no": "d015",\n\t\t\t"dept_name": "Fruit Department"\n\t\t}\n\t]\n}\n')])]),e._v(" "),a("h4",{attrs:{id:"adding-records-to-multiple-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-records-to-multiple-tables","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding Records to Multiple Tables")]),e._v(" "),a("pre",[a("code",[e._v("CREATE TABLE `locations` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `supply_id` int(10) unsigned NOT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `supply_id` (`supply_id`),\n  CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`supply_id`) REFERENCES `supplies` (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;\n\n\nCREATE TABLE `supplies` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;\n")])]),e._v(" "),a("p",[e._v("Call /api/v2/mysql/_table/supplies")]),e._v(" "),a("pre",[a("code",[e._v('{\n    "resource": [\n        {\n            "name": "Broom",\n            "locations_by_supply_id": [\n                {    \n                    "name": "Broom Closet"\n                }\n            ]\n        }\n    ]\n}\n')])]),e._v(" "),a("p",[e._v("Response")]),e._v(" "),a("pre",[a("code",[e._v('{\n\t"resource": [\n\t\t{\n\t\t\t"id": 1\n\t\t}\n\t]\n}\n')])]),e._v(" "),a("h3",{attrs:{id:"updating-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-records","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating Records")]),e._v(" "),a("h4",{attrs:{id:"put"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put","aria-hidden":"true"}},[e._v("#")]),e._v(" PUT")]),e._v(" "),a("h4",{attrs:{id:"patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patch","aria-hidden":"true"}},[e._v("#")]),e._v(" PATCH")]),e._v(" "),a("h3",{attrs:{id:"deleting-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-records","aria-hidden":"true"}},[e._v("#")]),e._v(" Deleting Records")])])}],!1,null,null,null);r.options.__file="chapter03.md";t.default=r.exports}}]);