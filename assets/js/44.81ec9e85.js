(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{214:function(e,t,r){},278:function(e,t,r){"use strict";var _=r(214);r.n(_).a},458:function(e,t,r){"use strict";r.r(t);r(278);var _=r(1),d=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"actions-hooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actions-hooks"}},[e._v("#")]),e._v(" Actions Hooks")]),e._v(" "),r("p",[e._v("The follow table is a list of available filter hooks within Redux that developers may use in their own code.  Please\nnote, a solid understand of "),r("a",{attrs:{href:"https://secure.php.net/docs.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://codex.wordpress.org/Function_Reference/add_action",target:"_blank",rel:"noopener noreferrer"}},[e._v("WordPress action hooks"),r("OutboundLink")],1),e._v("\nare required.")]),e._v(" "),r("p",[e._v("As always, please be sure to replace "),r("code",[e._v("{opt_name}")]),e._v(" with the opt_name string of your Redux instance.")]),e._v(" "),r("p",[e._v("Thanks to "),r("a",{attrs:{href:"https://github.com/paulthecoder",target:"_blank",rel:"noopener noreferrer"}},[e._v("@paulthecoder"),r("OutboundLink")],1),e._v(" for compiling this list.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Tag")]),e._v(" "),r("th",[e._v("Args")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("redux/init")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("On Redux init.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/plugin/hooks")]),e._v(" "),r("td",[r("strong",[e._v("$plugin_object")]),r("br"),e._v("(object) ReduxFrameworkPlugin")]),e._v(" "),r("td",[e._v("After the plugin is activated and loaded.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/ajax/heartbeat")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Disregard WP AJAX ‘heartbeat’ call. Why waste resources?")])]),e._v(" "),r("tr",[r("td",[e._v("redux/construct")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Construct hook.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/loaded")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Redux has loaded")])]),e._v(" "),r("tr",[r("td",[e._v("ReduxFrameworkPlugin_admin_notice")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Before displaying the admin notice.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/{opt_name}/panel/before")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Before the panel template is echoed.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/{opt_name}/panel/after")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("After the panel template is echoed.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/page/{opt_name}/enqueue")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("After Redux has enqueued its stylesheets and scripts.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/page/{opt_name}/load")]),e._v(" "),r("td",[r("strong",[e._v("$wp_screen")]),r("br"),e._v("(object) WP_Screen")]),e._v(" "),r("td",[e._v("Redux options page has loaded.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/page/{opt_name}/header")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Redux admin_head() hook for options page.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/page/{opt_name}/sections/after")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Right after all the sections in the options panel, just before the footer.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/page/{opt_name}/menu/after")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("After the sections menu in the options panel.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/page/{opt_name}/form/before")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Before the panel’s form is echoed.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/page/{opt_name}/form/after")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("After the panel’s form is echoed.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/import")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("When the last save mode is an import.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/reset")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("When the last save mode is a global reset.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/section/reset")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("When the last save mode is a section reset.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/saved")]),e._v(" "),r("td",[r("strong",[e._v("$value(mixed)")]),e._v(" Set/saved option value")]),e._v(" "),r("td",[e._v("When the last save mode is the normal save options.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/settings/change")]),e._v(" "),r("td",[r("strong",[e._v("$value(mixed)")]),e._v(" Set/saved option value")]),e._v(" "),r("td",[e._v("When the user has changed an option.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/errors")]),e._v(" "),r("td",[r("strong",[e._v("$errors(array)")]),e._v(" Error information")]),e._v(" "),r("td",[e._v("Error notification.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/warnings")]),e._v(" "),r("td",[r("strong",[e._v("$warnings(array)")]),e._v(" Warning information")]),e._v(" "),r("td",[e._v("Warning notification.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/field/{field.type}/register")]),e._v(" "),r("td",[r("strong",[e._v("$field(array)")]),e._v(" The field settings.")]),e._v(" "),r("td",[e._v("Before the field is registered with add_settings_field().")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/register")]),e._v(" "),r("td",[r("strong",[e._v("$sections(array)")]),e._v(" Option sections")]),e._v(" "),r("td",[e._v("When registering the options.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/compiler")]),e._v(" "),r("td",[r("strong",[e._v("$options(array)")]),e._v(" $this->options "),r("br"),r("br"),r("strong",[e._v("$css(string)")]),e._v(" CSS that gets sent to the compiler hook. "),r("br"),r("br"),e._v(" "),r("strong",[e._v("$changed_values")]),r("br"),e._v("(array) Array of changed values.")]),e._v(" "),r("td",[e._v("Compiler hook.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/compiler/advanced")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Advanced compiler hook.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/options/{opt_name}/validate")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$plugin_options, redux_options, changed_values]")]),e._v(" "),r("td",[e._v("Hook on option validation.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/{field.type}/callback/before")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("Before the callback of a specific field type.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/callback/before")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("Before the callback of each field.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/{field.type}/callback/after")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("After the callback of a specific field type.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/callback/after")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("After the callback of each field.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/{field.type}/render/before")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("Before the output of a specific field type.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/render/before")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("Before the output of each field.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/{field.type}/fieldset/before/{opt_name}")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("Before the fieldset of a specific field type.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/fieldset/before/{opt_name}")]),e._v(" "),r("td",[r("strong",[e._v("$data&array")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("Before the fieldset of each field.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/{field.type}/fieldset/after/{opt_name}")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("After the fieldset of a specific field type.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/field/{opt_name}/fieldset/after/{opt_name}")]),e._v(" "),r("td",[r("strong",[e._v("$data(&array)")]),e._v(" "),r("br"),e._v("[&$field, &$value] Field data + field id.")]),e._v(" "),r("td",[e._v("After the fieldset of each field.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/extensions/before")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Before Redux extensions are registered (not specific to your opt_name).")])]),e._v(" "),r("tr",[r("td",[e._v("redux/extensions/{opt_name}/before")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Before Redux extensions are registered (specific to your opt_name).")])]),e._v(" "),r("tr",[r("td",[e._v("redux/extensions/{opt_name}")]),e._v(" "),r("td",[r("strong",[e._v("$redux_object")]),r("br"),e._v("(object) ReduxFramework")]),e._v(" "),r("td",[e._v("Register Redux extensions.")])]),e._v(" "),r("tr",[r("td",[e._v("redux/customizer/live_preview")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Runs on wp_head() when the Customizer live preview initializes.")])])])])])}),[],!1,null,null,null);t.default=d.exports}}]);