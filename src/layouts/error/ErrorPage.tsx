import Lottie from 'lottie-react';
import errorAnimastion from '../../images/error.json';

const ErrorPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '250px',
        }}
      >
        <Lottie animationData={errorAnimastion} loop={true} />
      </div>
    </div>
  );
};

export default ErrorPage;
