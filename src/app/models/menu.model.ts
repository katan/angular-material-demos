export interface MenuRoute {
    path: string;
    title: string;
    icon?: string;
    submenu?: MenuRoute[];
}

export const MENU_ROUTES: MenuRoute[] = [
    {
        path: 'home',
        title: 'Home',
        icon: 'home'
    },
    {
        path: 'data-tables',
        title: 'Data tables',
        icon: 'table_chart',
        submenu: [
            {
                path: '/data-tables/simple-table',
                title: 'Simple table'
            },
            {
                path: '/data-tables/sort-table',
                title: 'Sort table'
            },
            {
                path: '/data-tables/pagination-table',
                title: 'Pagination table'
            },
            {
                path: '/data-tables/complete-table',
                title: 'Complete table'
            }
        ]
    },
    {
        path: 'forms',
        title: 'Forms',
        icon: 'text_fields',
        submenu: [
            {
                path: '/forms/simple-form',
                title: 'Simple form'
            },
            {
                path: '/forms/validation-form',
                title: 'Validation forms'
            }
        ]
    },
    {
        path: 'tabs',
        title: 'Tabs',
        icon: 'tab',
        submenu: [
            {
                path: '/tabs/stretched-labels',
                title: 'Stretched labels'
            }
        ]
    }
];