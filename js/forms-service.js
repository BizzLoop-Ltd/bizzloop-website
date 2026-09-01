/**
 * BizzLoop Forms Service (js/forms-service.js)
 * Enterprise-grade client validation, UTM parameter extraction,
 * file validation, and standardized feedback states.
 */

const BizzLoopForms = (() => {
  'use strict';

  function getUtmMetadata() {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      page_url: window.location.href,
      referrer: document.referrer || '',
      timestamp: new Date().toISOString()
    };
  }

  function validateResumeFile(fileInput) {
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      return { valid: true, file: null };
    }
    const file = fileInput.files[0];
    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const maxSizeBytes = 5 * 1024 * 1024; // 5 MB

    const ext = file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      return {
        valid: false,
        error: 'Invalid file format. Please upload a PDF or Word document (.pdf, .doc, .docx).'
      };
    }

    if (file.size > maxSizeBytes) {
      return {
        valid: false,
        error: 'File size exceeds the 5MB limit. Please upload a smaller document.'
      };
    }

    return { valid: true, file: file };
  }

  async function submitPayload(formType, data) {
    const utm = getUtmMetadata();
    const payload = {
      formType,
      ...data,
      metadata: utm
    };

    console.log(`[BizzLoop Forms] Dispatching ${formType}:`, payload);

    const webhookUrl = (typeof BizzLoopConfig !== 'undefined' && BizzLoopConfig.endpoints && BizzLoopConfig.endpoints.formWebhook)
      ? BizzLoopConfig.endpoints.formWebhook
      : '';

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'no-cors'
        });
      } catch (err) {
        console.warn('[BizzLoop Forms] Network dispatch notice (safe fallback):', err);
      }
    } else {
      // Safe simulation fallback
      await new Promise(resolve => setTimeout(resolve, 600));
    }

    return { success: true };
  }

  // Form 1: Book Demo / Consultation
  async function handleDemoSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader-2 animate-spin mr-1"></i> Processing...';
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await submitPayload('Demo Consultation', data);

      // Check if inline success state exists
      const inlineSuccess = document.getElementById('demoSuccessState') || document.getElementById('contactSuccessState');
      if (inlineSuccess) {
        form.style.display = 'none';
        inlineSuccess.style.display = 'block';
      } else if (typeof BizzLoopModals !== 'undefined') {
        BizzLoopModals.close('demoModal');
        BizzLoopModals.open('successModal');
      } else {
        alert("Thank you! We've received your request and will get back to you shortly.");
      }
      form.reset();
    } catch (err) {
      alert('Something went wrong. Please try again or contact BizzLoop directly.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  }

  // Form 2: Career Candidate Application
  async function handleCareerSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fileInput = form.querySelector('input[type="file"]');
    if (fileInput) {
      const fileCheck = validateResumeFile(fileInput);
      if (!fileCheck.valid) {
        alert(fileCheck.error);
        return;
      }
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader-2 animate-spin mr-1"></i> Submitting Application...';
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await submitPayload('Career Candidate Application', data);

      const inlineSuccess = document.getElementById('careerSuccessState');
      if (inlineSuccess) {
        form.style.display = 'none';
        inlineSuccess.style.display = 'block';
      } else if (typeof BizzLoopModals !== 'undefined') {
        BizzLoopModals.close('careerAppModal');
        BizzLoopModals.open('successModal');
      } else {
        alert("Thank you! We've received your application and will review it shortly.");
      }
      form.reset();
    } catch (err) {
      alert('Something went wrong. Please try again or contact BizzLoop directly.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  }

  // Form 3: Partner / Affiliate Application
  async function handleAffiliateSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader-2 animate-spin mr-1"></i> Submitting Partner Application...';
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await submitPayload('Partner Network Application', data);

      const inlineSuccess = document.getElementById('affiliateSuccessState');
      if (inlineSuccess) {
        form.style.display = 'none';
        inlineSuccess.style.display = 'block';
      } else if (typeof BizzLoopModals !== 'undefined') {
        BizzLoopModals.close('affiliateModal');
        BizzLoopModals.open('successModal');
      } else {
        alert("Thank you! We've received your partner application and will get back to you shortly.");
      }
      form.reset();
    } catch (err) {
      alert('Something went wrong. Please try again or contact BizzLoop directly.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  }

  return {
    handleDemoSubmit,
    handleCareerSubmit,
    handleAffiliateSubmit,
    handlePartnerSubmit: handleAffiliateSubmit,
    validateResumeFile
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopForms;
}
