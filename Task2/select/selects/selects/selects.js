window.onload = () => {
  //selects
  const selects = document.querySelectorAll(".custom-drop-select");
  //selects ids
  let selectId = 0;
  //objects helpers
  const stateClasses = {
    "DISABLED": "disabled",
    "ACTIVE": "active",
    "SHOW": "show",
    "HIDE": "hide",
  };

  //code shortcuts
  function toggleItemClass(item, givenClass) {
    item.classList.toggle(givenClass);
  }

  function setItemClass(item, givenClass) {
    item.classList.add(givenClass);
  }

  function removeItemClass(item, givenClass) {
    item.classList.remove(givenClass);
  }

  function isDisabled(item) {
    return item.classList.contains(stateClasses.DISABLED);
  }

  //toggles select
  function toggleSelect(selectHeader, dropdownContainer, dropdownList) {
    toggleItemClass(selectHeader, stateClasses.ACTIVE);
    toggleItemClass(dropdownContainer, stateClasses.SHOW);
    toggleItemClass(dropdownList, stateClasses.SHOW);
  }

  //closes select
  function closeSelect(selectHeader, dropdownContainer, dropdownList) {
    removeItemClass(selectHeader, stateClasses.ACTIVE);
    removeItemClass(dropdownContainer, stateClasses.SHOW);
    removeItemClass(dropdownList, stateClasses.SHOW);
  }

  //says if select at "Lite(text only)" version of itself
  function isLite(currentSelect) {
    console.log(currentSelect);
    return currentSelect.classList.contains('lite');
  }

  //closes every custom select except current one
  function closeAllSelects(currentSelect) {
    selects.forEach(select => {
      if (currentSelect !== select) {
        let event = new Event('closeSelect', {
          bubbles: true
        });
        select.dispatchEvent(event);
      }
    });
  }

  //makes select open and closes other custom selects
  function initToggle(currentSelect, selectHeader, dropdownContainer, dropdownList) {
    currentSelect.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isDisabled(selectHeader)) {
        return;
      } else {
        toggleSelect(selectHeader, dropdownContainer, dropdownList);
        closeAllSelects(currentSelect);
      }
    });
  }

  //makes select closed
  function initClose(currentSelect, selectHeader, dropdownContainer, dropdownList) {
    currentSelect.addEventListener('closeSelect', () => {
      closeSelect(selectHeader, dropdownContainer, dropdownList);
    });
  }

  //makes select work
  function initItems(selectHeader, selectedItemBody, dropdownList, options) {
    dropdownList.addEventListener('click', (e) => {
      options.forEach(option => {
        if (option.classList.contains('selected')) {
          removeItemClass(option, "selected");
        }
        if (e.target.closest('div.select-item') == option) {
          let clickedOnBody = option.querySelector('.item-body');
          selectedItemBody.innerHTML = clickedOnBody.innerHTML;
          selectHeader.title = option.title;
          setItemClass(option, "selected");
        }
      });
    });
  }

  function initSearch(search, options) {
    search.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    search.addEventListener('input', (e) => {
      options.forEach(option => {
        let itemText = option.querySelector('.item-text');
        if (!itemText.innerText.toLowerCase().includes(search.value.toLowerCase())) {
          setItemClass(option, "fade-away");
          setTimeout(setItemClass, 300, option, "hide");
        } else {
          removeItemClass(option, "fade-away");
          setTimeout(removeItemClass, 300, option, "hide");
        }
      });
    });
  }

  //call all selet inits
  function initSelect(currentSelect) {
    let isSelectLite = isLite(currentSelect);

    //every select has one header containing "start state" or "displayed item"
    let selectHeader = currentSelect.querySelector('.custom-select');
    let selectedItemBody = selectHeader.querySelector('.select-item').querySelector('.item-body');
    //the other part is dropdown list of options that are stored in container
    let dropdownContainer = currentSelect.querySelector('.dropdown-container');
    let dropdownList = dropdownContainer.querySelector('.dropdown-list');
    //array of items
    let options = dropdownList.querySelectorAll('.select-item');
    //search input
    console.log(isSelectLite);
    if (!isSelectLite) {
      console.log("must be not lite");
      var search = dropdownList.querySelector('.search-holder').getElementsByTagName('input')[0];
    }
    //register click listener on custom select
    initToggle(currentSelect, selectHeader, dropdownContainer, dropdownList);
    initClose(currentSelect, selectHeader, dropdownContainer, dropdownList);
    initItems(selectHeader, selectedItemBody, dropdownList, options);
    console.log(isSelectLite);
    if (!isSelectLite) {
      console.log("must be not lite");
      initSearch(search, options);
    }
  }

  //make selects work
  selects.forEach(currentSelect => {
    initSelect(currentSelect);
    selectId++;
  });

  //register click on document to close all selects
  document.addEventListener('click', (e) => {
    closeAllSelects(null);
  });


}
