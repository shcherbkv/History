function initTimeline() {
  const intervals = document.querySelectorAll('.interval');
  const markers = document.querySelectorAll('.marker');
  const segments = document.querySelectorAll('.segment');

  function clearHighlight() {
    markers.forEach(m => m.classList.remove('active'));
    segments.forEach(s => s.classList.remove('active'));
  }

  intervals.forEach(interval => {
    interval.addEventListener('mouseenter', () => {
      clearHighlight();

      // Подсветка сегмента
      const segId = interval.dataset.segment;
      const segment = document.querySelector(`.segment[data-segment="${segId}"]`);
      if (segment) segment.classList.add('active');

      // Подсветка начальной и конечной дат
      const startId = interval.dataset.startMarker;
      const endId = interval.dataset.endMarker;
      if (startId) {
        const startMarker = document.getElementById(startId);
        if (startMarker) startMarker.classList.add('active');
      }
      if (endId) {
        const endMarker = document.getElementById(endId);
        if (endMarker) endMarker.classList.add('active');
      }
    });

    interval.addEventListener('mouseleave', clearHighlight);
  });
}