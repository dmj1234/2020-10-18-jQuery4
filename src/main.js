// const api = jQuery('.test');
// api.addClass('red').addClass('blue')


// const x1 = jQuery('.tex1t').find('.child');
// console.log(x1);

// const api1 = jQuery('.test')
// api1.addClass('blue')

// const api2 = api.fin('.child').addClass('red')
// api1.addClass('green')

jQuery('test')
    .find('child')
    .addClass('red')
    .addClass('blue')
    .addClass('green')
    .end()
    .addClass('yellow')