(() => {
  const circle = [];
  let svg = [];

  const buildSvg = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const container = document.getElementById('container');
    container.appendChild(svg);
    return svg;
  };

  const buildCircle = () => {
    const circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle',
    );
    circle.setAttribute('width', '500');
    circle.setAttribute('height', '500');
    circle.setAttribute('cx', '50%');
    circle.setAttribute('cy', '50%');
    circle.setAttribute('r', '50');
    svg.appendChild(circle);
    return circle;
  };

  const kickOff = (circle) => {
    let rando;
    setInterval(() => {
      const pix = vhTOpx(40);
      rando = Math.round(Math.random(100) * (pix / 2));
      circle.setAttribute('r', rando);
      circle.setAttribute('fill', `hsla(${rando}, 50%, 50%, 0.35)`);
    }, 440);
  };

  const relocate = ({
    clientX, clientY, preventDefault, target,
  }) => {
    const container = document.getElementById('container');
    container.style.transform = `translate(${clientX - 250}px, ${
      clientY - 500
    }px)`;
  };

  const listenForPokes = () => {
    document.addEventListener('click', relocate, false);
  };

  const activate = (idx) => {
    svg = buildSvg();
    svg.setAttribute('width', '100vh');
    svg.setAttribute('height', '100vh');

    for (let i = 0; i < 15; i++) {
      circle[i] = buildCircle(idx);
      setTimeout(() => {
        kickOff(circle[i]);
      }, 220);
    }

    listenForPokes();
    showMsg();
  };

  activate();

  function vhTOpx(value) {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    const x = w.innerWidth || e.clientWidth || g.clientWidth;
    const y = w.innerHeight || e.clientHeight || g.clientHeight;

    const result = (y * value) / 100;
    return result;
  }

  function showMsg() {
    const msg = `
         ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄
        ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌
         ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀█░▌
                  ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌            ▐░▌         ▐░▌  ▐░▌       ▐░▌
                  ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄    ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄█░▌
         ▄▄▄▄▄▄▄▄▄█░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌    ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌
        ▐░░░░░░░░░░░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌
        ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌          ▐░▌▐░▌                ▐░▌ ▐░▌      ▐░▌       ▐░▌
        ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌          ▐░▌▐░█▄▄▄▄▄▄▄▄▄        ▐░▐░▌       ▐░▌       ▐░▌
        ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          ▐░▌▐░░░░░░░░░░░▌        ▐░▌        ▐░▌       ▐░▌
         ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀            ▀  ▀▀▀▀▀▀▀▀▀▀▀          ▀          ▀         ▀
        `;
    console.log(msg);
  }
})();
