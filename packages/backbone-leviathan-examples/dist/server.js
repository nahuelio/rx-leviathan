'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = require("path");
var express_1 = tslib_1.__importDefault(require("express"));
var compression_1 = require("compression");
var routes_1 = require("./routes/routes");
var app = express_1.default();
var port = process.env.PORT || 4000;
/** Basic App Setup **/
app.set('views', path_1.join(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.use(compression_1.compression());
app.use(express_1.default.static(__dirname + "/js"));
app.use('/', routes_1.configureRoutes());
app.listen(port, function () { return console.log("Running localhost on port " + port); });
//# sourceMappingURL=server.js.map
