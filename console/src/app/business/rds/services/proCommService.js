define(["language/rds"], function(i18n) {
    "use strict";
    var service = function() {
        this.instanceId = null;
        this.vmName = null;
        this.userId = null;
        this.disksize = 0;
        this.productData = [];
        this.masterId = null;
        this.masterInfo = {};
        this.engineTypeMap = ["MySQL", "PostgreSQL", "SQLServer", "Taurus"];
        this.processingArr = [100, 500, 502, 600, 700, 701, 702];
        this.creatingArr = [100];
        this.normalArr = [200];
        this.warnArr = [300];
        this.deleteArr = [400];
        this.modifyingArr = [700, 701];
        this.allStatusArr = [100, 200, 300, 400, 500, 502, 600, 700, 701, 702];
        this.unDeleteClusterArr = [100, 400, 502, 700, 701, 702];
        this.unRebootClusterArr = [100, 400, 500, 502, 600, 700, 701, 702];
        this.unExtendClusterArr = [100, 300, 400, 500, 502, 700];
        this.unCurrentRestoreArr = [100, 400, 500, 502, 600, 700, 701, 702];
        this.unExtendInstanceArr = [100, 300, 400, 500, 502, 700];
        this.allStateDescription = {
            "100": i18n.common_term_rds_instance_creating,
            "200": i18n.common_term_rds_instance_running,
            "300": i18n.common_term_rds_instance_failure,
            "400": i18n.common_term_rds_backups_delete_label,
            "500": i18n.common_term_rds_instance_restarting,
            "502": i18n.common_term_rds_instance_upgrade_to_master,
            "600": i18n.common_term_rds_instance_restoring,
            "700": i18n.common_term_rds_instance_modifing,
            "701": i18n.common_term_rds_instance_dbport_setting,
            "702": i18n.common_term_rds_instance_modifing
        };
        this.globalOperativelyControlArr = {
            "100": [],
            "200": ["selectBackupConf", "selectDBConf", "saveDBConf", "cancelChanges", "selectBuckupList", "setBackupConf", "manualBackup", "deleteBackupFile", "addReadreplicaNode", "deleteCluster", "deleteInstance", "rebootCluster", "rebootInstance", "selectLogs", "selectVomlueInfo", "addClusterSize", "addInstanceSize", "restoreBackup", "rlsReadreplica", "resizeFlavor", "modifyDbPort", "applyConfigurations", "selectmysqlLogs", "modifySecurityGroup"],
            "300": ["selectBackupConf", "selectBuckupList", "deleteCluster", "deleteInstance", "rebootInstance", "restoreBackup", "rlsReadreplica", "selectLogs", "modifyDbPort"],
            "400": [],
            "500": ["selectBackupConf", "selectBuckupList", "setBackupConf", "deleteCluster", "deleteInstance", "restoreBackup", "modifySecurityGroup"],
            "502": ["selectBackupConf", "selectBuckupList", "selectLogs", "modifySecurityGroup"],
            "600": ["selectBackupConf", "selectBuckupList", "setBackupConf", "deleteCluster", "deleteInstance", "addInstanceSize", "restoreBackup", "resizeFlavor", "modifySecurityGroup"],
            "700": ["selectBackupConf", "selectBuckupList", "deleteBackupFile", "deleteCluster", "restoreBackup", "modifySecurityGroup"],
            "701": ["selectBackupConf", "selectBuckupList", "deleteBackupFile", "deleteCluster", "restoreBackup", "resizeFlavor", "modifySecurityGroup"],
            "702": ["selectBackupConf", "selectDBConf", "saveDBConf", "cancelChanges", "selectBuckupList", "setBackupConf", "manualBackup", "deleteBackupFile", "addReadreplicaNode", "deleteCluster", "deleteInstance", "rebootCluster", "rebootInstance", "selectLogs", "selectVomlueInfo", "addClusterSize", "addInstanceSize", "restoreBackup", "rlsReadreplica", "resizeFlavor", "modifyDbPort", "applyConfigurations", "selectmysqlLogs"]
        };
        this.globalUnOperativelyControlArr = {
            "master": ["rlsReadreplica"],
            "slave": ["selectBackupConf", "selectDBConf", "saveDBConf", "cancelChanges", "selectBuckupList", "setBackupConf", "manualBackup", "deleteBackupFile", "addReadreplicaNode", "deleteCluster", "rebootCluster", "rebootInstance", "addClusterSize", "restoreBackup", "rlsReadreplica", "resizeFlavor", "applyConfigurations"],
            "readreplica": ["selectBackupConf", "selectBuckupList", "setBackupConf", "manualBackup", "deleteBackupFile", "addReadreplicaNode", "deleteCluster", "addClusterSize", "restoreBackup"],
            "shadow": ["addInstanceSize"]
        };
        this.controlMap = ["selectBackupConf", "selectDBConf", "saveDBConf", "cancelChanges", "selectBuckupList", "setBackupConf", "manualBackup", "deleteBackupFile", "addReadreplicaNode", "deleteCluster", "deleteInstance", "rebootCluster", "rebootInstance", "selectLogs", "selectVomlueInfo", "addClusterSize", "addInstanceSize", "restoreBackup", "rlsReadreplica", "resizeFlavor", "modifyDbPort", "applyConfigurations", "selectmysqlLogs", "modifySecurityGroup"];
        this.asynTaskUnOperativelyControlArr = {
            "isFrozen": ["selectBackupConf", "selectDBConf", "saveDBConf", "cancelChanges", "setBackupConf", "manualBackup", "deleteBackupFile", "addReadreplicaNode", "rebootCluster", "rebootInstance", "selectLogs", "selectVomlueInfo", "addClusterSize", "addInstanceSize", "restoreBackup", "rlsReadreplica", "resizeFlavor", "modifyDbPort", "applyConfigurations", "selectmysqlLogs", "modifySecurityGroup"],
            "extend": ["addReadreplicaNode", "deleteCluster", "deleteInstance", "rebootCluster", "rebootInstance", "addClusterSize", "addInstanceSize", "resizeFlavor", "modifyDbPort"],
            "backUp": ["manualBackup", "rebootCluster", "rebootInstance", "modifyDbPort"]
        };
        this.actionOperativelyControlArr = {
            "IMPORTING_DATA": ["selectBackupConf", "selectBuckupList", "selectLogs", "selectmysqlLogs", "selectVomlueInfo"]
        };
        this.resultCodeMap = [1, 10, 15, 1106, 1107, 1108, 1109, 1110, 1111, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 5001];
        this.checkResultCode = function(code) {
            var _this = this;
            if (_this.resultCodeMap.indexOf(code) >= 0)
                return !1;
            return !0
        }
        ;
        this.getInstanceId = function() {
            return this.instanceId
        }
        ;
        this.setInstanceId = function(params) {
            this.instanceId = params
        }
        ;
        this.getUserId = function() {
            return this.userId
        }
        ;
        this.getMasterInfo = function() {
            return this.masterInfo
        }
        ;
        this.getvmName = function() {
            return this.vmName
        }
        ;
        this.getHashName = function() {
            var _this = this
                , number = _this.getRandomNum(1, 9)
                , hash = parseInt((new Date).getTime() % 3839 + 256, 10).toString(16);
            hash = "rds-" + hash + number;
            return hash
        }
        ;
        this.getRandomNum = function(min, max) {
            var range = max - min
                , rand = Math.random();
            return min + Math.round(rand * range)
        }
        ;
        this.getAppointHashName = function(str) {
            var _this = this
                , number = _this.getRandomNum(1, 9)
                , hash = parseInt((new Date).getTime() % 3839 + 256, 10).toString(16);
            hash = str + hash + number;
            return hash
        }
        ;
        this.checkStatus = function(status) {
            var tag = 0;
            angular.isArray(status) && 0 !== status.length ? tag = 1 === status.length ? 1 : 2 : angular.isString(status) && (tag = 1);
            return tag
        }
        ;
        this.getProgress = function(status) {
            var progressValue = 0
                , progressPercentArr = {
                    "100": 0,
                    "101": 30,
                    "102": 60,
                    "103": 99
                };
            progressValue = progressPercentArr[status];
            return progressValue
        }
        ;
        this.checkComplexity = function(pwd) {
            var reg1 = /.*[A-Z]+.*/
                , reg2 = /.*[a-z]+.*/
                , rate = 0;
            reg1.test(pwd) && reg2.test(pwd) && (rate = 2);
            return rate
        }
        ;
        this.checkNumber = function(value) {
            var str = /.*[0-9]+.*/;
            return str.test(value)
        }
        ;
        this.checkIntorFloat = function(value) {
            var str = /^[0-9]+.?[0-9]*$/;
            if (!str.test(value))
                return !1;
            return !0
        }
        ;
        this.checkPasswordLength = function(pwd, minLength, maxLength) {
            try {
                if (pwd.length < minLength || pwd.length > maxLength)
                    return !1
            } catch (e) {
                return !1
            }
            return !0
        }
        ;
        this.checkContainSpecialCharacter = function(pwd) {
            var str = /[\~\!\@\#\%\$\^\&\*\(\)\-\_\=\+\|\[\{\}\]\;\:\,<\.\>\/\?]+/;
            return str.test(pwd)
        }
        ;
        this.checkContainUserName = function(pwd, userName) {
            try {
                if (!userName)
                    return !1;
                var revertUserName = userName.split("").reverse().join("");
                if (pwd.indexOf(userName) >= 0 || pwd.indexOf(revertUserName) >= 0)
                    return !0
            } catch (e) {
                return !1
            }
            return !1
        }
        ;
        this.checkWeakPassword = function(pwd) {
            var tempArray, weakPasswordArr = ["huawei@", "Admin@", "admin@", "Root@", "root@", "ABC@", "abc@", "ABCD@", "abcd@", "Huawei123@", "huawei123@", "Admin123@", "admin123@", "Root123@", "root123@", "Huawei#", "huawei#", "Admin#", "admin#", "Root#", "root#", "ABC#", "abc#", "ABCD#", "abcd#", "Huawei123#", "huawei123#", "Admin123#", "admin123#", "Root123#", "root123#", "Huawei!", "huawei!", "Admin!", "admin!", "Root!", "root!", "ABC!", "abc!", "ABCD!", "abcd!", "Huawei123!", "huawei123!", "Admin123!", "admin123!", "Root123!", "root123!", "ABC123!", "abc123!", "Huawei@123", "huawei@123", "Admin@123", "admin@123", "Root@123", "root@123", "ABC@123", "abc@123", "123@Huawei", "123@Root", "123@abc", "Huawei123", "huawei123", "Admin123", "admin123", "Root123", "root123", "abc123", "Huawei_123", "huawei_123", "Admin_123", "admin_123", "Root_123", "root_123", "ABC_123", "abc_123", "123abc", "123abcd", "1234abc", "1234abcd", "abcd123", "abc1234", "abcd1234", "abcd@1234", "abcd1234!", "abcd_1234", "a123456", "123.com", "123@com", "123_com", "Huawei!@#", "huawei!@#", "Admin!@#", "admin!@#", "Root!@#", "root!@#", "Huawei!@", "huawei!@", "Admin!@", "admin!@", "Root!@", "root!@", "Huaweiroot", "HuaweiRoot", "huaweiroot", "huaweiRoot", "Huaweiadmin", "HuaweiAdmin", "huaweiadmin", "huaweiAdmin", "Adminroot", "AdminRoot", "adminRoot", "adminroot", "Rootadmin", "RootAdmin", "rootAdmin", "rootadmin", "Rootroot", "RootRoot", "rootroot", "Administrator", "Password", "Password123", "Password@123", "Password_123", "Password123!", "rds@123", "Mysql@123", "MySQL@123", "SQLServer@123", "Sqlserver@123"];
            if (pwd) {
                if (pwd.toLowerCase().indexOf("huawei") !== -1)
                    return !1;
                tempArray = _.filter(weakPasswordArr, function(item) {
                    return item === pwd
                });
                if (angular.isObject(tempArray) && tempArray.length > 0)
                    return !1
            }
            return !0
        }
        ;
        this.checkMatchSQLType = function(sql) {
            var tempVar, typeArr, type = "";
            if (sql && sql.length > 0) {
                tempVar = $.trim(sql);
                typeArr = ["SELECT", "INSERT", "UPDATE", "DELETE", "CREATE"];
                tempVar = tempVar.toLocaleLowerCase();
                _.each(typeArr, function(item) {
                    var typeString = item.toLocaleLowerCase();
                    0 === tempVar.indexOf(typeString) && (type = item)
                })
            }
            return type
        }
        ;
        this.compareTwoString = function(param1, param2, string1, string2) {
            var length, arr1, arr2, i, str1 = string1 || param1.label, str2 = string2 || param2.label, str1len = str1.length, str2len = str2.length;
            if (!str1len || !str2len)
                return;
            length = str1len > str2len ? str2len : str1len;
            arr1 = str1.toLowerCase().split("");
            arr2 = str2.toLowerCase().split("");
            for (i = 0; i < length; i++) {
                if (arr1[i] === arr2[i])
                    continue;
                return arr1[i] > arr2[i] ? 1 : -1
            }
        }
        ;
        this.getStatus = function(data) {
            var str = ""
                , endLabel = "</div>"
                , status = angular.isString(data.status) ? data.status : data.status[0]
                , _this = this;
            str = _this.getStatusHtml(status, "list");
            str += 1 === data.isFrozen ? i18n.common_term_rds_freeze + endLabel : _this.allStateDescription[status] + endLabel;
            return str
        }
        ;
        this.getStatusHtml = function(insStatus, tag) {
            var faultInstances, faultTips, statusHtml = "", settingIconclassName = "setting-icon", normalIconclassName = "normal-icon", warnIconclassName = "warn-icon", deleteIconclassName = "delete-icon", status = parseInt(insStatus, 10), _this = this;
            if ("list" === tag)
                if (_this.processingArr.indexOf(status) >= 0)
                    statusHtml = '<div class="' + settingIconclassName + '">';
                else if (_this.normalArr.indexOf(status) >= 0)
                    statusHtml = '<div class="' + normalIconclassName + '">';
                else if (_this.warnArr.indexOf(status) >= 0) {
                    faultInstances = [300, 301, 302, 303, 304, 305, 306];
                    faultTips = "";
                    faultInstances.indexOf(status) >= 0 && (faultTips = i18n.common_term_rds_fault_instance_reslove_tips);
                    statusHtml = '<div  title="' + faultTips + '" class="' + warnIconclassName + '">';
                    307 !== status && 310 !== status && 308 !== status || (statusHtml = '<div class="' + settingIconclassName + '">')
                } else
                    _this.deleteArr.indexOf(status) >= 0 && (statusHtml = '<div class="' + deleteIconclassName + '">');
            else
                _this.processingArr.indexOf(status) >= 0 ? statusHtml = settingIconclassName : _this.normalArr.indexOf(status) >= 0 ? statusHtml = normalIconclassName : _this.warnArr.indexOf(status) >= 0 ? statusHtml = warnIconclassName : _this.deleteArr.indexOf(status) >= 0 && (statusHtml = deleteIconclassName);
            return statusHtml
        }
        ;
        this.getStatusStr = function(data) {
            var strObj = {}
                , _this = this
                , status = angular.isString(data.status) ? data.status : data.status[0];
            1 === data.isFrozen ? strObj.str = i18n.common_term_rds_freeze : strObj.str = _this.allStateDescription[status];
            strObj.className = _this.getStatusHtml(status, "info");
            return strObj
        }
        ;
        this.matchSpecialStatus = function(insStatusCode, status) {
            var statusCode = insStatusCode.toString()
                , flag = status === statusCode;
            return flag
        }
        ;
        this.getStatusImage = function(insStatus) {
            var iamgeUrl = {}
                , _this = this
                , status = parseInt(insStatus, 10);
            if (_this.allStatusArr.indexOf(status) < 0)
                return iamgeUrl;
            if (_this.processingArr.indexOf(status) >= 0)
                iamgeUrl = {
                    "url": "/static/rds/theme/default/images/rds/png037.png"
                };
            else if (_this.normalArr.indexOf(status) >= 0)
                iamgeUrl = {
                    "url": "/static/rds/theme/default/images/rds/png030.png"
                };
            else if (_this.warnArr.indexOf(status) >= 0) {
                iamgeUrl = {
                    "url": "/static/rds/theme/default/images/rds/png022.png"
                };
                307 !== status && 310 !== status && 308 !== status || (iamgeUrl = {
                    "url": "/static/rds/theme/default/images/rds/png037.png"
                })
            } else
                _this.deleteArr.indexOf(status) >= 0 && (iamgeUrl = {
                    "url": "/static/rds/theme/default/images/rds/png037.png"
                });
            return iamgeUrl
        }
        ;
        this.getStatusNum = function(insStatus) {
            var statusNumber = 0
                , _this = this
                , status = parseInt(insStatus, 10);
            _this.processingArr.indexOf(status) >= 0 ? statusNumber = 1 : _this.normalArr.indexOf(status) >= 0 ? statusNumber = 2 : _this.warnArr.indexOf(status) >= 0 ? statusNumber = 3 : _this.deleteArr.indexOf(status) >= 0 && (statusNumber = 4);
            return statusNumber
        }
        ;
        this.getDiffTypeInstancesAuthority = function(instanceInfo, controlName) {
            var tempVar, backUpTag, extendTag, actionTag, tag = !1, _this = this;
            if (angular.isObject(instanceInfo) && instanceInfo && _this.controlMap.indexOf(controlName) >= 0) {
                if (1 === instanceInfo.isFrozen && _this.asynTaskUnOperativelyControlArr.isFrozen.indexOf(controlName) >= 0)
                    return !1;
                if ("0" !== instanceInfo.operation.backUp) {
                    backUpTag = !(_this.asynTaskUnOperativelyControlArr.backUp.indexOf(controlName) >= 0);
                    extendTag = !0;
                    if ("0" !== instanceInfo.operation.enlarge) {
                        tempVar = _this.asynTaskUnOperativelyControlArr.extend.indexOf(controlName);
                        extendTag = !(tempVar >= 0)
                    }
                    tag = !(!backUpTag || !extendTag);
                    if (!tag)
                        return tag
                }
                if ("0" !== instanceInfo.operation.enlarge) {
                    extendTag = !(_this.asynTaskUnOperativelyControlArr.extend.indexOf(controlName) >= 0);
                    backUpTag = !0;
                    if ("0" !== instanceInfo.operation.backUp) {
                        tempVar = _this.asynTaskUnOperativelyControlArr.backUp.indexOf(controlName);
                        backUpTag = !(tempVar >= 0)
                    }
                    tag = !(!backUpTag || !extendTag);
                    if (!tag)
                        return tag
                }
                if (instanceInfo.actions.length > 0) {
                    actionTag = !0;
                    _.each(instanceInfo.actions, function(item) {
                        _this.actionOperativelyControlArr[item] && _this.actionOperativelyControlArr[item].indexOf(controlName) === -1 && (actionTag = !1)
                    });
                    if (!actionTag)
                        return actionTag
                }
                tag = _this.getGeneralOperationAuthority(instanceInfo.status, instanceInfo.type, controlName)
            }
            return tag
        }
        ;
        this.getDiffTypeInstancesAuthorityDbport = function(instanceInfo, controlName) {
            var tempVar, backUpTag, extendTag, actionTag, tag = !1, _this = this;
            if (angular.isObject(instanceInfo) && instanceInfo && _this.controlMap.indexOf(controlName) >= 0) {
                if (1 === instanceInfo.isFrozen && _this.asynTaskUnOperativelyControlArr.isFrozen.indexOf(controlName) >= 0)
                    return !1;
                if ("0" !== instanceInfo.operation.backUp) {
                    backUpTag = !(_this.asynTaskUnOperativelyControlArr.backUp.indexOf(controlName) >= 0);
                    extendTag = !0;
                    if ("0" !== instanceInfo.operation.enlarge) {
                        tempVar = _this.asynTaskUnOperativelyControlArr.extend.indexOf(controlName);
                        extendTag = !(tempVar >= 0)
                    }
                    tag = !(!backUpTag || !extendTag);
                    if (!tag)
                        return tag
                }
                if (instanceInfo.actions.length > 0) {
                    actionTag = !0;
                    _.each(instanceInfo.actions, function(item) {
                        _this.actionOperativelyControlArr[item] && _this.actionOperativelyControlArr[item].indexOf(controlName) === -1 && (actionTag = !1)
                    });
                    if (!actionTag)
                        return actionTag
                }
                tag = _this.getGeneralOperationAuthority(instanceInfo.status, instanceInfo.type, controlName)
            }
            return tag
        }
        ;
        this.getGeneralOperationAuthority = function(status, insType, controlName) {
            var unOperativelyControl, tag, vmType = insType || "master", _this = this;
            if (_this.controlMap.indexOf(controlName) < 0)
                return !1;
            unOperativelyControl = _this.globalUnOperativelyControlArr[vmType];
            if (unOperativelyControl.indexOf(controlName) >= 0)
                return !1;
            tag = !1;
            tag = _this.getOperativelyControlTag(status, controlName);
            return tag
        }
        ;
        this.arrayRemoveItem = function(arr1, arr2) {
            var tempArray = arr1;
            angular.isArray(arr1) && angular.isArray(arr2) ? _.each(tempArray, function(item, key) {
                arr2.indexOf(item) >= 0 && tempArray.splice(key, 1)
            }) : tempArray = [];
            return tempArray
        }
        ;
        this.getOperativelyControlTag = function(insStatus, controlName) {
            var _this = this
                , status = parseInt(insStatus, 10)
                , OperativelyControl = _this.globalOperativelyControlArr[status];
            if (OperativelyControl.indexOf(controlName) >= 0)
                return !0;
            return !1
        }
        ;
        this.getWeekDay = function(code) {
            var str = "";
            switch (code) {
                case "1":
                    str = i18n.common_term_rds_backups_form_label_Mon;
                    break;
                case "2":
                    str = i18n.common_term_rds_backups_form_label_Tues;
                    break;
                case "3":
                    str = i18n.common_term_rds_backups_form_label_Web;
                    break;
                case "4":
                    str = i18n.common_term_rds_backups_form_label_Thurs;
                    break;
                case "5":
                    str = i18n.common_term_rds_backups_form_label_Fri;
                    break;
                case "6":
                    str = i18n.common_term_rds_backups_form_label_Sat;
                    break;
                case "7":
                    str = i18n.common_term_rds_backups_form_label_Sun;
                    break;
                default:
                    str = i18n.common_term_rds_status_unknown
            }
            return str
        }
        ;
        this.getPayType = function(payType) {
            var str = ""
                , type = parseInt(payType, 10);
            switch (type) {
                case 0:
                    str = i18n.common_term_rds_period_for_day;
                    break;
                case 1:
                    str = i18n.common_term_rds_period_for_week;
                    break;
                case 2:
                    str = i18n.common_term_rds_period_for_month;
                    break;
                case 3:
                    str = i18n.common_term_rds_period_for_year;
                    break;
                case 4:
                    str = i18n.common_term_rds_period_for_hour
            }
            return str
        }
        ;
        this.getPayTypeLabel = function(payType) {
            var str = ""
                , type = parseInt(payType, 10);
            switch (type) {
                case 0:
                    str = "onDay";
                    break;
                case 1:
                    str = "onWeek";
                    break;
                case 2:
                    str = "onMonth";
                    break;
                case 3:
                    str = "onYear";
                    break;
                case 4:
                    str = "onHour"
            }
            return str
        }
        ;
        this.getWeek = function() {
            var str = [{
                "key": "1",
                "text": i18n.common_term_rds_backups_form_label_Mon
            }, {
                "key": "2",
                "text": i18n.common_term_rds_backups_form_label_Tues
            }, {
                "key": "3",
                "text": i18n.common_term_rds_backups_form_label_Web
            }, {
                "key": "4",
                "text": i18n.common_term_rds_backups_form_label_Thurs
            }, {
                "key": "5",
                "text": i18n.common_term_rds_backups_form_label_Fri
            }, {
                "key": "6",
                "text": i18n.common_term_rds_backups_form_label_Sat
            }, {
                "key": "7",
                "text": i18n.common_term_rds_backups_form_label_Sun
            }];
            return str
        }
        ;
        this.getDateNumber = function() {
            var i, tempStr, str = [];
            for (i = 1; i < 8; i++) {
                tempStr = {};
                tempStr.selectId = i.toString();
                tempStr.label = i.toString();
                str.push(tempStr)
            }
            return str
        }
        ;
        this.getMonthOpt = function() {
            var i, tempStr, str = [];
            for (i = 1; i < 10; i++) {
                tempStr = {};
                tempStr.selectId = i.toString();
                tempStr.label = i.toString();
                1 === i && (tempStr.checked = !0);
                str.push(tempStr)
            }
            return str
        }
        ;
        var subRegRex = /\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;
        this.i18nReplace = function(s, o) {
            if (!s || !o)
                return;
            return s.replace ? s.replace(subRegRex, function(match, key) {
                return angular.isUndefined(o[key]) ? match : o[key]
            }) : s
        }
        ;
        this.trimEmpty = function(value) {
            if (!value)
                return "";
            return value.replace(/(^\s*)|(\s*$)/g, "")
        }
        ;
        this.randomString = function(strLength) {
            var i, len = strLength || 24, chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", maxPos = chars.length, pwd = "";
            for (i = 0; i < len; i++)
                pwd += chars.charAt(Math.floor(Math.random() * maxPos));
            return pwd
        }
        ;
        this.getTimeLimit = function(count, periodType) {
            var index = parseInt(count, 10)
                , timeList = {};
            if (index > 12)
                return timeList;
            if (index <= 9) {
                timeList.payType = "onMonth";
                2 === periodType ? timeList.timeLimit = index : 3 === periodType && (timeList.timeLimit = index / 12)
            } else {
                timeList.payType = "onYear";
                2 === periodType ? timeList.timeLimit = 12 * (index - 9) : 3 === periodType && (timeList.timeLimit = index - 9)
            }
            return timeList
        }
        ;
        this.combineHostData = function(product) {
            var specDetail, i, hostData = {};
            hostData = product;
            hostData.specDetail = product.productSpec.specDetail;
            hostData.resourceSpecCode = product.productSpec.resourceSpecCode;
            hostData.resourceType = product.productSpec.resourceType;
            hostData.specId = product.productSpec.specId;
            specDetail = JSON.parse(product.productSpec.specDetail);
            for (i = 0; i < specDetail.length; i++)
                "mem" === specDetail[i].itemName ? hostData.memory = specDetail[i].itemValue : "cpu" === specDetail[i].itemName ? hostData.cpu = specDetail[i].itemValue : "dbMaxConnects" === specDetail[i].itemName ? hostData.maxconnect = specDetail[i].itemValue : "flavor" === specDetail[i].itemName ? hostData.flavor = specDetail[i].itemValue : "osLicenseSize" === specDetail[i].itemName ? hostData.osLicenseSize = specDetail[i].itemValue : "dbLicenseSize" === specDetail[i].itemName && (hostData.dbLicenseSize = specDetail[i].itemValue);
            return hostData
        }
        ;
        this.combineDiskData = function(data) {
            var specDetail, i, diskData = {};
            diskData = data;
            diskData.specDetail = data.productSpec.specDetail;
            diskData.resourceType = data.productSpec.resourceType;
            diskData.resourceSpecCode = data.productSpec.resourceSpecCode;
            diskData.specId = data.productSpec.specId;
            specDetail = JSON.parse(data.productSpec.specDetail);
            for (i = 0; i < specDetail.length; i++)
                "volumeType" === specDetail[i].itemName ? diskData.volumeType = specDetail[i].itemValue : "iops" === specDetail[i].itemName ? diskData.iops = specDetail[i].itemValue : "startValue" === specDetail[i].itemName ? diskData.startValue = specDetail[i].itemValue : "endValue" === specDetail[i].itemName ? diskData.endValue = specDetail[i].itemValue : "stepValue" === specDetail[i].itemName ? diskData.stepValue = specDetail[i].itemValue : "dbVersion" === specDetail[i].itemName ? diskData.dbVersion = specDetail[i].itemValue : "dbType" === specDetail[i].itemName ? diskData.dbType = specDetail[i].itemValue : "size" === specDetail[i].itemName ? diskData.size = specDetail[i].itemValue : "tag" === specDetail[i].itemName ? diskData.tag = specDetail[i].itemValue : "licenseVersion" === specDetail[i].itemName && (diskData.licenseVersion = specDetail[i].itemValue);
            return diskData
        }
        ;
        this.createOrderItemParams = function(data, buyNum) {
            var params, cloudServicesList = [], onesOrderInfos = {
                "cloudServiceType": window.configData.cloudserviceType,
                "regionId": data.regionId,
                "avalibleZoneId": data.avalibleZoneId,
                "chargingMode": 0,
                "periodType": data.periodType,
                "periodNum": data.periodNum,
                "isTrial": 0,
                "isAutoRenew": data.isAutoRenew,
                "subscriptionNum": buyNum,
                "productInfos": data.productInfos,
                "cloudServiceEndpoint": data.cloudServiceEndpoint,
                "cloudServiceForm": JSON.stringify(data.cloudServiceForm),
                "productDescs": data.productDescs
            };
            cloudServicesList.push(onesOrderInfos);
            params = {
                "orderId": data.orderId,
                "options": {
                    "isAgent": 0,
                    "tenantId": data.tenantId,
                    "cloudServices": cloudServicesList
                }
            };
            return params
        }
        ;
        this.downloadBlob = function(url, successFn, failFn) {
            var headers, xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function() {
                4 === this.readyState && (this.status >= 200 && this.status < 300 ? successFn(this.response) : failFn(this))
            }
            ;
            xhr.open("GET", url);
            xhr.responseType = "blob";
            headers = {
                "Pragma": "public",
                "Expires": 0,
                "Cache-Control": "must-revalidate, post-check=0, pre-check=0"
            };
            _.each(headers, function(item, key) {
                xhr.setRequestHeader(key, item)
            });
            xhr.send()
        }
        ;
        this.getTypeLabel = function(type) {
            var typeArr, typeLabel;
            if (!type)
                return "";
            typeArr = {
                "master": i18n.common_term_rds_instance_type_master_title,
                "slave": i18n.common_term_rds_instance_type_slave_title,
                "readreplica": i18n.common_term_rds_instance_type_readreplica_title,
                "shadow": i18n.common_term_rds_shadow_instance_type_lable
            };
            typeLabel = typeArr[type];
            return typeLabel
        }
        ;
        this.formatFloat = function(f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m
        }
        ;
        this.errResponse = function(e, $scope, tipMessage) {
            var response, msgContent, systemMsg = i18n.common_term_rds_error_msg;
            $scope.sumbitOrderMask && $scope.sumbitOrderMask.hide();
            response = e.responseJSON || e;
            msgContent = response && response.errCode ? response.externalMessage : systemMsg;
            tipMessage.showError(msgContent)
        }
        ;
        this.tipTarget = function(type, tipMessage, context) {
            if (context === i18n.common_term_rds_error_msg) {
                tipMessage.showPrompt(context);
                return
            }
            "success" === type ? tipMessage.showSuccess(context) : "prompt" === type ? tipMessage.showPrompt(context) : "warn" === type ? tipMessage.showWarn(context) : tipMessage.showError(context)
        }
        ;
        this.isSQLServer = function(instance) {
            var bool = !1;
            instance && instance.datastore && "SQLServer" === instance.datastore.type && (bool = !0);
            return bool
        }
        ;
        this.isMySQL = function(instance) {
            var bool = !1;
            instance && instance.datastore && "MySQL" === instance.datastore.type && (bool = !0);
            return bool
        }
        ;
        this.checkDBEngineType = function(instance, type) {
            var bool = !1
                , original = (instance && instance.datastore && instance.datastore.type || "").toLowerCase()
                , target = (type || "").toLowerCase();
            original && target && original === target && (bool = !0);
            return bool
        }
        ;
        this.encodeHtml = function(name) {
            return $.encoder.encodeForHTML(name)
        }
        ;
        this.UUIDVerify = function(params) {
            var _this = this
                , obj = {}
                , reg = /^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/
                , encodeObj = _this.encodeHtml(params);
            if (encodeObj && reg.test(encodeObj)) {
                obj.flag = !0;
                obj.value = encodeObj
            } else
                obj.flag = !1;
            return obj
        }
        ;
        this.validateIpV4 = function(params) {
            if (!params || "undefined" == typeof params)
                return !1;
            var regex = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
            if (!regex.test(params))
                return !1;
            return !0
        }
        ;
        this.getIsCustomUser = function(userRoles) {
            var tag, roleTag;
            if (userRoles && userRoles.length) {
                tag = !0;
                roleTag = window.configData.custormUserTag || "";
                roleTag && "common" !== roleTag ? _.each(userRoles, function(item) {
                    item === window.configData.custormUserTag && (tag = !1)
                }) : tag = !1;
                return tag && "default" === window.configData.company
            }
            return !1
        }
        ;
        this.timeScaleList = ["02:00-06:00", "06:00-10:00", "10:00-14:00", "14:00-18:00", "18:00-22:00", "22:00-02:00"]
    };
    return service
});
