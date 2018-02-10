       const canvas = document.querySelector('#draw');
       const ctx = canvas.getContext('2d');
       var i;

       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       ctx.lineJoin = 'round';
       ctx.lineCap = 'round';
       ctx.lineWidth = 10;
       ctx.strokeStyle = '#ff0000';

       let isDrawing = false;
       let lastX = 0;
       let lastY = 0;
       let hue = 0;

       function slowDraw(e) {
         setInterval(draw(e), 1000);
       };

       function draw(e) {
           if(!isDrawing) return;
           console.log(e);
        //   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
           ctx.beginPath();
           ctx.moveTo(lastX, lastY);
           ctx.stroke();
           [lastX, lastY] = [e.offsetX, e.offsetY];
           ctx.lineTo(e.offsetX, e.offsetY);
        //   hue++;
       }

      canvas.addEventListener('mousemove', slowDraw)
      canvas.addEventListener('mousemove', () => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
      canvas.addEventListener('mousedown', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      });
      canvas.addEventListener('mouseup', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      });
        //canvas.addEventListener('mouseup', (e) => {
        //    isDrawing = true;
        //    [lastX, lastY] = [e.offsetX, e.offsetY];
        //});
        //canvas.addEventListener('mouseup', () => isDrawing =false)
        //canvas.addEventListener('mousemout', () => isDrawing = false)
