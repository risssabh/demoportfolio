// Animation for the header
anime({
    targets: 'header',
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
  });
  
  // Animation for sections
  anime({
    targets: '.about, .projects, .contact',
    translateY: [100, 0],
    opacity: [0, 1],
    delay: anime.stagger(300),
    duration: 1500,
    easing: 'easeOutExpo'
  });
  
  // Animation for project images
  anime({
    targets: '.project img',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 1000,
    easing: 'easeOutExpo'
  });
  
  // Animation for social links
  anime({
    targets: '.social-links a',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 1000,
    easing: 'easeOutExpo'
  });
  