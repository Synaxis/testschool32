var isIE = navigator.appVersion.indexOf("MSIE") != -1 ? true : false;
var isWin = navigator.appVersion.toLowerCase().indexOf("win") != -1 ? true : false;
var isOpera = navigator.userAgent.indexOf("Opera") != -1 ? true : false;
function ControlVersion() {
    var a;
    var b;
    var c;
    try {
        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        a = b.GetVariable("$version");
    } catch (c) {}
    if (!a) {
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            a = "WIN 6,0,21,0";
            b.AllowScriptAccess = "always";
            a = b.GetVariable("$version");
        } catch (c) {}
    }
    if (!a) {
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            a = b.GetVariable("$version");
        } catch (c) {}
    }
    if (!a) {
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            a = "WIN 3,0,18,0";
        } catch (c) {}
    }
    if (!a) {
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            a = "WIN 2,0,0,11";
        } catch (c) {
            a = -1;
        }
    }
    return a;
}
function GetSwfVer() {
    var g = -1;
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var f = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var a = navigator.plugins["Shockwave Flash" + f].description;
            var e = a.split(" ");
            var c = e[2].split(".");
            var h = c[0];
            var b = c[1];
            var d = e[3];
            if (d == "") {
                d = e[4];
            }
            if (d[0] == "d") {
                d = d.substring(1);
            } else {
                if (d[0] == "r") {
                    d = d.substring(1);
                    if (d.indexOf("d") > 0) {
                        d = d.substring(0, d.indexOf("d"));
                    }
                }
            }
            var g = h + "." + b + "." + d;
        }
    } else {
        if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) {
            g = 4;
        } else {
            if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) {
                g = 3;
            } else {
                if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) {
                    g = 2;
                } else {
                    if (isIE && isWin && !isOpera) {
                        g = ControlVersion();
                    }
                }
            }
        }
    }
    return g;
}
function DetectFlashVer(f, d, c) {
    versionStr = GetSwfVer();
    if (versionStr == -1) {
        return false;
    } else {
        if (versionStr != 0) {
            if (isIE && isWin && !isOpera) {
                tempArray = versionStr.split(" ");
                tempString = tempArray[1];
                versionArray = tempString.split(",");
            } else {
                versionArray = versionStr.split(".");
            }
            var e = versionArray[0];
            var a = versionArray[1];
            var b = versionArray[2];
            if (e > parseFloat(f)) {
                return true;
            } else {
                if (e == parseFloat(f)) {
                    if (a > parseFloat(d)) {
                        return true;
                    } else {
                        if (a == parseFloat(d)) {
                            if (b >= parseFloat(c)) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
    }
}
function AC_AddExtension(b, a) {
    if (b.indexOf("?") != -1) {
        return b.replace(/\?/, a + "?");
    } else {
        return b + a;
    }
}
function AC_Generateobj(e, d, a) {
    var c = "";
    if (isIE && isWin && !isOpera) {
        c += "<object ";
        for (var b in e) {
            c += b + '="' + e[b] + '" ';
        }
        c += ">";
        for (var b in d) {
            c += '<param name="' + b + '" value="' + d[b] + '" /> ';
        }
        c += "</object>";
    } else {
        c += "<embed ";
        for (var b in a) {
            c += b + '="' + a[b] + '" ';
        }
        c += "> </embed>";
    }
    document.write(c);
}
function AC_FL_RunContent() {
    var a = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    AC_Generateobj(a.objAttrs, a.params, a.embedAttrs);
}
function AC_GetArgs(b, e, g, d, h) {
    var a = new Object();
    a.embedAttrs = new Object();
    a.params = new Object();
    a.objAttrs = new Object();
    for (var c = 0; c < b.length; c = c + 2) {
        var f = b[c].toLowerCase();
        switch (f) {
            case "classid":
                break;
            case "pluginspage":
                a.embedAttrs[b[c]] = b[c + 1];
                break;
            case "src":
            case "movie":
                b[c + 1] = AC_AddExtension(b[c + 1], e);
                a.embedAttrs.src = b[c + 1];
                a.params[g] = b[c + 1];
                break;
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "ondeactivate":
            case "type":
            case "codebase":
                a.objAttrs[b[c]] = b[c + 1];
                break;
            case "id":
            case "width":
            case "height":
            case "align":
            case "vspace":
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "tabindex":
                a.embedAttrs[b[c]] = a.objAttrs[b[c]] = b[c + 1];
                break;
            default:
                a.embedAttrs[b[c]] = a.params[b[c]] = b[c + 1];
        }
    }
    a.objAttrs.classid = d;
    if (h) {
        a.embedAttrs.type = h;
    }
    return a;
}
(function (a) {
    a(document).ready(function () {
        a("body").append('<div id="stupidtooltip-helper" class="stupidtooltip"><div>');
        a("#stupidtooltip-helper").fadeOut(250);
        a("#upgrade-page-form input[title]")
            .each(function () {
                a(this).attr("xtitle", a(this).attr("title")).attr("title", "");
            })
            .focus(function () {
                var b = a(this);
                a("#stupidtooltip-helper")
                    .html(b.attr("xtitle"))
                    .css({ top: b.offset().top + b.innerHeight() + "px", left: b.offset().left + 2 + "px" })
                    .fadeIn(1);
            })
            .blur(function () {
                a("#stupidtooltip-helper").fadeOut(1);
            })
            .attr("title", "");
    });
})(jQuery);
/*
 * file: common/upgrade-form.js
 * author: Anders Karlsson
 *
 * Adding upgrade form interactivity to the upgrade form
 */
(function (a) {
    a(document).ready(function () {
        if (a.site.isModule("user") && a.site.isAction("upgradeAccount")) {
            if (a.site.dependingElements("#agreement, #agreement_lang")) {
                var d = a("#agreement");
                var e = d.attr("src") + "/";
                function c(h) {
                    d.attr("src", e + h);
                }
                a("#agreement_lang").change(function () {
                    c(a(this).val());
                });
                if (a("#agreement_lang").val() !== "en") {
                    c(a("#agreement_lang").val());
                }
            }
            if (a.site.dependingElements("#webpersona_name, #webpersona-message")) {
                var g = a("#webpersona-message"),
                    f = a("#webpersona_name");
                function b(h) {
                    g.removeClass("not-available")
                        .removeClass("available")
                        .addClass(h ? "available" : "not-available")
                        .css({ opacity: 0 })
                        .animate({ opacity: 1 }, "fast");
                }
                g.css({ display: "block", top: f.position().top + 6 + "px", left: f.position().left + f.outerWidth() + 15 + "px" });
                a.magma.ajaxValidator({
                    field: f,
                    minlength: 4,
                    maxlength: 16,
                    validator: function (j, h) {
                        var i = a("#webpersona-url").attr("href");
                        return a.post(
                            i,
                            { personaName: j },
                            function (k) {
                                h(k.valid);
                            },
                            "json"
                        );
                    },
                    reset: function (h) {
                        g.animate({ opacity: 0 }, "fast", h);
                    },
                    valid: function () {
                        b(true);
                    },
                    invalid: function () {
                        b(false);
                    },
                });
            }
            if (a.site.dependingElements("#transactionalEmail")) {
                a("#transactionalEmail input").each(function (h) {
                    this.checked = "checked";
                });
            }
        }
    });
})(jQuery);
(function (b) {
    var c = b.$,
        a = {
            form: {
                init: function (d) {
                    d.find("input[type=text],input[type=password]").bind("blur focus", this.updateForm).keyup(this.hideError).keyup(this.updateForm);
                    d.find("input[type=checkbox], select").change(this.updateForm);
                    d.submit(this.submit);
                    this.validateAll(d);
                    d.find("input[type!=hidden]:first").focus();
                    b.setInterval(function () {
                        c.view.form.validateAll(d);
                        d.find("input[type!=hidden], select").each(function () {
                            c.view.form.handleFeedback(c(this));
                        });
                    }, 1000);
                },
                submit: function (f) {
                    var d = c(this);
                    if (!d.data("submitting")) {
                        d.data("submitting", true);
                        if (c.view.form.validateAll(d)) {
                            b.setTimeout(function () {
                                d.children("button").last().attr("disabled", "disabled").addClass("submitted").addClass("disabled");
                                if (c.browser.msie) {
                                    d.children("button").last().append(c('<div class="spinner"/>'));
                                    c(".spinner").spin({ lines: 25, length: 1, width: 5, radius: 24 });
                                }
                            }, 0);
                            return true;
                        }
                        d.data("submitting", false);
                    }
                    return false;
                },
                updateForm: function () {
                    c.view.form.validateAll(c(this).closest("form"));
                    c.view.form.handleFeedback(c(this));
                },
                validateAll: function (d) {
                    var e = false;
                    d.find("input[type!=hidden], select").each(c.view.form.validate);
                    if (d.find("input.invalid, select.invalid").length === 0) {
                        d.find("button").last().removeAttr("disabled").removeClass("disabled");
                        e = true;
                    } else {
                        d.find("button").last().attr("disabled", "disabled").addClass("disabled");
                    }
                    return e;
                },
                hideError: function () {
                    var d = c(this);
                    if (d.is("select")) {
                        d.siblings(".magmaError:not(.info)").remove();
                    } else {
                        if (d.attr("type") === "text" || d.attr("type") === "password") {
                            d.parent().siblings(".magmaError:not(.info)").remove();
                        } else {
                            if (d.attr("id") === "tos_accept") {
                                d.siblings("label").find(".magmaError:not(.info)").remove();
                            }
                        }
                    }
                },
                handleFeedback: function (d) {
                    if (d.data("dontShowErrors") === undefined || !d.data("dontShowErrors")) {
                        if (d.is("select")) {
                            if (d.is(".valid") && d.siblings(".invalid").length === 0) {
                                d.siblings(".magmaError.info").remove();
                            } else {
                                if (d.siblings(".magmaError.info").length === 0 && d.data("help-text")) {
                                    d.parent().append(c('<span class="magmaError info">' + d.data("help-text") + "</span>"));
                                }
                            }
                        } else {
                            if (d.attr("type") === "text" || d.attr("type") === "password") {
                                if (d.is(".valid")) {
                                    d.parent().siblings(".magmaError.info").remove();
                                } else {
                                    if (d.parent().siblings(".magmaError.info").length === 0 && d.data("help-text")) {
                                        d.parent()
                                            .parent()
                                            .append(c('<span class="magmaError info">' + d.data("help-text") + "</span>"));
                                    }
                                }
                            }
                        }
                    }
                    if (d.attr("id") === "password") {
                        c.view.form.handleFeedback(d.closest("form").find("#password2"));
                    }
                },
                validate: function () {
                    var e = c(this),
                        d = true;
                    switch (e.attr("id")) {
                        case "email":
                            d = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i.test(e.val());
                            break;
                        case "tos_accept":
                            d = e.is(":checked");
                            break;
                        case "hero_name":
                        case "webpersona_name":
                            d = /^[a-zA-Z0-9~\!#\$%\^\(\)_\+\-\=\{\}\[\]\:\.\?]{4,16}$/.test(e.val());
                            break;
                        case "password":
                            if (e.data("login")) {
                                d = /^.{2,30}$/.test(e.val());
                            } else {
                                if (/(?=(.*\d))/.test(e.val())) {
                                    e.removeClass("invalid_no_digit");
                                } else {
                                    e.addClass("invalid_no_digit");
                                    d = false;
                                }
                                if (/(?=(.*[a-z]))/.test(e.val())) {
                                    e.removeClass("invalid_no_lowercase");
                                } else {
                                    e.addClass("invalid_no_lowercase");
                                    d = false;
                                }
                                if (/(?=(.*[A-Z]))/.test(e.val())) {
                                    e.removeClass("invalid_no_uppercase");
                                } else {
                                    e.addClass("invalid_no_uppercase");
                                    d = false;
                                }
                                if (/^.{8,16}$/.test(e.val())) {
                                    e.removeClass("invalid_length");
                                } else {
                                    e.addClass("invalid_length");
                                    d = false;
                                }
                            }
                            break;
                        case "password2":
                            d = e.val() === c("#password").val();
                            break;
                        case "dob_day":
                        case "dob_month":
                        case "dob_year":
                            d = e.val().length > 0;
                            break;
                        case "country":
                            d = e.val() !== "NO_COUNTRY";
                            break;
                        default:
                            return;
                    }
                    if (d && e.hasClass("valid")) {
                    } else {
                        if (d && e.hasClass("invalid")) {
                            e.removeClass("invalid").addClass("valid");
                        } else {
                            if (d) {
                                e.addClass("valid");
                            } else {
                                if (!d && e.hasClass("invalid")) {
                                } else {
                                    if (!d && e.hasClass("valid")) {
                                        e.removeClass("valid").addClass("invalid");
                                    } else {
                                        if (!d) {
                                            e.addClass("invalid");
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (d && e.data("dontShowErrors") !== undefined && e.data("dontShowErrors")) {
                        e.data("dontShowErrors", false);
                    }
                },
            },
            regFlow: {
                register: {
                    init: function () {
                        if (c("#generic-error-container").find(".generic-error").length !== 0) {
                            c("#webpersona_name, #hero_name")
                                .last()
                                .parent()
                                .after('<span class="magmaError">' + c("#generic-error-container").find(".generic-error").find("h2").text() + "</span>");
                        }
                        if (c("#country").val() === "DE") {
                            c("#optin").click();
                        }
                        c.view.form.init(c("#register"));
                    },
                },
                emailCheck: {
                    init: function () {
                        c("#emailCheck")
                            .find("#email")
                            .data("dontShowErrors", true)
                            .blur(function () {
                                c(this).data("dontShowErrors", false);
                            });
                        c.view.form.init(c("#emailCheck"));
                    },
                },
                loginSignup: {
                    init: function () {
                        c("#login_signup").find("#password").data("login", true);
                        c.view.form.init(c("#login_signup"));
                    },
                },
            },
        };
    c.extend({ view: a });
    c(function () {
        c("input[type=checkbox], input[type=radio]").customInput();
        if (c("#emailCheck").length > 0) {
            c.view.regFlow.emailCheck.init();
        } else {
            if (c("#register").length > 0) {
                c.view.regFlow.register.init();
            } else {
                if (c("#login_signup").length > 0) {
                    c.view.regFlow.loginSignup.init();
                }
            }
        }
    });
})(this);
(function (a) {
    a(document).ready(function () {
        var b;
        if (a.site.isModule("user") && a.site.isAction("resetPassword")) {
            b = a("#reset-password :password");
        } else {
            return;
        }
        var d = a.magma.positionElementRelativeTo("#password-warning", b.eq(1), { left: 1, x: 20, center: "y" }).fadeOut();
        d.css({ zIndex: 5 });
        var c = false;
        b.blur(function () {
            var f = b.eq(0).val();
            var e = b.eq(1).val();
            if (f === e) {
                if (c) {
                    c = false;
                    d.fadeOut("fast");
                }
            } else {
                if (f !== "" && e !== "" && !c) {
                    c = true;
                    d.fadeIn("fast");
                }
            }
        });
        randomize();
    });
})(jQuery);
(function (b) {
    var d = b.jQuery,
        c = b._,
        e = b.Backbone,
        a = b.BFH;
    d(function () {
        var h = '<span class="icon_shadow" /><span class="icon_skin"></span><span class="icon_facialHair"></span><span class="icon_hair"></span><span class="facialFeatures"></span>';
        function j(l) {
            d(l).removeClass("disabled").data("disabled", false);
        }
        function f(l) {
            d(l).addClass("disabled").data("disabled", true);
        }
        if (a && a.barbershopSettings) {
            var g = e.Model.extend({
                    defaults: function () {
                        return { hairView: "baseMSGAppearanceHairStyleStats" };
                    },
                }),
                k = e.View.extend({
                    el: "#createHero",
                    template: c.template(d("#hero-template").html() + " "),
                    events: {
                        "click .faction li, .heroClass li, .hair li, .facialHair li, .skinColor li, .hairColor li": "changeAttribute",
                        "click #saveHero": "save",
                        "click #randomHero": "randomize",
                        "click .hairSelector h2": "changeHairTab",
                        "mouseover .faction li, .heroClass li": "changeHelp",
                        "mouseout .faction li, .heroClass li": "defaultHelp",
                        "click .nameSelector #cancelName": "cancelName",
                        "click .nameSelector #chooseName": "chooseName",
                    },
                    initialize: function () {
                        var l = this;
                        this.facialHairOptions = { 1: [], 2: [] };
                        this.hairOptions = { 1: [], 2: [] };
                        this.hairColorOptions = [];
                        this.skinColorOptions = [];
                        this.factionOptions = [];
                        this.heroClassOptions = [];
                        this.model.set("facial_ui_name", parseInt(this.$("#facial_ui_name").val(), 10));
                        this.model.set("baseMSGFactionStats", parseInt(this.$("#baseMSGFactionStats").val(), 10));
                        this.model.set("baseMSGPersonaClassStats", parseInt(this.$("#baseMSGPersonaClassStats").val(), 10));
                        this.model.set("baseMSGAppearanceHairStyleStats", parseInt(this.$("#baseMSGAppearanceHairStyleStats").val(), 10));
                        this.model.set("baseMSGAppearanceSkinToneStats", parseInt(this.$("#baseMSGAppearanceSkinToneStats").val(), 10));
                        this.model.set("haircolor_ui_name", parseInt(this.$("#haircolor_ui_name").val(), 10));
                        this.oldValues = a.barbershopSettings.barbershop && this.model.toJSON();
                        this.model.bind("change", this.render, this);
                        if (a.accountData) {
                            a.accountData.bind("change", this.render, this);
                        }
                        this.$("#facial_ui_name option").each(function () {
                            var n = parseInt(d(this).val(), 10),
                                m = parseInt(d(this).parent("optgroup").attr("label"), 10);
                            l.facialHairOptions[m].push(n);
                            d("<li />")
                                .data("id", n)
                                .addClass("facialHair" + n)
                                .html(h)
                                .appendTo("#createHero .characteristics .facialHair .faction" + m);
                        });
                        this.$("#baseMSGAppearanceHairStyleStats option").each(function () {
                            var n = parseInt(d(this).val(), 10),
                                m = parseInt(d(this).parent("optgroup").attr("label"), 10);
                            l.hairOptions[m].push(n);
                            d("<li />")
                                .data("id", n)
                                .addClass("hair" + n)
                                .html(h)
                                .appendTo("#createHero .characteristics .hair .faction" + m);
                        });
                        this.$("#baseMSGAppearanceSkinToneStats option").each(function () {
                            var m = parseInt(d(this).val(), 10);
                            l.skinColorOptions.push(m);
                            d("<li />")
                                .data("id", m)
                                .addClass("skinColor" + m)
                                .html(h)
                                .prependTo("#createHero .characteristics .skinColor");
                        });
                        c.each([1, 3, 5, 2, 4], function (m) {
                            l.hairColorOptions.push(m);
                            d("<li />")
                                .data("id", m)
                                .addClass("hairColor" + m)
                                .appendTo("#createHero .characteristics .hairColor");
                        });
                        this.$("#baseMSGPersonaClassStats option").each(function () {
                            var m = parseInt(d(this).val(), 10);
                            l.heroClassOptions.push(m);
                            d("<li />")
                                .data("id", m)
                                .addClass("heroClass" + m)
                                .appendTo("#createHero .heroType .heroClass");
                        });
                        this.$("#baseMSGFactionStats option").each(function () {
                            var m = parseInt(d(this).val(), 10);
                            l.factionOptions.push(m);
                            d("<li />")
                                .data("id", m)
                                .addClass("faction" + m)
                                .appendTo("#createHero .heroType .faction");
                        });
                        this.defaultHelp();
                        c.bindAll(this, "changeAttribute");
                    },
                    render: function () {
                        this.$el
                            .removeClass()
                            .addClass("selectedFaction" + this.model.get("baseMSGFactionStats"))
                            .addClass("selectedHeroClass" + this.model.get("baseMSGPersonaClassStats"))
                            .addClass("selectedHair" + this.model.get("baseMSGAppearanceHairStyleStats"))
                            .addClass("selectedFacialHair" + this.model.get("facial_ui_name"))
                            .addClass("selectedHairColor" + this.model.get("haircolor_ui_name"))
                            .addClass("selectedSkinColor" + this.model.get("baseMSGAppearanceSkinToneStats"));
                        if (a.barbershopSettings.barbershop) {
                            this.$el.addClass("barbershop");
                            if (a.accountData.get("_PF") >= parseInt(a.barbershopSettings.price, 10)) {
                                this.$(".fund").hide();
                                if (c.isEqual(this.oldValues, this.model.toJSON())) {
                                    f(this.$("#saveHero").show());
                                } else {
                                    j(this.$("#saveHero").show());
                                }
                            } else {
                                this.$("#saveHero").hide();
                                this.$(".fund").show();
                            }
                        }
                    },
                    remove: function () {
                        e.View.prototype.remove.call(this);
                    },
                    changeAttribute: function (q) {
                        var o = (function () {
                                var s = d(q.currentTarget);
                                if (s.data("id")) {
                                    s = s.closest("li");
                                }
                                return s;
                            })(),
                            n = o.closest("ul"),
                            l = n.data("type"),
                            p = o.data("id"),
                            m,
                            r;
                        if (this.model.get(l) !== p) {
                            this.model.set(l, p);
                            this.$("#" + l).val(p);
                            if (l === "baseMSGFactionStats") {
                                m = c.indexOf(this.hairOptions[p === 1 ? 2 : 1], this.model.get("baseMSGAppearanceHairStyleStats"), true);
                                r = c.indexOf(this.facialHairOptions[p === 1 ? 2 : 1], this.model.get("facial_ui_name"), true);
                                this.model.set("baseMSGAppearanceHairStyleStats", this.hairOptions[p][m]);
                                this.$("#baseMSGAppearanceHairStyleStats").val(this.hairOptions[p][m]);
                                this.model.set("facial_ui_name", this.facialHairOptions[p][r]);
                                this.$("#facial_ui_name").val(this.facialHairOptions[p][r]);
                            }
                            if (l === "baseMSGFactionStats" || l === "baseMSGPersonaClassStats") {
                                this.defaultHelp();
                            }
                        }
                    },
                    changeHelp: function (p) {
                        var m = d(p.target).closest("ul").data("type"),
                            o = d(p.target).data("id"),
                            l = a.barbershopSettings.help[m][o][0],
                            n = a.barbershopSettings.help[m][o][1];
                        this.updateHelp(l, n);
                    },
                    updateHelp: function (m, l) {
                        this.$(".help .header").html(m);
                        this.$(".help .bodyText").html(l);
                    },
                    defaultHelp: function () {
                        var l = a.barbershopSettings.help["default"][0],
                            m = a.barbershopSettings.help["default"][1]
                                .replace("%faction%", a.barbershopSettings.help.baseMSGFactionStats[this.model.get("baseMSGFactionStats")][0])
                                .replace("%heroClass%", a.barbershopSettings.help.baseMSGPersonaClassStats[this.model.get("baseMSGPersonaClassStats")][0]);
                        this.updateHelp(l, m);
                    },
                    chooseName: function (m) {
                        if (d(m.target).data("disabled")) {
                            return;
                        }
                        f(d("#chooseName"));
                        f(d("#cancelName"));
                        var l = this.$(".nameSelector input").val();
                        this.$("#nameCharacterText").val(l);
                        this.$(".nameSelector").siblings(".error").hide();
                        d.ajax({ type: "post", url: a.barbershopSettings.name_url, data: { heroName: l, _token: a.barbershopSettings.token }, dataType: "json" })
                            .success(function () {
                                d(".nameSelector input").after(d('<span class="heroName"/>').text(l)).remove();
                                d("#createHero").submit();
                            })
                            .error(function () {
                                j(d("#chooseName"));
                                j(d("#cancelName"));
                                d(".nameSelector").siblings(".error").show();
                            });
                    },
                    cancelName: function () {
                        this.$(".nameSelector").parent(".overlay").fadeOut();
                        this.$(".nameSelector").siblings(".error").hide();
                        this.$(".help").show();
                        j(d("#saveHero"));
                    },
                    save: function (l) {
                        if (d(l.target).data("disabled")) {
                            return;
                        }
                        f(l.target);
                        if (!c.isEqual(this.oldValues, this.model.toJSON())) {
                            if (a.barbershopSettings.nameRequired) {
                                this.$(".nameSelector").parent(".overlay").show().find(".nameSelector input").focus();
                                this.$(".help").hide();
                                return;
                            }
                            d("#createHero").submit();
                        }
                    },
                    randomize: function () {
                        var l = {
                            baseMSGFactionStats: this.factionOptions[Math.floor(Math.random() * this.factionOptions.length)],
                            baseMSGPersonaClassStats: this.heroClassOptions[Math.floor(Math.random() * this.heroClassOptions.length)],
                            haircolor_ui_name: this.hairColorOptions[Math.floor(Math.random() * this.hairColorOptions.length)],
                            baseMSGAppearanceSkinToneStats: this.skinColorOptions[Math.floor(Math.random() * this.skinColorOptions.length)],
                        };
                        l.baseMSGAppearanceHairStyleStats = this.hairOptions[l.baseMSGFactionStats][Math.floor(Math.random() * this.hairOptions[l.baseMSGFactionStats].length)];
                        l.facial_ui_name = this.facialHairOptions[l.baseMSGFactionStats][Math.floor(Math.random() * this.facialHairOptions[l.baseMSGFactionStats].length)];
                        this.model.set(l);
                        this.$("#baseMSGFactionStats").val(this.model.get("baseMSGFactionStats"));
                        this.$("#baseMSGPersonaClassStats").val(this.model.get("baseMSGPersonaClassStats"));
                        this.$("#haircolor_ui_name").val(this.model.get("haircolor_ui_name"));
                        this.$("#baseMSGAppearanceHairStyleStats").val(this.model.get("baseMSGAppearanceHairStyleStats"));
                        this.$("#baseMSGAppearanceSkinToneStats").val(this.model.get("baseMSGAppearanceSkinToneStats"));
                        this.$("#facial_ui_name").val(this.model.get("facial_ui_name"));
                        this.defaultHelp();
                    },
                    changeHairTab: function (l) {
                        this.$(".hairSelector").removeClass("baseMSGAppearanceHairStyleStats facial_ui_name").addClass(d(l.target).data("tab"));
                    },
                });
            var i = new k({ model: new g() });
            i.render();
        }
    });
})(this);
(function (d) {
    var h = d.jQuery,
        c = d.BFH,
        f = c.Plugin,
        e = c.env.browser,
        a = d.chrome,
        b = d.location,
        g = function () {
            var j = (function () {
                    var k = "";
                    if ((e.firefox && e.version < 4) || (e.ie && e.version < 9)) {
                        k = "topright";
                    } else {
                        if (e.firefox) {
                            k = "topleft";
                        } else {
                            if (e.ie) {
                                k = "bottom";
                            }
                        }
                    }
                    return k;
                })(),
                i = h('<div class="plugin_indicator ' + j + '"></div>').prependTo("body");
            d.setTimeout(function () {
                if (e.ie && e.version >= 9) {
                    i.css("left", h(d).width() / 2 + "px");
                }
                i.fadeIn("slow");
            }, 2000);
        };
    h(function () {
        if (h("body").is(".launchGame")) {
            f.start(undefined, true);
            h(".launch_game .new_content .supported").html('<iframe width="640" height="360" src="//www.youtube.com/embed?listType=playlist&list=PL4D7337BCA9F22ABD&wmode=transparent&autohide=1&showinfo=0" frameborder="0"></iframe>');
        } else {
            if (h("body").is(".installPlugin")) {
                if (!e.chrome) {
                    f.install();
                } else {
                    if (f.chromeWebstoreInstalled()) {
                        b.href = f.params.launchUrl;
                    }
                }
                if (e.firefox && e.version < 4) {
                    h(".supported .firefox3").show();
                } else {
                    if (e.firefox) {
                        h(".supported .firefox").show();
                    } else {
                        if (e.ie && e.version < 9) {
                            h(".supported .ie8").show();
                        } else {
                            if (e.ie) {
                                h(".supported .ie").show();
                            } else {
                                if (e.chrome) {
                                    var j = h(".supported .chrome").show();
                                    if (f.isManualChromeInstallation()) {
                                        j.find(".chrome_uninstall_manual").show();
                                    } else {
                                        j.find(".chrome_webstore").show();
                                    }
                                    var i = j.find("span.install");
                                    i.click(function () {
                                        var k = new Date().getTime();
                                        a.webstore.install(
                                            undefined,
                                            function (l) {
                                                b.href = c.Plugin.params.launchURL;
                                            },
                                            function (m) {
                                                var l = new Date().getTime();
                                                if (l - k < 200) {
                                                    j.find(".chrome_manual").show().siblings("div").hide();
                                                    j.find(".chrome_manual").find("a.install").attr("href", f.settings.chromeUrl);
                                                    i.hide();
                                                }
                                            }
                                        );
                                    });
                                }
                            }
                        }
                    }
                }
                if (!e.chrome) {
                    h(".show_more").click(function () {
                        h(this).parent().siblings(".install_plugin_steps").slideDown();
                        h(".plugin_indicator").hide();
                        h(this).hide();
                        h(".cta").hide();
                        return false;
                    });
                    g();
                }
            }
        }
    });
})(this);
