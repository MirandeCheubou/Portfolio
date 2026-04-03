        const cursor = document.getElementById('cursor');
        const blur = document.getElementById('cursor-blur');

        document.addEventListener('mousemove', (e) => {
            // Position du point central
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Position de la lueur avec un léger décalage (smooth)
            blur.style.left = e.clientX + 'px';
            blur.style.top = e.clientY + 'px';
        });

        // Effet de grossissement sur les liens
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(3)';
                cursor.style.background = 'white';
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = '#38bdf8';
            });
        });
