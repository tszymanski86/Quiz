var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var score = 0;
document.querySelector("#check").addEventListener("click", checkTheAnswers);

function checkTheAnswers() {
  DATA.forEach(function (answer, i) {
    var questions = document.querySelectorAll("input[name=question_" + i + "]");
    questions.forEach(function (q) {
      q.disabled = true;
      if (q.value == answer.correctAnswer) {
        q.parentElement.classList.add("goodAnswer");
        if (q.checked) {
          score++;
        }
      } else if (q.checked) {
        q.parentElement.classList.add("badAnswer");
      }
    });
  });
  document.querySelector("#verdict").innerHTML = "Tw\xF3j wynik: " + score + " pkt.</br></br>Okazuje si\u0119, \u017Ce nasz \u015Bwiat, pomimo swoich niedoskona\u0142o\u015Bci, jest w znacznie lepszym stanie, ni\u017C si\u0119 spodziewamy.";
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth"
  });
}

var DATA = [{
  question: "1. Ile dziewcząt kończy szkołę podstawową w krajach o niskich dochodach?",
  answers: {
    a: "20%",
    b: "40%",
    c: "60%"
  },
  correctAnswer: "c"
}, {
  question: "2. Gdzie mieszka większość ludzi na Ziemi?",
  answers: {
    a: "W krajach o niskich dochodach",
    b: "W krajach o średnich dochodach",
    c: "W krajach o wysokich dochodach"
  },
  correctAnswer: "b"
}, {
  question: "3. W ciągu ostatnich 20 lat liczba ludzi żyjących w skrajnym ubóstwie...?",
  answers: {
    a: "uległa niemal podwojeniu",
    b: "pozostała na tym samym poziomie",
    c: "zmniejszyła się prawie o połowę"
  },
  correctAnswer: "c"
}, {
  question: "4. Jaka jest obecnie średnia długość życia?",
  answers: {
    a: "50 lat",
    b: "60 lat",
    c: "70 lat"
  },
  correctAnswer: "c"
}, {
  question: "5. Na świecie żyje około 2 miliardów dzieci w wieku 0-15 lat. Ile dzieci będzie w 2100 roku według szacunków Organizacji Narodów Zjednoczonych?",
  answers: {
    a: "4 miliardy",
    b: "3 miliardy",
    c: "2 miliardy"
  },
  correctAnswer: "c"
}, {
  question: "6. ONZ przewiduje, że do roku 2100 populacja na świecie zwiększy się o kolejne 4 miliardy ludzi. Z jakiego powodu?",
  answers: {
    a: "wzrośnie liczba dzieci poniżej 15 roku życia",
    b: "wzrośnie liczba osób dorosłych w wieku 15-74 lat",
    c: "wzrośnie liczba osób w podeszłym wieku powyżej 74 roku życia"
  },
  correctAnswer: "b"
}, {
  question: "7. Jak zmieniła się liczba zgonów spowodowanych klęskami żywiołowymi?",
  answers: {
    a: "zwiększyła się ponaddwukrotnie",
    b: "pozostała bez zmian",
    c: "zmniejszyła się o ponad połowę"
  },
  correctAnswer: "c"
}, {
  question: "8. Obecnie na świecie żyje około 7 miliardów ludzi. Która z map najtrafniej ukazuje rozmieszczenie populacji? (Każda z postaci odpowiada jednemu miliardowi ludzi)",
  imgSrc: "img/maps.png",
  answers: {
    a: "A",
    b: "B",
    c: "C"
  },
  correctAnswer: "a"
}, {
  question: "9. Jaki procent rocznych dzieci na świecie poddano szczepieniom?",
  answers: {
    a: "20%",
    b: "50%",
    c: "80%"
  },
  correctAnswer: "c"
}, {
  question: "10. Biorąc pod uwagę światową średnią, edukacja przeciętnego trzydziestoletniego mężczyzny trwa 10 lat. Ile lat trwa edukacja kobiety w tym samym wieku?",
  answers: {
    a: "9 lat",
    b: "6 lat",
    c: "3 lata"
  },
  correctAnswer: "a"
}, {
  question: "11. W roku 1996 tygrysy, pandy wielkie oraz czarne nosorożce znajdowały się na liście zwierząt zagrożonych. Które spośród tych gatunków obecnie sklasyfikowano jako bardziej zagrożone wyginięciem?",
  answers: {
    a: "wszystkie trzy",
    b: "jeden",
    c: "żaden"
  },
  correctAnswer: "c"
}, {
  question: "12. Jaki procent ludzi na świecie ma w jakimś stopniu dostęp do elektryczności?",
  answers: {
    a: "20%",
    b: "50%",
    c: "80%"
  },
  correctAnswer: "c"
}, {
  question: "13. Klimatolodzy uważają, że przez następne 100 lat średnia temperatura na Ziemi:",
  answers: {
    a: "wzrośnie",
    b: "pozostanie bez zmian",
    c: "spadnie"
  },
  correctAnswer: "a"
}];

var QuestionItem = function QuestionItem(props) {
  var item = props.item,
      questionNumber = props.questionNumber;

  return React.createElement(
    "fieldset",
    null,
    React.createElement(
      "div",
      { className: "legend" },
      item.question
    ),
    React.createElement(
      "div",
      { className: "answers" },
      item.imgSrc && React.createElement("img", { src: item.imgSrc }),
      Object.entries(item.answers).map(function (_ref, i) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return React.createElement(
          "div",
          { className: "answer", key: i },
          React.createElement(
            "label",
            null,
            React.createElement("input", {
              type: "radio",
              name: "question_" + questionNumber,
              value: k
            }),
            v
          )
        );
      })
    )
  );
};

var Quiz = function Quiz(props) {
  return React.createElement(
    "ul",
    null,
    props.data.map(function (item, i) {
      return React.createElement(
        "li",
        { key: i },
        React.createElement(QuestionItem, { item: item, questionNumber: i })
      );
    })
  );
};

ReactDOM.render(React.createElement(Quiz, { data: DATA }), document.getElementById("quiz"));