window.onload = function() {
    const gif3 = document.getElementById('gif3');
    const gif2 = document.getElementById('gif2');
    const gif1 = document.getElementById('gif1');
    const content = document.getElementById('content');

    gif3.style.transform = 'translateX(50vw)';
    gif3.style.transition = 'transform 2s ease';

    setTimeout(() => {
        gif3.style.display = 'none';
        gif2.style.display = 'block';
        gif2.style.transform = 'translateX(50vw)'; 
    }, 2000);

    setTimeout(() => {
        gif2.style.display = 'none';
        gif1.style.display = 'block';
        gif1.style.transform = 'translateX(50vw)';
    }, 4000); 

    setTimeout(() => {
        gif1.style.transform = 'translateX(-100%)';
        gif1.style.transition = 'transform 2s ease';
    }, 4100); 

    setTimeout(() => {
        content.classList.remove('hidden');
    }, 6100); 
};
