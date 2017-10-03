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
        'areaName': '����',
        'clusterName': '��Ⱥ����',
        'dbName': '���ݿ�����',
        'dbVersionName': '���ݿ�汾',
        'specName': '���',
        'storageName': '�洢�ռ�',
        'vpcName': '����˽����',
        'subnetName': '����',
        'haName': '�߿���',
        'standbyAzName': '����������',
        "volume_common": "��ͨIO",
        "volume_high": "��IO",
        "volume_uhigh": "����IO",
        "yesLabel": "��",
        "noLabel": "��"
    }
};
window.orderConfData = config || {};