		var imagePaths = [
		"images/image-01.jpg", "images/image-02.jpg", "images/image-03.jpg", "images/image-04.jpg", "images/image-05.jpg", "images/image-07.jpg", "images/image-08.jpg"
		];
		var showCanvas = null;
		var showCanvasCtx = null;
		var img = document.createElement('img');
		var currentImage = 0;

		window.onload = function () {
			showCanvas = document.getElementById('showCanvas');
			showCanvasCtx = showCanvas.getContext('2d');

			img.setAttribute('width', '600');
			img.setAttribute('height', '400');
			switchImage();

			setInterval(switchImage,3000);
		}

		function switchImage() {
			img.setAttribute('src',imagePaths[currentImage++]);
			img.onload = function() {
				if (currentImage >= imagePaths.length)
					currentImage = 0;

				showCanvasCtx.drawImage(img, 0,0,600,400);
			}
		}

		function switchImage() {
			img.setAttribute('src',imagePaths[currentImage++]);
			if (currentImage >= imagePaths.length)
				currentImage = 0;
				
			showCanvasCtx.globalAlpha = 0.1;
			revealTimer = setInterval(revealImage,100);
		}
			
		function revealImage() {
			showCanvasCtx.save();
			showCanvasCtx.drawImage(img,0,0,592,596);
			showCanvasCtx.globalAlpha += 0.1;
			if (showCanvasCtx.globalAlpha >= 1.0)
				clearInterval(revealTimer);
			showCanvasCtx.restore();
		}