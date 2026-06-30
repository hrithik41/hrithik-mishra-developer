export const submitContactForm = async (data: { name: string; email: string; message: string }): Promise<{ status: string; message: string }> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send message.");
    }

    return { status: "success", message: result.message || "Message sent successfully!" };
  } catch (error: any) {
    console.error("submitContactForm error:", error);
    throw error;
  }
};

