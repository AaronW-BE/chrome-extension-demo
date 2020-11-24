console.log('js loaded')


$(document).ready(function () {
  console.log('start jquery scope')

  $(document).on('keydown', function () {
    init();
  });
});


function init() {
  const questionTitle = $(".question-title")[0];
  console.log(questionTitle.innerText)

  clickOption('发生非法干扰行为时，机组成员必须与行为人先行谈判');
  // const questionContainer = $(".questionContainer")

  // const rows = $(questionContainer).find('.select .row');

  // const options = rows.slice(1);
  // let option = $(options[0]).find('.col-xs-10 .option .radio-inline');
  // $(option).trigger('click');
}

function doNext() {
  console.log('do next');
}

function clickOption(content) {
  const rows = $(".questionContainer").find('.select .row');
  const options = rows.slice(1);
  for (let i = 0; i < options.length; i++) {
    // get option label
    let text = $(options[i]).find('.question-option-label')[0].innerText;
    console.log(text);
    if (content === text) {
      let option = $(options[i]).find('.col-xs-10 .option .radio-inline');
      $(option).trigger('click');
      doNext();
      return;
    }
  }
}