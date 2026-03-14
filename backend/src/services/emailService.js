// Mock Email Service - Logs to console instead of sending real emails
const sendOTP = async (email, otp) => {
    try {
      console.log('\n========== OTP EMAIL NOTIFICATION ==========');
      console.log(`📧 Email: ${email}`);
      console.log(`🔐 OTP Code: ${otp}`);
      console.log(`⏱️  Valid for: 10 minutes`);
      console.log(`🔗 Copy this OTP to verify your identity`);
      console.log('===========================================\n');
      
      return {
        success: true,
        message: 'OTP sent successfully (mock)',
        email: email,
        otp: otp,
      };
    } catch (error) {
      console.error('Email service error:', error);
      throw error;
    }
  };
  
  module.exports = {
    sendOTP,
  };
  
