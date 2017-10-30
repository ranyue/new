/**
 * Created by Jaron on 7/10/2017.
 */
import MockAdapter from 'axios-mock-adapter'

export default function (axios) {
  let mock = new MockAdapter(axios)

  mock.onGet(/\/xcrm\/api\/v1\/wx\/recommend\/fans-tree/)
    .reply(200, {
      errorCode: '0',
      errorMsg: null,
      data: {
        counts: [5],
        fansTree: {
          '0': [
            {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'A',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcA',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'B',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcB',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'C',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcC',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'D',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcD',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'E',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcE',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'E',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcE',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'E',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcE',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'E',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcE',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }, {
              'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
              'name': 'E',
              'id': null,
              'appId': null,
              'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcE',
              'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
              'binded': false
            }
          ]
        }
      }
    })

  mock.onGet(/\/xcrm\/api\/v1\/wx\/recommend\/fans-tree/)
    .reply(200, {
      errorCode: '0',
      errorMsg: null,
      data: {
        'counts': [3, 3, 2],
        'fansTree': {
          '0': [{
            'imageUrl': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
            'name': '李勇',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwZDBqdE00jqPlLjFqZx8HOs',
            'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
            'binded': false
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
            'name': '干车负束',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdc',
            'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
            'binded': false
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/JeGdNIXOHrpxp134MyUV936CgiaxJqUPlaeBibbpgSc0UvNGvO9Z7yzG9wgQBetkVmFKv26pj1SElibefCaEQdspVQFx0qicZKDj/0',
            'name': '李范珠Peter',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwZYjj5K4PNHZ6hL8faCT1ug',
            'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
            'binded': true
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
            'name': 'A',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcA',
            'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
            'binded': false
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
            'name': 'B',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcB',
            'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
            'binded': false
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
            'name': 'C',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcC',
            'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
            'binded': false
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ajNVdqHZLLASwmmdia6TTcaE8aGDMFfIib0c3FjGu8PLvzyciaAOxC9WO8vAPnSgyolkMU8eNiafTsCTib6eNFbtVcg/0',
            'name': 'D',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwQMK_06q60lrNGsBqUuEAdcD',
            'inviterOpenId': 'o-EZWwQIiE1I-16DQZzIO8ThvRoE',
            'binded': false
          }],
          '1': [{
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ibLButGMnqJMFWpNzmN8ibfZdiaDUAq74eswRNzfSicdN3M19th1nJDkicibialEAlrOwd2sWQCvufDBhyQich1RWkJemJ8Q4icvEPd00/0',
            'name': '孙建忠-Daniel',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwTuuFF95TnZ_ph21sZsCCMI',
            'inviterOpenId': 'o-EZWwZDBqdE00jqPlLjFqZx8HOs',
            'binded': false
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ibLButGMnqJMFWpNzmN8ibfZ3cfn8ndz2IcUAKGib0kmlcnPVSPMUUnaWVaoaB60icQICF0tI9RLZ7b8JvxlwldwHI8WVDRW4vQN/0',
            'name': '宋小茜',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwU-MiGgsYf1PVHoVy1_3L-g',
            'inviterOpenId': 'o-EZWwZDBqdE00jqPlLjFqZx8HOs',
            'binded': true
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/fdhTVnqoRSlNlIqlCpOMq3Of5g8L39SNxugTlr3icQ2SiaSooHWDicEtuP98Sqv10BctU4d0SiaCDoMiafFiaHZfU7qY6diaLiazRJicW/0',
            'name': 'Weekly',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwbvbqRX_ljUxALjFl0i9ilo',
            'inviterOpenId': 'o-EZWwZYjj5K4PNHZ6hL8faCT1ug',
            'binded': false
          }],
          '2': [{
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ibLButGMnqJMFWpNzmN8ibfZdiaDUAq74eswRNzfSicdN3M19th1nJDkicibialEAlrOwd2sWQCvufDBhyQich1RWkJemJ8Q4icvEPd00/0',
            'name': 'K',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwbvbqRX_ljUxALjFl0i9iloK',
            'inviterOpenId': 'o-EZWwbvbqRX_ljUxALjFl0i9ilo',
            'binded': true
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/ibLButGMnqJMFWpNzmN8ibfZ3cfn8ndz2IcUAKGib0kmlcnPVSPMUUnaWVaoaB60icQICF0tI9RLZ7b8JvxlwldwHI8WVDRW4vQN/0',
            'name': 'B',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwbvbqRX_ljUxALjFl0i9iloB',
            'inviterOpenId': 'o-EZWwbvbqRX_ljUxALjFl0i9ilo',
            'binded': true
          }, {
            'imageUrl': 'https://wx.qlogo.cn/mmopen/fdhTVnqoRSlNlIqlCpOMq3Of5g8L39SNxugTlr3icQ2SiaSooHWDicEtuP98Sqv10BctU4d0SiaCDoMiafFiaHZfU7qY6diaLiazRJicW/0',
            'name': 'Weekly',
            'id': null,
            'appId': null,
            'openId': 'o-EZWwbvbqRX_ljUxALjFl0i9ilo',
            'inviterOpenId': 'o-EZWwTuuFF95TnZ_ph21sZsCCMI',
            'binded': false
          }]
        }
      }
    })

  mock.onGet(/\/xcrm\/api\/v1\/wxWebsite\/wx\/find\/MEMBER_CENTER/)
    .reply(200, {
      code: 200,
      errorMsg: null,
      ok: true,
      data: [{
        id: 'b0010dc9e31a46ae9e287c1b706eb09b',
        name: '我的订单',
        show: true,
        'displayIndex': 0,
        url: '',
        type: 'SYS',
        code: 'MORDER',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '7f0a6f2aeb054a88adea96b25131ab40',
        name: '我的预约',
        show: true,
        'displayIndex': 1,
        url: '',
        type: 'SYS',
        code: 'MAPPOINT',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '1a44410d6bad45a9ba49cce91499abca',
        name: '待评价',
        show: true,
        'displayIndex': 2,
        url: '',
        type: 'SYS',
        code: 'TOEVAL',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '16fe05da5a714000a8d42703abee84dd',
        name: '积分商城',
        show: true,
        'displayIndex': 3,
        url: '',
        type: 'SYS',
        code: 'MALL',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '49fa234306e64c959c35dd9cede42661',
        name: '肌肤测试',
        show: true,
        'displayIndex': 4,
        url: '',
        type: 'SYS',
        code: 'SKTEST',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '74f4d5f025fc4dc6809e380cc9129a3d',
        name: '我的美丽日记',
        show: true,
        'displayIndex': 5,
        url: '',
        type: 'SYS',
        code: 'DIARY',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: 'c44ce8fb7ad94e949aa90360ede5315d',
        name: '邀请好友',
        show: true,
        'displayIndex': 6,
        url: '',
        type: 'SYS',
        code: 'INVITE',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '94ea13c2f7ef487583596a443314c5a4',
        name: '我的分销',
        show: true,
        'displayIndex': 7,
        url: '',
        type: 'SYS',
        code: 'DISTRIBUTE',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '5228cb00e9f44b498f1db53236efa1cf',
        name: '会员权益',
        show: true,
        'displayIndex': 8,
        url: '',
        type: 'SYS',
        code: 'RIGHT',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: 'eb4f7053aa9a47ae9146a3ebea94e1db',
        name: '自定义模块',
        show: false,
        'displayIndex': 9,
        url: '',
        type: 'CUSTOM',
        code: 'CUSTOMF',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }, {
        id: '597fbd5fed064807ba6589c25cdcbcf1',
        name: '自定义模块',
        show: false,
        'displayIndex': 10,
        url: '',
        type: 'CUSTOM',
        code: 'CUSTOMG',
        pageName: 'MEMBER_CENTER',
        bgColor: '#fff'
      }]
    })

  mock.onGet(/\/xcrm\/api\/v1\/wx\/organization\/expert/)
    .reply(200, {
      clinicExperts: [
        {
          clinicName: 'mock诊所A',
          doctors: {
            '科室二': [
              {
                displayIndex: 0,
                id: 'e8a5b2d4-4ff9-4bad-b0fe-dbfca2d95deb-440',
                imageUrl: 'https://scrmdental.lctest.cn/xcrm/media/9081ad73c824410db9821a424243ee55/医生1.jpg',
                introduction: null,
                title: null,
                name: '黄静波',
                specialty: '儿童齿科'
              }
            ],
            '科室三': [
              {
                id: 'e8a5b2d4-4ff9-4bad-b0fe-dbfca2d95deb-101',
                name: '梁非凡',
                imageUrl: 'https://scrmdental.lctest.cn/xcrm/media/453cb0c1bff54f78acfb2792d4bf2e35/9ACB.tmp.jpg',
                introduction: null,
                specialty: null,
                title: null,
                displayIndex: 3
              }
            ]
          }
        },
        {
          clinicName: 'mock诊所B',
          doctors: {
            '口内2': [
              {
                displayIndex: 4,
                id: 'e8a5b2d4-4ff9-4bad-b0fe-dbfca2d95deb-438',
                imageUrl: 'https://scrmdental.lctest.cn/xcrm/media/70c6f71ada614312a427b93319fb57ed/医生3.jpg',
                introduction: 'szcsdvdfewfewa',
                name: '李慧慧',
                specialty: 'afdsafwefew',
                title: null
              }
            ],
            '科室二': [
              {
                displayIndex: 14,
                id: 'e8a5b2d4-4ff9-4bad-b0fe-dbfca2d95deb-472',
                imageUrl: 'https://scrmdental.lctest.cn/xcrm/media/d54aa0b422b247349bbb9389ac381742/医生4.jpg',
                introduction: null,
                name: '熊昀',
                specialty: '牙周',
                title: null
              }
            ]
          }
        }
      ]
    })

  mock.onGet(/\/xcrm\/api\/v1\/wx\/promotionpage\/help/)
    .reply(200, {
      'status': 'begin',
      'pageSetting': {
        'title': null,
        'content': null,
        'images': [{
          'url': '/xcrm/media/6b9dc16664c442cda76c64a172ca2016/bk1.png',
          'place': '',
          'step': 'init',
          'editable': true
        }, {
          'url': '/xcrm/media/5410fb6978824be3a85def2ae81224ab/bk2.png',
          'place': '',
          'step': 'begin',
          'editable': true
        }, {
          'url': '/xcrm/media/0873d7a85f274370ae17a1096ee552b5/bk3.png',
          'place': '',
          'step': 'end',
          'editable': true
        }]
      },
      'forwardSetting': {
        'title': '1',
        'description': '1',
        'icon': 'https://scrmdental.lctest.cn//xcrm/media/57956726744e4c6ba2c2bd98c95ea88b/logo.jpg'
      },
      'summary': {
        'count': 0,
        'gaps': null,
        'browsers': null,
        'countHelper': 1,
        'gapsHelper': [49],
        'helpers': [{
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }, {
          'nickName': '李勇',
          'avatar': 'https://wx.qlogo.cn/mmopen/OxIYX9IbMoZ5ljPIOmpEtXsPcxaQde1JlUWHA3lOKPibibzBuzsr1IG4zDYjGOEYmoguVAOeVhLxzkYvWZBrufmVGM7T2IibHwA/0',
          'helpTime': 1505298969241
        }]
      },
      'needReward': false,
      'canTakeCoupon': true,
      'rewardQrcodeUrl': 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAACqklEQVR42u2c226DQAxE8/8/TV8r\nVaC52EDbs09RhBb2KDbjsZXPwZLXBwTAAhawgAUsYIEAWLfD+sjr+/U/dzjb7fqas32un/ZsH/cs\nwNqHpT/iGejrIyl7KkCv92/OAqxNWHoQ6YGQhbwSpH1CANabYF1jcoOlDz1g/RVYygs4u6aRFMB6\nNyz9ml4c9HB/jc7617Cycuedn19aG/47WLaDYZavTUrWJe5L/SxgHVla1csdNzFnZZD7GVibsDKL\nTj9eX673QsQKWGCtweotGv0AmdDNQAPraVjKj7/53jWUmzbKYsMCWIZ0cG0NJZUq5XHfLlGMQ2A9\nAStLilOitEephz+w7oWVtarcNJ+JgL5QH5MOwBoz/9zQmILiyhr9JbPolAIrTJaN9ZGJzKxoL61B\nYA3BClKgGESZFJhtmgWSBVhrTVY99faFiGscZnbgcBgCyw7DxgJ0DZnMwnYTf5AKgDUEyxWTuhTI\nynVXBLil0oDOAtYArCZ9NoZcM6TZmJHA2hyTbBqxfYOrlxQ36SxgVdKh//E3zavZdty6zgJW1RbL\ngrcpkpoxpkUPHljHXvu+sX1nrZjedALWvq2sW31TQte9bzO8Cax7YWWWW3bIzLbOwjAo14C1AGvK\nDnRfEbPt1bJdAqwhWFPNq8ZQdI1Dt6FrpXlgjcLK5F9jy7hCN0sU7kmBdayEoTuskbW5srtkA5vA\neh8sN827ONyy3L1XbEMDa1SUNg2uZgxoFnHzkgHWNKxmhLspm7MhcNdWXGmyAmug3GkK18y00V8v\n2WgRsJ6A1TcjXDnijmS6InZxABdYxz1/Y9fYKc2QUGYZAuvdsHQR0JgwvaAF1tOwGuu5aZT2oyKu\ncQSsu2C5t59tKLhhPvXMwNqExQIWsIAFLGABiwUsYN2yvgBoqtpgmn7GOgAAAABJRU5ErkJggg==',
      'browsed': false,
      'forward': false
    })

  mock.onAny().passThrough()
}
