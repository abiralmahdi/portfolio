function ContactButton({ text, isLoading }) {
  return (
    <button
      type="submit"
      disabled={isLoading} // disables while sending
      className={`contact-btn ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Sending..." : text}
    </button>
  );
}

export default ContactButton;