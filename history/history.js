        document.querySelectorAll('.interval').forEach(interval => {
            interval.addEventListener('mouseenter', () => {
                const segId = interval.dataset.segment;
                if (segId) {
                    document.getElementById(segId).classList.add('active');
                }
            });
            interval.addEventListener('mouseleave', () => {
                const segId = interval.dataset.segment;
                if (segId) {
                    document.getElementById(segId).classList.remove('active');
                }
            });
        });
