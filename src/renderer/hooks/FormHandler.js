import React, { useState } from 'react';
import { nestedIfCaseHandle } from '../utils/commonfunctions';


const useFormHandler = (initialFormValues, validateForm, submitCallback) => {
  const [formData, setFormData] = useState({ ...initialFormValues });
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [disabledFields, setDisabledFields] = useState({});
  const [isFieldRender, setIsFieldRender] = useState({});
  const [allFields, setFields] = useState([]);
  const [focusedInput, setFocusedInput] = useState('');
  const [bluredInput, setBluredInput] = useState('');

  const setFieldValue = (fieldName, fieldValue) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: fieldValue }));
  };
  const setFieldsValue = (values) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
  };
  const setFieldError = (fieldName, fieldError) => {
    setErrors((prevData) => ({ ...prevData, [fieldName]: fieldError }));
  };

  const setFieldDisabled = (fieldName, isDisabled) => {
    setDisabledFields((prevData) => ({ ...prevData, [fieldName]: isDisabled }));
  };

  const setFieldsDisabled = (isDisabled, fields = []) => {
    const fieldsWithNewDisbaleStatus = fields.reduce((obj, value) => {
      obj[value] = isDisabled;
      return obj;
    }, {});
    setDisabledFields((prevData) => ({ ...prevData, ...fieldsWithNewDisbaleStatus }));
  };

  const getFieldValue = (fieldName) => {
    return formData[fieldName];
  };

  const handleRender = (fieldName, renderStatus) => {
    setIsFieldRender((prevFieldsStatus) => ({
      ...prevFieldsStatus,
      [fieldName]: renderStatus
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFields = (fields) => {
    const { name, disabled, type } = fields;
    if (type !== 'parent') {
      setFields((prevFields) => [...prevFields, fields]);
      setDisabledFields((prevData) => ({ ...prevData, [name]: disabled ? true : false }));
    }
  };

  const handleBlur = (e, field) => {
    const { name, value } = e.target;
    setBluredInput(name);
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true
    }));
    let requiredFieldsError = {};
    if (isFieldRender[name] && field.required && !value) {
      requiredFieldsError = {
        [name]: nestedIfCaseHandle(field?.errorMsg, field?.errorMsg, 'Field is required')
      };
    } else {
      requiredFieldsError = {
        [name]: ''
      };
    }
    setErrors((errors) => ({ ...errors, ...requiredFieldsError }));
    setFocusedInput('');
  };
  const handleFocus = (e) => {
    setBluredInput('');
    const { name } = e.target;
    setFocusedInput(name);
  };
  const validationRequiredField = () => {
    let requiredFieldsError = {};
    allFields.forEach((fieldVal) => {
      if (fieldVal.required && !formData[fieldVal.name] && isFieldRender[fieldVal.name]) {
        requiredFieldsError = {
          ...requiredFieldsError,
          [fieldVal.name]: nestedIfCaseHandle(
            fieldVal?.errorMsg,
            fieldVal?.errorMsg,
            'Field is required'
          )
        };
      } else {
        requiredFieldsError = {
          ...requiredFieldsError,
          [fieldVal.name]: ''
        };
      }
    });
    const requiredError = { ...errors, ...requiredFieldsError };
    setErrors(requiredError);
    return requiredError;
  };

  const validationFunctionInFields = () => {
    let validationFuncError = {};
    allFields.forEach((fieldVal) => {
      if (Array.isArray(fieldVal.validation) && fieldVal.validation.length) {
        const { name, validation } = fieldVal;
        validation.forEach((test) => {
          const result = test.func(formData[name], formData);
          if (result && formData[name] && isFieldRender[name]) {
            validationFuncError = { ...validationFuncError, [name]: test.message };
          }
        });
      }
    });
    return validationFuncError;
  };

  const validateFormWoSumit = () => {
    const requiredError = validationRequiredField();
    const definedFuncErrors = validationFunctionInFields();
    const formErrors = typeof validateForm === 'function' ? validateForm(formData) : {};
    const errorList = { ...requiredError, ...definedFuncErrors, ...formErrors };
    setErrors({ ...errorList });
  };
  const handleSubmit = (e, onSuccess) => {
    if (typeof e === 'object') {
      e.preventDefault();
    }
    if (typeof submitCallback === 'function') {
      submitCallback();
    }
    const requiredError = validationRequiredField();
    const definedFuncErrors = validationFunctionInFields();
    const formErrors = typeof validateForm === 'function' ? validateForm(formData) : {};
    const errorList = { ...requiredError, ...definedFuncErrors, ...formErrors };
    const errorSet = new Set(Object.values(errorList));
    const filterError = [...errorSet].filter((x) => x);
    if (filterError.length < 1) {
      const filteredFormData = Object.keys(formData)
        .filter((key) => isFieldRender[key] !== false)
        .reduce((res, key) => Object.assign(res, { [key]: formData[key] }), {});
      onSuccess(filteredFormData);
    } else {
      setErrors({ ...errorList });
    }
  };
  const resetForm = (resetValue = {}) => {
    setFormData(resetValue);
    setErrors({});
    setTouchedFields({});
    setFocusedInput('');
    setBluredInput('');
  };
  const formKit = {
    errors,
    disabledFields,
    handleChange,
    handleBlur,
    handleFields,
    handleRender,
    handleFocus
  };
  return {
    formData,
    touchedFields,
    focusedInput,
    bluredInput,
    resetForm,
    validateFormWoSumit,
    handleSubmit,
    setFieldValue,
    setFieldsValue,
    getFieldValue,
    setFieldError,
    setFieldDisabled,
    setFieldsDisabled,
    formKit
  };
};

export default useFormHandler;
