/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/feather-icon-literals/lib/custom-tag.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/custom-tag.js ***!
  \**************************************************************/
/*! exports provided: tag, setCustomTemplateLiteralTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return setCustomTemplateLiteralTag; });
let customTemplateLiteralTag;

const tag = function(strings, ...values) {
  if (customTemplateLiteralTag) {
    return customTemplateLiteralTag(strings, ...values);
  }
  return values.reduce((acc, v, idx) =>
        acc + v + strings[idx + 1], strings[0]);
}

const setCustomTemplateLiteralTag = (tag) => customTemplateLiteralTag = tag;


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons.js":
/*!*********************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons.js ***!
  \*********************************************************/
/*! exports provided: Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowDown, ArrowLeftCircle, ArrowLeft, ArrowRightCircle, ArrowRight, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, ArrowUp, AtSign, Award, BarChart2, BarChart, BatteryCharging, Battery, BellOff, Bell, Bluetooth, Bold, BookOpen, Book, Bookmark, Box, Briefcase, Calendar, CameraOff, Camera, Cast, CheckCircle, CheckSquare, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Cloud, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DivideCircle, DivideSquare, Divide, DollarSign, DownloadCloud, Download, Dribbble, Droplet, Edit2, Edit3, Edit, ExternalLink, EyeOff, Eye, Facebook, FastForward, Feather, Figma, FileMinus, FilePlus, FileText, File, Film, Filter, Flag, FolderMinus, FolderPlus, Folder, Framer, Frown, Gift, GitBranch, GitCommit, GitMerge, GitPullRequest, GitHub, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Hexagon, Home, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link2, Link, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, MapPin, Map, Maximize2, Maximize, Meh, Menu, MessageCircle, MessageSquare, MicOff, Mic, Minimize2, Minimize, MinusCircle, MinusSquare, Minus, Monitor, Moon, MoreHorizontal, MoreVertical, MousePointer, Move, Music, Navigation2, Navigation, Octagon, Package, Paperclip, PauseCircle, Pause, PenTool, Percent, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Phone, PieChart, PlayCircle, Play, PlusCircle, PlusSquare, Plus, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share2, Share, ShieldOff, Shield, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Tool, Trash2, Trash, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitch, Twitter, Type, Umbrella, Underline, Unlock, UploadCloud, Upload, UserCheck, UserMinus, UserPlus, UserX, User, Users, VideoOff, Video, Voicemail, Volume1, Volume2, VolumeX, Volume, Watch, WifiOff, Wifi, Wind, XCircle, XOctagon, XSquare, X, Youtube, ZapOff, Zap, ZoomIn, ZoomOut, setCustomTemplateLiteralTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_activity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/activity.js */ "./node_modules/feather-icon-literals/lib/icons/activity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return _icons_activity_js__WEBPACK_IMPORTED_MODULE_0__["Activity"]; });

/* harmony import */ var _icons_airplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/airplay.js */ "./node_modules/feather-icon-literals/lib/icons/airplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Airplay", function() { return _icons_airplay_js__WEBPACK_IMPORTED_MODULE_1__["Airplay"]; });

/* harmony import */ var _icons_alert_circle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/alert-circle.js */ "./node_modules/feather-icon-literals/lib/icons/alert-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertCircle", function() { return _icons_alert_circle_js__WEBPACK_IMPORTED_MODULE_2__["AlertCircle"]; });

/* harmony import */ var _icons_alert_octagon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/alert-octagon.js */ "./node_modules/feather-icon-literals/lib/icons/alert-octagon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertOctagon", function() { return _icons_alert_octagon_js__WEBPACK_IMPORTED_MODULE_3__["AlertOctagon"]; });

/* harmony import */ var _icons_alert_triangle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/alert-triangle.js */ "./node_modules/feather-icon-literals/lib/icons/alert-triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertTriangle", function() { return _icons_alert_triangle_js__WEBPACK_IMPORTED_MODULE_4__["AlertTriangle"]; });

/* harmony import */ var _icons_align_center_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/align-center.js */ "./node_modules/feather-icon-literals/lib/icons/align-center.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignCenter", function() { return _icons_align_center_js__WEBPACK_IMPORTED_MODULE_5__["AlignCenter"]; });

/* harmony import */ var _icons_align_justify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/align-justify.js */ "./node_modules/feather-icon-literals/lib/icons/align-justify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignJustify", function() { return _icons_align_justify_js__WEBPACK_IMPORTED_MODULE_6__["AlignJustify"]; });

/* harmony import */ var _icons_align_left_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/align-left.js */ "./node_modules/feather-icon-literals/lib/icons/align-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignLeft", function() { return _icons_align_left_js__WEBPACK_IMPORTED_MODULE_7__["AlignLeft"]; });

/* harmony import */ var _icons_align_right_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/align-right.js */ "./node_modules/feather-icon-literals/lib/icons/align-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignRight", function() { return _icons_align_right_js__WEBPACK_IMPORTED_MODULE_8__["AlignRight"]; });

/* harmony import */ var _icons_anchor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/anchor.js */ "./node_modules/feather-icon-literals/lib/icons/anchor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return _icons_anchor_js__WEBPACK_IMPORTED_MODULE_9__["Anchor"]; });

/* harmony import */ var _icons_aperture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/aperture.js */ "./node_modules/feather-icon-literals/lib/icons/aperture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Aperture", function() { return _icons_aperture_js__WEBPACK_IMPORTED_MODULE_10__["Aperture"]; });

/* harmony import */ var _icons_archive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/archive.js */ "./node_modules/feather-icon-literals/lib/icons/archive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Archive", function() { return _icons_archive_js__WEBPACK_IMPORTED_MODULE_11__["Archive"]; });

/* harmony import */ var _icons_arrow_down_circle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/arrow-down-circle.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-down-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDownCircle", function() { return _icons_arrow_down_circle_js__WEBPACK_IMPORTED_MODULE_12__["ArrowDownCircle"]; });

/* harmony import */ var _icons_arrow_down_left_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/arrow-down-left.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-down-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDownLeft", function() { return _icons_arrow_down_left_js__WEBPACK_IMPORTED_MODULE_13__["ArrowDownLeft"]; });

/* harmony import */ var _icons_arrow_down_right_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/arrow-down-right.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-down-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDownRight", function() { return _icons_arrow_down_right_js__WEBPACK_IMPORTED_MODULE_14__["ArrowDownRight"]; });

/* harmony import */ var _icons_arrow_down_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/arrow-down.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return _icons_arrow_down_js__WEBPACK_IMPORTED_MODULE_15__["ArrowDown"]; });

/* harmony import */ var _icons_arrow_left_circle_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/arrow-left-circle.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-left-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftCircle", function() { return _icons_arrow_left_circle_js__WEBPACK_IMPORTED_MODULE_16__["ArrowLeftCircle"]; });

/* harmony import */ var _icons_arrow_left_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/arrow-left.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowLeft", function() { return _icons_arrow_left_js__WEBPACK_IMPORTED_MODULE_17__["ArrowLeft"]; });

/* harmony import */ var _icons_arrow_right_circle_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/arrow-right-circle.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-right-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowRightCircle", function() { return _icons_arrow_right_circle_js__WEBPACK_IMPORTED_MODULE_18__["ArrowRightCircle"]; });

/* harmony import */ var _icons_arrow_right_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icons/arrow-right.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowRight", function() { return _icons_arrow_right_js__WEBPACK_IMPORTED_MODULE_19__["ArrowRight"]; });

/* harmony import */ var _icons_arrow_up_circle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons/arrow-up-circle.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-up-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowUpCircle", function() { return _icons_arrow_up_circle_js__WEBPACK_IMPORTED_MODULE_20__["ArrowUpCircle"]; });

/* harmony import */ var _icons_arrow_up_left_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icons/arrow-up-left.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-up-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowUpLeft", function() { return _icons_arrow_up_left_js__WEBPACK_IMPORTED_MODULE_21__["ArrowUpLeft"]; });

/* harmony import */ var _icons_arrow_up_right_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./icons/arrow-up-right.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-up-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowUpRight", function() { return _icons_arrow_up_right_js__WEBPACK_IMPORTED_MODULE_22__["ArrowUpRight"]; });

/* harmony import */ var _icons_arrow_up_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./icons/arrow-up.js */ "./node_modules/feather-icon-literals/lib/icons/arrow-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowUp", function() { return _icons_arrow_up_js__WEBPACK_IMPORTED_MODULE_23__["ArrowUp"]; });

/* harmony import */ var _icons_at_sign_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./icons/at-sign.js */ "./node_modules/feather-icon-literals/lib/icons/at-sign.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AtSign", function() { return _icons_at_sign_js__WEBPACK_IMPORTED_MODULE_24__["AtSign"]; });

/* harmony import */ var _icons_award_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./icons/award.js */ "./node_modules/feather-icon-literals/lib/icons/award.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Award", function() { return _icons_award_js__WEBPACK_IMPORTED_MODULE_25__["Award"]; });

/* harmony import */ var _icons_bar_chart_2_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./icons/bar-chart-2.js */ "./node_modules/feather-icon-literals/lib/icons/bar-chart-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChart2", function() { return _icons_bar_chart_2_js__WEBPACK_IMPORTED_MODULE_26__["BarChart2"]; });

/* harmony import */ var _icons_bar_chart_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./icons/bar-chart.js */ "./node_modules/feather-icon-literals/lib/icons/bar-chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return _icons_bar_chart_js__WEBPACK_IMPORTED_MODULE_27__["BarChart"]; });

/* harmony import */ var _icons_battery_charging_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./icons/battery-charging.js */ "./node_modules/feather-icon-literals/lib/icons/battery-charging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatteryCharging", function() { return _icons_battery_charging_js__WEBPACK_IMPORTED_MODULE_28__["BatteryCharging"]; });

/* harmony import */ var _icons_battery_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./icons/battery.js */ "./node_modules/feather-icon-literals/lib/icons/battery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return _icons_battery_js__WEBPACK_IMPORTED_MODULE_29__["Battery"]; });

/* harmony import */ var _icons_bell_off_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./icons/bell-off.js */ "./node_modules/feather-icon-literals/lib/icons/bell-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BellOff", function() { return _icons_bell_off_js__WEBPACK_IMPORTED_MODULE_30__["BellOff"]; });

/* harmony import */ var _icons_bell_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./icons/bell.js */ "./node_modules/feather-icon-literals/lib/icons/bell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bell", function() { return _icons_bell_js__WEBPACK_IMPORTED_MODULE_31__["Bell"]; });

/* harmony import */ var _icons_bluetooth_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./icons/bluetooth.js */ "./node_modules/feather-icon-literals/lib/icons/bluetooth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bluetooth", function() { return _icons_bluetooth_js__WEBPACK_IMPORTED_MODULE_32__["Bluetooth"]; });

/* harmony import */ var _icons_bold_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./icons/bold.js */ "./node_modules/feather-icon-literals/lib/icons/bold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bold", function() { return _icons_bold_js__WEBPACK_IMPORTED_MODULE_33__["Bold"]; });

/* harmony import */ var _icons_book_open_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./icons/book-open.js */ "./node_modules/feather-icon-literals/lib/icons/book-open.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookOpen", function() { return _icons_book_open_js__WEBPACK_IMPORTED_MODULE_34__["BookOpen"]; });

/* harmony import */ var _icons_book_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./icons/book.js */ "./node_modules/feather-icon-literals/lib/icons/book.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _icons_book_js__WEBPACK_IMPORTED_MODULE_35__["Book"]; });

/* harmony import */ var _icons_bookmark_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./icons/bookmark.js */ "./node_modules/feather-icon-literals/lib/icons/bookmark.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return _icons_bookmark_js__WEBPACK_IMPORTED_MODULE_36__["Bookmark"]; });

/* harmony import */ var _icons_box_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./icons/box.js */ "./node_modules/feather-icon-literals/lib/icons/box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _icons_box_js__WEBPACK_IMPORTED_MODULE_37__["Box"]; });

/* harmony import */ var _icons_briefcase_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./icons/briefcase.js */ "./node_modules/feather-icon-literals/lib/icons/briefcase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Briefcase", function() { return _icons_briefcase_js__WEBPACK_IMPORTED_MODULE_38__["Briefcase"]; });

/* harmony import */ var _icons_calendar_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./icons/calendar.js */ "./node_modules/feather-icon-literals/lib/icons/calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _icons_calendar_js__WEBPACK_IMPORTED_MODULE_39__["Calendar"]; });

/* harmony import */ var _icons_camera_off_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./icons/camera-off.js */ "./node_modules/feather-icon-literals/lib/icons/camera-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraOff", function() { return _icons_camera_off_js__WEBPACK_IMPORTED_MODULE_40__["CameraOff"]; });

/* harmony import */ var _icons_camera_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./icons/camera.js */ "./node_modules/feather-icon-literals/lib/icons/camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _icons_camera_js__WEBPACK_IMPORTED_MODULE_41__["Camera"]; });

/* harmony import */ var _icons_cast_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./icons/cast.js */ "./node_modules/feather-icon-literals/lib/icons/cast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cast", function() { return _icons_cast_js__WEBPACK_IMPORTED_MODULE_42__["Cast"]; });

/* harmony import */ var _icons_check_circle_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./icons/check-circle.js */ "./node_modules/feather-icon-literals/lib/icons/check-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckCircle", function() { return _icons_check_circle_js__WEBPACK_IMPORTED_MODULE_43__["CheckCircle"]; });

/* harmony import */ var _icons_check_square_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./icons/check-square.js */ "./node_modules/feather-icon-literals/lib/icons/check-square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckSquare", function() { return _icons_check_square_js__WEBPACK_IMPORTED_MODULE_44__["CheckSquare"]; });

/* harmony import */ var _icons_check_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./icons/check.js */ "./node_modules/feather-icon-literals/lib/icons/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return _icons_check_js__WEBPACK_IMPORTED_MODULE_45__["Check"]; });

/* harmony import */ var _icons_chevron_down_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./icons/chevron-down.js */ "./node_modules/feather-icon-literals/lib/icons/chevron-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronDown", function() { return _icons_chevron_down_js__WEBPACK_IMPORTED_MODULE_46__["ChevronDown"]; });

/* harmony import */ var _icons_chevron_left_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./icons/chevron-left.js */ "./node_modules/feather-icon-literals/lib/icons/chevron-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronLeft", function() { return _icons_chevron_left_js__WEBPACK_IMPORTED_MODULE_47__["ChevronLeft"]; });

/* harmony import */ var _icons_chevron_right_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./icons/chevron-right.js */ "./node_modules/feather-icon-literals/lib/icons/chevron-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronRight", function() { return _icons_chevron_right_js__WEBPACK_IMPORTED_MODULE_48__["ChevronRight"]; });

/* harmony import */ var _icons_chevron_up_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./icons/chevron-up.js */ "./node_modules/feather-icon-literals/lib/icons/chevron-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronUp", function() { return _icons_chevron_up_js__WEBPACK_IMPORTED_MODULE_49__["ChevronUp"]; });

/* harmony import */ var _icons_chevrons_down_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./icons/chevrons-down.js */ "./node_modules/feather-icon-literals/lib/icons/chevrons-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronsDown", function() { return _icons_chevrons_down_js__WEBPACK_IMPORTED_MODULE_50__["ChevronsDown"]; });

/* harmony import */ var _icons_chevrons_left_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./icons/chevrons-left.js */ "./node_modules/feather-icon-literals/lib/icons/chevrons-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronsLeft", function() { return _icons_chevrons_left_js__WEBPACK_IMPORTED_MODULE_51__["ChevronsLeft"]; });

/* harmony import */ var _icons_chevrons_right_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./icons/chevrons-right.js */ "./node_modules/feather-icon-literals/lib/icons/chevrons-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronsRight", function() { return _icons_chevrons_right_js__WEBPACK_IMPORTED_MODULE_52__["ChevronsRight"]; });

/* harmony import */ var _icons_chevrons_up_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./icons/chevrons-up.js */ "./node_modules/feather-icon-literals/lib/icons/chevrons-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronsUp", function() { return _icons_chevrons_up_js__WEBPACK_IMPORTED_MODULE_53__["ChevronsUp"]; });

/* harmony import */ var _icons_chrome_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./icons/chrome.js */ "./node_modules/feather-icon-literals/lib/icons/chrome.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chrome", function() { return _icons_chrome_js__WEBPACK_IMPORTED_MODULE_54__["Chrome"]; });

/* harmony import */ var _icons_circle_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./icons/circle.js */ "./node_modules/feather-icon-literals/lib/icons/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _icons_circle_js__WEBPACK_IMPORTED_MODULE_55__["Circle"]; });

/* harmony import */ var _icons_clipboard_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./icons/clipboard.js */ "./node_modules/feather-icon-literals/lib/icons/clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _icons_clipboard_js__WEBPACK_IMPORTED_MODULE_56__["Clipboard"]; });

/* harmony import */ var _icons_clock_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./icons/clock.js */ "./node_modules/feather-icon-literals/lib/icons/clock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _icons_clock_js__WEBPACK_IMPORTED_MODULE_57__["Clock"]; });

/* harmony import */ var _icons_cloud_drizzle_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./icons/cloud-drizzle.js */ "./node_modules/feather-icon-literals/lib/icons/cloud-drizzle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudDrizzle", function() { return _icons_cloud_drizzle_js__WEBPACK_IMPORTED_MODULE_58__["CloudDrizzle"]; });

/* harmony import */ var _icons_cloud_lightning_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./icons/cloud-lightning.js */ "./node_modules/feather-icon-literals/lib/icons/cloud-lightning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudLightning", function() { return _icons_cloud_lightning_js__WEBPACK_IMPORTED_MODULE_59__["CloudLightning"]; });

/* harmony import */ var _icons_cloud_off_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./icons/cloud-off.js */ "./node_modules/feather-icon-literals/lib/icons/cloud-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudOff", function() { return _icons_cloud_off_js__WEBPACK_IMPORTED_MODULE_60__["CloudOff"]; });

/* harmony import */ var _icons_cloud_rain_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./icons/cloud-rain.js */ "./node_modules/feather-icon-literals/lib/icons/cloud-rain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudRain", function() { return _icons_cloud_rain_js__WEBPACK_IMPORTED_MODULE_61__["CloudRain"]; });

/* harmony import */ var _icons_cloud_snow_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./icons/cloud-snow.js */ "./node_modules/feather-icon-literals/lib/icons/cloud-snow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudSnow", function() { return _icons_cloud_snow_js__WEBPACK_IMPORTED_MODULE_62__["CloudSnow"]; });

/* harmony import */ var _icons_cloud_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./icons/cloud.js */ "./node_modules/feather-icon-literals/lib/icons/cloud.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cloud", function() { return _icons_cloud_js__WEBPACK_IMPORTED_MODULE_63__["Cloud"]; });

/* harmony import */ var _icons_code_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./icons/code.js */ "./node_modules/feather-icon-literals/lib/icons/code.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _icons_code_js__WEBPACK_IMPORTED_MODULE_64__["Code"]; });

/* harmony import */ var _icons_codepen_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./icons/codepen.js */ "./node_modules/feather-icon-literals/lib/icons/codepen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Codepen", function() { return _icons_codepen_js__WEBPACK_IMPORTED_MODULE_65__["Codepen"]; });

/* harmony import */ var _icons_codesandbox_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./icons/codesandbox.js */ "./node_modules/feather-icon-literals/lib/icons/codesandbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Codesandbox", function() { return _icons_codesandbox_js__WEBPACK_IMPORTED_MODULE_66__["Codesandbox"]; });

/* harmony import */ var _icons_coffee_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./icons/coffee.js */ "./node_modules/feather-icon-literals/lib/icons/coffee.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coffee", function() { return _icons_coffee_js__WEBPACK_IMPORTED_MODULE_67__["Coffee"]; });

/* harmony import */ var _icons_columns_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./icons/columns.js */ "./node_modules/feather-icon-literals/lib/icons/columns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return _icons_columns_js__WEBPACK_IMPORTED_MODULE_68__["Columns"]; });

/* harmony import */ var _icons_command_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./icons/command.js */ "./node_modules/feather-icon-literals/lib/icons/command.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _icons_command_js__WEBPACK_IMPORTED_MODULE_69__["Command"]; });

/* harmony import */ var _icons_compass_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./icons/compass.js */ "./node_modules/feather-icon-literals/lib/icons/compass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compass", function() { return _icons_compass_js__WEBPACK_IMPORTED_MODULE_70__["Compass"]; });

/* harmony import */ var _icons_copy_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./icons/copy.js */ "./node_modules/feather-icon-literals/lib/icons/copy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return _icons_copy_js__WEBPACK_IMPORTED_MODULE_71__["Copy"]; });

/* harmony import */ var _icons_corner_down_left_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./icons/corner-down-left.js */ "./node_modules/feather-icon-literals/lib/icons/corner-down-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerDownLeft", function() { return _icons_corner_down_left_js__WEBPACK_IMPORTED_MODULE_72__["CornerDownLeft"]; });

/* harmony import */ var _icons_corner_down_right_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./icons/corner-down-right.js */ "./node_modules/feather-icon-literals/lib/icons/corner-down-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerDownRight", function() { return _icons_corner_down_right_js__WEBPACK_IMPORTED_MODULE_73__["CornerDownRight"]; });

/* harmony import */ var _icons_corner_left_down_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./icons/corner-left-down.js */ "./node_modules/feather-icon-literals/lib/icons/corner-left-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerLeftDown", function() { return _icons_corner_left_down_js__WEBPACK_IMPORTED_MODULE_74__["CornerLeftDown"]; });

/* harmony import */ var _icons_corner_left_up_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./icons/corner-left-up.js */ "./node_modules/feather-icon-literals/lib/icons/corner-left-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerLeftUp", function() { return _icons_corner_left_up_js__WEBPACK_IMPORTED_MODULE_75__["CornerLeftUp"]; });

/* harmony import */ var _icons_corner_right_down_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./icons/corner-right-down.js */ "./node_modules/feather-icon-literals/lib/icons/corner-right-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerRightDown", function() { return _icons_corner_right_down_js__WEBPACK_IMPORTED_MODULE_76__["CornerRightDown"]; });

/* harmony import */ var _icons_corner_right_up_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./icons/corner-right-up.js */ "./node_modules/feather-icon-literals/lib/icons/corner-right-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerRightUp", function() { return _icons_corner_right_up_js__WEBPACK_IMPORTED_MODULE_77__["CornerRightUp"]; });

/* harmony import */ var _icons_corner_up_left_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./icons/corner-up-left.js */ "./node_modules/feather-icon-literals/lib/icons/corner-up-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerUpLeft", function() { return _icons_corner_up_left_js__WEBPACK_IMPORTED_MODULE_78__["CornerUpLeft"]; });

/* harmony import */ var _icons_corner_up_right_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./icons/corner-up-right.js */ "./node_modules/feather-icon-literals/lib/icons/corner-up-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CornerUpRight", function() { return _icons_corner_up_right_js__WEBPACK_IMPORTED_MODULE_79__["CornerUpRight"]; });

/* harmony import */ var _icons_cpu_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./icons/cpu.js */ "./node_modules/feather-icon-literals/lib/icons/cpu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cpu", function() { return _icons_cpu_js__WEBPACK_IMPORTED_MODULE_80__["Cpu"]; });

/* harmony import */ var _icons_credit_card_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./icons/credit-card.js */ "./node_modules/feather-icon-literals/lib/icons/credit-card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditCard", function() { return _icons_credit_card_js__WEBPACK_IMPORTED_MODULE_81__["CreditCard"]; });

/* harmony import */ var _icons_crop_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./icons/crop.js */ "./node_modules/feather-icon-literals/lib/icons/crop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Crop", function() { return _icons_crop_js__WEBPACK_IMPORTED_MODULE_82__["Crop"]; });

/* harmony import */ var _icons_crosshair_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./icons/crosshair.js */ "./node_modules/feather-icon-literals/lib/icons/crosshair.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Crosshair", function() { return _icons_crosshair_js__WEBPACK_IMPORTED_MODULE_83__["Crosshair"]; });

/* harmony import */ var _icons_database_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./icons/database.js */ "./node_modules/feather-icon-literals/lib/icons/database.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return _icons_database_js__WEBPACK_IMPORTED_MODULE_84__["Database"]; });

/* harmony import */ var _icons_delete_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./icons/delete.js */ "./node_modules/feather-icon-literals/lib/icons/delete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return _icons_delete_js__WEBPACK_IMPORTED_MODULE_85__["Delete"]; });

/* harmony import */ var _icons_disc_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./icons/disc.js */ "./node_modules/feather-icon-literals/lib/icons/disc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Disc", function() { return _icons_disc_js__WEBPACK_IMPORTED_MODULE_86__["Disc"]; });

/* harmony import */ var _icons_divide_circle_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./icons/divide-circle.js */ "./node_modules/feather-icon-literals/lib/icons/divide-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivideCircle", function() { return _icons_divide_circle_js__WEBPACK_IMPORTED_MODULE_87__["DivideCircle"]; });

/* harmony import */ var _icons_divide_square_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./icons/divide-square.js */ "./node_modules/feather-icon-literals/lib/icons/divide-square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivideSquare", function() { return _icons_divide_square_js__WEBPACK_IMPORTED_MODULE_88__["DivideSquare"]; });

/* harmony import */ var _icons_divide_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./icons/divide.js */ "./node_modules/feather-icon-literals/lib/icons/divide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divide", function() { return _icons_divide_js__WEBPACK_IMPORTED_MODULE_89__["Divide"]; });

/* harmony import */ var _icons_dollar_sign_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./icons/dollar-sign.js */ "./node_modules/feather-icon-literals/lib/icons/dollar-sign.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DollarSign", function() { return _icons_dollar_sign_js__WEBPACK_IMPORTED_MODULE_90__["DollarSign"]; });

/* harmony import */ var _icons_download_cloud_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./icons/download-cloud.js */ "./node_modules/feather-icon-literals/lib/icons/download-cloud.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadCloud", function() { return _icons_download_cloud_js__WEBPACK_IMPORTED_MODULE_91__["DownloadCloud"]; });

/* harmony import */ var _icons_download_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./icons/download.js */ "./node_modules/feather-icon-literals/lib/icons/download.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return _icons_download_js__WEBPACK_IMPORTED_MODULE_92__["Download"]; });

/* harmony import */ var _icons_dribbble_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./icons/dribbble.js */ "./node_modules/feather-icon-literals/lib/icons/dribbble.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dribbble", function() { return _icons_dribbble_js__WEBPACK_IMPORTED_MODULE_93__["Dribbble"]; });

/* harmony import */ var _icons_droplet_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./icons/droplet.js */ "./node_modules/feather-icon-literals/lib/icons/droplet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Droplet", function() { return _icons_droplet_js__WEBPACK_IMPORTED_MODULE_94__["Droplet"]; });

/* harmony import */ var _icons_edit_2_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./icons/edit-2.js */ "./node_modules/feather-icon-literals/lib/icons/edit-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Edit2", function() { return _icons_edit_2_js__WEBPACK_IMPORTED_MODULE_95__["Edit2"]; });

/* harmony import */ var _icons_edit_3_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./icons/edit-3.js */ "./node_modules/feather-icon-literals/lib/icons/edit-3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Edit3", function() { return _icons_edit_3_js__WEBPACK_IMPORTED_MODULE_96__["Edit3"]; });

/* harmony import */ var _icons_edit_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./icons/edit.js */ "./node_modules/feather-icon-literals/lib/icons/edit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return _icons_edit_js__WEBPACK_IMPORTED_MODULE_97__["Edit"]; });

/* harmony import */ var _icons_external_link_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./icons/external-link.js */ "./node_modules/feather-icon-literals/lib/icons/external-link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExternalLink", function() { return _icons_external_link_js__WEBPACK_IMPORTED_MODULE_98__["ExternalLink"]; });

/* harmony import */ var _icons_eye_off_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./icons/eye-off.js */ "./node_modules/feather-icon-literals/lib/icons/eye-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EyeOff", function() { return _icons_eye_off_js__WEBPACK_IMPORTED_MODULE_99__["EyeOff"]; });

/* harmony import */ var _icons_eye_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./icons/eye.js */ "./node_modules/feather-icon-literals/lib/icons/eye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Eye", function() { return _icons_eye_js__WEBPACK_IMPORTED_MODULE_100__["Eye"]; });

/* harmony import */ var _icons_facebook_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./icons/facebook.js */ "./node_modules/feather-icon-literals/lib/icons/facebook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return _icons_facebook_js__WEBPACK_IMPORTED_MODULE_101__["Facebook"]; });

/* harmony import */ var _icons_fast_forward_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./icons/fast-forward.js */ "./node_modules/feather-icon-literals/lib/icons/fast-forward.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FastForward", function() { return _icons_fast_forward_js__WEBPACK_IMPORTED_MODULE_102__["FastForward"]; });

/* harmony import */ var _icons_feather_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./icons/feather.js */ "./node_modules/feather-icon-literals/lib/icons/feather.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feather", function() { return _icons_feather_js__WEBPACK_IMPORTED_MODULE_103__["Feather"]; });

/* harmony import */ var _icons_figma_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./icons/figma.js */ "./node_modules/feather-icon-literals/lib/icons/figma.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Figma", function() { return _icons_figma_js__WEBPACK_IMPORTED_MODULE_104__["Figma"]; });

/* harmony import */ var _icons_file_minus_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./icons/file-minus.js */ "./node_modules/feather-icon-literals/lib/icons/file-minus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileMinus", function() { return _icons_file_minus_js__WEBPACK_IMPORTED_MODULE_105__["FileMinus"]; });

/* harmony import */ var _icons_file_plus_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./icons/file-plus.js */ "./node_modules/feather-icon-literals/lib/icons/file-plus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilePlus", function() { return _icons_file_plus_js__WEBPACK_IMPORTED_MODULE_106__["FilePlus"]; });

/* harmony import */ var _icons_file_text_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./icons/file-text.js */ "./node_modules/feather-icon-literals/lib/icons/file-text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileText", function() { return _icons_file_text_js__WEBPACK_IMPORTED_MODULE_107__["FileText"]; });

/* harmony import */ var _icons_file_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./icons/file.js */ "./node_modules/feather-icon-literals/lib/icons/file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _icons_file_js__WEBPACK_IMPORTED_MODULE_108__["File"]; });

/* harmony import */ var _icons_film_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./icons/film.js */ "./node_modules/feather-icon-literals/lib/icons/film.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return _icons_film_js__WEBPACK_IMPORTED_MODULE_109__["Film"]; });

/* harmony import */ var _icons_filter_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./icons/filter.js */ "./node_modules/feather-icon-literals/lib/icons/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _icons_filter_js__WEBPACK_IMPORTED_MODULE_110__["Filter"]; });

/* harmony import */ var _icons_flag_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./icons/flag.js */ "./node_modules/feather-icon-literals/lib/icons/flag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flag", function() { return _icons_flag_js__WEBPACK_IMPORTED_MODULE_111__["Flag"]; });

/* harmony import */ var _icons_folder_minus_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./icons/folder-minus.js */ "./node_modules/feather-icon-literals/lib/icons/folder-minus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderMinus", function() { return _icons_folder_minus_js__WEBPACK_IMPORTED_MODULE_112__["FolderMinus"]; });

/* harmony import */ var _icons_folder_plus_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./icons/folder-plus.js */ "./node_modules/feather-icon-literals/lib/icons/folder-plus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderPlus", function() { return _icons_folder_plus_js__WEBPACK_IMPORTED_MODULE_113__["FolderPlus"]; });

/* harmony import */ var _icons_folder_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./icons/folder.js */ "./node_modules/feather-icon-literals/lib/icons/folder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return _icons_folder_js__WEBPACK_IMPORTED_MODULE_114__["Folder"]; });

/* harmony import */ var _icons_framer_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./icons/framer.js */ "./node_modules/feather-icon-literals/lib/icons/framer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Framer", function() { return _icons_framer_js__WEBPACK_IMPORTED_MODULE_115__["Framer"]; });

/* harmony import */ var _icons_frown_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./icons/frown.js */ "./node_modules/feather-icon-literals/lib/icons/frown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frown", function() { return _icons_frown_js__WEBPACK_IMPORTED_MODULE_116__["Frown"]; });

/* harmony import */ var _icons_gift_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./icons/gift.js */ "./node_modules/feather-icon-literals/lib/icons/gift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gift", function() { return _icons_gift_js__WEBPACK_IMPORTED_MODULE_117__["Gift"]; });

/* harmony import */ var _icons_git_branch_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./icons/git-branch.js */ "./node_modules/feather-icon-literals/lib/icons/git-branch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitBranch", function() { return _icons_git_branch_js__WEBPACK_IMPORTED_MODULE_118__["GitBranch"]; });

/* harmony import */ var _icons_git_commit_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./icons/git-commit.js */ "./node_modules/feather-icon-literals/lib/icons/git-commit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitCommit", function() { return _icons_git_commit_js__WEBPACK_IMPORTED_MODULE_119__["GitCommit"]; });

/* harmony import */ var _icons_git_merge_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./icons/git-merge.js */ "./node_modules/feather-icon-literals/lib/icons/git-merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitMerge", function() { return _icons_git_merge_js__WEBPACK_IMPORTED_MODULE_120__["GitMerge"]; });

/* harmony import */ var _icons_git_pull_request_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./icons/git-pull-request.js */ "./node_modules/feather-icon-literals/lib/icons/git-pull-request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitPullRequest", function() { return _icons_git_pull_request_js__WEBPACK_IMPORTED_MODULE_121__["GitPullRequest"]; });

/* harmony import */ var _icons_github_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./icons/github.js */ "./node_modules/feather-icon-literals/lib/icons/github.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitHub", function() { return _icons_github_js__WEBPACK_IMPORTED_MODULE_122__["GitHub"]; });

/* harmony import */ var _icons_gitlab_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./icons/gitlab.js */ "./node_modules/feather-icon-literals/lib/icons/gitlab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gitlab", function() { return _icons_gitlab_js__WEBPACK_IMPORTED_MODULE_123__["Gitlab"]; });

/* harmony import */ var _icons_globe_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./icons/globe.js */ "./node_modules/feather-icon-literals/lib/icons/globe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Globe", function() { return _icons_globe_js__WEBPACK_IMPORTED_MODULE_124__["Globe"]; });

/* harmony import */ var _icons_grid_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./icons/grid.js */ "./node_modules/feather-icon-literals/lib/icons/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _icons_grid_js__WEBPACK_IMPORTED_MODULE_125__["Grid"]; });

/* harmony import */ var _icons_hard_drive_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./icons/hard-drive.js */ "./node_modules/feather-icon-literals/lib/icons/hard-drive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HardDrive", function() { return _icons_hard_drive_js__WEBPACK_IMPORTED_MODULE_126__["HardDrive"]; });

/* harmony import */ var _icons_hash_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./icons/hash.js */ "./node_modules/feather-icon-literals/lib/icons/hash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hash", function() { return _icons_hash_js__WEBPACK_IMPORTED_MODULE_127__["Hash"]; });

/* harmony import */ var _icons_headphones_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./icons/headphones.js */ "./node_modules/feather-icon-literals/lib/icons/headphones.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Headphones", function() { return _icons_headphones_js__WEBPACK_IMPORTED_MODULE_128__["Headphones"]; });

/* harmony import */ var _icons_heart_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./icons/heart.js */ "./node_modules/feather-icon-literals/lib/icons/heart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heart", function() { return _icons_heart_js__WEBPACK_IMPORTED_MODULE_129__["Heart"]; });

/* harmony import */ var _icons_help_circle_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./icons/help-circle.js */ "./node_modules/feather-icon-literals/lib/icons/help-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpCircle", function() { return _icons_help_circle_js__WEBPACK_IMPORTED_MODULE_130__["HelpCircle"]; });

/* harmony import */ var _icons_hexagon_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./icons/hexagon.js */ "./node_modules/feather-icon-literals/lib/icons/hexagon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hexagon", function() { return _icons_hexagon_js__WEBPACK_IMPORTED_MODULE_131__["Hexagon"]; });

/* harmony import */ var _icons_home_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./icons/home.js */ "./node_modules/feather-icon-literals/lib/icons/home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _icons_home_js__WEBPACK_IMPORTED_MODULE_132__["Home"]; });

/* harmony import */ var _icons_image_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./icons/image.js */ "./node_modules/feather-icon-literals/lib/icons/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _icons_image_js__WEBPACK_IMPORTED_MODULE_133__["Image"]; });

/* harmony import */ var _icons_inbox_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./icons/inbox.js */ "./node_modules/feather-icon-literals/lib/icons/inbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inbox", function() { return _icons_inbox_js__WEBPACK_IMPORTED_MODULE_134__["Inbox"]; });

/* harmony import */ var _icons_info_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./icons/info.js */ "./node_modules/feather-icon-literals/lib/icons/info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _icons_info_js__WEBPACK_IMPORTED_MODULE_135__["Info"]; });

/* harmony import */ var _icons_instagram_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./icons/instagram.js */ "./node_modules/feather-icon-literals/lib/icons/instagram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return _icons_instagram_js__WEBPACK_IMPORTED_MODULE_136__["Instagram"]; });

/* harmony import */ var _icons_italic_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./icons/italic.js */ "./node_modules/feather-icon-literals/lib/icons/italic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Italic", function() { return _icons_italic_js__WEBPACK_IMPORTED_MODULE_137__["Italic"]; });

/* harmony import */ var _icons_key_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./icons/key.js */ "./node_modules/feather-icon-literals/lib/icons/key.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return _icons_key_js__WEBPACK_IMPORTED_MODULE_138__["Key"]; });

/* harmony import */ var _icons_layers_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./icons/layers.js */ "./node_modules/feather-icon-literals/lib/icons/layers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layers", function() { return _icons_layers_js__WEBPACK_IMPORTED_MODULE_139__["Layers"]; });

/* harmony import */ var _icons_layout_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./icons/layout.js */ "./node_modules/feather-icon-literals/lib/icons/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _icons_layout_js__WEBPACK_IMPORTED_MODULE_140__["Layout"]; });

/* harmony import */ var _icons_life_buoy_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./icons/life-buoy.js */ "./node_modules/feather-icon-literals/lib/icons/life-buoy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LifeBuoy", function() { return _icons_life_buoy_js__WEBPACK_IMPORTED_MODULE_141__["LifeBuoy"]; });

