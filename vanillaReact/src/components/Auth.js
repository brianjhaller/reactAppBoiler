const qs = require('qs');

export default class Auth {
    constructor () {
        this.loggedIn = false;
        this.usr = "";
    }
     
    login(grantType, accessToken) {
        const data = {
            grant_type: grantType,
            client_id: '4j8tukaa4p6t8i9o73saaklf3q',
            code: accessToken,
            scope: 'profile',
            redirect_uri: 'http://localhost:3000/auth/callback',
        };

        const p = {
            method: 'post',
            url: `https://brianhaller.auth.us-east-1.amazoncognito.com/`,
            data: qs.stringify(data),

            auth: {
            username: '4j8tukaa4p6t8i9o73saaklf3q',
            password: '1n2d058149g63ehr2ofeq1soet2to54mrvprf27f8lrvhia2j4p7',
            },
        };
        console.log(`AWS oauth2/token request parameters: ${JSON.stringify(p)}`);
        let awsResponse
        fetch(p).then(res => awsResponse = res);
        console.log(`AWS oauth2/token response : ${JSON.stringify(awsResponse.data)}`);

        return awsResponse;
    }

    authenticate () {
        return this.loggedIn;
    }

    userInfo () {
        return this.usr;
    }

    logout () {
        this.loggedIn = false;
    }
}
