'use client'; // if you need client-side interactivity (optional)

export default function WhatsAppButton() {
  const phone = '7600727603';
  const message = 'Hi, I have a query about your footwear.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg"
    >
      {/* WhatsApp icon */}
      💬
    </a>
  );
}