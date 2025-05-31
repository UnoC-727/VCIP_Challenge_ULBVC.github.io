// Show "Back to top" button on scroll
window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Console for debug
console.log("VCIP 2025 CLIC-like site loaded!");