/* harmony import */ var _icons_link_2_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./icons/link-2.js */ "./node_modules/feather-icon-literals/lib/icons/link-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link2", function() { return _icons_link_2_js__WEBPACK_IMPORTED_MODULE_142__["Link2"]; });

/* harmony import */ var _icons_link_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./icons/link.js */ "./node_modules/feather-icon-literals/lib/icons/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _icons_link_js__WEBPACK_IMPORTED_MODULE_143__["Link"]; });

/* harmony import */ var _icons_linkedin_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./icons/linkedin.js */ "./node_modules/feather-icon-literals/lib/icons/linkedin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return _icons_linkedin_js__WEBPACK_IMPORTED_MODULE_144__["Linkedin"]; });

/* harmony import */ var _icons_list_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./icons/list.js */ "./node_modules/feather-icon-literals/lib/icons/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _icons_list_js__WEBPACK_IMPORTED_MODULE_145__["List"]; });

/* harmony import */ var _icons_loader_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./icons/loader.js */ "./node_modules/feather-icon-literals/lib/icons/loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _icons_loader_js__WEBPACK_IMPORTED_MODULE_146__["Loader"]; });

/* harmony import */ var _icons_lock_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./icons/lock.js */ "./node_modules/feather-icon-literals/lib/icons/lock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lock", function() { return _icons_lock_js__WEBPACK_IMPORTED_MODULE_147__["Lock"]; });

/* harmony import */ var _icons_log_in_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./icons/log-in.js */ "./node_modules/feather-icon-literals/lib/icons/log-in.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return _icons_log_in_js__WEBPACK_IMPORTED_MODULE_148__["LogIn"]; });

/* harmony import */ var _icons_log_out_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./icons/log-out.js */ "./node_modules/feather-icon-literals/lib/icons/log-out.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return _icons_log_out_js__WEBPACK_IMPORTED_MODULE_149__["LogOut"]; });

/* harmony import */ var _icons_mail_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./icons/mail.js */ "./node_modules/feather-icon-literals/lib/icons/mail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return _icons_mail_js__WEBPACK_IMPORTED_MODULE_150__["Mail"]; });

/* harmony import */ var _icons_map_pin_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./icons/map-pin.js */ "./node_modules/feather-icon-literals/lib/icons/map-pin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapPin", function() { return _icons_map_pin_js__WEBPACK_IMPORTED_MODULE_151__["MapPin"]; });

/* harmony import */ var _icons_map_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./icons/map.js */ "./node_modules/feather-icon-literals/lib/icons/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _icons_map_js__WEBPACK_IMPORTED_MODULE_152__["Map"]; });

/* harmony import */ var _icons_maximize_2_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./icons/maximize-2.js */ "./node_modules/feather-icon-literals/lib/icons/maximize-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maximize2", function() { return _icons_maximize_2_js__WEBPACK_IMPORTED_MODULE_153__["Maximize2"]; });

/* harmony import */ var _icons_maximize_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./icons/maximize.js */ "./node_modules/feather-icon-literals/lib/icons/maximize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maximize", function() { return _icons_maximize_js__WEBPACK_IMPORTED_MODULE_154__["Maximize"]; });

/* harmony import */ var _icons_meh_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./icons/meh.js */ "./node_modules/feather-icon-literals/lib/icons/meh.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Meh", function() { return _icons_meh_js__WEBPACK_IMPORTED_MODULE_155__["Meh"]; });

/* harmony import */ var _icons_menu_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./icons/menu.js */ "./node_modules/feather-icon-literals/lib/icons/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _icons_menu_js__WEBPACK_IMPORTED_MODULE_156__["Menu"]; });

/* harmony import */ var _icons_message_circle_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./icons/message-circle.js */ "./node_modules/feather-icon-literals/lib/icons/message-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageCircle", function() { return _icons_message_circle_js__WEBPACK_IMPORTED_MODULE_157__["MessageCircle"]; });

/* harmony import */ var _icons_message_square_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./icons/message-square.js */ "./node_modules/feather-icon-literals/lib/icons/message-square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageSquare", function() { return _icons_message_square_js__WEBPACK_IMPORTED_MODULE_158__["MessageSquare"]; });

/* harmony import */ var _icons_mic_off_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./icons/mic-off.js */ "./node_modules/feather-icon-literals/lib/icons/mic-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MicOff", function() { return _icons_mic_off_js__WEBPACK_IMPORTED_MODULE_159__["MicOff"]; });

/* harmony import */ var _icons_mic_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./icons/mic.js */ "./node_modules/feather-icon-literals/lib/icons/mic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mic", function() { return _icons_mic_js__WEBPACK_IMPORTED_MODULE_160__["Mic"]; });

/* harmony import */ var _icons_minimize_2_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./icons/minimize-2.js */ "./node_modules/feather-icon-literals/lib/icons/minimize-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Minimize2", function() { return _icons_minimize_2_js__WEBPACK_IMPORTED_MODULE_161__["Minimize2"]; });

/* harmony import */ var _icons_minimize_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./icons/minimize.js */ "./node_modules/feather-icon-literals/lib/icons/minimize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Minimize", function() { return _icons_minimize_js__WEBPACK_IMPORTED_MODULE_162__["Minimize"]; });

/* harmony import */ var _icons_minus_circle_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./icons/minus-circle.js */ "./node_modules/feather-icon-literals/lib/icons/minus-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinusCircle", function() { return _icons_minus_circle_js__WEBPACK_IMPORTED_MODULE_163__["MinusCircle"]; });

/* harmony import */ var _icons_minus_square_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./icons/minus-square.js */ "./node_modules/feather-icon-literals/lib/icons/minus-square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinusSquare", function() { return _icons_minus_square_js__WEBPACK_IMPORTED_MODULE_164__["MinusSquare"]; });

/* harmony import */ var _icons_minus_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./icons/minus.js */ "./node_modules/feather-icon-literals/lib/icons/minus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Minus", function() { return _icons_minus_js__WEBPACK_IMPORTED_MODULE_165__["Minus"]; });

/* harmony import */ var _icons_monitor_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./icons/monitor.js */ "./node_modules/feather-icon-literals/lib/icons/monitor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return _icons_monitor_js__WEBPACK_IMPORTED_MODULE_166__["Monitor"]; });

/* harmony import */ var _icons_moon_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./icons/moon.js */ "./node_modules/feather-icon-literals/lib/icons/moon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Moon", function() { return _icons_moon_js__WEBPACK_IMPORTED_MODULE_167__["Moon"]; });

/* harmony import */ var _icons_more_horizontal_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./icons/more-horizontal.js */ "./node_modules/feather-icon-literals/lib/icons/more-horizontal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoreHorizontal", function() { return _icons_more_horizontal_js__WEBPACK_IMPORTED_MODULE_168__["MoreHorizontal"]; });

/* harmony import */ var _icons_more_vertical_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./icons/more-vertical.js */ "./node_modules/feather-icon-literals/lib/icons/more-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoreVertical", function() { return _icons_more_vertical_js__WEBPACK_IMPORTED_MODULE_169__["MoreVertical"]; });

/* harmony import */ var _icons_mouse_pointer_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./icons/mouse-pointer.js */ "./node_modules/feather-icon-literals/lib/icons/mouse-pointer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MousePointer", function() { return _icons_mouse_pointer_js__WEBPACK_IMPORTED_MODULE_170__["MousePointer"]; });

/* harmony import */ var _icons_move_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./icons/move.js */ "./node_modules/feather-icon-literals/lib/icons/move.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return _icons_move_js__WEBPACK_IMPORTED_MODULE_171__["Move"]; });

/* harmony import */ var _icons_music_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./icons/music.js */ "./node_modules/feather-icon-literals/lib/icons/music.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Music", function() { return _icons_music_js__WEBPACK_IMPORTED_MODULE_172__["Music"]; });

/* harmony import */ var _icons_navigation_2_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./icons/navigation-2.js */ "./node_modules/feather-icon-literals/lib/icons/navigation-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation2", function() { return _icons_navigation_2_js__WEBPACK_IMPORTED_MODULE_173__["Navigation2"]; });

/* harmony import */ var _icons_navigation_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./icons/navigation.js */ "./node_modules/feather-icon-literals/lib/icons/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _icons_navigation_js__WEBPACK_IMPORTED_MODULE_174__["Navigation"]; });

/* harmony import */ var _icons_octagon_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./icons/octagon.js */ "./node_modules/feather-icon-literals/lib/icons/octagon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Octagon", function() { return _icons_octagon_js__WEBPACK_IMPORTED_MODULE_175__["Octagon"]; });

/* harmony import */ var _icons_package_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./icons/package.js */ "./node_modules/feather-icon-literals/lib/icons/package.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return _icons_package_js__WEBPACK_IMPORTED_MODULE_176__["Package"]; });

/* harmony import */ var _icons_paperclip_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./icons/paperclip.js */ "./node_modules/feather-icon-literals/lib/icons/paperclip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paperclip", function() { return _icons_paperclip_js__WEBPACK_IMPORTED_MODULE_177__["Paperclip"]; });

/* harmony import */ var _icons_pause_circle_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./icons/pause-circle.js */ "./node_modules/feather-icon-literals/lib/icons/pause-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseCircle", function() { return _icons_pause_circle_js__WEBPACK_IMPORTED_MODULE_178__["PauseCircle"]; });

/* harmony import */ var _icons_pause_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./icons/pause.js */ "./node_modules/feather-icon-literals/lib/icons/pause.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pause", function() { return _icons_pause_js__WEBPACK_IMPORTED_MODULE_179__["Pause"]; });

/* harmony import */ var _icons_pen_tool_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./icons/pen-tool.js */ "./node_modules/feather-icon-literals/lib/icons/pen-tool.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PenTool", function() { return _icons_pen_tool_js__WEBPACK_IMPORTED_MODULE_180__["PenTool"]; });

/* harmony import */ var _icons_percent_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./icons/percent.js */ "./node_modules/feather-icon-literals/lib/icons/percent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return _icons_percent_js__WEBPACK_IMPORTED_MODULE_181__["Percent"]; });

/* harmony import */ var _icons_phone_call_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./icons/phone-call.js */ "./node_modules/feather-icon-literals/lib/icons/phone-call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneCall", function() { return _icons_phone_call_js__WEBPACK_IMPORTED_MODULE_182__["PhoneCall"]; });

/* harmony import */ var _icons_phone_forwarded_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./icons/phone-forwarded.js */ "./node_modules/feather-icon-literals/lib/icons/phone-forwarded.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneForwarded", function() { return _icons_phone_forwarded_js__WEBPACK_IMPORTED_MODULE_183__["PhoneForwarded"]; });

/* harmony import */ var _icons_phone_incoming_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./icons/phone-incoming.js */ "./node_modules/feather-icon-literals/lib/icons/phone-incoming.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneIncoming", function() { return _icons_phone_incoming_js__WEBPACK_IMPORTED_MODULE_184__["PhoneIncoming"]; });

/* harmony import */ var _icons_phone_missed_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./icons/phone-missed.js */ "./node_modules/feather-icon-literals/lib/icons/phone-missed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneMissed", function() { return _icons_phone_missed_js__WEBPACK_IMPORTED_MODULE_185__["PhoneMissed"]; });

/* harmony import */ var _icons_phone_off_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./icons/phone-off.js */ "./node_modules/feather-icon-literals/lib/icons/phone-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneOff", function() { return _icons_phone_off_js__WEBPACK_IMPORTED_MODULE_186__["PhoneOff"]; });

/* harmony import */ var _icons_phone_outgoing_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./icons/phone-outgoing.js */ "./node_modules/feather-icon-literals/lib/icons/phone-outgoing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneOutgoing", function() { return _icons_phone_outgoing_js__WEBPACK_IMPORTED_MODULE_187__["PhoneOutgoing"]; });

/* harmony import */ var _icons_phone_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./icons/phone.js */ "./node_modules/feather-icon-literals/lib/icons/phone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return _icons_phone_js__WEBPACK_IMPORTED_MODULE_188__["Phone"]; });

/* harmony import */ var _icons_pie_chart_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./icons/pie-chart.js */ "./node_modules/feather-icon-literals/lib/icons/pie-chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return _icons_pie_chart_js__WEBPACK_IMPORTED_MODULE_189__["PieChart"]; });

/* harmony import */ var _icons_play_circle_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./icons/play-circle.js */ "./node_modules/feather-icon-literals/lib/icons/play-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayCircle", function() { return _icons_play_circle_js__WEBPACK_IMPORTED_MODULE_190__["PlayCircle"]; });

/* harmony import */ var _icons_play_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./icons/play.js */ "./node_modules/feather-icon-literals/lib/icons/play.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return _icons_play_js__WEBPACK_IMPORTED_MODULE_191__["Play"]; });

/* harmony import */ var _icons_plus_circle_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./icons/plus-circle.js */ "./node_modules/feather-icon-literals/lib/icons/plus-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlusCircle", function() { return _icons_plus_circle_js__WEBPACK_IMPORTED_MODULE_192__["PlusCircle"]; });

/* harmony import */ var _icons_plus_square_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./icons/plus-square.js */ "./node_modules/feather-icon-literals/lib/icons/plus-square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlusSquare", function() { return _icons_plus_square_js__WEBPACK_IMPORTED_MODULE_193__["PlusSquare"]; });

/* harmony import */ var _icons_plus_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./icons/plus.js */ "./node_modules/feather-icon-literals/lib/icons/plus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return _icons_plus_js__WEBPACK_IMPORTED_MODULE_194__["Plus"]; });

/* harmony import */ var _icons_pocket_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./icons/pocket.js */ "./node_modules/feather-icon-literals/lib/icons/pocket.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pocket", function() { return _icons_pocket_js__WEBPACK_IMPORTED_MODULE_195__["Pocket"]; });

/* harmony import */ var _icons_power_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./icons/power.js */ "./node_modules/feather-icon-literals/lib/icons/power.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power", function() { return _icons_power_js__WEBPACK_IMPORTED_MODULE_196__["Power"]; });

/* harmony import */ var _icons_printer_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./icons/printer.js */ "./node_modules/feather-icon-literals/lib/icons/printer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Printer", function() { return _icons_printer_js__WEBPACK_IMPORTED_MODULE_197__["Printer"]; });

/* harmony import */ var _icons_radio_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./icons/radio.js */ "./node_modules/feather-icon-literals/lib/icons/radio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _icons_radio_js__WEBPACK_IMPORTED_MODULE_198__["Radio"]; });

/* harmony import */ var _icons_refresh_ccw_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./icons/refresh-ccw.js */ "./node_modules/feather-icon-literals/lib/icons/refresh-ccw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshCcw", function() { return _icons_refresh_ccw_js__WEBPACK_IMPORTED_MODULE_199__["RefreshCcw"]; });

/* harmony import */ var _icons_refresh_cw_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./icons/refresh-cw.js */ "./node_modules/feather-icon-literals/lib/icons/refresh-cw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshCw", function() { return _icons_refresh_cw_js__WEBPACK_IMPORTED_MODULE_200__["RefreshCw"]; });

/* harmony import */ var _icons_repeat_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./icons/repeat.js */ "./node_modules/feather-icon-literals/lib/icons/repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return _icons_repeat_js__WEBPACK_IMPORTED_MODULE_201__["Repeat"]; });

/* harmony import */ var _icons_rewind_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./icons/rewind.js */ "./node_modules/feather-icon-literals/lib/icons/rewind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rewind", function() { return _icons_rewind_js__WEBPACK_IMPORTED_MODULE_202__["Rewind"]; });

/* harmony import */ var _icons_rotate_ccw_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./icons/rotate-ccw.js */ "./node_modules/feather-icon-literals/lib/icons/rotate-ccw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RotateCcw", function() { return _icons_rotate_ccw_js__WEBPACK_IMPORTED_MODULE_203__["RotateCcw"]; });

/* harmony import */ var _icons_rotate_cw_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./icons/rotate-cw.js */ "./node_modules/feather-icon-literals/lib/icons/rotate-cw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RotateCw", function() { return _icons_rotate_cw_js__WEBPACK_IMPORTED_MODULE_204__["RotateCw"]; });

/* harmony import */ var _icons_rss_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./icons/rss.js */ "./node_modules/feather-icon-literals/lib/icons/rss.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rss", function() { return _icons_rss_js__WEBPACK_IMPORTED_MODULE_205__["Rss"]; });

/* harmony import */ var _icons_save_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./icons/save.js */ "./node_modules/feather-icon-literals/lib/icons/save.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return _icons_save_js__WEBPACK_IMPORTED_MODULE_206__["Save"]; });

/* harmony import */ var _icons_scissors_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./icons/scissors.js */ "./node_modules/feather-icon-literals/lib/icons/scissors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scissors", function() { return _icons_scissors_js__WEBPACK_IMPORTED_MODULE_207__["Scissors"]; });

/* harmony import */ var _icons_search_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./icons/search.js */ "./node_modules/feather-icon-literals/lib/icons/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _icons_search_js__WEBPACK_IMPORTED_MODULE_208__["Search"]; });

/* harmony import */ var _icons_send_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./icons/send.js */ "./node_modules/feather-icon-literals/lib/icons/send.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Send", function() { return _icons_send_js__WEBPACK_IMPORTED_MODULE_209__["Send"]; });

/* harmony import */ var _icons_server_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./icons/server.js */ "./node_modules/feather-icon-literals/lib/icons/server.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return _icons_server_js__WEBPACK_IMPORTED_MODULE_210__["Server"]; });

/* harmony import */ var _icons_settings_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./icons/settings.js */ "./node_modules/feather-icon-literals/lib/icons/settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _icons_settings_js__WEBPACK_IMPORTED_MODULE_211__["Settings"]; });

/* harmony import */ var _icons_share_2_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./icons/share-2.js */ "./node_modules/feather-icon-literals/lib/icons/share-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share2", function() { return _icons_share_2_js__WEBPACK_IMPORTED_MODULE_212__["Share2"]; });

/* harmony import */ var _icons_share_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./icons/share.js */ "./node_modules/feather-icon-literals/lib/icons/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _icons_share_js__WEBPACK_IMPORTED_MODULE_213__["Share"]; });

/* harmony import */ var _icons_shield_off_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./icons/shield-off.js */ "./node_modules/feather-icon-literals/lib/icons/shield-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShieldOff", function() { return _icons_shield_off_js__WEBPACK_IMPORTED_MODULE_214__["ShieldOff"]; });

/* harmony import */ var _icons_shield_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./icons/shield.js */ "./node_modules/feather-icon-literals/lib/icons/shield.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _icons_shield_js__WEBPACK_IMPORTED_MODULE_215__["Shield"]; });

/* harmony import */ var _icons_shopping_bag_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./icons/shopping-bag.js */ "./node_modules/feather-icon-literals/lib/icons/shopping-bag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShoppingBag", function() { return _icons_shopping_bag_js__WEBPACK_IMPORTED_MODULE_216__["ShoppingBag"]; });

/* harmony import */ var _icons_shopping_cart_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./icons/shopping-cart.js */ "./node_modules/feather-icon-literals/lib/icons/shopping-cart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return _icons_shopping_cart_js__WEBPACK_IMPORTED_MODULE_217__["ShoppingCart"]; });

/* harmony import */ var _icons_shuffle_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./icons/shuffle.js */ "./node_modules/feather-icon-literals/lib/icons/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shuffle", function() { return _icons_shuffle_js__WEBPACK_IMPORTED_MODULE_218__["Shuffle"]; });

/* harmony import */ var _icons_sidebar_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./icons/sidebar.js */ "./node_modules/feather-icon-literals/lib/icons/sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _icons_sidebar_js__WEBPACK_IMPORTED_MODULE_219__["Sidebar"]; });

/* harmony import */ var _icons_skip_back_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./icons/skip-back.js */ "./node_modules/feather-icon-literals/lib/icons/skip-back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipBack", function() { return _icons_skip_back_js__WEBPACK_IMPORTED_MODULE_220__["SkipBack"]; });

/* harmony import */ var _icons_skip_forward_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./icons/skip-forward.js */ "./node_modules/feather-icon-literals/lib/icons/skip-forward.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipForward", function() { return _icons_skip_forward_js__WEBPACK_IMPORTED_MODULE_221__["SkipForward"]; });

/* harmony import */ var _icons_slack_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./icons/slack.js */ "./node_modules/feather-icon-literals/lib/icons/slack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slack", function() { return _icons_slack_js__WEBPACK_IMPORTED_MODULE_222__["Slack"]; });

/* harmony import */ var _icons_slash_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./icons/slash.js */ "./node_modules/feather-icon-literals/lib/icons/slash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slash", function() { return _icons_slash_js__WEBPACK_IMPORTED_MODULE_223__["Slash"]; });

/* harmony import */ var _icons_sliders_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./icons/sliders.js */ "./node_modules/feather-icon-literals/lib/icons/sliders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sliders", function() { return _icons_sliders_js__WEBPACK_IMPORTED_MODULE_224__["Sliders"]; });

/* harmony import */ var _icons_smartphone_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./icons/smartphone.js */ "./node_modules/feather-icon-literals/lib/icons/smartphone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Smartphone", function() { return _icons_smartphone_js__WEBPACK_IMPORTED_MODULE_225__["Smartphone"]; });

/* harmony import */ var _icons_smile_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./icons/smile.js */ "./node_modules/feather-icon-literals/lib/icons/smile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Smile", function() { return _icons_smile_js__WEBPACK_IMPORTED_MODULE_226__["Smile"]; });

/* harmony import */ var _icons_speaker_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./icons/speaker.js */ "./node_modules/feather-icon-literals/lib/icons/speaker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return _icons_speaker_js__WEBPACK_IMPORTED_MODULE_227__["Speaker"]; });

/* harmony import */ var _icons_square_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./icons/square.js */ "./node_modules/feather-icon-literals/lib/icons/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return _icons_square_js__WEBPACK_IMPORTED_MODULE_228__["Square"]; });

/* harmony import */ var _icons_star_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./icons/star.js */ "./node_modules/feather-icon-literals/lib/icons/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return _icons_star_js__WEBPACK_IMPORTED_MODULE_229__["Star"]; });

/* harmony import */ var _icons_stop_circle_js__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./icons/stop-circle.js */ "./node_modules/feather-icon-literals/lib/icons/stop-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StopCircle", function() { return _icons_stop_circle_js__WEBPACK_IMPORTED_MODULE_230__["StopCircle"]; });

/* harmony import */ var _icons_sun_js__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./icons/sun.js */ "./node_modules/feather-icon-literals/lib/icons/sun.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sun", function() { return _icons_sun_js__WEBPACK_IMPORTED_MODULE_231__["Sun"]; });

/* harmony import */ var _icons_sunrise_js__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! ./icons/sunrise.js */ "./node_modules/feather-icon-literals/lib/icons/sunrise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sunrise", function() { return _icons_sunrise_js__WEBPACK_IMPORTED_MODULE_232__["Sunrise"]; });

/* harmony import */ var _icons_sunset_js__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! ./icons/sunset.js */ "./node_modules/feather-icon-literals/lib/icons/sunset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sunset", function() { return _icons_sunset_js__WEBPACK_IMPORTED_MODULE_233__["Sunset"]; });

/* harmony import */ var _icons_tablet_js__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! ./icons/tablet.js */ "./node_modules/feather-icon-literals/lib/icons/tablet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tablet", function() { return _icons_tablet_js__WEBPACK_IMPORTED_MODULE_234__["Tablet"]; });

/* harmony import */ var _icons_tag_js__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! ./icons/tag.js */ "./node_modules/feather-icon-literals/lib/icons/tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _icons_tag_js__WEBPACK_IMPORTED_MODULE_235__["Tag"]; });

/* harmony import */ var _icons_target_js__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! ./icons/target.js */ "./node_modules/feather-icon-literals/lib/icons/target.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return _icons_target_js__WEBPACK_IMPORTED_MODULE_236__["Target"]; });

/* harmony import */ var _icons_terminal_js__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! ./icons/terminal.js */ "./node_modules/feather-icon-literals/lib/icons/terminal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return _icons_terminal_js__WEBPACK_IMPORTED_MODULE_237__["Terminal"]; });

/* harmony import */ var _icons_thermometer_js__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! ./icons/thermometer.js */ "./node_modules/feather-icon-literals/lib/icons/thermometer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thermometer", function() { return _icons_thermometer_js__WEBPACK_IMPORTED_MODULE_238__["Thermometer"]; });

/* harmony import */ var _icons_thumbs_down_js__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(/*! ./icons/thumbs-down.js */ "./node_modules/feather-icon-literals/lib/icons/thumbs-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbsDown", function() { return _icons_thumbs_down_js__WEBPACK_IMPORTED_MODULE_239__["ThumbsDown"]; });

/* harmony import */ var _icons_thumbs_up_js__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(/*! ./icons/thumbs-up.js */ "./node_modules/feather-icon-literals/lib/icons/thumbs-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbsUp", function() { return _icons_thumbs_up_js__WEBPACK_IMPORTED_MODULE_240__["ThumbsUp"]; });

/* harmony import */ var _icons_toggle_left_js__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(/*! ./icons/toggle-left.js */ "./node_modules/feather-icon-literals/lib/icons/toggle-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleLeft", function() { return _icons_toggle_left_js__WEBPACK_IMPORTED_MODULE_241__["ToggleLeft"]; });

/* harmony import */ var _icons_toggle_right_js__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(/*! ./icons/toggle-right.js */ "./node_modules/feather-icon-literals/lib/icons/toggle-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleRight", function() { return _icons_toggle_right_js__WEBPACK_IMPORTED_MODULE_242__["ToggleRight"]; });

