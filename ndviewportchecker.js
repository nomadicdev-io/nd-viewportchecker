// DVL Viewportchecker 1.0
// Developed by nomadicDev
// https://github.com/devilcoder181

// Options
// activeClass: 'active-section',
// endClass: 'end-section',
// offset: 0,
// classback: {
//     init: ()=>{},
//     onenter: ()=> {},
//     onleave: ()=> {}
// }

class NDViewportchecker {

    constructor(target, options){
        this.target = target;
        this.options = options;
        this.initFun = this.init();
    }

    optionFunc() {

        if(!this.options){
            this.options = {
                activeClass: 'active-section',
                endClass: 'end-section',
                offset: 0
            }
        }

        let {activeClass, endClass, offset} =  this.options;

        activeClass = (activeClass == undefined) ? 'active-section' : activeClass;
        endClass = (endClass == undefined) ? 'end-section' : endClass;
        offset = (offset == undefined) ? 0 : offset;
        offset = (offset < 0) ? 0 : offset;
        offset = (offset > 100) ? 100 : offset;

        return {activeClass, endClass, offset}
    }

    getSectonCalc() {
        const t = document.querySelectorAll(this.target);
        let sarray = new Array();
        let top = new Array();
        
        t.forEach((e, i)=> {
            let elArea = e.getBoundingClientRect();
            let el_top =  elArea.top;
            
            sarray.push(e);
            top.push(el_top);
        })

        return top;
    }

    scrollFunc(scrolltarget) {
        let gs = this.getSectonCalc();
    }

    init() {

        let wy = window.scrollY;

        window.addEventListener(scroll)

        gs.forEach((e)=> {
           if(wy >= e){
            console.log(true)
           }
        })

    }

}

let v = new NDViewportchecker('section', {
    activeClass: 'alan-active',
});
