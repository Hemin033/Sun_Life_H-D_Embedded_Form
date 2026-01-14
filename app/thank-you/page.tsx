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
      background: '#f5f7fa',
      fontFamily: "'Lato', sans-serif"
    }}>
      {/* Header */}
      <header style={{
        width: '100%',
        backgroundColor: '#F9FAFA',
        padding: '12px 0',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <Image
            src="/IMAGE-TOP-OVERLAY-Mob-2-.png"
            alt="PolicyAdvisor | Sun Life"
            width={400}
            height={50}
            style={{
              width: 'auto',
              height: '40px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
      </header>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 70px)',
        padding: '40px 20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '45px 54px',
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          {/* Success Icon */}
          <div style={{
            width: '72px',
            height: '72px',
            background: '#22c55e',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 25px'
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          {/* Thank You Message */}
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1a365d',
            marginBottom: '14px',
            letterSpacing: '-0.5px'
          }}>
            Thank You!
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '11px',
            fontWeight: '500'
          }}>
            We've received your request successfully.
          </p>

          <p style={{
            fontSize: '16px',
            color: '#718096',
            marginBottom: '29px',
            lineHeight: '1.6'
          }}>
            A licensed Sun Life advisor will contact you shortly to discuss your life insurance options.
          </p>

          {/* Countdown Box */}
          <div style={{
            background: '#e6f4f5',
            borderRadius: '10px',
            padding: '16px 22px',
            marginBottom: '22px'
          }}>
            <p style={{
              fontSize: '15px',
              color: '#4a5568',
              margin: 0
            }}>
              Redirecting you back in <strong style={{ color: '#0d6b6e' }}>{countdown}</strong> second{countdown !== 1 ? 's' : ''}...
            </p>
          </div>

          {/* Return Button */}
          <button
            onClick={() => router.push('/')}
            style={{
              background: '#FFB803',
              color: 'white',
              border: 'none',
              padding: '13px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#e5a503';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#FFB803';
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
