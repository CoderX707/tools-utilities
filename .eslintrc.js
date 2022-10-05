module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        "vue/multi-word-component-names": ["off"],
        "vue/return-in-computed-property": ["off"],
        "vue/no-side-effects-in-computed-properties": ["off"],
        "vue/no-textarea-mustache": ["off"],
        "vue/no-mutating-props": ["off"],
        "vue/no-template-shadow": ["off"],
    }
}