import request from '../utils/request';
import {
    parse
} from 'qs';
// import {
//     getUserName,
//     getUserId,
//     getUserToken
// } from '../services/CommonService';


// 发布修改此地址
var prefixUrl;
var downloadQrUrl;

const host = window.location.protocol + '//' + window.location.host;
if (host == 'http://localhost:8989') {
    prefixUrl = "http://dev.saas.27aichi.cn/api/";
    downloadQrUrl = "http://dev.gds.27aichi.cn";
} else {
    prefixUrl = window.location.protocol + '//' + window.location.host + '/api/';
    downloadQrUrl = window.location.protocol + '//' + window.location.host;
}

var logoutUrl = '';
if (window.location.host.startsWith('pre-')) {
    logoutUrl = 'http://pre-sso.27aichi.cn/logout';
} else if (window.location.host.startsWith('test-')) {
    logoutUrl = 'http://test-sso.27aichi.cn/logout';
} else if (window.location.host.startsWith('saas')) {
    logoutUrl = 'https://sso.27aichi.com/logout';
} else {
    logoutUrl = 'http://dev-sso.27aichi.cn/logout';
}

// module.exports = {
const Config={

    // 'logoutUrl': logoutUrl,
    "config": {

        WGjiekou:'ams.php',

    },


    httpPostByBase: async function (url, payload) {

        //payload.token = getUserToken();


        return request(prefixUrl + url, {
            method: 'post',
            body: JSON.stringify(parse(payload)),
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });

    },

    httpPostWithOnlyId: async function (url, payload, id) {

        //payload.token = getUserToken();

        return request(prefixUrl + url + "?id=" + id, {
            method: 'post',
            body: JSON.stringify(parse(payload)),
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });

    },
    httpPostWithId: async function (url, payload, id) {

        //payload.token = getUserToken();

        return request(prefixUrl + url + '/' + id, {
            method: 'post',
            body: JSON.stringify(parse(payload)),
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });


    },




    httpPostWithIds: async function (url, payload, id, regionName, seatNum, remark) {

        //payload.token = getUserToken();

        return request(prefixUrl + url + '/' + id + "?regionName=" + regionName + "&seatNum=" + seatNum + "&remark=" + remark, {
            method: 'post',
            body: JSON.stringify(parse(payload)),
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });

    },

    httpPost: async function (url, payload) {

        //payload.token = getUserToken();


        return request(prefixUrl + url, {
            method: 'post',
            body: JSON.stringify(parse(payload)),
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });

    },

    httpPostWithParam: async function (url, payload, id) {

        //payload.token = getUserToken();

        return request(prefixUrl + url + id, {
            method: 'post',
            body: JSON.stringify(parse(payload)),
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });

    },

    httpPostNoParam: async function (url, payload, header) {


        if (header && header.SSOSESSIONID) {
            return request(prefixUrl + url, {
                method: 'post',
                body: JSON.stringify(parse(payload)),
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'SSOSESSIONID': header.SSOSESSIONID
                },
            });

        } else {
            return request(prefixUrl + url, {
                method: 'post',
                body: JSON.stringify(parse(payload)),
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            });
        }

    },


    //郭庆扬增添方法用来请求微信授权地址
    httpPostWXValue: async function () {
        var payload = {};
        //payload.token = getUserToken();

        var baseurl = 'http://dev-27.27aichi.cn/onway/api.php/';
        var url = 'WxOpen/get_gzh_auth_url';
        return request(baseurl + url, {
            method: 'post',
            body: JSON.stringify(parse(payload)),
            mode: 'cors',
            credentials: 'include',
            headers: {},
        });

    },

}

export default Config;