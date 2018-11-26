export const AppSettings = {
    name: 'Atrivity',
    version: '0.0.1',
    sidenav: { // TODO implement
        visible: false,
        showAtStart: true,
        collapsable: true,
        width: '260px',
        height: '100%'
    },
    toolbar: { // TODO implement
        visible: true,
        showAtStart: true,
        collapsable: false,
        width: '100%',
        height: '60px'
    },
    spinner: { // TODO implement
        color: 'rgba(0, 115, 170, 0.69)'
    },
    localStorage: {
        language: 'language',
        theme: 'theme'
    },
    defaultTheme: 'default-theme',  // OK
    hasBreadcrumb: true,            // OK
    // Translations
    i18n: [                         // OK
        {
            name: 'English',
            locale: 'en-GB',
            firstDayOfWeek: 0 // 0 Sunday, 1 Monday
        },
        {
            name: 'Spanish',
            locale: 'es-ES',
            firstDayOfWeek: 1
        },
        {
            name: 'French',
            locale: 'fr-FR',
            firstDayOfWeek: 1
        },
        {
            name: 'Italian',
            locale: 'it-IT',
            firstDayOfWeek: 1
        }
    ]
}