import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActionButtons = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919959059632'; // +91 99590 59632 in international format
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    const phoneNumber = '+919959059632';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        aria-label="Call +91 99590 59632"
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        aria-label="Chat on WhatsApp +91 99590 59632"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FloatingActionButtons;
