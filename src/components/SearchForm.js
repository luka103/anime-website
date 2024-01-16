import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import '../styles/SearchForm.css';

const schema = yup.object().shape({
  search: yup.string().required('Please enter a search term'),
});

const SearchForm = ({ onSearch }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: async (data) => {
        try {
          await schema.validate(data, { abortEarly: false });
          return { values: data, errors: {} };
        } catch (validationErrors) {
          const formattedErrors = validationErrors.inner.reduce((acc, err) => {
            acc[err.path] = err.message;
            return acc;
          }, {});
          return { values: {}, errors: formattedErrors };
        }
      },
    });
  
    const onSubmit = (data) => {
      onSearch(data.search);
    };
  
    return (
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`input-field ${errors.search ? 'input-error' : ''}`}
          {...register('search')}
          placeholder="Search for anime"
        />
        {errors.search && <p className="error-message">{errors.search}</p>}
        <button className="search-button" type="submit">Search</button>
      </form>
    );
  };
  
  export default SearchForm;
