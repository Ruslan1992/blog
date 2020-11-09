import cls from './Contact.module.scss';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = async (data, e) => {
    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'XSRF-TOKEN': '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(response.ok){
      e.target.reset();
      alert('Message Send');
    }
  };

  return (
    <div className='col-12 col-lg-8'>
      <form className={cls.ContactForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.formGroup}>
          <input
            type='text'
            name='name'
            placeholder='YOUR NAME'
            ref={register}
          />
        </div>
        <div className={cls.formGroup}>
          <input
            type='email'
            name='email'
            placeholder='YOUR EMAIL'
            ref={register({
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address',
              },
            })}
          />
          <span className={cls.error}>
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className={cls.formGroup + ' mr-0'}>
          <input
            type='text'
            name='subject'
            placeholder='YOUR SUBJECT'
            ref={register}
          />
        </div>
        <div className={cls.formGroupMessage}>
          <textarea
            name='message'
            placeholder='YOUR MESSAGE'
            ref={register({
              required: true,
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
            })}
          />
          <span className={cls.error}>
            {errors.message && errors.message.message}
          </span>
        </div>
        <button type='submit' className='btn btn-yellow'>
          Send Message
        </button>
      </form>
    </div>
  );
};
