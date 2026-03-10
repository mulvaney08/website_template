'use client';

import { FormEvent, useMemo, useState } from 'react';
import { siteConfig } from '@/data/site-config';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  location: '',
  message: ''
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { businessProfile } = siteConfig;

  const validate = (data: FormState) => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!data.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!data.phone.trim()) nextErrors.phone = 'Please enter a phone number.';
    if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!data.service.trim()) nextErrors.service = 'Please select a service.';
    if (!data.location.trim()) nextErrors.location = 'Please add your location or postcode.';
    if (!data.message.trim() || data.message.trim().length < 20) {
      nextErrors.message = 'Please include at least 20 characters about your request.';
    }

    return nextErrors;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      service: true,
      location: true,
      message: true
    });

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 750));

    setSubmitted(true);
    setIsSubmitting(false);
    setValues(initialState);
    setTouched({});
  };

  const formHint = useMemo(
    () => 'Most quote requests receive a response within one business day. For urgent electrical issues, call now.',
    []
  );

  const baseFieldClass = 'w-full rounded-xl border bg-white px-3 py-2.5 text-sm transition-colors';

  const fieldClass = (key: keyof FormState) => {
    const showError = touched[key] && errors[key];
    const showValid = touched[key] && !errors[key] && values[key].trim().length > 0;

    if (showError) return `${baseFieldClass} border-red-400 bg-red-50`;
    if (showValid) return `${baseFieldClass} border-emerald-400 bg-emerald-50/40`;

    return `${baseFieldClass} border-slate-300`;
  };

  const onBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(values));
  };

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-brand-navy">{businessProfile.ctaLabels.requestQuote}</h2>
        <p className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-navy">Professional local response</p>
      </div>

      <p className="mt-3 text-sm text-brand-slate">Share a few details so our team can provide a realistic next step and expected timeline.</p>
      <p className="mt-2 text-xs text-brand-slate">{formHint}</p>

      {submitted ? (
        <div className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 p-4" role="status">
          <p className="text-sm font-semibold text-emerald-800">Thanks, your demo quote request has been submitted.</p>
          <p className="mt-1 text-sm text-emerald-800">
            We usually follow up quickly with a call or email to confirm scope and preferred appointment window.
          </p>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-navy">
            Name
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            onBlur={() => onBlur('name')}
            className={fieldClass('name')}
            autoComplete="name"
            placeholder="Your name"
          />
          {touched.name && errors.name ? <p className="mt-1 text-xs text-red-700">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-navy">
            Phone
          </label>
          <input
            id="phone"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            onBlur={() => onBlur('phone')}
            className={fieldClass('phone')}
            autoComplete="tel"
            placeholder="Mobile or landline"
          />
          {touched.phone && errors.phone ? <p className="mt-1 text-xs text-red-700">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-navy">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            onBlur={() => onBlur('email')}
            className={fieldClass('email')}
            autoComplete="email"
            placeholder="name@example.com"
          />
          {touched.email && errors.email ? <p className="mt-1 text-xs text-red-700">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-brand-navy">
            Service needed
          </label>
          <select
            id="service"
            value={values.service}
            onChange={(e) => setValues({ ...values, service: e.target.value })}
            onBlur={() => onBlur('service')}
            className={fieldClass('service')}
          >
            <option value="">Select a service</option>
            {/* Customize service options in data/site-config.ts -> businessProfile.services */}
            {businessProfile.services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
          {touched.service && errors.service ? <p className="mt-1 text-xs text-red-700">{errors.service}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className="mb-1 block text-sm font-medium text-brand-navy">
            Location / postcode
          </label>
          <input
            id="location"
            value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
            onBlur={() => onBlur('location')}
            className={fieldClass('location')}
            autoComplete="address-level2"
            placeholder={`e.g. ${businessProfile.serviceArea.areas[0]}`}
          />
          {touched.location && errors.location ? <p className="mt-1 text-xs text-red-700">{errors.location}</p> : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          onBlur={() => onBlur('message')}
          className={fieldClass('message')}
          placeholder="Include problem details, property type, and best time to contact you"
        />
        {touched.message && errors.message ? <p className="mt-1 text-xs text-red-700">{errors.message}</p> : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-brand-slate">Demo flow: submissions stay local and are not sent to a backend service.</p>
        <button type="submit" disabled={isSubmitting} className="btn-base btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
          {isSubmitting ? 'Submitting...' : businessProfile.ctaLabels.getQuote}
        </button>
      </div>
    </form>
  );
}
