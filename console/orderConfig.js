/*global window:true*/
var config = {
    'en-us': {
        'areaName': 'Region',
        'clusterName': 'DB Cluster Name',
        'dbName': 'DB Engine',
        'dbVersionName': 'Database Version',
        'specName': 'Specifications',
        'storageName': 'Storage',
        'vpcName': 'VPC',
        'subnetName': 'Subnet',
        'haName': 'HA',
        'standbyAzName': 'Standby DB Instance AZ',
        "volume_common": "Common I/O",
        "volume_high": " High I/O",
        "volume_uhigh": "Ultra-high I/O",
        "yesLabel": "Yes",
        "noLabel": "No"
    },
    'zh-cn': {
        'areaName': '地域',
        'clusterName': '集群名称',
        'dbName': '数据库引擎',
        'dbVersionName': '数据库版本',
        'specName': '规格',
        'storageName': '存储空间',
        'vpcName': '虚拟私有云',
        'subnetName': '子网',
        'haName': '高可用',
        'standbyAzName': '辅助可用区',
        "volume_common": "普通IO",
        "volume_high": "高IO",
        "volume_uhigh": "超高IO",
        "yesLabel": "是",
        "noLabel": "否"
    }
};
window.orderConfData = config || {};