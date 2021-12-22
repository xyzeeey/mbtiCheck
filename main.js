const mbtiInfo = {
    entp: {
        value: 1,
        point: {
            entj: 2, entp: 4, intj: 3, intp: 3, estj: 4, esfj: 4, istj: 5, isfj: 5, enfj: 3, enfp: 2, infj: 3, infp: 3, estp: 2, esfp: 1, istp: 2, isfp: 1,
        },
    },
    entj: {
        value: 2,
        point: {
            entj: 1, entp: 2, intj: 3, intp: 3, estj: 2, esfj: 1, istj: 2, isfj: 1, enfj: 2, enfp: 3, infj: 3, infp: 5, estp: 4, esfp: 4, istp: 3, isfp: 5,
        },
    },
    enfp: {
        value: 3,
        point: {
            entj: 3, entp: 2, intj: 3, intp: 3, estj: 3, esfj: 4, istj: 5, isfj: 5, enfj: 2, enfp: 3, infj: 3, infp: 2, estp: 1, esfp: 1, istp: 1, isfp: 3,
        },
    },
    enfj: {
        value: 4,
        point: {
            entj: 2, entp: 3, intj: 3, intp: 5, estj: 1, esfj: 3, istj: 1, isfj: 2, enfj: 4, enfp: 2, infj: 3, infp: 3, estp: 4, esfp: 4, istp: 5, isfp: 3,
        },
    },
    estp: {
        value: 5,
        point: {
            entj: 4, entp: 2, intj: 5, intp: 2, estj: 1, esfj: 3, istj: 3, isfj: 3, enfj: 4, enfp: 1, infj: 5, infp: 1, estp: 3, esfp: 2, istp: 3, isfp: 3,
        },
    },
    estj: {
        value: 6,
        point: {
            entj: 2, entp: 4, intj: 2, intp: 4, estj: 3, esfj: 2, istj: 3, isfj: 3, enfj: 1, enfp: 4, infj: 1, infp: 5, estp: 1, esfp: 3, istp: 3, isfp: 5,
        },
    },
    esfp: {
        value: 7,
        point: {
            entj: 4, entp: 1, intj: 5, intp: 1, estj: 3, esfj: 2, istj: 3, isfj: 3, enfj: 4, enfp: 1, infj: 5, infp: 2, estp: 2, esfp: 2, istp: 3, isfp: 3,
        },
    },
    esfj: {
        value: 8,
        point: {
            entj: 1, entp: 4, intj: 1, intp: 5, estj: 2, esfj: 3, istj: 3, isfj: 3, enfj: 3, enfp: 4, infj: 2, infp: 3, estp: 3, esfp: 2, istp: 5, isfp: 3,
        },
    },
    intp: {
        value: 9,
        point: {
            entj: 3, entp: 3, intj: 2, intp: 3, estj: 4, esfj: 5, istj: 3, isfj: 5, enfj: 5, enfp: 3, infj: 4, infp: 2, estp: 2, esfp: 1, istp: 2, isfp: 1,
        },
    },
    intj: {
        value: 10,
        point: {
            entj: 3, entp: 3, intj: 3, intp: 2, estj: 2, esfj: 1, istj: 3, isfj: 1, enfj: 3, enfp: 3, infj: 3, infp: 4, estp: 5, esfp: 5, istp: 3, isfp: 4,
        },
    },
    infp: {
        value: 11,
        point: {
            entj: 5, entp: 3, intj: 4, intp: 2, estj: 5, esfj: 3, istj: 4, isfj: 3, enfj: 3, enfp: 2, infj: 1, infp: 3, estp: 1, esfp: 2, istp: 1, isfp: 2,
        },
    },
    infj: {
        value: 12,
        point: {
            entj: 3, entp: 3, intj: 3, intp: 4, estj: 1, esfj: 2, istj: 1, isfj: 2, enfj: 3, enfp: 3, infj: 3, infp: 1, estp: 5, esfp: 5, istp: 5, isfp: 3,
        },
    },
    istp: {
        value: 13,
        point: {
            entj: 3, entp: 2, intj: 3, intp: 2, estj: 3, esfj: 5, istj: 2, isfj: 4, enfj: 5, enfp: 1, infj: 5, infp: 2, estp: 3, esfp: 3, istp: 2, isfp: 2,
        },
    },
    istj: {
        value: 14,
        point: {
            entj: 2, entp: 5, intj: 3, intp: 3, estj: 3, esfj: 3, istj: 3, isfj: 2, enfj: 1, enfp: 5, infj: 1, infp: 4, estp: 3, esfp: 3, istp: 2, isfp: 4,
        },
    },
    isfp: {
        value: 15,
        point: {
            entj: 5, entp: 1, intj: 4, intp: 1, estj: 5, esfj: 3, istj: 4, isfj: 1, enfj: 3, enfp: 3, infj: 3, infp: 2, estp: 3, esfp: 3, istp: 2, isfp: 3,
        },
    },
    isfj: {
        value: 16,
        point: {
            entj: 1, entp: 5, intj: 1, intp: 5, estj: 3, esfj: 3, istj: 2, isfj: 2, enfj: 2, enfp: 5, infj: 2, infp: 3, estp: 3, esfp: 3, istp: 4, isfp: 1,
        },
    },
}

