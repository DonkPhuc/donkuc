// angular
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.loais = {
        "Tiệc cưới": {
            pricetiec: 30000000
        },
        "Tiệc cá nhân": {
            pricetiec: 25000000
        },
        "Tiệc doanh nghiệp": {
            pricetiec: 22000000
        },
        "Hội nghị": {
            pricetiec: 20000000
        },
        "Triển lãm": {
            pricetiec: 18000000
        }
    }
    $scope.bias = {
        "Tiger": {
            pricebia: 500000
        },
        "Larue": {
            pricebia: 400000
        },
        "Saigon": {
            pricebia: 300000
        }
    };
});;
// });
// datepicker
$('.datepicker').pickadate({
    labelMonthNext: 'Go to the next month',
    labelMonthPrev: 'Go to the previous month',
    labelMonthSelect: 'Pick a month from the dropdown',
    labelYearSelect: 'Pick a year from the dropdown',
    selectMonths: true,
    selectYears: true
})
// translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'vi',
        includedLanguages: 'vi,en,fr,ja,ko',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
};

$(document).ready(function () {
    $('#google_translate_element').bind('DOMNodeInserted', function (event) {
        $('.goog-te-menu-value span:first').html('NGÔN NGỮ');
        $('.goog-te-menu-frame.skiptranslate').load(function () {
            setTimeout(function () {
                $('.goog-te-menu-frame.skiptranslate').contents().find('.goog-te-menu2-item-selected .text').html('Translate');
            }, 100);
        });
    });
});