/**
 * BizzLoop Forms Service (js/forms-service.js)
 * Robust client-side validation, webhook dispatch, and success modal handlers
 */

const BizzLoopForms = (() => {
  'use strict';

  function handleDemoSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader-2 animate-spin mr-1"></i> Processing...';
    }

    const formData = new FormData(form);
    formData.append('submission_type', 'Demo Consultation');
    formData.append('submitted_at', new Date().toISOString());

    const webhookUrl = (typeof BizzLoopConfig !== 'undefined' && BizzLoopConfig.endpoints.formWebhook)
      ? BizzLoopConfig.endpoints.formWebhook
      : '';

    const sendPromise = webhookUrl
      ? fetch(webhookUrl, { method: 'POST', mode: 'no-cors', body: formData })
      : Promise.resolve();

    sendPromise
      .catch(err => console.warn('Form dispatch notice:', err))
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        form.reset();
        if (typeof BizzLoopModals !== 'undefined') {
          BizzLoopModals.close('demoModal');
          BizzLoopModals.open('successModal');
        }
      });
  }

  function handleCareerSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader-2 animate-spin mr-1"></i> Submitting Application...';
    }

    const formData = new FormData(form);
    formData.append('submission_type', 'Career Candidate Application');
    formData.append('submitted_at', new Date().toISOString());

    const webhookUrl = (typeof BizzLoopConfig !== 'undefined' && BizzLoopConfig.endpoints.formWebhook)
      ? BizzLoopConfig.endpoints.formWebhook
      : '';

    const sendPromise = webhookUrl
      ? fetch(webhookUrl, { method: 'POST', mode: 'no-cors', body: formData })
      : Promise.resolve();

    sendPromise
      .catch(err => console.warn('Career form dispatch notice:', err))
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        form.reset();
        if (typeof BizzLoopModals !== 'undefined') {
          BizzLoopModals.close('careerAppModal');
          BizzLoopModals.close('careersModal');
          BizzLoopModals.open('successModal');
        }
      });
  }

  function handlePartnerSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader-2 animate-spin mr-1"></i> Registering...';
    }

    const formData = new FormData(form);
    formData.append('submission_type', 'Partner Network Application');
    formData.append('submitted_at', new Date().toISOString());

    const webhookUrl = (typeof BizzLoopConfig !== 'undefined' && BizzLoopConfig.endpoints.formWebhook)
      ? BizzLoopConfig.endpoints.formWebhook
      : '';

    const sendPromise = webhookUrl
      ? fetch(webhookUrl, { method: 'POST', mode: 'no-cors', body: formData })
      : Promise.resolve();

    sendPromise
      .catch(err => console.warn('Partner form dispatch notice:', err))
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        form.reset();
        if (typeof BizzLoopModals !== 'undefined') {
          BizzLoopModals.close('affiliateModal');
          BizzLoopModals.open('successModal');
        }
      });
  }

  return {
    handleDemoSubmit,
    handleCareerSubmit,
    handlePartnerSubmit
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BizzLoopForms;
}
