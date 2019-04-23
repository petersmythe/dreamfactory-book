(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{159:function(e,t,i){"use strict";i.r(t);var a=i(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"appendix-a-configuration-parameter-reference"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-configuration-parameter-reference","aria-hidden":"true"}},[e._v("#")]),e._v(" Appendix A: Configuration Parameter Reference")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("APP_CIPHER")]),e._v(": Database encryption cipher, options are AES-128-CBC or AES-256-CBC (default). Only change this if you are starting from a clean database")]),e._v(" "),i("li",[i("code",[e._v("APP_DEBUG")]),e._v(": When your application is in debug mode, detailed error messages with stack traces will be shown on every error that occurs within your application. If disabled, a simple generic error page is shown")]),e._v(" "),i("li",[i("code",[e._v("APP_ENV")]),e._v(": This may determine how various services behave in your application")]),e._v(" "),i("li",[i("code",[e._v("APP_KEY")]),e._v(": This key is used by the application for encryption and should be set to a random, 32 character string, otherwise these encrypted strings will not be safe. Use 'php artisan key:generate' to generate a new key. Please do this before deploying an application!")]),e._v(" "),i("li",[i("code",[e._v("APP_LOCALE")]),e._v(": The application locale determines the default locale that will be used by the translation service provider. Currently only 'en' (English) is supported")]),e._v(" "),i("li",[i("code",[e._v("APP_LOG")]),e._v(": This setting controls the placement and rotation of the log file used by the application")]),e._v(" "),i("li",[i("code",[e._v("APP_LOG_LEVEL")]),e._v(": The setting controls the amount and severity of the information logged by the application. This is hierarchical and goes in the following order: DEBUG -> INFO -> NOTICE -> WARNING -> ERROR -> CRITICAL -> ALERT -> EMERGENCY. If you set log level to WARNING then all WARNING, ERROR, CRITICAL, ALERT, and EMERGENCY will be logged. Setting log level to DEBUG will log everything. Default is WARNING\n['APP_NAME']=\"This value is used when the framework needs to place the application's name in a notification or any other location as required by the application or its packages")]),e._v(" "),i("li",[i("code",[e._v("APP_TIMEZONE")]),e._v(": Here you may specify the default timezone for your application, which will be used by the PHP date and date-time functions")]),e._v(" "),i("li",[i("code",[e._v("APP_URL")]),e._v(": This URL is used by the console to properly generate URLs when using the Artisan command line tool. You should set this to the root of your application so that it is used when running Artisan tasks")]),e._v(" "),i("li",[i("code",[e._v("DF_LANDING_PAGE")]),e._v(": This is the starting point (page, application, etc.) when a browser points to the server root URL")])]),e._v(" "),i("h2",{attrs:{id:"database-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#database-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Database settings")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("DB_CONNECTION")]),e._v(": This corresponds to the driver that will be supporting connections to the system database server")]),e._v(" "),i("li",[i("code",[e._v("DB_HOST")]),e._v(": The hostname or IP address of the system database server")]),e._v(" "),i("li",[i("code",[e._v("DB_PORT")]),e._v(": The connection port for the host given, or blank if the provider default is used")]),e._v(" "),i("li",[i("code",[e._v("DB_DATABASE")]),e._v(": The database name to connect to and where to place the system tables")]),e._v(" "),i("li",[i("code",[e._v("DB_USERNAME")]),e._v(": Credentials for the system database connection if required")]),e._v(" "),i("li",[i("code",[e._v("DB_PASSWORD")]),e._v(": Credentials for the system database connection if required")]),e._v(" "),i("li",[i("code",[e._v("DB_CHARSET")]),e._v(": The character set override if required. Defaults use utf8, except utf8mb4 for MySQL-based databases - may cause problems for pre-5.7.7 (MySQL) or pre-10.2.2 (MariaDB), if so, use utf8")]),e._v(" "),i("li",[i("code",[e._v("DB_COLLATION")]),e._v(": The character set collation override if required. Defaults use utf8_unicode_ci, except utf8mb4_unicode_ci for MySQL-based database - may cause problems for pre-5.7.7 (MySQL) or pre-10.2.2 (MariaDB), if so, use utf8_unicode_ci")]),e._v(" "),i("li",[i("code",[e._v("DB_MAX_RECORDS_RETURNED")]),e._v(": This is the default number of records to return at once for database queries")]),e._v(" "),i("li",[i("code",[e._v("DF_SQLITE_STORAGE")]),e._v(": This is the default location to store SQLite3 database files")])]),e._v(" "),i("h2",{attrs:{id:"freetds-configuration-linux-and-os-x-only"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#freetds-configuration-linux-and-os-x-only","aria-hidden":"true"}},[e._v("#")]),e._v(" FreeTDS configuration (Linux and OS X only)")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("DF_FREETDS_DUMP")]),e._v(": Enabling and location of dump file, defaults to disabled or default freetds.conf setting")]),e._v(" "),i("li",[i("code",[e._v("DF_FREETDS_DUMPCONFIG")]),e._v(": Location of connection dump file, defaults to disabled")])]),e._v(" "),i("h2",{attrs:{id:"cache"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cache","aria-hidden":"true"}},[e._v("#")]),e._v(" Cache")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("CACHE_DRIVER")]),e._v(": What type of driver or connection to use for cache storage")]),e._v(" "),i("li",[i("code",[e._v("CACHE_DEFAULT_TTL")]),e._v(": Default cache time-to-live, defaults to 300")]),e._v(" "),i("li",[i("code",[e._v("CACHE_PREFIX")]),e._v(": A prefix used for all cache written out from this installation")]),e._v(" "),i("li",[i("code",[e._v("CACHE_PATH")]),e._v(": The path to a folder where the system cache information will be stored")]),e._v(" "),i("li",[i("code",[e._v("CACHE_TABLE")]),e._v(": The database table name where cached information will be stored")]),e._v(" "),i("li",[i("code",[e._v("REDIS_CLIENT")]),e._v(": What type of php extension to use for Redis cache storage")]),e._v(" "),i("li",[i("code",[e._v("CACHE_HOST")]),e._v(": The hostname or IP address of the memcached or redis server")]),e._v(" "),i("li",[i("code",[e._v("CACHE_PORT")]),e._v(": The connection port for the host given, or blank if the provider default is used")]),e._v(" "),i("li",[i("code",[e._v("CACHE_USERNAME")]),e._v(": Credentials for the service if required")]),e._v(" "),i("li",[i("code",[e._v("CACHE_PASSWORD")]),e._v(": Credentials for the service if required")]),e._v(" "),i("li",[i("code",[e._v("CACHE_PERSISTENT_ID")]),e._v(": Memcached persistent ID setting")]),e._v(" "),i("li",[i("code",[e._v("CACHE_WEIGHT")]),e._v(": Memcached weight setting")]),e._v(" "),i("li",[i("code",[e._v("CACHE_DATABASE")]),e._v(": The desired Redis database number between 0 and 16 (or the limit set in your redis.conf file")])]),e._v(" "),i("h2",{attrs:{id:"limits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#limits","aria-hidden":"true"}},[e._v("#")]),e._v(" Limits")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("LIMIT_CACHE_DRIVER")]),e._v(": What type of driver or connection to use for limit cache storage")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_PREFIX")]),e._v(": A prefix used for all cache written out from this installation")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_PATH")]),e._v(": Path to a folder where limit tracking information will be stored")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_TABLE")]),e._v(": The database table name where limit tracking information will be stored")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_HOST")]),e._v(": The hostname or IP address of the redis server")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_PORT")]),e._v(": The connection port for the host given, or blank if the provider default is used")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_USERNAME")]),e._v(": Credentials for the service if required")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_PASSWORD")]),e._v(": Credentials for the service if required")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_PERSISTENT_ID")]),e._v(": Memcached persistent ID setting")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_WEIGHT")]),e._v(": Memcached weight setting")]),e._v(" "),i("li",[i("code",[e._v("LIMIT_CACHE_DATABASE")]),e._v(": The desired Redis database number between 0 and 16 (or the limit set in your redis.conf file")])]),e._v(" "),i("h2",{attrs:{id:"queuing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#queuing","aria-hidden":"true"}},[e._v("#")]),e._v(" Queuing")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("QUEUE_DRIVER")]),e._v(": What type of driver or connection to use for queuing jobs on the server")]),e._v(" "),i("li",[i("code",[e._v("QUEUE_NAME")]),e._v(": Name of the queue to use, defaults to 'default'")]),e._v(" "),i("li",[i("code",[e._v("QUEUE_RETRY_AFTER")]),e._v(": Number of seconds after to retry a failed job, defaults to 90")]),e._v(" "),i("li",[i("code",[e._v("QUEUE_TABLE")]),e._v(": The database table used to store the queued jobs")]),e._v(" "),i("li",[i("code",[e._v("QUEUE_HOST")]),e._v(": The hostname or IP address of the beanstalkd or redis server")]),e._v(" "),i("li",[i("code",[e._v("QUEUE_PORT")]),e._v(": The connection port for the host given, or blank if the provider default is used")]),e._v(" "),i("li",[i("code",[e._v("QUEUE_DATABASE")]),e._v(": The desired Redis database number between 0 and 16 (or the limit set in your redis.conf file")]),e._v(" "),i("li",[i("code",[e._v("QUEUE_PASSWORD")]),e._v(": Credentials for the service if required")]),e._v(" "),i("li",[i("code",[e._v("SQS_KEY")]),e._v(": AWS credentials")]),e._v(" "),i("li",[i("code",[e._v("SQS_SECRET")]),e._v(": AWS credentials")]),e._v(" "),i("li",[i("code",[e._v("SQS_REGION")]),e._v(": AWS storage region")]),e._v(" "),i("li",[i("code",[e._v("SQS_PREFIX")]),e._v(": AWS SQS specific prefix for queued jobs")])]),e._v(" "),i("h2",{attrs:{id:"event-broadcasting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-broadcasting","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Broadcasting")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("BROADCAST_DRIVER")]),e._v(": What type of driver or connection to use for broadcasting events from the server")]),e._v(" "),i("li",[i("code",[e._v("PUSHER_APP_ID")]),e._v(":")]),e._v(" "),i("li",[i("code",[e._v("PUSHER_APP_KEY")]),e._v(":")]),e._v(" "),i("li",[i("code",[e._v("PUSHER_APP_SECRET")]),e._v(":")]),e._v(" "),i("li",[i("code",[e._v("BROADCAST_HOST")]),e._v(": The hostname or IP address of the redis server")]),e._v(" "),i("li",[i("code",[e._v("BROADCAST_PORT")]),e._v(": The connection port for the host given, or blank if the provider default is used")]),e._v(" "),i("li",[i("code",[e._v("BROADCAST_DATABASE")]),e._v(": The desired Redis database number between 0 and 16 (or the limit set in your redis.conf file")]),e._v(" "),i("li",[i("code",[e._v("BROADCAST_PASSWORD")]),e._v(": Credentials for the service if required")])]),e._v(" "),i("h2",{attrs:{id:"user-management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#user-management","aria-hidden":"true"}},[e._v("#")]),e._v(" User Management")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("DF_LOGIN_ATTRIBUTE")]),e._v(": By default DreamFactory uses an email address for user authentication. You can change this to use username instead by setting this to 'username'")]),e._v(" "),i("li",[i("code",[e._v("DF_CONFIRM_CODE_LENGTH")]),e._v(": New user confirmation code length. Max/Default is 32. Minimum is 5")]),e._v(" "),i("li",[i("code",[e._v("DF_CONFIRM_CODE_TTL")]),e._v(": Confirmation code expiration. Default is 1440 minutes (24 hours)")]),e._v(" "),i("li",[i("code",[e._v("DF_ALLOW_FOREVER_SESSIONS")]),e._v(": false")]),e._v(" "),i("li",[i("code",[e._v("JWT_SECRET")]),e._v(": If a separate encryption salt is required for JSON Web Tokens, place it here. Defaults to the APP_KEY setting")]),e._v(" "),i("li",[i("code",[e._v("DF_JWT_TTL")]),e._v(": The time-to-live for JSON Web Tokens, i.e. how long each token will remain valid to use")]),e._v(" "),i("li",[i("code",[e._v("DF_JWT_REFRESH_TTL")]),e._v(": The time allowed in which a JSON Web Token can be refreshed from its origination")]),e._v(" "),i("li",[i("code",[e._v("DF_CONFIRM_RESET_URL")]),e._v(": Application path to where password resets are to be handled")]),e._v(" "),i("li",[i("code",[e._v("DF_CONFIRM_INVITE_URL")]),e._v(": Application path to where invited users are to be handled")]),e._v(" "),i("li",[i("code",[e._v("DF_CONFIRM_REGISTER_URL")]),e._v(": Application path to where user registrations are to be handled")])]),e._v(" "),i("h2",{attrs:{id:"server-side-scripting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#server-side-scripting","aria-hidden":"true"}},[e._v("#")]),e._v(" Server-side Scripting")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("DF_SCRIPTING_DISABLE")]),e._v(": To disable all server-side scripting set this to 'all', or comma-delimited list of v8js, nodejs, python, and/or php to disable individually")]),e._v(" "),i("li",[i("code",[e._v("DF_NODEJS_PATH")]),e._v(": The system will try to detect the executable path, but in some environments it is best to set the path to the installed Node.js executable")]),e._v(" "),i("li",[i("code",[e._v("DF_PYTHON_PATH")]),e._v(": The system will try to detect the executable path, but in some environments it is best to set the path to the installed Python executable")])]),e._v(" "),i("h2",{attrs:{id:"api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[e._v("#")]),e._v(" API")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("DF_API_ROUTE_PREFIX")]),e._v(": By default, API calls take the form of http://<server_name>/<api_route_prefix>/v<version_number>")]),e._v(" "),i("li",[i("code",[e._v("DF_STATUS_ROUTE_PREFIX")]),e._v(": By default, API calls take the form of http://<server_name>/[<status_route_prefix>/]status")]),e._v(" "),i("li",[i("code",[e._v("DF_STORAGE_ROUTE_PREFIX")]),e._v(": By default, API calls take the form of http://<server_name>/[<storage_route_prefix>/]<storage_service_name>/<file_path>")]),e._v(" "),i("li",[i("code",[e._v("DF_XML_ROOT")]),e._v(": XML root tag for HTTP responses")]),e._v(" "),i("li",[i("code",[e._v("DF_ALWAYS_WRAP_RESOURCES")]),e._v(": Most API calls return a resource array or a single resource, if array, do we wrap it?")]),e._v(" "),i("li",[i("code",[e._v("DF_RESOURCE_WRAPPER")]),e._v(": Most API calls return a resource array or a single resource, if array, what do we wrap it with?")]),e._v(" "),i("li",[i("code",[e._v("DF_CONTENT_TYPE")]),e._v(": Default content-type of response when accepts header is missing or empty")])]),e._v(" "),i("h2",{attrs:{id:"storage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("DF_FILE_CHUNK_SIZE")]),e._v(": File chunk size for downloadable files in bytes. Default is 10MB")])]),e._v(" "),i("h2",{attrs:{id:"other-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#other-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Other settings")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("DF_PACKAGE_PATH")]),e._v(": Path to a package file, folder, or URL to import during instance launch")]),e._v(" "),i("li",[i("code",[e._v("DF_LOOKUP_MODIFIERS")]),e._v(": Lookup management, comma-delimited list of allowed lookup modifying functions like urlencode, trim, etc. Note: Setting this will disable a large list of modifiers already internally configured")]),e._v(" "),i("li",[i("code",[e._v("DF_INSTALL")]),e._v(": This designates from where or how this instance of the application was installed, i.e. Bitnami, GitHub, DockerHub, etc.")])])])}],!1,null,null,null);o.options.__file="appendixa.md";t.default=o.exports}}]);