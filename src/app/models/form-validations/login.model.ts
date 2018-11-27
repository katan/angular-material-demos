export const loginValidation = {
    'username': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'email', messageKey: 'form.validation.email' }
    ],
    'password': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'minLength', value: 4, messageKey: 'form.validation.minLength' }
    ]
}

export const passwordRecoveryValidation = {
    'email': [
        { type: 'required', messageKey: 'form.validation.required' },
        { type: 'email', messageKey: 'form.validation.email' }
    ]
}