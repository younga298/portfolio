/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 350,
            "density": {
                "enable": true,
                "value_area": 3000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 120
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 800,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/**
 * typing
 * ***/ 
var typingBool = false;
var typingIdx = 0;
var typingTxt = $(".typing-txt").text();
typingTxt = typingTxt.split("");
var tyInt;

function typing() {
  if (typingIdx < typingTxt.length) {
    $(".typing").append(typingTxt[typingIdx]);
    typingIdx++;
  } else {
    clearInterval(tyInt);
    typingIdx = 0;
    $(".typing").html("");
    setTimeout(function() {
      tyInt = setInterval(typing, 130); // 3초 후 타이핑 효과 다시 실행
    }, 800);
  }
}

if (typingBool == false) {
  typingBool = true;
  tyInt = setInterval(typing, 200);
}



/**로딩 2-3초 후 오퍼시티 적용**/
window.addEventListener('load', function() {
    const pageTransition = document.querySelector('#particles-js');
    pageTransition.style.display = 'block';
  
    setTimeout(function() {
      pageTransition.style.opacity = '0';
    //   pageTransition.style.transform = 'translateY(50px)';
    //   pageTransition.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
  
      setTimeout(function() {
        pageTransition.style.display = 'none';
      }, 700);
    }, 5500);
  });



// 1초마다 로딩바 진행 상황 업데이트
let progress = document.querySelector('progress');
let value = 0;
setInterval(() => {
  value += 10;
  progress.value = value;
  if (value >= 100) {
    value = 0;
  }
}, 300);