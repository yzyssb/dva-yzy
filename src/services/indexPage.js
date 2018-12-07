import request from '../utils/request'

export function userPower(values) {
    console.log(444)
    // return request('/api/mgr/operation/log/list', {
    //     methods: 'post',
    //     credentials: 'include',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     },
    //     data: JSON.stringify({
    //         endTime: "",
    //         offset: 0,
    //         size: 10,
    //         startTime: ""
    //     })
    // })

    return request('/api/ams.php', {
        method: 'post',
        body: JSON.stringify({}),
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
}