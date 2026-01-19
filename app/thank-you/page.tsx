'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ThankYouPage() {
  const router = useRouter();

  const handleBookCall = () => {
    window.open('https://action.sunlife.ca/AppointmentRendezvous/s/prospr-home?language=en_CA&WT.ac=en-ca%3Aweb%3Aslf_internal%3Aprosprweb%3Aprosprweb', '_blank');
  };

  const handleReturnHome = () => {
    router.push('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f7fa',
      fontFamily: "'Lato', sans-serif"
    }}>
      {/* Main Content */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
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
          {/* Logo */}
          <Image
            src="/IMAGE-TOP-OVERLAY-Mob-2-.png"
            alt="PolicyAdvisor | Sun Life"
            width={400}
            height={50}
            className="thank-you-logo"
            style={{
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto 30px'
            }}
          />
          <style jsx global>{`
            .thank-you-logo {
              height: 45px;
            }
            @media (max-width: 768px) {
              .thank-you-logo {
                height: 31px !important;
              }
            }
          `}</style>

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

          {/* Title */}
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1a365d',
            marginBottom: '14px',
            letterSpacing: '-0.5px'
          }}>
            You're all set
          </h1>

          {/* Body Copy */}
          <p style={{
            fontSize: '18px',
            color: '#4a5568',
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            We've received your request.
          </p>


          {/* Phone Number */}
          <p style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a365d',
            marginBottom: '8px'
          }}>
            Need quotes in a hurry?
          </p>
          <p style={{
            fontSize: '16px',
            color: '#4a5568',
            marginBottom: '28px'
          }}>
            Call{' '}
            <a 
              href="tel:+18886019980" 
              style={{ 
                color: '#013946', 
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              +1-888-601-9980
            </a>
            {' '}or Book a time with a licensed advisor.
          </p>

          {/* Primary CTA - Book a Call */}
          <button
            onClick={handleBookCall}
            style={{
              background: '#FFB803',
              color: '#013946',
              border: 'none',
              padding: '14px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              marginBottom: '12px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#e5a503';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#FFB803';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Book a Call
          </button>

          {/* Secondary CTA - Return to Home */}
          <button
            onClick={handleReturnHome}
            style={{
              background: 'transparent',
              color: '#013946',
              border: '2px solid #013946',
              padding: '12px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              width: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#013946';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#013946';
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
