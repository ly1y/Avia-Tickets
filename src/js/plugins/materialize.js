import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const dropDown = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropDown, {
    constrainWidth: false,
    closeOnClick: false,
  });

const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem){
    return M.FormSelect.getInstance(elem);
}

const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
    data:{
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
    }
});

export function getAutocompleteInstance(elem){
    return M.Autocomplete.getInstance(elem);
}

const datepickers= document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
    showClearBtn:true,
    format: 'yyyy-mm'
});

export function getDatePickerInstance(elem){
    return M.Datepicker.getInstance(elem);
}

