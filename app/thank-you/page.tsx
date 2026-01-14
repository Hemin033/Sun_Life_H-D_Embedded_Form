'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFF8E0 0%, #FFFDF5 50%, #FFF8E0 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Lato', sans-serif"
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '35px 40px',
        maxWidth: '520px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative top accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)'
        }} />

        {/* Sun Life Logo */}
        <div style={{ marginBottom: '20px' }}>
          <Image
            src="/Sun-Life-Financial-Logo.png"
            alt="Sun Life Financial"
            width={450}
            height={113}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Success Icon */}
        <div style={{
          width: '70px',
          height: '70px',
          background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)'
        }}>
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Thank You Message */}
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a1a2e',
          marginBottom: '10px',
          letterSpacing: '-0.5px'
        }}>
          Thank You!
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#555',
          marginBottom: '20px',
          lineHeight: '1.5'
        }}>
          Your request has been submitted successfully.<br />
          A Sun Life advisor will contact you shortly.
        </p>

        {/* Info Box */}
        <div style={{
          background: '#FFF8E0',
          borderRadius: '10px',
          padding: '14px 16px',
          marginBottom: '20px',
          border: '1px solid #FFE082'
        }}>
          <p style={{
            fontSize: '13px',
            color: '#666',
            margin: 0,
            lineHeight: '1.5'
          }}>
            <strong style={{ color: '#333' }}>What's next?</strong><br />
            Our licensed advisor will review your information and reach out within 24-48 hours to discuss your health & dental insurance options.
          </p>
        </div>

        {/* Countdown */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '15px'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px',
            fontWeight: '700',
            color: '#1a1a2e'
          }}>
            {countdown}
          </div>
          <span style={{ fontSize: '13px', color: '#888' }}>
            Redirecting to homepage...
          </span>
        </div>

        {/* Manual Return Button */}
        <button
          onClick={() => router.push('/')}
          style={{
            background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
            color: '#1a1a2e',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 193, 7, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 193, 7, 0.3)';
          }}
        >
          Return to Homepage
        </button>

        {/* Contact Info */}
        <p style={{
          fontSize: '12px',
          color: '#999',
          marginTop: '20px'
        }}>
          Questions? Call us at <a href="tel:1-888-601-9980" style={{ color: '#FFC107', textDecoration: 'none', fontWeight: '600' }}>1-888-601-9980</a>
        </p>
      </div>
    </div>
  );
}
