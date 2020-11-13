// jQuery = function(selector) {
//     const elements = document.querySelectorAll(selector)
//     const api = {
//         addClass(className) {
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.add(className)
//             }
//             return this;
//         }
//     }
//     return api;
// }

// jQuery = function(selectororArray) {
//     let elements
//     if (typeof selectororArray === 'string') {
//         elements = document.querySelectorAll(selectororArray)
//     } else if (selectororArray instanceof Array) {
//         elements = selectororArray
//     }
// }

// return {
//     find(selector) {
//         oldApi: selectororArray.oldApi;
//         for (let i = 0; i < e.elements.length; i++) {
//             const elements2 = Array.from(elements[i].querySelectorAll(selector))
//             array = array.concat(elements2)
//         }
//         array.oldApi = this;
//         return jQuery(array)
//     },
//     end() {
//         return this.oldApi
//     },
//     addClass(className) {
//         for (let i = 0; i < elements.length; i++) {
//             const element = elements[i]
//             elements.classList.add(className)
//         }
//         const newApi = jQuery(array)
//         return newApi;
//     }
// }


jQuery = function(selectOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectororArray instanceof Array) {
        elements = selectorOrArray
    }
}

return {
    find(selector) {
        oldApi: selectorOrArray.oldApi;
        for (let i = 0; i < e.elements.length; i++) {
            const elements2 = Array.from(elements[i].querySelectorAll(selector))
            array = array.concat(elements2)
        }
        array.oldApi = this;
        return jQuery(array)
    },
    end() {
        return this.oldApi
    },
    addClass(className) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i]
            elements.classList.add(className)
        }
        const newApi = jQuery(array)
        return newApi;
    }
}