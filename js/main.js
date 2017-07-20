$(document).ready(function() {
  var
      currentTotal = null,
      currentOperator = ' ',
      input = $('#numInput'),
        calcBtn = $('#calcBtn'),
       plus = $('#calcBtnPlus'),
       minus = $('#calcBtnMinus'),
       multiply = $('#calcBtnMult'),
       divide = $('#calcBtnDvd'),
       clear = $('#calcBtnClr')



      //This computes the Answer
  $('#calcBtn').on('click', function() {
    var currentInput = Number(input.val())

    if (currentOperator === '+') {
      currentTotal = currentTotal + currentInput
      }
    else if (currentOperator === '-') {
      currentTotal = currentTotal - currentInput
    }
    else if (currentOperator === '/') {
      currentTotal = currentTotal / currentInput
    }
    else if (currentOperator === '*') {
      currentTotal = currentTotal * currentInput
    }

    input.val(currentTotal)
    currentTotal = null
  })
// The Buttons
  $('#calcBtnPlus').on('click', function(){
    var currentInput = Number(input.val())
    currentOperator = '+'

    if (currentTotal === null) {
      currentTotal = currentInput
    }
    else {
      currentTotal = currentTotal + currentInput
    }


    input.val('')

  })

  $('#calcBtnMinus').on('click', function(){
    var currentInput = Number(input.val())

    currentOperator = '-'
    if (currentTotal === null) {
      currentTotal = currentInput
    }
    else {
       currentTotal = currentTotal - currentInput
    }


    input.val('')
  })
  $('#calcBtnMult').on('click', function(){
    var currentInput = Number(input.val())
    currentOperator = '*'

    if (currentTotal === null) {
      currentTotal = currentInput
    }
    else {
      currentTotal = currentTotal * currentInput
    }

    input.val('')
  })
  $('#calcBtnDvd').on('click', function(){
    var currentInput = Number(input.val())
    currentOperator = '/'

    if (currentTotal === null) {
      currentTotal = currentInput
    }
    else {
      currentTotal = currentTotal / currentInput
    }
    input.val('')
  })

  $('#calcBtnClr').on('click', function(){
    input.val('')
    currentTotal = null
  })

  $('.calcBtn').on('click', function(){
    input.val(input.val() + this.value)
  })

})
