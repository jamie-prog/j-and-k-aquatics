// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';
!function(m) {
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  t.m = m;
  t.c = n;
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  t.r = function(input) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(input, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(input, "__esModule", {
      value : true
    });
  };
  t.t = function(a, b) {
    if (1 & b && (a = t(a)), 8 & b) {
      return a;
    }
    if (4 & b && "object" == typeof a && a && a.__esModule) {
      return a;
    }
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : a
    }), 2 & b && "string" != typeof a) {
      var key;
      for (key in a) {
        t.d(d, key, function(howMany) {
          return a[howMany];
        }.bind(null, key));
      }
    }
    return d;
  };
  t.n = function(module) {
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  t.o = function(arg, str) {
    return Object.prototype.hasOwnProperty.call(arg, str);
  };
  t.p = "";
  t(t.s = 2);
}([function(canCreateDiscussions, moduleTransport, n) {
  !function(module) {
    function copy(obj) {
      return (copy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(obj);
    }
    function setProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    function mixin(obj, deep) {
      var result = Object.keys(obj);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(obj);
        if (deep) {
          r = r.filter(function(key) {
            return Object.getOwnPropertyDescriptor(obj, key).enumerable;
          });
        }
        result.push.apply(result, r);
      }
      return result;
    }
    function extend(target) {
      var i = 1;
      for (; i < arguments.length; i++) {
        var properties = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          mixin(Object(properties), true).forEach(function(key) {
            setProperty(target, key, properties[key]);
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(properties));
          } else {
            mixin(Object(properties)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(properties, key));
            });
          }
        }
      }
      return target;
    }
    function normalize(n, t, e) {
      var digit;
      var s = "";
      if ((n = "number" == typeof n ? String(n) : n).length > t) {
        return n;
      }
      digit = 0;
      for (; digit < t; digit = digit + 1) {
        s = s + String(e);
      }
      return (s + n).slice(-s.length);
    }
    function Map() {
      this.reset();
    }
    function EventEmitter() {
      this.events = {};
    }
    function length(a, b) {
      return (a % b + b) % b;
    }
    function Timer() {
      function get(index, value) {
        target[index] = value;
        results[index] = index === name ? value : value >= 0 ? length(value, columnLengths[index]) : columnLengths[index] - length(value, columnLengths[index]);
      }
      function bind(k) {
        return push(k, name);
      }
      function dump(image) {
        return push(image, i);
      }
      function parse(number) {
        return push(number, "minutes");
      }
      function fn(number) {
        return push(number, n);
      }
      function restart(e) {
        return push(e, "secondTenths");
      }
      function push(e, key) {
        var val = target[key];
        return get(key, next(e, unitsInMilliseconds[key])), target[key] !== val;
      }
      function end() {
        stopTimer();
        now();
      }
      function stopTimer() {
        clearInterval(timer);
        timer = void 0;
        running = false;
        status = false;
      }
      function update(params) {
        if (isPaused()) {
          px = elapsed();
          platform = setTarget(config.target);
        } else {
          setParams(params);
        }
        tick();
      }
      function tick() {
        var interval = unitsInMilliseconds[precision];
        if (!resolve(log(Date.now()))) {
          timer = setInterval(trigger, interval);
          running = true;
          status = false;
        }
      }
      function elapsed() {
        return log(Date.now()) - target.secondTenths * unitsInMilliseconds.secondTenths * stepx;
      }
      function trigger() {
        var output = log(Date.now());
        updateMinutes(error());
        callback(el.detail.timer);
        if (resolve(output)) {
          stop();
          dispatchEvent("targetAchieved", el);
        }
      }
      function error() {
        var qx = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : log(Date.now());
        var value = stepx > 0 ? qx - px : px - qx;
        var obj = {};
        return obj.secondTenths = restart(value), obj[n] = fn(value), obj.minutes = parse(value), obj[i] = dump(value), obj[name] = bind(value), obj;
      }
      function log(level) {
        return Math.floor(level / unitsInMilliseconds[precision]) * unitsInMilliseconds[precision];
      }
      function updateMinutes(times) {
        if (times.secondTenths) {
          dispatchEvent("secondTenthsUpdated", el);
        }
        if (times[n]) {
          dispatchEvent("secondsUpdated", el);
        }
        if (times.minutes) {
          dispatchEvent("minutesUpdated", el);
        }
        if (times[i]) {
          dispatchEvent("hoursUpdated", el);
        }
        if (times[name]) {
          dispatchEvent("daysUpdated", el);
        }
      }
      function resolve(index) {
        return platform instanceof Array && index >= dingtalkInit;
      }
      function now() {
        results.reset();
        target.reset();
      }
      function setParams(params) {
        precision = replace((params = params || {}).precision);
        callback = "function" == typeof params.callback ? params.callback : function() {
        };
        v = true === params.countdown;
        stepx = true === v ? -1 : 1;
        if ("object" === copy(params.startValues)) {
          setStartValues(params.startValues);
        } else {
          startValues = null;
        }
        px = elapsed();
        error();
        if ("object" === copy(params.target)) {
          platform = setTarget(params.target);
        } else {
          if (v) {
            params.target = {
              seconds : 0
            };
            platform = setTarget(params.target);
          } else {
            platform = null;
          }
        }
        timerConfig = {
          precision : precision,
          callback : callback,
          countdown : "object" === copy(params) && true === params.countdown,
          target : platform,
          startValues : startValues
        };
        config = params;
      }
      function replace(type) {
        if (!normalize(type = "string" == typeof type ? type : n)) {
          throw new Error("Error in precision parameter: ".concat(type, " is not a valid value"));
        }
        return type;
      }
      function normalize(clone) {
        return fields.indexOf(clone) >= 0;
      }
      function configInputValues(inputValues) {
        var values;
        if ("object" === copy(inputValues)) {
          if (inputValues instanceof Array) {
            if (5 !== inputValues.length) {
              throw new Error("Array size not valid");
            }
            values = inputValues;
          } else {
            var e;
            for (e in inputValues) {
              if (fields.indexOf(e) < 0) {
                throw new Error("Error in startValues or target parameter: ".concat(e, " is not a valid input value"));
              }
            }
            values = [inputValues.secondTenths || 0, inputValues.seconds || 0, inputValues.minutes || 0, inputValues.hours || 0, inputValues.days || 0];
          }
        }
        var n = values[0];
        var k = values[1] + next(n, 10);
        var minutes = values[2] + next(k, 60);
        var seconds = values[3] + next(minutes, 60);
        var _qp = values[4] + next(seconds, 24);
        return values[0] = n % 10, values[1] = k % 60, values[2] = minutes % 60, values[3] = seconds % 24, values[4] = _qp, values;
      }
      function next(val, step) {
        var n = val / step;
        return n < 0 ? Math.ceil(n) : Math.floor(n);
      }
      function setTarget(inputTarget) {
        if (inputTarget) {
          var inputValues = $(platform = configInputValues(inputTarget));
          return dingtalkInit = px + inputValues.secondTenths * unitsInMilliseconds.secondTenths * stepx, platform;
        }
      }
      function setStartValues(inputStartValues) {
        startValues = configInputValues(inputStartValues);
        results.secondTenths = startValues[0];
        results.seconds = startValues[1];
        results.minutes = startValues[2];
        results.hours = startValues[3];
        results.days = startValues[4];
        target = $(startValues, target);
      }
      function $(match, state) {
        var target = state || {};
        return target.days = match[4], target.hours = 24 * target.days + match[3], target.minutes = 60 * target.hours + match[2], target.seconds = 60 * target.minutes + match[1], target.secondTenths = 10 * target.seconds + match[[0]], target;
      }
      function stop() {
        end();
        dispatchEvent("stopped", el);
      }
      function reset() {
        end();
        update(config);
        dispatchEvent("reset", el);
      }
      function start() {
        var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        value = extend(extend({}, opts), value);
        if (!isRunning()) {
          update(value);
          dispatchEvent("started", el);
        }
      }
      function pause() {
        stopTimer();
        status = true;
        dispatchEvent("paused", el);
      }
      function addEventListener(event, fn) {
        req.on(event, fn);
      }
      function removeEventListener(event, name) {
        req.removeListener(event, name);
      }
      function dispatchEvent(event, target) {
        req.emit(event, target);
      }
      function isRunning() {
        return running;
      }
      function isPaused() {
        return status;
      }
      function getTimeValues() {
        return results;
      }
      function getTotalTimeValues() {
        return target;
      }
      function getConfig() {
        return timerConfig;
      }
      var timer;
      var precision;
      var stepx;
      var callback;
      var config;
      var platform;
      var startValues;
      var v;
      var px;
      var dingtalkInit;
      var opts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var results = new Map;
      var target = new Map;
      var req = new EventEmitter;
      var running = false;
      var status = false;
      var timerConfig = {};
      var el = {
        detail : {
          timer : this
        }
      };
      setParams(opts);
      if (void 0 !== this) {
        this.start = start;
        this.pause = pause;
        this.stop = stop;
        this.reset = reset;
        this.isRunning = isRunning;
        this.isPaused = isPaused;
        this.getTimeValues = getTimeValues;
        this.getTotalTimeValues = getTotalTimeValues;
        this.getConfig = getConfig;
        this.addEventListener = addEventListener;
        this.on = addEventListener;
        this.removeEventListener = removeEventListener;
        this.off = removeEventListener;
      }
    }
    Map.prototype.toString = function() {
      var units = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["hours", "minutes", "seconds"];
      var layout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ":";
      var y = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
      units = units || ["hours", "minutes", "seconds"];
      layout = layout || ":";
      y = y || 2;
      var i;
      var path = [];
      i = 0;
      for (; i < units.length; i = i + 1) {
        if (void 0 !== this[units[i]]) {
          if ("secondTenths" === units[i]) {
            path.push(this[units[i]]);
          } else {
            path.push(normalize(this[units[i]], y, "0"));
          }
        }
      }
      return path.join(layout);
    };
    Map.prototype.reset = function() {
      this.secondTenths = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.days = 0;
    };
    EventEmitter.prototype.on = function(event, type) {
      var InfoTip = this;
      return Array.isArray(this.events[event]) || (this.events[event] = []), this.events[event].push(type), function() {
        return InfoTip.removeListener(event, type);
      };
    };
    EventEmitter.prototype.removeListener = function(event, callback) {
      if (Array.isArray(this.events[event])) {
        var i = this.events[event].indexOf(callback);
        if (i > -1) {
          this.events[event].splice(i, 1);
        }
      }
    };
    EventEmitter.prototype.emit = function(event) {
      var outer_this = this;
      var length = arguments.length;
      var vargs = new Array(length > 1 ? length - 1 : 0);
      var i = 1;
      for (; i < length; i++) {
        vargs[i - 1] = arguments[i];
      }
      if (Array.isArray(this.events[event])) {
        this.events[event].forEach(function(f) {
          return f.apply(outer_this, vargs);
        });
      }
    };
    var n = "seconds";
    var i = "hours";
    var name = "days";
    var fields = ["secondTenths", n, "minutes", i, name];
    var unitsInMilliseconds = {
      secondTenths : 100,
      seconds : 1e3,
      minutes : 6e4,
      hours : 36e5,
      days : 864e5
    };
    var columnLengths = {
      secondTenths : 10,
      seconds : 60,
      minutes : 60,
      hours : 24
    };
    module.Timer = Timer;
    module.default = Timer;
    Object.defineProperty(module, "__esModule", {
      value : true
    });
  }(moduleTransport);
}, function(pkg, s, n) {
  var h;
  var e;
  var v;
  e = [];
  h = function() {
    var isNativeSmoothScrollEnabledOn = function(elem) {
      return elem && "getComputedStyle" in window && "smooth" === window.getComputedStyle(elem)["scroll-behavior"];
    };
    if ("undefined" == typeof window || !("document" in window)) {
      return {};
    }
    var makeScroller = function(container, defaultDuration, edgeOffset) {
      var scrollTimeoutId;
      defaultDuration = defaultDuration || 999;
      if (!(edgeOffset || 0 === edgeOffset)) {
        edgeOffset = 9;
      }
      var setScrollTimeoutId = function(newValue) {
        scrollTimeoutId = newValue;
      };
      var stopScroll = function() {
        clearTimeout(scrollTimeoutId);
        setScrollTimeoutId(0);
      };
      var getTopWithEdgeOffset = function(elem) {
        return Math.max(0, container.getTopOf(elem) - edgeOffset);
      };
      var scrollToY = function(targetY, duration, onDone) {
        if (stopScroll(), 0 === duration || duration && duration < 0 || isNativeSmoothScrollEnabledOn(container.body)) {
          container.toY(targetY);
          if (onDone) {
            onDone();
          }
        } else {
          var startY = container.getY();
          var delta = Math.max(0, targetY) - startY;
          var start = (new Date).getTime();
          duration = duration || Math.min(Math.abs(delta), defaultDuration);
          (function loopScroll() {
            setScrollTimeoutId(setTimeout(function() {
              var max = Math.min(1, ((new Date).getTime() - start) / duration);
              var y = Math.max(0, Math.floor(startY + delta * (max < .5 ? 2 * max * max : max * (4 - 2 * max) - 1)));
              container.toY(y);
              if (max < 1 && container.getHeight() + y < container.body.scrollHeight) {
                loopScroll();
              } else {
                setTimeout(stopScroll, 99);
                if (onDone) {
                  onDone();
                }
              }
            }, 9));
          })();
        }
      };
      var scrollToElem = function(elem, duration, onDone) {
        scrollToY(getTopWithEdgeOffset(elem), duration, onDone);
      };
      return {
        setup : function(newDefaultDuration, newEdgeOffset) {
          return (0 === newDefaultDuration || newDefaultDuration) && (defaultDuration = newDefaultDuration), (0 === newEdgeOffset || newEdgeOffset) && (edgeOffset = newEdgeOffset), {
            defaultDuration : defaultDuration,
            edgeOffset : edgeOffset
          };
        },
        to : scrollToElem,
        toY : scrollToY,
        intoView : function(elem, duration, onDone) {
          var elemHeight = elem.getBoundingClientRect().height;
          var elemBottom = container.getTopOf(elem) + elemHeight;
          var containerHeight = container.getHeight();
          var y = container.getY();
          var containerBottom = y + containerHeight;
          if (getTopWithEdgeOffset(elem) < y || elemHeight + edgeOffset > containerHeight) {
            scrollToElem(elem, duration, onDone);
          } else {
            if (elemBottom + edgeOffset > containerBottom) {
              scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone);
            } else {
              if (onDone) {
                onDone();
              }
            }
          }
        },
        center : function(elem, duration, result, context) {
          scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight() / 2 + (result || elem.getBoundingClientRect().height / 2)), duration, context);
        },
        stop : stopScroll,
        moving : function() {
          return !!scrollTimeoutId;
        },
        getY : container.getY,
        getTopOf : container.getTopOf
      };
    };
    var docElem = document.documentElement;
    var getDocY = function() {
      return window.scrollY || docElem.scrollTop;
    };
    var zenscroll = makeScroller({
      body : document.scrollingElement || document.body,
      toY : function(y) {
        window.scrollTo(0, y);
      },
      getY : getDocY,
      getHeight : function() {
        return window.innerHeight || docElem.clientHeight;
      },
      getTopOf : function(elem) {
        return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop;
      }
    });
    if (zenscroll.createScroller = function(scrollContainer, defaultDuration, edgeOffset) {
      return makeScroller({
        body : scrollContainer,
        toY : function(y) {
          scrollContainer.scrollTop = y;
        },
        getY : function() {
          return scrollContainer.scrollTop;
        },
        getHeight : function() {
          return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight);
        },
        getTopOf : function(elem) {
          return elem.offsetTop;
        }
      }, defaultDuration, edgeOffset);
    }, "addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {
      var reverseName = "history" in window && "pushState" in history;
      var reverseIsSingle = reverseName && "scrollRestoration" in history;
      if (reverseIsSingle) {
        history.scrollRestoration = "auto";
      }
      window.addEventListener("load", function() {
        if (reverseIsSingle) {
          setTimeout(function() {
            history.scrollRestoration = "manual";
          }, 9);
          window.addEventListener("popstate", function(event) {
            if (event.state && "zenscrollY" in event.state) {
              zenscroll.toY(event.state.zenscrollY);
            }
          }, false);
        }
        if (window.location.hash) {
          setTimeout(function() {
            var edgeOffset = zenscroll.setup().edgeOffset;
            if (edgeOffset) {
              var targetElem = document.getElementById(window.location.href.split("#")[1]);
              if (targetElem) {
                var height = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset);
                var y = zenscroll.getY() - height;
                if (0 <= y && y < 9) {
                  window.scrollTo(0, height);
                }
              }
            }
          }, 9);
        }
      }, false);
      var rxp = new RegExp("(^|\\s)noZensmooth(\\s|$)");
      window.addEventListener("click", function(event) {
        var el = event.target;
        for (; el && "A" !== el.tagName;) {
          el = el.parentNode;
        }
        if (!(!el || 1 !== event.which || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey)) {
          if (reverseIsSingle) {
            var pushData = history.state && "object" == typeof history.state ? history.state : {};
            pushData.zenscrollY = zenscroll.getY();
            try {
              history.replaceState(pushData, "");
            } catch (e) {
            }
          }
          var path = el.getAttribute("href") || "";
          if (0 === path.indexOf("#") && !rxp.test(el.className)) {
            var targetY = 0;
            var targetElem = document.getElementById(path.substring(1));
            if ("#" !== path) {
              if (!targetElem) {
                return;
              }
              targetY = zenscroll.getTopOf(targetElem);
            }
            event.preventDefault();
            var onDone = function() {
              window.location = path;
            };
            var edgeOffset = zenscroll.setup().edgeOffset;
            if (edgeOffset) {
              targetY = Math.max(0, targetY - edgeOffset);
              if (reverseName) {
                onDone = function() {
                  history.pushState({}, "", path);
                };
              }
            }
            zenscroll.toY(targetY, null, onDone);
          }
        }
      }, false);
    }
    return zenscroll;
  }();
  if (!(void 0 === (v = "function" == typeof h ? h.apply(s, e) : h))) {
    pkg.exports = v;
  }
}, function(canCreateDiscussions, d, n) {
  function constructor(container, message) {
    this.container = function(source) {
      if (!(source instanceof Element)) {
        throw new TypeError("Theme Sections: Attempted to load section. The section container provided is not a DOM element.");
      }
      if (null === source.getAttribute("data-section-id")) {
        throw new Error("Theme Sections: The section container provided does not have an id assigned to the data-section-id attribute.");
      }
      return source;
    }(container);
    this.id = container.getAttribute("data-section-id");
    this.extensions = [];
    Object.assign(this, function(data) {
      if (void 0 !== data && "object" != typeof data || null === data) {
        throw new TypeError("Theme Sections: The properties object provided is not a valid");
      }
      return data;
    }(message));
    this.onLoad();
  }
  function ctor(name, node) {
    function value(data) {
      constructor.call(this, data, node);
    }
    if ("string" != typeof name) {
      throw new TypeError("Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered");
    }
    if (void 0 !== e[name]) {
      throw new Error('Theme Sections: A section of type "' + name + '" has already been registered. You cannot register the same section type twice');
    }
    return value.constructor = constructor, value.prototype = Object.create(constructor.prototype), value.prototype.type = name, e[name] = value;
  }
  function callBeforeEnter(type, attrs) {
    type = get(type);
    if (void 0 === attrs) {
      attrs = document.querySelectorAll("[data-section-type]");
    }
    attrs = copy(attrs);
    type.forEach(function(childProp) {
      var Element = e[childProp];
      if (void 0 !== Element) {
        attrs = attrs.filter(function(options) {
          return !(traverse(options).length > 0) && (null !== options.getAttribute("data-section-type") && (options.getAttribute("data-section-type") !== childProp || (parent.push(new Element(options)), false)));
        });
      }
    });
  }
  function traverse(o) {
    var fns = [];
    if (NodeList.prototype.isPrototypeOf(o) || Array.isArray(o)) {
      var node = o[0];
    }
    if (o instanceof Element || node instanceof Element) {
      copy(o).forEach(function(fn) {
        fns = fns.concat(parent.filter(function(cb) {
          return cb.container === fn;
        }));
      });
    } else {
      if ("string" == typeof o || "string" == typeof node) {
        get(o).forEach(function(NAME) {
          fns = fns.concat(parent.filter(function(tok) {
            return tok.type === NAME;
          }));
        });
      }
    }
    return fns;
  }
  function getRandomVectors(k) {
    var p;
    var i = 0;
    for (; i < parent.length; i++) {
      if (parent[i].id === k) {
        p = parent[i];
        break;
      }
    }
    return p;
  }
  function get(a) {
    return "*" === a ? a = Object.keys(e) : "string" == typeof a ? a = [a] : a.constructor === constructor ? a = [a.prototype.type] : Array.isArray(a) && a[0].constructor === constructor && (a = a.map(function(e) {
      return e.prototype.type;
    })), a = a.map(function(p_Interval) {
      return p_Interval.toLowerCase();
    });
  }
  function copy(obj) {
    return NodeList.prototype.isPrototypeOf(obj) && obj.length > 0 ? obj = Array.prototype.slice.call(obj) : NodeList.prototype.isPrototypeOf(obj) && 0 === obj.length || null === obj ? obj = [] : !Array.isArray(obj) && obj instanceof Element && (obj = [obj]), obj;
  }
  function Container() {
    this.entries = [];
  }
  function create(s, name) {
    push(s);
    var n = function(s, items) {
      push(s);
      (function(commands) {
        if (!Array.isArray(commands)) {
          throw new TypeError(commands + " is not an array.");
        }
        if (0 === commands.length) {
          return [];
        }
        if (!commands[0].hasOwnProperty("name")) {
          throw new Error(commands[0] + "does not contain name key.");
        }
        if ("string" != typeof commands[0].name) {
          throw new TypeError("Invalid value type passed for name of option " + commands[0].name + ". Value should be string.");
        }
      })(items);
      var env = [];
      return items.forEach(function(request) {
        var i = 0;
        for (; i < s.options.length; i++) {
          if (s.options[i].name.toLowerCase() === request.name.toLowerCase()) {
            env[i] = request.value;
            break;
          }
        }
      }), env;
    }(s, name);
    return function(c, x) {
      return push(c), function(dirPath) {
        if (Array.isArray(dirPath) && "object" == typeof dirPath[0]) {
          throw new Error(dirPath + "is not a valid array of options.");
        }
      }(x), c.variants.filter(function(tabledef) {
        return x.every(function(n, key) {
          return tabledef.options[key] === n;
        });
      })[0] || null;
    }(s, n);
  }
  function push(value) {
    if ("object" != typeof value) {
      throw new TypeError(value + " is not an object.");
    }
    if (0 === Object.keys(value).length && value.constructor === Object) {
      throw new Error(value + " is empty.");
    }
  }
  function render(el, t, url) {
    this.element = el;
    this.product = function(obj) {
      if ("object" != typeof obj) {
        throw new TypeError(obj + " is not an object.");
      }
      if (void 0 === obj.variants[0].options) {
        throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
      }
      return obj;
    }(t);
    url = url || {};
    this._listeners = new Container;
    this._listeners.add(this.element, "submit", this._onSubmit.bind(this, url));
    this.optionInputs = this._initInputs(uboard, url.onOptionChange);
    this.quantityInputs = this._initInputs(nberr, url.onQuantityChange);
    this.propertyInputs = this._initInputs(steam_end, url.onPropertyChange);
  }
  function escape(s, format) {
    function replace(value, decimalSize = 2, yarn_id = ",", suffixSep = ".") {
      if (isNaN(value) || null == value) {
        return 0;
      }
      const units = (value = (value / 100).toFixed(decimalSize)).split(".");
      return units[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + yarn_id) + (units[1] ? suffixSep + units[1] : "");
    }
    if ("string" == typeof s) {
      s = s.replace(".", "");
    }
    let url = "";
    const r = /\{\{\s*(\w+)\s*\}\}/;
    const i = format || "${{amount}}";
    switch(i.match(r)[1]) {
      case "amount":
        url = replace(s, 2);
        break;
      case "amount_no_decimals":
        url = replace(s, 0);
        break;
      case "amount_with_comma_separator":
        url = replace(s, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        url = replace(s, 0, ".", ",");
    }
    return i.replace(r, url);
  }
  function exec(command, source_name) {
    if (null === source_name) {
      return command;
    }
    if ("master" === source_name) {
      return resolve(command);
    }
    const m = command.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
    if (m) {
      const r = command.split(m[0]);
      const meetupMembers = m[0];
      return resolve(`${r[0]}_${source_name}${meetupMembers}`);
    }
    return null;
  }
  function resolve(value) {
    return value.replace(/http(s)?:/, "");
  }
  function format() {
    return JSON.parse(JSON.stringify({
      credentials : "same-origin",
      headers : {
        "X-Requested-With" : "XMLHttpRequest",
        "Content-Type" : "application/json;"
      }
    }));
  }
  function next(ret, data) {
    return fetch(ret, data).then(function(batchResponse) {
      if (!batchResponse.ok) {
        throw batchResponse;
      }
      return batchResponse.json();
    });
  }
  function gatherManifestData() {
    return next("/cart.js", format());
  }
  function cb(count, data) {
    var message = format();
    return data = data || {}, message.method = "POST", message.body = JSON.stringify({
      line : count,
      quantity : data.quantity,
      properties : data.properties
    }), next("/cart/change.js", message);
  }
  function update(data) {
    var message = format();
    return message.method = "POST", message.body = JSON.stringify(data), next("/cart/update.js", message);
  }
  function log(str) {
    if ("string" != typeof str || 2 !== str.split(":").length) {
      throw new TypeError("Theme Cart: Provided key value is not a string with the format xxx:xxx");
    }
  }
  function j(date) {
    if ("number" != typeof date || isNaN(date)) {
      throw new TypeError("Theme Cart: Variant ID must be a number");
    }
  }
  function add(data) {
    if ("object" != typeof data) {
      throw new TypeError("Theme Cart: Options must be an object");
    }
    if (void 0 === data.quantity && void 0 === data.properties) {
      throw new Error("Theme Cart: You muse define a value for quantity or properties");
    }
    if (void 0 !== data.quantity) {
      (function(byteOffset) {
        if ("number" != typeof byteOffset || isNaN(byteOffset)) {
          throw new TypeError("Theme Cart: An object which specifies a quantity or properties value is required");
        }
      })(data.quantity);
    }
    if (void 0 !== data.properties) {
      (function(data) {
        if ("object" != typeof data) {
          throw new TypeError("Theme Cart: Properties must be an object");
        }
      })(data.properties);
    }
  }
  function test(type) {
    return log(type), gatherManifestData().then(function(t) {
      var k = -1;
      return t.items.forEach(function(a, count) {
        k = a.key === type ? count + 1 : k;
      }), -1 === k ? Promise.reject(new Error("Theme Cart: Unable to match line item with provided key")) : k;
    });
  }
  function setup(data) {
    !function(node) {
      if (!(node instanceof HTMLFormElement)) {
        throw new TypeError("Theme Cart: Form must be an instance of HTMLFormElement");
      }
    }(data);
    var body = new FormData(data);
    return j(parseInt(body.get("id"), 10)), function(pkg) {
      var config = format();
      return delete config.headers["Content-Type"], config.method = "POST", config.body = pkg, next("/cart/add.js", config);
    }(body);
  }
  function L(e) {
    return log(e), test(e).then(function(e) {
      return cb(e, {
        quantity : 0
      });
    });
  }
  function acceptComment() {
    return (msg = format()).method = "POST", next("/cart/clear.js", msg);
    var msg;
  }
  function value(result) {
    return update({
      attributes : result
    });
  }
  function Exception() {
    var e = Error.call(this);
    return e.name = "Server error", e.message = "Something went wrong on the server", e.status = 500, e;
  }
  function Response(err) {
    var warn = Error.call(this);
    return warn.name = "Not found", warn.message = "Not found", warn.status = err, warn;
  }
  function ValidationError() {
    var e = Error.call(this);
    return e.name = "Server error", e.message = "Something went wrong on the server", e.status = 500, e;
  }
  function ResilientError(status) {
    var err = Error.call(this);
    return err.name = "Content-Type error", err.message = "Content-Type was not provided or is of wrong type", err.status = status, err;
  }
  function Error(line) {
    var error = Error.call(this);
    return error.name = "JSON parse error", error.message = "JSON syntax error", error.status = line, error;
  }
  function HttpError(status, url, e, message) {
    var err = Error.call(this);
    return err.name = url, err.message = e, err.status = status, err.retryAfter = message, err;
  }
  function NetworkError(error, url, message) {
    var self = Error.call(this);
    return self.name = url, self.message = message, self.status = error, self;
  }
  function ApiError(status, error, message) {
    var err = Error.call(this);
    return err.name = error, err.message = message, err.status = status, err;
  }
  function Context() {
    this.events = {};
  }
  function Event(data) {
    this.eventName = data;
    this.callbacks = [];
  }
  function Storage(opts) {
    this._store = {};
    this._keys = [];
    if (opts && opts.bucketSize) {
      this.bucketSize = opts.bucketSize;
    } else {
      this.bucketSize = 20;
    }
  }
  function callback(data, obj) {
    var buffer = "";
    return obj = obj || null, Object.keys(data).forEach(function(key) {
      var output = key + "=";
      switch(obj && (output = obj + "[" + key + "]"), function(notRegex) {
        return Object.prototype.toString.call(notRegex).slice(8, -1).toLowerCase();
      }(data[key])) {
        case "object":
          buffer = buffer + callback(data[key], obj ? output : key);
          break;
        case "array":
          buffer = buffer + (output + "=" + data[key].join(",") + "&");
          break;
        default:
          if (obj) {
            output = output + "=";
          }
          buffer = buffer + (output + encodeURIComponent(data[key]) + "&");
      }
    }), buffer;
  }
  function f(i) {
    if (!i) {
      throw new TypeError("No config object was specified");
    }
    var item = i;
    this._retryAfter = null;
    this._currentQuery = null;
    this.dispatcher = new Context;
    this.cache = new Storage({
      bucketSize : 40
    });
    this.searchPath = item.search_path || "/search";
    if (item.search_path) {
      delete item.search_path;
    }
    this.configParams = callback(item);
  }
  function search(data) {
    return "string" != typeof data ? null : data.trim().replace(" ", "-").toLowerCase();
  }
  n.r(d);
  constructor.prototype = {
    onLoad : Function.prototype,
    onUnload : Function.prototype,
    onSelect : Function.prototype,
    onDeselect : Function.prototype,
    onBlockSelect : Function.prototype,
    onBlockDeselect : Function.prototype,
    extend : function(i) {
      this.extensions.push(i);
      var t = Object.assign({}, i);
      delete t.init;
      Object.assign(this, t);
      if ("function" == typeof i.init) {
        i.init.apply(this);
      }
    }
  };
  if ("function" != typeof Object.assign) {
    Object.defineProperty(Object, "assign", {
      value : function(n) {
        if (null == n) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var t = Object(n);
        var i = 1;
        for (; i < arguments.length; i++) {
          var x = arguments[i];
          if (null != x) {
            var k;
            for (k in x) {
              if (Object.prototype.hasOwnProperty.call(x, k)) {
                t[k] = x[k];
              }
            }
          }
        }
        return t;
      },
      writable : true,
      configurable : true
    });
  }
  window.Shopify = window.Shopify || {};
  window.Shopify.theme = window.Shopify.theme || {};
  window.Shopify.theme.sections = window.Shopify.theme.sections || {};
  var e = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {};
  var parent = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];
  if (window.Shopify.designMode) {
    document.addEventListener("shopify:section:load", function(event) {
      var sectionId = event.detail.sectionId;
      var child4 = event.target.querySelector('[data-section-id="' + sectionId + '"]');
      if (null !== child4) {
        callBeforeEnter(child4.getAttribute("data-section-type"), child4);
      }
    });
    document.addEventListener("shopify:section:unload", function(event) {
      var sectionId = event.detail.sectionId;
      var suite = event.target.querySelector('[data-section-id="' + sectionId + '"]');
      if ("object" == typeof traverse(suite)[0]) {
        traverse(suite).forEach(function(module) {
          var t = parent.map(function(timeline_mode) {
            return timeline_mode.id;
          }).indexOf(module.id);
          parent.splice(t, 1);
          module.onUnload();
        });
      }
    });
    document.addEventListener("shopify:section:select", function(e) {
      var t = getRandomVectors(e.detail.sectionId);
      if ("object" == typeof t) {
        t.onSelect(e);
      }
    });
    document.addEventListener("shopify:section:deselect", function(evt) {
      var t = getRandomVectors(evt.detail.sectionId);
      if ("object" == typeof t) {
        t.onDeselect(evt);
      }
    });
    document.addEventListener("shopify:block:select", function(e) {
      var t = getRandomVectors(e.detail.sectionId);
      if ("object" == typeof t) {
        t.onBlockSelect(e);
      }
    });
    document.addEventListener("shopify:block:deselect", function(e) {
      var t = getRandomVectors(e.detail.sectionId);
      if ("object" == typeof t) {
        t.onBlockDeselect(e);
      }
    });
  }
  var global = window;
  var $window = (global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.msRequestAnimationFrame, window);
  if (!$window.cancelAnimationFrame) {
    $window.mozCancelAnimationFrame;
  }
  document.documentElement;
  document.createElement("_");
  try {
    var options = Object.defineProperty({}, "passive", {
      get : function() {
        true;
      }
    });
    window.addEventListener("test", null, options);
  } catch (e) {
  }
  if (!Object.keys) {
    Object.keys = function(obj) {
      var objKeys = [];
      var i;
      for (i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
          objKeys.push(i);
        }
      }
      return objKeys;
    };
  }
  if (!("remove" in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
  var jasmine = n(0);
  Container.prototype.add = function(type, name, f) {
    this.entries.push({
      element : type,
      event : name,
      fn : f
    });
    type.addEventListener(name, f);
  };
  Container.prototype.removeAll = function() {
    this.entries = this.entries.filter(function(listener) {
      return listener.element.removeEventListener(listener.event, listener.fn), false;
    });
  };
  var pinSelector = '[name="id"]';
  var uboard = '[name^="options"]';
  var nberr = '[name="quantity"]';
  var steam_end = '[name^="properties"]';
  render.prototype.destroy = function() {
    this._listeners.removeAll();
  };
  render.prototype.options = function() {
    return assetsDirsGroups = this.optionInputs, test = function(e) {
      return e.name = /(?:^(options\[))(.*?)(?:\])/.exec(e.name)[2], e;
    }, assetsDirsGroups.reduce(function(invalid, n) {
      return (n.checked || "radio" !== n.type && "checkbox" !== n.type) && invalid.push(test({
        name : n.name,
        value : n.value
      })), invalid;
    }, []);
    var assetsDirsGroups;
    var test;
  };
  render.prototype.variant = function() {
    return create(this.product, this.options());
  };
  render.prototype.properties = function() {
    var x;
    var t;
    var cookies = (x = this.propertyInputs, t = function(_text) {
      return /(?:^(properties\[))(.*?)(?:\])/.exec(_text)[2];
    }, x.reduce(function(acc, x) {
      return (x.checked || "radio" !== x.type && "checkbox" !== x.type) && (acc[t(x.name)] = x.value), acc;
    }, {}));
    return 0 === Object.entries(cookies).length ? null : cookies;
  };
  render.prototype.quantity = function() {
    return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1;
  };
  render.prototype._setIdInputValue = function(pingErr) {
    var node = this.element.querySelector(pinSelector);
    if (!node) {
      (node = document.createElement("input")).type = "hidden";
      node.name = "id";
      this.element.appendChild(node);
    }
    node.value = pingErr.toString();
  };
  render.prototype._onSubmit = function(editor, e) {
    e.dataset = this._getProductFormEventData();
    if (e.dataset.variant) {
      this._setIdInputValue(e.dataset.variant.id);
    }
    if (editor.onFormSubmit) {
      editor.onFormSubmit(e);
    }
  };
  render.prototype._onFormEvent = function(Symbol) {
    return void 0 === Symbol ? Function.prototype : function(a) {
      a.dataset = this._getProductFormEventData();
      Symbol(a);
    }.bind(this);
  };
  render.prototype._initInputs = function(e, i) {
    return Array.prototype.slice.call(this.element.querySelectorAll(e)).map(function(name) {
      return this._listeners.add(name, "change", this._onFormEvent(i)), name;
    }.bind(this));
  };
  render.prototype._getProductFormEventData = function() {
    return {
      options : this.options(),
      variant : this.variant(),
      properties : this.properties(),
      quantity : this.quantity()
    };
  };
  var m = n(1);
  var model = n.n(m);
  var self = {
    addEvent : function(type, elem, i, fn) {
      type.addEventListener(elem, function(event) {
        if (event.target.matches(i + ", " + i + " *")) {
          fn.apply(event.target.closest(i), arguments);
        }
      }, false);
    },
    forEach : function(sc, path, f) {
      let r = sc.querySelectorAll(path);
      if (r.length) {
        r.forEach(function(canCreateDiscussions) {
          f.apply(r, arguments);
        });
      }
    },
    debounceTime : function(delayTime, scheduler) {
      var timeLinkTraking;
      return function() {
        var cal = this;
        var steps = arguments;
        var o = function() {
          scheduler.apply(cal, steps);
        };
        clearTimeout(timeLinkTraking);
        timeLinkTraking = setTimeout(o, delayTime);
      };
    },
    detectDeviceType : () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
    },
    escape : (encode) => {
      return encode.replace(/[<>&"']/g, function(strUtf8) {
        return "&#" + strUtf8.charCodeAt(0) + ";";
      });
    },
    fadeIn : function(elem, c = 400) {
      if (elem) {
        if (elem.style.opacity = 0, elem.style.filter = "alpha(opacity=0)", elem.style.display = "inline-block", elem.style.visibility = "visible", c) {
          var value = 0;
          var chat_retry = setInterval(function() {
            if ((value = value + 50 / c) >= 1) {
              clearInterval(chat_retry);
              value = 1;
            }
            elem.style.opacity = value;
            elem.style.filter = "alpha(opacity=" + 100 * value + ")";
          }, 50);
        } else {
          elem.style.opacity = 1;
          elem.style.filter = "alpha(opacity=1)";
        }
      }
    },
    fadeOut : function(elem, divisor = 400) {
      if (elem) {
        if (divisor) {
          var curropacity = 1;
          var chat_retry = setInterval(function() {
            if ((curropacity = curropacity - 50 / divisor) <= 0) {
              clearInterval(chat_retry);
              curropacity = 0;
              elem.style.display = "none";
              elem.style.visibility = "hidden";
            }
            elem.style.opacity = curropacity;
            elem.style.filter = "alpha(opacity=" + 100 * curropacity + ")";
          }, 50);
        } else {
          elem.style.opacity = 0;
          elem.style.filter = "alpha(opacity=0)";
          elem.style.display = "none";
          elem.style.visibility = "hidden";
        }
      }
    },
    getCookie : (name) => {
      let pos;
      let result = document.cookie;
      let h = name + "=";
      let i = result.indexOf("; " + h);
      if (-1 == i) {
        if (i = result.indexOf(h), 0 != i) {
          return null;
        }
      } else {
        i = i + 2;
        pos = document.cookie.indexOf(";", i);
        if (-1 == pos) {
          pos = result.length;
        }
      }
      return decodeURI(result.substring(i + h.length, pos));
    },
    getWidthBrowser : function() {
      let result;
      return "number" == typeof window.innerWidth ? result = window.innerWidth : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? result = document.documentElement.clientWidth : document.body && (document.body.clientWidth || document.body.clientHeight) && (result = document.body.clientWidth), result;
    },
    getHeightBrowser : function() {
      let result;
      return "number" == typeof window.innerHeight ? result = window.innerHeight : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? result = document.documentElement.clientHeight : document.body && (document.body.clientWidth || document.body.clientHeight) && (result = document.body.clientHeight), result;
    },
    handle : (ch) => {
      return ch.toLowerCase().replace(/[^\w\s.\//]/gi, "").trim().replace(/[\s.\//]/g, "-");
    },
    isExist : (v) => {
      return null != v && void 0 !== v;
    },
    scrollBarWidth : function() {
      let {
        left : left,
        right : right
      } = document.body.getBoundingClientRect();
      return left + right < window.innerWidth ? window.innerWidth - (left + right) : 0;
    },
    scrollTo : function(a) {
      let wrapper = "string" == typeof a ? document.querySelector(a) : a;
      if (null == wrapper) {
        return;
      }
      wrapper.getBoundingClientRect().top;
      if (null != window.pageYOffset) {
        window.pageYOffset;
      } else {
        window.scrollTop;
      }
      model.a.center(wrapper, 1E3);
    },
    removeSquareBracket : (aShortcut) => {
      return aShortcut.replace(/\[|\]/g, "");
    },
    activeLazyload : (region, action) => {
      return new Promise((saveNotifs, canCreateDiscussions) => {
        region.addEventListener("lazyincludeloaded", (toggler) => {
          action(toggler);
          saveNotifs(true);
        });
      });
    }
  };
  var options = {
    currenciesCallback : function() {
      if ("2" != theme.currency.type) {
        return;
      }
      var name = "";
      var key = "";
      var type = "";
      let ResourceStore = this;
      theme.currency.currenciesCallback = () => {
        if (null == Currency || null == theme.currency) {
          return;
        }
        Currency.format = theme.currency.currency_format;
        name = theme.currency.shopCurrency;
        let field = document.querySelector('select[name="currency"]');
        if (field.value != name) {
          field.value = name;
          field.dispatchEvent(new Event("change"));
          field.closest("form").submit();
        }
        Currency.money_with_currency_format[name] = theme.currency.moneyFormatWithCurrency_strip;
        Currency.money_format[name] = theme.currency.moneyFormat_strip;
        key = name;
        type = Currency.cookie.read();
        let deprecatedStylingMethods = document.querySelectorAll("span.money");
        if (deprecatedStylingMethods.length) {
          deprecatedStylingMethods.forEach((u) => {
            u.setAttribute("data-currency-" + name, u.innerHTML);
          });
        }
        if (null == type) {
          if (name !== key) {
            Currency.convertAll(name, key);
          } else {
            Currency.currentCurrency = key;
          }
          Currency.cookie.write(key);
        } else {
          if (type === name) {
            Currency.currentCurrency = name;
          } else {
            if (void 0 === type) {
              type = key;
            }
            Currency.convertAll(name, type);
            Currency.convertAll(Currency.currentCurrency, type);
          }
        }
        ResourceStore.updateState();
      };
      theme.currency.currenciesCallbackSpecial = (queryScope) => {
        if ("undefined" == typeof Currency || void 0 === theme.currency) {
          return;
        }
        let deprecatedStylingMethods = document.querySelectorAll(queryScope);
        if (deprecatedStylingMethods.length) {
          deprecatedStylingMethods.forEach((u) => {
            u.setAttribute("data-currency-" + name, u.innerHTML);
          });
        }
        Currency.convertAll(name, Currency.cookie.read(), queryScope, theme.currency.currency_format);
      };
    },
    convert : function(sourceUnitName) {
      if ("2" == theme.currency.type && theme.currency && theme.currency.currenciesCallbackSpecial) {
        theme.currency.currenciesCallbackSpecial(sourceUnitName);
      }
    },
    updateState : function() {
      if ("2" != theme.currency.type) {
        return;
      }
      let type = self.getCookie("currency");
      let deprecatedStylingMethods = document.querySelectorAll("[data-currency-code]");
      let metasNeeded = document.querySelectorAll(".btn-currency[data-value]");
      if (type.includes(";")) {
        type = type.split(";")[0];
      }
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((t) => {
          t.textContent = type;
        });
      }
      if (metasNeeded.length) {
        metasNeeded.forEach((activeEl) => {
          if (activeEl.getAttribute("data-value") == type) {
            activeEl.classList.add("active");
          } else {
            activeEl.classList.remove("active");
          }
        });
      }
    },
    initEvents : function() {
      let ResourceStore = this;
      self.addEvent(document, "click", ".btn-currency", (event) => {
        event.preventDefault();
        let value = event.target.getAttribute("data-value");
        switch(theme.currency.type) {
          case "1":
            let form = document.querySelector("form.shopify-currency-form");
            if (null == form) {
              return;
            }
            let selectNode = form.querySelector("select");
            selectNode.value = value;
            selectNode.dispatchEvent(new Event("change"));
            form.submit();
            break;
          case "2":
            if ("undefined" != typeof Currency) {
              Currency.convertAll(Currency.currentCurrency, value);
            }
            ResourceStore.updateState();
        }
      });
      if ("2" == theme.currency.type) {
        theme.currency.currenciesCallback();
      }
    },
    init : function() {
      if (!theme.currency.enable) {
        return;
      }
      this.currenciesCallback();
      this.initEvents();
    }
  };
  var V = 0;
  var template = "#dialogNotify";
  var me = {
    onClick : function(e, t, context = document) {
      let deprecatedStylingMethods = context.querySelectorAll(e);
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach(function(cross, n) {
          cross.addEventListener("click", t);
        });
      }
    },
    isExist : (v) => {
      return null != v && void 0 !== v;
    },
    initDialog : () => {
      self.addEvent(document, "click", "[data-dialog-trigger]", async(event) => {
        event.preventDefault();
        let option = event.target.getAttribute("data-dialog-trigger");
        let state = option.toLowerCase();
        let target = document.querySelector(option);
        if (self.isExist(target)) {
          document.body.classList.add("lazy-loading");
          if (self.isExist(target.querySelector(":scope > .lazyload[data-include]"))) {
            target.classList.add("lazy-active");
            await self.activeLazyload(target, (canCreateDiscussions) => {
              target.classList.remove("lazy-active");
            });
          }
          me.disablePageScroll(true);
          document.body.classList.remove("lazy-loading");
          target.classList.toggle("is-open");
          if (state.includes("menumobile")) {
            document.body.classList.toggle("menuMobile-is-active");
          }
          if (target.classList.contains("is-open")) {
            options.convert(option + " .money");
            if (state.includes("currency") || state.includes("menumobile")) {
              options.updateState();
            }
            if (option.toLowerCase().includes("search")) {
              target.querySelector('input[name="q"]').focus();
            }
          }
        }
      });
      self.addEvent(document, "click", "[data-dialog-close]", (event) => {
        let value = event.target.closest("dialog");
        if (self.isExist(value)) {
          event.preventDefault();
          value.classList.remove("is-open");
          if ("menuMobile" == value.getAttribute("id")) {
            document.body.classList.remove("menuMobile-is-active");
          }
          me.disablePageScroll(false);
        }
      });
    },
    triggerDialog(aShortcut, type = "show") {
      let prettyPrintButton = document.getElementById(aShortcut.replace(/^\W/g, ""));
      hulkVolumediscount.hulkAjaxCart();
      if (null != prettyPrintButton) {
        if ("show" == type) {
          return document.querySelectorAll("dialog.is-open").length && document.querySelectorAll("dialog.is-open").forEach((focusedObj) => {
            focusedObj.classList.remove("is-open");
          }), document.body.classList.contains("menuMobile-is-active") && document.body.classList.remove("menuMobile-is-active"), prettyPrintButton.classList.add("is-open"), void me.disablePageScroll(true);
        }
        prettyPrintButton.classList.remove("is-open");
        me.disablePageScroll(false);
      }
    },
    tabPanel_init : (targetLayers = null) => {
      let base = targetLayers || document;
      let deprecatedStylingMethods = base.querySelectorAll(".featured_group_tab-ui .featured_group_tab-link a");
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((e) => {
          e.addEventListener("click", (event) => {
            event.preventDefault();
            let n = event.currentTarget;
            let name = base.querySelector(n.getAttribute("href"));
            if (!n.closest(".featured_group_tab-link").classList.contains("active") && self.isExist(name)) {
              name.closest(".featured_group_tab-ui").querySelectorAll(".featured_group_tab-pane.active, .featured_group_tab-link.active").forEach((focusedObj, canCreateDiscussions) => {
                focusedObj.classList.remove("active");
              });
              n.closest(".featured_group_tab-link").classList.add("active");
              name.classList.add("active");
            }
          });
        });
      }
    },
    initSlider : function(template) {
      let Y = this;
      let n = template;
      let $target = n.querySelector('input[name="sectionSlideConfig"]');
      let filename = n.querySelectorAll(".slide_ui-element");
      if (!self.isExist(filename) || !self.isExist($target) || null == theme.slider) {
        return;
      }
      let controls = !!$target.getAttribute("data-nav") && JSON.parse($target.getAttribute("data-nav"));
      let nav = !!$target.getAttribute("data-dot") && JSON.parse($target.getAttribute("data-dot"));
      let loop = !!$target.getAttribute("data-loop") && JSON.parse($target.getAttribute("data-loop"));
      let hash = (!!$target.getAttribute("data-auto-width") && JSON.parse($target.getAttribute("data-auto-width")), $target.getAttribute("data-items").split(","));
      let aDraggedText = $target.getAttribute("data-gutters") || "";
      let c = $target.getAttribute("data-item-class");
      aDraggedText = aDraggedText.replace(/[^\d.,]/g, "").split(",");
      let products = n.getAttribute("data-section-type") || "";
      filename.forEach((e, i) => {
        let objectNodeBox = e.closest("div[data-slide-wrapper]") || n;
        e.classList.remove("row", "d-grid");
        let isResponsive = {
          0 : {
            items : +hash[5] || +hash[0],
            gutter : +aDraggedText[5] || +aDraggedText[0],
            center : false
          },
          375 : {
            items : +hash[4] || +hash[0],
            gutter : +aDraggedText[4] || +aDraggedText[0],
            center : false
          },
          576 : {
            items : +hash[3] || +hash[0],
            gutter : +aDraggedText[3] || +aDraggedText[0],
            center : false
          },
          768 : {
            items : +hash[2] || +hash[0],
            gutter : +aDraggedText[2] || +aDraggedText[0],
            center : false
          },
          992 : {
            items : +hash[1] || +hash[0],
            gutter : +aDraggedText[1] || +aDraggedText[0],
            center : false
          },
          1200 : {
            items : +hash[0] || +hash[0],
            gutter : +aDraggedText[0] || +aDraggedText[0],
            center : false
          }
        };
        if ("" != c) {
          i = 0;
          for (; i < e.children.length; i++) {
            e.children[i].className = c;
          }
        }
        let data = {
          container : e,
          items : hash[5],
          gutter : aDraggedText[5],
          slideBy : "page",
          startIndex : 0,
          loop : loop,
          speed : 300,
          edgePadding : 0,
          mouseDrag : true,
          swipeAngle : 30,
          autoplayButtonOutput : false,
          autoplay : false,
          autoplayTimeout : 5E3,
          animateIn : "tns-fadeIn",
          animateOut : "tns-fadeOut",
          controls : controls,
          controlsPosition : "bottom",
          controlsContainer : objectNodeBox.querySelector(".slide_ui-controls--nav"),
          nav : nav,
          navPosition : "bottom",
          responsive : isResponsive,
          preventActionWhenRunning : false,
          preventScrollOnTouch : false,
          onInit : () => {
            if (self.isExist(n.querySelector(".tns-nav"))) {
              n.querySelector(".tns-nav").classList.add("slide_ui-controls", "slide_ui-controls--dot");
            }
            if (products.includes("product")) {
              e.querySelector(".tns-slide-active").classList.add("tns-first");
              e.querySelectorAll(".tns-slide-active")[e.querySelectorAll(".tns-slide-active").length - 1].classList.add("tns-last");
            }
            if (null != n.closest(".layout-full-right")) {
              Y.handleTestimonial(n, "resize");
            }
          }
        };
        let previewLayer = theme.slider(data);
        if (products.includes("product")) {
          previewLayer.events.on("indexChanged", (canCreateDiscussions, n) => {
            e.querySelectorAll(".tns-first, .tns-last").forEach((focusedObj) => {
              focusedObj.classList.remove("tns-first", "tns-last");
            });
            e.querySelector(".tns-slide-active").classList.add("tns-first");
            e.querySelectorAll(".tns-slide-active")[e.querySelectorAll(".tns-slide-active").length - 1].classList.add("tns-last");
          });
        }
      });
    },
    handleTestimonial : function(e, t = null) {
      let touchSystem = this;
      let node = e.querySelector(".calc-container");
      let fakedImg = (e.querySelector(".tns-slider"), e.querySelector(".tns-outer"));
      let o = (e.clientWidth - node.clientWidth) / 2;
      fakedImg.style.cssText = `padding-left: ${o}px !important`;
      if (null != t) {
        window.addEventListener("resize", function(canCreateDiscussions) {
          touchSystem.handleTestimonial(e);
        });
      }
    },
    escape : (encode) => {
      return encode.replace(/[<>&"']/g, function(strUtf8) {
        return "&#" + strUtf8.charCodeAt(0) + ";";
      });
    },
    handle : (ch) => {
      return ch.toLowerCase().replace(/[^\w\s.\//]/gi, "").trim().replace(/[\s.\//]/g, "-");
    },
    removeSquareBracket : (aShortcut) => {
      return aShortcut.replace(/\[|\]/g, "");
    },
    setCookie : (url, c, name) => {
      let expDate = new Date;
      expDate.setTime(expDate.getTime() + 24 * name * 60 * 60 * 1E3);
      let meetupMembers = "expires=" + expDate.toUTCString();
      document.cookie = `${url}=${c}; ${meetupMembers}; path=/`;
    },
    getCookie : (name) => {
      let pos;
      let result = document.cookie;
      let h = name + "=";
      let i = result.indexOf("; " + h);
      if (-1 == i) {
        if (i = result.indexOf(h), 0 != i) {
          return null;
        }
      } else {
        i = i + 2;
        pos = document.cookie.indexOf(";", i);
        if (-1 == pos) {
          pos = result.length;
        }
      }
      return decodeURI(result.substring(i + h.length, pos));
    },
    clickModal : function(options) {
      self.addEvent(document, "click", options, async(event) => {
        event.preventDefault();
        let data = event.target.getAttribute("data-target") || "";
        let entry = document.querySelector(data);
        if ("" != data && self.isExist(entry)) {
          if (entry.classList.contains("active")) {
            entry.classList.remove("active");
            me.disablePageScroll(false);
          } else {
            entry.classList.add("active");
            me.disablePageScroll(true);
          }
        }
      });
    },
    disablePageScroll : function(isIron, prev_arg = null) {
      let args = [];
      args.push("modal-opened");
      if (null != prev_arg) {
        args.push(prev_arg);
      }
      let width = self.scrollBarWidth();
      if (isIron) {
        return document.body.style.setProperty("padding-right", width + "px"), void document.body.classList.add(...args);
      }
      document.body.style.removeProperty("padding-right");
      document.body.classList.remove(...args);
    },
    ajaxCall : (url, cb, method, data, type) => {
      if (!window.XMLHttpRequest) {
        return null;
      }
      var xhr = new XMLHttpRequest;
      return method = method || "GET", data = data || null, type = type || "text/plain", xhr.open(method, url), xhr.setRequestHeader("Content-Type", type), xhr.onreadystatechange = function() {
        if (4 === xhr.readyState) {
          if (200 === xhr.status) {
            cb(xhr.responseText);
          } else {
            console.log(xhr);
          }
        }
      }, xhr.send(data), xhr;
    },
    recordRecentView : function(s) {
      let n = me.getCookie("recentViewItem");
      if (null != n) {
        s = s + ("|" + n);
      }
      n = [...new Set(s.split("|"))].join("|");
      me.setCookie("recentViewItem", n);
    },
    recentView : async function() {
      let surface = this;
      let m = +theme.product.recent_total;
      let componentsStr = me.getCookie("recentViewItem");
      let value = document.querySelector("#recentlyView");
      let sub = theme.productSettings ? theme.productSettings.handle : "";
      if (null == componentsStr || !self.isExist(value)) {
        return;
      }
      let s = [...new Set(componentsStr.split("|"))];
      if (s.length > m) {
        s = s.slice(0, m + 1);
      }
      me.setCookie("recentViewItem", s.join("|"));
      let pingPromises = s.map(async(permalink) => {
        let inner = await fetch(`/products/${permalink}.js`);
        return inner.ok ? inner.json() : "";
      });
      let featureObjs = await Promise.all(pingPromises);
      if ((featureObjs.length > 1 || 1 == featureObjs.length && featureObjs.some((child) => {
        return child.handle != sub;
      })) && (value.style.display = "block"), "block" != value.style.display) {
        return;
      }
      let downloads = [];
      featureObjs.forEach(async(item, n) => {
        if (item.handle && item.handle != sub) {
          await downloads.push(surface.renderItem(item, "[data-recent-container]"));
        }
      });
      await Promise.all(downloads);
      me.initSlider(value);
      options.convert("#recentlyView .money");
    },
    renderItem : async(item, search) => {
      let input = "#productCardLayout";
      let id = "[data-item-image]";
      let i = "[data-item-url]";
      let el = "[data-item-title]";
      let option = "[data-item-price]";
      let selector = "[data-item-price-compare]";
      let form = document.querySelector(search);
      let slider = document.querySelector(input) || me.renderSelector;
      if (null == form) {
        return;
      }
      if (null == slider) {
        let e = new Promise((saveNotifs, canCreateDiscussions) => {
          fetch(theme.routes.search_url + "?view=include.product-item").then((t) => {
            t.text().then((notifications) => {
              saveNotifs(notifications);
            });
          });
        });
        let document = await e;
        slider = (new DOMParser).parseFromString(document, "text/html").querySelector(input);
      }
      item.variants[0];
      slider.querySelectorAll(i).forEach((t) => {
        t.setAttribute("href", item.url);
      });
      slider.querySelector(el).innerHTML = item.title;
      slider.querySelector(option).innerHTML = escape(item.price, theme.currency.moneyFormat);
      slider.querySelector(selector).innerHTML = escape(item.compare_at_price, theme.currency.moneyFormat);
      let bestAvailableTerm = item.featured_image || theme.product.default_image;
      slider.querySelector(id).setAttribute("data-src", exec(bestAvailableTerm, "280x"));
      slider.querySelector(id).setAttribute("alt", item.title);
      slider.querySelector(id).classList.add("lazyload");
      if (null == item.compare_at_price) {
        slider.querySelector(selector).classList.add("hide");
      } else {
        slider.querySelector(selector).classList.remove("hide");
      }
      let data = slider.innerHTML;
      return "[data-recent-container]" == search && (data = `<div class="product-section">${data}</div>`), form.insertAdjacentHTML("beforeend", data), true;
    },
    getItems : async(keys, i = 0) => {
      if (i >= keys.length) {
        return;
      }
      let linkedinPdfToJson = await fetch(`/products/${keys[i]}.js`);
      return await linkedinPdfToJson.json();
    },
    moneyFormat : (value) => {
      return escape(value, theme.currency.moneyFormat);
    },
    changePrice : (item, n, e) => {
      let div = n.querySelector(e.price) || {};
      let text = n.querySelector(e.price_sale) || {};
      let p = n.querySelector(e.price_compare) || {};
      let prettyPrintButton = n.querySelector(e.soldout) || {};
      div.classList.add("hide");
      text.classList.add("hide");
      p.classList.add("hide");
      prettyPrintButton.classList.add("hide");
      if (null !== item && item.available) {
        if (item.available) {
          prettyPrintButton.classList.add("hide");
          if (null != item.compare_at_price && item.compare_at_price > item.price) {
            text.innerHTML = escape(item.price, theme.currency.moneyFormat);
            p.innerHTML = escape(item.compare_at_price, theme.currency.moneyFormat);
            text.classList.remove("hide");
            p.classList.remove("hide");
          } else {
            div.innerHTML = escape(item.price, theme.currency.moneyFormat);
            div.classList.remove("hide");
          }
        }
      } else {
        prettyPrintButton.classList.remove("hide");
      }
    },
    easyTimer_HTML : function(example, t) {
      if (t > 9) {
        let r = t.toString().split("");
        r.forEach((canCreateDiscussions, i) => {
          let value = example.querySelector(`.date-value[data-index="${i + 1}"]`);
          if (self.isExist(value)) {
            value.innerHTML = r[i];
          } else {
            let titleElement = example.querySelector(`.date-value[data-index="${i}"]`);
            let CONTAINER_TEMPLATE = titleElement.outerHTML.replace(`data-index="${i}"`, `data-index="${i + 1}"`).replace(titleElement.innerHTML + "</span>", r[i] + "</span");
            example.querySelector(`.date-value[data-index="${i}"]`).insertAdjacentHTML("afterend", CONTAINER_TEMPLATE);
          }
        });
      } else {
        example.querySelector('.date-value[data-index="1"]').innerHTML = 0;
        example.querySelector('.date-value[data-index="2"]').innerHTML = t;
      }
    },
    initSwatch : (context = document) => {
      let deprecatedStylingMethods = context.querySelectorAll('[data-swatch-wrapper] input[type="radio"]');
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((e) => {
          e.addEventListener("change", (canCreateDiscussions) => {
            let value = e.value;
            let selectNode = document.querySelector(e.closest(".swatch-option").getAttribute("data-target"));
            selectNode.value = value;
            selectNode.dispatchEvent(new Event("change"));
          });
        });
      }
    },
    init_EasyTimer : function(e, timeout) {
      let timer = new jasmine.Timer;
      timer.start({
        countdown : true,
        startValues : {
          seconds : timeout
        }
      });
      timer.addEventListener("secondsUpdated", function(canCreateDiscussions) {
        let result = timer.getTimeValues().days;
        let startingOpt = timer.getTimeValues().hours;
        let a = timer.getTimeValues().minutes;
        let cdn_url = timer.getTimeValues().seconds;
        let opt_next = 24 * result + startingOpt;
        if (opt_next > 99 ? me.easyTimer_HTML(e.querySelector(".count-day"), result) : e.querySelector(".count-day").classList.add("hide"), me.easyTimer_HTML(e.querySelector(".count-hrs"), opt_next > 99 ? startingOpt : opt_next), me.easyTimer_HTML(e.querySelector(".count-min"), a), me.easyTimer_HTML(e.querySelector(".count-sec"), cdn_url), !JSON.parse(e.getAttribute("data-hide-label"))) {
          let attributeTemplate = result > 1 ? theme.dateLabel.days : theme.dateLabel.day;
          let diffUnnormalized = startingOpt > 1 ? theme.dateLabel.hours : theme.dateLabel.hour;
          let widgetWithInputTemplate = a > 1 ? theme.dateLabel.minutes : theme.dateLabel.minute;
          let starRatingTemplate = cdn_url > 1 ? theme.dateLabel.seconds : theme.dateLabel.second;
          e.querySelector(".count-day .date-label").innerHTML = attributeTemplate;
          e.querySelector(".count-hrs .date-label").innerHTML = diffUnnormalized;
          e.querySelector(".count-min .date-label").innerHTML = widgetWithInputTemplate;
          e.querySelector(".count-sec .date-label").innerHTML = starRatingTemplate;
        }
        e.classList.add("countdown-loaded");
      });
      timer.addEventListener("targetAchieved", function(canCreateDiscussions) {
        e.classList.add("hide");
      });
    },
    initCountdown : function(e = null) {
      let context = e;
      if (null == context) {
        context = document;
      }
      let deprecatedStylingMethods = context.querySelectorAll(".countdown-time:not(.countdown-loaded)");
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((divChatButton) => {
          if (!divChatButton.classList.contains("countdown-loaded")) {
            let e = divChatButton;
            let date = e.getAttribute("data-date").split("/");
            let upperCount = (new Date(date[2], Number(date[0]) - 1, date[1])).getTime() / 1E3;
            let MAX_UPPERS = (new Date).getTime() / 1E3;
            let timeout = upperCount > MAX_UPPERS ? upperCount - MAX_UPPERS : 0;
            if (timeout > 0) {
              me.init_EasyTimer(e, timeout);
            } else {
              e.remove();
            }
          }
        });
      }
    },
    initCountryProvinceSelector : () => {
      let deprecatedStylingMethods = document.querySelectorAll(".customer_address_table[data-id]");
      if (deprecatedStylingMethods.length) {
        new Shopify.CountryProvinceSelector("address_country_new", "address_province_new", {
          hideElement : "address_province_container_new"
        });
        deprecatedStylingMethods.forEach((quote) => {
          let t = quote.getAttribute("data-id");
          let options = "address_country_" + t;
          let r = "address_province_" + t;
          let i = "address_province_container_" + t;
          new Shopify.CountryProvinceSelector(options, r, {
            hideElement : i
          });
        });
      }
    },
    initVideo : function(page) {
      let deprecatedStylingMethods = page.querySelectorAll("[data-button-video]");
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((e) => {
          e.addEventListener("click", (event) => {
            event.preventDefault();
            let slideEl = event.currentTarget.closest("[data-video-container]");
            let name = slideEl.querySelector("video");
            if (slideEl.classList.contains("video-playing")) {
              slideEl.classList.remove("video-playing");
              if (self.isExist(name)) {
                name.pause();
              }
            } else {
              slideEl.classList.add("video-playing");
              if (self.isExist(name)) {
                name.play();
              }
            }
          });
        });
      }
    },
    scrollToTop : function() {
      let duration = document.documentElement.scrollTop || document.body.scrollTop;
      if (duration > 0) {
        window.requestAnimationFrame(me.scrollToTop);
        window.scrollTo(0, duration - duration / 8);
      }
    },
    resetCollectionPagination : () => {
      if (null != theme.collectionPagination) {
        value({
          pagination : null
        });
      }
    },
    fixReview : function() {
      let deprecatedStylingMethods = document.querySelectorAll(".featured_product__item-review:not(.loaded)");
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((e) => {
          e.addEventListener("lazyincludeloaded", (canCreateDiscussions) => {
            if ("shopify" == theme.product.review_type && "undefined" != typeof SPR) {
              SPR.initDomEls();
              window.loadBadges.call(SPR);
            }
          });
        });
      }
    },
    showNotify : async function(text) {
      let content = document.querySelector(template);
      if (null == content) {
        let mElmOrSub = await fetch(theme.routes.search_url + "?view=dialog.notification");
        let CONTAINER_TEMPLATE = await mElmOrSub.text();
        document.body.insertAdjacentHTML("beforeend", CONTAINER_TEMPLATE);
        content = document.querySelector(template);
      }
      content = content.querySelector("[data-notify-content]");
      content.innerHTML = text || theme.cart.error_add_cart;
      me.triggerDialog(template);
    },
    subscribeForm : function() {
      let allTraps = this;
      allTraps.subscribeFail = () => {
        me.showNotify("Could not connect to the registration server. Please try again later.");
      };
      allTraps.ajaxMailchimp = (ele) => {
        let prefix = ele.getAttribute("action");
        let elm = ele.querySelector('input[type="email"]');
        let id = "&EMAIL=" + encodeURIComponent(elm.value);
        if ("" == prefix) {
          return void allTraps.subscribeFail();
        }
        let script = document.createElement("script");
        script.src = prefix + id;
        document.body.appendChild(script);
        window.mailchimpCallback = function(response) {
          delete window.mailchimpCallback;
          document.body.removeChild(script);
          if ("success" == response.result) {
            elm.value = "";
            me.showNotify(ele.querySelector(".thank_you").innerText || response.msg);
          } else {
            allTraps.subscribeFail();
          }
        };
      };
      let resolvedSourceMapConfigs = [...document.querySelectorAll("form.form-subscribe")];
      if (resolvedSourceMapConfigs.length) {
        resolvedSourceMapConfigs.map((t) => {
          let n = t.getAttribute("data-form-type");
          t.addEventListener("submit", (event) => {
            let url = t.getAttribute("action");
            if ("mailchimp" == n && (event.preventDefault(), allTraps.ajaxMailchimp(t)), "klaviyo" == n && ("" == url || "undefined" == typeof KlaviyoSubscribe)) {
              return event.preventDefault(), void allTraps.subscribeFail();
            }
          });
          if ("klaviyo" == n && "undefined" != typeof KlaviyoSubscribe) {
            KlaviyoSubscribe.attachToForms(t, {
              custom_success_message : true,
              success : function(e) {
                e.find('input[type="email"]').val("");
                me.showNotify(e.find(".thank_you").text());
              }
            });
          }
        });
      }
    },
    initEvents : function() {
      let dialog = this;
      dialog.fixReview();
      dialog.initDialog();
      dialog.subscribeForm();
      dialog.clickModal("a[data-target]");
      Shopify.moneyFormat = function(value, code) {
        return escape(value, code);
      };
      document.body.addEventListener("click", function(mutationEvent) {
        let t = mutationEvent.target;
        if (document.body.classList.contains("modal-opened") && (null != t.closest(".ssw-login") && null == t.closest(".ssw-modal-content") || t.classList.contains("ssw-close"))) {
          document.body.classList.remove("modal-opened");
        }
      }, true);
      self.addEvent(document, "click", ".sb-btn-show", (event) => {
        event.preventDefault();
        let ADD_FRAME_HANDLER_QUERY = event.target.getAttribute("data-target");
        let dayEle = document.querySelector(ADD_FRAME_HANDLER_QUERY) || null;
        if (null != dayEle) {
          dayEle.classList.add("active");
          me.disablePageScroll(true);
        }
      }, false);
      self.addEvent(document, "click", ".sb-btn-close", (event) => {
        event.preventDefault();
        let ADD_FRAME_HANDLER_QUERY = event.target.getAttribute("data-target");
        let new_link_node = document.querySelector(ADD_FRAME_HANDLER_QUERY) || null;
        if (null != new_link_node) {
          new_link_node.classList.remove("active");
          me.disablePageScroll(false);
        }
      }, false);
      let value = document.querySelector("#backToTop");
      if (self.isExist(value)) {
        value.addEventListener("click", (event) => {
          event.preventDefault();
          me.scrollToTop();
        });
        window.addEventListener("scroll", (canCreateDiscussions) => {
          let screenOffsetTop = window.scrollY;
          if (screenOffsetTop > 100 && screenOffsetTop + window.innerHeight < document.body.clientHeight - 100) {
            value.classList.add("active");
          } else {
            value.classList.remove("active");
          }
        }, {
          passive : false
        });
      }
      if (void 0 !== Storage) {
        if (document.body.classList.contains("templateCollection")) {
          sessionStorage.collection = theme.collectionLink;
        }
        if (null != document.querySelector("#continueShopping") && void 0 !== sessionStorage.collection) {
          document.querySelector("#continueShopping").href = sessionStorage.collection;
        }
      }
      self.addEvent(document, "click", ".btn-language", (event) => {
        event.preventDefault();
        let tab = event.target;
        let locationHeader = tab.getAttribute("data-lang");
        let siteName = tab.closest("dialog").getAttribute("data-return");
        let downloadHref = location.origin + locationHeader + siteName;
        window.location.href = downloadHref;
      });
      window.addEventListener("scroll", (canCreateDiscussions) => {
        document.querySelectorAll(".lazyqueue-wait").forEach((e, canCreateDiscussions) => {
          e.classList.add("lazyqueue-active");
        });
      });
      document.body.addEventListener("lazyincludeloaded", (event) => {
        if (null != event.target.closest(".lazyqueue-wait")) {
          event.target.closest(".lazyqueue-wait").classList.remove("lazyqueue-active", "lazyqueue-wait");
        }
      });
      window.addEventListener("load", () => {
        if (dialog.recentView(), window.location.href.includes("shopifypreview")) {
          let name = document.querySelector("#preview-bar-iframe");
          if (self.isExist(name)) {
            name.style.display = "none";
          }
          self.debounceTime(1E3, () => {
            document.body.closest("html").style.paddingBottom = null;
          })();
        }
        if (self.getWidthBrowser() < 768) {
          let name = document.querySelector("#admin-bar-iframe");
          if (self.isExist(name)) {
            name.style.display = "none";
          }
          self.debounceTime(1E3, () => {
            document.body.closest("html").style.paddingBottom = null;
          })();
        }
      });
      window.addEventListener("resize", () => {
        if (V != self.getWidthBrowser()) {
          V = self.getWidthBrowser();
        }
      });
      self.addEvent(document, "click", "#announcement-bar--close", (event) => {
        event.preventDefault();
        let data = event.target.closest("[data-section-type]");
        if (self.isExist(data)) {
          self.fadeOut(data);
        }
      });
    },
    init : function() {
      V = self.getWidthBrowser();
      this.initEvents();
      this.initCountdown();
      this.initCountryProvinceSelector();
      this.resetCollectionPagination();
    }
  };
  var _ = me;
  const existsFileSync = options.convert;
  var storage = {
    settings : {
      dialog : "cartNoti",
      cartDrawer : "cartShopping",
      cartCount : "[data-cart-count]",
      total : "[data-cart-total]",
      removeItem : "[data-item-remove]",
      removeAll : "[data-cart-remove-all]",
      waitingClass : "cart-waiting",
      cartBody : "[data-cart-body]",
      lineItem : "[data-line-item]",
      itemKey : "[data-item-key]",
      itemLinePrice : "[data-item-line-price]",
      itemQty : "[data-item-qty]",
      replaceContent : "[data-cart-replace]",
      cartAction : theme.cart.action || "cart",
      locale : "/" == theme.routes.root_url ? "" : theme.routes.root_url
    },
    init : function() {
      this.initEvents();
    },
    initEvents : function() {
      let that = this;
      let obj = that.settings;
      document.getElementById(obj.dialog);
      self.addEvent(document, "click", ".add-to-cart", async(event) => {
        let n = event.target;
        if (n.classList.contains("btn-require-options")) {
          return event.preventDefault(), alert("Some required options have been left empty, unselected, or wrongly filled", "required-options"), self.scrollTo(document.querySelector(".product-form-cart [data-product-form]")), false;
        }
        if (theme.cart.ajax && "cart" != obj.cartAction) {
          if (event.preventDefault(), that.buttonLoading(n), null != n.closest(obj.replaceContent)) {
            let HTMLLIElement = n.closest(obj.replaceContent).dataset.itemKey;
            try {
              await L(HTMLLIElement);
            } catch (e) {
              console.log(e);
            }
          }
          that.addCart(n);
        }
      });
      self.addEvent(document, "click", ".btn-link-cart:not(.soldout)", (event) => {
        event.preventDefault();
        let area = event.target;
        let name = area.closest("[data-product-card]");
        if (that.buttonLoading(area), !self.isExist(name)) {
          return;
        }
        let query = name.querySelector('form button[type="submit"]');
        if (self.isExist(query)) {
          query.click();
        }
      });
      self.addEvent(document, "click", '[data-dialog-trigger="#cartShopping"]', async(canCreateDiscussions) => {
        await that.getCartDrawer();
		that.updateCart();
        _.triggerDialog(that.settings.cartDrawer);
      });
      if (theme.cart.ajax_change_qty) {
        self.addEvent(document, "keyup", "[data-quantity] input", self.debounceTime(300, (event) => {
          event.preventDefault();
          let e = event.target;
          let r = (e.value, +e.value || 1);
          let g = +e.getAttribute("min") || 0;
          if (!e.hasAttribute("disabled")) {
            if (r < g) {
              e.value = g;
            }
            if (e.hasAttribute(obj.itemKey.replace(/\[|\]/g, ""), "") && r >= g) {
              that.quantityChange(e);
            }
          }
        }));
      }
      self.addEvent(document, "click", "[data-quantity] a.qty-plus, [data-quantity] a.qty-minus", self.debounceTime(0, (event) => {
        event.preventDefault();
        let speedDial = event.target;
        let g = speedDial.closest("[data-quantity]").querySelector("input");
        let entrytype = +g.value;
        let n = +g.value;
        let nMax = +g.getAttribute("min") || 0;
        let c = +g.getAttribute("max") || null;
        if (!g.hasAttribute("disabled")) {
          if (speedDial.classList.contains("qty-plus")) {
            if (null != c && n + 1 > c) {
              return that.currentLine = speedDial.closest(obj.lineItem), void that.showNotify();
            }
            n = n + 1;
          } else {
            if (n > nMax) {
              n = n - 1;
            }
          }
          g.value = n;
          if (theme.cart.ajax_change_qty && g.hasAttribute(obj.itemKey.replace(/\[|\]/g, ""), "") && n >= nMax && entrytype != n) {
            if (null !== that.waitQuantityUpdate) {
              clearTimeout(that.waitQuantityUpdate);
            }
            that.waitQuantityUpdate = setTimeout(function() {
              that.quantityChange(g);
              that.waitQuantityUpdate = null;
            }, 500);
          }
        }
      }));
      self.addEvent(document, "click", obj.removeItem, (event) => {
        event.preventDefault();
        let r = event.target;
        let x2 = r.getAttribute("data-item-key");
        r.classList.add("running");
        self.fadeOut(r.closest(obj.lineItem));
        L(x2).then((data) => {
          r.closest(obj.lineItem).remove();
          if ("cart" == theme.template) {
            that.updateCart(data);
          } else {
            that.updateCartState(data);
          }
        }).catch((e) => {
          console.log(e);
        });
      });
      self.addEvent(document, "click", ".clear-cart-items", (event) => {
        event.preventDefault();
        acceptComment().then((data) => {
          that.updateCart(data);
        });
      });
      let fn = (event) => {
        event.preventDefault();
        value({
          pagination : null,
          view_cata : null
        }).then((canCreateDiscussions) => {
          window.location.href = "/checkout";
        });
      };
      self.addEvent(document, "click", 'a[href="/checkout"]', fn);
      self.addEvent(document, "click", 'button[name="checkout"]', fn);
      document.querySelector("[data-bundle-submit]");
      self.addEvent(document, "click", "[data-bundle-submit]", (event) => {
        event.preventDefault();
        let n = event.target;
        that.addBundleToCart(n);
      });
      let location_field = document.querySelector('textarea[name="note"]');
      if (null != location_field) {
        location_field.addEventListener("focus", function(canCreateDiscussions) {
          this.closest("div").classList.add("note-active");
        });
        location_field.addEventListener("blur", function(canCreateDiscussions) {
          this.closest("div").classList.remove("note-active");
        });
      }
      let i = document.getElementById("stickyAddCartBtn");
      if (null != i) {
        i.addEventListener("click", function(canCreateDiscussions) {
          if (!(i.hasAttribute("disabled") || i.classList.contains("btn-require-options"))) {
            that.buttonLoading(i);
          }
          document.querySelector("[item-cart]").querySelector('button[type="submit"]').click();
        });
      }
    },
    addCart : function(s) {
      let that = this;
      let view = this.settings;
      let success = s.closest("[data-product-form]");
      if (null !== success) {
        setup(success).then((point) => {
          if ("checkout" != view.cartAction) {
            that.getCartState().then(async function(data) {
              if ("drawer" == view.cartAction) {
                await that.getCartDrawer();
                Array.prototype.forEach.call(document.querySelectorAll(".is-open"), (fieldsetLabel) => {
                  let imgchk = fieldsetLabel.querySelector("[data-dialog-close]");
                  if (null !== imgchk) {
                    imgchk.click();
                  }
                });
                let q = document.querySelector(`#${that.settings.cartDrawer} [name="quantity"][data-variant-id="${point.id}"]`);

                if (null !== q) {
                  q.setAttribute("value", point.quantity);
                } else {
                  let data = await fetch(`${that.settings.locale}/products/${point.handle}/${point.id}?view=include.cart-line-item`);
                  data = await data.text();

                  document.getElementById(that.settings.cartDrawer).querySelector(view.cartBody).insertAdjacentHTML("afterbegin", data);
                  Array.prototype.forEach.call(document.querySelectorAll(".cart-item-block"), (entry, algoCode) => {
                    entry.classList = `${entry.dataset.class} animation-fade-index-${algoCode}`;
                  });

                  existsFileSync(view.cartBody + " .money");
                }
                _.triggerDialog(view.cartDrawer);
              } else {
                let exMap = document.getElementById(that.settings.dialog);
                if (null !== exMap && exMap.remove(), null == document.getElementById("cartDialogStyle")) {
                  let css = document.createElement("link");
                  css.type = "text/css";
                  css.id = "cartDialogStyle";
                  css.rel = "stylesheet";
                  css.media = "all";
                  css.href = theme.resource.cart_dialog.css;
                  document.body.appendChild(css);
                }
                fetch(`${that.settings.locale}/products/${point.handle}/${point.id}?view=include.dialog-cart`).then((e) => {
                  return e.text();
                }).then((gradient) => {
                  document.body.insertAdjacentHTML("beforeend", gradient);
                  _.initSlider(document.getElementById(view.dialog));
                  existsFileSync(`#${view.dialog} .money`);
                  _.triggerDialog(view.dialog);
                });
              }
              that.updateCart(data);
            }).catch((e) => {
              console.error("Error:", e);
              that.showNotify(e);
            });
          } else {
            window.location.href = "/checkout";
          }
        }, (rawResp) => {
          rawResp.json().then((e) => {
            console.error("Error:", e);
            that.showNotify(e.description);
            that.updateCartState();
          });
        });
      }
    },
    addBundleToCart : function(o) {
      let self = this;
      let view = this.settings;
      let deprecatedStylingMethods = o.closest("[data-bundle-container]").querySelectorAll('input[name="bundleGroup"]:checked');
      if (!deprecatedStylingMethods.length) {
        return;
      }
      o.classList.add(view.waitingClass);
      let cartItems = [];
      deprecatedStylingMethods.forEach((e) => {
        cartItems.push({
          id : +e.dataset.id,
          quantity : 1
        });
      });
      fetch(theme.routes.cart_add_url + ".js", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          items : cartItems
        })
      }).then((rawResp) => {
        if ("cart" != view.cartAction) {
          if ("checkout" != view.cartAction) {
            rawResp.json().then(async(e) => {
              if ("drawer" == view.cartAction) {
                if (422 == e.status) {
                  self.showNotify(e.description);
                } else {
                  await self.getCartDrawer();
                  let subs = [];
                  if (e.items.length && e.items.forEach(async(point) => {
                    let q = document.querySelector(`#${self.settings.cartDrawer} [name="quantity"][data-item-key="${point.key}"]`);
                    if (null !== q) {
                      q.setAttribute("value", point.quantity);
                    } else {
                      subs.push(new Promise((saveNotifs, canCreateDiscussions) => {
                        fetch(`${self.settings.locale}/products/${point.handle}/${point.id}?view=include.cart-line-item`).then((e) => {
                          return e.text();
                        }).then((notifications) => {
                          saveNotifs(notifications);
                        });
                      }));
                    }
                  }), subs.length) {
                    let outChance = await Promise.all(subs);
                    document.getElementById(self.settings.cartDrawer).querySelector(view.cartBody).insertAdjacentHTML("afterbegin", outChance.join(""));
                    Array.prototype.forEach.call(document.querySelectorAll(".cart-item-block"), (entry, algoCode) => {
                      entry.classList = `${entry.dataset.class} animation-fade-index-${algoCode}`;
                    });
                  }
                  _.triggerDialog(view.cartDrawer);
                }
              } else {
                let n = 422 == e.status ? e.description : theme.cart.success_add_cart;
                self.showNotify(n);
              }
              let data = await self.getCartState();
              self.updateCart(data);
            }).catch((e) => {
              console.log(e);
            });
          } else {
            window.location.href = "/checkout";
          }
        } else {
          window.location.href = theme.routes.cart_url;
        }
      }).catch((canCreateDiscussions) => {
        console.error("Error:", error);
        self.showNotify(error);
        o.classList.remove(view.waitingClass);
        self.updateCartState();
      });
    },
    quantityChange : function(o) {
      let self = this;
      let p = o.getAttribute(self.settings.itemKey.replace(/\[|\]/g, ""));
      let value = +o.value;
      (function(param, el) {
        return log(param), add(el), test(param).then(function(e) {
          return cb(e, el);
        });
      })(p, {
        quantity : value
      }).then((data) => {
        let val = data.items.find((data) => {
          return data.key == p;
        }).quantity;
        if (val == value) {
          storage.updateCart(data);
        } else {
          o.setAttribute("value", val);
          self.currentLine = o.closest(self.settings.lineItem);
          o.value = val;
          self.showNotify();
        }
      });
    },
    buttonLoading : function(g, t = true) {
      let n = this.settings.waitingClass;
      if (t) {
        g.classList.add(n);
      } else {
        g.classList.remove(n);
      }
    },
    getCartState : function() {
      return new Promise((saveNotifs, obtainGETData) => {
        gatherManifestData().then(async(notifications) => {
          saveNotifs(notifications);
        }).catch((val) => {
          obtainGETData(val);
        });
      });
    },
    getCartDrawer : function() {
      let saveResourceAction = this;
      let t = document.getElementById(saveResourceAction.settings.cartDrawer);
      return new Promise((saveNotifs, obtainGETData) => {
        if (null === t) {
          if (null == document.getElementById("cartDrawerStyle")) {
            let css = document.createElement("link");
            css.type = "text/css";
            css.id = "cartDrawerStyle";
            css.rel = "stylesheet";
            css.media = "all";
            css.href = theme.resource.cart_drawer.css;
            document.body.appendChild(css);
          }
          fetch(theme.routes.search_url + "?view=include.cart-drawer").then((e) => {
            return e.text();
          }).then((gradient) => {
            document.body.insertAdjacentHTML("beforeend", gradient);
            existsFileSync(`#${saveResourceAction.settings.cartDrawer} .money`);
            saveResourceAction.cartDrawerEl = document.getElementById(saveResourceAction.settings.cartDrawer);
            document.body.classList.remove("lazy-loading");
            saveNotifs(0);
          }).catch((val) => {
            obtainGETData(val);
          });
        } else {
          saveNotifs(0);
        }
      });
    },
    updateCart : async function(cart) {
      let app = this;
      let view = this.settings;
      if ("cart" == theme.template) {
        if (cart.item_count > 0) {
          cart.items.forEach((a) => {
            let $ul = document.querySelector(`[data-item-key="${a.key}"]`);
            if (null != $ul) {
              let div = $ul.closest(view.lineItem).querySelector(view.itemLinePrice);
              if (null != div) {
                div.innerHTML = escape(a.line_price, theme.currency.moneyFormat);
              }
            }
          });
          existsFileSync(".cart-section span.money");
        } else {
          document.querySelector(view.cartBody).innerHTML = theme.cartPage.empty || "";
        }
      } else {
        if ("drawer" == view.cartAction) {
          
          if (await app.getCartDrawer(), cart.item_count > 0) {
            cart.items.forEach((point) => {
              let q = document.querySelector(`#${app.settings.cartDrawer} [name="quantity"][data-item-key="${point.key}"]`);
              if (null != q) {
                q.setAttribute("value", point.quantity);
              }
            });
            let exMap = document.getElementById("cart-drawer-empty");
            if (null !== exMap) {
              exMap.remove();
            }
            app.cartDrawerEl.querySelector(view.removeAll).classList.remove("hide");
            app.cartDrawerEl.querySelector('button[name="checkout"]').classList.remove("hide");
          } else {
            app.cartDrawerEl.querySelector(view.cartBody).innerHTML = `<span id="cart-drawer-empty">${theme.cart.empty}<span>`;
            app.cartDrawerEl.querySelector(view.removeAll).classList.add("hide");
            app.cartDrawerEl.querySelector('button[name="checkout"]').classList.add("hide");
          }
          existsFileSync(`#${view.cartDrawer} .money`);
        }
      }
      hulkVolumediscount.hulkAjaxCart();
      app.updateCartState(cart);
      
    },
    updateCartState : function(cart) {
      let C = this.settings;
      let placeMidpointLine = document.querySelectorAll("." + C.waitingClass);
      let exMap = document.getElementById("lineCartError");
      if (Array.prototype.forEach.call(placeMidpointLine, (e) => {
        storage.buttonLoading(e, false);
      }), null != exMap && exMap.remove(), null == cart) {
        return;
      }
      let drawLineGroup = document.querySelectorAll(C.cartCount);
      let drawPrevious = document.querySelectorAll(C.total);
      Array.prototype.forEach.call(drawLineGroup, (order) => {
        order.innerHTML = cart.item_count;
      });
      Array.prototype.forEach.call(drawPrevious, (result) => {
        result.innerHTML = '<span class="hulkapps-cart-original-total">' + escape(cart.total_price, theme.currency.moneyFormat) + '</span>';
      });
      existsFileSync(C.total + " .money");
    },
    showNotify : async function(text, t = null) {
      let self = this;
      let r = self.settings;
      let entite = text || theme.cart.error_add_cart;
      let exMap = document.getElementById("lineCartError");
      if (null != exMap && exMap.remove(), null != self.currentLine) {
        return self.currentLine.insertAdjacentHTML("beforeend", `<span id="lineCartError">${entite}</span>`), void(self.currentLine = null);
      }
      let a = document.getElementById("dialogNotify");
      if (null != a) {
        a.remove();
      }
      let mElmOrSub = await fetch(theme.routes.search_url + "?view=dialog.notification");
      let CONTAINER_TEMPLATE = await mElmOrSub.text();
      document.body.insertAdjacentHTML("beforeend", CONTAINER_TEMPLATE);
      a = document.getElementById("dialogNotify");
      if (null != t) {
        a.dataset.dialogType = t;
      }
      a = a.querySelector("[data-notify-content]");
      a.innerHTML = entite;
      _.triggerDialog("dialogNotify");
      Array.prototype.forEach.call(document.querySelectorAll("." + r.waitingClass), (e) => {
        storage.buttonLoading(e, false);
      });
      
    }
  };
  var view = storage;
  Context.prototype.on = function(event, fn) {
    var handler = this.events[event];
    if (!handler) {
      handler = new Event(event);
      this.events[event] = handler;
    }
    handler.registerCallback(fn);
  };
  Context.prototype.off = function(name, id) {
    var e = this.events[name];
    if (e && e.callbacks.indexOf(id) > -1) {
      e.unregisterCallback(id);
      if (0 === e.callbacks.length) {
        delete this.events[name];
      }
    }
  };
  Context.prototype.dispatch = function(eventName, event) {
    var ce = this.events[eventName];
    if (ce) {
      ce.fire(event);
    }
  };
  Event.prototype.registerCallback = function(callback) {
    this.callbacks.push(callback);
  };
  Event.prototype.unregisterCallback = function(id) {
    var i = this.callbacks.indexOf(id);
    if (i > -1) {
      this.callbacks.splice(i, 1);
    }
  };
  Event.prototype.fire = function(context) {
    this.callbacks.slice(0).forEach(function($) {
      $(context);
    });
  };
  Storage.prototype.set = function(name, data) {
    if (this.count() >= this.bucketSize) {
      var item = this._keys.splice(0, 1);
      this.delete(item);
    }
    return this._keys.push(name), this._store[name] = data, this._store;
  };
  Storage.prototype.get = function(contactId) {
    return this._store[contactId];
  };
  Storage.prototype.has = function(name) {
    return Boolean(this._store[name]);
  };
  Storage.prototype.count = function() {
    return Object.keys(this._store).length;
  };
  Storage.prototype.delete = function(key) {
    var hasLocked = Boolean(this._store[key]);
    return delete this._store[key], hasLocked && !this._store[key];
  };
  var _xhrRequest;
  var timeout;
  var _takingTooLongTimeout;
  var processRequests = (_xhrRequest = function(params, method, url, error, cb) {
    var xhr = new XMLHttpRequest;
    var eurl = params + "/suggest.json";
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
      } else {
        var sGroup = xhr.getResponseHeader("Content-Type");
        if (xhr.status >= 500) {
          return void cb(new ValidationError);
        }
        if (404 === xhr.status) {
          return void cb(new Response(xhr.status));
        }
        if ("string" != typeof sGroup || null === sGroup.toLowerCase().match("application/json")) {
          return void cb(new ResilientError(xhr.status));
        }
        if (417 === xhr.status) {
          try {
            var e = JSON.parse(xhr.responseText);
            cb(new NetworkError(xhr.status, e.message, e.description));
          } catch (e) {
            cb(new Error(xhr.status));
          }
          return;
        }
        if (422 === xhr.status) {
          try {
            var error = JSON.parse(xhr.responseText);
            cb(new ApiError(xhr.status, error.message, error.description));
          } catch (e) {
            cb(new Error(xhr.status));
          }
          return;
        }
        if (429 === xhr.status) {
          try {
            var firstError = JSON.parse(xhr.responseText);
            cb(new HttpError(xhr.status, firstError.message, firstError.description, xhr.getResponseHeader("Retry-After")));
          } catch (e) {
            cb(new Error(xhr.status));
          }
          return;
        }
        if (200 === xhr.status) {
          try {
            var parser = JSON.parse(xhr.responseText);
            parser.query = url;
            error(parser);
          } catch (e) {
            cb(new Error(xhr.status));
          }
          return;
        }
        try {
          var resp = JSON.parse(xhr.responseText);
          cb(new Exception(xhr.status, resp.message, resp.description));
        } catch (e) {
          cb(new Error(xhr.status));
        }
      }
    };
    xhr.open("get", eurl + "?q=" + encodeURIComponent(url) + "&" + method);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
  }, timeout = 10, _takingTooLongTimeout = null, function() {
    var _whitespaceCharClass = this;
    var original_arguments = arguments;
    clearTimeout(_takingTooLongTimeout);
    _takingTooLongTimeout = setTimeout(function() {
      _takingTooLongTimeout = null;
      _xhrRequest.apply(_whitespaceCharClass, original_arguments);
    }, timeout || 0);
  });
  f.SEARCH_PATH = "/search";
  f.TYPES = {
    PRODUCT : "product",
    PAGE : "page",
    ARTICLE : "article",
    COLLECTION : "collection"
  };
  f.FIELDS = {
    AUTHOR : "author",
    BODY : "body",
    PRODUCT_TYPE : "product_type",
    TAG : "tag",
    TITLE : "title",
    VARIANTS_BARCODE : "variants.barcode",
    VARIANTS_SKU : "variants.sku",
    VARIANTS_TITLE : "variants.title",
    VENDOR : "vendor"
  };
  f.UNAVAILABLE_PRODUCTS = {
    SHOW : "show",
    HIDE : "hide",
    LAST : "last"
  };
  f.prototype.query = function(value) {
    try {
      !function(data) {
        var error;
        if (null == data) {
          throw (error = new TypeError("'query' is missing")).type = "argument", error;
        }
        if ("string" != typeof data) {
          throw (error = new TypeError("'query' is not a string")).type = "argument", error;
        }
      }(value);
    } catch (error) {
      return void this.dispatcher.dispatch("error", error);
    }
    if ("" === value) {
      return this;
    }
    this._currentQuery = search(value);
    var error = this.cache.get(this._currentQuery);
    return error ? (this.dispatcher.dispatch("success", error), this) : (processRequests(this.searchPath, this.configParams, value, function(data) {
      this.cache.set(search(data.query), data);
      if (search(data.query) === this._currentQuery) {
        this._retryAfter = null;
        this.dispatcher.dispatch("success", data);
      }
    }.bind(this), function(error) {
      if (error.retryAfter) {
        this._retryAfter = error.retryAfter;
      }
      this.dispatcher.dispatch("error", error);
    }.bind(this)), this);
  };
  f.prototype.on = function(event, callback) {
    return this.dispatcher.on(event, callback), this;
  };
  f.prototype.off = function(name, handler) {
    return this.dispatcher.off(name, handler), this;
  };
  const transferArr = [13, 38, 40, 27, 8];
  const o = theme.search;
  const GET_USER_PROFILE_SUCCESS = "product" == o.type ? ["product"] : ["product", "collection", "article", "page"];
  var obj = new f({
    search_path : theme.routes.search_url,
    resources : {
      type : GET_USER_PROFILE_SUCCESS,
      limit : o.limit,
      options : {
        unavailable_products : o.unavailable_result
      },
      fields : [f.FIELDS.TITLE, f.FIELDS.PRODUCT_TYPE, f.FIELDS.VARIANTS_TITLE]
    }
  });
  obj.on("success", async function(results) {
    module.settings;
    let sysIcons = results.resources.results;
    let animation_promises = [];
    let TRAVIS_API_JOBS_URL = theme.routes.search_url.replace(f.SEARCH_PATH, "");
    for (let i in sysIcons) {
      if (sysIcons[i].length > 0) {
        sysIcons[i].forEach((t) => {
          animation_promises.push(new Promise((saveNotifs, obtainGETData) => {
            let gitBranch = t.handle;
            let a = `${TRAVIS_API_JOBS_URL}/${i}/${gitBranch}?view=include.search-item`;
            if ("articles" === i) {
              gitBranch = t.url.slice(0, t.url.indexOf(t.handle) + t.handle.length);
              a = `${TRAVIS_API_JOBS_URL}${gitBranch}?view=include.search-item`;
            }
            fetch(a).then((e) => {
              return e.text();
            }).then((notifications) => {
              return saveNotifs(notifications);
            }).catch((val) => {
              return obtainGETData(val);
            });
          }));
        });
      }
    }
    let outChance = await Promise.all(animation_promises);
    if (null != module.searchResultContainer) {
      module.showResults(outChance.join(""));
    }
  });
  obj.on("error", function(_errorThrown) {
    console.error(_errorThrown);
  });
  var module = {
    settings : {
      resultLayout : "#searchResultLayout",
      searchDialog : "#searchModal",
      container : "[data-search-container]",
      resultTarget : "[data-search-result]",
      type : "[data-result-type]",
      item : ".search-result-item",
      title : "[data-item-title]",
      url : "[data-item-url]",
      image : "[data-item-image]",
      imageWrapper : ".result-item-image",
      price : "[data-item-price]",
      soldout : "[data-item-soldout]",
      submit : "[data-search-submit]"
    },
    refreshSearch : () => {
      let deprecatedStylingMethods = document.querySelectorAll(".search-is-active, .search-is-typing");
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((focusedObj) => {
          focusedObj.classList.remove("search-is-active", "search-is-typing");
        });
      }
    },
    handleEvent : function() {
      let options = this.settings;
      let view = document.querySelector(options.searchDialog);
      self.addEvent(document, "click", 'input[name="q"]', async(mutationEvent) => {
        let box = mutationEvent.target;
        let prettyPrintButton = box.closest(options.container);
        if (null != view.querySelector(".lazyload[data-include]")) {
          view.classList.add("lazyqueue-active");
          await self.activeLazyload(view, () => {
            view.classList.remove("lazyqueue-active");
          });
        }
        module.refreshSearch();
        prettyPrintButton.classList.add("search-is-active");
        if (box.value.length) {
          prettyPrintButton.classList.add("search-is-typing");
        } else {
          prettyPrintButton.classList.remove("search-is-typing");
        }
        if (self.getWidthBrowser() < 992 && !self.isExist(box.closest(options.searchDialog))) {
          _.triggerDialog(options.searchDialog);
        }
      });
      self.addEvent(document, "keyup", 'input[name="q"]', self.debounceTime(500, (event) => {
        if (transferArr.some((keyCode) => {
          return keyCode == event.keyCode;
        })) {
          return;
        }
        let result = event.target;
        let prettyPrintButton = result.closest(options.container);
        if (result.value.length) {
          prettyPrintButton.classList.add("search-is-typing");
        } else {
          prettyPrintButton.classList.remove("search-is-typing");
        }
        module.fetchData(result, result.value);
      }));
      self.addEvent(document, "click", ".btn-search-clear", (event) => {
        event.preventDefault();
        let box = view.querySelector('input[name="q"]');
        let new_link_node = box.closest(options.container);
        view.querySelector(options.resultTarget).innerHTML = "";
        box.value = "";
        box.focus();
        new_link_node.classList.remove("search-is-typing");
      });
      self.addEvent(document, "click", options.submit, (event) => {
        event.preventDefault();
        let iframedoc = event.target.closest(options.container);
        if (null == iframedoc) {
          return;
        }
        let messageForm = iframedoc.querySelector("form");
        if (null != messageForm) {
          messageForm.submit();
        }
      });
      document.body.addEventListener("click", (event) => {
        let deprecatedStylingMethods = document.querySelectorAll(".search-is-active");
        if (deprecatedStylingMethods.length && !self.isExist(event.target.closest(".search-is-active"))) {
          deprecatedStylingMethods.forEach((focusedObj) => {
            focusedObj.classList.remove("search-is-active");
          });
        }
      });
    },
    fetchData : function(option, count) {
      let alpha = theme.search;
      let data = module.settings;
      let i = option.closest(data.container);
      let onPlanet = i.querySelector(data.resultTarget);
      if (this.searchResultContainer = onPlanet, i.classList.contains("search-is-active") || (module.refreshSearch(), i.classList.add("search-is-active")), i.classList.add("search-loading"), 0 == option.value.length) {
        return onPlanet.innerHTML = "", void i.classList.remove("search-loading");
      }
      if (option.value.length > 0 && option.value.length < 2) {
        return onPlanet.innerHTML = `<li class="result-notify">${alpha.notify_character}</li>`, void i.classList.remove("search-loading");
      }
      let model = "product" == alpha.type ? ["product"] : ["product", "article", "page", "collection"];
      theme.routes.search_url;
      alpha.limit;
      alpha.unavailable_result;
      obj.query(count);
    },
    showResults : function(data) {
      let opts = this.settings;
      let container = this.searchResultContainer.closest(opts.container);
      let content_elem = container.querySelector(opts.resultTarget);
      if ("" != data) {
        let item = document.querySelector(opts.resultLayout + " .search-redirect");
        if (self.isExist(item)) {
          data = data + item.outerHTML;
        }
        content_elem.innerHTML = data;
        options.convert(opts.resultTarget + " .money");
      } else {
        content_elem.innerHTML = `<li class="result-notify">${o.no_result}</li>`;
      }
      container.classList.remove("search-loading");
    },
    init : function() {
      if ("search" != theme.template) {
        this.handleEvent();
      }
    }
  };
  var p = module;
  var settings = {
    settings : {
      menuMobile : "#menuMobile",
      subClass : ".sub-opened",
      layerClass : ".mobile-layer",
      activeClass : "active"
    },
    init : function() {
      this.header = document.querySelector("#header-style");
      this.initEvents();
      this.mobileMenu_events();
      this.sticky();
      if (theme.live) {
        this.initMobileBar();
      }
    },
    initEvents : function() {
      let view = this;
      let bufDef = view.settings;
      let obj = view.header.querySelectorAll("li.nav-item");
      if (obj.length && theme.live) {
        let prettyPrintButton = view.header.closest("header");
        if (obj.length) {
          obj.forEach(($elem) => {
            $elem.addEventListener("mouseenter", (n) => {
              if (null != $elem.querySelector(".lazyload-include")) {
                prettyPrintButton.classList.add("nav-is-hover");
                $elem.classList.add("is-hover");
              }
            });
            $elem.addEventListener("mouseleave", (n) => {
              prettyPrintButton.classList.remove("nav-is-hover");
              $elem.classList.remove("is-hover");
            });
          });
        }
      }
      let deprecatedStylingMethods = document.querySelectorAll('nav a[href^="#"]:not([href="#"])');
      if (deprecatedStylingMethods.length) {
        deprecatedStylingMethods.forEach((e) => {
          e.addEventListener("click", (event) => {
            event.preventDefault();
            let t = event.currentTarget.getAttribute("href");
            if (null != document.querySelector(t)) {
              self.scrollTo(t);
            }
          });
        });
      }
      self.addEvent(document.querySelector(bufDef.menuMobile), "click", "a", (event) => {
        let value = event.target.getAttribute("href");
        if (null != value && "#" != value && null != value.match(/^#/g)) {
          event.preventDefault();
          if (null != document.querySelector(value)) {
            self.scrollTo(value);
          }
        }
      });
    },
    setMinHeight : function() {
      let e = document.querySelectorAll(".header-block");
      e = [...e].filter(($subjectInput) => {
        return null != $subjectInput.offsetParent;
      })[0];
      e = e.querySelector(":scope > div");
      if (!document.querySelector(".header-sticky").classList.contains("header-overlay")) {
        e.parentNode.style.setProperty("min-height", e.clientHeight + "px");
      }
    },
    sticky : function() {
      let prettyPrintButton = document.querySelector(".header-sticky");
      if (null == prettyPrintButton) {
        return;
      }
      let caret_insertion = document.querySelectorAll(".header-block");
      caret_insertion = [...caret_insertion].filter(($subjectInput) => {
        return null != $subjectInput.offsetParent;
      })[0];
      let h = caret_insertion.offsetTop + 100;
      window.addEventListener("load", this.setMinHeight);
      window.addEventListener("resize", this.setMinHeight);
      window.addEventListener("scroll", (canCreateDiscussions) => {
        if (window.scrollY > h) {
          prettyPrintButton.classList.add("active");
        } else {
          prettyPrintButton.classList.remove("active");
        }
      }, {
        passive : false
      });
    },
    mobileBar : () => {
      let btnElem = document.getElementById("mobile-bar");
      let t = window.scrollY + self.getHeightBrowser();
      let win_height = document.body.clientHeight;
      if (!(self.getWidthBrowser() >= 992 || null == btnElem || !JSON.parse(btnElem.getAttribute("data-hide-bottom")))) {
        if (t > win_height - 250) {
          btnElem.classList.add("d-none");
        } else {
          btnElem.classList.remove("d-none");
        }
      }
    },
    initMobileBar : function() {
      let e = this;
      window.addEventListener("scroll", () => {
        e.mobileBar();
      }, {
        passive : false
      });
    },
    mobileMenu_events : function() {
      let options = this.settings;
      self.addEvent(document, "click", "[data-submenu-link]", (mutationEvent) => {
        let objectNodeBox = document.querySelector(options.menuMobile);
        let r = mutationEvent.target;
        let i = r.getAttribute("data-submenu-link");
        let name = objectNodeBox.querySelector(`[data-target="${i}"]`);
        if (!self.isExist(name)) {
          return;
        }
        let value = r.closest(`${options.layerClass}.${options.activeClass}:not(.main-layer)`);
        if (self.isExist(value)) {
          value.classList.add(options.subClass.replace(".", ""));
        }
        name.classList.add(options.activeClass);
        r.closest(options.layerClass).classList.remove(options.activeClass);
      });
      self.addEvent(document, "click", ".mobile-layer-title", (event) => {
        let n = document.querySelector(options.menuMobile);
        event.target.closest(options.layerClass).classList.remove(options.activeClass);
        let value = n.querySelector(options.subClass);
        if (self.isExist(value)) {
          return value.classList.remove(options.subClass.replace(".", "")), void value.classList.add(options.activeClass);
        }
        n.querySelector(options.layerClass).classList.add(options.activeClass);
      });
    }
  };
  if ("shopify" == theme.product.review_type) {
    window.badgesCallback = function(collected) {
      var i;
      return i = collected.badges, SPR.$.map(SPR.badgeEls, function(component) {
        var id;
        if (id = SPR.$(component).attr("data-id"), void 0 !== i[id]) {
          return SPR.$(component).replaceWith(i[id]), SPR.triggerEvent("spr:badge:loaded", {
            id : id
          });
        }
      });
    };
    window.loadBadges = function() {
      var sibling;
      var t;
      if (0 < (sibling = this.$.map(this.badgeEls, (t = this, function(component) {
        return t.$(component).attr("data-id");
      }))).length) {
        for (; 0 < sibling.splice(0, 7).length;) {
          let script = document.createElement("script");
          script.src = `${SPR.api_url}/reviews/badges?callback=badgesCallback&shop=${Shopify.shop}&${SPR.$.map(SPR.badgeEls, (quote) => {
            return "&product_ids[]=" + quote.getAttribute("data-id");
          })}`;
          script.addEventListener("load", function() {
            this.remove();
          });
          document.head.append(script);
        }
      }
    };
  }
  ctor("header", {
    onLoad : function() {
      settings.init();
    },
    onBlockSelect : function(e) {
      let jField = e.target;
      jField.closest(".nav-dd, .nav-mm").classList.add("adm-active");
      jField.closest("header").classList.add("nav-is-hover");
    },
    onBlockDeselect : function(e) {
      let jField = e.target;
      jField.closest(".nav-dd, .nav-mm").classList.remove("adm-active");
      jField.closest("header").classList.remove("nav-is-hover");
    }
  });
  ctor("mobile-bar", {
    onLoad : function() {
      this.mobileBar = document.getElementById("mobile-bar");
      settings.initMobileBar();
    },
    onSelect : function() {
      this.mobileBar.classList.add("d-block");
    },
    onDeselect : function() {
      this.mobileBar.classList.remove("d-block");
    },
    onBlockSelect : function() {
      this.mobileBar.classList.add("d-block");
    },
    onBlockDeselect : function() {
      this.mobileBar.classList.add("d-block");
    }
  });
  callBeforeEnter("*");
  _.init();
  options.init();
  view.init();
  p.init();
  theme.addEvent = function(type, elem, value, handler) {
    type.addEventListener(elem, function(event) {
      if (event.target.matches(value + ", " + value + " *")) {
        handler.apply(event.target.closest(value), arguments);
      }
    }, false);
  };
  theme.addEvent(document, "click", ".swt-element", (mutationEvent) => {
    let t = mutationEvent.target;
    let handle = t.closest("[data-card-swatch]");
    let objectNodeBox = t.closest("[data-product-card]");
    let stripeAPIVersion = handle.getAttribute("data-handle");
    let new_link_node = t.closest(".swatch-container").querySelector(".swt-element.active");
    if (null != new_link_node) {
      new_link_node.classList.remove("active");
    }
    t.classList.add("active");
    let pipelets = handle.querySelectorAll(".swt-element.active");
    let values = [];
    pipelets.forEach((day, canCreateDiscussions) => {
      if (day.classList.contains("active")) {
        values.push(day.getAttribute("data-value"));
      }
    });
    let lnkDiv = objectNodeBox.querySelector("[data-item-price]");
    let local = objectNodeBox.querySelector("[data-item-image]");
    let u = objectNodeBox.querySelector('select[name="id"]');
    let self = objectNodeBox.querySelector(".add-to-cart");
    fetch(`${theme.routes.all_products_collection_url}/products/${stripeAPIVersion}.js`).then((rawResp) => {
      rawResp.json().then((data) => {
        let options = data.variants.filter((newCorpusInfo) => {
          return newCorpusInfo.title == values.join(" / ");
        });
        if (!options.length) {
          options = data.variants.filter(($state) => {
            return $state.title.includes(values.join(" / "));
          });
        }
        if (options.length) {
          options = options[0];
          if ("function" == typeof Shopify.moneyFormat && null != lnkDiv) {
            lnkDiv.innerHTML = Shopify.moneyFormat(options.price, theme.currency.moneyFormat);
          }
          if (options.featured_media && null != local) {
            local.style.backgroundImage = `url('${options.featured_media.preview_image.src}')`;
          }
          if (null != u) {
            u.value = options.id;
            if (null != self) {
              if (options.available) {
                self.removeAttribute("disabled");
                self.textContent = theme.cart.available;
                self.classList.remove("soldout");
              } else {
                self.setAttribute("disabled", "disabled");
                self.textContent = theme.cart.soldout;
                self.classList.add("soldout");
              }
            }
          }
        } else {
          if (null != self) {
            self.textContent = theme.cart.unavailable;
          }
        }
      });
    });
  });
}]);
