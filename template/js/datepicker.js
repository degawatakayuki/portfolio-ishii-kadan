var date = new Date();
var minDate = date.setDate(date.getDate() + 1);
var nowMonth = new Date(date.getFullYear(), date.getMonth(), );

flatpickr('#js-datepicker', {
    locale     : 'ja',
    dateFormat : 'Y.m.d（D）', 
    defaultDate: minDate,
    mode: "multiple",
    disable: [
        {from: this.nowMonth, to: this.minDate}
    ]
});
