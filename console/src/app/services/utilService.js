define([], function() {
    "use strict";
    return function() {
        var i18nSubRegRex = /\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;
        this.i18nReplace = function(s, o) {
            if (!s || !o)
                return;
            return s.replace ? s.replace(i18nSubRegRex, function(match, key) {
                return angular.isUndefined(o[key]) ? match : o[key]
            }) : s
        }
    }
});
