document.addEventListener('DOMContentLoaded', function() {
   
    const stars = document.querySelectorAll('.ratings i');
   
    const ratingInput = document.querySelector('input[name="rating"]');

  
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            
            ratingInput.value = index + 1;
           
            stars.forEach(s => s.classList.remove('active'));
            
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
        });
    });
});