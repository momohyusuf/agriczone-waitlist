'use client';
import React from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';
import Collapse from '@mui/material/Collapse';
import FindOutMoreModal from '../FindOutMoreModal';
import { Button } from '@mui/material';

const Form = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    first_name: '',
    last_name: 'null',
    waitlist_id: 8419,
  });
  const [errorText, setErrorText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [openFindOutMore, setOpenFindOutMore] = React.useState(false);

  const postRequest = async () => {
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.first_name.trim()) {
      setErrorText('Full name is required');
      return;
    }

    if (!formData.email.trim() || !emailCheck.test(formData.email.trim())) {
      setErrorText('Email is required');
      return;
    }
    setLoading(true);
    try {
      await axios.post('https://api.getwaitlist.com/api/v1/waiter', formData);

      setLoading(false);
      setIsSuccess(true);
      setFormData({
        email: '',
        first_name: '',
        last_name: 'null',
        waitlist_id: 8419,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorText('');
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <FindOutMoreModal
        openFindOutMore={openFindOutMore}
        setOpenFindOutMore={setOpenFindOutMore}
      />
      <div className="space-y-10 px-4 py-4 lg:px-16 md:h-screen items-center justify-center">
        <Collapse in={isSuccess}>
          <Alert
            severity="success"
            onClose={() => {
              setIsSuccess(false);
            }}
          >
            <AlertTitle>Success</AlertTitle>
            <strong>Thank You for joining our waitlist!</strong> Your support
            means the world to us, and we're truly grateful for your trust in
            our vision. We'll keep you updated with exclusive sneak peeks and
            exciting news. Your feedback is important to us, and we can't wait
            to hear your thoughts once you explore our platform.
          </Alert>
        </Collapse>

        <Image
          src="/agric_zone_logo.png"
          height={100}
          width={150}
          alt="agric zone logo"
        />
        <div>
          <h1 className="text-4xl mb-6">Join our waitlist</h1>
          <p className="text-xl text-slate-700">
            Join our waitlist and be among the pioneers to experience our
            groundbreaking Agricultural platform.
          </p>
        </div>
        <form className="flex flex-col items-center justify-center gap-y-10">
          <TextField
            id="filled-basic"
            label="Full name"
            variant="outlined"
            color="success"
            size="small"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputs}
            required
            fullWidth
            sx={{
              bgcolor: 'white',
              borderRadius: '0.5rem',
            }}
            error={errorText === 'Full name is required'}
            helperText={
              errorText === 'Full name is required' && 'Full name is required'
            }
          />
          <TextField
            id="filled-basic"
            color="success"
            label="Email"
            variant="outlined"
            size="small"
            name="email"
            value={formData.email}
            onChange={handleInputs}
            required
            sx={{
              bgcolor: 'white',
              borderRadius: '0.5rem',
            }}
            error={errorText === 'Email is required'}
            helperText={
              errorText === 'Email is required' && 'Email is required'
            }
            fullWidth
          />
          <LoadingButton
            loading={loading}
            size="large"
            variant="contained"
            color="success"
            className="bg-green-700"
            fullWidth
            style={{
              textTransform: 'capitalize',
              letterSpacing: '0.050rem',
            }}
            onClick={postRequest}
          >
            Join waitlist
          </LoadingButton>
        </form>
        <div className="hidden md:block space-y-2 text-slate-700">
          <p>
            Want to partner with us on this amazing journey?{' '}
            <Button
              onClick={() => setOpenFindOutMore(true)}
              color="success"
              style={{
                textTransform: 'capitalize',
              }}
            >
              Find out more
            </Button>{' '}
          </p>
          <p>
            Send us a mail{' '}
            <a
              className="text-green-600 hover:text-green-800 transition-all duration-300"
              href="mailto:info@agriczone.com"
            >
              info@agriczone.com
            </a>
          </p>
          <p> &#xA9; 2023</p>
        </div>
      </div>
    </>
  );
};

export default Form;
