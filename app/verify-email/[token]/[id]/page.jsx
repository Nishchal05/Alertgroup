"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const VerifyEmailPage = () => {
  const { token, id } = useParams(); // Retrieves the token and id from the dynamic route.
  const [statusMessage, setStatusMessage] = useState('Verifying your email...');

  console.log('Token:', token, 'ID:', id); // Debugging to check if token and id are correctly fetched.

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch('/api/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, id }),
        });

        const data = await res.json();
        if (res.status === 200) {
          setStatusMessage('Your email has been successfully verified!');
        } else {
          setStatusMessage(data.message || 'Verification failed.');
        }
      } catch (error) {
        setStatusMessage('An error occurred during verification.');
      }
    };

    if (token && id) {
      verifyEmail();
    } else {
      setStatusMessage('Invalid verification link.');
    }
  }, [token, id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Verify Your Email Address
          </h2>
          <p className="text-gray-600 mb-6">{statusMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
