document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll animations for car cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.car-card').forEach(card => {
        observer.observe(card);
    });

    // Phone click enhancement
    const phoneLink = document.querySelector('.phone');
    phoneLink.addEventListener('click', (e) => {
        // Already has tel: link, but add copy to clipboard fallback
        navigator.clipboard.writeText('0717-460-979').then(() => {
            alert('Phone number copied! Or call directly.');
        });
    });

    // Booking form handler
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation (already HTML5 required)
        if (new Date(data.returnDate) <= new Date(data.pickupDate)) {
            alert('Return date must be after pickup date.');
            return;
        }
        
        // Success message with summary
        const summary = `
            🎉 Booking Request Received!
            Car: ${data.car}
            Dates: ${data.pickupDate} to ${data.returnDate}
            Customer: ${data.name} (${data.email}, ${data.phone})
            
            We'll contact you within 1 hour to confirm!
            Call 0717-460-979 for immediate booking.
        `;
        alert(summary);
        form.reset();
    });
});
