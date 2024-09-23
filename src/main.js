import './styles/main.scss'

const filters = {
    prices: [],
    flowers: [],
    person: [],
    event: [],
    style: [],
};

function registerDropdownFilter (filterContainerSelector, activeFilters) {
    const filter = document.querySelector(filterContainerSelector);
    const filterToggle = filter.querySelector('.delivery-select-box');
    const filterDropdown = filter.querySelector('.delivery-select-dropdown');
    const filterApply = filter.querySelector('.delivery-select-dropdown-apply');

    filterToggle.addEventListener('click', () => {
        filterDropdown.classList.toggle('show');
    });

    filterApply.addEventListener('click', () => {
        const optionsElements = filter.querySelectorAll('.delivery-select-dropdown-item__name');
        const onlyActiveElements = Array.from(optionsElements).filter((el) => el.checked);
        const elementsValues = onlyActiveElements.map((el) => el.value);

        console.log(filters);
        activeFilters.push(...elementsValues)
    });
}

registerDropdownFilter('[data-price-filter]', filters.prices);
registerDropdownFilter('[data-flowers-filter]', filters.flowers);
registerDropdownFilter('[data-person-filter]', filters.person);
registerDropdownFilter('[data-event-filter]', filters.event);
registerDropdownFilter('[data-style-filter]', filters.style);
