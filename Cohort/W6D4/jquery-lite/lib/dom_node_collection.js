class DOMNodeCollection {
  constructor (array) {
    this.htmlEls = array;
  }

  html (string) {
    if (string) {
      this.htmlEls.map((el) => {
        el.innerHTML = string;
      });
    } else {
      return this.htmlEls[0].innerHTML;
    }
  }

  empty () {
    this.htmlEls.map((el) => {
      el.innerHTML = "";
    });
  }

  append (item) {
    //$l collection, htmlEl, string
    //for each el, append outerHTML of the item
    // to the innerHTML of the el
    this.htmlEls.map((el) => {
      el.innerHTML += item;
    });
  }

  attr (name, value) {
    //pass item with {name: value, attrVal: value}

    this.htmlEls.map((el) => {
      if (value === undefined){
        el.removeAttribute(name);
      } else {
        el.setAttribute(name, value);
      }
    });
  }

  addClass(cName) {
    this.htmlEls.map((el) => {
      if (el.className.length === 0) {
        el.className += cName;
      } else {
        el.className += " " + cName;
      }
    });
  }

  removeClass(cName) {
    this.htmlEls.map((el) => {
      if (cName === undefined) {
        el.removeAttribute("class");
      } else {
        el.classList.remove(cName);
      }
    });
  }

  children() {
    // let childNode = new DOMNodeCollection(this.children);
    // return childNode.htmlEls;

    const arr = this.htmlEls.map((el) => {
       return el.children;
    });
    return new DOMNodeCollection(arr);

  }

  parent() {
    const arr = [];
    this.htmlEls.forEach((el) => {
      if (!arr.includes(el.parentNode)) {
        arr.push(el.parentNode);
      }
    });
    return new DOMNodeCollection(arr);
  }

  find(item) {
    const arr = [];
    this.htmlEls.forEach((el) => {
      arr.push(el.querySelectorAll(item));
    });
    return new DOMNodeCollection(arr);
  }

  remove() {
    this.empty();
    this.htmlEls.map((el) => {
      el.remove();
    });
  }

  on(eventType, callback) {
    this.htmlEls.map((el) => {
      el.callback = callback;
      el.addEventListener(eventType, callback(event));
    });
  }

  off(eventType) {
    this.htmlEls.map((el) => {
      el.removeEventListener(eventType, el.callback);
    });
  }
}

module.exports = DOMNodeCollection;
