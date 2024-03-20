(() => {
    const catalog1ChoicesSelect = document.querySelector(".js-catalog-1-choices");
    const catalog1Choices = new Choices(catalog1ChoicesSelect, {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        itemSelectText: '',

        classNames: {
            containerOuter: 'catalog-choices',
            containerInner: 'catalog-choices__inner',
            input: 'catalog-choices__input',
            inputCloned: 'catalog-choices__input--cloned',
            list: 'catalog-choices__list',
            listItems: 'catalog-choices__list--multiple',
            listSingle: 'catalog-choices__list--single',
            listDropdown: 'catalog-choices__list--dropdown',
            item: 'catalog-choices__item',
            itemSelectable: 'catalog-choices__item--selectable',
            itemDisabled: 'catalog-choices__item--disabled',
            itemChoice: 'catalog-choices__item--choice',
            placeholder: 'catalog-choices__placeholder',
            group: 'catalog-choices__group',
            groupHeading: 'catalog-choices__heading',
            button: 'catalog-choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
        },
    });
})();

(() => {
    const catalog2ChoicesSelect = document.querySelector(".js-catalog-2-choices");
    const catalog2Choices = new Choices(catalog2ChoicesSelect, {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        itemSelectText: '',

        classNames: {
            containerOuter: 'catalog-choices',
            containerInner: 'catalog-choices__inner',
            input: 'catalog-choices__input',
            inputCloned: 'catalog-choices__input--cloned',
            list: 'catalog-choices__list',
            listItems: 'catalog-choices__list--multiple',
            listSingle: 'catalog-choices__list--single',
            listDropdown: 'catalog-choices__list--dropdown',
            item: 'catalog-choices__item',
            itemSelectable: 'catalog-choices__item--selectable',
            itemDisabled: 'catalog-choices__item--disabled',
            itemChoice: 'catalog-choices__item--choice',
            placeholder: 'catalog-choices__placeholder',
            group: 'catalog-choices__group',
            groupHeading: 'catalog-choices__heading',
            button: 'catalog-choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
        },
    });
})();

(() => {
    const catalog3ChoicesSelect = document.querySelector(".js-catalog-3-choices");
    const catalog3Choices = new Choices(catalog3ChoicesSelect, {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        itemSelectText: '',

        classNames: {
            containerOuter: 'catalog-choices',
            containerInner: 'catalog-choices__inner',
            input: 'catalog-choices__input',
            inputCloned: 'catalog-choices__input--cloned',
            list: 'catalog-choices__list',
            listItems: 'catalog-choices__list--multiple',
            listSingle: 'catalog-choices__list--single',
            listDropdown: 'catalog-choices__list--dropdown',
            item: 'catalog-choices__item',
            itemSelectable: 'catalog-choices__item--selectable',
            itemDisabled: 'catalog-choices__item--disabled',
            itemChoice: 'catalog-choices__item--choice',
            placeholder: 'catalog-choices__placeholder',
            group: 'catalog-choices__group',
            groupHeading: 'catalog-choices__heading',
            button: 'catalog-choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
        },
    });
})();

(() => {
    const catalog4ChoicesSelect = document.querySelector(".js-catalog-4-choices");
    const catalog4Choices = new Choices(catalog4ChoicesSelect, {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: '',
        position: 'bottom',
        itemSelectText: '',

        classNames: {
            containerOuter: 'catalog-choices',
            containerInner: 'catalog-choices__inner',
            input: 'catalog-choices__input',
            inputCloned: 'catalog-choices__input--cloned',
            list: 'catalog-choices__list',
            listItems: 'catalog-choices__list--multiple',
            listSingle: 'catalog-choices__list--single',
            listDropdown: 'catalog-choices__list--dropdown',
            item: 'catalog-choices__item',
            itemSelectable: 'catalog-choices__item--selectable',
            itemDisabled: 'catalog-choices__item--disabled',
            itemChoice: 'catalog-choices__item--choice',
            placeholder: 'catalog-choices__placeholder',
            group: 'catalog-choices__group',
            groupHeading: 'catalog-choices__heading',
            button: 'catalog-choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
        },
    });
})();

(() => {
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-close-marker-1").addEventListener("click", function() {
            document.querySelector(".js-marker-1").classList.toggle("marker-close")
        })
    })
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-marker-1").addEventListener("animationend", function() {
            document.querySelector(".js-marker-1").classList.toggle("display-none")
        })
    })
})();

(() => {
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-close-marker-2").addEventListener("click", function() {
            document.querySelector(".js-marker-2").classList.toggle("marker-close")
        })
    })
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-marker-2").addEventListener("animationend", function() {
            document.querySelector(".js-marker-2").classList.toggle("display-none")
        })
    })
})();

(() => {
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-close-marker-3").addEventListener("click", function() {
            document.querySelector(".js-marker-3").classList.toggle("marker-close")
        })
    })
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-marker-3").addEventListener("animationend", function() {
            document.querySelector(".js-marker-3").classList.toggle("display-none")
        })
    })
})();

(() => {
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-close-marker-4").addEventListener("click", function() {
            document.querySelector(".js-marker-4").classList.toggle("marker-close")
        })
    })
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".js-marker-4").addEventListener("animationend", function() {
            document.querySelector(".js-marker-4").classList.toggle("display-none")
        })
    })
})();