const pointInfo = {
    point1: {
        title: '맞지않는 관계',
        desc: '두 사람 모두가 무조건 양보해야하고 공감이 필요함.',
        bgcolor: '#d32e42'
    },
    point2: {
        title: '갈등 관계',
        desc: '서로 타협하고 성숙해져야 유지될 수 있음.',
        bgcolor: '#ff8245'
    },
    point3: {
        title: '잠재적 관계',
        desc: '끈끈한 관계를 위해서는 서로의 가치에 변화를 찾아야함.',
        bgcolor: '#29ad5c'
    },
    point4: {
        title: '끈끈한 관계',
        desc: '어려움이 있을 수 있지만 타협점을 찾음.',
        bgcolor: '#4da1dc'
    },
    point5: {
        title: '이상적인 관계',
        desc: '문제가 잘 해결되고 관계가 자연스럽게 발전됨.',
        bgcolor: '#296ce4'
    },
}

const btnResultElem = document.querySelector('.btn-result');
const resultReElem = document.querySelector('.result-mbti');
const resultElem = document.querySelector('.result');
const resultMbtiElem = document.querySelector('.result-mbti');
const resultTitleElem = document.querySelector('.result-title');
const resultTitleDesc = document.querySelector('.result-desc');
const wellTypeElem = document.querySelector('.well-type');
const badTypeElem = document.querySelector('.bad-type');

const selectorTop = document.querySelector('.box-top .selector');
const selectorBtm = document.querySelector('.box-btm .selector');

let myMbti = '';
let otherMbti = '';


function handleOnChangeTop(e) {
    // 선택된 데이터의 텍스트값 가져오기
    myMbti = e.options[e.selectedIndex].text.toLowerCase();
    // return myMbti;
}

function handleOnChangeBtm(e) {
    // 선택된 데이터의 텍스트값 가져오기
    otherMbti = e.options[e.selectedIndex].text.toLowerCase();
    // return;
}

function result() {
    wellTypeElem.innerHTML = '';
    badTypeElem.innerHTML = '';
    let mbtiPoint = 'point' + mbtiInfo[myMbti]['point'][otherMbti];
    let keys = Object.keys(mbtiInfo[myMbti]['point']);  // 키 값만 배열로 저장

    for (let i in keys) {
        if (mbtiInfo[myMbti]['point'][keys[i]] == 5) {
            console.log(keys[i]);
            wellTypeElem.innerHTML += `<span>${keys[i].toUpperCase()}</span>`
        }
        if (mbtiInfo[myMbti]['point'][keys[i]] == 1) {
            badTypeElem.innerHTML += `<span>${keys[i].toUpperCase()}</span>`
        }
    }

    resultMbtiElem.textContent = `${myMbti.toUpperCase()} x ${otherMbti.toUpperCase()}`;
    resultTitleElem.textContent = pointInfo[mbtiPoint]['title'];
    resultTitleDesc.textContent = pointInfo[mbtiPoint]['desc'];
    resultElem.style.background = pointInfo[mbtiPoint]['bgcolor'];
    resultElem.style.transform = 'translateX(0)';
}

function btnClose() {
    resultElem.style.transform = 'translateX(-100%)';
}

btnResultElem.addEventListener('click', result);