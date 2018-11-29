export interface ApiUrl {
    protocol?: string;
    address?: string;
    URN?: string;
    port?: number;
}

export const API = {
    TOKEN: '4BAC5FAF-AB68-48B2-AB40-49F66CFBEC98',
    BRANDING: '7D7CD490-2E52-4FDE-97BB-2530CF34E710',
    URL: {
        development: {
            protocol: 'http',
            URN: 'api',
            port: 5000,
        },
        test: {
            protocol: 'https',
            port: 443,
            address: 'test.atrivity.com',
            URN: 'WebAtrivity/api'
        },
        production: {
            URN: 'WebNew/api'
        }
    },
    MODULE: {
        settings: {
            path: 'language',
            action: {
                i18n: 'translate',
                languages: 'getAll',
                branding: 'branding'
            }
        },
        authentication: {
            path: 'authentication',
            action: {
                login: 'login',
                logout: 'logout',
                refresh: 'refresh'
            }
        },
        environment: {
            path: 'environment',
            action: {
                get: 'getall'
            }
        },
        game: {
            path: 'game',
            action: {
                get: 'getall',
                gameStart: 'Game/GameStart'
            }
        },
        user: {
            path: 'UserApi',
            action: {
                getUser: 'User',
                postUser: 'User'
            }
        }
    }
};
