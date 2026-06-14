
document.querySelectorAll('form').forEach(f=>{
 f.addEventListener('submit',e=>{
   e.preventDefault();
   window.location.href='thank-you.html';
 });
});