/* harmony import */ var _icons_tool_js__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(/*! ./icons/tool.js */ "./node_modules/feather-icon-literals/lib/icons/tool.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return _icons_tool_js__WEBPACK_IMPORTED_MODULE_243__["Tool"]; });

/* harmony import */ var _icons_trash_2_js__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(/*! ./icons/trash-2.js */ "./node_modules/feather-icon-literals/lib/icons/trash-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trash2", function() { return _icons_trash_2_js__WEBPACK_IMPORTED_MODULE_244__["Trash2"]; });

/* harmony import */ var _icons_trash_js__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(/*! ./icons/trash.js */ "./node_modules/feather-icon-literals/lib/icons/trash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trash", function() { return _icons_trash_js__WEBPACK_IMPORTED_MODULE_245__["Trash"]; });

/* harmony import */ var _icons_trello_js__WEBPACK_IMPORTED_MODULE_246__ = __webpack_require__(/*! ./icons/trello.js */ "./node_modules/feather-icon-literals/lib/icons/trello.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trello", function() { return _icons_trello_js__WEBPACK_IMPORTED_MODULE_246__["Trello"]; });

/* harmony import */ var _icons_trending_down_js__WEBPACK_IMPORTED_MODULE_247__ = __webpack_require__(/*! ./icons/trending-down.js */ "./node_modules/feather-icon-literals/lib/icons/trending-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrendingDown", function() { return _icons_trending_down_js__WEBPACK_IMPORTED_MODULE_247__["TrendingDown"]; });

/* harmony import */ var _icons_trending_up_js__WEBPACK_IMPORTED_MODULE_248__ = __webpack_require__(/*! ./icons/trending-up.js */ "./node_modules/feather-icon-literals/lib/icons/trending-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrendingUp", function() { return _icons_trending_up_js__WEBPACK_IMPORTED_MODULE_248__["TrendingUp"]; });

/* harmony import */ var _icons_triangle_js__WEBPACK_IMPORTED_MODULE_249__ = __webpack_require__(/*! ./icons/triangle.js */ "./node_modules/feather-icon-literals/lib/icons/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return _icons_triangle_js__WEBPACK_IMPORTED_MODULE_249__["Triangle"]; });

/* harmony import */ var _icons_truck_js__WEBPACK_IMPORTED_MODULE_250__ = __webpack_require__(/*! ./icons/truck.js */ "./node_modules/feather-icon-literals/lib/icons/truck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Truck", function() { return _icons_truck_js__WEBPACK_IMPORTED_MODULE_250__["Truck"]; });

/* harmony import */ var _icons_tv_js__WEBPACK_IMPORTED_MODULE_251__ = __webpack_require__(/*! ./icons/tv.js */ "./node_modules/feather-icon-literals/lib/icons/tv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tv", function() { return _icons_tv_js__WEBPACK_IMPORTED_MODULE_251__["Tv"]; });

/* harmony import */ var _icons_twitch_js__WEBPACK_IMPORTED_MODULE_252__ = __webpack_require__(/*! ./icons/twitch.js */ "./node_modules/feather-icon-literals/lib/icons/twitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Twitch", function() { return _icons_twitch_js__WEBPACK_IMPORTED_MODULE_252__["Twitch"]; });

/* harmony import */ var _icons_twitter_js__WEBPACK_IMPORTED_MODULE_253__ = __webpack_require__(/*! ./icons/twitter.js */ "./node_modules/feather-icon-literals/lib/icons/twitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return _icons_twitter_js__WEBPACK_IMPORTED_MODULE_253__["Twitter"]; });

/* harmony import */ var _icons_type_js__WEBPACK_IMPORTED_MODULE_254__ = __webpack_require__(/*! ./icons/type.js */ "./node_modules/feather-icon-literals/lib/icons/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _icons_type_js__WEBPACK_IMPORTED_MODULE_254__["Type"]; });

/* harmony import */ var _icons_umbrella_js__WEBPACK_IMPORTED_MODULE_255__ = __webpack_require__(/*! ./icons/umbrella.js */ "./node_modules/feather-icon-literals/lib/icons/umbrella.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Umbrella", function() { return _icons_umbrella_js__WEBPACK_IMPORTED_MODULE_255__["Umbrella"]; });

/* harmony import */ var _icons_underline_js__WEBPACK_IMPORTED_MODULE_256__ = __webpack_require__(/*! ./icons/underline.js */ "./node_modules/feather-icon-literals/lib/icons/underline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Underline", function() { return _icons_underline_js__WEBPACK_IMPORTED_MODULE_256__["Underline"]; });

/* harmony import */ var _icons_unlock_js__WEBPACK_IMPORTED_MODULE_257__ = __webpack_require__(/*! ./icons/unlock.js */ "./node_modules/feather-icon-literals/lib/icons/unlock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Unlock", function() { return _icons_unlock_js__WEBPACK_IMPORTED_MODULE_257__["Unlock"]; });

/* harmony import */ var _icons_upload_cloud_js__WEBPACK_IMPORTED_MODULE_258__ = __webpack_require__(/*! ./icons/upload-cloud.js */ "./node_modules/feather-icon-literals/lib/icons/upload-cloud.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadCloud", function() { return _icons_upload_cloud_js__WEBPACK_IMPORTED_MODULE_258__["UploadCloud"]; });

/* harmony import */ var _icons_upload_js__WEBPACK_IMPORTED_MODULE_259__ = __webpack_require__(/*! ./icons/upload.js */ "./node_modules/feather-icon-literals/lib/icons/upload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _icons_upload_js__WEBPACK_IMPORTED_MODULE_259__["Upload"]; });

/* harmony import */ var _icons_user_check_js__WEBPACK_IMPORTED_MODULE_260__ = __webpack_require__(/*! ./icons/user-check.js */ "./node_modules/feather-icon-literals/lib/icons/user-check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserCheck", function() { return _icons_user_check_js__WEBPACK_IMPORTED_MODULE_260__["UserCheck"]; });

/* harmony import */ var _icons_user_minus_js__WEBPACK_IMPORTED_MODULE_261__ = __webpack_require__(/*! ./icons/user-minus.js */ "./node_modules/feather-icon-literals/lib/icons/user-minus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserMinus", function() { return _icons_user_minus_js__WEBPACK_IMPORTED_MODULE_261__["UserMinus"]; });

/* harmony import */ var _icons_user_plus_js__WEBPACK_IMPORTED_MODULE_262__ = __webpack_require__(/*! ./icons/user-plus.js */ "./node_modules/feather-icon-literals/lib/icons/user-plus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPlus", function() { return _icons_user_plus_js__WEBPACK_IMPORTED_MODULE_262__["UserPlus"]; });

/* harmony import */ var _icons_user_x_js__WEBPACK_IMPORTED_MODULE_263__ = __webpack_require__(/*! ./icons/user-x.js */ "./node_modules/feather-icon-literals/lib/icons/user-x.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserX", function() { return _icons_user_x_js__WEBPACK_IMPORTED_MODULE_263__["UserX"]; });

/* harmony import */ var _icons_user_js__WEBPACK_IMPORTED_MODULE_264__ = __webpack_require__(/*! ./icons/user.js */ "./node_modules/feather-icon-literals/lib/icons/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _icons_user_js__WEBPACK_IMPORTED_MODULE_264__["User"]; });

/* harmony import */ var _icons_users_js__WEBPACK_IMPORTED_MODULE_265__ = __webpack_require__(/*! ./icons/users.js */ "./node_modules/feather-icon-literals/lib/icons/users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _icons_users_js__WEBPACK_IMPORTED_MODULE_265__["Users"]; });

/* harmony import */ var _icons_video_off_js__WEBPACK_IMPORTED_MODULE_266__ = __webpack_require__(/*! ./icons/video-off.js */ "./node_modules/feather-icon-literals/lib/icons/video-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOff", function() { return _icons_video_off_js__WEBPACK_IMPORTED_MODULE_266__["VideoOff"]; });

/* harmony import */ var _icons_video_js__WEBPACK_IMPORTED_MODULE_267__ = __webpack_require__(/*! ./icons/video.js */ "./node_modules/feather-icon-literals/lib/icons/video.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _icons_video_js__WEBPACK_IMPORTED_MODULE_267__["Video"]; });

/* harmony import */ var _icons_voicemail_js__WEBPACK_IMPORTED_MODULE_268__ = __webpack_require__(/*! ./icons/voicemail.js */ "./node_modules/feather-icon-literals/lib/icons/voicemail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Voicemail", function() { return _icons_voicemail_js__WEBPACK_IMPORTED_MODULE_268__["Voicemail"]; });

/* harmony import */ var _icons_volume_1_js__WEBPACK_IMPORTED_MODULE_269__ = __webpack_require__(/*! ./icons/volume-1.js */ "./node_modules/feather-icon-literals/lib/icons/volume-1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Volume1", function() { return _icons_volume_1_js__WEBPACK_IMPORTED_MODULE_269__["Volume1"]; });

/* harmony import */ var _icons_volume_2_js__WEBPACK_IMPORTED_MODULE_270__ = __webpack_require__(/*! ./icons/volume-2.js */ "./node_modules/feather-icon-literals/lib/icons/volume-2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Volume2", function() { return _icons_volume_2_js__WEBPACK_IMPORTED_MODULE_270__["Volume2"]; });

/* harmony import */ var _icons_volume_x_js__WEBPACK_IMPORTED_MODULE_271__ = __webpack_require__(/*! ./icons/volume-x.js */ "./node_modules/feather-icon-literals/lib/icons/volume-x.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeX", function() { return _icons_volume_x_js__WEBPACK_IMPORTED_MODULE_271__["VolumeX"]; });

/* harmony import */ var _icons_volume_js__WEBPACK_IMPORTED_MODULE_272__ = __webpack_require__(/*! ./icons/volume.js */ "./node_modules/feather-icon-literals/lib/icons/volume.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Volume", function() { return _icons_volume_js__WEBPACK_IMPORTED_MODULE_272__["Volume"]; });

/* harmony import */ var _icons_watch_js__WEBPACK_IMPORTED_MODULE_273__ = __webpack_require__(/*! ./icons/watch.js */ "./node_modules/feather-icon-literals/lib/icons/watch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return _icons_watch_js__WEBPACK_IMPORTED_MODULE_273__["Watch"]; });

/* harmony import */ var _icons_wifi_off_js__WEBPACK_IMPORTED_MODULE_274__ = __webpack_require__(/*! ./icons/wifi-off.js */ "./node_modules/feather-icon-literals/lib/icons/wifi-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WifiOff", function() { return _icons_wifi_off_js__WEBPACK_IMPORTED_MODULE_274__["WifiOff"]; });

/* harmony import */ var _icons_wifi_js__WEBPACK_IMPORTED_MODULE_275__ = __webpack_require__(/*! ./icons/wifi.js */ "./node_modules/feather-icon-literals/lib/icons/wifi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wifi", function() { return _icons_wifi_js__WEBPACK_IMPORTED_MODULE_275__["Wifi"]; });

/* harmony import */ var _icons_wind_js__WEBPACK_IMPORTED_MODULE_276__ = __webpack_require__(/*! ./icons/wind.js */ "./node_modules/feather-icon-literals/lib/icons/wind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wind", function() { return _icons_wind_js__WEBPACK_IMPORTED_MODULE_276__["Wind"]; });

/* harmony import */ var _icons_x_circle_js__WEBPACK_IMPORTED_MODULE_277__ = __webpack_require__(/*! ./icons/x-circle.js */ "./node_modules/feather-icon-literals/lib/icons/x-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XCircle", function() { return _icons_x_circle_js__WEBPACK_IMPORTED_MODULE_277__["XCircle"]; });

/* harmony import */ var _icons_x_octagon_js__WEBPACK_IMPORTED_MODULE_278__ = __webpack_require__(/*! ./icons/x-octagon.js */ "./node_modules/feather-icon-literals/lib/icons/x-octagon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XOctagon", function() { return _icons_x_octagon_js__WEBPACK_IMPORTED_MODULE_278__["XOctagon"]; });

/* harmony import */ var _icons_x_square_js__WEBPACK_IMPORTED_MODULE_279__ = __webpack_require__(/*! ./icons/x-square.js */ "./node_modules/feather-icon-literals/lib/icons/x-square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XSquare", function() { return _icons_x_square_js__WEBPACK_IMPORTED_MODULE_279__["XSquare"]; });

/* harmony import */ var _icons_x_js__WEBPACK_IMPORTED_MODULE_280__ = __webpack_require__(/*! ./icons/x.js */ "./node_modules/feather-icon-literals/lib/icons/x.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "X", function() { return _icons_x_js__WEBPACK_IMPORTED_MODULE_280__["X"]; });

/* harmony import */ var _icons_youtube_js__WEBPACK_IMPORTED_MODULE_281__ = __webpack_require__(/*! ./icons/youtube.js */ "./node_modules/feather-icon-literals/lib/icons/youtube.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return _icons_youtube_js__WEBPACK_IMPORTED_MODULE_281__["Youtube"]; });

/* harmony import */ var _icons_zap_off_js__WEBPACK_IMPORTED_MODULE_282__ = __webpack_require__(/*! ./icons/zap-off.js */ "./node_modules/feather-icon-literals/lib/icons/zap-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZapOff", function() { return _icons_zap_off_js__WEBPACK_IMPORTED_MODULE_282__["ZapOff"]; });

/* harmony import */ var _icons_zap_js__WEBPACK_IMPORTED_MODULE_283__ = __webpack_require__(/*! ./icons/zap.js */ "./node_modules/feather-icon-literals/lib/icons/zap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zap", function() { return _icons_zap_js__WEBPACK_IMPORTED_MODULE_283__["Zap"]; });

/* harmony import */ var _icons_zoom_in_js__WEBPACK_IMPORTED_MODULE_284__ = __webpack_require__(/*! ./icons/zoom-in.js */ "./node_modules/feather-icon-literals/lib/icons/zoom-in.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomIn", function() { return _icons_zoom_in_js__WEBPACK_IMPORTED_MODULE_284__["ZoomIn"]; });

/* harmony import */ var _icons_zoom_out_js__WEBPACK_IMPORTED_MODULE_285__ = __webpack_require__(/*! ./icons/zoom-out.js */ "./node_modules/feather-icon-literals/lib/icons/zoom-out.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomOut", function() { return _icons_zoom_out_js__WEBPACK_IMPORTED_MODULE_285__["ZoomOut"]; });

/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_286__ = __webpack_require__(/*! ./custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_286__["setCustomTemplateLiteralTag"]; });



































































































































































































































































































/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/activity.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/activity.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Activity = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Activity',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-activity-${count}`}"
    aria-describedby="${`title-activity-${count}`}"
  >
    <title id="${`title-activity-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-activity-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/airplay.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/airplay.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Airplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airplay", function() { return Airplay; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Airplay = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Airplay',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-airplay-${count}`}"
    aria-describedby="${`title-airplay-${count}`}"
  >
    <title id="${`title-airplay-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-airplay-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
    <polygon points="12 15 17 21 7 21 12 15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/alert-circle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/alert-circle.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AlertCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCircle", function() { return AlertCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AlertCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Alert Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-alert-circle-${count}`}"
    aria-describedby="${`title-alert-circle-${count}`}"
  >
    <title id="${`title-alert-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-alert-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/alert-octagon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/alert-octagon.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AlertOctagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertOctagon", function() { return AlertOctagon; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AlertOctagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Alert Octagon',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-alert-octagon-${count}`}"
    aria-describedby="${`title-alert-octagon-${count}`}"
  >
    <title id="${`title-alert-octagon-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-alert-octagon-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/alert-triangle.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/alert-triangle.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AlertTriangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertTriangle", function() { return AlertTriangle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AlertTriangle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Alert Triangle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-alert-triangle-${count}`}"
    aria-describedby="${`title-alert-triangle-${count}`}"
  >
    <title id="${`title-alert-triangle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-alert-triangle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/align-center.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/align-center.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AlignCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignCenter", function() { return AlignCenter; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AlignCenter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Center',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-align-center-${count}`}"
    aria-describedby="${`title-align-center-${count}`}"
  >
    <title id="${`title-align-center-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-align-center-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="18" y1="10" x2="6" y2="10" />
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="14" x2="3" y2="14" />
    <line x1="18" y1="18" x2="6" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/align-justify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/align-justify.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AlignJustify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignJustify", function() { return AlignJustify; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AlignJustify = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Justify',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-align-justify-${count}`}"
    aria-describedby="${`title-align-justify-${count}`}"
  >
    <title id="${`title-align-justify-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-align-justify-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="21" y1="10" x2="3" y2="10" />
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="14" x2="3" y2="14" />
    <line x1="21" y1="18" x2="3" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/align-left.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/align-left.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AlignLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignLeft", function() { return AlignLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AlignLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-align-left-${count}`}"
    aria-describedby="${`title-align-left-${count}`}"
  >
    <title id="${`title-align-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-align-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="17" y1="10" x2="3" y2="10" />
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="14" x2="3" y2="14" />
    <line x1="17" y1="18" x2="3" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/align-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/align-right.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AlignRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignRight", function() { return AlignRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AlignRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-align-right-${count}`}"
    aria-describedby="${`title-align-right-${count}`}"
  >
    <title id="${`title-align-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-align-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="21" y1="10" x2="7" y2="10" />
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="14" x2="3" y2="14" />
    <line x1="21" y1="18" x2="7" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/anchor.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/anchor.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Anchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Anchor = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Anchor',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-anchor-${count}`}"
    aria-describedby="${`title-anchor-${count}`}"
  >
    <title id="${`title-anchor-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-anchor-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/aperture.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/aperture.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Aperture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aperture", function() { return Aperture; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Aperture = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Aperture',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-aperture-${count}`}"
    aria-describedby="${`title-aperture-${count}`}"
  >
    <title id="${`title-aperture-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-aperture-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
    <line x1="9.69" y1="8" x2="21.17" y2="8" />
    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
    <line x1="14.31" y1="16" x2="2.83" y2="16" />
    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/archive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/archive.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Archive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archive", function() { return Archive; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Archive = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Archive',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-archive-${count}`}"
    aria-describedby="${`title-archive-${count}`}"
  >
    <title id="${`title-archive-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-archive-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-down-circle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-down-circle.js ***!
  \***************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowDownCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownCircle", function() { return ArrowDownCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowDownCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-down-circle-${count}`}"
    aria-describedby="${`title-arrow-down-circle-${count}`}"
  >
    <title id="${`title-arrow-down-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-down-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 12 16 16 12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-down-left.js":
/*!*************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-down-left.js ***!
  \*************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowDownLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownLeft", function() { return ArrowDownLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowDownLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-down-left-${count}`}"
    aria-describedby="${`title-arrow-down-left-${count}`}"
  >
    <title id="${`title-arrow-down-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-down-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="17" y1="7" x2="7" y2="17" />
    <polyline points="17 17 7 17 7 7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-down-right.js":
/*!**************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-down-right.js ***!
  \**************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowDownRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownRight", function() { return ArrowDownRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowDownRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-down-right-${count}`}"
    aria-describedby="${`title-arrow-down-right-${count}`}"
  >
    <title id="${`title-arrow-down-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-down-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-down.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-down.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return ArrowDown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-down-${count}`}"
    aria-describedby="${`title-arrow-down-${count}`}"
  >
    <title id="${`title-arrow-down-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-down-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-left-circle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-left-circle.js ***!
  \***************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowLeftCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftCircle", function() { return ArrowLeftCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowLeftCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Left Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-left-circle-${count}`}"
    aria-describedby="${`title-arrow-left-circle-${count}`}"
  >
    <title id="${`title-arrow-left-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-left-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 8 8 12 12 16" />
    <line x1="16" y1="12" x2="8" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-left.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-left.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeft", function() { return ArrowLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-left-${count}`}"
    aria-describedby="${`title-arrow-left-${count}`}"
  >
    <title id="${`title-arrow-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-right-circle.js":
/*!****************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-right-circle.js ***!
  \****************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowRightCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRightCircle", function() { return ArrowRightCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowRightCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Right Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-right-circle-${count}`}"
    aria-describedby="${`title-arrow-right-circle-${count}`}"
  >
    <title id="${`title-arrow-right-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-right-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 16 16 12 12 8" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-right.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRight", function() { return ArrowRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-right-${count}`}"
    aria-describedby="${`title-arrow-right-${count}`}"
  >
    <title id="${`title-arrow-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-up-circle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-up-circle.js ***!
  \*************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowUpCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpCircle", function() { return ArrowUpCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowUpCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-up-circle-${count}`}"
    aria-describedby="${`title-arrow-up-circle-${count}`}"
  >
    <title id="${`title-arrow-up-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-up-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <polyline points="16 12 12 8 8 12" />
    <line x1="12" y1="16" x2="12" y2="8" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-up-left.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-up-left.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowUpLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpLeft", function() { return ArrowUpLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowUpLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-up-left-${count}`}"
    aria-describedby="${`title-arrow-up-left-${count}`}"
  >
    <title id="${`title-arrow-up-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-up-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="17" y1="17" x2="7" y2="7" />
    <polyline points="7 17 7 7 17 7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-up-right.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-up-right.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowUpRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpRight", function() { return ArrowUpRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowUpRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-up-right-${count}`}"
    aria-describedby="${`title-arrow-up-right-${count}`}"
  >
    <title id="${`title-arrow-up-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-up-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/arrow-up.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/arrow-up.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ArrowUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUp", function() { return ArrowUp; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ArrowUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-arrow-up-${count}`}"
    aria-describedby="${`title-arrow-up-${count}`}"
  >
    <title id="${`title-arrow-up-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-arrow-up-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/at-sign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/at-sign.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, AtSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtSign", function() { return AtSign; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const AtSign = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'At Sign',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-at-sign-${count}`}"
    aria-describedby="${`title-at-sign-${count}`}"
  >
    <title id="${`title-at-sign-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-at-sign-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/award.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/award.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Award */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Award", function() { return Award; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Award = ({ width = 24, height = 24, hidden = false, title = 'Award', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-award-${count}`}"
    aria-describedby="${`title-award-${count}`}"
  >
    <title id="${`title-award-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-award-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/bar-chart-2.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/bar-chart-2.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, BarChart2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart2", function() { return BarChart2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const BarChart2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bar Chart 2',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-bar-chart-2-${count}`}"
    aria-describedby="${`title-bar-chart-2-${count}`}"
  >
    <title id="${`title-bar-chart-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-bar-chart-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/bar-chart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/bar-chart.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, BarChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const BarChart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bar Chart',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-bar-chart-${count}`}"
    aria-describedby="${`title-bar-chart-${count}`}"
  >
    <title id="${`title-bar-chart-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-bar-chart-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/battery-charging.js":
/*!**************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/battery-charging.js ***!
  \**************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, BatteryCharging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryCharging", function() { return BatteryCharging; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const BatteryCharging = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Battery Charging',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-battery-charging-${count}`}"
    aria-describedby="${`title-battery-charging-${count}`}"
  >
    <title id="${`title-battery-charging-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-battery-charging-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
    />
    <line x1="23" y1="13" x2="23" y2="11" />
    <polyline points="11 6 7 12 13 12 9 18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/battery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/battery.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Battery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return Battery; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Battery = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Battery',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-battery-${count}`}"
    aria-describedby="${`title-battery-${count}`}"
  >
    <title id="${`title-battery-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-battery-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/bell-off.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/bell-off.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, BellOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellOff", function() { return BellOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const BellOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bell Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-bell-off-${count}`}"
    aria-describedby="${`title-bell-off-${count}`}"
  >
    <title id="${`title-bell-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-bell-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <path d="M18.63 13A17.89 17.89 0 0 1 18 8" />
    <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
    <path d="M18 8a6 6 0 0 0-9.33-5" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/bell.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/bell.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Bell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bell", function() { return Bell; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Bell = ({ width = 24, height = 24, hidden = false, title = 'Bell', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-bell-${count}`}"
    aria-describedby="${`title-bell-${count}`}"
  >
    <title id="${`title-bell-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-bell-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/bluetooth.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/bluetooth.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Bluetooth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bluetooth", function() { return Bluetooth; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Bluetooth = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bluetooth',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-bluetooth-${count}`}"
    aria-describedby="${`title-bluetooth-${count}`}"
  >
    <title id="${`title-bluetooth-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-bluetooth-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/bold.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/bold.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Bold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bold", function() { return Bold; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Bold = ({ width = 24, height = 24, hidden = false, title = 'Bold', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-bold-${count}`}"
    aria-describedby="${`title-bold-${count}`}"
  >
    <title id="${`title-bold-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-bold-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/book-open.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/book-open.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, BookOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOpen", function() { return BookOpen; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const BookOpen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Book Open',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-book-open-${count}`}"
    aria-describedby="${`title-book-open-${count}`}"
  >
    <title id="${`title-book-open-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-book-open-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/book.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/book.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Book = ({ width = 24, height = 24, hidden = false, title = 'Book', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-book-${count}`}"
    aria-describedby="${`title-book-${count}`}"
  >
    <title id="${`title-book-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-book-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/bookmark.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/bookmark.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Bookmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return Bookmark; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Bookmark = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bookmark',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-bookmark-${count}`}"
    aria-describedby="${`title-bookmark-${count}`}"
  >
    <title id="${`title-bookmark-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-bookmark-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/box.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/box.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Box = ({ width = 24, height = 24, hidden = false, title = 'Box', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-box-${count}`}"
    aria-describedby="${`title-box-${count}`}"
  >
    <title id="${`title-box-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-box-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/briefcase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/briefcase.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Briefcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Briefcase", function() { return Briefcase; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Briefcase = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Briefcase',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-briefcase-${count}`}"
    aria-describedby="${`title-briefcase-${count}`}"
  >
    <title id="${`title-briefcase-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-briefcase-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/calendar.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/calendar.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Calendar = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Calendar',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-calendar-${count}`}"
    aria-describedby="${`title-calendar-${count}`}"
  >
    <title id="${`title-calendar-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-calendar-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/camera-off.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/camera-off.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CameraOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraOff", function() { return CameraOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CameraOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Camera Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-camera-off-${count}`}"
    aria-describedby="${`title-camera-off-${count}`}"
  >
    <title id="${`title-camera-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-camera-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="1" y1="1" x2="23" y2="23" />
    <path
      d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/camera.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/camera.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Camera = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Camera',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-camera-${count}`}"
    aria-describedby="${`title-camera-${count}`}"
  >
    <title id="${`title-camera-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-camera-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cast.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cast.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Cast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cast", function() { return Cast; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Cast = ({ width = 24, height = 24, hidden = false, title = 'Cast', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cast-${count}`}"
    aria-describedby="${`title-cast-${count}`}"
  >
    <title id="${`title-cast-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cast-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
    />
    <line x1="2" y1="20" x2="2.01" y2="20" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/check-circle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/check-circle.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CheckCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCircle", function() { return CheckCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CheckCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Check Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-check-circle-${count}`}"
    aria-describedby="${`title-check-circle-${count}`}"
  >
    <title id="${`title-check-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-check-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/check-square.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/check-square.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CheckSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSquare", function() { return CheckSquare; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CheckSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Check Square',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-check-square-${count}`}"
    aria-describedby="${`title-check-square-${count}`}"
  >
    <title id="${`title-check-square-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-check-square-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/check.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/check.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return Check; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Check = ({ width = 24, height = 24, hidden = false, title = 'Check', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-check-${count}`}"
    aria-describedby="${`title-check-${count}`}"
  >
    <title id="${`title-check-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-check-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="20 6 9 17 4 12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevron-down.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevron-down.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronDown", function() { return ChevronDown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevron-down-${count}`}"
    aria-describedby="${`title-chevron-down-${count}`}"
  >
    <title id="${`title-chevron-down-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevron-down-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="6 9 12 15 18 9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevron-left.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevron-left.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronLeft", function() { return ChevronLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevron-left-${count}`}"
    aria-describedby="${`title-chevron-left-${count}`}"
  >
    <title id="${`title-chevron-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevron-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="15 18 9 12 15 6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevron-right.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevron-right.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronRight", function() { return ChevronRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevron-right-${count}`}"
    aria-describedby="${`title-chevron-right-${count}`}"
  >
    <title id="${`title-chevron-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevron-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="9 18 15 12 9 6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevron-up.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevron-up.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronUp", function() { return ChevronUp; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevron-up-${count}`}"
    aria-describedby="${`title-chevron-up-${count}`}"
  >
    <title id="${`title-chevron-up-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevron-up-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="18 15 12 9 6 15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevrons-down.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevrons-down.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronsDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsDown", function() { return ChevronsDown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronsDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevrons Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevrons-down-${count}`}"
    aria-describedby="${`title-chevrons-down-${count}`}"
  >
    <title id="${`title-chevrons-down-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevrons-down-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="7 13 12 18 17 13" />
    <polyline points="7 6 12 11 17 6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevrons-left.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevrons-left.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronsLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsLeft", function() { return ChevronsLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronsLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevrons Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevrons-left-${count}`}"
    aria-describedby="${`title-chevrons-left-${count}`}"
  >
    <title id="${`title-chevrons-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevrons-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="11 17 6 12 11 7" />
    <polyline points="18 17 13 12 18 7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevrons-right.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevrons-right.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronsRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsRight", function() { return ChevronsRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronsRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevrons Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevrons-right-${count}`}"
    aria-describedby="${`title-chevrons-right-${count}`}"
  >
    <title id="${`title-chevrons-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevrons-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="13 17 18 12 13 7" />
    <polyline points="6 17 11 12 6 7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chevrons-up.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chevrons-up.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ChevronsUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsUp", function() { return ChevronsUp; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ChevronsUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevrons Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chevrons-up-${count}`}"
    aria-describedby="${`title-chevrons-up-${count}`}"
  >
    <title id="${`title-chevrons-up-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chevrons-up-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="17 11 12 6 7 11" />
    <polyline points="17 18 12 13 7 18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/chrome.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/chrome.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Chrome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chrome", function() { return Chrome; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Chrome = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chrome',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-chrome-${count}`}"
    aria-describedby="${`title-chrome-${count}`}"
  >
    <title id="${`title-chrome-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-chrome-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/circle.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/circle.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Circle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-circle-${count}`}"
    aria-describedby="${`title-circle-${count}`}"
  >
    <title id="${`title-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/clipboard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/clipboard.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Clipboard = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Clipboard',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-clipboard-${count}`}"
    aria-describedby="${`title-clipboard-${count}`}"
  >
    <title id="${`title-clipboard-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-clipboard-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/clock.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/clock.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Clock = ({ width = 24, height = 24, hidden = false, title = 'Clock', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-clock-${count}`}"
    aria-describedby="${`title-clock-${count}`}"
  >
    <title id="${`title-clock-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-clock-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cloud-drizzle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cloud-drizzle.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CloudDrizzle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudDrizzle", function() { return CloudDrizzle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CloudDrizzle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Drizzle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cloud-drizzle-${count}`}"
    aria-describedby="${`title-cloud-drizzle-${count}`}"
  >
    <title id="${`title-cloud-drizzle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cloud-drizzle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="8" y1="19" x2="8" y2="21" />
    <line x1="8" y1="13" x2="8" y2="15" />
    <line x1="16" y1="19" x2="16" y2="21" />
    <line x1="16" y1="13" x2="16" y2="15" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="12" y1="15" x2="12" y2="17" />
    <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cloud-lightning.js":
/*!*************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cloud-lightning.js ***!
  \*************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CloudLightning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudLightning", function() { return CloudLightning; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CloudLightning = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Lightning',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cloud-lightning-${count}`}"
    aria-describedby="${`title-cloud-lightning-${count}`}"
  >
    <title id="${`title-cloud-lightning-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cloud-lightning-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
    <polyline points="13 11 9 17 15 17 11 23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cloud-off.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cloud-off.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CloudOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudOff", function() { return CloudOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CloudOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cloud-off-${count}`}"
    aria-describedby="${`title-cloud-off-${count}`}"
  >
    <title id="${`title-cloud-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cloud-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
    />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cloud-rain.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cloud-rain.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CloudRain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudRain", function() { return CloudRain; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CloudRain = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Rain',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cloud-rain-${count}`}"
    aria-describedby="${`title-cloud-rain-${count}`}"
  >
    <title id="${`title-cloud-rain-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cloud-rain-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="16" y1="13" x2="16" y2="21" />
    <line x1="8" y1="13" x2="8" y2="21" />
    <line x1="12" y1="15" x2="12" y2="23" />
    <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cloud-snow.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cloud-snow.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CloudSnow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudSnow", function() { return CloudSnow; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CloudSnow = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Snow',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cloud-snow-${count}`}"
    aria-describedby="${`title-cloud-snow-${count}`}"
  >
    <title id="${`title-cloud-snow-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cloud-snow-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <line x1="8" y1="16" x2="8.01" y2="16" />
    <line x1="8" y1="20" x2="8.01" y2="20" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <line x1="12" y1="22" x2="12.01" y2="22" />
    <line x1="16" y1="16" x2="16.01" y2="16" />
    <line x1="16" y1="20" x2="16.01" y2="20" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cloud.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cloud.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Cloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cloud", function() { return Cloud; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Cloud = ({ width = 24, height = 24, hidden = false, title = 'Cloud', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cloud-${count}`}"
    aria-describedby="${`title-cloud-${count}`}"
  >
    <title id="${`title-cloud-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cloud-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/code.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/code.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Code = ({ width = 24, height = 24, hidden = false, title = 'Code', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-code-${count}`}"
    aria-describedby="${`title-code-${count}`}"
  >
    <title id="${`title-code-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-code-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/codepen.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/codepen.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Codepen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codepen", function() { return Codepen; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Codepen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Codepen',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-codepen-${count}`}"
    aria-describedby="${`title-codepen-${count}`}"
  >
    <title id="${`title-codepen-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-codepen-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <polyline points="2 15.5 12 8.5 22 15.5" />
    <line x1="12" y1="2" x2="12" y2="8.5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/codesandbox.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/codesandbox.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Codesandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codesandbox", function() { return Codesandbox; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Codesandbox = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Codesandbox',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-codesandbox-${count}`}"
    aria-describedby="${`title-codesandbox-${count}`}"
  >
    <title id="${`title-codesandbox-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-codesandbox-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    />
    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
    <polyline points="7.5 19.79 7.5 14.6 3 12" />
    <polyline points="21 12 16.5 14.6 16.5 19.79" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/coffee.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/coffee.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Coffee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coffee", function() { return Coffee; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Coffee = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Coffee',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-coffee-${count}`}"
    aria-describedby="${`title-coffee-${count}`}"
  >
    <title id="${`title-coffee-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-coffee-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/columns.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/columns.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Columns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return Columns; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Columns = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Columns',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-columns-${count}`}"
    aria-describedby="${`title-columns-${count}`}"
  >
    <title id="${`title-columns-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-columns-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/command.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/command.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Command */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Command = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Command',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-command-${count}`}"
    aria-describedby="${`title-command-${count}`}"
  >
    <title id="${`title-command-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-command-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/compass.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/compass.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Compass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compass", function() { return Compass; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Compass = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Compass',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-compass-${count}`}"
    aria-describedby="${`title-compass-${count}`}"
  >
    <title id="${`title-compass-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-compass-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/copy.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/copy.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return Copy; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Copy = ({ width = 24, height = 24, hidden = false, title = 'Copy', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-copy-${count}`}"
    aria-describedby="${`title-copy-${count}`}"
  >
    <title id="${`title-copy-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-copy-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-down-left.js":
/*!**************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-down-left.js ***!
  \**************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerDownLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerDownLeft", function() { return CornerDownLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerDownLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Down Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-down-left-${count}`}"
    aria-describedby="${`title-corner-down-left-${count}`}"
  >
    <title id="${`title-corner-down-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-down-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="9 10 4 15 9 20" />
    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-down-right.js":
/*!***************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-down-right.js ***!
  \***************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerDownRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerDownRight", function() { return CornerDownRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerDownRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Down Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-down-right-${count}`}"
    aria-describedby="${`title-corner-down-right-${count}`}"
  >
    <title id="${`title-corner-down-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-down-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="15 10 20 15 15 20" />
    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-left-down.js":
/*!**************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-left-down.js ***!
  \**************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerLeftDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLeftDown", function() { return CornerLeftDown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerLeftDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Left Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-left-down-${count}`}"
    aria-describedby="${`title-corner-left-down-${count}`}"
  >
    <title id="${`title-corner-left-down-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-left-down-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="14 15 9 20 4 15" />
    <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-left-up.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-left-up.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerLeftUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLeftUp", function() { return CornerLeftUp; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerLeftUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Left Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-left-up-${count}`}"
    aria-describedby="${`title-corner-left-up-${count}`}"
  >
    <title id="${`title-corner-left-up-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-left-up-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="14 9 9 4 4 9" />
    <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-right-down.js":
/*!***************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-right-down.js ***!
  \***************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerRightDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerRightDown", function() { return CornerRightDown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerRightDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Right Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-right-down-${count}`}"
    aria-describedby="${`title-corner-right-down-${count}`}"
  >
    <title id="${`title-corner-right-down-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-right-down-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="10 15 15 20 20 15" />
    <path d="M4 4h7a4 4 0 0 1 4 4v12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-right-up.js":
/*!*************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-right-up.js ***!
  \*************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerRightUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerRightUp", function() { return CornerRightUp; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerRightUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Right Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-right-up-${count}`}"
    aria-describedby="${`title-corner-right-up-${count}`}"
  >
    <title id="${`title-corner-right-up-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-right-up-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="10 9 15 4 20 9" />
    <path d="M4 20h7a4 4 0 0 0 4-4V4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-up-left.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-up-left.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerUpLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerUpLeft", function() { return CornerUpLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerUpLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Up Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-up-left-${count}`}"
    aria-describedby="${`title-corner-up-left-${count}`}"
  >
    <title id="${`title-corner-up-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-up-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="9 14 4 9 9 4" />
    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/corner-up-right.js":
/*!*************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/corner-up-right.js ***!
  \*************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CornerUpRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerUpRight", function() { return CornerUpRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CornerUpRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Corner Up Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-corner-up-right-${count}`}"
    aria-describedby="${`title-corner-up-right-${count}`}"
  >
    <title id="${`title-corner-up-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-corner-up-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="15 14 20 9 15 4" />
    <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/cpu.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/cpu.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Cpu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cpu", function() { return Cpu; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Cpu = ({ width = 24, height = 24, hidden = false, title = 'Cpu', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-cpu-${count}`}"
    aria-describedby="${`title-cpu-${count}`}"
  >
    <title id="${`title-cpu-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-cpu-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/credit-card.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/credit-card.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, CreditCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCard", function() { return CreditCard; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const CreditCard = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Credit Card',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-credit-card-${count}`}"
    aria-describedby="${`title-credit-card-${count}`}"
  >
    <title id="${`title-credit-card-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-credit-card-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/crop.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/crop.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Crop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crop", function() { return Crop; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Crop = ({ width = 24, height = 24, hidden = false, title = 'Crop', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-crop-${count}`}"
    aria-describedby="${`title-crop-${count}`}"
  >
    <title id="${`title-crop-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-crop-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
    <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/crosshair.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/crosshair.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Crosshair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crosshair", function() { return Crosshair; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Crosshair = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Crosshair',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-crosshair-${count}`}"
    aria-describedby="${`title-crosshair-${count}`}"
  >
    <title id="${`title-crosshair-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-crosshair-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/database.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/database.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Database = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Database',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-database-${count}`}"
    aria-describedby="${`title-database-${count}`}"
  >
    <title id="${`title-database-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-database-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/delete.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/delete.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Delete = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Delete',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-delete-${count}`}"
    aria-describedby="${`title-delete-${count}`}"
  >
    <title id="${`title-delete-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-delete-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
    <line x1="18" y1="9" x2="12" y2="15" />
    <line x1="12" y1="9" x2="18" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/disc.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/disc.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Disc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disc", function() { return Disc; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Disc = ({ width = 24, height = 24, hidden = false, title = 'Disc', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-disc-${count}`}"
    aria-describedby="${`title-disc-${count}`}"
  >
    <title id="${`title-disc-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-disc-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/divide-circle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/divide-circle.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, DivideCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivideCircle", function() { return DivideCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const DivideCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Divide Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-divide-circle-${count}`}"
    aria-describedby="${`title-divide-circle-${count}`}"
  >
    <title id="${`title-divide-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-divide-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
    <line x1="12" y1="8" x2="12" y2="8" />
    <circle cx="12" cy="12" r="10" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/divide-square.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/divide-square.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, DivideSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivideSquare", function() { return DivideSquare; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const DivideSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Divide Square',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-divide-square-${count}`}"
    aria-describedby="${`title-divide-square-${count}`}"
  >
    <title id="${`title-divide-square-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-divide-square-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
    <line x1="12" y1="8" x2="12" y2="8" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/divide.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/divide.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divide", function() { return Divide; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Divide = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Divide',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-divide-${count}`}"
    aria-describedby="${`title-divide-${count}`}"
  >
    <title id="${`title-divide-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-divide-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="6" r="2" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <circle cx="12" cy="18" r="2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/dollar-sign.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/dollar-sign.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, DollarSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollarSign", function() { return DollarSign; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const DollarSign = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Dollar Sign',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-dollar-sign-${count}`}"
    aria-describedby="${`title-dollar-sign-${count}`}"
  >
    <title id="${`title-dollar-sign-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-dollar-sign-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/download-cloud.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/download-cloud.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, DownloadCloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCloud", function() { return DownloadCloud; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const DownloadCloud = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Download Cloud',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-download-cloud-${count}`}"
    aria-describedby="${`title-download-cloud-${count}`}"
  >
    <title id="${`title-download-cloud-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-download-cloud-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="8 17 12 21 16 17" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/download.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/download.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return Download; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Download = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Download',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-download-${count}`}"
    aria-describedby="${`title-download-${count}`}"
  >
    <title id="${`title-download-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-download-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/dribbble.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/dribbble.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Dribbble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dribbble", function() { return Dribbble; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Dribbble = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Dribbble',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-dribbble-${count}`}"
    aria-describedby="${`title-dribbble-${count}`}"
  >
    <title id="${`title-dribbble-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-dribbble-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <path
      d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/droplet.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/droplet.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Droplet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droplet", function() { return Droplet; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Droplet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Droplet',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-droplet-${count}`}"
    aria-describedby="${`title-droplet-${count}`}"
  >
    <title id="${`title-droplet-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-droplet-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/edit-2.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/edit-2.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Edit2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit2", function() { return Edit2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Edit2 = ({ width = 24, height = 24, hidden = false, title = 'Edit 2', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-edit-2-${count}`}"
    aria-describedby="${`title-edit-2-${count}`}"
  >
    <title id="${`title-edit-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-edit-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/edit-3.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/edit-3.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Edit3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit3", function() { return Edit3; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Edit3 = ({ width = 24, height = 24, hidden = false, title = 'Edit 3', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-edit-3-${count}`}"
    aria-describedby="${`title-edit-3-${count}`}"
  >
    <title id="${`title-edit-3-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-edit-3-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/edit.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/edit.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Edit = ({ width = 24, height = 24, hidden = false, title = 'Edit', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-edit-${count}`}"
    aria-describedby="${`title-edit-${count}`}"
  >
    <title id="${`title-edit-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-edit-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/external-link.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/external-link.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ExternalLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLink", function() { return ExternalLink; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ExternalLink = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'External Link',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-external-link-${count}`}"
    aria-describedby="${`title-external-link-${count}`}"
  >
    <title id="${`title-external-link-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-external-link-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/eye-off.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/eye-off.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, EyeOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeOff", function() { return EyeOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const EyeOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Eye Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-eye-off-${count}`}"
    aria-describedby="${`title-eye-off-${count}`}"
  >
    <title id="${`title-eye-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-eye-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
    />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/eye.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/eye.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Eye */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eye", function() { return Eye; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Eye = ({ width = 24, height = 24, hidden = false, title = 'Eye', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-eye-${count}`}"
    aria-describedby="${`title-eye-${count}`}"
  >
    <title id="${`title-eye-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-eye-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/facebook.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/facebook.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Facebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Facebook = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Facebook',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-facebook-${count}`}"
    aria-describedby="${`title-facebook-${count}`}"
  >
    <title id="${`title-facebook-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-facebook-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/fast-forward.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/fast-forward.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, FastForward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastForward", function() { return FastForward; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const FastForward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Fast Forward',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-fast-forward-${count}`}"
    aria-describedby="${`title-fast-forward-${count}`}"
  >
    <title id="${`title-fast-forward-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-fast-forward-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="13 19 22 12 13 5 13 19" />
    <polygon points="2 19 11 12 2 5 2 19" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/feather.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/feather.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Feather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feather", function() { return Feather; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Feather = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Feather',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-feather-${count}`}"
    aria-describedby="${`title-feather-${count}`}"
  >
    <title id="${`title-feather-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-feather-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/figma.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/figma.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Figma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figma", function() { return Figma; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Figma = ({ width = 24, height = 24, hidden = false, title = 'Figma', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-figma-${count}`}"
    aria-describedby="${`title-figma-${count}`}"
  >
    <title id="${`title-figma-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-figma-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/file-minus.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/file-minus.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, FileMinus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMinus", function() { return FileMinus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const FileMinus = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Minus',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-file-minus-${count}`}"
    aria-describedby="${`title-file-minus-${count}`}"
  >
    <title id="${`title-file-minus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-file-minus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/file-plus.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/file-plus.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, FilePlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePlus", function() { return FilePlus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const FilePlus = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Plus',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-file-plus-${count}`}"
    aria-describedby="${`title-file-plus-${count}`}"
  >
    <title id="${`title-file-plus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-file-plus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/file-text.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/file-text.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, FileText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileText", function() { return FileText; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const FileText = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Text',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-file-text-${count}`}"
    aria-describedby="${`title-file-text-${count}`}"
  >
    <title id="${`title-file-text-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-file-text-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/file.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/file.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const File = ({ width = 24, height = 24, hidden = false, title = 'File', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-file-${count}`}"
    aria-describedby="${`title-file-${count}`}"
  >
    <title id="${`title-file-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-file-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="13 2 13 9 20 9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/film.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/film.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Film */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Film = ({ width = 24, height = 24, hidden = false, title = 'Film', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-film-${count}`}"
    aria-describedby="${`title-film-${count}`}"
  >
    <title id="${`title-film-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-film-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/filter.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/filter.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Filter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filter',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-filter-${count}`}"
    aria-describedby="${`title-filter-${count}`}"
  >
    <title id="${`title-filter-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-filter-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/flag.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/flag.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Flag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flag", function() { return Flag; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Flag = ({ width = 24, height = 24, hidden = false, title = 'Flag', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-flag-${count}`}"
    aria-describedby="${`title-flag-${count}`}"
  >
    <title id="${`title-flag-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-flag-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/folder-minus.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/folder-minus.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, FolderMinus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderMinus", function() { return FolderMinus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const FolderMinus = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Minus',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-folder-minus-${count}`}"
    aria-describedby="${`title-folder-minus-${count}`}"
  >
    <title id="${`title-folder-minus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-folder-minus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/folder-plus.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/folder-plus.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, FolderPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPlus", function() { return FolderPlus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const FolderPlus = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Plus',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-folder-plus-${count}`}"
    aria-describedby="${`title-folder-plus-${count}`}"
  >
    <title id="${`title-folder-plus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-folder-plus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/folder.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/folder.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Folder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Folder = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-folder-${count}`}"
    aria-describedby="${`title-folder-${count}`}"
  >
    <title id="${`title-folder-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-folder-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/framer.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/framer.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Framer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Framer", function() { return Framer; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Framer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Framer',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-framer-${count}`}"
    aria-describedby="${`title-framer-${count}`}"
  >
    <title id="${`title-framer-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-framer-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/frown.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/frown.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Frown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frown", function() { return Frown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Frown = ({ width = 24, height = 24, hidden = false, title = 'Frown', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-frown-${count}`}"
    aria-describedby="${`title-frown-${count}`}"
  >
    <title id="${`title-frown-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-frown-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/gift.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/gift.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Gift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gift", function() { return Gift; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Gift = ({ width = 24, height = 24, hidden = false, title = 'Gift', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-gift-${count}`}"
    aria-describedby="${`title-gift-${count}`}"
  >
    <title id="${`title-gift-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-gift-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/git-branch.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/git-branch.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, GitBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitBranch", function() { return GitBranch; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const GitBranch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Branch',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-git-branch-${count}`}"
    aria-describedby="${`title-git-branch-${count}`}"
  >
    <title id="${`title-git-branch-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-git-branch-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/git-commit.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/git-commit.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, GitCommit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitCommit", function() { return GitCommit; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const GitCommit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Commit',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-git-commit-${count}`}"
    aria-describedby="${`title-git-commit-${count}`}"
  >
    <title id="${`title-git-commit-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-git-commit-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="4" />
    <line x1="1.05" y1="12" x2="7" y2="12" />
    <line x1="17.01" y1="12" x2="22.96" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/git-merge.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/git-merge.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, GitMerge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitMerge", function() { return GitMerge; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const GitMerge = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Merge',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-git-merge-${count}`}"
    aria-describedby="${`title-git-merge-${count}`}"
  >
    <title id="${`title-git-merge-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-git-merge-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/git-pull-request.js":
/*!**************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/git-pull-request.js ***!
  \**************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, GitPullRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPullRequest", function() { return GitPullRequest; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const GitPullRequest = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Git Pull Request',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-git-pull-request-${count}`}"
    aria-describedby="${`title-git-pull-request-${count}`}"
  >
    <title id="${`title-git-pull-request-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-git-pull-request-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/github.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/github.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, GitHub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHub", function() { return GitHub; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const GitHub = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Github',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-github-${count}`}"
    aria-describedby="${`title-github-${count}`}"
  >
    <title id="${`title-github-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-github-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/gitlab.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/gitlab.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Gitlab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gitlab", function() { return Gitlab; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Gitlab = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gitlab',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-gitlab-${count}`}"
    aria-describedby="${`title-gitlab-${count}`}"
  >
    <title id="${`title-gitlab-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-gitlab-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/globe.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/globe.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Globe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globe", function() { return Globe; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Globe = ({ width = 24, height = 24, hidden = false, title = 'Globe', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-globe-${count}`}"
    aria-describedby="${`title-globe-${count}`}"
  >
    <title id="${`title-globe-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-globe-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path
      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/grid.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/grid.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Grid = ({ width = 24, height = 24, hidden = false, title = 'Grid', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-grid-${count}`}"
    aria-describedby="${`title-grid-${count}`}"
  >
    <title id="${`title-grid-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-grid-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/hard-drive.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/hard-drive.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, HardDrive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardDrive", function() { return HardDrive; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const HardDrive = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Hard Drive',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-hard-drive-${count}`}"
    aria-describedby="${`title-hard-drive-${count}`}"
  >
    <title id="${`title-hard-drive-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-hard-drive-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="22" y1="12" x2="2" y2="12" />
    <path
      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    />
    <line x1="6" y1="16" x2="6.01" y2="16" />
    <line x1="10" y1="16" x2="10.01" y2="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/hash.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/hash.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Hash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hash", function() { return Hash; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Hash = ({ width = 24, height = 24, hidden = false, title = 'Hash', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-hash-${count}`}"
    aria-describedby="${`title-hash-${count}`}"
  >
    <title id="${`title-hash-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-hash-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/headphones.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/headphones.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Headphones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headphones", function() { return Headphones; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Headphones = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Headphones',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-headphones-${count}`}"
    aria-describedby="${`title-headphones-${count}`}"
  >
    <title id="${`title-headphones-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-headphones-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path
      d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/heart.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/heart.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Heart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heart", function() { return Heart; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Heart = ({ width = 24, height = 24, hidden = false, title = 'Heart', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-heart-${count}`}"
    aria-describedby="${`title-heart-${count}`}"
  >
    <title id="${`title-heart-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-heart-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/help-circle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/help-circle.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, HelpCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCircle", function() { return HelpCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const HelpCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Help Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-help-circle-${count}`}"
    aria-describedby="${`title-help-circle-${count}`}"
  >
    <title id="${`title-help-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-help-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/hexagon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/hexagon.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Hexagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hexagon", function() { return Hexagon; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Hexagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Hexagon',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-hexagon-${count}`}"
    aria-describedby="${`title-hexagon-${count}`}"
  >
    <title id="${`title-hexagon-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-hexagon-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/home.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/home.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Home = ({ width = 24, height = 24, hidden = false, title = 'Home', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-home-${count}`}"
    aria-describedby="${`title-home-${count}`}"
  >
    <title id="${`title-home-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-home-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/image.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/image.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Image = ({ width = 24, height = 24, hidden = false, title = 'Image', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-image-${count}`}"
    aria-describedby="${`title-image-${count}`}"
  >
    <title id="${`title-image-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-image-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/inbox.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/inbox.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Inbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inbox", function() { return Inbox; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Inbox = ({ width = 24, height = 24, hidden = false, title = 'Inbox', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-inbox-${count}`}"
    aria-describedby="${`title-inbox-${count}`}"
  >
    <title id="${`title-inbox-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-inbox-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path
      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/info.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/info.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Info = ({ width = 24, height = 24, hidden = false, title = 'Info', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-info-${count}`}"
    aria-describedby="${`title-info-${count}`}"
  >
    <title id="${`title-info-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-info-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/instagram.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/instagram.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Instagram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return Instagram; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Instagram = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Instagram',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-instagram-${count}`}"
    aria-describedby="${`title-instagram-${count}`}"
  >
    <title id="${`title-instagram-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-instagram-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/italic.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/italic.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Italic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Italic", function() { return Italic; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Italic = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Italic',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-italic-${count}`}"
    aria-describedby="${`title-italic-${count}`}"
  >
    <title id="${`title-italic-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-italic-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="19" y1="4" x2="10" y2="4" />
    <line x1="14" y1="20" x2="5" y2="20" />
    <line x1="15" y1="4" x2="9" y2="20" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/key.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/key.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Key = ({ width = 24, height = 24, hidden = false, title = 'Key', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-key-${count}`}"
    aria-describedby="${`title-key-${count}`}"
  >
    <title id="${`title-key-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-key-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/layers.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/layers.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Layers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layers", function() { return Layers; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Layers = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Layers',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-layers-${count}`}"
    aria-describedby="${`title-layers-${count}`}"
  >
    <title id="${`title-layers-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-layers-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/layout.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/layout.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Layout = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Layout',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-layout-${count}`}"
    aria-describedby="${`title-layout-${count}`}"
  >
    <title id="${`title-layout-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-layout-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/life-buoy.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/life-buoy.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, LifeBuoy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeBuoy", function() { return LifeBuoy; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const LifeBuoy = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Life Buoy',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-life-buoy-${count}`}"
    aria-describedby="${`title-life-buoy-${count}`}"
  >
    <title id="${`title-life-buoy-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-life-buoy-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/link-2.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/link-2.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Link2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link2", function() { return Link2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Link2 = ({ width = 24, height = 24, hidden = false, title = 'Link 2', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-link-2-${count}`}"
    aria-describedby="${`title-link-2-${count}`}"
  >
    <title id="${`title-link-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-link-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/link.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/link.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Link = ({ width = 24, height = 24, hidden = false, title = 'Link', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-link-${count}`}"
    aria-describedby="${`title-link-${count}`}"
  >
    <title id="${`title-link-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-link-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/linkedin.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/linkedin.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Linkedin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Linkedin = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Linkedin',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-linkedin-${count}`}"
    aria-describedby="${`title-linkedin-${count}`}"
  >
    <title id="${`title-linkedin-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-linkedin-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/list.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/list.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const List = ({ width = 24, height = 24, hidden = false, title = 'List', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-list-${count}`}"
    aria-describedby="${`title-list-${count}`}"
  >
    <title id="${`title-list-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-list-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/loader.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/loader.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Loader = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Loader',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-loader-${count}`}"
    aria-describedby="${`title-loader-${count}`}"
  >
    <title id="${`title-loader-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-loader-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/lock.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/lock.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Lock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lock", function() { return Lock; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Lock = ({ width = 24, height = 24, hidden = false, title = 'Lock', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-lock-${count}`}"
    aria-describedby="${`title-lock-${count}`}"
  >
    <title id="${`title-lock-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-lock-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/log-in.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/log-in.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, LogIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return LogIn; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const LogIn = ({ width = 24, height = 24, hidden = false, title = 'Log In', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-log-in-${count}`}"
    aria-describedby="${`title-log-in-${count}`}"
  >
    <title id="${`title-log-in-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-log-in-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/log-out.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/log-out.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, LogOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return LogOut; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const LogOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Log Out',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-log-out-${count}`}"
    aria-describedby="${`title-log-out-${count}`}"
  >
    <title id="${`title-log-out-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-log-out-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/mail.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/mail.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Mail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Mail = ({ width = 24, height = 24, hidden = false, title = 'Mail', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-mail-${count}`}"
    aria-describedby="${`title-mail-${count}`}"
  >
    <title id="${`title-mail-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-mail-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/map-pin.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/map-pin.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MapPin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPin", function() { return MapPin; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MapPin = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Map Pin',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-map-pin-${count}`}"
    aria-describedby="${`title-map-pin-${count}`}"
  >
    <title id="${`title-map-pin-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-map-pin-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/map.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/map.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Map = ({ width = 24, height = 24, hidden = false, title = 'Map', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-map-${count}`}"
    aria-describedby="${`title-map-${count}`}"
  >
    <title id="${`title-map-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-map-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/maximize-2.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/maximize-2.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Maximize2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maximize2", function() { return Maximize2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Maximize2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Maximize 2',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-maximize-2-${count}`}"
    aria-describedby="${`title-maximize-2-${count}`}"
  >
    <title id="${`title-maximize-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-maximize-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/maximize.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/maximize.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Maximize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maximize", function() { return Maximize; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Maximize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Maximize',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-maximize-${count}`}"
    aria-describedby="${`title-maximize-${count}`}"
  >
    <title id="${`title-maximize-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-maximize-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/meh.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/meh.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Meh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meh", function() { return Meh; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Meh = ({ width = 24, height = 24, hidden = false, title = 'Meh', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-meh-${count}`}"
    aria-describedby="${`title-meh-${count}`}"
  >
    <title id="${`title-meh-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-meh-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="15" x2="16" y2="15" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/menu.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/menu.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Menu = ({ width = 24, height = 24, hidden = false, title = 'Menu', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-menu-${count}`}"
    aria-describedby="${`title-menu-${count}`}"
  >
    <title id="${`title-menu-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-menu-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/message-circle.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/message-circle.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MessageCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCircle", function() { return MessageCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MessageCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Message Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-message-circle-${count}`}"
    aria-describedby="${`title-message-circle-${count}`}"
  >
    <title id="${`title-message-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-message-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/message-square.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/message-square.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MessageSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSquare", function() { return MessageSquare; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MessageSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Message Square',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-message-square-${count}`}"
    aria-describedby="${`title-message-square-${count}`}"
  >
    <title id="${`title-message-square-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-message-square-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/mic-off.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/mic-off.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MicOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicOff", function() { return MicOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MicOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Mic Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-mic-off-${count}`}"
    aria-describedby="${`title-mic-off-${count}`}"
  >
    <title id="${`title-mic-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-mic-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="1" y1="1" x2="23" y2="23" />
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/mic.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/mic.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Mic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mic", function() { return Mic; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Mic = ({ width = 24, height = 24, hidden = false, title = 'Mic', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-mic-${count}`}"
    aria-describedby="${`title-mic-${count}`}"
  >
    <title id="${`title-mic-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-mic-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/minimize-2.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/minimize-2.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Minimize2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minimize2", function() { return Minimize2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Minimize2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minimize 2',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-minimize-2-${count}`}"
    aria-describedby="${`title-minimize-2-${count}`}"
  >
    <title id="${`title-minimize-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-minimize-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/minimize.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/minimize.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Minimize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minimize", function() { return Minimize; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Minimize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minimize',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-minimize-${count}`}"
    aria-describedby="${`title-minimize-${count}`}"
  >
    <title id="${`title-minimize-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-minimize-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/minus-circle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/minus-circle.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MinusCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusCircle", function() { return MinusCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MinusCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minus Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-minus-circle-${count}`}"
    aria-describedby="${`title-minus-circle-${count}`}"
  >
    <title id="${`title-minus-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-minus-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/minus-square.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/minus-square.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MinusSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusSquare", function() { return MinusSquare; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MinusSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Minus Square',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-minus-square-${count}`}"
    aria-describedby="${`title-minus-square-${count}`}"
  >
    <title id="${`title-minus-square-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-minus-square-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/minus.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/minus.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Minus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minus", function() { return Minus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Minus = ({ width = 24, height = 24, hidden = false, title = 'Minus', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-minus-${count}`}"
    aria-describedby="${`title-minus-${count}`}"
  >
    <title id="${`title-minus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-minus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/monitor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/monitor.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Monitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return Monitor; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Monitor = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Monitor',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-monitor-${count}`}"
    aria-describedby="${`title-monitor-${count}`}"
  >
    <title id="${`title-monitor-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-monitor-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/moon.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/moon.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Moon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moon", function() { return Moon; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Moon = ({ width = 24, height = 24, hidden = false, title = 'Moon', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-moon-${count}`}"
    aria-describedby="${`title-moon-${count}`}"
  >
    <title id="${`title-moon-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-moon-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/more-horizontal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/more-horizontal.js ***!
  \*************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MoreHorizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreHorizontal", function() { return MoreHorizontal; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MoreHorizontal = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'More Horizontal',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-more-horizontal-${count}`}"
    aria-describedby="${`title-more-horizontal-${count}`}"
  >
    <title id="${`title-more-horizontal-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-more-horizontal-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/more-vertical.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/more-vertical.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MoreVertical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreVertical", function() { return MoreVertical; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MoreVertical = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'More Vertical',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-more-vertical-${count}`}"
    aria-describedby="${`title-more-vertical-${count}`}"
  >
    <title id="${`title-more-vertical-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-more-vertical-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/mouse-pointer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/mouse-pointer.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, MousePointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MousePointer", function() { return MousePointer; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const MousePointer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Mouse Pointer',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-mouse-pointer-${count}`}"
    aria-describedby="${`title-mouse-pointer-${count}`}"
  >
    <title id="${`title-mouse-pointer-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-mouse-pointer-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    <path d="M13 13l6 6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/move.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/move.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Move = ({ width = 24, height = 24, hidden = false, title = 'Move', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-move-${count}`}"
    aria-describedby="${`title-move-${count}`}"
  >
    <title id="${`title-move-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-move-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="5 9 2 12 5 15" />
    <polyline points="9 5 12 2 15 5" />
    <polyline points="15 19 12 22 9 19" />
    <polyline points="19 9 22 12 19 15" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/music.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/music.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Music */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Music", function() { return Music; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Music = ({ width = 24, height = 24, hidden = false, title = 'Music', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-music-${count}`}"
    aria-describedby="${`title-music-${count}`}"
  >
    <title id="${`title-music-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-music-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/navigation-2.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/navigation-2.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Navigation2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation2", function() { return Navigation2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Navigation2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Navigation 2',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-navigation-2-${count}`}"
    aria-describedby="${`title-navigation-2-${count}`}"
  >
    <title id="${`title-navigation-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-navigation-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="12 2 19 21 12 17 5 21 12 2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/navigation.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/navigation.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Navigation = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Navigation',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-navigation-${count}`}"
    aria-describedby="${`title-navigation-${count}`}"
  >
    <title id="${`title-navigation-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-navigation-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/octagon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/octagon.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Octagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Octagon", function() { return Octagon; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Octagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Octagon',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-octagon-${count}`}"
    aria-describedby="${`title-octagon-${count}`}"
  >
    <title id="${`title-octagon-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-octagon-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/package.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/package.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Package = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Package',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-package-${count}`}"
    aria-describedby="${`title-package-${count}`}"
  >
    <title id="${`title-package-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-package-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/paperclip.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/paperclip.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Paperclip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paperclip", function() { return Paperclip; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Paperclip = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Paperclip',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-paperclip-${count}`}"
    aria-describedby="${`title-paperclip-${count}`}"
  >
    <title id="${`title-paperclip-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-paperclip-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/pause-circle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/pause-circle.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PauseCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseCircle", function() { return PauseCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PauseCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pause Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-pause-circle-${count}`}"
    aria-describedby="${`title-pause-circle-${count}`}"
  >
    <title id="${`title-pause-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-pause-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="10" y1="15" x2="10" y2="9" />
    <line x1="14" y1="15" x2="14" y2="9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/pause.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/pause.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Pause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pause", function() { return Pause; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Pause = ({ width = 24, height = 24, hidden = false, title = 'Pause', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-pause-${count}`}"
    aria-describedby="${`title-pause-${count}`}"
  >
    <title id="${`title-pause-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-pause-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/pen-tool.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/pen-tool.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PenTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenTool", function() { return PenTool; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PenTool = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pen Tool',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-pen-tool-${count}`}"
    aria-describedby="${`title-pen-tool-${count}`}"
  >
    <title id="${`title-pen-tool-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-pen-tool-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/percent.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/percent.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Percent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return Percent; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Percent = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Percent',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-percent-${count}`}"
    aria-describedby="${`title-percent-${count}`}"
  >
    <title id="${`title-percent-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-percent-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/phone-call.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/phone-call.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PhoneCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneCall", function() { return PhoneCall; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PhoneCall = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Phone Call',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-phone-call-${count}`}"
    aria-describedby="${`title-phone-call-${count}`}"
  >
    <title id="${`title-phone-call-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-phone-call-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/phone-forwarded.js":
/*!*************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/phone-forwarded.js ***!
  \*************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PhoneForwarded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneForwarded", function() { return PhoneForwarded; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PhoneForwarded = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Phone Forwarded',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-phone-forwarded-${count}`}"
    aria-describedby="${`title-phone-forwarded-${count}`}"
  >
    <title id="${`title-phone-forwarded-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-phone-forwarded-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="19 1 23 5 19 9" />
    <line x1="15" y1="5" x2="23" y2="5" />
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/phone-incoming.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/phone-incoming.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PhoneIncoming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneIncoming", function() { return PhoneIncoming; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PhoneIncoming = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Phone Incoming',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-phone-incoming-${count}`}"
    aria-describedby="${`title-phone-incoming-${count}`}"
  >
    <title id="${`title-phone-incoming-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-phone-incoming-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="16 2 16 8 22 8" />
    <line x1="23" y1="1" x2="16" y2="8" />
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/phone-missed.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/phone-missed.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PhoneMissed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneMissed", function() { return PhoneMissed; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PhoneMissed = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Phone Missed',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-phone-missed-${count}`}"
    aria-describedby="${`title-phone-missed-${count}`}"
  >
    <title id="${`title-phone-missed-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-phone-missed-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="23" y1="1" x2="17" y2="7" />
    <line x1="17" y1="1" x2="23" y2="7" />
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/phone-off.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/phone-off.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PhoneOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneOff", function() { return PhoneOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PhoneOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Phone Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-phone-off-${count}`}"
    aria-describedby="${`title-phone-off-${count}`}"
  >
    <title id="${`title-phone-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-phone-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
    />
    <line x1="23" y1="1" x2="1" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/phone-outgoing.js":
/*!************************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/phone-outgoing.js ***!
  \************************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PhoneOutgoing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneOutgoing", function() { return PhoneOutgoing; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PhoneOutgoing = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Phone Outgoing',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-phone-outgoing-${count}`}"
    aria-describedby="${`title-phone-outgoing-${count}`}"
  >
    <title id="${`title-phone-outgoing-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-phone-outgoing-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="23 7 23 1 17 1" />
    <line x1="16" y1="8" x2="23" y2="1" />
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/phone.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/phone.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Phone = ({ width = 24, height = 24, hidden = false, title = 'Phone', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-phone-${count}`}"
    aria-describedby="${`title-phone-${count}`}"
  >
    <title id="${`title-phone-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-phone-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/pie-chart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/pie-chart.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PieChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return PieChart; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PieChart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pie Chart',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-pie-chart-${count}`}"
    aria-describedby="${`title-pie-chart-${count}`}"
  >
    <title id="${`title-pie-chart-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-pie-chart-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/play-circle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/play-circle.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PlayCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayCircle", function() { return PlayCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PlayCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Play Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-play-circle-${count}`}"
    aria-describedby="${`title-play-circle-${count}`}"
  >
    <title id="${`title-play-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-play-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/play.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/play.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return Play; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Play = ({ width = 24, height = 24, hidden = false, title = 'Play', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-play-${count}`}"
    aria-describedby="${`title-play-${count}`}"
  >
    <title id="${`title-play-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-play-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/plus-circle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/plus-circle.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PlusCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusCircle", function() { return PlusCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PlusCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Plus Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-plus-circle-${count}`}"
    aria-describedby="${`title-plus-circle-${count}`}"
  >
    <title id="${`title-plus-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-plus-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/plus-square.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/plus-square.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, PlusSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusSquare", function() { return PlusSquare; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const PlusSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Plus Square',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-plus-square-${count}`}"
    aria-describedby="${`title-plus-square-${count}`}"
  >
    <title id="${`title-plus-square-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-plus-square-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/plus.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/plus.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Plus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Plus = ({ width = 24, height = 24, hidden = false, title = 'Plus', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-plus-${count}`}"
    aria-describedby="${`title-plus-${count}`}"
  >
    <title id="${`title-plus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-plus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/pocket.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/pocket.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Pocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pocket", function() { return Pocket; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Pocket = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pocket',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-pocket-${count}`}"
    aria-describedby="${`title-pocket-${count}`}"
  >
    <title id="${`title-pocket-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-pocket-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
    <polyline points="8 10 12 14 16 10" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/power.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/power.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Power */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power", function() { return Power; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Power = ({ width = 24, height = 24, hidden = false, title = 'Power', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-power-${count}`}"
    aria-describedby="${`title-power-${count}`}"
  >
    <title id="${`title-power-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-power-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/printer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/printer.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Printer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Printer", function() { return Printer; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Printer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Printer',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-printer-${count}`}"
    aria-describedby="${`title-printer-${count}`}"
  >
    <title id="${`title-printer-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-printer-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/radio.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/radio.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Radio = ({ width = 24, height = 24, hidden = false, title = 'Radio', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-radio-${count}`}"
    aria-describedby="${`title-radio-${count}`}"
  >
    <title id="${`title-radio-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-radio-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="2" />
    <path
      d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/refresh-ccw.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/refresh-ccw.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, RefreshCcw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshCcw", function() { return RefreshCcw; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const RefreshCcw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Refresh Ccw',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-refresh-ccw-${count}`}"
    aria-describedby="${`title-refresh-ccw-${count}`}"
  >
    <title id="${`title-refresh-ccw-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-refresh-ccw-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="1 4 1 10 7 10" />
    <polyline points="23 20 23 14 17 14" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/refresh-cw.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/refresh-cw.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, RefreshCw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshCw", function() { return RefreshCw; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const RefreshCw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Refresh Cw',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-refresh-cw-${count}`}"
    aria-describedby="${`title-refresh-cw-${count}`}"
  >
    <title id="${`title-refresh-cw-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-refresh-cw-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/repeat.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/repeat.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Repeat = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Repeat',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-repeat-${count}`}"
    aria-describedby="${`title-repeat-${count}`}"
  >
    <title id="${`title-repeat-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-repeat-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/rewind.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/rewind.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Rewind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rewind", function() { return Rewind; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Rewind = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rewind',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-rewind-${count}`}"
    aria-describedby="${`title-rewind-${count}`}"
  >
    <title id="${`title-rewind-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-rewind-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="11 19 2 12 11 5 11 19" />
    <polygon points="22 19 13 12 22 5 22 19" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/rotate-ccw.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/rotate-ccw.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, RotateCcw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateCcw", function() { return RotateCcw; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const RotateCcw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate Ccw',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-rotate-ccw-${count}`}"
    aria-describedby="${`title-rotate-ccw-${count}`}"
  >
    <title id="${`title-rotate-ccw-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-rotate-ccw-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/rotate-cw.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/rotate-cw.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, RotateCw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateCw", function() { return RotateCw; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const RotateCw = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate Cw',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-rotate-cw-${count}`}"
    aria-describedby="${`title-rotate-cw-${count}`}"
  >
    <title id="${`title-rotate-cw-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-rotate-cw-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/rss.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/rss.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Rss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rss", function() { return Rss; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Rss = ({ width = 24, height = 24, hidden = false, title = 'Rss', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-rss-${count}`}"
    aria-describedby="${`title-rss-${count}`}"
  >
    <title id="${`title-rss-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-rss-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/save.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/save.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Save = ({ width = 24, height = 24, hidden = false, title = 'Save', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-save-${count}`}"
    aria-describedby="${`title-save-${count}`}"
  >
    <title id="${`title-save-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-save-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/scissors.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/scissors.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Scissors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scissors", function() { return Scissors; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Scissors = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Scissors',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-scissors-${count}`}"
    aria-describedby="${`title-scissors-${count}`}"
  >
    <title id="${`title-scissors-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-scissors-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/search.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/search.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Search = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Search',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-search-${count}`}"
    aria-describedby="${`title-search-${count}`}"
  >
    <title id="${`title-search-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-search-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/send.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/send.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Send */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Send", function() { return Send; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Send = ({ width = 24, height = 24, hidden = false, title = 'Send', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-send-${count}`}"
    aria-describedby="${`title-send-${count}`}"
  >
    <title id="${`title-send-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-send-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/server.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/server.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Server = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Server',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-server-${count}`}"
    aria-describedby="${`title-server-${count}`}"
  >
    <title id="${`title-server-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-server-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/settings.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/settings.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Settings = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Settings',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-settings-${count}`}"
    aria-describedby="${`title-settings-${count}`}"
  >
    <title id="${`title-settings-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-settings-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="3" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/share-2.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/share-2.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Share2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share2", function() { return Share2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Share2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Share 2',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-share-2-${count}`}"
    aria-describedby="${`title-share-2-${count}`}"
  >
    <title id="${`title-share-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-share-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/share.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/share.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Share = ({ width = 24, height = 24, hidden = false, title = 'Share', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-share-${count}`}"
    aria-describedby="${`title-share-${count}`}"
  >
    <title id="${`title-share-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-share-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/shield-off.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/shield-off.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ShieldOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShieldOff", function() { return ShieldOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ShieldOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shield Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-shield-off-${count}`}"
    aria-describedby="${`title-shield-off-${count}`}"
  >
    <title id="${`title-shield-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-shield-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
    <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/shield.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/shield.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Shield */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return Shield; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Shield = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shield',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-shield-${count}`}"
    aria-describedby="${`title-shield-${count}`}"
  >
    <title id="${`title-shield-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-shield-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/shopping-bag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/shopping-bag.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ShoppingBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBag", function() { return ShoppingBag; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ShoppingBag = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shopping Bag',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-shopping-bag-${count}`}"
    aria-describedby="${`title-shopping-bag-${count}`}"
  >
    <title id="${`title-shopping-bag-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-shopping-bag-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/shopping-cart.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/shopping-cart.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ShoppingCart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shopping Cart',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-shopping-cart-${count}`}"
    aria-describedby="${`title-shopping-cart-${count}`}"
  >
    <title id="${`title-shopping-cart-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-shopping-cart-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/shuffle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/shuffle.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shuffle", function() { return Shuffle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Shuffle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shuffle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-shuffle-${count}`}"
    aria-describedby="${`title-shuffle-${count}`}"
  >
    <title id="${`title-shuffle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-shuffle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/sidebar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/sidebar.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Sidebar = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sidebar',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-sidebar-${count}`}"
    aria-describedby="${`title-sidebar-${count}`}"
  >
    <title id="${`title-sidebar-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-sidebar-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/skip-back.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/skip-back.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, SkipBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipBack", function() { return SkipBack; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const SkipBack = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Skip Back',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-skip-back-${count}`}"
    aria-describedby="${`title-skip-back-${count}`}"
  >
    <title id="${`title-skip-back-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-skip-back-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="19 20 9 12 19 4 19 20" />
    <line x1="5" y1="19" x2="5" y2="5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/skip-forward.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/skip-forward.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, SkipForward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipForward", function() { return SkipForward; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const SkipForward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Skip Forward',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-skip-forward-${count}`}"
    aria-describedby="${`title-skip-forward-${count}`}"
  >
    <title id="${`title-skip-forward-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-skip-forward-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="5 4 15 12 5 20 5 4" />
    <line x1="19" y1="5" x2="19" y2="19" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/slack.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/slack.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Slack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slack", function() { return Slack; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Slack = ({ width = 24, height = 24, hidden = false, title = 'Slack', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-slack-${count}`}"
    aria-describedby="${`title-slack-${count}`}"
  >
    <title id="${`title-slack-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-slack-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
    />
    <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    <path
      d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
    />
    <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
    <path
      d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
    />
    <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
    <path
      d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
    />
    <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/slash.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/slash.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Slash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slash", function() { return Slash; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Slash = ({ width = 24, height = 24, hidden = false, title = 'Slash', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-slash-${count}`}"
    aria-describedby="${`title-slash-${count}`}"
  >
    <title id="${`title-slash-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-slash-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/sliders.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/sliders.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Sliders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sliders", function() { return Sliders; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Sliders = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sliders',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-sliders-${count}`}"
    aria-describedby="${`title-sliders-${count}`}"
  >
    <title id="${`title-sliders-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-sliders-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/smartphone.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/smartphone.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Smartphone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smartphone", function() { return Smartphone; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Smartphone = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Smartphone',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-smartphone-${count}`}"
    aria-describedby="${`title-smartphone-${count}`}"
  >
    <title id="${`title-smartphone-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-smartphone-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/smile.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/smile.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Smile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smile", function() { return Smile; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Smile = ({ width = 24, height = 24, hidden = false, title = 'Smile', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-smile-${count}`}"
    aria-describedby="${`title-smile-${count}`}"
  >
    <title id="${`title-smile-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-smile-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/speaker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/speaker.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Speaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return Speaker; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Speaker = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Speaker',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-speaker-${count}`}"
    aria-describedby="${`title-speaker-${count}`}"
  >
    <title id="${`title-speaker-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-speaker-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <circle cx="12" cy="14" r="4" />
    <line x1="12" y1="6" x2="12.01" y2="6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/square.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/square.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return Square; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Square = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Square',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-square-${count}`}"
    aria-describedby="${`title-square-${count}`}"
  >
    <title id="${`title-square-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-square-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/star.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/star.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Star */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return Star; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Star = ({ width = 24, height = 24, hidden = false, title = 'Star', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-star-${count}`}"
    aria-describedby="${`title-star-${count}`}"
  >
    <title id="${`title-star-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-star-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/stop-circle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/stop-circle.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, StopCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopCircle", function() { return StopCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const StopCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Stop Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-stop-circle-${count}`}"
    aria-describedby="${`title-stop-circle-${count}`}"
  >
    <title id="${`title-stop-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-stop-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <rect x="9" y="9" width="6" height="6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/sun.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/sun.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Sun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sun", function() { return Sun; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Sun = ({ width = 24, height = 24, hidden = false, title = 'Sun', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-sun-${count}`}"
    aria-describedby="${`title-sun-${count}`}"
  >
    <title id="${`title-sun-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-sun-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/sunrise.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/sunrise.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Sunrise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sunrise", function() { return Sunrise; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Sunrise = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sunrise',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-sunrise-${count}`}"
    aria-describedby="${`title-sunrise-${count}`}"
  >
    <title id="${`title-sunrise-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-sunrise-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M17 18a5 5 0 0 0-10 0" />
    <line x1="12" y1="2" x2="12" y2="9" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <line x1="23" y1="22" x2="1" y2="22" />
    <polyline points="8 6 12 2 16 6" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/sunset.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/sunset.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Sunset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sunset", function() { return Sunset; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Sunset = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sunset',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-sunset-${count}`}"
    aria-describedby="${`title-sunset-${count}`}"
  >
    <title id="${`title-sunset-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-sunset-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M17 18a5 5 0 0 0-10 0" />
    <line x1="12" y1="9" x2="12" y2="2" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <line x1="23" y1="22" x2="1" y2="22" />
    <polyline points="16 5 12 9 8 5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/tablet.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/tablet.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Tablet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tablet", function() { return Tablet; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Tablet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tablet',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-tablet-${count}`}"
    aria-describedby="${`title-tablet-${count}`}"
  >
    <title id="${`title-tablet-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-tablet-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/tag.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Tag = ({ width = 24, height = 24, hidden = false, title = 'Tag', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-tag-${count}`}"
    aria-describedby="${`title-tag-${count}`}"
  >
    <title id="${`title-tag-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-tag-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/target.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/target.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return Target; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Target = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Target',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-target-${count}`}"
    aria-describedby="${`title-target-${count}`}"
  >
    <title id="${`title-target-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-target-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/terminal.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/terminal.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Terminal = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Terminal',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-terminal-${count}`}"
    aria-describedby="${`title-terminal-${count}`}"
  >
    <title id="${`title-terminal-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-terminal-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/thermometer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/thermometer.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Thermometer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thermometer", function() { return Thermometer; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Thermometer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thermometer',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-thermometer-${count}`}"
    aria-describedby="${`title-thermometer-${count}`}"
  >
    <title id="${`title-thermometer-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-thermometer-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/thumbs-down.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/thumbs-down.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ThumbsDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbsDown", function() { return ThumbsDown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ThumbsDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumbs Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-thumbs-down-${count}`}"
    aria-describedby="${`title-thumbs-down-${count}`}"
  >
    <title id="${`title-thumbs-down-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-thumbs-down-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/thumbs-up.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/thumbs-up.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ThumbsUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbsUp", function() { return ThumbsUp; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ThumbsUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumbs Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-thumbs-up-${count}`}"
    aria-describedby="${`title-thumbs-up-${count}`}"
  >
    <title id="${`title-thumbs-up-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-thumbs-up-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/toggle-left.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/toggle-left.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ToggleLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLeft", function() { return ToggleLeft; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ToggleLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Toggle Left',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-toggle-left-${count}`}"
    aria-describedby="${`title-toggle-left-${count}`}"
  >
    <title id="${`title-toggle-left-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-toggle-left-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <circle cx="8" cy="12" r="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/toggle-right.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/toggle-right.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ToggleRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleRight", function() { return ToggleRight; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ToggleRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Toggle Right',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-toggle-right-${count}`}"
    aria-describedby="${`title-toggle-right-${count}`}"
  >
    <title id="${`title-toggle-right-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-toggle-right-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <circle cx="16" cy="12" r="3" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/tool.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/tool.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Tool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return Tool; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Tool = ({ width = 24, height = 24, hidden = false, title = 'Tool', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-tool-${count}`}"
    aria-describedby="${`title-tool-${count}`}"
  >
    <title id="${`title-tool-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-tool-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/trash-2.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/trash-2.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Trash2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trash2", function() { return Trash2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Trash2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trash 2',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-trash-2-${count}`}"
    aria-describedby="${`title-trash-2-${count}`}"
  >
    <title id="${`title-trash-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-trash-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/trash.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/trash.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Trash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trash", function() { return Trash; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Trash = ({ width = 24, height = 24, hidden = false, title = 'Trash', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-trash-${count}`}"
    aria-describedby="${`title-trash-${count}`}"
  >
    <title id="${`title-trash-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-trash-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/trello.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/trello.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Trello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trello", function() { return Trello; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Trello = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trello',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-trello-${count}`}"
    aria-describedby="${`title-trello-${count}`}"
  >
    <title id="${`title-trello-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-trello-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <rect x="7" y="7" width="3" height="9" />
    <rect x="14" y="7" width="3" height="5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/trending-down.js":
/*!***********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/trending-down.js ***!
  \***********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, TrendingDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingDown", function() { return TrendingDown; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const TrendingDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trending Down',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-trending-down-${count}`}"
    aria-describedby="${`title-trending-down-${count}`}"
  >
    <title id="${`title-trending-down-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-trending-down-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/trending-up.js":
/*!*********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/trending-up.js ***!
  \*********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, TrendingUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingUp", function() { return TrendingUp; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const TrendingUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trending Up',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-trending-up-${count}`}"
    aria-describedby="${`title-trending-up-${count}`}"
  >
    <title id="${`title-trending-up-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-trending-up-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/triangle.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/triangle.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Triangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return Triangle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Triangle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Triangle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-triangle-${count}`}"
    aria-describedby="${`title-triangle-${count}`}"
  >
    <title id="${`title-triangle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-triangle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/truck.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/truck.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Truck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Truck", function() { return Truck; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Truck = ({ width = 24, height = 24, hidden = false, title = 'Truck', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-truck-${count}`}"
    aria-describedby="${`title-truck-${count}`}"
  >
    <title id="${`title-truck-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-truck-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/tv.js":
/*!************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/tv.js ***!
  \************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Tv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tv", function() { return Tv; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Tv = ({ width = 24, height = 24, hidden = false, title = 'Tv', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-tv-${count}`}"
    aria-describedby="${`title-tv-${count}`}"
  >
    <title id="${`title-tv-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-tv-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
    <polyline points="17 2 12 7 7 2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/twitch.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/twitch.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Twitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitch", function() { return Twitch; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Twitch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Twitch',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-twitch-${count}`}"
    aria-describedby="${`title-twitch-${count}`}"
  >
    <title id="${`title-twitch-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-twitch-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/twitter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/twitter.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Twitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Twitter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Twitter',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-twitter-${count}`}"
    aria-describedby="${`title-twitter-${count}`}"
  >
    <title id="${`title-twitter-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-twitter-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/type.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/type.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Type = ({ width = 24, height = 24, hidden = false, title = 'Type', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-type-${count}`}"
    aria-describedby="${`title-type-${count}`}"
  >
    <title id="${`title-type-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-type-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" y1="20" x2="15" y2="20" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/umbrella.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/umbrella.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Umbrella */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Umbrella", function() { return Umbrella; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Umbrella = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Umbrella',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-umbrella-${count}`}"
    aria-describedby="${`title-umbrella-${count}`}"
  >
    <title id="${`title-umbrella-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-umbrella-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/underline.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/underline.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Underline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Underline", function() { return Underline; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Underline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Underline',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-underline-${count}`}"
    aria-describedby="${`title-underline-${count}`}"
  >
    <title id="${`title-underline-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-underline-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/unlock.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/unlock.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Unlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unlock", function() { return Unlock; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Unlock = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Unlock',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-unlock-${count}`}"
    aria-describedby="${`title-unlock-${count}`}"
  >
    <title id="${`title-unlock-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-unlock-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/upload-cloud.js":
/*!**********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/upload-cloud.js ***!
  \**********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, UploadCloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCloud", function() { return UploadCloud; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const UploadCloud = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Upload Cloud',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-upload-cloud-${count}`}"
    aria-describedby="${`title-upload-cloud-${count}`}"
  >
    <title id="${`title-upload-cloud-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-upload-cloud-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <polyline points="16 16 12 12 8 16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/upload.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/upload.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return Upload; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Upload = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Upload',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-upload-${count}`}"
    aria-describedby="${`title-upload-${count}`}"
  >
    <title id="${`title-upload-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-upload-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/user-check.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/user-check.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, UserCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCheck", function() { return UserCheck; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const UserCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Check',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-user-check-${count}`}"
    aria-describedby="${`title-user-check-${count}`}"
  >
    <title id="${`title-user-check-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-user-check-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/user-minus.js":
/*!********************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/user-minus.js ***!
  \********************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, UserMinus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMinus", function() { return UserMinus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const UserMinus = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Minus',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-user-minus-${count}`}"
    aria-describedby="${`title-user-minus-${count}`}"
  >
    <title id="${`title-user-minus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-user-minus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/user-plus.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/user-plus.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, UserPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlus", function() { return UserPlus; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const UserPlus = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Plus',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-user-plus-${count}`}"
    aria-describedby="${`title-user-plus-${count}`}"
  >
    <title id="${`title-user-plus-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-user-plus-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/user-x.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/user-x.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, UserX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserX", function() { return UserX; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const UserX = ({ width = 24, height = 24, hidden = false, title = 'User X', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-user-x-${count}`}"
    aria-describedby="${`title-user-x-${count}`}"
  >
    <title id="${`title-user-x-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-user-x-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="18" y1="8" x2="23" y2="13" />
    <line x1="23" y1="8" x2="18" y2="13" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/user.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/user.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const User = ({ width = 24, height = 24, hidden = false, title = 'User', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-user-${count}`}"
    aria-describedby="${`title-user-${count}`}"
  >
    <title id="${`title-user-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-user-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/users.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/users.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Users = ({ width = 24, height = 24, hidden = false, title = 'Users', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-users-${count}`}"
    aria-describedby="${`title-users-${count}`}"
  >
    <title id="${`title-users-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-users-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/video-off.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/video-off.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, VideoOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoOff", function() { return VideoOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const VideoOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Video Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-video-off-${count}`}"
    aria-describedby="${`title-video-off-${count}`}"
  >
    <title id="${`title-video-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-video-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
    />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/video.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/video.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Video = ({ width = 24, height = 24, hidden = false, title = 'Video', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-video-${count}`}"
    aria-describedby="${`title-video-${count}`}"
  >
    <title id="${`title-video-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-video-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/voicemail.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/voicemail.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Voicemail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voicemail", function() { return Voicemail; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Voicemail = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Voicemail',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-voicemail-${count}`}"
    aria-describedby="${`title-voicemail-${count}`}"
  >
    <title id="${`title-voicemail-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-voicemail-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="5.5" cy="11.5" r="4.5" />
    <circle cx="18.5" cy="11.5" r="4.5" />
    <line x1="5.5" y1="16" x2="18.5" y2="16" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/volume-1.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/volume-1.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Volume1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume1", function() { return Volume1; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Volume1 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume 1',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-volume-1-${count}`}"
    aria-describedby="${`title-volume-1-${count}`}"
  >
    <title id="${`title-volume-1-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-volume-1-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/volume-2.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/volume-2.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Volume2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume2", function() { return Volume2; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Volume2 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume 2',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-volume-2-${count}`}"
    aria-describedby="${`title-volume-2-${count}`}"
  >
    <title id="${`title-volume-2-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-volume-2-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/volume-x.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/volume-x.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, VolumeX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeX", function() { return VolumeX; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const VolumeX = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume X',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-volume-x-${count}`}"
    aria-describedby="${`title-volume-x-${count}`}"
  >
    <title id="${`title-volume-x-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-volume-x-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/volume.js":
/*!****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/volume.js ***!
  \****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Volume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume", function() { return Volume; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Volume = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Volume',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-volume-${count}`}"
    aria-describedby="${`title-volume-${count}`}"
  >
    <title id="${`title-volume-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-volume-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/watch.js":
/*!***************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/watch.js ***!
  \***************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Watch = ({ width = 24, height = 24, hidden = false, title = 'Watch', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-watch-${count}`}"
    aria-describedby="${`title-watch-${count}`}"
  >
    <title id="${`title-watch-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-watch-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="7" />
    <polyline points="12 9 12 12 13.5 13.5" />
    <path
      d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/wifi-off.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/wifi-off.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, WifiOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiOff", function() { return WifiOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const WifiOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Wifi Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-wifi-off-${count}`}"
    aria-describedby="${`title-wifi-off-${count}`}"
  >
    <title id="${`title-wifi-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-wifi-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="1" y1="1" x2="23" y2="23" />
    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
    <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/wifi.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/wifi.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Wifi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wifi", function() { return Wifi; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Wifi = ({ width = 24, height = 24, hidden = false, title = 'Wifi', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-wifi-${count}`}"
    aria-describedby="${`title-wifi-${count}`}"
  >
    <title id="${`title-wifi-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-wifi-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/wind.js":
/*!**************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/wind.js ***!
  \**************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Wind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wind", function() { return Wind; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Wind = ({ width = 24, height = 24, hidden = false, title = 'Wind', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-wind-${count}`}"
    aria-describedby="${`title-wind-${count}`}"
  >
    <title id="${`title-wind-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-wind-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
    />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/x-circle.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/x-circle.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, XCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XCircle", function() { return XCircle; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const XCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'X Circle',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-x-circle-${count}`}"
    aria-describedby="${`title-x-circle-${count}`}"
  >
    <title id="${`title-x-circle-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-x-circle-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/x-octagon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/x-octagon.js ***!
  \*******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, XOctagon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XOctagon", function() { return XOctagon; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const XOctagon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'X Octagon',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-x-octagon-${count}`}"
    aria-describedby="${`title-x-octagon-${count}`}"
  >
    <title id="${`title-x-octagon-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-x-octagon-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/x-square.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/x-square.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, XSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSquare", function() { return XSquare; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const XSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'X Square',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-x-square-${count}`}"
    aria-describedby="${`title-x-square-${count}`}"
  >
    <title id="${`title-x-square-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-x-square-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/x.js":
/*!***********************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/x.js ***!
  \***********************************************************/
/*! exports provided: setCustomTemplateLiteralTag, X */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const X = ({ width = 24, height = 24, hidden = false, title = 'X', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-x-${count}`}"
    aria-describedby="${`title-x-${count}`}"
  >
    <title id="${`title-x-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-x-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/youtube.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/youtube.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Youtube = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Youtube',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-youtube-${count}`}"
    aria-describedby="${`title-youtube-${count}`}"
  >
    <title id="${`title-youtube-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-youtube-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <path
      d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
    />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/zap-off.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/zap-off.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ZapOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapOff", function() { return ZapOff; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ZapOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Zap Off',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-zap-off-${count}`}"
    aria-describedby="${`title-zap-off-${count}`}"
  >
    <title id="${`title-zap-off-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-zap-off-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polyline points="12.41 6.75 13 2 10.57 4.92" />
    <polyline points="18.57 12.91 21 10 15.66 10" />
    <polyline points="8 8 3 14 12 14 11 22 16 16" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/zap.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/zap.js ***!
  \*************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, Zap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zap", function() { return Zap; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const Zap = ({ width = 24, height = 24, hidden = false, title = 'Zap', desc } = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-zap-${count}`}"
    aria-describedby="${`title-zap-${count}`}"
  >
    <title id="${`title-zap-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-zap-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/zoom-in.js":
/*!*****************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/zoom-in.js ***!
  \*****************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ZoomIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomIn", function() { return ZoomIn; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ZoomIn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Zoom In',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-zoom-in-${count}`}"
    aria-describedby="${`title-zoom-in-${count}`}"
  >
    <title id="${`title-zoom-in-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-zoom-in-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/feather-icon-literals/lib/icons/zoom-out.js":
/*!******************************************************************!*\
  !*** ./node_modules/feather-icon-literals/lib/icons/zoom-out.js ***!
  \******************************************************************/
/*! exports provided: setCustomTemplateLiteralTag, ZoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomOut", function() { return ZoomOut; });
/* harmony import */ var _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom-tag.js */ "./node_modules/feather-icon-literals/lib/custom-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCustomTemplateLiteralTag", function() { return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["setCustomTemplateLiteralTag"]; });


let iconCount = 0;


const ZoomOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Zoom Out',
  desc,
} = {}) => {
  const count = iconCount++;
  return _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="${hidden ? 'true' : 'false'}"
    role="img"
    aria-labelledby="${`title-zoom-out-${count}`}"
    aria-describedby="${`title-zoom-out-${count}`}"
  >
    <title id="${`title-zoom-out-${count}`}">${title}</title>
    ${desc ? _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]`<desc id="${`desc-zoom-out-${count}`}">${desc}</desc>` : _custom_tag_js__WEBPACK_IMPORTED_MODULE_0__["tag"]``}
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>`;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/rangeslider-pure/dist/range-slider.js":
/*!************************************************************!*\
  !*** ./node_modules/rangeslider-pure/dist/range-slider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/range-slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/range-slider.css":
/*!******************************!*\
  !*** ./src/range-slider.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/range-slider.js":
/*!*****************************!*\
  !*** ./src/range-slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.js");

var dom = _interopRequireWildcard(_dom);

var _functions = __webpack_require__(/*! ./utils/functions */ "./src/utils/functions.js");

var func = _interopRequireWildcard(_functions);

__webpack_require__(/*! ./range-slider.css */ "./src/range-slider.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newLineAndTabRegexp = new RegExp('/[\\n\\t]/', 'g');
var MAX_SET_BY_DEFAULT = 100;
var HANDLE_RESIZE_DELAY = 300;
var HANDLE_RESIZE_DEBOUNCE = 50;

var pluginName = 'rangeSlider';
var inputrange = dom.supportsRange();
var defaults = {
  polyfill: true,
  root: document,
  rangeClass: 'rangeSlider',
  disabledClass: 'rangeSlider--disabled',
  fillClass: 'rangeSlider__fill',
  bufferClass: 'rangeSlider__buffer',
  handleClass: 'rangeSlider__handle',
  startEvent: ['mousedown', 'touchstart', 'pointerdown'],
  moveEvent: ['mousemove', 'touchmove', 'pointermove'],
  endEvent: ['mouseup', 'touchend', 'pointerup'],
  min: null,
  max: null,
  step: null,
  value: null,
  buffer: null,
  stick: null,
  borderRadius: 10,
  vertical: false
};

var verticalSlidingFixRegistered = false;

/**
 * Plugin
 * @param {HTMLElement} element
 * @param {this} options
 */

var RangeSlider = function () {
  function RangeSlider(element, options) {
    _classCallCheck(this, RangeSlider);

    var minSetByDefault = void 0;
    var maxSetByDefault = void 0;
    var stepSetByDefault = void 0;
    var stickAttribute = void 0;
    var stickValues = void 0;

    RangeSlider.instances.push(this);

    this.element = element;
    this.options = func.simpleExtend(defaults, options);
    this.polyfill = this.options.polyfill;
    this.vertical = this.options.vertical;
    this.onInit = this.options.onInit;
    this.onSlide = this.options.onSlide;
    this.onSlideStart = this.options.onSlideStart;
    this.onSlideEnd = this.options.onSlideEnd;
    this.onSlideEventsCount = -1;
    this.isInteractsNow = false;
    this.needTriggerEvents = false;

    this._addVerticalSlideScrollFix();

    // Plugin should only be used as a polyfill
    if (!this.polyfill) {
      // Input range support?
      if (inputrange) {
        return;
      }
    }

    this.options.buffer = this.options.buffer || parseFloat(this.element.getAttribute('data-buffer'));

    this.identifier = 'js-' + pluginName + '-' + func.uuid();

    this.min = func.getFirsNumberLike(this.options.min, parseFloat(this.element.getAttribute('min')), minSetByDefault = 0);

    this.max = func.getFirsNumberLike(this.options.max, parseFloat(this.element.getAttribute('max')), maxSetByDefault = MAX_SET_BY_DEFAULT);

    this.value = func.getFirsNumberLike(this.options.value, this.element.value, parseFloat(this.element.value || this.min + (this.max - this.min) / 2));

    this.step = func.getFirsNumberLike(this.options.step, parseFloat(this.element.getAttribute('step')) || (stepSetByDefault = 1));

    this.percent = null;

    if (func.isArray(this.options.stick) && this.options.stick.length >= 1) {
      this.stick = this.options.stick;
    } else if (stickAttribute = this.element.getAttribute('stick')) {
      stickValues = stickAttribute.split(' ');
      if (stickValues.length >= 1) {
        this.stick = stickValues.map(parseFloat);
      }
    }
    if (this.stick && this.stick.length === 1) {
      this.stick.push(this.step * 1.5);
    }
    this._updatePercentFromValue();

    this.toFixed = this._toFixed(this.step);

    var directionClass = void 0;

    this.container = document.createElement('div');
    dom.addClass(this.container, this.options.fillClass);

    directionClass = this.vertical ? this.options.fillClass + '__vertical' : this.options.fillClass + '__horizontal';
    dom.addClass(this.container, directionClass);

    this.handle = document.createElement('div');
    dom.addClass(this.handle, this.options.handleClass);

    directionClass = this.vertical ? this.options.handleClass + '__vertical' : this.options.handleClass + '__horizontal';
    dom.addClass(this.handle, directionClass);

    this.range = document.createElement('div');
    dom.addClass(this.range, this.options.rangeClass);
    this.range.id = this.identifier;

    var elementTitle = element.getAttribute('title');
    if (elementTitle && elementTitle.length > 0) {
      this.range.setAttribute('title', elementTitle);
    }

    if (this.options.bufferClass) {
      this.buffer = document.createElement('div');
      dom.addClass(this.buffer, this.options.bufferClass);
      this.range.appendChild(this.buffer);

      directionClass = this.vertical ? this.options.bufferClass + '__vertical' : this.options.bufferClass + '__horizontal';
      dom.addClass(this.buffer, directionClass);
    }

    this.range.appendChild(this.container);
    this.range.appendChild(this.handle);

    directionClass = this.vertical ? this.options.rangeClass + '__vertical' : this.options.rangeClass + '__horizontal';
    dom.addClass(this.range, directionClass);

    if (func.isNumberLike(this.options.value)) {
      this._setValue(this.options.value, true);
      this.element.value = this.options.value;
    }

    if (func.isNumberLike(this.options.buffer)) {
      this.element.setAttribute('data-buffer', this.options.buffer);
    }

    if (func.isNumberLike(this.options.min) || minSetByDefault) {
      this.element.setAttribute('min', '' + this.min);
    }

    if (func.isNumberLike(this.options.max) || maxSetByDefault) {
      this.element.setAttribute('max', '' + this.max);
    }

    if (func.isNumberLike(this.options.step) || stepSetByDefault) {
      this.element.setAttribute('step', '' + this.step);
    }

    dom.insertAfter(this.element, this.range);

    // hide the input visually
    dom.setCss(this.element, {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'overflow': 'hidden',
      'opacity': '0'
    });

    // Store context
    this._handleDown = this._handleDown.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._startEventListener = this._startEventListener.bind(this);
    this._changeEventListener = this._changeEventListener.bind(this);
    this._handleResize = this._handleResize.bind(this);

    this._init();

    // Attach Events
    window.addEventListener('resize', this._handleResize, false);

    dom.addEventListeners(this.options.root, this.options.startEvent, this._startEventListener);

    // Listen to programmatic value changes
    this.element.addEventListener('change', this._changeEventListener, false);
  }

  /**
   * A lightweight plugin wrapper around the constructor,preventing against multiple instantiations
   * @param {Element} el
   * @param {Object} options
   */


  _createClass(RangeSlider, [{
    key: 'update',


    /* public methods */

    /**
     * @param {Object} obj like {min : Number, max : Number, value : Number, step : Number, buffer : [String|Number]}
     * @param {Boolean} triggerEvents
     * @returns {RangeSlider}
     */
    value: function update(obj, triggerEvents) {
      if (triggerEvents) {
        this.needTriggerEvents = true;
      }
      if (func.isObject(obj)) {
        if (func.isNumberLike(obj.min)) {
          this.element.setAttribute('min', '' + obj.min);
          this.min = obj.min;
        }

        if (func.isNumberLike(obj.max)) {
          this.element.setAttribute('max', '' + obj.max);
          this.max = obj.max;
        }

        if (func.isNumberLike(obj.step)) {
          this.element.setAttribute('step', '' + obj.step);
          this.step = obj.step;
          this.toFixed = this._toFixed(obj.step);
        }

        if (func.isNumberLike(obj.buffer)) {
          this._setBufferPosition(obj.buffer);
        }

        if (func.isNumberLike(obj.value)) {
          this._setValue(obj.value);
        }
      }
      this._update();
      this.onSlideEventsCount = 0;
      this.needTriggerEvents = false;
      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this = this;

      dom.removeAllListenersFromEl(this, this.options.root);
      window.removeEventListener('resize', this._handleResize, false);
      this.element.removeEventListener('change', this._changeEventListener, false);

      this.element.style.cssText = '';
      delete this.element[pluginName];

      // Remove the generated markup
      if (this.range) {
        this.range.parentNode.removeChild(this.range);
      }

      RangeSlider.instances = RangeSlider.instances.filter(function (plugin) {
        return plugin !== _this;
      });

      if (!RangeSlider.instances.some(function (plugin) {
        return plugin.vertical;
      })) {
        this._removeVerticalSlideScrollFix();
      }
    }

    /* private methods */

  }, {
    key: '_toFixed',
    value: function _toFixed(step) {
      return (step + '').replace('.', '').length - 1;
    }
  }, {
    key: '_init',
    value: function _init() {
      if (this.onInit && typeof this.onInit === 'function') {
        this.onInit();
      }
      this._update(false);
    }
  }, {
    key: '_updatePercentFromValue',
    value: function _updatePercentFromValue() {
      this.percent = (this.value - this.min) / (this.max - this.min);
    }

    /**
     * This method check if this.identifier exists in ev.target's ancestors
     * @param ev
     * @param data
     */

  }, {
    key: '_startEventListener',
    value: function _startEventListener(ev, data) {
      var _this2 = this;

      var el = ev.target;
      var isEventOnSlider = false;

      if (ev.which !== 1 && !('touches' in ev)) {
        return;
      }

      dom.forEachAncestors(el, function (el) {
        return isEventOnSlider = el.id === _this2.identifier && !dom.hasClass(el, _this2.options.disabledClass);
      }, true);

      if (isEventOnSlider) {
        this._handleDown(ev, data);
      }
    }
  }, {
    key: '_changeEventListener',
    value: function _changeEventListener(ev, data) {
      if (data && data.origin === this.identifier) {
        return;
      }

      var value = ev.target.value;
      var pos = this._getPositionFromValue(value);

      this._setPosition(pos);
    }
  }, {
    key: '_update',
    value: function _update(triggerEvent) {
      var sizeProperty = this.vertical ? 'offsetHeight' : 'offsetWidth';

      this.handleSize = dom.getDimension(this.handle, sizeProperty);
      this.rangeSize = dom.getDimension(this.range, sizeProperty);
      this.maxHandleX = this.rangeSize - this.handleSize;
      this.grabX = this.handleSize / 2;
      this.position = this._getPositionFromValue(this.value);

      // Consider disabled state
      if (this.element.disabled) {
        dom.addClass(this.range, this.options.disabledClass);
      } else {
        dom.removeClass(this.range, this.options.disabledClass);
      }

      this._setPosition(this.position);
      if (this.options.bufferClass && this.options.buffer) {
        this._setBufferPosition(this.options.buffer);
      }
      this._updatePercentFromValue();
      if (triggerEvent !== false) {
        dom.triggerEvent(this.element, 'change', { origin: this.identifier });
      }
    }
  }, {
    key: '_addVerticalSlideScrollFix',
    value: function _addVerticalSlideScrollFix() {
      if (this.vertical && !verticalSlidingFixRegistered) {
        document.addEventListener('touchmove', RangeSlider._touchMoveScrollHandler, { passive: false });
        verticalSlidingFixRegistered = true;
      }
    }
  }, {
    key: '_removeVerticalSlideScrollFix',
    value: function _removeVerticalSlideScrollFix() {
      document.removeEventListener('touchmove', RangeSlider._touchMoveScrollHandler);
      verticalSlidingFixRegistered = false;
    }
  }, {
    key: '_handleResize',
    value: function _handleResize() {
      var _this3 = this;

      return func.debounce(function () {
        // Simulate resizeEnd event.
        func.delay(function () {
          _this3._update();
        }, HANDLE_RESIZE_DELAY);
      }, HANDLE_RESIZE_DEBOUNCE)();
    }
  }, {
    key: '_handleDown',
    value: function _handleDown(e) {
      this.isInteractsNow = true;
      e.preventDefault();
      dom.addEventListeners(this.options.root, this.options.moveEvent, this._handleMove);
      dom.addEventListeners(this.options.root, this.options.endEvent, this._handleEnd);

      // If we click on the handle don't set the new position
      if ((' ' + e.target.className + ' ').replace(newLineAndTabRegexp, ' ').indexOf(this.options.handleClass) > -1) {
        return;
      }

      var boundingClientRect = this.range.getBoundingClientRect();

      var posX = this._getRelativePosition(e);
      var rangeX = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var handleX = this._getPositionFromNode(this.handle) - rangeX;
      var position = posX - this.grabX;

      this._setPosition(position);

      if (posX >= handleX && posX < handleX + this.options.borderRadius * 2) {
        this.grabX = posX - handleX;
      }
      this._updatePercentFromValue();
    }
  }, {
    key: '_handleMove',
    value: function _handleMove(e) {
      var posX = this._getRelativePosition(e);

      this.isInteractsNow = true;
      e.preventDefault();
      this._setPosition(posX - this.grabX);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd(e) {
      e.preventDefault();
      dom.removeEventListeners(this.options.root, this.options.moveEvent, this._handleMove);
      dom.removeEventListeners(this.options.root, this.options.endEvent, this._handleEnd);

      // Ok we're done fire the change event
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
          this.onSlideEnd(this.value, this.percent, this.position);
        }

        if (this.vertical) {
          RangeSlider.slidingVertically = false;
        }
      }
      this.onSlideEventsCount = 0;
      this.isInteractsNow = false;
    }
  }, {
    key: '_setPosition',
    value: function _setPosition(pos) {
      var position = void 0;
      var stickRadius = void 0;
      var restFromValue = void 0;
      var stickTo = void 0;

      // Snapping steps
      var value = this._getValueFromPosition(func.between(pos, 0, this.maxHandleX));

      // Stick to stick[0] in radius stick[1]
      if (this.stick) {
        stickTo = this.stick[0];
        stickRadius = this.stick[1] || 0.1;
        restFromValue = value % stickTo;
        if (restFromValue < stickRadius) {
          value = value - restFromValue;
        } else if (Math.abs(stickTo - restFromValue) < stickRadius) {
          value = value - restFromValue + stickTo;
        }
      }
      position = this._getPositionFromValue(value);

      // Update ui
      if (this.vertical) {
        this.container.style.height = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style['msTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style.transform = 'translateY(-' + position + 'px)';
      } else {
        this.container.style.width = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateX(' + position + 'px)';
        this.handle.style['msTransform'] = 'translateX(' + position + 'px)';
        this.handle.style.transform = 'translateX(' + position + 'px)';
      }

      this._setValue(value);

      // Update globals
      this.position = position;
      this.value = value;
      this._updatePercentFromValue();

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideStart && typeof this.onSlideStart === 'function' && this.onSlideEventsCount === 0) {
          this.onSlideStart(this.value, this.percent, this.position);
        }

        if (this.onSlide && typeof this.onSlide === 'function') {
          this.onSlide(this.value, this.percent, this.position);
        }

        if (this.vertical) {
          RangeSlider.slidingVertically = true;
        }
      }

      this.onSlideEventsCount++;
    }
  }, {
    key: '_setBufferPosition',
    value: function _setBufferPosition(pos) {
      var isPercent = true;

      if (isFinite(pos)) {
        pos = parseFloat(pos);
      } else if (func.isString(pos)) {
        if (pos.indexOf('px') > 0) {
          isPercent = false;
        }
        pos = parseFloat(pos);
      } else {
        console.warn('New position must be XXpx or XX%');
        return;
      }

      if (isNaN(pos)) {
        console.warn('New position is NaN');
        return;
      }
      if (!this.options.bufferClass) {
        console.warn('You disabled buffer, it\'s className is empty');
        return;
      }
      var bufferSize = isPercent ? pos : pos / this.rangeSize * 100;

      if (bufferSize < 0) {
        bufferSize = 0;
      }
      if (bufferSize > 100) {
        bufferSize = 100;
      }
      this.options.buffer = bufferSize;

      var paddingSize = this.options.borderRadius / this.rangeSize * 100;
      var bufferSizeWithPadding = bufferSize - paddingSize;

      if (bufferSizeWithPadding < 0) {
        bufferSizeWithPadding = 0;
      }

      if (this.vertical) {
        this.buffer.style.height = bufferSizeWithPadding + '%';
        this.buffer.style.bottom = paddingSize * 0.5 + '%';
      } else {
        this.buffer.style.width = bufferSizeWithPadding + '%';
        this.buffer.style.left = paddingSize * 0.5 + '%';
      }

      this.element.setAttribute('data-buffer', bufferSize);
    }

    /**
     *
     * @param {Element} node
     * @returns {*} Returns element position relative to the parent
     * @private
     */

  }, {
    key: '_getPositionFromNode',
    value: function _getPositionFromNode(node) {
      var i = this.vertical ? this.maxHandleX : 0;

      while (node !== null) {
        i += this.vertical ? node.offsetTop : node.offsetLeft;
        node = node.offsetParent;
      }
      return i;
    }

    /**
     *
     * @param {(MouseEvent|TouchEvent)}e
     * @returns {number}
     */

  }, {
    key: '_getRelativePosition',
    value: function _getRelativePosition(e) {
      var boundingClientRect = this.range.getBoundingClientRect();

      // Get the offset relative to the viewport
      var rangeSize = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var pageOffset = 0;

      var pagePositionProperty = this.vertical ? 'pageY' : 'pageX';

      if (typeof e[pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches && e.touches.length ? e.touches[0][pagePositionProperty] : e[pagePositionProperty];
      } else if (typeof e.originalEvent !== 'undefined') {
        if (typeof e.originalEvent[pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent[pagePositionProperty];
        } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent.touches[0][pagePositionProperty];
        }
      } else if (e.touches && e.touches[0] && typeof e.touches[0][pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches[0][pagePositionProperty];
      } else if (e.currentPoint && (typeof e.currentPoint.x !== 'undefined' || typeof e.currentPoint.y !== 'undefined')) {
        pageOffset = this.vertical ? e.currentPoint.y : e.currentPoint.x;
      }

      if (this.vertical) {
        pageOffset -= window.pageYOffset;
      }

      return this.vertical ? rangeSize - pageOffset : pageOffset - rangeSize;
    }
  }, {
    key: '_getPositionFromValue',
    value: function _getPositionFromValue(value) {
      var percentage = (value - this.min) / (this.max - this.min);
      var pos = percentage * this.maxHandleX;

      return isNaN(pos) ? 0 : pos;
    }
  }, {
    key: '_getValueFromPosition',
    value: function _getValueFromPosition(pos) {
      var percentage = pos / (this.maxHandleX || 1);
      var value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;

      return Number(value.toFixed(this.toFixed));
    }
  }, {
    key: '_setValue',
    value: function _setValue(value, force) {
      if (value === this.value && !force) {
        return;
      }

      // Set the new value and fire the `input` event
      this.element.value = value;
      this.value = value;
      dom.triggerEvent(this.element, 'input', { origin: this.identifier });
    }
  }], [{
    key: 'create',
    value: function create(el, options) {
      var createInstance = function createInstance(el) {
        var data = el[pluginName];

        // Create a new instance.
        if (!data) {
          data = new RangeSlider(el, options);
          el[pluginName] = data;
        }
      };

      if (el.length) {
        Array.prototype.slice.call(el).forEach(function (el) {
          createInstance(el);
        });
      } else {
        createInstance(el);
      }
    }
  }, {
    key: '_touchMoveScrollHandler',
    value: function _touchMoveScrollHandler(event) {
      if (RangeSlider.slidingVertically) {
        event.preventDefault();
      }
    }
  }]);

  return RangeSlider;
}();

exports.default = RangeSlider;


RangeSlider.version = "0.4.11";
RangeSlider.dom = dom;
RangeSlider.functions = func;
RangeSlider.instances = [];
RangeSlider.slidingVertically = false;
module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsRange = exports.removeAllListenersFromEl = exports.removeEventListeners = exports.addEventListeners = exports.insertAfter = exports.triggerEvent = exports.forEachAncestors = exports.removeClass = exports.addClass = exports.hasClass = exports.setCss = exports.getDimension = exports.getHiddenParentNodes = exports.isHidden = exports.detectIE = undefined;

var _functions = __webpack_require__(/*! ./functions */ "./src/utils/functions.js");

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EVENT_LISTENER_LIST = 'eventListenerList';

var detectIE = exports.detectIE = function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    var rv = ua.indexOf('rv:');

    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
};

var ieVersion = detectIE();
var eventCaptureParams = window.PointerEvent && !ieVersion ? { passive: false } : false;

/**
 * Check if a `element` is visible in the DOM
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
var isHidden = exports.isHidden = function isHidden(element) {
  return element.offsetWidth === 0 || element.offsetHeight === 0 || element.open === false;
};

/**
 * Get hidden parentNodes of an `element`
 *
 * @param {Element} element
 * @return {Element[]}
 */
var getHiddenParentNodes = exports.getHiddenParentNodes = function getHiddenParentNodes(element) {
  var parents = [];
  var node = element.parentNode;

  while (node && isHidden(node)) {
    parents.push(node);
    node = node.parentNode;
  }
  return parents;
};

/**
 * Returns dimensions for an element even if it is not visible in the DOM.
 *
 * @param  {Element} element
 * @param  {string}  key     (e.g. offsetWidth …)
 * @return {Number}
 */
var getDimension = exports.getDimension = function getDimension(element, key) {
  var hiddenParentNodes = getHiddenParentNodes(element);
  var hiddenParentNodesLength = hiddenParentNodes.length;
  var hiddenParentNodesStyle = [];
  var dimension = element[key];

  // Used for native `<details>` elements
  var toggleOpenProperty = function toggleOpenProperty(element) {
    if (typeof element.open !== 'undefined') {
      element.open = !element.open;
    }
  };

  if (hiddenParentNodesLength) {
    for (var i = 0; i < hiddenParentNodesLength; i++) {
      // Cache the styles to restore then later.
      hiddenParentNodesStyle.push({
        display: hiddenParentNodes[i].style.display,
        height: hiddenParentNodes[i].style.height,
        overflow: hiddenParentNodes[i].style.overflow,
        visibility: hiddenParentNodes[i].style.visibility
      });

      hiddenParentNodes[i].style.display = 'block';
      hiddenParentNodes[i].style.height = '0';
      hiddenParentNodes[i].style.overflow = 'hidden';
      hiddenParentNodes[i].style.visibility = 'hidden';
      toggleOpenProperty(hiddenParentNodes[i]);
    }

    dimension = element[key];

    for (var j = 0; j < hiddenParentNodesLength; j++) {
      toggleOpenProperty(hiddenParentNodes[j]);
      hiddenParentNodes[j].style.display = hiddenParentNodesStyle[j].display;
      hiddenParentNodes[j].style.height = hiddenParentNodesStyle[j].height;
      hiddenParentNodes[j].style.overflow = hiddenParentNodesStyle[j].overflow;
      hiddenParentNodes[j].style.visibility = hiddenParentNodesStyle[j].visibility;
    }
  }
  return dimension;
};

/**
 *
 * @param {HTMLElement} el
 * @param {Object} cssObj
 * @returns {*}
 */
var setCss = exports.setCss = function setCss(el, cssObj) {
  for (var key in cssObj) {
    el.style[key] = cssObj[key];
  }
  return el.style;
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var hasClass = exports.hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var addClass = exports.addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var removeClass = exports.removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

/**
 *
 * @param {HTMLElement} el
 * @param {Function} callback
 * @param {boolean} andForElement - apply callback for el
 * @returns {HTMLElement}
 */
var forEachAncestors = exports.forEachAncestors = function forEachAncestors(el, callback, andForElement) {
  if (andForElement) {
    callback(el);
  }

  while (el.parentNode && !callback(el)) {
    el = el.parentNode;
  }

  return el;
};

/**
 *
 * @param {HTMLElement} el
 * @param {string} name event name
 * @param {Object} data
 */
var triggerEvent = exports.triggerEvent = function triggerEvent(el, name, data) {
  if (!func.isString(name)) {
    throw new TypeError('event name must be String');
  }
  if (!(el instanceof HTMLElement)) {
    throw new TypeError('element must be HTMLElement');
  }
  name = name.trim();
  var event = document.createEvent('CustomEvent');

  event.initCustomEvent(name, false, false, data);
  el.dispatchEvent(event);
};

/**
 * @param {Object} referenceNode after this
 * @param {Object} newNode insert this
 */
var insertAfter = exports.insertAfter = function insertAfter(referenceNode, newNode) {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

/**
 * Add event listeners and push them to el[EVENT_LISTENER_LIST]
 * @param {HTMLElement|Node|Document} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var addEventListeners = exports.addEventListeners = function addEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    if (!el[EVENT_LISTENER_LIST]) {
      el[EVENT_LISTENER_LIST] = {};
    }
    if (!el[EVENT_LISTENER_LIST][eventName]) {
      el[EVENT_LISTENER_LIST][eventName] = [];
    }

    el.addEventListener(eventName, listener, eventCaptureParams);
    if (el[EVENT_LISTENER_LIST][eventName].indexOf(listener) < 0) {
      el[EVENT_LISTENER_LIST][eventName].push(listener);
    }
  });
};

/**
 * Remove event listeners and remove them from el[EVENT_LISTENER_LIST]
 * @param {HTMLElement} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var removeEventListeners = exports.removeEventListeners = function removeEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    var index = void 0;

    el.removeEventListener(eventName, listener, false);

    if (el[EVENT_LISTENER_LIST] && el[EVENT_LISTENER_LIST][eventName] && (index = el[EVENT_LISTENER_LIST][eventName].indexOf(listener)) > -1) {
      el[EVENT_LISTENER_LIST][eventName].splice(index, 1);
    }
  });
};

/**
 * Remove ALL event listeners which exists in el[EVENT_LISTENER_LIST]
 * @param {RangeSlider} instance
 * @param {HTMLElement} el DOM element
 */
var removeAllListenersFromEl = exports.removeAllListenersFromEl = function removeAllListenersFromEl(instance, el) {
  if (!el[EVENT_LISTENER_LIST]) {
    return;
  }

  /* jshint ignore:start */

  /**
   *
   * @callback listener
   * @this {Object} event name
   */
  function rm(listener) {
    if (listener === instance._startEventListener) {
      this.el.removeEventListener(this.eventName, listener, false);
    }
  }

  for (var eventName in el[EVENT_LISTENER_LIST]) {
    el[EVENT_LISTENER_LIST][eventName].forEach(rm, { eventName: eventName, el: el });
  }

  el[EVENT_LISTENER_LIST] = {};
  /* jshint ignore:end */
};

/**
 * Range feature detection
 * @return {Boolean}
 */
var supportsRange = exports.supportsRange = function supportsRange() {
  var input = document.createElement('input');

  input.setAttribute('type', 'range');
  return input.type !== 'text';
};

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Create a random uuid
 */
var uuid = exports.uuid = function uuid() {
  var s4 = function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * Delays a function for the given number of milliseconds, and then calls
 * it with the arguments supplied.
 *
 * @param  {Function} fn   function
 * @param  {Number}   wait delay
 * @param  {Number}   args arguments
 * @return {Function}
 */
var delay = exports.delay = function delay(fn, wait) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return setTimeout(function () {
    return fn.apply(null, args);
  }, wait);
};

/**
 * Returns a debounced function that will make sure the given
 * function is not triggered too much.
 *
 * @param  {Function} fn Function to debounce.
 * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the
 *         function. (defaults to 100ms)
 * @return {Function}
 */
var debounce = exports.debounce = function debounce(fn) {
  var debounceDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!fn.debouncing) {
      fn.lastReturnVal = fn.apply(window, args);
      fn.debouncing = true;
    }
    clearTimeout(fn.debounceTimeout);
    fn.debounceTimeout = setTimeout(function () {
      fn.debouncing = false;
    }, debounceDuration);
    return fn.lastReturnVal;
  };
};

var isString = exports.isString = function isString(obj) {
  return obj === '' + obj;
};

var isArray = exports.isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var isNumberLike = exports.isNumberLike = function isNumberLike(obj) {
  return obj !== null && obj !== undefined && (isString(obj) && isFinite(parseFloat(obj)) || isFinite(obj));
};

var getFirsNumberLike = exports.getFirsNumberLike = function getFirsNumberLike() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return null;
  }

  for (var i = 0, len = args.length; i < len; i++) {
    if (isNumberLike(args[i])) {
      return args[i];
    }
  }

  return null;
};

var isObject = exports.isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

var simpleExtend = exports.simpleExtend = function simpleExtend(defaultOpt, options) {
  var opt = {};

  for (var key in defaultOpt) {
    opt[key] = defaultOpt[key];
  }
  for (var _key4 in options) {
    opt[_key4] = options[_key4];
  }

  return opt;
};

var between = exports.between = function between(pos, min, max) {
  if (pos < min) {
    return min;
  }
  if (pos > max) {
    return max;
  }
  return pos;
};

/***/ })

/******/ });
});
//# sourceMappingURL=range-slider.js.map

/***/ }),

/***/ "./node_modules/semver/classes/comparator.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/classes/comparator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }
  constructor (comp, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const {re, t} = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")
const cmp = __webpack_require__(/*! ../functions/cmp */ "./node_modules/semver/functions/cmp.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ./range */ "./node_modules/semver/classes/range.js")


/***/ }),

/***/ "./node_modules/semver/classes/range.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/classes/range.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    const loose = this.options.loose
    range = range.trim()
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range, re[t.COMPARATORTRIM])

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    return range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new Comparator(comp, this.options))
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const Comparator = __webpack_require__(/*! ./comparator */ "./node_modules/semver/classes/comparator.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/semver/classes/semver.js")
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<')
        pr = '-0'

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ "./node_modules/semver/classes/semver.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/classes/semver.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "./node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/semver/internal/re.js")

const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "./node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "./node_modules/semver/functions/cmp.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/cmp.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const eq = __webpack_require__(/*! ./eq */ "./node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./neq */ "./node_modules/semver/functions/neq.js")
const gt = __webpack_require__(/*! ./gt */ "./node_modules/semver/functions/gt.js")
const gte = __webpack_require__(/*! ./gte */ "./node_modules/semver/functions/gte.js")
const lt = __webpack_require__(/*! ./lt */ "./node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ./lte */ "./node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ "./node_modules/semver/functions/compare.js":
/*!**************************************************!*\
  !*** ./node_modules/semver/functions/compare.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "./node_modules/semver/functions/eq.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/eq.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ "./node_modules/semver/functions/gt.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/gt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "./node_modules/semver/functions/gte.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/gte.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "./node_modules/semver/functions/lt.js":
/*!*********************************************!*\
  !*** ./node_modules/semver/functions/lt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "./node_modules/semver/functions/lte.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/lte.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "./node_modules/semver/functions/neq.js":
/*!**********************************************!*\
  !*** ./node_modules/semver/functions/neq.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ "./node_modules/semver/functions/satisfies.js":
/*!****************************************************!*\
  !*** ./node_modules/semver/functions/satisfies.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ "./node_modules/semver/internal/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/semver/internal/constants.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ "./node_modules/semver/internal/debug.js":
/*!***********************************************!*\
  !*** ./node_modules/semver/internal/debug.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/semver/internal/identifiers.js":
/*!*****************************************************!*\
  !*** ./node_modules/semver/internal/identifiers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ "./node_modules/semver/internal/re.js":
/*!********************************************!*\
  !*** ./node_modules/semver/internal/re.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(/*! ./constants */ "./node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "./node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ "./node_modules/tag/dist/tag.cjs.js":
/*!******************************************!*\
  !*** ./node_modules/tag/dist/tag.cjs.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Tag - Library for creating DOM elements
 *
 * (c) Alexander Tarasyuk <alexander.tarasyuk@outlook.com>
 */

const VOID_TAGS = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

/**
 * isElement
 *
 * @param {*} value
 *
 * @return {Boolean}
 */
const isElement = (value) => !!(value && value.nodeType);

/**
 * isObject
 *
 * @param {*} value
 *
 * @return {Boolean}
 */
const isObject = (value) => value !== null && typeof (value) === 'object' && !Array.isArray(value);

/**
 * isString
 *
 * @param {*} value
 *
 * @return {Boolean}
 */
const isString = (value) => typeof (value) === 'string';

/**
 * isVoidElement
 *
 * @param {String} tagName
 *
 * @return {Boolean}
 */
const isVoidElement = (tagName) => VOID_TAGS.indexOf(tagName) >= 0;

/**
 * append
 *
 * @param {Object} element
 * @param {*}      content
 *
 * @return undefined
 */
function append(element, content) {
  if (isElement(content)) {
    element.appendChild(content);
  } else {
    const div = document.createElement('div');
    div.innerHTML = content || '';

    while (div.firstChild) {
      element.appendChild(div.firstChild);
    }
  }
}

/**
 * createElement
 *
 * @param {String} tagName
 *
 * @return {Function}
 */
function createElement(tagName) {
  return function (...props) {
    const element  = document.createElement(tagName);
    const attrs    = isObject(props[0]) ? props[0] : {};
    const children = props.length === 2 ? props[1] : props[0];

    Object
      .keys(attrs)
      .forEach(name => element.setAttribute(name, attrs[name]));

    if (Array.isArray(children)) {
      children.forEach(node => append(element, node));
    }

    if (isString(children) && !isVoidElement(tagName.toLowerCase())) {
      append(element, children);
    }

    return element;
  };
}

var tag = (tagName, ...props) => {
  if (!isString(tagName)) {
    throw new Error('[tag] First argument must be String and can not be empty');
  }

  return createElement(tagName).apply(null, props);
};

module.exports = tag;


/***/ }),

/***/ "./src/_locales/en/messages.json":
/*!***************************************!*\
  !*** ./src/_locales/en/messages.json ***!
  \***************************************/
/*! exports provided: app_name_live, app_name_preview, short_app_name_live, short_app_name_preview, app_summary_live, app_summary_preview, scale_up_tooltip_shortcut_mac, scale_up_tooltip_shortcut_other, scale_up_tooltip, scale_up_text, scale_down_tooltip_shortcut_mac, scale_down_tooltip_shortcut_other, scale_down_tooltip, scale_down_text, scale_reset_tooltip_shortcut_mac, scale_reset_tooltip_shortcut_other, scale_reset_tooltip, scale_reset_text, scale_slider_tooltip, scale_close_tooltip, toggle_settings_tooltip, extension_website_title, extension_wordpress_website_title, extension_enabled_icon_tooltip_shortcut_mac, extension_enabled_icon_tooltip_shortcut_other, extension_enabled_icon_tooltip, extension_disabled_icon_tooltip_shortcut_mac, extension_disabled_icon_tooltip_shortcut_other, extension_disabled_icon_tooltip, extension_disabled_via_blocklist_icon_tooltip, extension_disabled_icon_badge_text, widget_closed_toggle_title, widget_opened_toggle_title, widget_title_logo, permission_form_title, permission_form_explanation, permission_popup_text, permission_popup_text_explanation, permission_form_request_button, permission_widget_preview_text, settings_title, setting_design_title, settings_full_design_name, settings_compact_design_name, settings_none_design_name, settings_none_design_hint, setting_position_title, settings_position_top_left_name, settings_position_center_left_name, settings_position_bottom_left_name, setting_style_title, settings_style_background, settings_style_accent, settings_style_opacity, settings_footer_install_extension_link, settings_footer_full_logo_hint, settings_footer_open_options, blocklist_form_title, blocklist_example_description, form_save, content_deselector_form_title, content_deselector_example_description, strict_blocklist_form_title, strict_blocklist_example_description, strict_blocklist_icon_toggle_explanation, logo_form_title, logo_form_upload_button, logo_form_url, logo_form_logo_title, logo_form_logo_link_target, logo_form_description, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app_name_live\":{\"message\":\"Text Zoom to increase font sizes\",\"_info_\":\"This text appears in the chrome store as extension name. (length <= 45)\"},\"app_name_preview\":{\"message\":\"Text Zoom to increase font sizes\"},\"short_app_name_live\":{\"message\":\"Text Zoom\"},\"short_app_name_preview\":{\"message\":\"Text Zoom\"},\"app_summary_live\":{\"message\":\"Extension for modifying the font size without changing the page width - with inText Zoom-Widget and shortcuts for faster access\",\"_info_\":\"This text appears as a summary in the chrome store. (length <= 132)\"},\"app_summary_preview\":{\"message\":\"Extension for modifying the font size without changing the page width - with inText Zoom-Widget and shortcuts for faster access\"},\"scale_up_tooltip_shortcut_mac\":{\"message\":\"Option +\"},\"scale_up_tooltip_shortcut_other\":{\"message\":\"Alt +\"},\"scale_up_tooltip\":{\"message\":\"Increase font size with same text width ($SHORTCUT$)\",\"placeholders\":{\"shortcut\":{\"content\":\"$1\"}}},\"scale_up_text\":{\"message\":\"A+\"},\"scale_down_tooltip_shortcut_mac\":{\"message\":\"Option -\"},\"scale_down_tooltip_shortcut_other\":{\"message\":\"Alt -\"},\"scale_down_tooltip\":{\"message\":\"Decrease font size with same text width ($SHORTCUT$)\",\"placeholders\":{\"shortcut\":{\"content\":\"$1\"}}},\"scale_down_text\":{\"message\":\"A-\"},\"scale_reset_tooltip_shortcut_mac\":{\"message\":\"Option 0\"},\"scale_reset_tooltip_shortcut_other\":{\"message\":\"Alt 0\"},\"scale_reset_tooltip\":{\"message\":\"Reset font size ($SHORTCUT$)\",\"placeholders\":{\"shortcut\":{\"content\":\"$1\"}}},\"scale_reset_text\":{\"message\":\"Reset\"},\"scale_slider_tooltip\":{\"message\":\"Change font size via drag & drop\"},\"scale_close_tooltip\":{\"message\":\"Turn Text Zoom off for this website\"},\"toggle_settings_tooltip\":{\"message\":\"Adjust settings\"},\"extension_website_title\":{\"message\":\"Abilitools Website\"},\"extension_wordpress_website_title\":{\"message\":\"Text Zoom for Wordpress\"},\"extension_enabled_icon_tooltip_shortcut_mac\":{\"message\":\"Option + or Option - or Option 0\"},\"extension_enabled_icon_tooltip_shortcut_other\":{\"message\":\"Alt + or Alt - or Alt 0\"},\"extension_enabled_icon_tooltip\":{\"message\":\"Active for this website: Widget to change the font size while retaining page width (also activated by $SHORTCUT$)\",\"placeholders\":{\"shortcut\":{\"content\":\"$1\"}}},\"extension_disabled_icon_tooltip_shortcut_mac\":{\"message\":\"Option + or Option - or Option 0\"},\"extension_disabled_icon_tooltip_shortcut_other\":{\"message\":\"Alt + or Alt - or Alt 0\"},\"extension_disabled_icon_tooltip\":{\"message\":\"Off: Activate the widget for changing the font size again by clicking here (also activated by $SHORTCUT$)\",\"placeholders\":{\"shortcut\":{\"content\":\"$1\"}}},\"extension_disabled_via_blocklist_icon_tooltip\":{\"message\":\"URL is blocked. Please check the Options-Page\"},\"extension_disabled_icon_badge_text\":{\"message\":\"Off\"},\"widget_closed_toggle_title\":{\"message\":\"Open Text Zoom widget\"},\"widget_opened_toggle_title\":{\"message\":\"Close Text Zoom widget\"},\"widget_title_logo\":{\"message\":\"I'm Abili 🐵 You can find more tools for accessability from me here!\"},\"permission_form_title\":{\"message\":\"Additional Permissions\"},\"permission_form_explanation\":{\"message\":\"We need more permissions in order to make the extension work.<br/>Pressing \\\"Request Permission\\\" will open a popup with the message:\"},\"permission_popup_text\":{\"message\":\"Read and change all your data on the websites you visit\"},\"permission_popup_text_explanation\":{\"message\":\"We need to access the websites you visit in order to change their text size. We do not collect any information about any websites and all processing is done on your computer only.\"},\"permission_form_request_button\":{\"message\":\"Request Permission\"},\"permission_widget_preview_text\":{\"message\":\"Grant the permission will open the Text Zoom Widget.\"},\"settings_title\":{\"message\":\"Settings\"},\"setting_design_title\":{\"message\":\"Design\"},\"settings_full_design_name\":{\"message\":\"Full Design\"},\"settings_compact_design_name\":{\"message\":\"Compact Design\"},\"settings_none_design_name\":{\"message\":\"Widget Hidden\"},\"settings_none_design_hint\":{\"message\":\"Shortcuts only (Alt +/-/0)\"},\"setting_position_title\":{\"message\":\"Position\"},\"settings_position_top_left_name\":{\"message\":\"Top-Left\"},\"settings_position_center_left_name\":{\"message\":\"Center-Left\"},\"settings_position_bottom_left_name\":{\"message\":\"Bottom-Left\"},\"setting_style_title\":{\"message\":\"Style\"},\"settings_style_background\":{\"message\":\"Background Color\"},\"settings_style_accent\":{\"message\":\"Accent Color\"},\"settings_style_opacity\":{\"message\":\"Transparency (when closed)\"},\"settings_footer_install_extension_link\":{\"message\":\"Install the browser extension\"},\"settings_footer_full_logo_hint\":{\"message\":\"More from Abilitools\"},\"settings_footer_open_options\":{\"message\":\"Open additional settings\"},\"blocklist_form_title\":{\"message\":\"Blocked paths (Default values can't be changed)\"},\"blocklist_example_description\":{\"message\":\"Parts of the URL can be used to block the extension.<br/>For example:\"},\"form_save\":{\"message\":\"Save\"},\"content_deselector_form_title\":{\"message\":\"Content Deselector (Default values can't be changed)\"},\"content_deselector_example_description\":{\"message\":\"CSS selectors can be used exclude parts of the website to be zoomed.<br/>For example:\"},\"strict_blocklist_form_title\":{\"message\":\"Strict Blocked Paths\"},\"strict_blocklist_example_description\":{\"message\":\"Exact matches of URLs can be used to block the extension.<br/>For example:\"},\"strict_blocklist_icon_toggle_explanation\":{\"message\":\"Disabling the extension using the extension icons fills this block list.\"},\"logo_form_title\":{\"message\":\"Widget Logo Settings\"},\"logo_form_upload_button\":{\"message\":\"Upload\"},\"logo_form_url\":{\"message\":\"Logo URL\"},\"logo_form_logo_title\":{\"message\":\"Logo title\"},\"logo_form_logo_link_target\":{\"message\":\"Link target\"},\"logo_form_description\":{\"message\":\"Choose an image from your computer or use an URL. <br/>The image shouldn't be bigger than 50x50 pixels. Consider a file size smaller than 80KB.\"}}");

/***/ }),

/***/ "./src/blocked-list-handler.js":
/*!*************************************!*\
  !*** ./src/blocked-list-handler.js ***!
  \*************************************/
/*! exports provided: DEFAULT_BLOCK_LIST, isUrlPartiallyBlocked, isUrlStrictlyBlocked, addUrlToStrictBlockedList, removeUrlFromStrictBlockedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BLOCK_LIST", function() { return DEFAULT_BLOCK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlPartiallyBlocked", function() { return isUrlPartiallyBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlStrictlyBlocked", function() { return isUrlStrictlyBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUrlToStrictBlockedList", function() { return addUrlToStrictBlockedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUrlFromStrictBlockedList", function() { return removeUrlFromStrictBlockedList; });
/* harmony import */ var lib_is_url_blocked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/is_url_blocked */ "./src/lib/is_url_blocked.js");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols */ "./src/symbols.js");




const DEFAULT_BLOCK_LIST = ['.pdf', 'docs.google.com/spreadsheets', 'sharepoint.com/:x'];


const isUrlPartiallyBlocked = ({ url, environmentStorageGet }) => {
  const isBlockedByDefault = Object(lib_is_url_blocked__WEBPACK_IMPORTED_MODULE_0__["isUrlBlocked"])({ url, list: DEFAULT_BLOCK_LIST, strict: false });

  if (isBlockedByDefault) return Promise.resolve(true);

  return environmentStorageGet(_symbols__WEBPACK_IMPORTED_MODULE_1__["STORAGE_BLOCKLIST"]).then(data => Object(lib_is_url_blocked__WEBPACK_IMPORTED_MODULE_0__["isUrlBlocked"])({ url, list: data, strict: false }));
};


const isUrlStrictlyBlocked = ({ url, environmentStorageGet }) => {
  return environmentStorageGet(_symbols__WEBPACK_IMPORTED_MODULE_1__["STORAGE_STRICT_BLOCKLIST"]).then(data => Object(lib_is_url_blocked__WEBPACK_IMPORTED_MODULE_0__["isUrlBlocked"])({ url, list: data, strict: true }));
};


const addUrlToStrictBlockedList = ({ url, environmentStorageGet, environmentStorageSet }) => {
  return environmentStorageGet(_symbols__WEBPACK_IMPORTED_MODULE_1__["STORAGE_STRICT_BLOCKLIST"]).then(async data => {
    if (!data) data = [];

    return environmentStorageSet({ [_symbols__WEBPACK_IMPORTED_MODULE_1__["STORAGE_STRICT_BLOCKLIST"]]: [...data, url] });
  });
};


const removeUrlFromStrictBlockedList = ({ url, environmentStorageGet, environmentStorageSet }) => {
  return environmentStorageGet(_symbols__WEBPACK_IMPORTED_MODULE_1__["STORAGE_STRICT_BLOCKLIST"]).then(async data => {
    return environmentStorageSet({ [_symbols__WEBPACK_IMPORTED_MODULE_1__["STORAGE_STRICT_BLOCKLIST"]]: data.filter(blockedUrl => blockedUrl !== url) });
  });
};




/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_content_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/runtime */ "./src/content/runtime.js");
/* harmony import */ var src_migrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/migrate */ "./src/migrate.js");
/* global __VERSION__: false */





Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! src/target-interface/wordpress */ "./src/target-interface/wordpress.js"))
  .then(async exports => {
    const { configureRuntime } = exports;

    const result = await configureRuntime()
      .then(data => data)
      .catch(data => data);

    if (result.isBlocked) {
      return Promise.reject('isBlocked');
    }

    return Promise.resolve(exports);
  })
  .then(async exports => {
    await Object(src_migrate__WEBPACK_IMPORTED_MODULE_1__["runMigrations"])(src_migrate__WEBPACK_IMPORTED_MODULE_1__["allMigrations"], "7.8.3", {
      environmentStorageGet: exports.environmentStorageGet,
      environmentStorageSet: exports.environmentStorageSet
    });

    return Promise.resolve(exports);
  })
  .then(src_content_runtime__WEBPACK_IMPORTED_MODULE_0__["loadExtensionRuntime"])
  .catch(() => {});


/***/ }),

/***/ "./src/content/backup-original-text-attributes/backup-original-text-attributes.js":
/*!****************************************************************************************!*\
  !*** ./src/content/backup-original-text-attributes/backup-original-text-attributes.js ***!
  \****************************************************************************************/
/*! exports provided: backupOriginalTextAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backupOriginalTextAttributes", function() { return backupOriginalTextAttributes; });
/* harmony import */ var src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/kx-data-storage/kx-data-storage */ "./src/content/kx-data-storage/kx-data-storage.js");
/* harmony import */ var src_content_get_computed_values_get_computed_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/content/get-computed-values/get-computed-values */ "./src/content/get-computed-values/get-computed-values.js");




const retrieveCSSStyleProperty = (element, property) =>
  element.style.cssText.split('; ').filter(css => css.startsWith(property))[0];

function backupOriginalTextAttributes(
  element,
  {
    getComputedStyle$ = element => window.getComputedStyle(element),
    saveKXData$ = src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_0__["saveKXData"],
    getComputedFontSize$ = src_content_get_computed_values_get_computed_values__WEBPACK_IMPORTED_MODULE_1__["getComputedFontSize"],
    getComputedLineHeight$ = src_content_get_computed_values_get_computed_values__WEBPACK_IMPORTED_MODULE_1__["getComputedLineHeight"],
    retrieveCSSStyleProperty$ = retrieveCSSStyleProperty
  } = {}
) {
  const computedValues = getComputedStyle$(element);

  saveKXData$(element, {
    fontSize: getComputedFontSize$(computedValues),
    lineHeight: getComputedLineHeight$(computedValues),
    fontSizeStyle: retrieveCSSStyleProperty$(element, 'font-size'),
    lineHeightStyle: retrieveCSSStyleProperty$(element, 'line-height')
  });
}



/***/ }),

/***/ "./src/content/browser_detector.js":
/*!*****************************************!*\
  !*** ./src/content/browser_detector.js ***!
  \*****************************************/
/*! exports provided: getBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
const getBrowser = () => {
  const browser = {};

  // Firefox 1.0+
  browser.isFirefox = typeof InstallTrigger !== 'undefined';

  // Edge 20+
  const isIE = /*@cc_on!@*/  false || !!document.documentMode;

  browser.isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1+
  browser.isChrome = !!window.chrome;

  return browser;
};




/***/ }),

/***/ "./src/content/change-element-attributes/change-element-attributes.js":
/*!****************************************************************************!*\
  !*** ./src/content/change-element-attributes/change-element-attributes.js ***!
  \****************************************************************************/
/*! exports provided: changeFontSizeOfElement, changeLineHeightInPixelsOfElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFontSizeOfElement", function() { return changeFontSizeOfElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLineHeightInPixelsOfElement", function() { return changeLineHeightInPixelsOfElement; });
function changeFontSizeOfElement(element, fontSizeInPixels) {
  element.style.fontSize = null;
  element.style.cssText += `font-size: ${fontSizeInPixels}px !important`;
}


function changeLineHeightInPixelsOfElement(element, lineHeightInPixels) {
  element.style.lineHeight = null;
  element.style.cssText += `line-height: ${lineHeightInPixels}px !important`;
}



/***/ }),

/***/ "./src/content/components/blocklist-form.js":
/*!**************************************************!*\
  !*** ./src/content/components/blocklist-form.js ***!
  \**************************************************/
/*! exports provided: BlocklistForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocklistForm", function() { return BlocklistForm; });
/* harmony import */ var src_blocked_list_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/blocked-list-handler */ "./src/blocked-list-handler.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/serializer */ "./src/lib/serializer.js");





class BlocklistForm {
  constructor({ translate, blockList }) {
    const saveButton = tag__WEBPACK_IMPORTED_MODULE_1___default()('Button', {}, [translate('form_save')]);
    const textArea = tag__WEBPACK_IMPORTED_MODULE_1___default()('textarea', { id: 'blocklist', name: 'blocklist' }, [Object(lib_serializer__WEBPACK_IMPORTED_MODULE_2__["arrayToNewLineString"])(blockList)]);
    const blockListContainer = tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'container-with-defaults' }, [
      ...this.renderDefaultItems(),
      textArea
    ]);

    this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('form', { id: 'blocklist-form', encrypt: 'multipart/form-data' }, [
      tag__WEBPACK_IMPORTED_MODULE_1___default()('fieldset', {}, [
        tag__WEBPACK_IMPORTED_MODULE_1___default()('legend', {}, [translate('blocklist_form_title')]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'container' }, [blockListContainer, saveButton]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'container' }, [
          tag__WEBPACK_IMPORTED_MODULE_1___default()('p', [translate('blocklist_example_description')]),
          tag__WEBPACK_IMPORTED_MODULE_1___default()('p', { class: 'example' }, ['.pdf', tag__WEBPACK_IMPORTED_MODULE_1___default()('br'), 'sheets.domain.com', tag__WEBPACK_IMPORTED_MODULE_1___default()('br'), 'abc.de/news'])
        ])
      ])
    ]);

    this.children = { saveButton, textArea };
  }

  attachSubmitListener(listener) {
    this.$.addEventListener('submit', evt => {
      evt.preventDefault();
      listener(Object(lib_serializer__WEBPACK_IMPORTED_MODULE_2__["newLineStringToArray"])(this.children.textArea.value));
    });
  }

  renderDefaultItems() {
    const items = [];

    src_blocked_list_handler__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BLOCK_LIST"].forEach(item => {
      items.push(tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'readonly' }, item));
    });

    return items;
  }

  render() {
    return this.$;
  }
}



/***/ }),

/***/ "./src/content/components/content-deselector-form.js":
/*!***********************************************************!*\
  !*** ./src/content/components/content-deselector-form.js ***!
  \***********************************************************/
/*! exports provided: ContentDeselectorForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDeselectorForm", function() { return ContentDeselectorForm; });
/* harmony import */ var src_content_with_default_content_deselectors_with_default_content_deselectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/with-default-content-deselectors/with-default-content-deselectors */ "./src/content/with-default-content-deselectors/with-default-content-deselectors.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/serializer */ "./src/lib/serializer.js");





class ContentDeselectorForm {
  constructor({ translate, contentDeselector }) {
    const textArea = tag__WEBPACK_IMPORTED_MODULE_1___default()('textarea', { id: 'content-deselector', name: 'content-deselector' }, [
      Object(lib_serializer__WEBPACK_IMPORTED_MODULE_2__["arrayToNewLineString"])(contentDeselector)
    ]);
    const saveButton = tag__WEBPACK_IMPORTED_MODULE_1___default()('Button', {}, [translate('form_save')]);
    const defaultItems = src_content_with_default_content_deselectors_with_default_content_deselectors__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CONTENT_DESELECTORS"].reduce((acc, item) => {
      acc.push(tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'readonly' }, item));

      return acc;
    }, []);

    this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('form', { id: 'content-deselector-form', encrypt: 'multipart/form-data' }, [
      tag__WEBPACK_IMPORTED_MODULE_1___default()('fieldset', {}, [
        tag__WEBPACK_IMPORTED_MODULE_1___default()('legend', {}, [translate('content_deselector_form_title')]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'container' }, [
          tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'container-with-defaults' }, [...defaultItems, textArea]),
          saveButton
        ]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'container' }, [
          tag__WEBPACK_IMPORTED_MODULE_1___default()('p', [translate('content_deselector_example_description')]),
          tag__WEBPACK_IMPORTED_MODULE_1___default()('p', { class: 'example' }, ['div.wrapper p', tag__WEBPACK_IMPORTED_MODULE_1___default()('br'), '.container div p'])
        ])
      ])
    ]);

    this.children = { saveButton, textArea };
  }

  attachSubmitListener(listener) {
    this.$.addEventListener('submit', evt => {
      evt.preventDefault();
      listener(Object(lib_serializer__WEBPACK_IMPORTED_MODULE_2__["newLineStringToArray"])(this.children.textArea.value));
    });
  }

  render() {
    return this.$;
  }
}



/***/ }),

/***/ "./src/content/components/deactivate-button.js":
/*!*****************************************************!*\
  !*** ./src/content/components/deactivate-button.js ***!
  \*****************************************************/
/*! exports provided: DeactivateButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateButton", function() { return DeactivateButton; });
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var feather_icon_literals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feather-icon-literals */ "./node_modules/feather-icon-literals/lib/icons.js");



function DeactivateButton({ translate }) {
  return tag__WEBPACK_IMPORTED_MODULE_0___default()(
    'span',
    {
      class: 'deactivate-btn',
      title: translate('scale_close_tooltip')
    },
    [Object(feather_icon_literals__WEBPACK_IMPORTED_MODULE_1__["XCircle"])({ title: translate('scale_close_tooltip') })]
  );
}



/***/ }),

/***/ "./src/content/components/decrease-size-button.js":
/*!********************************************************!*\
  !*** ./src/content/components/decrease-size-button.js ***!
  \********************************************************/
/*! exports provided: DecreaseSizeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecreaseSizeButton", function() { return DecreaseSizeButton; });
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_0__);


function DecreaseSizeButton({ translate }) {
  return tag__WEBPACK_IMPORTED_MODULE_0___default()(
    'button',
    {
      class: 'scale-btn scale-down-btn',
      'aria-label': translate('scale_down_tooltip'),
      title: translate('scale_down_tooltip')
    },
    [tag__WEBPACK_IMPORTED_MODULE_0___default()('span', translate('scale_down_text'))]
  );
}



/***/ }),

/***/ "./src/content/components/design-toggle.js":
/*!*************************************************!*\
  !*** ./src/content/components/design-toggle.js ***!
  \*************************************************/
/*! exports provided: DesignToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignToggle", function() { return DesignToggle; });
/* harmony import */ var src_content_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/components */ "./src/content/components/index.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);



class DesignToggle {
  constructor({
    translate,
    fullDesignPreviewURL,
    compactDesignPreviewURL,
    noneDesignPreviewURL,
    value: initialDesign = 'full',
    onChange = () => {}
  }) {
    const commonAttributes = {
      type: 'radio',
      name: 'design-toggle'
    };

    const fullDesignAttributes = { value: 'full', ...commonAttributes };
    const compactDesignAttributes = { value: 'compact', ...commonAttributes };
    const noneDesignAttributes = { value: 'none', ...commonAttributes };

    switch (initialDesign) {
    case 'full':
      fullDesignAttributes.checked = 'checked';
      break;
    case 'compact':
      compactDesignAttributes.checked = 'checked';
      break;
    case 'none':
      noneDesignAttributes.checked = 'checked';
      break;
    }

    const fullDesignInput = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', fullDesignAttributes, []);
    const compactDesignInput = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', compactDesignAttributes, []);
    const noneDesignInput = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', noneDesignAttributes, []);

    fullDesignInput.addEventListener('change', onChange.bind(this));
    compactDesignInput.addEventListener('change', onChange.bind(this));
    noneDesignInput.addEventListener('change', onChange.bind(this));

    this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('fieldset', [
      Object(src_content_components__WEBPACK_IMPORTED_MODULE_0__["Legend"])(translate('setting_design_title')),
      tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'design-setting' }, [
        tag__WEBPACK_IMPORTED_MODULE_1___default()('label', {}, [
          tag__WEBPACK_IMPORTED_MODULE_1___default()('img', { src: fullDesignPreviewURL, title: translate('settings_full_design_name') }, []),
          fullDesignInput
        ]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('label', {}, [
          tag__WEBPACK_IMPORTED_MODULE_1___default()('img', { src: compactDesignPreviewURL, title: translate('settings_compact_design_name') }, []),
          compactDesignInput
        ]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('label', {}, [
          tag__WEBPACK_IMPORTED_MODULE_1___default()('img', { src: noneDesignPreviewURL }, []),
          tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { title: translate('settings_none_design_name') }, translate('settings_none_design_hint')),
          noneDesignInput
        ])
      ])
    ]);
  }

  render() {
    return this.$;
  }
}




/***/ }),

/***/ "./src/content/components/increase-size-button.js":
/*!********************************************************!*\
  !*** ./src/content/components/increase-size-button.js ***!
  \********************************************************/
/*! exports provided: IncreaseSizeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncreaseSizeButton", function() { return IncreaseSizeButton; });
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_0__);


function IncreaseSizeButton({ translate }) {
  return tag__WEBPACK_IMPORTED_MODULE_0___default()(
    'button',
    {
      class: 'scale-btn scale-up-btn',
      'aria-label': translate('scale_up_tooltip'),
      title: translate('scale_up_tooltip')
    },
    [tag__WEBPACK_IMPORTED_MODULE_0___default()('span', translate('scale_up_text'))]
  );
}



/***/ }),

/***/ "./src/content/components/index.js":
/*!*****************************************!*\
  !*** ./src/content/components/index.js ***!
  \*****************************************/
/*! exports provided: BlocklistForm, ContentDeselectorForm, DeactivateButton, DecreaseSizeButton, DesignToggle, IncreaseSizeButton, InstallExtensionSection, Legend, LinkedLogo, LinkedLogoByTarget, LinkedLogoOrNull, OpenOptionsPageSection, PermissionForm, PositionToggle, ResetSizeButton, ScaleRangeSlider, Settings, StyleInput, ToggleButton, ToggleIcon, ToggleSettingsButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocklist_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocklist-form */ "./src/content/components/blocklist-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlocklistForm", function() { return _blocklist_form__WEBPACK_IMPORTED_MODULE_0__["BlocklistForm"]; });

/* harmony import */ var _content_deselector_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-deselector-form */ "./src/content/components/content-deselector-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentDeselectorForm", function() { return _content_deselector_form__WEBPACK_IMPORTED_MODULE_1__["ContentDeselectorForm"]; });

/* harmony import */ var _deactivate_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deactivate-button */ "./src/content/components/deactivate-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeactivateButton", function() { return _deactivate_button__WEBPACK_IMPORTED_MODULE_2__["DeactivateButton"]; });

/* harmony import */ var _decrease_size_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decrease-size-button */ "./src/content/components/decrease-size-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecreaseSizeButton", function() { return _decrease_size_button__WEBPACK_IMPORTED_MODULE_3__["DecreaseSizeButton"]; });

/* harmony import */ var _design_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./design-toggle */ "./src/content/components/design-toggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesignToggle", function() { return _design_toggle__WEBPACK_IMPORTED_MODULE_4__["DesignToggle"]; });

/* harmony import */ var _increase_size_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./increase-size-button */ "./src/content/components/increase-size-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncreaseSizeButton", function() { return _increase_size_button__WEBPACK_IMPORTED_MODULE_5__["IncreaseSizeButton"]; });

/* harmony import */ var _install_extension_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./install-extension-section */ "./src/content/components/install-extension-section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstallExtensionSection", function() { return _install_extension_section__WEBPACK_IMPORTED_MODULE_6__["InstallExtensionSection"]; });

/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./legend */ "./src/content/components/legend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return _legend__WEBPACK_IMPORTED_MODULE_7__["Legend"]; });

/* harmony import */ var _linked_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./linked-logo */ "./src/content/components/linked-logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedLogo", function() { return _linked_logo__WEBPACK_IMPORTED_MODULE_8__["LinkedLogo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedLogoByTarget", function() { return _linked_logo__WEBPACK_IMPORTED_MODULE_8__["LinkedLogoByTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedLogoOrNull", function() { return _linked_logo__WEBPACK_IMPORTED_MODULE_8__["LinkedLogoOrNull"]; });

/* harmony import */ var _open_options_page_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-options-page-section */ "./src/content/components/open-options-page-section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenOptionsPageSection", function() { return _open_options_page_section__WEBPACK_IMPORTED_MODULE_9__["OpenOptionsPageSection"]; });

/* harmony import */ var _permission_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./permission-form */ "./src/content/components/permission-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionForm", function() { return _permission_form__WEBPACK_IMPORTED_MODULE_10__["PermissionForm"]; });

/* harmony import */ var _position_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./position-toggle */ "./src/content/components/position-toggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositionToggle", function() { return _position_toggle__WEBPACK_IMPORTED_MODULE_11__["PositionToggle"]; });

/* harmony import */ var _reset_size_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reset-size-button */ "./src/content/components/reset-size-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetSizeButton", function() { return _reset_size_button__WEBPACK_IMPORTED_MODULE_12__["ResetSizeButton"]; });

/* harmony import */ var _scale_range_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scale-range-slider */ "./src/content/components/scale-range-slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleRangeSlider", function() { return _scale_range_slider__WEBPACK_IMPORTED_MODULE_13__["ScaleRangeSlider"]; });

/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings */ "./src/content/components/settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _settings__WEBPACK_IMPORTED_MODULE_14__["Settings"]; });

/* harmony import */ var _style_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style-input */ "./src/content/components/style-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleInput", function() { return _style_input__WEBPACK_IMPORTED_MODULE_15__["StyleInput"]; });

/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./toggle-button */ "./src/content/components/toggle-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return _toggle_button__WEBPACK_IMPORTED_MODULE_16__["ToggleButton"]; });

/* harmony import */ var _toggle_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./toggle-icon */ "./src/content/components/toggle-icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleIcon", function() { return _toggle_icon__WEBPACK_IMPORTED_MODULE_17__["ToggleIcon"]; });

/* harmony import */ var _toggle_settings_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./toggle-settings-button */ "./src/content/components/toggle-settings-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleSettingsButton", function() { return _toggle_settings_button__WEBPACK_IMPORTED_MODULE_18__["ToggleSettingsButton"]; });






















/***/ }),

/***/ "./src/content/components/install-extension-section.js":
/*!*************************************************************!*\
  !*** ./src/content/components/install-extension-section.js ***!
  \*************************************************************/
/*! exports provided: InstallExtensionSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallExtensionSection", function() { return InstallExtensionSection; });
/* harmony import */ var _browser_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser_detector */ "./src/content/browser_detector.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_target_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/target-platform */ "./src/lib/target-platform.js");




const CHROME_EXTENSION_URL =
  'https://chrome.google.com/webstore/detail/kcebcpmpalcalchafgbhehjblldcakjb/?utm_source=zoom_wp&utm_medium=widget&utm_campaign=chrome-store';

class InstallExtensionSection {
  constructor({ translate, targetPlatform, browserDetector = _browser_detector__WEBPACK_IMPORTED_MODULE_0__["getBrowser"] }) {
    this.$ = '';

    if (targetPlatform === lib_target_platform__WEBPACK_IMPORTED_MODULE_2__["TargetPlatform"].WORDPRESS) {
      const content = [];

      const installUrl = this.getInstallURL(browserDetector);

      if (installUrl) {
        const installExtensionLink = tag__WEBPACK_IMPORTED_MODULE_1___default()('a', { target: '_blank', href: installUrl }, [
          translate('settings_footer_install_extension_link')
        ]);

        content.push(installExtensionLink);
      }

      this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('section', {}, content);
    }
  }

  getInstallURL(browserDetector) {
    const browser = browserDetector();

    if (browser.isChrome) return CHROME_EXTENSION_URL;

    return null;
  }

  render() {
    return this.$;
  }
}




/***/ }),

/***/ "./src/content/components/legend.js":
/*!******************************************!*\
  !*** ./src/content/components/legend.js ***!
  \******************************************/
/*! exports provided: Legend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_0__);


const Legend = text => tag__WEBPACK_IMPORTED_MODULE_0___default()('legend', {}, [text]);




/***/ }),

/***/ "./src/content/components/linked-logo.js":
/*!***********************************************!*\
  !*** ./src/content/components/linked-logo.js ***!
  \***********************************************/
/*! exports provided: LinkedLogo, LinkedLogoOrNull, LinkedLogoByTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedLogo", function() { return LinkedLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedLogoOrNull", function() { return LinkedLogoOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedLogoByTarget", function() { return LinkedLogoByTarget; });
/* harmony import */ var src_lib_is_empty_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/is_empty_string */ "./src/lib/is_empty_string.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_target_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/target-platform */ "./src/lib/target-platform.js");




const LinkedLogo = ({ logoURL, linkTarget, logoTitle }) => {
  return tag__WEBPACK_IMPORTED_MODULE_1___default()('a', { href: linkTarget, target: '_blank', class: 'linked-logo' }, [
    tag__WEBPACK_IMPORTED_MODULE_1___default()('img', { src: logoURL, title: logoTitle })
  ]);
};


const LinkedLogoOrNull = ({ linkTarget, logoTitle, logoURL }) => {
  if (Object(src_lib_is_empty_string__WEBPACK_IMPORTED_MODULE_0__["isEmptyString"])(logoURL)) {
    return null;
  }

  return LinkedLogo({ logoURL, logoTitle, linkTarget: linkTarget });
};


const LinkedLogoByTarget = ({ targetPlatformId, logoTitle, logoURL }) => {
  const links = {
    [lib_target_platform__WEBPACK_IMPORTED_MODULE_2__["TargetPlatform"].CHROME.id]:
      'https://abilitools.com/tools/zoom-premium-ext/?utm_source=zoom_extension&utm_medium=widget&utm_campaign=zoom_popup',
    [lib_target_platform__WEBPACK_IMPORTED_MODULE_2__["TargetPlatform"].WORDPRESS.id]:
      'https://abilitools.com/tools/zoom-premium-ext/?utm_source=zoom_wp&utm_medium=widget&utm_campaign=zoom_popup'
  };
  const defaultURL = 'https://abilitools.com/tools/zoom-premium-ext';

  const url = links[targetPlatformId] || defaultURL;

  return LinkedLogo({ logoTitle, logoURL, linkTarget: url });
};




/***/ }),

/***/ "./src/content/components/open-options-page-section.js":
/*!*************************************************************!*\
  !*** ./src/content/components/open-options-page-section.js ***!
  \*************************************************************/
/*! exports provided: OpenOptionsPageSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenOptionsPageSection", function() { return OpenOptionsPageSection; });
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_target_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/target-platform */ "./src/lib/target-platform.js");



class OpenOptionsPageSection {
  constructor({ translate, targetPlatform, onClick = () => {} }) {
    this.$ = '';

    if (targetPlatform === lib_target_platform__WEBPACK_IMPORTED_MODULE_1__["TargetPlatform"].CHROME) {
      const optionsLink = tag__WEBPACK_IMPORTED_MODULE_0___default()('a', { title: translate('settings_footer_open_options') }, [
        translate('settings_footer_open_options'),
        this.openInNewTabIcon()
      ]);

      optionsLink.addEventListener('click', onClick.bind(this));

      this.$ = tag__WEBPACK_IMPORTED_MODULE_0___default()('section', {}, [optionsLink]);
    }
  }

  openInNewTabIcon() {
    const openInNewTabIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    openInNewTabIcon.setAttribute('viewBox', '0 0 24 24');
    openInNewTabIcon.setAttribute('width', '24px');
    openInNewTabIcon.setAttribute('height', '24px');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute(
      'd',
      `M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 
    L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 
    L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 
    L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z`
    );

    openInNewTabIcon.appendChild(path);

    return tag__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: 'open-in-new-tab-icon' }, [openInNewTabIcon]);
  }

  render() {
    return this.$;
  }
}



/***/ }),

/***/ "./src/content/components/permission-form.js":
/*!***************************************************!*\
  !*** ./src/content/components/permission-form.js ***!
  \***************************************************/
/*! exports provided: PermissionForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionForm", function() { return PermissionForm; });
/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legend */ "./src/content/components/legend.js");
/* harmony import */ var images_extension_preview_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/extension_preview.gif */ "./src/images/extension_preview.gif");
/* harmony import */ var images_extension_preview_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(images_extension_preview_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_2__);




function PermissionButton({ translate }) {
  return tag__WEBPACK_IMPORTED_MODULE_2___default()('button', { class: 'request-permission' }, [translate('permission_form_request_button')]);
}

class PermissionForm {
  constructor({ translate }) {
    const permissionButton = PermissionButton({ translate });

    this.$ = tag__WEBPACK_IMPORTED_MODULE_2___default()('form', {}, [
      tag__WEBPACK_IMPORTED_MODULE_2___default()('fieldset', {}, [
        Object(_legend__WEBPACK_IMPORTED_MODULE_0__["Legend"])(translate('permission_form_title')),
        tag__WEBPACK_IMPORTED_MODULE_2___default()('p', {}, [translate('permission_form_explanation')]),
        tag__WEBPACK_IMPORTED_MODULE_2___default()('p', { class: 'popup-permission' }, [translate('permission_popup_text')]),
        tag__WEBPACK_IMPORTED_MODULE_2___default()('p', {}, [translate('permission_popup_text_explanation')]),
        permissionButton
      ]),
      tag__WEBPACK_IMPORTED_MODULE_2___default()('div', { class: 'preview-container' }, [
        tag__WEBPACK_IMPORTED_MODULE_2___default()('p', {}, [translate('permission_widget_preview_text')]),
        tag__WEBPACK_IMPORTED_MODULE_2___default()('img', { src: images_extension_preview_gif__WEBPACK_IMPORTED_MODULE_1___default.a, alt: translate('permission_widget_preview_text') }, [])
      ])
    ]);

    this.children = { permissionButton };
  }

  render() {
    return this.$;
  }
}




/***/ }),

/***/ "./src/content/components/position-toggle.js":
/*!***************************************************!*\
  !*** ./src/content/components/position-toggle.js ***!
  \***************************************************/
/*! exports provided: PositionToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionToggle", function() { return PositionToggle; });
/* harmony import */ var src_content_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/components */ "./src/content/components/index.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);



class PositionToggle {
  constructor({ translate, value: initialPosition = 'top-left', onChange = () => {} }) {
    const commonAttributes = {
      type: 'radio',
      name: 'position-toggle'
    };

    const positions = ['top-left', 'center-left', 'bottom-left'];

    const inputs = positions.flatMap(position => {
      const labelText = translate(`settings_position_${position.replace('-', '_')}_name`);
      const attributes = {
        value: position,
        id: position,
        ...commonAttributes,
        class: `position-setting-${position}`,
        title: labelText
      };

      if (position === initialPosition) {
        attributes.checked = true;
      }

      const input = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', attributes);

      input.addEventListener('change', onChange.bind(this));

      const label = tag__WEBPACK_IMPORTED_MODULE_1___default()('label', { for: attributes.id, class: `position-setting-${position}-label` }, labelText);

      return [input, label];
    });

    this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('fieldset', [
      Object(src_content_components__WEBPACK_IMPORTED_MODULE_0__["Legend"])(translate('setting_position_title')),
      tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'position-setting' }, inputs)
    ]);

    this.children = {
      inputs
    };
  }

  uncheckAll() {
    this.children.inputs.forEach(input => input.checked = false);
  }

  render() {
    return this.$;
  }
}




/***/ }),

/***/ "./src/content/components/reset-size-button.js":
/*!*****************************************************!*\
  !*** ./src/content/components/reset-size-button.js ***!
  \*****************************************************/
/*! exports provided: ResetSizeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetSizeButton", function() { return ResetSizeButton; });
/* harmony import */ var feather_icon_literals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feather-icon-literals */ "./node_modules/feather-icon-literals/lib/icons.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);



function ResetSizeButton({ translate }) {
  return tag__WEBPACK_IMPORTED_MODULE_1___default()(
    'button',
    {
      class: 'reset-btn',
      'aria-label': translate('scale_reset_tooltip'),
      title: translate('scale_reset_tooltip')
    },
    [Object(feather_icon_literals__WEBPACK_IMPORTED_MODULE_0__["RotateCw"])(), tag__WEBPACK_IMPORTED_MODULE_1___default()('span', translate('scale_reset_text'))]
  );
}



/***/ }),

/***/ "./src/content/components/scale-range-slider.js":
/*!******************************************************!*\
  !*** ./src/content/components/scale-range-slider.js ***!
  \******************************************************/
/*! exports provided: ScaleRangeSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleRangeSlider", function() { return ScaleRangeSlider; });
/* harmony import */ var rangeslider_pure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rangeslider-pure */ "./node_modules/rangeslider-pure/dist/range-slider.js");
/* harmony import */ var rangeslider_pure__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rangeslider_pure__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);



function initializeRangeSlider({ slider, root, onSlide }) {
  rangeslider_pure__WEBPACK_IMPORTED_MODULE_0___default.a.create(slider, {
    vertical: true,
    root,
    rangeClass: 'slider',
    fillClass: 'slider-track',
    handleClass: 'slider-thumb',
    bufferClass: 'slider-buffer',
    onSlide: value => onSlide.forEach(callback => callback(value))
  });
}

class ScaleRangeSlider {
  constructor({ translate, minScaleFactor, maxScaleFactor }) {
    this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', {
      'aria-label': translate('scale_slider_tooltip'),
      title: translate('scale_slider_tooltip'),
      type: 'range',
      max: maxScaleFactor,
      min: minScaleFactor,
      step: 0.01
    });

    this.onSlideCallbacks = [];
    this.initialized = false;
    this.value = null;
  }

  render() {
    return this.$;
  }

  onSlide(callback) {
    this.onSlideCallbacks.push(callback);
  }

  initializeRangeSlider({ root }) {
    this.onSlide(value => this.value = value);

    initializeRangeSlider({
      slider: this.render(),
      root,
      onSlide: this.onSlideCallbacks
    });

    this.initialized = true;
  }

  updateRangeSlider(value) {
    if (this.initialized) {
      const triggerEvents = false;

      this.$.rangeSlider.update({ value }, triggerEvents);
      this.value = value;
    }
  }

  refresh() {
    this.updateRangeSlider(this.value);
  }
}



/***/ }),

/***/ "./src/content/components/settings.js":
/*!********************************************!*\
  !*** ./src/content/components/settings.js ***!
  \********************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_content_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/content/components */ "./src/content/components/index.js");




class Settings {
  constructor({
    translate,
    getTargetPlatform,
    abiliFullLogo,
    settings,
    fullDesignPreviewURL,
    compactDesignPreviewURL,
    noneDesignPreviewURL,
    getOpenOptionsPageCallback = () => null
  }) {
    this.value = settings;

    const targetPlatform = getTargetPlatform();

    const { design, position, mainColor, accentColor, opacity } = settings;

    const designToggleComponent = new src_content_components__WEBPACK_IMPORTED_MODULE_1__["DesignToggle"]({
      translate,
      fullDesignPreviewURL,
      compactDesignPreviewURL,
      noneDesignPreviewURL,
      value: design,
      onChange: evt => {
        this.value['design'] = evt.target.value;
        this.onSettingsChangeCallbacks.forEach(cb => cb(this.value, { designChanged: true }));
      }
    });

    const positionToggleComponent = new src_content_components__WEBPACK_IMPORTED_MODULE_1__["PositionToggle"]({
      translate,
      value: position,
      onChange: evt => {
        this.value['position'] = evt.target.value;
        this.onSettingsChangeCallbacks.forEach(cb => cb(this.value, { positionChanged: true }));
      }
    });

    const styleInputComponent = new src_content_components__WEBPACK_IMPORTED_MODULE_1__["StyleInput"]({
      translate,
      initial: {
        mainColor,
        accentColor,
        opacity
      },
      onChange: {
        mainColor: color => {
          this.value['mainColor'] = color;
          this.onSettingsChangeCallbacks.forEach(cb => cb(this.value, { mainColorChanged: true }));
        },
        accentColor: color => {
          this.value['accentColor'] = color;
          this.onSettingsChangeCallbacks.forEach(cb => cb(this.value, { accentColorChanged: true }));
        },
        opacity: value => {
          this.value['opacity'] = value;
          this.onSettingsChangeCallbacks.forEach(cb => cb(this.value, { opacityChanged: true }));
        }
      },
      afterChange: {
        opacity: value => {
          this.value['opacity'] = value;
          this.onSettingsChangeCallbacks.forEach(cb =>
            cb(this.value, { opacityChanged: true, opacityLastChange: true })
          );
        }
      }
    });

    const installExtensionSection = new src_content_components__WEBPACK_IMPORTED_MODULE_1__["InstallExtensionSection"]({
      translate,
      targetPlatform
    });

    const optionsLink = new src_content_components__WEBPACK_IMPORTED_MODULE_1__["OpenOptionsPageSection"]({
      translate,
      targetPlatform,
      onClick: () => {
        const openOptionsPageCallback = getOpenOptionsPageCallback();

        openOptionsPageCallback.call();
      }
    });

    this.$ = tag__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: 'widget-settings' }, [
      tag__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: 'widget-settings-inner-container' }, [
        designToggleComponent.render(),
        positionToggleComponent.render(),
        styleInputComponent.render()
      ]),
      tag__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: 'widget-settings-footer' }, [
        installExtensionSection.render(),
        optionsLink.render(),
        tag__WEBPACK_IMPORTED_MODULE_0___default()('section', {}, [
          Object(src_content_components__WEBPACK_IMPORTED_MODULE_1__["LinkedLogoByTarget"])({
            targetPlatformId: targetPlatform.id,
            logoURL: abiliFullLogo,
            logoTitle: translate('settings_footer_full_logo_hint')
          })
        ])
      ])
    ]);

    this.children = {
      positionToggleComponent,
      styleInputComponent
    };

    this.onSettingsChangeCallbacks = [];
  }

  openSettings() {
    this.$.classList.add('open');
  }

  closeSettings() {
    this.$.classList.remove('open');
  }

  toggleSettings() {
    this.$.classList.toggle('open');
  }

  onSettingsChange(callback) {
    this.onSettingsChangeCallbacks.push(callback);
  }

  render() {
    return this.$;
  }
}




/***/ }),

/***/ "./src/content/components/style-input.js":
/*!***********************************************!*\
  !*** ./src/content/components/style-input.js ***!
  \***********************************************/
/*! exports provided: StyleInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleInput", function() { return StyleInput; });
/* harmony import */ var src_content_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/components */ "./src/content/components/index.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);



class StyleInput {
  constructor({
    translate: t,
    initial: { mainColor, accentColor, opacity },
    onChange: { mainColor: mainColorChangeHandle, accentColor: accentColorChangeHandle, opacity: opacityChangeHandle },
    afterChange: { opacity: opacityAfterChangeHandle }
  }) {
    const mainColorInput = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', { type: 'color' });
    const accentColorInput = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', { type: 'color' });
    const opacityInput = tag__WEBPACK_IMPORTED_MODULE_1___default()('input', { type: 'range', min: 0.1, max: 1, step: 0.01 });
    const inputs = [mainColorInput, accentColorInput, opacityInput];

    this.children = {
      mainColorInput,
      accentColorInput,
      opacityInput
    };

    this.changeStyle({ mainColor, accentColor, opacity });

    inputs.forEach(input => input.addEventListener('mousedown', evt => evt.stopPropagation()));

    mainColorInput.addEventListener('input', ({ target: { value } }) => mainColorChangeHandle(value));
    accentColorInput.addEventListener('input', ({ target: { value } }) => accentColorChangeHandle(value));
    opacityInput.addEventListener('input', ({ target: { value } }) => opacityChangeHandle(value));

    opacityInput.addEventListener('change', ({ target: { value } }) => opacityAfterChangeHandle(value));

    this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('fieldset', [
      Object(src_content_components__WEBPACK_IMPORTED_MODULE_0__["Legend"])(t('setting_style_title')),
      tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'style-setting' }, [
        tag__WEBPACK_IMPORTED_MODULE_1___default()('label', {}, [tag__WEBPACK_IMPORTED_MODULE_1___default()('div', {}, t('settings_style_background')), mainColorInput]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('label', {}, [tag__WEBPACK_IMPORTED_MODULE_1___default()('div', {}, t('settings_style_accent')), accentColorInput]),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('label', {}, [tag__WEBPACK_IMPORTED_MODULE_1___default()('div', {}, t('settings_style_opacity')), opacityInput])
      ])
    ]);
  }

  render() {
    return this.$;
  }

  changeStyle({ mainColor, accentColor, opacity }) {
    if (mainColor) this.children.mainColorInput.value = mainColor;
    if (accentColor) this.children.accentColorInput.value = accentColor;
    if (opacity) this.children.opacityInput.value = opacity;
  }
}




/***/ }),

/***/ "./src/content/components/toggle-button.js":
/*!*************************************************!*\
  !*** ./src/content/components/toggle-button.js ***!
  \*************************************************/
/*! exports provided: ToggleButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return ToggleButton; });
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toggle_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-icon */ "./src/content/components/toggle-icon.js");



class ToggleButton {
  constructor({ translate }) {
    this.translate = translate;

    this.$ = tag__WEBPACK_IMPORTED_MODULE_0___default()('span', { class: 'toggle-btn', title: translate('widget_closed_toggle_title') }, [Object(_toggle_icon__WEBPACK_IMPORTED_MODULE_1__["ToggleIcon"])()]);
  }

  render() {
    return this.$;
  }

  onClick(callback) {
    this.$.addEventListener('click', callback);
  }

  setTitle(key) {
    this.$.setAttribute('title', this.translate(key));
  }

  setTitleOpen() {
    this.setTitle('widget_opened_toggle_title');
  }
  setTitleClose() {
    this.setTitle('widget_closed_toggle_title');
  }
}



/***/ }),

/***/ "./src/content/components/toggle-icon.js":
/*!***********************************************!*\
  !*** ./src/content/components/toggle-icon.js ***!
  \***********************************************/
/*! exports provided: ToggleIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleIcon", function() { return ToggleIcon; });
function ToggleIcon() {
  return `
    <svg width="18" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="9" y1="1" x2="12" y2="19" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="12" y1="19" x2="9" y2="37" stroke-width="1.5" stroke-linecap="round"/>

      <line x1="8" y1="19" x2="5" y2="1" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="5" y1="37" x2="8" y2="19" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    `;
}



/***/ }),

/***/ "./src/content/components/toggle-settings-button.js":
/*!**********************************************************!*\
  !*** ./src/content/components/toggle-settings-button.js ***!
  \**********************************************************/
/*! exports provided: ToggleSettingsButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSettingsButton", function() { return ToggleSettingsButton; });
/* harmony import */ var feather_icon_literals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feather-icon-literals */ "./node_modules/feather-icon-literals/lib/icons.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);



function ToggleSettingsButton({ translate }) {
  return tag__WEBPACK_IMPORTED_MODULE_1___default()(
    'button',
    {
      class: 'settings-btn',
      'aria-label': translate('toggle_settings_tooltip'),
      title: translate('toggle_settings_tooltip')
    },
    [Object(feather_icon_literals__WEBPACK_IMPORTED_MODULE_0__["Settings"])({ title: translate('toggle_settings_tooltip') })]
  );
}




/***/ }),

/***/ "./src/content/find-content/find-content.js":
/*!**************************************************!*\
  !*** ./src/content/find-content/find-content.js ***!
  \**************************************************/
/*! exports provided: findContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findContent", function() { return findContent; });
function isTextNode(node) {
  return node.nodeType === document.TEXT_NODE;
}
function nodeToChildList(node) {
  if (isTextNode(node)) return [node];

  return Array.from(node.childNodes);
}

function childListHasParent([firstChildNode]) {
  return firstChildNode.parentNode !== null;
}
function childListToParentNode([firstChildNode]) {
  return firstChildNode.parentNode;
}

function isNotWhitespaceOnly(node) {
  return node.textContent.trim().length !== 0;
}
function childListContainsNonEmptyTextNodes(nodeList) {
  return nodeList.filter(isTextNode).filter(isNotWhitespaceOnly).length !== 0;
}

function parentHasAdjustableStyle(node) {
  return node.style !== undefined;
}

function findContent(content) {
  const childLists = Array.from(content).map(nodeToChildList);
  const childListsWithValidTextNodes = childLists.filter(childListContainsNonEmptyTextNodes);
  const parentsWithValidTextNodes = childListsWithValidTextNodes.filter(childListHasParent).map(childListToParentNode);
  const adjustableParents = parentsWithValidTextNodes.filter(parentHasAdjustableStyle);

  return adjustableParents.reverse();
}



/***/ }),

/***/ "./src/content/get-computed-values/get-computed-values.js":
/*!****************************************************************!*\
  !*** ./src/content/get-computed-values/get-computed-values.js ***!
  \****************************************************************/
/*! exports provided: getComputedFontSize, getComputedLineHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedFontSize", function() { return getComputedFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedLineHeight", function() { return getComputedLineHeight; });
function getComputedFontSize(computedStyles) {
  const fontSizeString = computedStyles.fontSize.replace('px', '');

  return parseFloat(fontSizeString);
}


function getComputedLineHeight(computedStyles) {
  const computedLineHeight = computedStyles.lineHeight;

  if (!computedLineHeight.includes('px')) return false;

  return parseFloat(computedLineHeight.replace('px', ''));
}



/***/ }),

/***/ "./src/content/handle-content-mutations/handle-content-mutations.js":
/*!**************************************************************************!*\
  !*** ./src/content/handle-content-mutations/handle-content-mutations.js ***!
  \**************************************************************************/
/*! exports provided: handleContentMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleContentMutation", function() { return handleContentMutation; });
/* harmony import */ var src_content_backup_original_text_attributes_backup_original_text_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/backup-original-text-attributes/backup-original-text-attributes */ "./src/content/backup-original-text-attributes/backup-original-text-attributes.js");
/* harmony import */ var src_content_find_content_find_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/content/find-content/find-content */ "./src/content/find-content/find-content.js");
/* harmony import */ var src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/content/kx-data-storage/kx-data-storage */ "./src/content/kx-data-storage/kx-data-storage.js");
/* harmony import */ var src_content_revert_original_text_attributes_revert_original_text_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/content/revert-original-text-attributes/revert-original-text-attributes */ "./src/content/revert-original-text-attributes/revert-original-text-attributes.js");
/* harmony import */ var src_content_scale_text_attributes_scale_text_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/content/scale-text-attributes/scale-text-attributes */ "./src/content/scale-text-attributes/scale-text-attributes.js");






function isElementNode(node) {
  return node.nodeType === window.Node.ELEMENT_NODE;
}

function traverseTreeToRoot(node) {
  if (!node.parentNode || node.parentNode === document) return [node];

  return [node, node.parentNode, ...traverseTreeToRoot(node.parentNode)];
}

function retrieveNodeWithChildren(node) {
  if (!isElementNode(node)) return node;

  return [node, ...node.querySelectorAll('*')];
}

async function handleContentMutation(
  content,
  scale,
  mutationList,
  {
    hasKXData$ = src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_2__["hasKXData"],
    revertOriginalTextAttributes$ = src_content_revert_original_text_attributes_revert_original_text_attributes__WEBPACK_IMPORTED_MODULE_3__["revertOriginalTextAttributes"],
    findContent$ = src_content_find_content_find_content__WEBPACK_IMPORTED_MODULE_1__["findContent"],
    backupOriginalTextAttributes$ = src_content_backup_original_text_attributes_backup_original_text_attributes__WEBPACK_IMPORTED_MODULE_0__["backupOriginalTextAttributes"],
    scaleTextAttributes$ = src_content_scale_text_attributes_scale_text_attributes__WEBPACK_IMPORTED_MODULE_4__["scaleTextAttributes"]
  } = {}
) {
  const addedNodes = mutationList.map(mutation => Array.from(mutation.addedNodes)).flat();
  const removedNodes = mutationList.map(mutation => Array.from(mutation.removedNodes)).flat();

  if (removedNodes.length !== 0) {
    content = content.filter(node => !removedNodes.includes(node));
  }

  if (addedNodes.length !== 0) {
    const changedTreeBranches = Array.from(
      new Set(
        addedNodes
          .map(traverseTreeToRoot)
          .flat()
          .filter(isElementNode)
      )
    );
    const scaledElements = changedTreeBranches.filter(hasKXData$);

    scaledElements.forEach(revertOriginalTextAttributes$);

    const newNodes = findContent$(addedNodes.map(retrieveNodeWithChildren).flat());

    content = [...newNodes, ...content];

    const scaledElementsInInnerOuterOrder = scaledElements.reverse();
    const changedTreeBranchContent = [...newNodes, ...scaledElementsInInnerOuterOrder];

    // DEV: Possible performance bottleneck
    newNodes.filter(node => !hasKXData$(node)).forEach(backupOriginalTextAttributes$);
    changedTreeBranchContent.forEach(element => scaleTextAttributes$(element, scale));
  }

  return content;
}



/***/ }),

/***/ "./src/content/kx-data-storage/kx-data-storage.js":
/*!********************************************************!*\
  !*** ./src/content/kx-data-storage/kx-data-storage.js ***!
  \********************************************************/
/*! exports provided: saveKXData, retrieveKXData, hasKXData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveKXData", function() { return saveKXData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveKXData", function() { return retrieveKXData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasKXData", function() { return hasKXData; });
function saveKXData(element, data) {
  element['kx-data'] = element['kx-data'] || {};
  Object.entries(data).forEach(([key, value]) => {
    element['kx-data'][key] = value;
  });
  element.setAttribute('data-kx-storage', JSON.stringify(element['kx-data']));
}


function retrieveKXData(element, key) {
  const data = element['kx-data'] || JSON.parse(element.getAttribute('data-kx-storage'));

  if (!data) return null;

  return key === undefined ? data : data[key];
}


const hasKXData = element => retrieveKXData(element) !== null;



/***/ }),

/***/ "./src/content/revert-original-text-attributes/revert-original-text-attributes.js":
/*!****************************************************************************************!*\
  !*** ./src/content/revert-original-text-attributes/revert-original-text-attributes.js ***!
  \****************************************************************************************/
/*! exports provided: revertOriginalTextAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revertOriginalTextAttributes", function() { return revertOriginalTextAttributes; });
/* harmony import */ var _backup_original_text_attributes_backup_original_text_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backup-original-text-attributes/backup-original-text-attributes */ "./src/content/backup-original-text-attributes/backup-original-text-attributes.js");
/* harmony import */ var src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/content/kx-data-storage/kx-data-storage */ "./src/content/kx-data-storage/kx-data-storage.js");




function revertOriginalTextAttributes(
  element,
  {
    hasKXData$ = src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_1__["hasKXData"],
    retrieveKXData$ = src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_1__["retrieveKXData"],
    backupOriginalTextAttributes$ = _backup_original_text_attributes_backup_original_text_attributes__WEBPACK_IMPORTED_MODULE_0__["backupOriginalTextAttributes"]
  } = {}
) {
  if (!hasKXData$(element)) return backupOriginalTextAttributes$(element);

  element.style.fontSize = null;

  const originalFontSizeProperty = retrieveKXData$(element, 'fontSizeStyle');

  if (originalFontSizeProperty) {
    element.style.cssText += originalFontSizeProperty;
  }

  element.style.lineHeight = null;

  const originalLineHeightProperty = retrieveKXData$(element, 'lineHeightStyle');

  if (originalLineHeightProperty) {
    element.style.cssText += originalLineHeightProperty;
  }
}



/***/ }),

/***/ "./src/content/runtime.js":
/*!********************************!*\
  !*** ./src/content/runtime.js ***!
  \********************************/
/*! exports provided: loadExtensionRuntime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExtensionRuntime", function() { return loadExtensionRuntime; });
/* harmony import */ var lib_serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/serializer */ "./src/lib/serializer.js");
/* harmony import */ var src_content_backup_original_text_attributes_backup_original_text_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/content/backup-original-text-attributes/backup-original-text-attributes */ "./src/content/backup-original-text-attributes/backup-original-text-attributes.js");
/* harmony import */ var src_lib_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/debounce */ "./src/lib/debounce.js");
/* harmony import */ var src_lib_default_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/default_to */ "./src/lib/default_to.js");
/* harmony import */ var src_content_find_content_find_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/content/find-content/find-content */ "./src/content/find-content/find-content.js");
/* harmony import */ var src_content_handle_content_mutations_handle_content_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/content/handle-content-mutations/handle-content-mutations */ "./src/content/handle-content-mutations/handle-content-mutations.js");
/* harmony import */ var src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/lib/is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var revert_original_text_attributes_revert_original_text_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! revert-original-text-attributes/revert-original-text-attributes */ "./src/content/revert-original-text-attributes/revert-original-text-attributes.js");
/* harmony import */ var src_content_scale_text_attributes_scale_text_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/content/scale-text-attributes/scale-text-attributes */ "./src/content/scale-text-attributes/scale-text-attributes.js");
/* harmony import */ var src_content_select_content_nodes_select_content_nodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/content/select-content-nodes/select-content-nodes */ "./src/content/select-content-nodes/select-content-nodes.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_lib_to_boolean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/lib/to_boolean */ "./src/lib/to_boolean.ts");
/* harmony import */ var src_lib_to_boolean__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_lib_to_boolean__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_content_widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/content/widget */ "./src/content/widget.js");
/* harmony import */ var src_content_with_default_content_deselectors_with_default_content_deselectors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/content/with-default-content-deselectors/with-default-content-deselectors.js */ "./src/content/with-default-content-deselectors/with-default-content-deselectors.js");
/* harmony import */ var src_symbols__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/symbols */ "./src/symbols.js");

















const loadExtensionRuntime = async ({
  getURLs,
  onEnvironmentMessage,
  connectToEnvironment,
  environmentStorageGet,
  environmentStorageSet,
  translate,
  getTargetPlatform
}) => {
  async function useScale(initialScale, initialCanScale, rootNode, contentSelectorQuery, contentDeselectorQuery) {
    let canScale, content;
    let savedScale = initialScale;

    const scaleAll = (elements, scale) => elements.forEach(element => Object(src_content_scale_text_attributes_scale_text_attributes__WEBPACK_IMPORTED_MODULE_8__["scaleTextAttributes"])(element, scale));

    const windowObserver = new MutationObserver(
      Object(src_lib_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(
        async mutationList => {
          content = await Object(src_content_handle_content_mutations_handle_content_mutations__WEBPACK_IMPORTED_MODULE_5__["handleContentMutation"])(content, savedScale, mutationList);
        },
        500,
        ([previousMutations = []], [nextMutations]) => [[...previousMutations, ...nextMutations]]
      )
    );

    function setCanScale(state = !canScale) {
      if (canScale === state) {
        return;
      }
      canScale = state;

      if (canScale) {
        content = Object(src_content_find_content_find_content__WEBPACK_IMPORTED_MODULE_4__["findContent"])(Object(src_content_select_content_nodes_select_content_nodes__WEBPACK_IMPORTED_MODULE_9__["selectContentNodes"])(rootNode, contentSelectorQuery, contentDeselectorQuery));
        content.forEach(revert_original_text_attributes_revert_original_text_attributes__WEBPACK_IMPORTED_MODULE_7__["revertOriginalTextAttributes"]);
        // DEV: Possible performance bottleneck
        content.forEach(src_content_backup_original_text_attributes_backup_original_text_attributes__WEBPACK_IMPORTED_MODULE_1__["backupOriginalTextAttributes"]);

        scaleAll(content, savedScale);
        windowObserver.observe(rootNode, { childList: true, subtree: true });
      } else if (content !== undefined) {
        windowObserver.disconnect();
        scaleAll(content, initialScale);
      }
    }

    const getCanScale = () => canScale;

    function setScale(newScale) {
      if (canScale) {
        savedScale = parseFloat(newScale);
        localStorage.setItem(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_TEXT_SCALE"], `${savedScale}`);
        scaleAll(content, savedScale);
      }

      return savedScale;
    }

    const getScale = () => savedScale;

    const storedCanScale = await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_STRICT_BLOCKLIST"]).then(data => {
      if (!data) return true;

      return !data.includes(window.location.href);
    });

    setCanScale(Object(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(storedCanScale) ? initialCanScale : Object(src_lib_to_boolean__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(storedCanScale));

    return [setScale, getScale, setCanScale, getCanScale];
  }

  const body = document.getElementsByTagName('body')[0];
  const contentSelectorQuery = '*';
  const contentDeselectorQuery = Object(lib_serializer__WEBPACK_IMPORTED_MODULE_0__["arrayToCommaStringOrUndefined"])(
    Object(src_content_with_default_content_deselectors_with_default_content_deselectors_js__WEBPACK_IMPORTED_MODULE_13__["withDefaultContentDeselectors"])(await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_CONTENT_DESELECTOR"]))
  );
  const [setScale, getScale, setCanScale, getCanScale] = await useScale(
    1,
    true,
    body,
    contentSelectorQuery,
    contentDeselectorQuery
  );

  const originalScale = 1.0;
  const initialScale = parseFloat(localStorage.getItem(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_TEXT_SCALE"])) || originalScale;
  const minScaleFactor = 0.5;
  const maxScaleFactor = 2.0;

  function setLimitedScale(newScale) {
    if (newScale < minScaleFactor) return setScale(minScaleFactor);
    if (newScale > maxScaleFactor) return setScale(maxScaleFactor);

    return setScale(newScale);
  }

  function handleScaleChangeRequest(direction, scaleStep = 0.1) {
    const signedScaleStep = direction > 0 ? scaleStep : -scaleStep;

    return setLimitedScale(getScale() + signedScaleStep);
  }

  const increaseScale = (scaleStep = 0.1) => handleScaleChangeRequest(1, scaleStep);
  const decreaseScale = (scaleStep = 0.1) => handleScaleChangeRequest(-1, scaleStep);

  const [
    abiliLogo,
    abiliFullLogo,
    indexCSS,
    inputRangeStylingCSS,
    fullDesignPreviewURL,
    compactDesignPreviewURL,
    noneDesignPreviewURL
  ] = await getURLs([
    __webpack_require__(/*! src/images/icon-128.png */ "./src/images/icon-128.png"),
    __webpack_require__(/*! src/images/abilitools-full-logo.png */ "./src/images/abilitools-full-logo.png"),
    __webpack_require__(/*! src/index.css */ "./src/index.css"),
    __webpack_require__(/*! src/input-range-styling.css */ "./src/input-range-styling.css"),
    __webpack_require__(/*! src/images/design-handle.png */ "./src/images/design-handle.png"),
    __webpack_require__(/*! src/images/compact-design-handle.png */ "./src/images/compact-design-handle.png"),
    __webpack_require__(/*! src/images/none-design-handle.png */ "./src/images/none-design-handle.png")
  ]);

  const logoUrl = await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_LOGO_URL"]);
  const logoTitle = await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_LOGO_TITLE"]);
  const logoLinkTarget = await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_LOGO_LINK_TARGET"]);

  const withDefaultUrl = Object(src_lib_default_to__WEBPACK_IMPORTED_MODULE_3__["defaultTo"])(abiliLogo);
  const withDefaultTitle = Object(src_lib_default_to__WEBPACK_IMPORTED_MODULE_3__["defaultTo"])(translate('widget_title_logo'));
  const withDefaultLink = Object(src_lib_default_to__WEBPACK_IMPORTED_MODULE_3__["defaultTo"])('//abilitools.com/');

  const getOpenOptionsPageCallback = () => {
    return async () => {
      const openOptionsPagePort = await connectToEnvironment(src_symbols__WEBPACK_IMPORTED_MODULE_14__["OPEN_OPTIONS_PAGE_EVENT"]);

      openOptionsPagePort.postMessage({});
    };
  };

  const widget = new src_content_widget__WEBPACK_IMPORTED_MODULE_12__["Widget"]({
    maxScaleFactor,
    minScaleFactor,
    startClosed: true,
    translate,
    getTargetPlatform,
    abiliFullLogo: abiliFullLogo,
    logoURL: withDefaultUrl(logoUrl),
    logoTitle: withDefaultTitle(logoTitle),
    logoLinkTarget: withDefaultLink(logoLinkTarget),
    fullDesignPreviewURL,
    compactDesignPreviewURL,
    noneDesignPreviewURL,
    getOpenOptionsPageCallback,
    settings: {
      design: await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_DESIGN"]),
      position: await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_POSITION"]),
      verticalOffset: await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_VERTICAL_OFFSET"]),
      mainColor: await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_MAIN_COLOR"]),
      accentColor: await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_ACCENT_COLOR"]),
      opacity: await environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_OPACITY"])
    }
  });

  widget.onScaleUp(increaseScale);
  widget.onScaleDown(decreaseScale);

  widget.onSlide(Object(src_lib_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(setLimitedScale, 10));
  widget.onResetScale(() => setScale(1));

  widget.onDeactivate(() => {
    setCanScale(false);
    setUIVisibility(false);
  });

  widget.onDragged(() => environmentStorageSet({ [src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_POSITION"]]: 'none' }));
  widget.onPositionChanged(({ verticalOffset }) =>
    environmentStorageSet({ [src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_VERTICAL_OFFSET"]]: verticalOffset })
  );
  widget.onSettingsChange((settings, settingsChanged) => {
    const { design, position, mainColor, accentColor, opacity } = settings;
    const settingsTypes = {
      designChanged: { [src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_DESIGN"]]: design },
      positionChanged: { [src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_POSITION"]]: position },
      mainColorChanged: { [src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_MAIN_COLOR"]]: mainColor },
      accentColorChanged: { [src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_ACCENT_COLOR"]]: accentColor },
      opacityChanged: { [src_symbols__WEBPACK_IMPORTED_MODULE_14__["STORAGE_OPACITY"]]: opacity }
    };

    const updateSettings = Object.entries(settingsChanged).reduce(
      (mergedSettings, [setting, settingChanged]) =>
        (settingChanged ? { ...mergedSettings, ...settingsTypes[setting] } : mergedSettings),
      {}
    );

    environmentStorageSet(updateSettings);
  });

  function pokeWidget() {
    setCanScale(true);
    setUIVisibility(true);

    widget.open();
    widget.scheduleAutoClose();
  }

  document.addEventListener(
    'wheel',
    event => {
      if (event.altKey) {
        pokeWidget();

        const newScale = handleScaleChangeRequest(-event.deltaY);

        widget.update(newScale);
        event.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener('keydown', event => {
    if (event.altKey) {
      // DEV: Alt key on Windows/Linux & [⌥] Option key on Mac
      if (src_symbols__WEBPACK_IMPORTED_MODULE_14__["SCALE_UP_KEY_MODIFIERS"].includes(event.key)) {
        pokeWidget();
        widget.update(increaseScale());

        return;
      }
      if (src_symbols__WEBPACK_IMPORTED_MODULE_14__["SCALE_DOWN_KEY_MODIFIERS"].includes(event.key)) {
        pokeWidget();
        widget.update(decreaseScale());

        return;
      }
      if (src_symbols__WEBPACK_IMPORTED_MODULE_14__["RESET_KEY_MODIFIERS"].includes(event.key)) {
        pokeWidget();
        widget.update(setScale(1));
      }
    }
  });

  document.addEventListener('click', () => {
    widget.close();
  });

  const canScalePort = await connectToEnvironment(src_symbols__WEBPACK_IMPORTED_MODULE_14__["CAN_SCALE_CHANGE_EVENT"]);

  const setUIVisibility = state => {
    if (state) {
      widget.activate();
    } else {
      widget.deactivate();
    }
    canScalePort.postMessage(state);
  };

  onEnvironmentMessage(message => {
    function toggleWidget(extensionState = !getCanScale()) {
      setCanScale(extensionState);
      setUIVisibility(extensionState);
    }

    switch (message) {
    case src_symbols__WEBPACK_IMPORTED_MODULE_14__["EXTENSION_CLICK_EVENT"]:
      toggleWidget();
      break;
    case src_symbols__WEBPACK_IMPORTED_MODULE_14__["OPEN_EXTENSION_SETTINGS"]:
      toggleWidget(true);
      widget.openSettings();
      break;
    }
  });

  document.addEventListener(
    'fullscreenchange',
    function() {
      if (document.fullscreen) {
        widget.deactivate();
      } else if (getCanScale()) {
        widget.activate();
      }
    },
    false
  );

  const currentShadowRootContainer = document.querySelector('#kx-zoom-shadow-root');

  if (currentShadowRootContainer) {
    currentShadowRootContainer.parentNode.removeChild(currentShadowRootContainer);
  }

  const MAX_Z_INDEX = 2147483647;
  const widgetShadowRootContainer = tag__WEBPACK_IMPORTED_MODULE_10___default()('div', {
    id: 'kx-zoom-shadow-root',
    tabIndex: -1,
    hidden: true,
    'aria-hidden': true,
    style: `
    all: unset;
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    display: flex;

    z-index: ${MAX_Z_INDEX};
  `
  });

  const inputRangeStylingCSSLink = tag__WEBPACK_IMPORTED_MODULE_10___default()('link', { rel: 'stylesheet', href: inputRangeStylingCSS });
  const indexCSSLink = tag__WEBPACK_IMPORTED_MODULE_10___default()('link', { rel: 'stylesheet', href: indexCSS });

  const widgetShadowRoot = widgetShadowRootContainer.attachShadow({ mode: 'closed' });

  widgetShadowRoot.appendChild(inputRangeStylingCSSLink);
  widgetShadowRoot.appendChild(indexCSSLink);

  body.appendChild(widgetShadowRootContainer);

  indexCSSLink.onload = () => {
    widgetShadowRoot.appendChild(widget.render());
    widgetShadowRootContainer.removeAttribute('hidden');

    setUIVisibility(getCanScale());

    const scale = setScale(initialScale);

    widget.initialize(widgetShadowRoot, scale);
  };
};



/***/ }),

/***/ "./src/content/scale-text-attributes/scale-text-attributes.js":
/*!********************************************************************!*\
  !*** ./src/content/scale-text-attributes/scale-text-attributes.js ***!
  \********************************************************************/
/*! exports provided: scaleTextAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTextAttributes", function() { return scaleTextAttributes; });
/* harmony import */ var src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/content/kx-data-storage/kx-data-storage */ "./src/content/kx-data-storage/kx-data-storage.js");
/* harmony import */ var src_content_change_element_attributes_change_element_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/content/change-element-attributes/change-element-attributes */ "./src/content/change-element-attributes/change-element-attributes.js");




function scaleTextAttributes(
  element,
  scaleFactor,
  {
    retrieveKXData$ = src_content_kx_data_storage_kx_data_storage__WEBPACK_IMPORTED_MODULE_0__["retrieveKXData"],
    changeFontSizeOfElement$ = src_content_change_element_attributes_change_element_attributes__WEBPACK_IMPORTED_MODULE_1__["changeFontSizeOfElement"],
    changeLineHeightInPixelsOfElement$ = src_content_change_element_attributes_change_element_attributes__WEBPACK_IMPORTED_MODULE_1__["changeLineHeightInPixelsOfElement"]
  } = {}
) {
  const originalFontSize = retrieveKXData$(element, 'fontSize');
  const newFontSize = originalFontSize * scaleFactor;

  changeFontSizeOfElement$(element, newFontSize);

  const originalLineHeight = retrieveKXData$(element, 'lineHeight');

  if (originalLineHeight) {
    const newLineHeight = originalLineHeight * scaleFactor;

    changeLineHeightInPixelsOfElement$(element, newLineHeight);
  }
}



/***/ }),

/***/ "./src/content/select-content-nodes/select-content-nodes.js":
/*!******************************************************************!*\
  !*** ./src/content/select-content-nodes/select-content-nodes.js ***!
  \******************************************************************/
/*! exports provided: selectContentNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectContentNodes", function() { return selectContentNodes; });
/* harmony import */ var lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__);


const selectContentNodes = (domTree, contentSelectorQuery = '*', contentDeselectorQuery) => {
  const allNodes = Array.from(domTree.querySelectorAll(contentSelectorQuery));

  if (Object(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(contentDeselectorQuery)) {
    return allNodes;
  }
  const blockedContentNodes = Array.from(domTree.querySelectorAll(contentDeselectorQuery)).flatMap(node => [
    node,
    ...Array.from(node.querySelectorAll('*'))
  ]);

  return allNodes.filter(node => {
    return !blockedContentNodes.includes(node);
  });
};



/***/ }),

/***/ "./src/content/widget.js":
/*!*******************************!*\
  !*** ./src/content/widget.js ***!
  \*******************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony import */ var src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tag */ "./node_modules/tag/dist/tag.cjs.js");
/* harmony import */ var tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_content_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/content/components */ "./src/content/components/index.js");





function invokeAllFunctions(callbacks, ...values) {
  callbacks.forEach(callback => callback(...values));
}

class Widget {
  constructor({
    translate,
    getTargetPlatform,
    abiliFullLogo,
    startClosed = false,
    minScaleFactor,
    maxScaleFactor,
    logoURL,
    logoTitle,
    logoLinkTarget,
    fullDesignPreviewURL,
    compactDesignPreviewURL,
    noneDesignPreviewURL,
    getOpenOptionsPageCallback,
    settings: { design = 'full', position = 'center-left', verticalOffset = 0, mainColor, accentColor, opacity }
  }) {
    const resetSizeButton = Object(src_content_components__WEBPACK_IMPORTED_MODULE_2__["ResetSizeButton"])({ translate });
    const increaseSizeButton = Object(src_content_components__WEBPACK_IMPORTED_MODULE_2__["IncreaseSizeButton"])({ translate });
    const decreaseSizeButton = Object(src_content_components__WEBPACK_IMPORTED_MODULE_2__["DecreaseSizeButton"])({ translate });
    const toggleButtonComponent = new src_content_components__WEBPACK_IMPORTED_MODULE_2__["ToggleButton"]({ translate });
    const scaleRangeSliderComponent = new src_content_components__WEBPACK_IMPORTED_MODULE_2__["ScaleRangeSlider"]({ translate, minScaleFactor, maxScaleFactor });
    const deactivateButton = Object(src_content_components__WEBPACK_IMPORTED_MODULE_2__["DeactivateButton"])({ translate });
    const toggleSettingsButton = Object(src_content_components__WEBPACK_IMPORTED_MODULE_2__["ToggleSettingsButton"])({ translate });
    const settingsComponent = new src_content_components__WEBPACK_IMPORTED_MODULE_2__["Settings"]({
      translate,
      getTargetPlatform,
      abiliFullLogo,
      settings: { design, position, mainColor, accentColor, opacity },
      fullDesignPreviewURL,
      compactDesignPreviewURL,
      noneDesignPreviewURL,
      getOpenOptionsPageCallback
    });

    this.initialMainColorSet = !Object(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(mainColor);
    this.initialAccentColorSet = !Object(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(accentColor);
    this.initialOpacitySet = !Object(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(opacity);

    this.savedSettings = { mainColor, accentColor, opacity };

    const widget = tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'widget design' }, [
      tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'transition-container widget-grid' }, [
        tag__WEBPACK_IMPORTED_MODULE_1___default()('h1', { class: 'title' }, [
          Object(src_content_components__WEBPACK_IMPORTED_MODULE_2__["LinkedLogoOrNull"])({ linkTarget: logoLinkTarget, logoTitle, logoURL }),
          tag__WEBPACK_IMPORTED_MODULE_1___default()('div', 'Text'),
          tag__WEBPACK_IMPORTED_MODULE_1___default()('div', 'Zoom')
        ]),
        resetSizeButton,
        increaseSizeButton,
        decreaseSizeButton,
        scaleRangeSliderComponent.render(),
        toggleSettingsButton
      ]),
      settingsComponent.render(),
      tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'sideways-container' }, [
        toggleButtonComponent.render(),
        tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: 'closed-controls' }, [
          tag__WEBPACK_IMPORTED_MODULE_1___default()('span', { class: 'zoom-sideways-title' }, 'ZOOM'),
          tag__WEBPACK_IMPORTED_MODULE_1___default()('img', { class: 'abili-logo', src: logoURL }),
          deactivateButton
        ])
      ])
    ]);

    this.children = {
      widget,
      resetSizeButton,
      increaseSizeButton,
      decreaseSizeButton,
      toggleButtonComponent,
      scaleRangeSliderComponent,
      toggleSettingsButton,
      settingsComponent,
      deactivateButton
    };

    const widgetContainerClasses = [
      'widget-container',
      'inactive', // Gradually fades our widget in after initialization
      `design-${design}`,
      startClosed ? 'closed' : '',
      'deactivated'
    ].join(' ');

    this.$ = tag__WEBPACK_IMPORTED_MODULE_1___default()('div', { class: widgetContainerClasses }, [widget]);

    this.children.settingsComponent.onSettingsChange((settings, settingsChanged) => {
      const {
        positionChanged,
        designChanged,
        mainColorChanged,
        accentColorChanged,
        opacityChanged,
        opacityLastChange
      } = settingsChanged;

      if (designChanged) {
        this.$.classList.remove('design-full', 'design-compact', 'design-none');
        this.$.classList.add(`design-${settings.design}`);
      }

      if (positionChanged) {
        this.currentVerticalOffset = this.updatePosition({ position: settings.position }).verticalOffset;
      }

      if (mainColorChanged) {
        this.setMainColor(settings.mainColor);
      }
      if (accentColorChanged) {
        this.setAccentColor(settings.accentColor);
      }
      if (opacityChanged) {
        this.setOpacity(settings.opacity);

        widget.style.setProperty('--opacity-full', settings.opacity);
        if (opacityLastChange) {
          widget.style.setProperty('--opacity-full', null);
        }
      }

      invokeAllFunctions(this.onSettingsChangeCallbacks, settings, settingsChanged);
    });

    this.children.toggleButtonComponent.onClick(e => {
      this.toggle();
      e.stopPropagation(); // Prevent the event below so the widget can actually close
    });
    this.children.widget.addEventListener('click', () => {
      if (this.canOpen) {
        this.open();
      }
    });

    // Prevent the parent document reacting to our click events
    this.$.addEventListener('click', e => {
      e.stopPropagation();
    });

    this.children.toggleSettingsButton.addEventListener('click', () => this.toggleSettings());

    this.children.deactivateButton.addEventListener('click', () => {
      invokeAllFunctions(this.onDeactivateCallbacks);
    });

    this.setupAutoClose();
    this.setupAutoUpdateSlider();
    this.setupDragging(verticalOffset);

    this.isOpen = !startClosed;
    this.stayOpen = false;
    this.canOpen = true; // Prevent accidental opening during certain actions (like dragging)

    this.onSettingsChangeCallbacks = [];
    this.onOpenCallbacks = [];
    this.onCloseCallbacks = [];
    this.onDeactivateCallbacks = [];
    this.onDraggedCallbacks = [() => this.children.settingsComponent.children.positionToggleComponent.uncheckAll()];
    this.onPositionChangedCallbacks = [];
    this.currentVerticalOffset = verticalOffset;
  }

  setupDragging() {
    let mouseHoldTimeout;
    let mouseDragged = false;
    const delayDragRecognitionInMs = 200;

    let originalMouseY = 0;
    let widgetVerticalOffset = 0;

    const mouseMoveListener = ({ y }) => {
      widgetVerticalOffset = this.currentVerticalOffset + y - originalMouseY;

      widgetVerticalOffset = this.updatePosition({ verticalOffset: widgetVerticalOffset }).verticalOffset;
    };

    this.children.widget.addEventListener('mousedown', ({ y, button }) => {
      const rightClickButton = 2;

      if (button === rightClickButton) return;

      originalMouseY = y;

      if (mouseHoldTimeout) {
        // Prevent double mouse down executing twice
        clearTimeout(mouseHoldTimeout);
      }

      document.removeEventListener('mousemove', mouseMoveListener);

      mouseHoldTimeout = setTimeout(() => {
        mouseDragged = true;
        this.canOpen = false;
        document.body.style.userSelect = 'none';

        document.addEventListener('mousemove', mouseMoveListener);
      }, delayDragRecognitionInMs);
    });

    document.addEventListener('mouseup', () => {
      if (mouseDragged) {
        this.currentVerticalOffset = widgetVerticalOffset;
        invokeAllFunctions(this.onDraggedCallbacks, widgetVerticalOffset);

        document.removeEventListener('mousemove', mouseMoveListener);
        document.body.style.userSelect = 'initial';
      } else {
        clearTimeout(mouseHoldTimeout);
      }

      mouseDragged = false;
      setTimeout(() => this.canOpen = true);
    });
  }

  updatePosition({ position = 'center-left', verticalOffset }) {
    let verticalRelativeToCenterOffset = verticalOffset;

    const windowHeight = window.innerHeight;
    const verticalPadding = 20;
    const maxVerticalOffset = parseInt(windowHeight / 2 - this.widgetHeight / 2 - verticalPadding, 10);

    if (!Number.isInteger(verticalOffset)) {
      switch (position) {
      case 'top-left':
        verticalRelativeToCenterOffset = -(maxVerticalOffset - verticalPadding);
        break;
      case 'bottom-left':
        verticalRelativeToCenterOffset = maxVerticalOffset - verticalPadding;
        break;
      case 'center-left':
        verticalRelativeToCenterOffset = 0;
        break;
      }
    }

    if (Math.abs(verticalRelativeToCenterOffset) > maxVerticalOffset) {
      verticalRelativeToCenterOffset = maxVerticalOffset * Math.sign(verticalRelativeToCenterOffset);
    }

    const finalPosition = {
      verticalOffset: verticalRelativeToCenterOffset
    };

    requestAnimationFrame(() => {
      this.$.style.transform = `translateY(${verticalRelativeToCenterOffset}px)`;
      invokeAllFunctions(this.onPositionChangedCallbacks, finalPosition);
    });

    return finalPosition;
  }

  setupAutoUpdateSlider() {
    this.$.addEventListener('transitionend', ({ propertyName }) => {
      if (propertyName === 'height') {
        this.children.scaleRangeSliderComponent.refresh();
      }
    });
  }

  setupAutoClose() {
    this.children.widget.addEventListener('mouseenter', () => {
      this.cancelAutoClose();
    });
    this.children.widget.addEventListener('mouseleave', () => {
      this.scheduleAutoClose();
    });
    this.children.decreaseSizeButton.addEventListener('click', () => {
      this.cancelAutoClose();
    });
    this.children.increaseSizeButton.addEventListener('click', () => {
      this.cancelAutoClose();
    });
    this.children.resetSizeButton.addEventListener('click', () => {
      this.cancelAutoClose();
    });
  }

  scheduleAutoClose() {
    this.cancelAutoClose();
    if (this.stayOpen === false) {
      this.autoCloseTimer = setTimeout(() => this.close(), 5000);
    }
  }

  cancelAutoClose() {
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
    }
  }

  open() {
    if (this.isOpen === false) {
      this.$.classList.remove('closed');
      this.children.toggleButtonComponent.setTitleOpen();
      this.isOpen = true;

      invokeAllFunctions(this.onOpenCallbacks);
    }
  }

  close() {
    if (this.isOpen === true) {
      this.$.classList.add('closed');
      this.children.toggleButtonComponent.setTitleClose();
      this.isOpen = false;
      this.stayOpen = false;
      this.children.settingsComponent.closeSettings();

      invokeAllFunctions(this.onCloseCallbacks);
    }
  }

  toggle() {
    if (this.$.classList.contains('closed')) {
      this.open();
    } else {
      this.close();
    }
  }

  toggleSettings() {
    this.open();
    this.children.settingsComponent.toggleSettings();
  }

  openSettings() {
    this.open();
    this.children.settingsComponent.openSettings();
  }

  settingsValue() {
    return this.children.settingsComponent.value;
  }

  deactivate() {
    this.$.classList.add('deactivated');
  }

  activate() {
    this.$.classList.remove('deactivated');
  }

  setMainColor(color) {
    this.children.widget.style.setProperty('--background', color);
    this.children.widget.style.setProperty('--button-background', color);
    this.children.widget.style.setProperty('--slider-thumb-background', color);
  }

  setAccentColor(color) {
    this.children.widget.style.setProperty('--color-all', color);
    this.children.widget.style.setProperty('--color-highlight', color);
    this.children.widget.style.setProperty('--color-scale-buttons', color);

    this.children.widget.style.setProperty('--slider-background', color);
  }

  setOpacity(opacity) {
    this.children.widget.style.setProperty('--opacity-faded', opacity);
    this.children.widget.style.setProperty('--opacity-very-faded', opacity);
  }

  onOpen(callback) {
    this.onOpenCallbacks.push(callback);
  }

  onClose(callback) {
    this.onCloseCallbacks.push(callback);
  }

  onDeactivate(callback) {
    this.onDeactivateCallbacks.push(callback);
  }

  onDragged(callback) {
    this.onDraggedCallbacks.push(callback);
  }

  onPositionChanged(callback) {
    this.onPositionChangedCallbacks.push(callback);
  }

  onScaleUp(callback) {
    this.children.increaseSizeButton.addEventListener('click', () => this.update(callback()));
  }

  onScaleDown(callback) {
    this.children.decreaseSizeButton.addEventListener('click', () => this.update(callback()));
  }

  onResetScale(callback) {
    this.children.resetSizeButton.addEventListener('click', () => this.update(callback()));
  }

  onSlide(callback) {
    this.children.scaleRangeSliderComponent.onSlide(callback);
  }

  onSettingsChange(callback) {
    this.onSettingsChangeCallbacks.push(callback);
  }

  update(value) {
    this.children.scaleRangeSliderComponent.updateRangeSlider(value);
  }

  render() {
    return this.$;
  }

  initialize(root, initialScale) {
    this.$.classList.remove('inactive');
    this.children.scaleRangeSliderComponent.initializeRangeSlider({ root });

    this.update(initialScale);

    requestAnimationFrame(() => {
      const widgetComputedStyles = window.getComputedStyle(this.$);
      const widgetHeightInEm = Number.parseFloat(
        widgetComputedStyles.getPropertyValue('--widget-opened-height').replace('em', '')
      );
      const widgetFontSize = Number.parseFloat(widgetComputedStyles.getPropertyValue('--font-size').replace('px', ''));

      this.widgetHeight = widgetHeightInEm * widgetFontSize;

      if (!this.initialMainColorSet) {
        const widgetMainColor = widgetComputedStyles.getPropertyValue('--background').trim();

        this.children.settingsComponent.children.styleInputComponent.changeStyle({ mainColor: widgetMainColor });
      } else {
        this.setMainColor(this.savedSettings.mainColor);
      }

      if (!this.initialAccentColorSet) {
        const widgetAccentColor = widgetComputedStyles.getPropertyValue('--color-all').trim();

        this.children.settingsComponent.children.styleInputComponent.changeStyle({ accentColor: widgetAccentColor });
      } else {
        this.setAccentColor(this.savedSettings.accentColor);
      }

      if (!this.initialOpacitySet) {
        const widgetOpacity = Number.parseFloat(widgetComputedStyles.getPropertyValue('--opacity-faded'));

        this.children.settingsComponent.children.styleInputComponent.changeStyle({ opacity: widgetOpacity });
      } else {
        this.setOpacity(this.savedSettings.opacity);
      }

      this.currentVerticalOffset = this.updatePosition({
        verticalOffset: this.currentVerticalOffset,
        position: this.settingsValue().position
      }).verticalOffset;
    });
  }
}



/***/ }),

/***/ "./src/content/with-default-content-deselectors/with-default-content-deselectors.js":
/*!******************************************************************************************!*\
  !*** ./src/content/with-default-content-deselectors/with-default-content-deselectors.js ***!
  \******************************************************************************************/
/*! exports provided: DEFAULT_CONTENT_DESELECTORS, withDefaultContentDeselectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONTENT_DESELECTORS", function() { return DEFAULT_CONTENT_DESELECTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDefaultContentDeselectors", function() { return withDefaultContentDeselectors; });
const DEFAULT_CONTENT_DESELECTORS = ['rs-layer'];


const withDefaultContentDeselectors = (arr = []) => [...DEFAULT_CONTENT_DESELECTORS, ...arr];



/***/ }),

/***/ "./src/images/abilitools-full-logo.png":
/*!*********************************************!*\
  !*** ./src/images/abilitools-full-logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "abilitools-full-logo.png";

/***/ }),

/***/ "./src/images/compact-design-handle.png":
/*!**********************************************!*\
  !*** ./src/images/compact-design-handle.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "compact-design-handle.png";

/***/ }),

/***/ "./src/images/design-handle.png":
/*!**************************************!*\
  !*** ./src/images/design-handle.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "design-handle.png";

/***/ }),

/***/ "./src/images/extension_preview.gif":
/*!******************************************!*\
  !*** ./src/images/extension_preview.gif ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "extension_preview.gif";

/***/ }),

/***/ "./src/images/icon-128.png":
/*!*********************************!*\
  !*** ./src/images/icon-128.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-128.png";

/***/ }),

/***/ "./src/images/none-design-handle.png":
/*!*******************************************!*\
  !*** ./src/images/none-design-handle.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "none-design-handle.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.css";

/***/ }),

/***/ "./src/input-range-styling.css":
/*!*************************************!*\
  !*** ./src/input-range-styling.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "input-range-styling.css";

/***/ }),

/***/ "./src/lib/debounce.js":
/*!*****************************!*\
  !*** ./src/lib/debounce.js ***!
  \*****************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(fn, wait, mergeArgs = (_, newArgs) => newArgs) {
  let timeout;
  let previousArgs = [];

  return function(...args) {
    previousArgs = mergeArgs(previousArgs, args);

    return new Promise(resolve => {
      const later = () => {
        timeout = null;
        resolve(fn(...previousArgs));
        previousArgs = [];
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    });
  };
}



/***/ }),

/***/ "./src/lib/default_to.js":
/*!*******************************!*\
  !*** ./src/lib/default_to.js ***!
  \*******************************/
/*! exports provided: defaultTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return defaultTo; });
/* harmony import */ var _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__);


const defaultTo = defaultParam => param => {
  if (Object(_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(param)) {
    return defaultParam;
  }

  return param;
};



/***/ }),

/***/ "./src/lib/is_empty_string.js":
/*!************************************!*\
  !*** ./src/lib/is_empty_string.js ***!
  \************************************/
/*! exports provided: isEmptyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony import */ var _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var _is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__);


const isEmptyString = param => Object(_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(param) || param === '';




/***/ }),

/***/ "./src/lib/is_null_or_undefined.ts":
/*!*****************************************!*\
  !*** ./src/lib/is_null_or_undefined.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isNullOrUndefined = function (param) { return param === null || param === undefined; };
exports.isNullOrUndefined = isNullOrUndefined;


/***/ }),

/***/ "./src/lib/is_url_blocked.js":
/*!***********************************!*\
  !*** ./src/lib/is_url_blocked.js ***!
  \***********************************/
/*! exports provided: isUrlBlocked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlBlocked", function() { return isUrlBlocked; });
/* harmony import */ var lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__);


const isUrlBlocked = ({ url, list, strict = false }) => {
  if (Object(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(url) || Object(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(list)) {
    return false;
  }

  if (list.length === 0) {
    return false;
  }

  for (let i = 0; i <= list.length; i++) {
    if (strict) {
      if (url === list[i]) {
        return true;
      }
    } else {
      if (url.indexOf(list[i]) !== -1) {
        return true;
      }
    }
  }

  return false;
};



/***/ }),

/***/ "./src/lib/object_value_or_default.js":
/*!********************************************!*\
  !*** ./src/lib/object_value_or_default.js ***!
  \********************************************/
/*! exports provided: objectValueOrDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectValueOrDefault", function() { return objectValueOrDefault; });
const objectValueOrDefault = (obj, key, defaultValue) => obj && obj[key] || defaultValue;




/***/ }),

/***/ "./src/lib/serializer.js":
/*!*******************************!*\
  !*** ./src/lib/serializer.js ***!
  \*******************************/
/*! exports provided: arrayToNewLineString, arrayToCommaStringOrUndefined, newLineStringToArray, commaStringToArray, stringToInteger, convertNull, convertUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToNewLineString", function() { return arrayToNewLineString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToCommaStringOrUndefined", function() { return arrayToCommaStringOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLineStringToArray", function() { return newLineStringToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commaStringToArray", function() { return commaStringToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToInteger", function() { return stringToInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertNull", function() { return convertNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertUndefined", function() { return convertUndefined; });
/* harmony import */ var lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__);


const falsy = el => el;

const createArrayToString = ({ joinBy, emptyCheck, emptyReturn }) => arr => {
  if (emptyCheck(arr)) {
    return emptyReturn;
  }

  return arr.filter(falsy).join(joinBy);
};

const arrayToNewLineString = createArrayToString({ joinBy: '\n', emptyCheck: lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"], emptyReturn: '' });


const isNullOrUndefinedOrEmpty = arg => Object(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(arg) || arg.length === 0;
const arrayToCommaStringOrUndefined = createArrayToString({
  joinBy: ',',
  emptyCheck: isNullOrUndefinedOrEmpty,
  emptyReturn: undefined
});


const createStringToArray = ({ splitBy, empty }) => str => {
  if (Object(lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(str)) {
    return empty;
  }

  return str.split(splitBy).filter(falsy);
};
const newLineStringToArray = createStringToArray({ splitBy: '\n', empty: [] });


const commaStringToArray = createStringToArray({ splitBy: ',', empty: [] });


const stringToInteger = param => parseInt(param, 10);


const convertNull = param => (param === 'null' ? null : param);


const convertUndefined = param => (param === 'undefined' ? undefined : param);



/***/ }),

/***/ "./src/lib/target-platform.js":
/*!************************************!*\
  !*** ./src/lib/target-platform.js ***!
  \************************************/
/*! exports provided: TargetPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetPlatform", function() { return TargetPlatform; });
const TargetPlatform = {
  CHROME: {
    name: 'Google Chrome',
    id: 'chrome'
  },
  FIREFOX: {
    name: 'Firefox',
    id: 'firefox'
  },
  EDGE: {
    name: 'Microsoft Edge',
    id: 'edge'
  },
  WORDPRESS: {
    name: 'WordPress',
    id: 'wordpress'
  }
};




/***/ }),

/***/ "./src/lib/to_boolean.ts":
/*!*******************************!*\
  !*** ./src/lib/to_boolean.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toBoolean = function (param) {
    if (param === 'true') {
        return true;
    }
    if (param === 'false') {
        return false;
    }
    return Boolean(param);
};
exports.toBoolean = toBoolean;


/***/ }),

/***/ "./src/migrate.js":
/*!************************!*\
  !*** ./src/migrate.js ***!
  \************************/
/*! exports provided: allMigrations, runMigrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMigrations", function() { return allMigrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runMigrations", function() { return runMigrations; });
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver/functions/satisfies */ "./node_modules/semver/functions/satisfies.js");
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_to_boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/to_boolean */ "./src/lib/to_boolean.ts");
/* harmony import */ var lib_to_boolean__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lib_to_boolean__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! symbols */ "./src/symbols.js");





/*
 * Never remove migrations!
 *
 * isLocal: true - compare with version stored in local storage (website specific localStorage upgrades)
 * isLocal: false - compare with version stored in env storage (extension/plugin wide upgrades)
 *
 * <x.x.x Run migration if stored version is less than version x.x.x
 */

async function extendCompactLocalStorageSetting(_, { environmentStorageGet, environmentStorageSet }) {
  const compactDesign = Object(lib_to_boolean__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(await environmentStorageGet(symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_COMPACT_DESIGN_DEPREC"]));

  environmentStorageSet({ [symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_DESIGN"]]: compactDesign ? 'compact' : 'full' });
}

async function migrateStorageCanScaleSettingToEnv(_, { environmentStorageGet, environmentStorageSet }) {
  const storedCanScale = localStorage.getItem(symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_CAN_SCALE"]);

  if (typeof storedCanScale === 'string' && storedCanScale === 'false') {
    environmentStorageGet(symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_STRICT_BLOCKLIST"]).then(data => {
      if (!data) data = [];
      environmentStorageSet({ [symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_STRICT_BLOCKLIST"]]: [...data, window.location.href] });
    });
  }

  localStorage.removeItem(symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_CAN_SCALE"]);
}

const allMigrations = [
  {
    versionRange: '<5.10.0',
    isLocal: false,
    migration: [extendCompactLocalStorageSetting]
  },
  {
    versionRange: '<7.3.0',
    isLocal: true,
    migration: [migrateStorageCanScaleSettingToEnv]
  }
];


async function runMigrations(
  migrations,
  currentVersion,
  { localStorage: $localStorage = localStorage, environmentStorageGet, environmentStorageSet } = { localStorage }
) {
  const previousLocalVersion = $localStorage.getItem(symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_VERSION"]) || currentVersion;
  const previousEnvVersion = await environmentStorageGet(symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_VERSION"]) || currentVersion;

  for (const { versionRange: migrationVersionRange, migration, isLocal } of migrations) {
    if (isLocal) {
      if (!semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default()(previousLocalVersion, migrationVersionRange)) {
        continue; // skip migration
      }
    } else {
      if (!semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default()(previousEnvVersion, migrationVersionRange)) {
        continue; // skip migration
      }
    }

    const migrationDependencies = {
      environmentStorageSet,
      environmentStorageGet
    };

    // Migration version applied first for logging etc., results fed into next step
    await migration.reduce(
      async (result, migrationStep) => await migrationStep(await result, migrationDependencies),
      null
    );
  }

  localStorage.setItem(symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_VERSION"], currentVersion);
  await environmentStorageSet({ [symbols__WEBPACK_IMPORTED_MODULE_2__["STORAGE_VERSION"]]: currentVersion });
}



/***/ }),

/***/ "./src/symbols.js":
/*!************************!*\
  !*** ./src/symbols.js ***!
  \************************/
/*! exports provided: __UsedSymbols, STORAGE_TEXT_SCALE, STORAGE_CAN_SCALE, STORAGE_COMPACT_DESIGN_DEPREC, STORAGE_BLOCKLIST, STORAGE_STRICT_BLOCKLIST, STORAGE_CONTENT_DESELECTOR, STORAGE_DESIGN, STORAGE_VERSION, STORAGE_VERTICAL_OFFSET, STORAGE_POSITION, STORAGE_MAIN_COLOR, STORAGE_ACCENT_COLOR, STORAGE_OPACITY, STORAGE_LOGO_URL, STORAGE_LOGO_TITLE, STORAGE_LOGO_LINK_TARGET, ACTIVATE_EXTENSION_EVENT, EXTENSION_CLICK_EVENT, CAN_SCALE_CHANGE_EVENT, OPEN_EXTENSION_SETTINGS, OPEN_OPTIONS_PAGE_EVENT, SCALE_UP_KEY_MODIFIERS, SCALE_DOWN_KEY_MODIFIERS, RESET_KEY_MODIFIERS, EXTENSION_WEBSITE_CONTEXT_MENU_ID, EXTENSION_WORDPRESS_WEBSITE_CONTEXT_MENU_ID, OPEN_EXTENSION_SETTINGS_CONTEXT_MENU_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__UsedSymbols", function() { return __UsedSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_TEXT_SCALE", function() { return STORAGE_TEXT_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_CAN_SCALE", function() { return STORAGE_CAN_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_COMPACT_DESIGN_DEPREC", function() { return STORAGE_COMPACT_DESIGN_DEPREC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_BLOCKLIST", function() { return STORAGE_BLOCKLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_STRICT_BLOCKLIST", function() { return STORAGE_STRICT_BLOCKLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_CONTENT_DESELECTOR", function() { return STORAGE_CONTENT_DESELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_DESIGN", function() { return STORAGE_DESIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_VERSION", function() { return STORAGE_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_VERTICAL_OFFSET", function() { return STORAGE_VERTICAL_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_POSITION", function() { return STORAGE_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_MAIN_COLOR", function() { return STORAGE_MAIN_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_ACCENT_COLOR", function() { return STORAGE_ACCENT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_OPACITY", function() { return STORAGE_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_LOGO_URL", function() { return STORAGE_LOGO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_LOGO_TITLE", function() { return STORAGE_LOGO_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_LOGO_LINK_TARGET", function() { return STORAGE_LOGO_LINK_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVATE_EXTENSION_EVENT", function() { return ACTIVATE_EXTENSION_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_CLICK_EVENT", function() { return EXTENSION_CLICK_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAN_SCALE_CHANGE_EVENT", function() { return CAN_SCALE_CHANGE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_EXTENSION_SETTINGS", function() { return OPEN_EXTENSION_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_OPTIONS_PAGE_EVENT", function() { return OPEN_OPTIONS_PAGE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_UP_KEY_MODIFIERS", function() { return SCALE_UP_KEY_MODIFIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_DOWN_KEY_MODIFIERS", function() { return SCALE_DOWN_KEY_MODIFIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_KEY_MODIFIERS", function() { return RESET_KEY_MODIFIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_WEBSITE_CONTEXT_MENU_ID", function() { return EXTENSION_WEBSITE_CONTEXT_MENU_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENSION_WORDPRESS_WEBSITE_CONTEXT_MENU_ID", function() { return EXTENSION_WORDPRESS_WEBSITE_CONTEXT_MENU_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_EXTENSION_SETTINGS_CONTEXT_MENU_ID", function() { return OPEN_EXTENSION_SETTINGS_CONTEXT_MENU_ID; });
// DEV: Changes to properties need to increment version - old versions need to be cleaned
const prefixVersion = 'PV1';
const prefix = ([symbol]) => `ZoomExtension%${prefixVersion}%${symbol}`;

// Add disabled symbols to this array to prevent future backwards-compatibility issues
const __UsedSymbols = [prefix`3`];


const STORAGE_TEXT_SCALE = prefix`1`;
const STORAGE_CAN_SCALE = prefix`2`;
const STORAGE_COMPACT_DESIGN_DEPREC = prefix`4`;
const STORAGE_BLOCKLIST = prefix`5`;
const STORAGE_CONTENT_DESELECTOR = prefix`6`;
const STORAGE_STRICT_BLOCKLIST = prefix`7`;
const STORAGE_DESIGN = prefix`8`;
const STORAGE_VERSION = prefix`9`;
const STORAGE_VERTICAL_OFFSET = prefix`10`;
const STORAGE_POSITION = prefix`11`;
const STORAGE_MAIN_COLOR = prefix`12`;
const STORAGE_ACCENT_COLOR = prefix`13`;
const STORAGE_OPACITY = prefix`14`;
const STORAGE_LOGO_URL = prefix`15`;
const STORAGE_LOGO_TITLE = prefix`16`;
const STORAGE_LOGO_LINK_TARGET = prefix`17`;


const OPEN_EXTENSION_SETTINGS = prefix`open-settings`;
const EXTENSION_CLICK_EVENT = prefix`click`;
const CAN_SCALE_CHANGE_EVENT = prefix`change`;
const OPEN_OPTIONS_PAGE_EVENT = prefix`open-options`;
const ACTIVATE_EXTENSION_EVENT = prefix`activate-extension`;


// DEV: Valid for english & german keyboard layouts
const SCALE_UP_KEY_MODIFIERS = ['+', '±'];
const SCALE_DOWN_KEY_MODIFIERS = ['-', '–'];
const RESET_KEY_MODIFIERS = ['0', '≠', 'º'];


const EXTENSION_WEBSITE_CONTEXT_MENU_ID = prefix`extension-website-context-menu`;
const EXTENSION_WORDPRESS_WEBSITE_CONTEXT_MENU_ID = prefix`extension-wordpress-website-context-menu`;
const OPEN_EXTENSION_SETTINGS_CONTEXT_MENU_ID = prefix`open-settings-context-menu`;



/***/ }),

/***/ "./src/target-interface/wordpress.js":
/*!*******************************************!*\
  !*** ./src/target-interface/wordpress.js ***!
  \*******************************************/
/*! exports provided: getURL, getURLs, onEnvironmentMessage, connectToEnvironment, environmentStorageSet, environmentStorageGet, translate, configureRuntime, getTargetPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURL", function() { return getURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURLs", function() { return getURLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEnvironmentMessage", function() { return onEnvironmentMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToEnvironment", function() { return connectToEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentStorageSet", function() { return environmentStorageSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentStorageGet", function() { return environmentStorageGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureRuntime", function() { return configureRuntime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetPlatform", function() { return getTargetPlatform; });
/* harmony import */ var _locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_locales/en/messages.json */ "./src/_locales/en/messages.json");
var _locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../_locales/en/messages.json */ "./src/_locales/en/messages.json", 1);
/* harmony import */ var src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/is_null_or_undefined */ "./src/lib/is_null_or_undefined.ts");
/* harmony import */ var src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_lib_is_url_blocked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/is_url_blocked */ "./src/lib/is_url_blocked.js");
/* harmony import */ var src_lib_object_value_or_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/object_value_or_default */ "./src/lib/object_value_or_default.js");
/* harmony import */ var src_lib_target_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib/target-platform */ "./src/lib/target-platform.js");
/* harmony import */ var src_lib_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/serializer */ "./src/lib/serializer.js");
/* harmony import */ var src_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/symbols */ "./src/symbols.js");









const getURL = path => {
  const assetPath = window.PZAT.assetPath || 'wp-content/plugins/text-zoom-premium/assets/';

  return Promise.resolve(`${assetPath}${path}`);
};


const getURLs = paths => Promise.all(paths.map(getURL));


const onEnvironmentMessage = () => {};


const connectToEnvironment = () => Promise.resolve({ postMessage: () => {} });


const environmentStorageSet = keyValueObject => {
  const keys = Object.keys(keyValueObject);

  keys.forEach(k => {
    window.localStorage.setItem(k, keyValueObject[k]);
  });
};


const environmentStorageGet = key => {
  const toArray = [src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_BLOCKLIST"], src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_CONTENT_DESELECTOR"], src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_STRICT_BLOCKLIST"]];
  const toInteger = [src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_VERTICAL_OFFSET"]];

  if (toArray.includes(key)) {
    return Promise.resolve(Object(src_lib_serializer__WEBPACK_IMPORTED_MODULE_5__["commaStringToArray"])(window.localStorage.getItem(key)));
  }

  if (toInteger.includes(key)) {
    return Promise.resolve(Object(src_lib_serializer__WEBPACK_IMPORTED_MODULE_5__["stringToInteger"])(window.localStorage.getItem(key)));
  }

  const value = Object(src_lib_serializer__WEBPACK_IMPORTED_MODULE_5__["convertUndefined"])(Object(src_lib_serializer__WEBPACK_IMPORTED_MODULE_5__["convertNull"])(window.localStorage.getItem(key)));

  return Promise.resolve(value);
};


const interpolate = (string, otherString) => string.replace('$SHORTCUT$', otherString);
const getMessage = (key, arg) => {
  const data = _locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__[key];

  if (data !== undefined) {
    if (arg !== undefined) {
      return interpolate(data.message, arg);
    }

    return data.message;
  }

  return '';
};
const mapOS = key => (key.includes('mac') ? 'mac' : 'other');
const platformOS = () => mapOS(navigator.platform.toLowerCase());
const getOSShortcut = key => getMessage(`${key}_shortcut_${platformOS()}`);
const translate = key => {
  const shortcut = getOSShortcut(key);

  if (shortcut.length > 0) {
    return getMessage(key, getOSShortcut(key));
  }

  return getMessage(key);
};


const userValueOverGlobalValue = (uv, gv) => {
  if (Object(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(uv)) {
    return gv;
  }

  return uv;
};
const initStorageValue = (globalKey, storageKey, defaultValue) => {
  const globalValue = Object(src_lib_object_value_or_default__WEBPACK_IMPORTED_MODULE_3__["objectValueOrDefault"])(window.PZAT, globalKey, defaultValue);

  environmentStorageGet(storageKey).then(userValue => {
    environmentStorageSet({ [storageKey]: userValueOverGlobalValue(userValue, globalValue) });
  });
};
const configureRuntime = () => {
  return new Promise((resolve, reject) => {
    initStorageValue('blocklist', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_BLOCKLIST"], []);
    initStorageValue('position', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_POSITION"], 'center-left');
    initStorageValue('mainColor', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_MAIN_COLOR"], '#FFFFFF');
    initStorageValue('accentColor', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_ACCENT_COLOR"], '#666666');
    initStorageValue('opacity', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_OPACITY"], '0.8');
    initStorageValue('strictBlockList', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_STRICT_BLOCKLIST"], []);
    initStorageValue('contentDeselector', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_CONTENT_DESELECTOR"], []);
    initStorageValue('logoUrl', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_LOGO_URL"], undefined);
    initStorageValue('logoTitle', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_LOGO_TITLE"], undefined);
    initStorageValue('logoLinkTarget', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_LOGO_LINK_TARGET"], undefined);

    environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_STRICT_BLOCKLIST"])
      .then(data => Object(src_lib_is_url_blocked__WEBPACK_IMPORTED_MODULE_2__["isUrlBlocked"])({ url: window.location.href, list: data, strict: true }))
      .then(isStrictBlocked => {
        if (isStrictBlocked) {
          return reject({ isBlocked: isStrictBlocked });
        }

        environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_BLOCKLIST"])
          .then(data => Object(src_lib_is_url_blocked__WEBPACK_IMPORTED_MODULE_2__["isUrlBlocked"])({ url: window.location.href, list: data }))
          .then(isBlocked => {
            if (isBlocked) {
              return reject({ isBlocked });
            }

            environmentStorageGet(src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_DESIGN"]).then(design => {
              if (Object(src_lib_is_null_or_undefined__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(design)) {
                initStorageValue('design', src_symbols__WEBPACK_IMPORTED_MODULE_6__["STORAGE_DESIGN"], undefined);
              }

              return resolve({ isBlocked: false });
            });
          });
      });
  });
};


const getTargetPlatform = () => {
  return src_lib_target_platform__WEBPACK_IMPORTED_MODULE_4__["TargetPlatform"].WORDPRESS;
};



/***/ })

/******/ });
//# sourceMappingURL=content.js.map