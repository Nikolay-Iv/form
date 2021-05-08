export default function() {
    const selectors = {
        operator: '[data-operator-mask]',
    }

    Inputmask('≥ 9{0,}').mask(selectors.operator);
}
