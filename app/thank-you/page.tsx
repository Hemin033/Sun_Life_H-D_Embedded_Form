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
        borderRadius: '24px',
        padding: '60px 50px',
        maxWidth: '600px',
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
        <div style={{ marginBottom: '30px' }}>
          <Image
            src="/Sun-Life-Financial-Logo.png"
            alt="Sun Life Financial"
            width={180}
            height={45}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Success Icon */}
        <div style={{
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)'
        }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Thank You Message */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#1a1a2e',
          marginBottom: '15px',
          letterSpacing: '-0.5px'
        }}>
          Thank You!
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#555',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Your request has been submitted successfully.<br />
          A Sun Life advisor will contact you shortly.
        </p>

        {/* Info Box */}
        <div style={{
          background: '#FFF8E0',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          border: '1px solid #FFE082'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: 0
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
          gap: '10px',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: '700',
            color: '#1a1a2e'
          }}>
            {countdown}
          </div>
          <span style={{ fontSize: '14px', color: '#888' }}>
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
            padding: '14px 40px',
            borderRadius: '8px',
            fontSize: '16px',
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
          fontSize: '13px',
          color: '#999',
          marginTop: '30px'
        }}>
          Questions? Call us at <a href="tel:1-888-601-9980" style={{ color: '#FFC107', textDecoration: 'none', fontWeight: '600' }}>1-888-601-9980</a>
        </p>
      </div>
    </div>
  );
}
