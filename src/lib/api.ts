export const submitContactForm = async (data: { name: string; email: string; message: string }) => {
    // TODO: Update this URL to point to your actual backend endpoint
    // e.g. const response = await fetch('http://localhost:5000/contact', ...)
    
    // For now, this is a mock implementation that resolves successfully.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: "Message sent successfully!" });
        }, 1000);
    });
};
