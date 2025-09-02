import { useState } from "react";

interface ValidationRules {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface FormField {
  value: string;
  error: string;
  rules: ValidationRules;
}

interface FormData {
  [key: string]: FormField;
}

export const useFormValidation = (initialData: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (fieldName: string, value: string, rules: ValidationRules): string => {
    if (rules.required && !value.trim()) {
      return "This field is required";
    }

    if (rules.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Must be no more than ${rules.maxLength} characters`;
    }

    return "";
  };

  const updateField = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
        error: validateField(fieldName, value, prev[fieldName].rules)
      }
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const updatedFormData = { ...formData };

    Object.keys(formData).forEach(fieldName => {
      const field = formData[fieldName];
      const error = validateField(fieldName, field.value, field.rules);
      updatedFormData[fieldName] = { ...field, error };
      if (error) isValid = false;
    });

    setFormData(updatedFormData);
    return isValid;
  };

  const resetForm = () => {
    const resetData = { ...formData };
    Object.keys(resetData).forEach(fieldName => {
      resetData[fieldName] = { ...resetData[fieldName], value: "", error: "" };
    });
    setFormData(resetData);
  };

  return {
    formData,
    updateField,
    validateForm,
    resetForm,
    isSubmitting,
    setIsSubmitting
  };
};