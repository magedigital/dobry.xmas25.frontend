const fields = {
    question: {
        support: 'Твой вопрос',
        textarea: true,
    },
    email: {
        support: 'E-mail для получения ответа',
    },
    name: {
        support: 'Как тебя зовут',
    },
    policy: {
        support: () =>
            'Я соглашаюсь с <a href="/upload/docs/politics-feedback.pdf" target="_blank">политикой конфиденциальности</a> и\xa0условиями обработки персональных данных',
        fieldType: 'checkbox',
    },
} as const;

export default fields;
