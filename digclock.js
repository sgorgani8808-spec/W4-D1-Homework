    (function(){
      const el = document.getElementById('timebar');
      function tick(){
        const now = new Date();
        el.textContent = 'Your Current Local Time: ' + now.toLocaleTimeString();
      }
      tick();
      setInterval(tick, 1000);
    })();